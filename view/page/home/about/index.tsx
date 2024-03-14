import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const About = () => {
  return (
    <div className='bg-[#FBFBFB] py-26 md:py-20 lg:py-28  px-10 md:px-20 lg:px-10'>
      <div className='container-sm bg-blue-50 shadow-lg  p-8'>
        <h2 className='text-3xl py-5 lg:text-5xl font-bold text-slate-500  text-center'>About Us</h2>
        <div className='  mx-auto border-b-2  mb-10 relative '>
          <p className='text-slate-500 font-bold text-xl pb-3'>Kris Singh</p>
          <div className='z-10 absolute left-[0px] -bottom-[4px] h-2 w-2 bg-slate-500 rounded-full'></div>
        </div>
        <div className='grid grid-col-1  lg:grid-cols-12 p-2.5 gap-5'>
          <Image
            src={'/image/srii-president.jpeg'}
            className='mr-10  lg:col-span-2'
            alt='hero'
            width={200}
            height={200}
          />
          <div className='  lg:col-span-10'>
            <p className=' text-slate-500 font-bold text-xl pb-3'>Srii President</p>
            <div className='pt-3'>
              <span className='text-slate-500 text-base font-normal  leading-tight tracking-tight'>
                Kris Singh is the founder and CEO of{' '}
              </span>
              <span className='text-slate-500 text-base font-bold  leading-tight tracking-tight'>SRII</span>
              <span className='text-slate-500 text-base font-normal  leading-tight tracking-tight'>
                {' '}
                located in Silicon Valley, California. <br />
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
              </span>
            </div>
          </div>
        </div>

        <div className='  mx-auto border-b-2 pt-10  mb-7 relative '>
          <p className='text-slate-500 font-bold text-xl pb-3'>Our Mission</p>
          <div className='z-10 absolute left-[0px] -bottom-[4px] h-2 w-2 bg-slate-500 rounded-full'></div>
        </div>

        <div className=' text-slate-500 text-lg font-semibold  leading-[22.86px]'>
          "Innovating Digital Economy for a better World"
        </div>
        <div className='text-slate-500 pt-2 text-base font-normal  leading-tight tracking-tight'>
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
        <div className='pt-8 md:pt-10 lg:pt-14  pb-4 md:pb-5 lg:pb-8 flex justify-center items-center'>
          <div className=' relative px-[25px] py-3 bg-white rounded-[50px] justify-center items-center gap-[29px] inline-flex'>
            <div className='p-[5px] justify-center items-center gap-2.5 flex'>
              <div className='text-center text-slate-500 text-base  lg:text-2xl font-medium  capitalize'>
                Learn more about our mission
              </div>
            </div>
            <div className='w-12 h-12 flex justify-center items-center  top-0 right-0 bg-indigo-400 rounded-[30px]'>
              <IoIosArrowForward className=''  color='white'  size={44}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
