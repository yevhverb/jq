import React from 'react';
import T from 'prop-types';
import { ScaleMotion } from '../Motions';
import CardContainer from '../CardContainer';

const AppStart = ({ questions, handleStart }) => {
  return (
    <ScaleMotion>
      <CardContainer>
        <h2 className="text-center text-3xl font-bold">
          {questions} questions of JavaScript
        </h2>
        <div className="my-6 md:mx-16 text-center text-sm">
          <p>To change a question, just swipe the card left or right.</p>
          <p>
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
        <button
          className="w-full my-2 py-2 rounded-md text-center font-bold bg-green-200 hover:bg-green-300 transition duration-200"
          onClick={handleStart}
        >
          GET STARTED
        </button>
      </CardContainer>
    </ScaleMotion>
  );
};

AppStart.propTypes = {};

export default AppStart;
