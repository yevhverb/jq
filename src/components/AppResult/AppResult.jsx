import React from 'react';
import T from 'prop-types';
import { ScaleMotion } from '../Motions';
import CardContainer from '../CardContainer';

const AppResult = ({ viewed }) => {
  return (
    <ScaleMotion className="w-full h-full">
      <CardContainer>
        <p className="text-xl font-bold text-center">
          Your viewed {viewed} questions!
        </p>
      </CardContainer>
    </ScaleMotion>
  );
};

AppResult.propTypes = {
  viewed: T.oneOfType([T.string, T.number])
};

export default AppResult;
