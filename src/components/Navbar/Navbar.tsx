import Image from 'next/image';
import { FC } from 'react';
import { ButtonMolecule, ButtonVariant, Size } from '../shared/Button/Button';
// import { Twirl as Hamburger } from 'hamburger-react'

export const Navbar: FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-screen flex min-w-[1080px] justify-center shadow h-[75px] fixed top-0 left-0 z-30 bg-white'>
      <nav className="h-[75px] w-full min-w-[1080px] max-w-[1366px] min-w[320px] px-[60px] p-[18px] flex justify-between items-center opacity-[0.96]">
        <div className='flex items-center justify-center min-w-[220px]'>
          <Image src="/images/logo.png" alt="logo" width={220} height={40} loading={'lazy'} />
        </div>
        <ul className='flex items-center justify-end w-full gap-12 text-[16px] ' >
          {['Blogs', 'Find a Stylist', 'Become a Stylist'].map((item) => (
            <button type='button' key={item} className='min-w-fit hover:cursor-pointer hover:opacity-50 hover:text-turquoise active:opacity-100 text-gray_5' onClick={() => console.log(`${item}`)}>
              {item}
            </button>
          ))}
          {/* <Hamburger toggle={setIsOpen} toggled={isOpen} size={32} color="#2B2B2B" easing="ease-in" rounded label="Show menu" hideOutline={false} /> */}
          <div className='flex items-center gap-5'>
            <ButtonMolecule size={Size.LARGE} text="Login" type="button" variant={ButtonVariant.OUTLINED} />
            <ButtonMolecule size={Size.LARGE} text="Sign Up" type="button" />
          </div>
        </ul>
      </nav >
    </div>
  );
};
