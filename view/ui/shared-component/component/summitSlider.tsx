import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';

const SummitsSlider = ({ data }: { data: any }) => {
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
        className='w-full h-full bg-cover'
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
    // className: 'center',
    // centerMode: true,
    // infinite: true,
    // centerPadding: '0px',
    // fade: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,

    afterChange: (index: number) => setSliderIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className='bg-transparent relative z-10'>
      {/* <Image
        width={0}
        height={0}
        sizes='100vw'
        src='/image/bg-5.png'
        alt='hero-bg'
        className='absolute w-full h-full object-cover  top-0 left-0 -z-10'
      /> */}
      <div className='max-w-[1713px]  mx-auto xl:px-32 2xl:px-24 pb-10'>
        <div className='  px-3 pb-5'>
          <p className='pb-[44px] text-white text-[28px] font-medium capitalize'>{data?.title}</p>
        </div>
        <div className='mx-auto pb-9'>
          <Slider {...settings}>
            {data?.images?.map((item: string, index: number) => (
              <div key={index}>
                <div className='2xl:max-w-[720px] 2xl:h-[450px] xl:max-w-[555px] xl:h-[338px] mx-auto '>
                  <Image
                    width={740}
                    height={481}
                    src={item}
                    className='rounded-[12px] w-full h-full bg-cover'
                    alt={item}
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
    </div>
  );
};

export default SummitsSlider;
