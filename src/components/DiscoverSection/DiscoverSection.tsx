import Image from 'next/image';
import React, { FC, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';
import { ButtonMolecule, Size } from '../shared/Button/Button';
import { StyledImageWrapper, StyledOverImage, StyledSlider } from './DiscoverSection.styled';


export const DiscoverSection: FC = () => {
  const [favorites, setFavorites] = useState(['']);
  const [images, setImages] = useState([
    {
      src: '/images/discover-1.png',
      id: '1',
      header: 'Bella ck',
      from: 'Cape Town, South Africa',
    },
    {
      src: '/images/discover-2.png',
      id: '2',
      header: 'Ashley kit',
      from: 'Cape Town, South Africa',
    },
    {
      src: '/images/discover-3.png',
      id: '3',
      header: 'Ashley kit',
      from: 'Cape Town, South Africa',
    },
    {
      src: '/images/discover-4.png',
      id: '4',
      header: 'Sohan',
      from: 'Cape Town, South Africa',
    },
  ]);

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const handleNextSlide = () => {
  //   let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
  //   setCurrentSlide(newSlide);
  // };

  // const handlePrevSlide = () => {
  //   let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
  //   setCurrentSlide(newSlide);
  // };
  return (
    <section className='h-[750px] w-screen max-w-[1366px] flex flex-col justify-between items-center overflow-x-hidden'>
      <div className='w-full ml-[54px] '>
        <h1 className='text-[35px] text-gray_5 font-semibold'>Discover Stylist on Suav</h1>
      </div>
      <StyledSlider>
        {
          images.map((item) =>
          (
            <StyledImageWrapper key={item.id}>
              <StyledOverImage>
                <div className='w-full h-[50px] flex items-end justify-end px-6'>
                  {
                    favorites.includes(item.id) ? (
                      <FaHeart
                        size={22}
                        color='#e000e0e9'
                        className='cursor-pointer'
                        onClick={() => setFavorites(favorites.filter(favorite => favorite !== item.id))}
                      />
                    ) : (
                      <FaRegHeart
                        size={22}
                        color='white'
                        className='cursor-pointer'
                        onClick={() => setFavorites([...favorites, item.id])}
                      />
                    )
                  }
                </div>
                <div className='w-full h-[132px] px-8 text-white backdrop-brightness'>
                  <h1 className='text-[22px] font-semibold'>{item.header}</h1>
                  <h2 className='text-[15px] font-[400] '>{item.from}</h2>
                  <h3 className='text-[15px] font-[400] flex items-end gap-2 pt-4'>
                    <HiBriefcase size={24} />
                    {item.from}
                  </h3>
                </div>
              </StyledOverImage>
              <Image
                src={`/images/discover-${item.id}.png`}
                alt={`discover-${item.id}`}
                width={382}
                height={382}
                loading={'lazy'}
                objectFit="cover"
                className='hover:opacity-75 hover:cursor-pointer rounded-[27px]' />
            </StyledImageWrapper>
          )
          )
        }
      </StyledSlider>
      <div>
        <Image src="/images/discover.png" alt="discover" width={466} height={195} loading={'lazy'} />
      </div>
      <div className='border w-[200px] h-[80px]'>
        <ButtonMolecule text='Explore all stylists' size={Size.FULL} />
      </div>
    </section >
  )
}
