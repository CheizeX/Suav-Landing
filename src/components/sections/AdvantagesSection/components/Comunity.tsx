import React, { FC, useEffect } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { MdGroup } from 'react-icons/md';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export const Comunity: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className=" w-full min-h-[310px] py-[40px] flex justify-between ">
      <motion.div
        animate={controls}
        initial={{ x: -300, opacity: 0 }}
        variants={squareVariants}
        exit={{ x: 300, opacity: 0 }}
        className=" relative w-[600px] h-[308px] rounded-[35px] flex flex-col justify-evenly px-[24px] bg-[#FFE8FF] shadow">
        <div className=" w-fit h-fit flex flex-col items-end justify-start absolute top-[-75px] right-3 ">
          <div className="relative h-fit flex items-end justify-start w-fit">
            <div>
              <Image
                src="/images/hero-1.png"
                alt="hero-1"
                width={78}
                height={78}
                loading={'lazy'}
              />
            </div>
            <div className="pb-4 pl-5">
              <Image
                src="/images/hero-2.png"
                alt="hero-2"
                width={36}
                height={36}
                loading={'lazy'}
              />
            </div>
            <div className=" absolute bottom-[-65px] left-14 min-w-[32px] min-h-[32px]">
              <Image
                src="/images/hero-3.png"
                alt="hero-3"
                width={64}
                height={64}
                loading={'lazy'}
              />
            </div>
          </div>
        </div>
        <div className="text-gray_5 font-semibold text-[22px]">
          Join Our Community
        </div>
        <div className="text-[18px]">
          Earn your career at your own schedule. Take the guesswork out of
          marketing. Gain the insights that you need to grow your business
          without draining your budget anywhere you go.{' '}
        </div>
        <div className="w-full flex justify-between items-center">
          <a href="#" className="text-btn_1 underline text-[16px]">
            Click here to Join
          </a>
          <BsDiscord size={44} className="ml-[10px] text-[#813B81]" />
        </div>
      </motion.div>
      <motion.div
        animate={controls}
        initial={{ x: 300, opacity: 0 }}
        variants={squareVariants}
        exit={{ x: 300, opacity: 0 }}
        className=" w-[600px] h-[308px] rounded-[35px] flex flex-col justify-evenly px-[24px] bg-[#D3FCFF] shadow">
        <div className="text-gray_5 font-semibold text-[22px]">
          Join Our Community
        </div>
        <div className="text-[18px]">
          Earn your career at your own schedule. Take the guesswork out of
          marketing. Gain the insights that you need to grow your business
          without draining your budget anywhere you go.{' '}
        </div>
        <div className="w-full flex justify-between items-center">
          <a href="#" className="text-turquoise underline text-[16px]">
            Click here to Join
          </a>
          <MdGroup size={44} className="ml-[10px] text-turquoise" />
        </div>
      </motion.div>
    </div>
  );
};
