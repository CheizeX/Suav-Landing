import { motion } from 'framer-motion';
import { FC } from 'react';
interface Props {
  name: string;
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

export const MenuItem: FC<Props> = ({ name }) => {
  return (
    <motion.li
      style={{
        margin: '0',
        padding: '0',
        listStyle: 'none',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        minWidth: '500px',
      }}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="min-w-fit hover:cursor-pointer hover:opacity-50 hover:text-turquoise active:opacity-100 text-gray_5"
      onClick={() => console.log(`${name}`)}>
      {name}
    </motion.li>
  );
};
