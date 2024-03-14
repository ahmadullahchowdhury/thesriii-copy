import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns  pb-5">
      <button onClick={() => swiper.slidePrev()}><IoIosArrowBack className=''  color='white'  size={44}/></button>
      <button onClick={() => swiper.slideNext()}><IoIosArrowForward className='ml-2'  color='white'  size={44}/></button>
    </div>
  );
};