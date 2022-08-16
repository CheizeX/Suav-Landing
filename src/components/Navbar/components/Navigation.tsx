import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../shared/Button/Button';

const variants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.4 },
    // display: 'flex',
    width: '100%',
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
    // display: 'none',
    width: '0px',
  },
};

const buttonVariants = {
  open: {
    y: 20,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
  closed: {
    y: -20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
};

export const Navigation = () => (
  <>
    <motion.ul
      variants={variants}
      style={{
        padding: '25px',
        position: 'absolute',
        top: '80px',
        maxWidth: '500px',
        margin: '0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {['Blogs', 'Find a Stylist', 'Become a Stylist'].map((name) => (
        <MenuItem name={name} key={name} />
      ))}
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-5 w-48 h-14">
        <ButtonMolecule
          size={Size.FULL}
          text="Login"
          type="button"
          variant={ButtonVariant.OUTLINED}
        />
      </motion.div>
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-5 w-48 h-14">
        <ButtonMolecule size={Size.FULL} text="Sign Up" type="button" />
      </motion.div>
    </motion.ul>
  </>
);
