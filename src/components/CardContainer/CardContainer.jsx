import React from 'react';
import T from 'prop-types';

const CardContainer = ({ children }) => {
  return (
    <article className="w-full lg:w-1/2 max-h-full mx-auto px-5 md:px-10 py-4 md:py-6 rounded-lg shadow-2xl bg-white overflow-y-scroll select-none">
      {children}
    </article>
  );
};

CardContainer.propTypes = {
  children: T.any
};

export default CardContainer;
