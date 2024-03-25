import Image from 'next/image';
import React from 'react';
import SliderMember from './SliderMemeber';

const Members = () => {
  return (
    <div className='bg-[#FBFBFB] py-8 md:py-12 lg:py-16 px-10 md:px-20 lg:px-10 '>
      <div className='container-sm'>
        <div className='text-center text-slate-500 text-[50px] font-medium  capitalize'>Members of the Board</div>
        <div className=' '>
          <SliderMember />
        </div>
      </div>
    </div>
  );
};

export default Members;
