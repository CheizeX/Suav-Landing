import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export const Search = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search for Stylist / Style"
        className="w-full h-[72px] p-[15px] pl-[43px] text-[14px] focus:ring-[0px] focus:border-gray_p border-2 rounded-2xl border-gray_p text-gray_5 placeholder-gray_4"
      />
      <HiOutlineSearch
        className="absolute top-[calc(50% - 18px)] left-[3%] text-gray_5 "
        size={20}
      />
    </div>
  );
};
