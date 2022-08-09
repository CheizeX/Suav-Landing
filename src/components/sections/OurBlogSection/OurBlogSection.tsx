import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import activeTabInState from '../../../redux/slices/ui/tabs/tabs';
import { ourBlogItems } from './OurBlogSection.shared';

export const OurBlogSection: FC = () => {
  return (
    <section className=" min-h-[458px] w-full max-w-[1366px] flex flex-col px-6 pt-[200px]">
      <h1 className=" w-full font-northwell text-[35px] text-btn_1 mb-3 ">
        Our Blog
      </h1>
      <div className=" w-full font-semibold text-[35px] text-gray_5">
        Get the latest beauty tips{' '}
      </div>
      <div className=" w-full h-[515px] flex mt-[50px] mb-[80px] justify-between items-center">
        {ourBlogItems.map((item) => (
          <div
            key={item.id}
            className=" w-[382px] h-[512px] rounded-[35px] bg-[#D6FCFF]">
            <motion.div className="w-[382px] h-[382px] rounded-[35px]">
              <Image
                src="/images/discover-2.png"
                width={382}
                height={382}
                alt="ad"
                loading={'lazy'}
                objectFit="cover"
                className="rounded-[27px]"
              />
            </motion.div>
            <div className=" h-[130px] px-[25px] pb-[30px] pt-[7px] flex flex-col justify-between">
              <h2 className="font-northwell text-btn_1 text-[27px]">Hair</h2>
              <p className=" text-gray_5 font-semibold text-[15px]">
                {' '}
                Is aloe vera asdasdasdasdasdasd asdasd asdasd ?activeTabInState
              </p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="w-full h-[50px] mb-[90px] text-gray_5 text-[15px] font-[300] text-center">
        SEE ALL BLOGS
      </a>
    </section>
  );
};
