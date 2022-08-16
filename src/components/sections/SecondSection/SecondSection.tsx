import Image from 'next/image';
import React, { FC } from 'react';

export const SecondSection: FC = () => {
  return (
    <section className=" min-h-[458px] w-full max-w-[1366px] flex justify-between items-center mb-28 overflow-auto">
      <div className="w-[56%] h-full flex flex-col justify-center pl-[50px]">
        <h1 className=" ml-[20px] text-[35px] text-gray_5 font-semibold">
          Powerful Stylist Booking Platform. Unlike Any Other, anytime,
          anywhere.
        </h1>
        <h3 className="mt-[40px] max-w-[600px] ml-[20px] text-[26px] text-gray_5 font-[200]">
          We never compromise on quality & only work with stylists that champion
          that same vision. Keeping our clients at their best consistently.
        </h3>
      </div>
      <div className="w-[47%] h-full flex items-center justify-center min-w-[466px]">
        <div>
          <Image
            src="/images/second.png"
            alt="second"
            width={466}
            height={195}
            loading={'lazy'}
          />
        </div>
      </div>
    </section>
  );
};
