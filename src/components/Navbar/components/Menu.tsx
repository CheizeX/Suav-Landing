import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
  open: () =>
    // height = 1000
    ({
      // clipPath: `circle(${height + 200}px at 40px 40px)`,
      clipPath: `circle(200% at calc(100% - 70px) 40px)`,
      transition: {
        velocity: -100,
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
  closed: () => ({
    // clipPath: 'circle(0px at 500px 40px)',
    clipPath: 'circle(24px at calc(100% - 70px) 40px)',

    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 1000,
      damping: 100,
    },
  }),
};

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        // height: '100vh',
        // minHeight: '100vh',
        minWidth: '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1366px',
      }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}>
      <motion.div
        variants={sidebar}
        style={{
          border: '1px solid hsl(0, 0%, 18%)',
          position: 'absolute',
          top: '0',
          right: '0',
          width: '100vw',
          maxWidth: '1366px',
          minWidth: '320px',
          height: '100vh',
          minHeight: '100vh',
          maxHeight: '100vh',
          background: 'white',
          // backgroundImage: 'linear-gradient(98deg, #d95aff 0%, #05efff 100%)',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
    </motion.div>
  );
};
