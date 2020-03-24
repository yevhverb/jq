import React from 'react';
import T from 'prop-types';
import { ScaleMotion } from '../Motions';
import CardContainer from '../CardContainer';

const AppStart = ({ total, handleStart, handleReset, answered }) => {
  return (
    <ScaleMotion>
      <CardContainer>
        <h2 className="text-center text-3xl font-bold">
          {total} questions of JavaScript
        </h2>
        <div className="my-6 md:mx-16 text-center text-sm">
          <p>To change a question, just swipe the card left or right.</p>
          <p className="mt-4">
            Unanswered questions are returned to the end of the queue until they
            are answered.
          </p>
          <p className="mt-4">
            <a
              href="https://github.com/lydiahallie/javascript-questions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 underline transition duration-200"
            >
              Original repository with questions
            </a>
          </p>
        </div>
        {answered > 1 && (
          <h3 className="my-4 text-center text-xl font-bold">
            You already have {answered} answers
          </h3>
        )}
        <div className="flex flex-wrap sm:flex-no-wrap">
          <button
            className="w-full sm:mr-2 my-2 py-2 rounded-md text-center font-bold bg-green-200 hover:bg-green-300 transition duration-200"
            onClick={handleStart}
          >
            {answered > 1 ? 'CONTINUE' : 'GET STARTED'}
          </button>
          {answered > 1 && (
            <button
              className="w-full sm:ml-2 my-2 py-2 rounded-md text-center font-bold bg-gray-200 hover:bg-gray-300 transition duration-200"
              onClick={handleReset}
            >
              RESET
            </button>
          )}
        </div>
      </CardContainer>
    </ScaleMotion>
  );
};

AppStart.propTypes = {
  total: T.oneOfType([T.string, T.number]),
  handleStart: T.func,
  handleReset: T.func,
  answered: T.number
};

export default AppStart;
