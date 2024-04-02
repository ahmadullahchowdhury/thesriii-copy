import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const About = () => {
  return (
    <div className='bg-[#F4F4F4] pt-26 md:pt-20 lg:pt-[100px] pb-12 md:pb-16 lg:pb-20  px-10 md:px-20 lg:px-10 z-10 relative'>
      <Image
        width={0}
        height={0}
        sizes='100vw'
        objectFit='contain'
        src='/image/bg-2.png'
        alt='hero-bg'
        className='absolute w-full h-full object-cover top-0 left-0 -z-10'
      />
      <div style={{ boxShadow: '3px 4px 18.6px 0px rgba(0, 0, 0, 0.25)' }} className='container-sm bg-[#F1F5FF] p-8'>
        <h2 className='text-3xl pb-5 lg:text-5xl font-bold text-slate-500  text-center'>About Us</h2>
        <div className='  mx-auto border-b-2 border-[#A9A9A9]/50  mb-6 relative '>
          <p className='text-slate-500 font-bold text-xl pb-3'>Kris Singh</p>
          <div className='z-10 absolute left-[0px] -bottom-[4.5px] h-2 w-2 bg-[#A9A9A9]/90 rounded-full'></div>
        </div>
        <div className='grid grid-col-1  lg:grid-cols-10 p-2.5 gap-5'>
          <Image
            src={'/image/mem_kris.png'}
            className=' w-full h-full object-cover rounded-md  lg:col-span-2'
            alt='hero'
            width={600}
            height={600}
          />
          <div className='  lg:col-span-8'>
            <p className=' text-slate-500 font-bold text-xl pt-6 pb-2.5'>Srii President</p>
            <div className=''>
              <p className='leading-relaxed tracking-[-0.015em] text-slate-500 text-base font-medium'>
                Kris Singh is the founder and CEO of{' '}
                <span className='text-slate-500 text-lg font-bold   tracking-tight'>SRII </span>
                located in Silicon Valley, California.
                <br />
                Kris has been a senior leader in the Silicon Valley for more than 30 years and has worked with major IT
                companies such as IBM Research, Intel, AMD and National Semiconductor. Kris has also been working
                closely with academia to help drive “Innovation in Education & Entrepreneurship”.
                <br />
                Currently he is a visiting professor at Tsinghua University in China and has been an Industry Fellow in
                the College of Engineering at UC Berkeley and an adjunct professor in the Electrical Engineering &
                Computer Science department at Santa Clara University, CA.
                <br />
                Kris is also on the board and advisory member of several startup companies and he is a regular speaker
                at major forums and conferences around the world.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className='  mx-auto border-b-2 pt-12  mb-6 relative '>
          <p className='text-slate-500 font-bold text-2xl pb-3'>Our Mission</p>
          <div className='z-10 absolute left-[0px] -bottom-[4.5px] h-2 w-2 bg-[#A9A9A9]/90 rounded-full'></div>
        </div>

        <div className=' text-slate-500 text-lg font-semibold  leading-[22.86px]'>
          "Innovating Digital Economy for a better World"
        </div>
        <div className='leading-[26px] tracking-[0.18px] text-[#5C6898] pt-2 text-base font-normal'>
          "At <span className='text-slate-500 text-base font-bold  leading-tight tracking-tight'>SRII</span>
          <span className='text-slate-500 text-base font-normal  leading-tight tracking-tight'>
            , our mission is to pioneer sustainable solutions through research, innovation, and collaboration. We strive
            to address pressing global challenges by harnessing the collective power of science, technology, and
            entrepreneurship. Through interdisciplinary partnerships and evidence-based practices, we aim to create
            lasting positive impact, promoting environmental stewardship, social equity, and economic resilience. Our
            commitment is to lead the way towards a more sustainable and inclusive future, ensuring the well-being of
            current and future generations."
          </span>
        </div>
        <div className='pt-8 md:pt-10 lg:pt-14  pb-2 md:pb-2 lg:pb-2.5 flex justify-center items-center'>
          <div
            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
            className=' relative px-[25px] py-3 bg-white rounded-[50px] justify-center items-center gap-[29px] inline-flex'
          >
            <div className='p-[5px] justify-center items-center gap-2.5 flex'>
              <div className='text-center text-slate-500 text-base  lg:text-2xl font-medium  capitalize'>
                Learn more about our mission
              </div>
            </div>
            <div className='w-12 h-12 flex justify-center items-center  top-0 right-0 bg-indigo-400 rounded-[30px]'>
              <IoIosArrowForward className='' color='white' size={44} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
