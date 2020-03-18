import React, { useState } from 'react';
import T from 'prop-types';
import Markdown from 'react-markdown';
import { AccordionMotion } from '../Motions';

import './CardAnswer.css';

const CardAnswer = ({ answer }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="card-answer my-6">
      <h3
        role="button"
        className="flex items-center justify-between rounded-lg font-bold"
        onClick={() => setIsShow(!isShow)}
      >
        Explanation
        <i
          className="fas fa-chevron-left transition duration-150"
          style={{ transform: `rotate(${isShow ? -90 : 0}deg)` }}
        />
      </h3>
      <AccordionMotion isShow={isShow}>
        <div className="pt-3 px-5 text-sm">
          <Markdown source={answer} />
        </div>
      </AccordionMotion>
    </div>
  );
};

CardAnswer.propTypes = {
  answer: T.string
};

export default CardAnswer;
