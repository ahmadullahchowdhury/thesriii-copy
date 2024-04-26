import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ProjectModal({
  open,
  setOpen,
  pricingDetails
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  pricingDetails: {
    title: string;
    icon: string;
    desc: string;
    info: string;
    price: string;
    benefits: string[];
  } | null;
}) {
  const cancelButtonRef = useRef(null);
  console.log('pricingDetails', pricingDetails);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        style={{ zIndex: 10000 }}
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity  ' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full  justify-center p-4 text-center items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-[741px]'>
                <div className=' relative pt-5 px-8 sm:px-6 md:px-4  '>
                  <div className=' flex  items-center justify-around sm:gap-4'>
                    <div className='flex flex-col  md:flex-row gap-2'>
                      <Image
                        alt='all'
                        width={119}
                        height={119}
                        className=''
                        src={pricingDetails?.icon || '/default-icon.png'}
                      />
                    </div>
                    <p className='text-[#5C6898] text-[22px] md:text-[32px] text-center lg:text-[25px] font-semibold  text-nowrap'>
                      {pricingDetails?.title}
                    </p>
                    <div className=' cursor-pointer      ' onClick={() => setOpen(false)} ref={cancelButtonRef}>
                      <RxCross2 className='h-8 w-8 text-gray-800' aria-hidden='true' />
                    </div>
                  </div>

                  <div className='p-[8px] mt-[46px] '>
                    <p className='text-[#5C6898] text-[14px] px-[80px]'>{pricingDetails?.desc}</p>
                  </div>
                  <p
                    style={{
                      borderRadius: '8px',
                      background: 'rgba(239, 239, 239, 0.70)'
                    }}
                    className='px-10 text-[#5C6898] text-[14px] max-w-[280px] md:max-w-[643px] mx-auto text-center text-base py-[8px] mt-[30px]'
                  >
                    Benefits include
                  </p>
                  <div className='custom-scroll h-[150px]  overflow-y-scroll mr-8 my-2'>
                    <ul className='  mx-[70px] p-[8px] list-disc text-[#5C6898] '>
                      {pricingDetails?.benefits.map((benefit, index) => (
                        <li key={index} className='text-[#5C6898] text-[14px] '>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p
                    style={{
                      borderRadius: '8px',
                      background: 'rgba(239, 239, 239, 0.70)'
                    }}
                    className='px-10 text-[#5C6898] text-[14px] max-w-[280px] md:max-w-[643px] mx-auto text-center text-base py-[8px] mt-[40px]'
                  >
                    Membership fee
                  </p>

                  <div className='px-[60px] text-[16px] pt-[27px] space-y-[24px] text-[#5C6898]'>
                    <p>
                      {' '}
                      Duration : <span className='font-semibold'> 1 year </span>{' '}
                    </p>
                    <p>
                      {' '}
                      Price : <span className='font-semibold'> {pricingDetails?.price} </span>{' '}
                    </p>
                    <p className='text-[#D24444] text-[10px] font-[500]'>{pricingDetails?.info}</p>
                  </div>
                  <div className='flex justify-end mt-[16px] mb-[67px] max-w-[643px] mx-auto '>
                    <button
                      type='button'
                      className='flex justify-end w-full  rounded-md bg-[#6E8BEB] px-[28px] py-[11px] text-base font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                      // onClick={() => setOpen(false)}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
