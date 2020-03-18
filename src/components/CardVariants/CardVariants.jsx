import React from 'react';
import T from 'prop-types';
import CardVariant from './CardVariant';

import './CardVariants.css';

const CardVariants = ({ variants, idChoiced, handleChoice }) => {
  return (
    <ul className="mt-6 mb-4">
      {variants.map(variant => (
        <CardVariant
          {...variant}
          {...{ idChoiced, handleChoice }}
          key={variant.id}
        />
      ))}
    </ul>
  );
};

CardVariants.propTypes = {
  variants: T.array
};

export default CardVariants;
