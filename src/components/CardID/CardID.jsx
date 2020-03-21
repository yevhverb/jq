import React, { useState } from 'react';
import T from 'prop-types';
import ClipboardJS from 'clipboard';
import { ScaleMotion } from '../Motions';

const CardID = ({ id = 'NO', link = '#' }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { origin, pathname } = window.location;

  new ClipboardJS('#btn-share');

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold"># {id}</h2>
      <div>
        <button
          title="Link on this questions"
          id="btn-share"
          data-clipboard-text={`${origin}${pathname}?q=${id}`}
          onClick={() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1250);
          }}
        >
          <i className="fas fa-share mx-3 text-gray-500 hover:text-gray-600 transition duration-150" />
        </button>
        <a
          title="Original source link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-link ml-3 text-gray-500 hover:text-gray-600 transition duration-150" />
        </a>
      </div>
      <ScaleMotion isShow={isCopied} className="absolute z-50 inset-0">
        <article className="w-full h-full flex items-center justify-center bg-gray-100 opacity-75">
          <p className="text-4xl font-bold">
            Copied!
            <span role="img" aria-label="ok">
              👌
            </span>
          </p>
        </article>
      </ScaleMotion>
    </div>
  );
};

CardID.propTypes = {
  id: T.oneOfType([T.number, T.string]),
  link: T.string
};

export default CardID;
