import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ShowBioModal({
  open,
  setOpen,
  showBioDetails
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  showBioDetails: {
    title: string;
    subTitle: string;
    image: string;
    desc: string;
  } | null;
}) {
  const cancelButtonRef = useRef(null);

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
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-[896px]'>
                <div className=' relative pt-5 p-[25px]  '>
                  <div className=' flex   justify-between sm:gap-4'>
                    <div className='flex flex-col  md:flex-row gap-2'>
                      <Image
                        alt='all'
                        width={300}
                        height={300}
                        className='size-[195px]'
                        src={showBioDetails?.image || '/default-icon.png'}
                      />
                    </div>
                    <div className='pt-[54px]'>
                      <p className='text-[#5C6898] text-[22px] md:text-[32px]  lg:text-[50px] font-bold  text-wrap'>
                        {showBioDetails?.title}
                      </p>
                      <p
                        dangerouslySetInnerHTML={{ __html: showBioDetails?.subTitle || '' }}
                        className='text-[#888] text-[22px] md:text-[32px]  lg:text-[30px]   text-nowrap'
                      ></p>
                    </div>
                    <div className=' cursor-pointer      ' onClick={() => setOpen(false)} ref={cancelButtonRef}>
                      <RxCross2 className='h-8 w-8 text-gray-800' aria-hidden='true' />
                    </div>
                  </div>

                  <div className='max-w-[846px] h-[1px] bg-[#000] mt-[32px] '></div>
                  <p
                    dangerouslySetInnerHTML={{ __html: showBioDetails?.desc || '' }}
                    className='p-[10px] font-[300] text-[#5f6b9a]'
                  ></p>
                </div>{' '}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
