import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hook/hooks';
import { setUiActiveTab } from '../../../redux/slices/ui/tabs/tabs';
import { HeroLeftSideNS } from './components/HeroLeftSide/HeroLeftSideNS';
import { HeroRightSideNS } from './components/HeroRightSide/HeroRightSideNS';
import { HeroLeftSidePS } from './components/HeroLeftSide/HeroLeftSidePS';
import { HeroRightSidePS } from './components/HeroRightSide/HeroRightSidePS';

export const Hero: FC = () => {
  const dispatch = useDispatch();
  const { activeTabInState } = useAppSelector((state) => state.ui);

  return (
    <section className=" min-h-[758px] pt-[75px] w-screen max-w-[1366px] flex justify-between items-start overflow-hidden">
      <div className=" relative w-[53%] h-full min-h-[580px] flex flex-col justify-center pt-[100px] pl-[50px]">
        <div className=" -z-10 absolute w-[1000px] h-[600px] min-h-[600px] transform-gpu translate-x-[-200px] translate-y-[150px] origin-left -rotate-[45deg] rounded-[650px] overflow-hidden ">
          <div className=" w-full h-full bg-[url('/images/hero-background.png')] bg-cover"></div>
        </div>
        <div className="absolute top-24 w-[340px] h-[57px] flex justify-around items-center rounded-[10px] bg-gray_1">
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
        <div>
          {activeTabInState === 'Need Stylist' ? (
            <HeroLeftSideNS />
          ) : (
            <HeroLeftSidePS />
          )}
        </div>
      </div>
      {activeTabInState === 'Need Stylist' ? (
        <HeroRightSideNS />
      ) : (
        <HeroRightSidePS />
      )}
    </section>
  );
};
