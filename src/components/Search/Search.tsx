import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdLocationPin } from 'react-icons/md';

export const Search = () => {
  return (
    <div className="flex items-center justify-between mt-[12px]">
      <div className="relative ">
        <input
          type="text"
          placeholder="Search"
          className="h-[45px] w-[248px] p-[15px] pl-[43px] text-[14px] focus:ring-[0px] focus:border-gray_p border rounded border-gray_p text-gray_3 placeholder-gray_2"
        />
        <HiOutlineSearch
          className="text-gray_3 absolute top-[13px] left-[14px]"
          size={18}
        />
      </div>
      <button
        type="button"
        className="flex items-center justify-center border border-turquoise rounded text-turquoise h-[45px] w-[132px] text-center text-[14px]"
      >
        <MdLocationPin size={18} />
        <span>View in map</span>
      </button>
    </div>
  );
};
