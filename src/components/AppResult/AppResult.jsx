import React from 'react';
import T from 'prop-types';
import { ScaleMotion } from '../Motions';
import CardContainer from '../CardContainer';

const AppResult = ({ correct, total, handleReset }) => {
  return (
    <ScaleMotion className="w-full h-auto">
      <CardContainer>
        <p className="text-xl font-bold text-center">
          Your have {correct} correct {correct === 1 ? 'answer' : 'answers'} of{' '}
          {total} questions!
        </p>
        <button
          className="w-full mt-6 py-2 rounded-md text-center bg-gray-100 hover:bg-gray-200 transition duration-150"
          onClick={handleReset}
        >
          <i className="fas fa-redo-alt" />
        </button>
      </CardContainer>
    </ScaleMotion>
  );
};

AppResult.propTypes = {
  correct: T.oneOfType([T.string, T.number]),
  total: T.oneOfType([T.string, T.number]),
  handleReset: T.func
};

export default AppResult;
