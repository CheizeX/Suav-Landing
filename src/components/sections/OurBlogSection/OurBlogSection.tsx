import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { ourBlogItems, ourBlogItems2 } from './OurBlogSection.shared';
import { useAppSelector } from '../../../redux/hook/hooks';
import styled from 'styled-components';
interface Props {
  top?: number;
  left?: number;
}

const StyledImageContainer = styled(motion.div)<Props>`
  min-width: 465px;
  min-height: 465px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export const OurBlogSection: FC<Props> = () => {
  const { activeTabInState } = useAppSelector((state) => state.ui);
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
                Is aloe vera asdasdasdasdasdasd asdasd asdasd ?activeTabInState
              </p>
            </div>
          </div>
        ))}
      </div>
      {activeTabInState === 'Need Stylist' ? (
        <a
          href="#"
          className="w-full h-[50px] mb-[90px] text-gray_5 text-[15px] font-[300] text-center">
          SEE ALL BLOGS
        </a>
      ) : (
        <>
          <div className="w-full h-[495px] p-[80px] rounded-[35px] flex justify-between bg-gray_1">
            <div className=" w-[420px] text-[35px] font-semibold flex items-center">
              Get a reviewed by Your customer and increase your Revenue
            </div>
            <div className="w-[610px] h-[330px] rounded-[35px] p-[34px] bg-gray_0 flex flex-col justify-between shadow">
              <div className=" h-[80px] flex w-full">
                <div className=" w-[80px] h-[80px] flex items-center justify-center ">
                  <Image
                    src="/images/discover-3.png"
                    width={80}
                    height={80}
                    alt="d3"
                    loading={'lazy'}
                    objectFit="cover"
                    className="rounded-[50%]"
                  />
                </div>
                <div className="w-full flex flex-col justify-center pl-6">
                  <h2 className=" text-gray_5 font-bold text-[22px]">
                    Daisy Clara
                  </h2>
                  <p className="text-gray_3 text-[20px]">
                    Hair stylist, Nail artist
                  </p>
                </div>
              </div>
              <div className=" h-[100px] text-[22px] text-gray_5">
                I Had my hair styled in a new way thanks for daisy she is well
                known and knowledgable, smart and intelligence. Highly
                recommended.
              </div>
              <div className="h-[40px] flex justify-end items-center">
                <h2 className="text-turquoise text-[22px]">~ Martina Chan</h2>
                <div className=" w-[40px] h-[40px] flex items-center justify-center ml-5 ">
                  <Image
                    src="/images/discover-3.png"
                    width={80}
                    height={80}
                    alt="d3"
                    loading={'lazy'}
                    objectFit="cover"
                    className="rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[35px] font-semibold w-[1000px] self-center text-center mt-[170px]">
            Let your passion be patient meanwhile, we are here to Find your
            customers.
          </div>
          <div className="relative w-full font-semibold h-[770px] text-center mt-[170px] overflow-hidden">
            {ourBlogItems2.map((item) => (
              <StyledImageContainer
                key={String(item.id)}
                top={item.top}
                left={item.left}>
                <Image
                  src={`/images/45-${item.id}.png`}
                  width={465}
                  height={465}
                  alt="d3"
                  loading={'lazy'}
                  objectFit="fill"
                />
              </StyledImageContainer>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
