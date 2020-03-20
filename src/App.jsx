import React, { useState, useEffect } from 'react';
import produce from 'immer';
import { shuffle } from 'lodash';
import AppContainer from './components/AppContainer';
import AppProgress from './components/AppProgress';
import Card from './components/Card';
import AppStart from './components/AppStart';
import AppResult from './components/AppResult';

const App = () => {
  const [state, setState] = useState({
    questions: [],
    cards: [],
    correct: 0,
    total: 0
  });
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/yevhverb/jq/gh-pages/static/data/questions.json'
    )
      .then(res => res.json())
      .then(questions => {
        const [first, ...others] = shuffle(questions);

        setState({
          ...state,
          questions: others,
          cards: [first],
          total: questions.length
        });
      });
  }, []);

  const handleStart = () => setIsStart(false);

  const handleSwipe = variant => {
    setState(
      produce(state, draft => {
        if (variant?.id) {
          if (variant.isCorrect) draft.correct += 1;
        } else {
          const last = draft.cards.length - 1;

          draft.questions.push(draft.cards[last]);
          draft.cards.length -= 1;
        }
        draft.cards.push(draft.questions[0]);
        draft.questions.shift();
      })
    );
  };

  const { cards, correct, total } = state;
  const percent = (cards.length / total) * 100;

  return (
    <AppContainer>
      {isStart && <AppStart {...{ handleStart }} total={total} />}
      {!isStart && <AppProgress percent={percent} />}
      {!isStart &&
        state.cards
          .slice(-1)
          .map(card =>
            card ? (
              <Card {...card} handleSwipe={handleSwipe} key={card.id} />
            ) : (
              <AppResult {...{ correct, total }} key={0} />
            )
          )}
    </AppContainer>
  );
};

export default App;
