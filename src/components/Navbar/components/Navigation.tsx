import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
};

export const Navigation = () => (
  <motion.ul
    variants={variants}
    style={{
      padding: '25px',
      position: 'absolute',
      top: '100px',
      maxWidth: '500px',
      margin: '0',
      width: '100%',
    }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);
