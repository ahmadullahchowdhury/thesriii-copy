import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Hero = () => {
  return (
    <div className='bg-[#29323D] relative z-10'>
      <Image
        width={500}
        height={500}
        // sizes='100vw'
        // objectFit='cover'
        src='/image/bg-5.png'
        alt='hero-bg'
        className='absolute w-full h-full object-contain  top-52 left-0  -z-10'
      />
      <div className='  max-w-[1356px] mx-auto pt-[100px] pb-[100px]'>
        <div className='flex gap-[16px] pt-[60px] items-center'>
          <Link href='/' className='text-[#BBB] text-[16px] font-medium'>
            <span>Home</span>
          </Link>
          {/* <p className='text-white text-[16px] font-medium'>Summits</p> */}
          <IoIosArrowForward color={'white'} />
          <Link href='/summits' className='text-[#BBB] text-[16px] font-medium'>
            Summits
          </Link>
          <IoIosArrowForward color={'white'} />
          <p className='text-white text-[16px] font-medium'>India Summit 2012</p>
        </div>
        <h2 className='text-[#FFF] capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold pl-[0px]  pt-[30px]'>
        India Summit 2012
        </h2>


        <p className='pt-[50px] text-white '>
          <span className='font-bold '>Event Agenda </span> :{' '}
          <Link href='https://sriiconf.appspot.com' className='hover:font-bold '>
          https://sriiconf.appspot.com{' '}
          </Link>
        </p>

        <div className='z-[100] pt-[85px] max-w-[1356px] mx-auto'>
          <div className='grid grid-cols-2 gap-x-[30px]'>
            <div className=''>
              <Image
                src='/image/summits_page/summits_india/1.png'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
            <div className='  '>
              <Image
                src='/image/summits_page/summits_india/2.png'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
          </div>
          <div className='pt-[30px]'>
            <Image
              src='/image/summits_page/summits_india/3.png'
              width={1350}
              height={542}
              className='w-full h-full object-cover'
              alt='summit'
            />
          </div>

          <div className='pt-[30px]  '>
            <Image
              src='/image/summits_page/summits_india/4.png'
              width={1350}
              height={1000}
              className='w-full h-full object-cover'
              alt='summit'
            />
          </div>
        </div>

        <Link href='https://sriiconf.appspot.com/' target='_blank' className='pt-8 md:pt-10 lg:pt-14  pb-2 md:pb-2 lg:pb-2.5 flex justify-end items-center'>
          <div
            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
            className=' relative px-[50px] py-2 bg-white rounded-[50px] justify-center items-center gap-[29px] inline-flex'
          >
            <div className='p-[5px] justify-center items-center gap-2.5 flex'>
              <div className='text-center text-slate-500 text-base  lg:text-[24px] font-medium  capitalize'>
                View more pictures of the summit
              </div>
            </div>
            <div className='size-[10] flex justify-center items-center  top-0 right-0 bg-indigo-400 rounded-[30px]'>
              <IoIosArrowForward className='' color='white' size={40} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
