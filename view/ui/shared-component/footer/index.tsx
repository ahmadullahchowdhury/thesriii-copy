import { footerData } from '@json-db';
import Image from 'next/image';
// import ScrollTop from "../scrollTop";
import Link from 'next/link';

const usefulLink = [
  {
    title: 'Socials',
    tel: '02-222394444',
    links: [
      {
        name: 'Facebook',
        to: 'https://www.komen.org/'
      },
      {
        name: 'Linkedin',
        to: 'https://www.cancer.org/'
      },
      {
        name: 'Flickr',
        to: 'https://www.breastcancerhub.org/'
      },
      {
        name: 'Twitter',
        to: 'https://www.breastcancerhub.org/'
      },
      {
        name: 'Vimeo',
        to: 'https://www.breastcancerhub.org/'
      },
      {
        name: 'Youtube',
        to: 'https://www.breastcancerhub.org/'
      }
    ]
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-text_color  duration-700 body-font bg-primary  relative'>
      <div className='container-sm px-10 sm:max-lg:pl-10 py-10 lg:py-14 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-y-12 md:gap-y-16 gap-x-8 sm:gap-x-16  lg:gap-x-8'>
        <div className='lg:col-span-2'>
          {/* <div className=""> */}

          <a className='flex title-font font-medium items-center justify-start  text-text_color  duration-700'>
            <span>
              <Image width={400} height={400} quality={100} className='w-full h-16' alt='logo' src={'/logo/logo.png'} />
            </span>
          </a>
          {/* <p className="mt-4 md:pr-8 lg:pr-5 max-w-md m-right text-base text-white">
                  I recollect my entire journey till date as Professor of  Surgical Oncology in St. Johns Medical College with  honour & gratification.
               </p> */}
          {/* <p className="text-text_color  duration-700 hover:text-gray-700 rounded mt-3 font-bold">Phone: + 919980007455</p> */}
          {/* <p className="text-text_color  duration-700 hover:text-gray-700 rounded mt-3 font-bold">Email: srakesh99@yahoo.com</p> */}
        </div>
        {/* </div> */}
        {footerData?.map((dt, i) => (
          <div key={i} className='col-span-1 w-40 justify-self-start'>
            <h2 className='text-white  duration-700 text-2xl md:text-2xl lg:text-xl xl:text-2xl font-semibold  leading-[33.60px] mb-5 whitespace-nowrap'>
              {dt?.title}
            </h2>
            <nav className='list-none'>
              {dt?.links.map((link: { name: string; to: string }, i) => (
                <li key={i} className='mt-3'>
                  {link?.to ? (
                    <Link href={link?.to} className='text-white duration-700 cursor-pointer hover:text-gray-500 '>
                      {link?.name}
                    </Link>
                  ) : (
                    <a className='text-white duration-700 hover:text-gray-500 cursor-pointer'>{link?.to}</a>
                  )}
                </li>
              ))}
            </nav>
          </div>
        ))}
        {usefulLink?.map((dt, i) => (
          <div key={i} className='w-40 md:pe-56 justify-self-start'>
            <h2 className='text-white  duration-700 text-2xl md:text-2xl lg:text-xl xl:text-2xl font-semibold  leading-[33.60px] mb-5 whitespace-nowrap'>
              {dt?.title}
            </h2>
            <nav className='list-none '>
              {dt?.links.map((link: { name: string; to: string }, i) => (
                <li key={i} className='mt-3'>
                  {link?.to ? (
                    <a
                      target='_blank'
                      href={link?.to}
                      className='text-white  duration-700 cursor-pointer hover:text-gray-500 '
                    >
                      {link?.name}
                    </a>
                  ) : (
                    <a className='text-text_color  duration-700 hover:text-gray-500 cursor-pointer'>{link?.to}</a>
                  )}
                </li>
              ))}
            </nav>
          </div>
        ))}
        <div className='lg:pl-2 lg:col-span-2'>
          <p className='text-white text-center text-2xl  md:text-2xl lg:text-xl xl:text-2xl   mb-2 whitespace-nowrap '>
            Subscribe to the <span className='font-bold'> SRII </span>
          </p>
          <p className='text-white text-center text-2xl  md:text-2xl lg:text-xl xl:text-2xl   mb-5 whitespace-nowrap '>
            Newsletter
          </p>
          <nav className='list-none flex justify-center'>
            <div className='relative  md:w-full bg-[#09132E] rounded py-2 mb-4 px-3 leading-8 flex justify-between'>
              <input
                placeholder='Enter your email'
                className='bg-[#09132E] focus:outline-none border-0 py-1 pl-1 text-white'
                type='email'
              />
              <button className='bg-[#6E8BEB]  text-white border-0 focus:outline-none hover:shadow-custom-red rounded p-2.5 text-base'>
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* LAST SECTION/COPY RIGHT SECTION  */}
      {/* <div className="text-base-content ">
            <div className='container gap-y-3 flex flex-col sm:flex-col md:flex-row lg:flex-row  justify-start md:justify-between lg:justify-between mx-auto p-4 border-t border-base-100/30 text-text_color  '>
               <p className="font-inter font-normal text-center text-base-100/60 text-sm">
                  <a href="#" className="text-text_color duration-700 hover:text-gray-300 p-2">
                     Design by pxlstudio
                  </a>
                  <span> | </span>
                  <a href="#" className="text-text_color  duration-700 hover:text-gray-300 p-2">
                     Copyright ©  {currentYear} ONCOLOGY
                  </a>
                  <span> | </span>
                  <a href="#" className="text-text_color  duration-700 hover:text-gray-300 p-2">
                     ©  {currentYear} Dr. Rakesh S Ramesh. All rights reserved
                  </a>
               </p>
            </div>
         </div> */}
      {/* <ScrollTop /> */}
    </footer>
  );
};

export default Footer;
