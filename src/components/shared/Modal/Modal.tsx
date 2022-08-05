import React, { Dispatch, useEffect, useState } from 'react';
import { FC } from 'react';
import { SetStateAction } from 'react';
import { IFiltersProps } from '../../Filters/filters.interface';
import useClickOutside from '../../../hooks/useClickOutside';

interface IPropsModal {
  activeModal: string;
  setActiveModal: Dispatch<SetStateAction<string>>;
  filters: IFiltersProps;
  setFilters: Dispatch<SetStateAction<any>>;
  scrollUp: () => void;
}
export const Modal: FC<IPropsModal> = ({
  activeModal,
  setActiveModal,
  filters,
  setFilters,
  scrollUp,
}) => {
  const { ref } = useClickOutside(false);
  console.log('[REF]', ref.current);
  const [currentPrice, setCurrentPrice] = useState(filters.byPrice);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      event.stopPropagation();
      setActiveModal('');
    }
  };

  const handleClick = (arg: string) => {
    setActiveModal('');
    if (arg === 'price') {
      setFilters({
        ...filters,
        byPrice: currentPrice,
      });
    }
    scrollUp();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const rangeInputs = document.querySelectorAll('input[type="range"]');

  const handleInputChange = (e: any) => {
    let target = e.target;
    console.log('[target]', target);
    if (e.target.type !== 'range') {
      target = document.getElementById('range');
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
  };

  rangeInputs.forEach((input) => {
    input.addEventListener('input', handleInputChange);
  });

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-[1.5px] backdrop-saturate-10 backdrop-opacity-0_9 transition duration-500 cubic-bezier-0.2">
      <div
        ref={ref}
        className={`absolute flex flex-col justify-start items-center ${
          activeModal === 'price' ? 'bottom-[0px]' : 'bottom-[-580px]'
        } h-[271px] w-full bg-[#ffffff] rounded-t-[20px] shadowModal transition duration-500 all-ease-in-out`}
      >
        <div className="min-h-[54px] w-full border-b flex items-center justify-center capitalize text-[18px] font-bold text-gray_5">
          {activeModal}
        </div>
        <div className="h-full w-full flex flex-col justify-between items-center pl-4 pr-4 pt-6 pb-6">
          <div className="flex justify-center items-center font-semibold text-base">
            USD
            <div className=" text-turquoise ml-2">{currentPrice}</div>
          </div>
          <div className="input-cont w-full relative">
            <input
              type="range"
              min="0"
              max="1000"
              step="100"
              defaultValue={currentPrice}
              className="w-full inputtt"
              onChange={(e) => setCurrentPrice(e.target.value)}
              list="tickmarks"
              style={{
                backgroundSize: `${
                  ((Number(currentPrice) - 0) * 100) / (1000 - 0)
                }% 100%`,
              }}
            />
          </div>
          <button
            type="button"
            onClick={() => handleClick('price')}
            className="relative rounded-lg bg-turquoise bg-opacity-10 w-[120px] h-[40px] text-turquoise"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
