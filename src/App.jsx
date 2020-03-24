import React, { useState, useEffect } from 'react';
import produce from 'immer';
import { shuffle, differenceBy } from 'lodash';
import { useQuery, useLocalStorage } from './helpers';
import AppContainer from './components/AppContainer';
import AppProgress from './components/AppProgress';
import Card from './components/Card';
import AppStart from './components/AppStart';
import AppResult from './components/AppResult';
import { LoadIndicator } from './components/Indicators';

const App = () => {
  const query = useQuery();
  const question = query.get('q');
  const [answered, setAnswered] = useLocalStorage('jq_answered', []);

  const [isLoading, setIsLoading] = useState(true);
  const [isStart, setIsStart] = useState(!question);
  const [state, setState] = useState({
    questions: [],
    cards: [],
    correct: 0,
    total: 0
  });

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/yevhverb/jq/gh-pages/static/data/questions.json'
    )
      .then(res => res.json())
      .then(questions => {
        const total = questions.length;
        const isCorrectQuestion = question > 0 && question <= questions.length;

        if (isCorrectQuestion) {
          setAnswered(
            produce(answered(), draft => {
              const idx = draft.findIndex(e => e.id === Number(question));
              if (idx > -1) {
                draft.splice(idx, 1);
              }
            })
          );
        }

        questions = shuffle(differenceBy(questions, answered(), 'id'));

        if (isCorrectQuestion) {
          const idx = questions.findIndex(q => q.id === Number(question));
          questions = [
            questions[idx],
            ...questions.slice(0, idx),
            ...questions.slice(idx + 1)
          ];
        }

        const [first, ...others] = questions;

        setIsLoading(false);

        setState({
          ...state,
          total,
          questions: others,
          cards: [...answered(), first],
          correct: answered()?.length
            ? answered().reduce((a, e) => (e.variant.isCorrect ? a + 1 : a), 0)
            : 0
        });
      });
  }, []);

  const handleStart = () => setIsStart(false);

  const handleSwipe = answer => {
    setState(
      produce(state, draft => {
        if (answer?.variant) {
          if (answer.variant.isCorrect) draft.correct += 1;
        } else {
          const last = draft.cards.length - 1;

          draft.questions.push(draft.cards[last]);
          draft.cards.length -= 1;
        }
        draft.cards.push(draft.questions[0]);
        draft.questions.shift();
      })
    );

    if (answer?.variant) {
      setAnswered(
        produce(answered(), draft => {
          draft.push(answer);
        })
      );
    }
  };

  const handleReset = () => {
    setAnswered([]);
    window.location.reload();
  };

  const { cards, correct, total } = state;
  const percent = (cards.length / total) * 100;

  return (
    <AppContainer>
      {isLoading && <LoadIndicator />}
      {!isLoading && isStart && (
        <AppStart
          {...{ handleStart, handleReset }}
          total={total}
          answered={cards.length - 1}
        />
      )}
      {!isLoading && !isStart && <AppProgress percent={percent} />}
      {!isLoading &&
        !isStart &&
        state.cards
          .slice(-1)
          .map(card =>
            card ? (
              <Card {...card} handleSwipe={handleSwipe} key={card.id} />
            ) : (
              <AppResult {...{ correct, total, handleReset }} key={0} />
            )
          )}
    </AppContainer>
  );
};

export default App;
