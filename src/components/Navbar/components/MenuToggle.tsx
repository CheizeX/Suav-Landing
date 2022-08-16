import { motion } from 'framer-motion';
import { FC } from 'react';
interface Props {
  toggle: any;
  isOpen?: boolean;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    // stroke={`${props.isOpen ? 'white' : 'hsl(0, 0%, 18%)'}`}
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: FC<Props> = ({ toggle, isOpen }) => (
  <motion.button
    onClick={toggle}
    style={{
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      top: '15px',
      right: '45px',
      width: '50px',
      height: '50px',
      paddingTop: '5px',
      paddingLeft: '1px',
      borderRadius: '50%',
      transitionDelay: `${isOpen ? '0s' : '1s'}`,
      background: `${isOpen ? 'transparent' : 'white'}`,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <svg width="50%" height="60%" viewBox="0 0 24 24">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </motion.button>
);
