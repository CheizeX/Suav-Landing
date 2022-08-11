import Image from 'next/image';
import React from 'react';
import { ButtonMolecule, Size } from '../../../../shared/Button/Button';
import { Search } from '../Search/Search';
import { motion } from 'framer-motion';

export const HeroRightSideNS = () => {
  return (
    <>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className=" w-[47%] pt-[40px] h-full flex flex-col items-end justify-start ml-[10px]">
        <div className="relative h-fit pt-0 mb-6 flex items-end justify-start w-full">
          <div>
            <Image
              src="/images/hero-1.png"
              alt="hero-1"
              width={78}
              height={78}
              loading={'lazy'}
            />
          </div>
          <div className="pb-2 pl-10">
            <Image
              src="/images/hero-2.png"
              alt="hero-2"
              width={36}
              height={36}
              loading={'lazy'}
            />
          </div>
          <div className="-z-10 absolute bottom-[-65px] left-20 min-w-[32px] min-h-[32px]">
            <Image
              src="/images/hero-3.png"
              alt="hero-3"
              width={64}
              height={64}
              loading={'lazy'}
            />
          </div>
        </div>
        <div className="bg-[url('/images/hero-background.png')] bg-white bg-cover shadow rounded-2xl w-[100%] max-w-[520px] h-[298px] flex flex-col gap-7 justify-evenly p-4 mx-auto">
          <div className="flex flex-col gap-4">
            <Search />
            <Search />
          </div>
          <ButtonMolecule size={Size.FULL} text="Search" type="button" />
        </div>
      </motion.div>
    </>
  );
};
