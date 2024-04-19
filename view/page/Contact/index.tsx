import Image from 'next/image';
import React from 'react';

const ContactUs = ({ bg_color }: { bg_color?: string }) => {
  return (
    <div className={`bg-[${bg_color}] dark:bg-[${bg_color}]`}>
      <div className={`container-sm pt-8 md:pt-12 lg:pt-[85px]  pb-8 md:pb-32 lg:pb-48 `}>
        <div className=' text-center text-slate-500 text-[50px] font-semibold capitalize'>Contact us</div>
        <div className='pt-1 md:pt-2 lg:pt-3.5 px-10 lg:px-96 md:px-44 text-center text-slate-500 text-base font-normal  leading-normal'>
          For any concerns please contact us via the details mentioned below. Join SRII & promote digital economoy
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-5 lg:pt-7 gap-14'>
          <div>
            <div className='text-slate-500 text-2xl font-medium '>Location</div>
            <div className='pt-4 md:pt-5 lg:pt-8  '>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1071912577954!2d-121.96958712360016!3d37.38729723438476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9939e824711%3A0xd995dc7b34fd79c5!2s2350%20Mission%20College%20Blvd%20%23290%2C%20Santa%20Clara%2C%20CA%2095054%2C%20USA!5e0!3m2!1sen!2sbd!4v1710498178315!5m2!1sen!2sbd'
                //   width='600'
                //   height='450'
                style={{ border: 0 }}
                loading='lazy'
                className='rounded-md shadow w-full h-[400px] md:h-[580px]'
              ></iframe>
            </div>
          </div>
          <div className=''>
            <div className='text-slate-500 text-2xl font-medium '>Contact person</div>
            <div className='pt-4 md:pt-5 lg:pt-7'>
              <div className=''>
                <div className='grid grid-col-1 md:grid-cols-2 gap-5'>
                  <div>
                    <Image
                      width={400}
                      height={400}
                      alt='contact'
                      className='w-[277px] h-[277px]'
                      src='/image/shihab.png'
                    />
                    <div className=''>
                      <div className='leading-[45px] text-zinc-800 text-2xl lg:text-3xl font-bold py-3 '>
                        Shihab Uddin Chowdhury
                      </div>
                      <div className='py-1 '>
                        <div className='text-zinc-800 text-base font-light py-1'>Manager SRII Information Systems</div>
                        <div className='py-1'>
                          <span className='text-zinc-500 text-base font-light '>LinkedIn:</span>
                          <span className='text-zinc-500 text-base font-light '> </span>
                          <span className='text-zinc-500 text-base font-normal  underline'>
                            linkedin/
                            <br />
                            shihab-uddin-chowdury
                          </span>
                        </div>
                        <div className='py-1'>
                          <span className='text-zinc-500 text-base font-light '>WeChat ID: </span>
                          <span className='text-zinc-500 text-base font-normal '>shihab47471</span>
                        </div>
                        <div className='text-zinc-800 text-base font-light '>+88 01833947471</div>
                      </div>
                      <div className='text-zinc-500 text-base lg:text-xl font-normal underline py-3'>
                        cshihab04@gmail.com
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={400}
                      height={400}
                      alt='contact'
                      className='w-[277px] h-[277px]'
                      src='/image/pavlina.png'
                    />
                    <div className='leading-[45px] text-zinc-800 text-2xl lg:text-3xl font-bold py-3 '>
                      Pavlina <br /> Davcheva
                    </div>
                    <div className='py-1'>
                      <div className='text-zinc-800 text-base font-light py-1'>
                        SRII Head of Information Systems / Membership
                      </div>
                      <div className='py-1'>
                        <span className='text-zinc-500 text-base font-light '>Skype:</span>
                        <span className='text-zinc-500 text-base font-light '> </span>
                        <span className='text-zinc-500 text-base font-normal  underline'>zad_pd</span>
                      </div>
                      <div className='text-zinc-800 text-base font-light '>+49 (0)911 5302-477</div>
                      <div className='py-1 opacity-0'>
                        <span className='text-zinc-500 text-base font-light '>1</span>
                        <span className='text-zinc-500 text-base font-normal '>1</span>
                      </div>
                    </div>
                    <div className='text-zinc-500 text-base lg:text-xl font-normal underline py-3'>
                      pavlina@thesrii.org
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
