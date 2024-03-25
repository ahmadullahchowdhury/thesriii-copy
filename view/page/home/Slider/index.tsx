import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { conference_slider_1, conference_slider_2, conference_slider_3 } from '@json-db';
import Image from 'next/image';

export default function Slider() {
  return (
    <div className=' '>
      <div className=''>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className=' '>
              {' '}
              <div className='px-0 md:px-9 py-[50px] rounded-[10px] flex-col justify-center items-center gap-[30px] inline-flex'>
                <div className='flex-col h-[] justify-start items-center gap-[25px] lg:gap-[53px] flex'>
                  <div className='justify-center items-center gap-[100px] inline-flex'>
                    <div className='pt-24  px-20 md:px-0 md:pt-0 text-center text-slate-500 text-sm lg:text-2xl font-bold'>
                      SRII Global Conference 2014 Keynote/Panel Speakers Included:
                    </div>
                  </div>
                  <div className='flex-col justify-start items-start gap-8 flex'>
                    <div className='px-1 md:px-5 justify-center items-center gap-y-12 md:gap-y-0 gap-x-2.5 md:gap-x-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8'>
                      {conference_slider_1.map(item => (
                        <div className='h-[236px] flex-col justify-start items-center gap-[9px] inline-flex'>
                          <div className=' bg-white rounded-[10px] flex-col justify-center items-center flex'>
                            <Image
                              width={500}
                              height={500}
                              alt='conf'
                              className='w-[117px] h-[156px] rounded-xl'
                              src={item.image}
                            />
                          </div>
                          <div className='flex-col justify-center items-center gap-0.5 flex'>
                            <div className=' text-center text-slate-500 text-sm font-bold  '>{item.name}</div>
                            <div className='text-slate-500 text-[10px] text-center  font-normal '>
                              {item.designation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' '>
              {' '}
              <div className='px-0 md:px-9 py-[50px] rounded-[10px] flex-col justify-center items-center gap-[30px] inline-flex'>
                <div className='flex-col h-[] justify-start items-center gap-[25px] lg:gap-[53px] flex'>
                  <div className='justify-center items-center gap-[100px] inline-flex'>
                    <div className='pt-24  px-20 md:px-0 md:pt-0 text-center text-slate-500 text-sm lg:text-2xl font-bold'>
                    SRII Global Conference 2012 Keynote/Panel Speakers Included:
                    </div>
                  </div>
                  <div className='flex-col justify-start items-start gap-8 flex'>
                    <div className='px-1 md:px-32 justify-center items-center gap-y-12 md:gap-y-0 gap-x-2.5 md:gap-x-1 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                      {conference_slider_2.map(item => (
                        <div className='h-[236px] flex-col justify-start items-center gap-[9px] inline-flex'>
                          <div className=' bg-white rounded-[10px] flex-col justify-center items-center flex'>
                            <Image
                              width={300}
                              height={300}
                              alt='conf'
                              className='w-[117px] h-[156px] rounded-xl'
                              src={item.image}
                            />
                          </div>
                          <div className='flex-col justify-center items-center gap-0.5 flex'>
                            <div className=' text-center text-slate-500 text-sm font-bold  '>{item.name}</div>
                            <div className='text-slate-500 text-[10px] text-center  font-normal '>
                              {item.designation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=' '>
              {' '}
              <div className='px-0 md:px-9 py-[50px] rounded-[10px] flex-col justify-center items-center gap-[30px] inline-flex'>
                <div className='flex-col h-[] justify-start items-center gap-[25px] lg:gap-[53px] flex'>
                  <div className='justify-center items-center gap-[100px] inline-flex'>
                    <div className='pt-24  px-20 md:px-0 md:pt-0 text-center text-slate-500 text-sm lg:text-2xl font-bold'>
                    SRII Global Conference 2011 Keynote/Panel Speakers Included:
                    </div>
                  </div>
                  <div className='flex-col justify-start items-start gap-8 flex'>
                    <div className='px-1 md:px-5 justify-center items-center gap-y-12 md:gap-y-0 gap-x-2.5 md:gap-x-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8'>
                      {conference_slider_3.map(item => (
                        <div className='h-[236px] flex-col justify-start items-center gap-[9px] inline-flex'>
                          <div className=' bg-white rounded-[10px] flex-col justify-center items-center flex'>
                            <Image
                              width={500}
                              height={500}
                              alt='conf'
                              className='w-[117px] h-[156px] rounded-xl'
                              src={item.image}
                            />
                          </div>
                          <div className='flex-col justify-center items-center gap-0.5 flex'>
                            <div className=' text-center text-slate-500 text-sm font-bold  '>{item.name}</div>
                            <div className='text-slate-500 text-[10px] text-center  font-normal '>
                              {item.designation}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
