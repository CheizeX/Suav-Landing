import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hooks';
import {
  IActiveTabsProps,
  setUiActiveTab,
} from '../../redux/slices/ui/tabs/tabs';

export const Tabs: FC = () => {
  const { activeTabInState } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  return (
    <div className="container h-[34px] w-[222px] bg-gray_1 text-[11px] flex items-center justify-center gap-[1px] rounded-lg">
      {[
        IActiveTabsProps.STYLIST,
        IActiveTabsProps.STYLES,
        IActiveTabsProps.SESSIONS,
      ].map((item) => (
        <button
          type="button"
          className={` ${
            activeTabInState === item
              ? 'bg-white font-[600] hover:text-inherit'
              : 'bg-inherit'
          } hover:text-turquoise  px-4 py-2 rounded-lg h-[24.5px] w-[68.9px] flex items-center justify-center transition duration-200 cubic-bezier-0.2`}
          key={item}
          onClick={() => dispatch(setUiActiveTab(item))}>
          {item}
        </button>
      ))}
    </div>
  );
};
