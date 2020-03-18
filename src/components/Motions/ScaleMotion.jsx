import React from 'react';
import T from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const ScaleMotion = ({
  isShow = true,
  isAnimateHeight = false,
  className,
  children
}) => {
  const variants = {
    enter: { opacity: 0, scale: 0.75 },
    show: { opacity: 1, scale: 1 },
    leave: { opacity: 0 }
  };

  if (isAnimateHeight) {
    variants.enter.height = 0;
    variants.show.height = 'auto';
    variants.leave.height = 0;
  }

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className={className}
          variants={variants}
          initial="enter"
          animate="show"
          exit="leave"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ScaleMotion.propTypes = {
  isShow: T.bool,
  className: T.string,
  isAnimateHeight: T.bool,
  children: T.any
};

export default ScaleMotion;
