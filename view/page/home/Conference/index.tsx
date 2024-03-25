
import Image from 'next/image';
import React from 'react';
import Slider from '../Slider';

const Conference = () => {


  return (
    <div className='bg-[#FBFBFB]'>

    <div className=' mx-10 md:mx-20 lg:mx-10'>
      <div className='container-sm py-8 md:py-16 lg:py-20'>
        <div className='text-center text-slate-500 text-4xl  md:text-[50px] font-medium  capitalize'>Keynote/Speaker panel</div>

        <div className='px-5 py-5  lg:px-64 text-center text-slate-500 text-base font-normal  leading-normal'>
          Lorem ipsum dolor sit amet consectetur. Donec adipiscing ac condimentum tristique suspendisse malesuada. Sem
          adipiscing praesent vitae dolor dolor at augue viverra aenean. Diam eu accumsan nulla odio risus nunc amet
          praesent urna. Consequat egestas aliquet urna leo cursus suscipit.
        </div>

        {/* <div className='px-0 md:px-9 py-[37px] rounded-[10px] flex-col justify-center items-center gap-[30px] inline-flex'>
          <div className='flex-col justify-start items-center gap-[53px] flex'>
            <div className='justify-center items-center gap-[100px] inline-flex'>

              <div className="text-center text-slate-500 text-2xl font-bold">
                SRII Global Conference 2014 Keynote/Panel Speakers Included:
              </div>

            </div>
            <div className='flex-col justify-start items-start gap-8 flex'>
              <div className='px-1 md:px-5 justify-center items-center gap-y-12 md:gap-y-0 gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8'>
                {
                  data.map(item => 
                    <div className='h-[236px] flex-col justify-start items-center gap-[9px] inline-flex'>
                    <div className=' bg-white rounded-[10px] flex-col justify-center items-center flex'>
                      <Image width={100} height={100} alt="conf" className='w-[117px] h-[156px] rounded-xl' src={item.image} />
                    </div>
                    <div className='flex-col justify-center items-center gap-0.5 flex'>
                      <div className=" text-center text-slate-500 text-sm font-bold  ">{item.name}</div>
                      <div className="text-slate-500 text-[10px] text-center  font-normal ">{item.designation}</div>
                    </div>
                  </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className='justify-start items-start gap-[17px] inline-flex'>
            <div className='w-[65px] h-[13px] relative bg-indigo-400 rounded-[9px]' />
            <div className='w-[65px] h-[13px] relative bg-zinc-400 rounded-[9px]' />
            <div className='w-[65px] h-[13px] relative bg-zinc-400 rounded-[9px]' />
          </div>
        </div> */}

        <Slider/>
      </div>
    </div>
    </div>
  );
};

export default Conference;
