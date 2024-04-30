import { summit } from '@json-db';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import SummitsSlider from 'view/ui/shared-component/component/summitSlider';

const Hero = () => {
  return (
    <div>
      <div className='max-w-[1505px] mx-auto pt-[100px] pb-[100px]'>
        <div className='flex gap-[16px] pt-[60px] items-center'>
          <Link href='/' className='text-[#BBB] text-[16px] font-medium'>
            <span>Home</span>
          </Link>
          {/* <p className='text-white text-[16px] font-medium'>Summits</p> */}
          <IoIosArrowForward color={'white'} />
          <Link href='/summits' className='text-[#BBB] text-[16px] font-medium'>
            <span>Summits</span>
          </Link>
          <IoIosArrowForward color={'white'} />
          <p className='text-white text-[16px] font-medium'>Japan Summit 1015</p>
        </div>
        <h2 className='text-[#FFF] capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold pl-[0px]  pt-[30px]'>
          Global Conference 2015
        </h2>
        <div className='px-1 justify-start items-center gap-2.5 inline-flex'>
          <p className='text-center pt-[100px] pb-[50px] text-white text-4xl capitalize'>
            srii has organized and conducted countless summits worldwide.{' '}
          </p>
        </div>
        <div className='w-full px-[34px] py-[30px] bg-indigo-400 bg-opacity-60 rounded-[14px] flex-col justify-center items-center gap-[35px] inline-flex'>
          <div className='self-stretch justify-center items-center gap-2.5 inline-flex'>
            <div className='grow shrink basis-0 h-[49px] p-0.5 bg-slate-800 rounded-md justify-center items-center gap-2.5 flex'>
              <p className='w-full text-center text-white text-[30px] font-medium  capitalize'>Upcoming events</p>
            </div>
          </div>
          <div className='self-stretch flex-col justify-start items-start gap-4 flex'>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <p className='text-center text-white text-4xl font-medium  capitalize'>
                Silicon Valley Virtual Global Summit 2022
              </p>
            </div>
            <div className='max-w-[337px] text-center text-white text-[27px] font-medium underline capitalize'>
              Summit overview :{' '}
            </div>
            <div className='max-w-[325px] justify-center items-center gap-2.5 inline-flex'>
              <p className='text-center text-white text-[27px] font-medium underline capitalize'>
                Registration link :{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SummitsSlider data={summit[0]} />
      <SummitsSlider data={summit[1]} />
      <SummitsSlider data={summit[2]} />
      <SummitsSlider data={summit[3]} />
      <SummitsSlider data={summit[4]} />
    </div>
  );
};

export default Hero;
