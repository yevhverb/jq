import React from 'react';
import T from 'prop-types';
import { ScaleMotion } from '../Motions';

const AppProgerss = ({ percent }) => {
  return (
    <ScaleMotion className="fixed top-0 left-0 right-0 h-2 bg-gray-300">
      <div
        className="absolute top-0 left-0 h-full bg-green-300"
        style={{ width: `${percent}%`, transition: '175ms' }}
      />
    </ScaleMotion>
  );
};

AppProgerss.propTypes = {
  percent: T.number
};

export default AppProgerss;
