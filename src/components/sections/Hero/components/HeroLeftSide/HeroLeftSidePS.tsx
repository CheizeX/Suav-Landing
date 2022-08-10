import React from 'react';
import { ButtonMolecule, Size } from '../../../../shared/Button/Button';

export const HeroLeftSidePS = () => {
  return (
    <>
      <h1 className="mt-[45px] max-w-[620px] ml-[20px] text-[35px] text-gray_5 font-semibold ">
        You are
        <span className="relative  h-[40px] w-[200px] ml-[32px] pr-32 mr-[20px] text-[59px] text-btn_1 font-northwell font-[200] ">
          <div className="absolute top-0 left-0 ">exactly</div>
        </span>
        where you need to be.
      </h1>
      <h3 className="mt-[40px] max-w-[560px] ml-[20px] text-[26px] text-gray_5 font-[200]">
        Finding clients and extraordinary stylists is hard. We do the hard part
        for you.
      </h3>
      <div className="w-[240px] h-[50px] mt-[30px] text-gray_5 ml-[20px] ">
        <ButtonMolecule
          text="Become a stylist on Suav"
          size={Size.FULLWITHSMALLFONT}
        />
      </div>
    </>
  );
};
