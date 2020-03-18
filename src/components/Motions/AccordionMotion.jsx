import React from 'react';
import T from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionMotion = ({ isShow = false, className, children }) => {
  const variants = {
    open: { height: 'auto' },
    close: { height: 0 }
  };

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className={`${className} overflow-hidden`}
          variants={variants}
          initial="close"
          animate="open"
          exit="close"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

AccordionMotion.propTypes = {
  isShow: T.bool,
  className: T.string,
  children: T.any
};

export default AccordionMotion;
