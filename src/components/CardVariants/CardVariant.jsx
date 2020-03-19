import React from 'react';
import T from 'prop-types';
import Markdown from 'react-markdown';

const CardVariant = ({ id, title, isCorrect, idChoiced, handleChoice }) => {
  let classes = !idChoiced ? 'hover:bg-gray-200' : '';

  if (id === idChoiced) {
    classes = 'uncorrect bg-yellow-200';
  }

  if (idChoiced && isCorrect) {
    classes = 'correct bg-green-200';
  }

  return (
    <li>
      <button
        className={`card-variant w-full flex my-2 px-5 py-3 rounded-md text-sm text-left bg-gray-100 ${classes} transition duration-150 cursor-pointer`}
        disabled={idChoiced}
        onClick={() => handleChoice({ id, isCorrect })}
      >
        <span className="pr-4 font-bold text-gray-500">{id}</span>
        <span>
          <Markdown source={title} />
        </span>
      </button>
    </li>
  );
};

CardVariant.propTypes = {
  id: T.string,
  title: T.string,
  isCorrect: T.bool,
  idChoiced: T.string,
  handleCoise: T.func
};

export default CardVariant;
