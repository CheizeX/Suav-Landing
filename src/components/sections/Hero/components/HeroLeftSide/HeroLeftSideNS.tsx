import React from 'react';
import { motion } from 'framer-motion';

export const HeroLeftSideNS = () => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}>
      <h1 className="mt-[40px] max-w-[620px] ml-[20px] text-[35px] text-gray_5 font-semibold">
        An
        <span className=" inline-flex max-h-[40px] ml-[20px] mr-[20px] pr-2 text-[59px] text-btn_1 font-northwell font-[200]">
          individual
        </span>
        lifetime experience anytime, anywhere.
      </h1>
      <h3 className="mt-[30px] max-w-[560px] ml-[20px] text-[26px] text-gray_5 font-[200]">
        Getting access to Top rated stylists is hard. We do the hard part for
        you.
      </h3>
    </motion.div>
  );
};
