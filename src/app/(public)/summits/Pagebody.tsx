'use client';
import { summit } from '@json-db';
import Image from 'next/image';
import { Fragment } from 'react';
import Hero from 'view/page/summits/hero';
import SummitsSlider from 'view/ui/shared-component/component/summitSlider';

const PageBody = () => {
  return (
    <div className='bg-[#29323D] relative z-10'>
      <Image
        width={1000}
        height={1000}
        src='/image/bg-5.png'
        alt='hero-bg'
        className='absolute w-full h-full object-cover  top-72 -z-10 '
      />
      <Hero />
      {/* <SummitsSlider data={summit[0]} />
      <SummitsSlider data={summit[1]} />
      <SummitsSlider data={summit[2]} />
      <SummitsSlider data={summit[3]} />
      <SummitsSlider data={summit[4]} /> */}
    </div>
  );
};

export default PageBody;
