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
          <p className='text-white text-[16px] font-medium'>Japan Summit 2015</p>
        </div>
        <h2 className='text-[#FFF] capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold pl-[0px]  pt-[30px]'>
          SRII Japan Summit on March 1-2, 2015 in Tokyo
        </h2>

        <p className='text-[18px] font-[300] text-white pt-[25px]'>
          <span className='font-bold'>SRII (Service Research & Innovation Institute)</span> is a global ICT Research &
          Innovation Institute with a mission to drive ICT Innovation (Cloud computing, Mobile Services, Big data
          analytics, Security, Social) for major sectors of service economy (government, education, healthcare,
          transportation, manufacturing, agriculture & food safety, and etc) around the world. SRII member include
          senior leaders from industry, academia, research and government organizations from around the world.
        </p>

        <p className='pt-[20px] text-white '>
          <span className='font-bold '> SRII Japan Summit </span> key focus areas will include the following:
        </p>
        <ul className='list-disc text-white pl-[20px]'>
          <li>
            ICT Innovation for major sectors of economy (Healthcare, Manufacturing, Government, Smart
            Nation/Transportation, and etc)
          </li>
          <li>Innovating ICT for Agriculture & Food Safety</li>
          <li>Innovating ICT for Agriculture & Food Safety</li>
          <li>
            Build strong team work with leaders from industry, academia, research and government organizations for
            “Innovating Digital Economy for Japan”
          </li>
        </ul>

        <p className='pt-[50px] text-white '>
          <span className='font-bold '>Event Agenda </span> :{' '}
          <Link href='https://thesrii.org/images/Pdfs/JapanSummit2015Agenda.pdf' className='hover:font-bold '>
            https://thesrii.org/images/Pdfs/JapanSummit2015Agenda.pdf{' '}
          </Link>
        </p>

        <div className='z-[100] pt-[85px] max-w-[1356px] mx-auto'>
          <div className='grid grid-cols-2 gap-x-[30px]'>
            <div className=''>
              <Image
                src='/image/summits_page/summits_japan/1.png'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
            <div className='  '>
              <Image
                src='/image/summits_page/summits_japan/2.png'
                width={1000}
                height={1000}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
          </div>
          <div className='pt-[20px]'>
            <Image
              src='/image/summits_page/summits_japan/3.png'
              width={1350}
              height={542}
              className='w-full h-full object-cover'
              alt='summit'
            />
          </div>
          <div className='pt-[20px] grid grid-cols-12 gap-x-[20px]'>
            <div className='col-span-9 mx-auto '>
              <Image
                src='/image/summits_page/summits_japan/4.png'
                width={1005}
                height={420}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
            <div className='col-span-3 '>
              <Image
                src='/image/summits_page/summits_japan/5.png'
                width={327}
                height={420}
                className='w-full h-full object-cover'
                alt='summit'
              />
            </div>
          </div>
          <div className='pt-[20px] '>
            <Image
              src='/image/summits_page/summits_japan/6.png'
              width={1350}
              height={929}
              className='w-full h-full object-cover'
              alt='summit'
            />
          </div>
        </div>

        <Link href='https://www.flickr.com/photos/128066616@N06/albums/72157650854040747/' target='_blank' className='pt-8 md:pt-10 lg:pt-14  pb-2 md:pb-2 lg:pb-2.5 flex justify-end items-center'>
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
