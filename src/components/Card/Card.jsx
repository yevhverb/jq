import React, { useState } from 'react';
import T from 'prop-types';
import { ScaleMotion, DragXMotion } from '../Motions';
import CardContainer from '../CardContainer';
import CardID from '../CardID';
import CardTitle from '../CardTitle';
import CardCode from '../CardCode';
import CardAnswer from '../CardAnswer';
import CardVariants from '../CardVariants';

const Card = ({ id, link, title, code, answer, variants, handleSwipe }) => {
  const [idChoiced, setIdChoiced] = useState('');

  const handleChoice = id => setIdChoiced(id);

  return (
    <ScaleMotion className="w-full h-full">
      <DragXMotion className="w-full h-full" handler={handleSwipe}>
        <CardContainer>
          <CardID {...{ id, link }} />
          <CardTitle {...{ title }} />
          <CardCode {...{ code }} />
          <ScaleMotion isShow={!!idChoiced} isAnimateHeight={true}>
            <CardAnswer {...{ answer }} />
          </ScaleMotion>
          <CardVariants {...{ variants, idChoiced, handleChoice }} />
        </CardContainer>
      </DragXMotion>
    </ScaleMotion>
  );
};

Card.propTypes = {
  id: T.oneOfType([T.number, T.string]),
  link: T.string,
  title: T.string,
  code: T.string,
  answer: T.string,
  variants: T.array,
  handleSwipe: T.func
};

export default Card;
