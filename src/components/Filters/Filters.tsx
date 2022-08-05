import React, { Dispatch, SetStateAction } from 'react';
import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IFiltersProps } from './filters.interface';

interface Props {
  setActiveModal: Dispatch<SetStateAction<string>>;
  setFilters: Dispatch<SetStateAction<IFiltersProps>>;
  filters: IFiltersProps;
}
export const Filters: FC<Props> = ({ setActiveModal, setFilters, filters }) => {
  return (
    <div className="container flex items-center mt-[10px]">
      <button
        type="button"
        className="flex items-center justify-between border bg-white text-[10px] text-center text-gray_4 rounded h-[35px] w-[90px] pl-[8px] pr-[12px] mr-[10px]"
      >
        Expertise
        <FaChevronDown size={12} color="#2B2B2B" />
      </button>
      <button
        type="button"
        className="flex items-center justify-between border bg-white text-[10px] text-center text-gray_4 rounded h-[35px] w-[90px] pl-[8px] pr-[12px] mr-[10px]"
        onClick={() => setActiveModal('price')}
      >
        Price <FaChevronDown size={12} color="#2B2B2B" />
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-turquoise text-[12px] ml-[12px]"
        onClick={() =>
          setFilters({
            ...filters,
            byPrice: '0',
            byExpertise: '0',
          })
        }
      >
        Reset Filters
      </button>
    </div>
  );
};
