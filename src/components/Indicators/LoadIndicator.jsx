import React from 'react';
import { ScaleMotion } from '../Motions';
import './LoadIndicator.css';

const LoadIndicator = () => {
  return (
    <ScaleMotion>
      <div className="text-center">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </ScaleMotion>
  );
};

export default LoadIndicator;
