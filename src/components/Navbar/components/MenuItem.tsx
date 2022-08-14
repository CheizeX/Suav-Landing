import { motion } from 'framer-motion';
import { FC } from 'react';
interface Props {
  i: any;
}
const variants = {
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

const colors = ['#c700cb', '#FF00FF', '#d588ff', '#05e6ff', '#00bccc'];

export const MenuItem: FC<Props> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      style={{
        margin: '0',
        padding: '0',
        listStyle: 'none',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
