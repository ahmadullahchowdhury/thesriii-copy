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
        className='absolute w-full h-full object-contain  top-56 left-0  -z-10'
      />
      <div className='bg-transparent max-w-[1356px] mx-auto pt-[100px] pb-[100px]'>
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
          <p className='text-white text-[16px] font-medium'>Europe Summit 2013</p>
        </div>
        <p className=' leading-normal text-[#FFF] capitalize text-2xl  lg:text-[50px] font-semibold pl-[0px]  pt-[30px]'>
          SRII Europe Leadership Summit, June 27 – 28, 2013 - Erlangen-Nuremberg, Germany
        </p>

        <div className='text-[18px] font-[300] text-white pt-[25px]'>
          <p className='font-bold'>June 27 – 28, 2013 - Erlangen-Nuremberg, Germany</p> hosted by Fraunhofer Institute
          for
          <p>
            {' '}
            Integrated Circuits (IIS), Erlangen and University of Erlangen-Nuremberg (Chair
            “Services-Processes-Intelligence”), Nuremberg{' '}
          </p>
        </div>

        <p className='pt-[50px] text-white '>
          <span className='font-bold '>Event Agenda </span> :{' '}
          <Link href='https://thesrii.org/images/Pdfs/EUSummit2013Agenda.pdf' className='hover:font-bold '>
            https://thesrii.org/images/Pdfs/EUSummit2013Agenda.pdf{' '}
          </Link>
        </p>

        <div className='pt-[85px] max-w-[1356px] mx-auto'>
          <div className='grid grid-cols-2 gap-x-[30px]'>
            <div className=''>
              <Image
                src='/image/summits_page/summits_europe/1.png'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
            <div className='  '>
              <Image
                src='/image/summits_page/summits_europe/2.png'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
          </div>
          <div className='pt-[20px]'>
            <Image
              src='/image/summits_page/summits_europe/3.png'
              width={1350}
              height={542}
              className='w-full h-full object-cover'
              alt='summit'
            />
          </div>
          <div className='pt-[20px] grid grid-cols-12 gap-x-[20px]'>
            <div className='col-span-7 mx-auto '>
              <Image
                src='/image/summits_page/summits_europe/4.png'
                width={1005}
                height={420}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
            <div className='col-span-5 '>
              <Image
                src='/image/summits_page/summits_europe/5.png'
                width={327}
                height={420}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
          </div>
          <div className='pt-[20px] '>
            <Image
              src='/image/summits_page/summits_europe/6.png'
              width={1350}
              height={929}
              className='w-full h-full object-cover'
              alt='summit'
            />
          </div>
        </div>
        <Link
          href='https://www.flickr.com/photos/128066616@N06/albums/72157649578065622/'
          target='_blank'
          className='pt-8 md:pt-10 lg:pt-14  pb-2 md:pb-2 lg:pb-2.5 flex justify-end items-center'
        >
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
