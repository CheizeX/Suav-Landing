import { FC } from 'react';
import { GrLocation } from 'react-icons/gr';

export const Navbar: FC = () => {
  return (
    <nav className="container h-[75px] w-full min-w[320px] border-b border-b-gray_p p-[18px] flex justify-between items-center">
      <div className="border-r h-[27px] w-[172px] flex items-center text-[12px] color font-bold">
        <div className="border rounded-full h-full w-[27px] mr-6" />
        SUAV BEAUTY
      </div>

      {/* hidden on md, hamburguer menu */}
      <div className=" h-[27px] w-[172px] flex items-center relative md:hidden">
        <GrLocation className="location-icon mr-2 ml-[22px]" />
        <div className="spot" />
        {/* <select className="w-[90px] text-[10px] border-none m-0 p-0" disabled>
          <option value="1">Set Location</option>
          <option value="1">Rosario</option>
          <option value="2">Buenos Aires</option>
        </select> */}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  );
};
