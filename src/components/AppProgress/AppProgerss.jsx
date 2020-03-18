import React from 'react';
import T from 'prop-types';

const AppProgerss = ({ percent }) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-2 bg-gray-300">
      <div
        className="absolute top-0 left-0 h-full bg-green-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

AppProgerss.propTypes = {};

export default AppProgerss;
