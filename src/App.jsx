import React, { useState } from 'react';
import produce from 'immer';
import { shuffle } from 'lodash';
import AppContainer from './components/AppContainer';
import AppProgress from './components/AppProgress';
import Card from './components/Card';
import AppResult from './components/AppResult';

import questions from './data/questions.json';

const App = () => {
  const [first, ...others] = shuffle(questions);

  const [state, setState] = useState({
    questions: others,
    cards: [first],
    correct: 0,
    answered: 0
  });

  const handleSwipe = variant => {
    setState(
      produce(state, draft => {
        if (variant?.id) {
          draft.answered += 1;
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

  const { cards, correct, answered } = state;
  const percent = (cards.length / questions.length) * 100;

  return (
    <AppContainer>
      <AppProgress percent={percent} />
      {state.cards
        .slice(-1)
        .map(card =>
          card ? (
            <Card {...card} handleSwipe={handleSwipe} key={card.id} />
          ) : (
            <AppResult {...{ correct, answered }} key={0} />
          )
        )}
    </AppContainer>
  );
};

export default App;
