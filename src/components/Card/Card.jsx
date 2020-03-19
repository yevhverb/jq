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
  const [variant, setVariant] = useState(null);

  const handleChoice = variant => setVariant(variant);

  return (
    <ScaleMotion className="w-full h-full">
      <DragXMotion
        className="w-full h-full"
        handler={() => handleSwipe(variant)}
      >
        <CardContainer>
          <CardID {...{ id, link }} />
          <CardTitle {...{ title }} />
          {code && <CardCode {...{ code }} />}
          <ScaleMotion isShow={!!variant} isAnimateHeight={true}>
            <CardAnswer {...{ answer }} />
          </ScaleMotion>
          <CardVariants
            {...{ variants, handleChoice }}
            idChoiced={variant?.id}
          />
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
