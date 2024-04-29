import Image from 'next/image';
import React from 'react';
import KeyNoteSpeakerSlider from './KeyNoteSpeakerSlider';

const KeyNoteSpeaker = () => {
  return (
    <div className='bg-[#FBFBFB] relative z-10'>
      {/* <Image
        width={0}
        height={0}
        sizes='100vw'
        objectFit='contain'
        src='/image/bg-1.png'
        alt='hero-bg'
        className='absolute w-full h-full object-cover opacity-50 top-0 left-0 -z-10'
      /> */}

      <div className=' mx-10 md:mx-20 lg:mx-10'>
        <div className='container-sm py-8 md:py-16 lg:py-20'>
          <div className='text-center text-slate-500 text-4xl  md:text-[50px] font-medium  capitalize'>
            Keynote/Speaker panel
          </div>

          <div className='px-5 py-5  lg:px-64 text-center text-slate-500 text-base font-normal  leading-normal'>
            Srii has masterfully curated conferences that boast a distinguished assembly of esteemed members, each
            wielding profound influence and expertise. Their collective contributions have been instrumental in
            propelling Srii's overarching goals to new heights of accomplishment and impact.
          </div>

          <KeyNoteSpeakerSlider />
        </div>
      </div>
    </div>
  );
};

export default KeyNoteSpeaker;
