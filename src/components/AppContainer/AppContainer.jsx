import React from 'react';
import T from 'prop-types';

const AppContainer = ({ children }) => {
  return (
    <div
      className="w-screen h-screen text-gray-700 bg-gray-100 overflow-hidden"
      style={{ fontFamily: "'Rubik', sans-serif" }}
    >
      <div className="container h-full mx-auto px-5">
        <div className="w-full h-full flex flex-col py-10">
          {children}
        </div>
      </div>
    </div>
  );
};

AppContainer.propTypes = {
  children: T.any
};

export default AppContainer;
