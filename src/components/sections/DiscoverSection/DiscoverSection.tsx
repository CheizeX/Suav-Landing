import Image from 'next/image';
import React, { FC, useCallback, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';
import { ButtonMolecule, Size } from '../../shared/Button/Button';
import { DiscoverSectionItems } from './DiscoverSection.shared';
import {
  StyledImageWrapper,
  StyledOverImage,
  StyledSlider,
} from './DiscoverSection.styled';
import { TbLivePhoto } from 'react-icons/tb';

export const DiscoverSection: FC = () => {
  const [favorites, setFavorites] = useState(['']);
  const [moveSlider, setMoveSlider] = useState(0);

  const calculateSliderWidth =
    DiscoverSectionItems.length > 4
      ? -(
          (DiscoverSectionItems.length * 382 +
            DiscoverSectionItems.length * 16) /
            2 +
          100
        )
      : -(DiscoverSectionItems.length * 382) / 2 + 100;

  const memoSlider = useCallback(
    (direction: string) => {
      if (direction === 'left' && moveSlider < 0) {
        setMoveSlider(moveSlider + 398);
      } else if (direction === 'right' && moveSlider > calculateSliderWidth) {
        setMoveSlider(moveSlider - 398);
      }
    },
    [moveSlider, calculateSliderWidth],
  );

  return (
    <section className="min-h-[900px] w-full max-w-[1366px] flex flex-col justify-between items-center overflow-x-hidden py-14">
      <div className="w-full ml-[54px] ">
        <h1 className="text-[35px] text-gray_5 font-semibold">
          Discover stylists on Suav
        </h1>
      </div>
      <StyledSlider
        // drag='x'
        dragConstraints={{
          right: 0,
          left: calculateSliderWidth,
        }}
        dragElastic={0.5}
        // onDragEnd={(e: any) => {
        //   setMoveSlider(e.target.scrollLeft);
        // }}
      >
        {DiscoverSectionItems.map((item) => (
          <StyledImageWrapper
            key={item.id}
            style={{
              transform: `translateX(${moveSlider}px)`,
              transition: `transform ${1}s ease-in-out`,
            }}>
            <StyledOverImage>
              <div className="w-full h-[50px] flex items-end justify-end px-6">
                {favorites.includes(item.id) ? (
                  <FaHeart
                    size={22}
                    color="#e000e0e9"
                    className="cursor-pointer"
                    onClick={() =>
                      setFavorites(
                        favorites.filter((favorite) => favorite !== item.id),
                      )
                    }
                  />
                ) : (
                  <FaRegHeart
                    size={22}
                    color="white"
                    className="cursor-pointer"
                    onClick={() => setFavorites([...favorites, item.id])}
                  />
                )}
              </div>
              <div className="w-full h-[132px] px-8 text-white backdrop-brightness">
                <h1 className="text-[22px] font-semibold">{item.header}</h1>
                <h2 className="text-[15px] font-[400] ">{item.from}</h2>
                <h3 className="text-[15px] font-[400] flex items-end gap-2 pt-4">
                  <HiBriefcase size={24} />
                  {item.profession}
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
              className="hover:opacity-75 hover:cursor-pointer rounded-[27px]"
            />
          </StyledImageWrapper>
        ))}
      </StyledSlider>
      <div className="w-full h-[60px] flex items-center justify-center gap-5">
        <BsArrowLeft
          size={32}
          onClick={() => memoSlider('left')}
          className="hover:text-gray_5 hover:cursor-pointer text-gray_3"
        />
        <TbLivePhoto size={16} className="text-gray_3" />
        <BsArrowRight
          size={32}
          onClick={() => memoSlider('right')}
          className="hover:text-gray_5 hover:cursor-pointer text-gray_3"
        />
      </div>
      <div className="w-[200px] h-[60px]">
        <ButtonMolecule text="Explore all stylists" size={Size.FULL} />
      </div>
    </section>
  );
};
