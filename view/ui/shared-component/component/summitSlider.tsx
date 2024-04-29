import Image from 'next/image';
import React, { useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import Slider from 'react-slick';

const SummitsSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const PrevButton = (props: any) => (
    <button
      {...props}
      // style={{ opacity: sliderIndex === 0 ? '0.5' : '1' }}
      className='summit-prev-button'
    >
      <Image
        width={100}
        height={100}
        src={`/image/summits/icon-left.svg`}
        className='  w-full h-full bg-cover'
        alt='icon'
      />
    </button>
  );

  const NextButton = (props: any) => (
    <button
      {...props}
      // style={{ opacity: sliderIndex === 3 ? '0.5' : '1' }}
      className='summit-next-button'
    >
      <Image
        width={100}
        height={100}
        src={`/image/summits/icon-right.svg`}
        className='  w-full h-full bg-cover'
        alt='icon'
      />
    </button>
  );

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: false,
    // speed: 600,
    // autoplaySpeed: 4000,
    // cssEase: 'linear',
    // adaptiveHeight: true,
    // pauseOnHover: false,
    arrows: true,
    // fade: true,
    // centerMode: true,
    // rows : 2,
    // centerPadding: '0',
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    // widthVariable: true,
    afterChange: (index: number) => setSliderIndex(index)
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  };
  return (
    <div className='bg-[#29323D] relative z-10'>
      <div className='  mx-auto xl:px-32 2xl:px-24 pb-10'>
        <p className='ps-5 pb-[44px] text-white text-[28px] font-medium capitalize'>
          SRII China Summit on March 4-6, 2015 in Shanghai
        </p>
        <Slider {...settings} className='slick-slider  mx-auto pb-9'>
          {' '}
          {Array.from({ length: 3 }).map((_, index) => (
            <div className='slick-slide' key={index}>
              <div className=' 2xl:max-w-[720px] 2xl:h-[450px] xl:max-w-[555px] xl:h-[338px] mx-auto '>
                <Image
                  width={740}
                  height={481}
                  src={`/image/summits/1-${index + 1}.png`}
                  className=' rounded-[12px] w-full h-full bg-cover'
                  alt='summits'
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className='mr-5'>
          <p className=' text-end text-white underline'> View Summit Details</p>
        </div>
      </div>
    </div>
  );
};

export default SummitsSlider;
