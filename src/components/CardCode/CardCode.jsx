import React from 'react';
import T from 'prop-types';

const CardCode = ({ code }) => {
  return (
    <div className="my-6 px-5 py-3 rounded-md text-sm bg-gray-200">
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

CardCode.propTypes = {
  title: T.string
};

export default CardCode;
