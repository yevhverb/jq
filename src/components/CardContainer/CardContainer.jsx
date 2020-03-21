import React from 'react';
import T from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ children }) => {
  return (
    <article className="relative w-full lg:w-1/2 h-full mx-auto p-2 rounded-lg shadow-2xl bg-white select-none">
      <div className="custom-scroll w-full max-h-full px-5 md:px-10 py-5 md:py-6 overflow-y-scroll">
        {children}
      </div>
    </article>
  );
};

CardContainer.propTypes = {
  children: T.any
};

export default CardContainer;
