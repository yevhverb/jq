import React from 'react';
import T from 'prop-types';

const CardID = ({ id = 'NO', link = '#' }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold"># {id}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-link"></i>
      </a>
    </div>
  );
};

CardID.propTypes = {
  id: T.oneOfType([T.number, T.string]),
  link: T.string
};

export default CardID;
