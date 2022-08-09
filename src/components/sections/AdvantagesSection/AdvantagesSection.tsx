import Image from 'next/image';
import React, { FC } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { MdGroup } from 'react-icons/md';

export const AdvantagesSection: FC = () => {
  return (
    <section className=" min-h-[458px] w-full max-w-[1366px] flex flex-col px-6">
      <h1 className=" w-full font-northwell text-[35px] text-btn_1 mb-3 ">
        Our advantages
      </h1>
      <div className=" w-full font-semibold text-[35px] text-gray_5">
        Why choose Suav?
      </div>
      <div className="w-[full] h-[745px] bg-[#120507] my-[54px] rounded-[40px] flex flex-col items-end justify-between p-[40px]">
        <div className="w-[60%] min-h-[190px] p-[24px] rounded-[35px] bg-gray_1 flex flex-col justify-evenly">
          <h3 className="text-[22px] text-gray_5 font-semibold">
            Discover & book stylists near you
          </h3>
          <div className="text-gray_5 text-[18px]">
            Easily find nearby beauty providers in your area. Save money & time
            on long trips. Get the best prices & service from a stylist that
            understands exactly what you’re looking for.
          </div>
        </div>
        <div className="w-[60%] min-h-[190px]  p-[24px] rounded-[35px] bg-gray_1 flex flex-col justify-evenly">
          <h3 className="text-[22px] text-gray_5 font-semibold">
            Say goodbye to inconsistent results
          </h3>
          <div className="text-gray_5 text-[18px]">
            Get a VIP sneak-peek access to 100+ stylists before booking. Check
            their ratings, review their portfolio, learn their interests & book
            a service that best fits your needs.
          </div>
        </div>
        <div className="w-[60%] min-h-[190px] p-[24px] rounded-[35px] bg-gray_1 flex flex-col justify-evenly">
          <h3 className="text-[22px] text-gray_5 font-semibold">
            Unlock opportunities doing what you love
          </h3>
          <div className="text-gray_5 text-[18px]">
            Earn your career at your own schedule. Take the guesswork out of
            marketing. Gain the insights that you need to grow your business
            without draining your budget anywhere you go.
          </div>
        </div>
      </div>
      <div className=" w-full min-h-[310px] py-[40px] flex justify-between ">
        <div className=" relative w-[600px] h-[308px] rounded-[35px] flex flex-col justify-evenly px-[24px] bg-[#FFE8FF] shadow">
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
        </div>
        <div className=" w-[600px] h-[308px] rounded-[35px] flex flex-col justify-evenly px-[24px] bg-[#D3FCFF] shadow">
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
        </div>
      </div>
    </section>
  );
};
