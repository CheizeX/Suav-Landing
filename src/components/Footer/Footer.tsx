import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

export const Footer: FC = () => {
  return (
    <div className="bg-[#004B50] w-full h-[410px] flex flex-col">
      <div className=" h-[320px] flex pt-[65px] ">
        <div className=" w-[30%] text-right flex flex-col">
          <motion.div className="w-[280px] h-[50px] self-center">
            <Image
              src="/images/logo.png"
              width={280}
              height={50}
              alt="logo"
              loading={'lazy'}
              objectFit="fill"
            />
          </motion.div>
          <div className="text-[19px] mt-[20px] text-gray_1 font-semibold pr-[20px]">
            Tap Into Your Beauty Easy & Fast.
          </div>
        </div>
        <div className=" w-[40%] flex pl-10 ">
          <div className="w-[100%] h-full flex items-center  justify-end">
            <div className=" w-[50%] h-full ">
              <div className=" h-fit  text-gray_1 text-[15px] font-semibold mb-[27px]">
                <a href="#">Book a stylist</a>
              </div>
              <div className=" h-fit  text-gray_1 text-[15px] font-semibold mb-[27px]">
                <a href="#">Become a stylist</a>
              </div>
              <div className=" h-fit  text-gray_1 text-[15px] font-semibold mb-[27px]">
                <a href="#">Join the Community</a>
              </div>
            </div>
            <div className=" w-[40%] pl-[60px] h-full ">
              <div className=" h-fit  text-gray_1 text-[15px] font-[300] mb-[27px]">
                <a href="#">FAQ</a>
              </div>
              <div className=" h-fit  text-gray_1 text-[15px] font-[300] mb-[27px]">
                <a href="#">Help center</a>
              </div>
              <div className=" h-fit  text-gray_1 text-[15px] font-[300] mb-[27px]">
                <a href="#">Contact us</a>
              </div>
              <div className=" h-fit  text-gray_1 text-[15px] font-[300] mb-[27px]">
                <a href="#">Terms of use</a>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[30%] flex justify-center">
          <div className="w-[230px] h-[36px]  flex justify-between items-center">
            <a href="#">
              <FiTwitter size={36} className="text-btn_2" />
            </a>
            <a href="#">
              <BsInstagram size={36} className="text-btn_2" />
            </a>
            <a href="#">
              <FiFacebook size={36} className="text-btn_2" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[48%] h-[90px]  border-t self-center flex justify-center items-center text-gray_1 font-semibold text-[15px]">
        © 2021 Suavbeauty. All Rights Reserved
      </div>
    </div>
  );
};
