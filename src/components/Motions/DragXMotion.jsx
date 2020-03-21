import React from 'react';
import T from 'prop-types';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const DragXMotion = ({ handler, className, children }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 0, 100], [-1.5, 0, 1.5]);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const transformOrigin = '50% 300%';

  const onDragEnd = (e, info) => {
    if (Math.abs(info.point.x) > 110 && handler) handler();
  };

  return (
    <motion.div
      className={className}
      style={{ x, opacity, rotate, transformOrigin }}
      drag="x"
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
};

DragXMotion.propTypes = {
  onDrag: T.func,
  children: T.any
};

export default DragXMotion;
