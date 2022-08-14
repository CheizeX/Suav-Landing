import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 500px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        height: '100%',
        maxWidth: '500px',
        minWidth: '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      <motion.div
        variants={sidebar}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '100vw',
          maxWidth: '500px',
          minWidth: '320px',
          height: '100vh',
          maxHeight: '100vh',
          background: 'white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};
