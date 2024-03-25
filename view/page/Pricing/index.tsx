import { pricingData } from '@json-db';
import React from 'react';
import { IoIosArrowForward ,IoIosPeople } from 'react-icons/io';

const PricingPage = () => {
  return (
    <div className='bg-gradient-to-b from-neutral-100 to-indigo-300'>
      <div className=' min-h-screen bg-cover bg-[url(/image/Pricing.png)] pb-10 md:pb-20 lg:pb-28 '>
        <div className='pt-16 md:pt-20 lg:pt-28 pb-4 md:pb-6 lg:pb-10 border-black border-b '>
          <div className='p-2.5 '>
            <div className='text-slate-800  text-center text-2xl md:text-3xl  lg:text-4xl font-bold '>
              Pick a Membership that suits you
            </div>
          </div>
          <div className='py-[13px]  '>
            <div className='max-w-[300px] md:max-w-[600px] mx-auto text-center  text-slate-800 text-base font-normal '>
              Explore our diverse range of membership opportunities, each offering tailored benefits designed to cater
              to the unique needs of every individual or group.
            </div>
          </div>
        </div>
        <div className='max-w-[400px] mx-auto pt-5 md:pt-5 lg:pt-8 pb-6 md:pb-8 lg:pb-12  '>
          <div className=' h-14  py-2.5 rounded-lg border-2 border-slate-800 '>
            <div className='text-center text-slate-800 text-2xl font-bold'>Annual Packages</div>
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 pt-9 md:pt-10 lg:pt-12 gap-9 md:gap-10 lg:gap-20 px-16 md:px-24 lg:px-5 '>
          {pricingData.map((item, index) => (
            <div key={index} className='bg-white pt-20 md:pt-24 relative rounded-lg grid items-end  '>
              <div className='absolute -top-14  transform shadow-md   -translate-y-1 translate-x-[60%]  bg-[#EDF0F4] rounded-full h-32 w-32 flex items-center justify-center'>
                <IoIosPeople size={66} color='#6E8BEB' />
              </div>
              <div className=' text-gray-600 text-base font-semibold px-10 md:px-12 lg:px-14'>
                {item.title}
              </div>
              <div className=' leading-[19px] text-gray-600 text-[12px] font-normal py-6 md:py-9 lg:py-9 px-10 md:px-12 lg:px-14 '>
                {item.desc}
              </div>
              <div className='border-t-2 border-solid border-gray-100'>

              <div className='   p-3'>
                <div className='justify-center items-center gap-1.5 flex'>
                  <div className='text-center'>
                    <span className='text-gray-700 text-[25px] font-normal '>$</span>
                    <span className='text-gray-700 text-[35px] font-normal f'>{item.price}</span>
                  </div>
                  <div className=''>
                    <div className='w-8 text-gray-700 text-opacity-75 text-[9px] font-normal '>per year</div>
                  </div>
                </div>
                <div className='pt-4 md:pt-5 lg:pt-6'></div>
                <div className='  px-7 py-[11px] bg-indigo-400 rounded-[5px] justify-center items-center gap-2.5 flex'>
                  <div className='text-white text-base font-normal '>Details</div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
