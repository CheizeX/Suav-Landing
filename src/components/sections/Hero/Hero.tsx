import Image from 'next/image';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hook/hooks';
import { setUiActiveTab } from '../../../redux/slices/ui/tabs/tabs';
import { ButtonMolecule, Size } from '../../shared/Button/Button';
import { Search } from './components/Search/Search';

export const Hero: FC = () => {
  const dispatch = useDispatch();
  const { activeTabInState } = useAppSelector((state) => state.ui);

  return (
    <section className=" h-[658px] w-screen max-w-[1366px] flex justify-between items-center overflow-hidden">
      <div className="relative w-[53%] h-full flex flex-col justify-center pl-[50px]">
        <div className="-z-10 absolute w-[1000px] h-[500px] transform-gpu translate-x-[-200px] translate-y-[150px] origin-left -rotate-[45deg] rounded-[650px] overflow-hidden ">
          <div className=" w-full h-full bg-[url('/images/hero-background.png')] bg-cover"></div>
        </div>
        <div className="w-[340px] h-[57px] flex justify-around items-center rounded-[10px] bg-gray_1">
          {['Need Stylist', 'Provide Service'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => dispatch(setUiActiveTab(item))}
              className={`${
                activeTabInState.includes(item[0]) ? 'bg-white' : 'bg-gray_1'
              } w-fit flex items-center justify-center px-4 py-[7px] rounded-[6px] font-[300] text-[18px] text-gray_5 transition-all duration-300 transition-property:transform transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)`}>
              {item.split(' ')[0]}
              <span className="pl-[5px] rounded-[6px] font-bold">
                {item.split(' ')[1]}
              </span>
            </button>
          ))}
        </div>
        <h1 className="mt-[45px] max-w-[620px] ml-[20px] text-[35px] text-gray_5 font-semibold">
          An
          <span className="max-h-[40px] ml-[20px] mr-[20px] pr-2 text-[59px] text-btn_1 font-northwell font-[200] transform-gpu rotate-45">
            individual
          </span>
          lifetime experience anytime, anywhere.
        </h1>
        <h3 className="mt-[40px] max-w-[560px] ml-[20px] text-[26px] text-gray_5 font-[200]">
          Getting access to Top rated stylists is hard. We do the hard part for
          you.
        </h3>
      </div>
      <div className=" w-[47%] h-full flex flex-col items-end justify-start ml-[10px]">
        <div className="relative h-fit pt-24 mb-6 flex items-end justify-start w-full">
          <div>
            <Image
              src="/images/hero-1.png"
              alt="hero-1"
              width={78}
              height={78}
              loading={'lazy'}
            />
          </div>
          <div className="pb-2 pl-10">
            <Image
              src="/images/hero-2.png"
              alt="hero-2"
              width={36}
              height={36}
              loading={'lazy'}
            />
          </div>
          <div className="-z-10 absolute bottom-[-65px] left-20 min-w-[32px] min-h-[32px]">
            <Image
              src="/images/hero-3.png"
              alt="hero-3"
              width={64}
              height={64}
              loading={'lazy'}
            />
          </div>
        </div>
        <div className="bg-[url('/images/hero-background.png')] bg-white bg-cover shadow rounded-2xl w-[100%] max-w-[520px] h-[298px] flex flex-col gap-7 justify-evenly p-4 mx-auto">
          <div className="flex flex-col gap-4">
            <Search />
            <Search />
          </div>
          <ButtonMolecule size={Size.FULL} text="Search" type="button" />
        </div>
      </div>
    </section>
  );
};
