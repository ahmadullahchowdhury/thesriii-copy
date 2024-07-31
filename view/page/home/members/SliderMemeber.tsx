
"use client"
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from 'view/ui/shared-component/component/swiperbutton';

import '../../../../styles/customswiper.css';

import Image from 'next/image';
import {  members, board_member_showBioDetails } from '@json-db';

import ShowBioModal from 'view/ui/shared-component/component/showbioModal';
import { useState } from 'react';

function SliderMember() {
  const [open, setOpen] = useState(false);
  const [selectedBioDetails, setSelectedBioDetails] = useState<number>(0);



  return (
    <div className='App '>
      <Swiper modules={[Navigation, Pagination, A11y]} spaceBetween={30} 
            breakpoints={{
              // when window width is <= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is <= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is <= 1024px
              1024: {
                slidesPerView: 4,
              },
            }}>

        {
          members.map((item, index) => (
            
        <SwiperSlide className=' h-[100px] '>
          {' '}
          <div className='  pt-5 md:pt-8 lg:pt-12  justify-start items-start gap-14 inline-flex'>
            
              <div className='flex-col justify-start items-start gap-3 inline-flex'>
                <Image
                  alt='members'
                  width={400}
                  height={400}
                  className='w-[277px] h-[277px] rounded-[5px]'
                  src={item.image}
                />
                <div className='min-h-[230px] grid grid-rows-2 justify-between gap-5 '>
                  <div className=''>
                    <div className='text-zinc-800 text-2xl font-bold text-left'>{item.name}</div>
                    <div className='w-[275px] pt-2 text-zinc-500 text-base text-left font-light '>{item.designation}</div>
                  </div>
                  <div                   onClick={() => {
                    setOpen(true);
                    setSelectedBioDetails(index);
                  }} className='text-zinc-500 text-xl font-normal cursor-pointer underline'>Show bio</div>
                </div>
              </div>
          
          </div>
        </SwiperSlide>
          ))
        }

        <SwiperNavButtons />
      </Swiper>
      <ShowBioModal open={open} setOpen={setOpen} showBioDetails={board_member_showBioDetails[selectedBioDetails]} />
    </div>
  );
}

export default SliderMember;
