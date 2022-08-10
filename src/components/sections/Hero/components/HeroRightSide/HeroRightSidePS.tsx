import Image from 'next/image';
import React from 'react';

export const HeroRightSidePS = () => {
  return (
    <div className=" w-[47%] h-full min-h-[640px] flex flex-col items-end justify-start ml-[10px]">
      <div className=" min-h-[640px] bg-black pt-24 mb-6 w-full rounded-bl-[264px] ">
        {/* <Image
          src="/images/set.jpg"
          width={'640'}
          height={'640'}
          alt="logo"
          loading={'lazy'}
          objectFit="fill"
          className=" rounded-bl-[264px]"
        /> */}
      </div>
    </div>
  );
};
