import React from 'react';
import { motion } from 'framer-motion';

export const HeroRightSidePS = () => {
  return (
    <div className=" w-[47%] h-full min-h-[640px] flex flex-col items-end justify-start ml-[10px]">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ delay: 0.3 }}
        className=" min-h-[565px] bg-black pt-24 mb-6 w-full rounded-bl-[264px] ">
        {/* <Image
          src="/images/set.jpg"
          width={'640'}
          height={'640'}
          alt="logo"
          loading={'lazy'}
          objectFit="fill"
          className=" rounded-bl-[264px]"
        /> */}
      </motion.div>
    </div>
  );
};
