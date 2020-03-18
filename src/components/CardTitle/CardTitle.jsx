import React from 'react';
import T from 'prop-types';

const CardTitle = ({ title }) => {
  return (
    <div className="my-6">
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
};

CardTitle.propTypes = {
  title: T.string
};

export default CardTitle;
