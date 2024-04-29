'use client';
import { summit } from '@json-db';
import Image from 'next/image';
import { Fragment } from 'react';
import Hero from 'view/page/summits/hero';
import SummitsSlider from 'view/ui/shared-component/component/summitSlider';

const PageBody = () => {
  return (
    <div className='bg-[#29323D]'>
      <Hero />
      <SummitsSlider data={summit[0]} />
      <SummitsSlider data={summit[1]} />
      <SummitsSlider data={summit[2]} />
      <SummitsSlider data={summit[3]} />
    </div>
  );
};

export default PageBody;
