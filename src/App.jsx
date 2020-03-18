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
    answered: 0,
    viewed: 0
  });

  const handleSwipe = () => {
    setState(
      produce(state, draft => {
        draft.viewed += 1;
        draft.cards.push(draft.questions[0]);
        draft.questions.shift();
      })
    );
  };

  const { cards, viewed } = state;
  const percent = (cards.length / questions.length) * 100;

  return (
    <AppContainer>
      <AppProgress percent={percent} />
      {state.cards
        .slice(-1)
        .map(card =>
          card ? (
            <Card key={card.id} handleSwipe={handleSwipe} {...card} />
          ) : (
            <AppResult key={0} {...{ viewed }} />
          )
        )}
    </AppContainer>
  );
};

export default App;
