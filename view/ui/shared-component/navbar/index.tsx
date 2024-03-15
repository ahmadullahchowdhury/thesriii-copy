'use client';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavbar from './mobile-navbar';
import { navbarData } from '@json-db';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ThemeSwitch from '../ThemeSwitch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const pathname = usePathname();

  return (
    <div className='z-10 bg-primary sticky top-0'>
      <div className='w-full '>
        <div className='   mx-auto w-full overflow-hidden '>
          <div className=' container-sm w-full py-4 mx-auto  duration-700  ease-in-out px-5 md:px-8 '>
            <div className='w-full relative flex items-center justify-between'>
              <Link
                href={navbarData?.companyName?.link}
                aria-label='Company'
                title={navbarData?.companyName?.title}
                className='inline-flex items-center'
              >
                
                  <Image
                    src={'/logo/logo.png'}
                    className='w-full h-14 object-cover object-center'
                    alt='bus'
                    width={400}
                    height={400}
                    priority
                  />
               
              </Link>
              <ul className='items-center hidden space-x-5 lg:flex'>
                {navbarData?.navbarList?.map((lt, index) => {
                  // console.log(pathname, lt?.link)
                  return (
                    <li key={index}>
                      <Link
                        href={lt.link}
                        aria-label={lt.title}
                        title={lt.title}
                        className={`font-medium 
                                            tracking-normal 
                                            md:text-base
                                            lg:text-lg
                                            text-white
                                            transition-colors 
                                            duration-200 
                                            hover:text-secondary_1`}
                        // style={{
                        //    color: pathname === lt?.link ? '#E6A147' : 'inherit'
                        // }}
                      >
                        {lt.title}
                      </Link>
                    </li>
                  );
                })}
                <ThemeSwitch />
              </ul>

              {/* DROP DOWN BUTTON ON THE MOBILE SIZE */}
              <div className='lg:hidden gap-4 flex items-center'>
                {/* <ThemeSwitch /> */}
                <button
                  aria-label='Open Menu'
                  title='Open Menu'
                  className='p-3 -mr-1 shadow-lg transition duration-200 rounded-lg focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className='w-5 text-white ' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                    />
                    <path fill='currentColor' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
                    <path
                      fill='currentColor'
                      d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <MobileNavbar navbarData={navbarData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
