import Image from 'next/image';
import { FC } from 'react';
import { ButtonMolecule, ButtonVariant, Size } from '../shared/Button/Button';
import { motion } from 'framer-motion';
import { Menu } from './components/Menu';

export const Navbar: FC = () => {
  return (
    <div className="w-screen flex min-w-[320px] max-width-[1366px] justify-center shadow h-[75px] fixed top-0 left-0 z-30 bg-white">
      <nav className="h-[75px] w-full min-w-[320px] max-w-[1366px] min-w[320px] px-[60px] p-[18px] flex justify-between items-center opacity-[0.96]">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.7 },
            edgeMode: 'none',
          }}
          exit={{ x: 300, opacity: 0 }}
          className="flex items-center justify-center min-w-[200px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={220}
            height={40}
            loading={'lazy'}
          />
        </motion.div>
        <ul className="hidden items-center justify-end w-full gap-12 text-[16px] lg:flex">
          {['Blogs', 'Find a Stylist', 'Become a Stylist'].map((item) => (
            <button
              type="button"
              key={item}
              className="min-w-fit hover:cursor-pointer hover:opacity-50 hover:text-turquoise active:opacity-100 text-gray_5"
              onClick={() => console.log(`${item}`)}>
              {item}
            </button>
          ))}
          <div className="flex items-center gap-5">
            <ButtonMolecule
              size={Size.LARGE}
              text="Login"
              type="button"
              variant={ButtonVariant.OUTLINED}
            />
            <ButtonMolecule size={Size.LARGE} text="Sign Up" type="button" />
          </div>
        </ul>
      </nav>
      <div className="lg:hidden flex w-10 min-w-[70px]">
        <Menu />
      </div>
    </div>
  );
};
