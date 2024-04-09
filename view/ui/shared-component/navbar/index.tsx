'use client';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavbar from './mobile-navbar';
import { navbarData } from '@json-db';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  // console.log('pathname', pathname);
  const [, result] = pathname.split('/');
  console.log('result', result);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={`fixed bg-[#29323D] top-0 z-50 w-full  duration-700 ease-in-out`}>
      <div className='custom-nav mx-auto flex max-w-[1308px] flex-row justify-around gap-20 px-4 py-[11px] md:justify-between '>
        <Link
          href={navbarData?.companyName?.link}
          aria-label='Company'
          title={navbarData?.companyName?.title}
          className='inline-flex items-center'
        >
          <Image src={'/logo/logo.png'} className='w-full h-16' alt='bus' width={400} height={400} priority />
        </Link>
        <ul className='hidden items-center space-x-8 lg:flex'>
          {navbarData.navbarList.map((item: any, index: number) => (
            <li key={index} className={'group relative block'}>
              {item.subMenu ? (
                <span
                  style={{
                    // fontWeight: result === item.title ? 700 : 400,
                    backgroundColor: result === item.title ? '#6E8BEB' : '',
                    padding: result === item.title ? '10px' : '',
                    borderRadius: result === item.title ? '7px' : ''
                  }}
                  className='text-white font-work flex items-center capitalize gap-1 bg-transparent px-0 py-3 text-base transition hover:text-white hover:duration-300'
                >
                  {item.title}
                  {item.subMenu && (
                    <svg
                      className='fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                    >
                      <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                    </svg>
                  )}
                </span>
              ) : (
                <Link
                  href={item.link}
                  className='text-white font-work flex items-center gap-1 bg-transparent px-0 py-3 text-base transition hover:text-white hover:duration-300'
                  style={{
                    fontWeight: pathname === item?.link ? 700 : 400
                  }}
                >
                  {item.title}
                </Link>
              )}
              {item.subMenu && item.subMenu.length > 0 && <SubMenu subMenu={item.subMenu} />}
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-4 lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-3 text-indigo-600 transition duration-200 focus:outline-none'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z' />
              <path fill='currentColor' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
              <path fill='currentColor' d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z' />
            </svg>
          </button>
        </div>
      </div>

      {/* DROP DOWN BUTTON ON THE MOBILE SIZE */}

      <MobileNavbar navbarData={navbarData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Navbar;

const SubMenu = ({ subMenu }: any) => {
  const pathname = usePathname();
  return (
    <ul className='navbar-bg-color bg-base-100 font-work bg-[#3E4650] font-work invisible absolute  top-10  z-30 w-full min-w-[140px]   max-w-[230px]  p-0 opacity-0 shadow-md group-hover:visible group-hover:opacity-100'>
      {subMenu.map((subItem: any, index: number) => (
        <li key={index} className={'main-subSubMenu relative block'}>
          {subItem.subMenu ? (
            <span
              style={{
                fontWeight: pathname === subItem?.link ? 700 : 400
              }}
              className='text-white  flex items-center justify-between gap-1 whitespace-normal px-4 py-3 text-sm transition hover:bg-red-500  hover:text-red-500 hover:duration-300'
            >
              {subItem.title}

              <svg
                className='-rotate-90 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </span>
          ) : (
            <Link
              href={subItem.link}
              style={{
                fontWeight: pathname === subItem?.link ? 700 : 400
              }}
              className='text-white block whitespace-normal px-4 py-3 text-sm transition hover:bg-[#6E8BEB]  hover:duration-300'
            >
              {subItem.title}
            </Link>
          )}
          {subItem.subMenu && <SubSubMenu subSubMenu={subItem.subMenu} />}
        </li>
      ))}
    </ul>
  );
};

const SubSubMenu = ({ subSubMenu }: any) => {
  return (
    <ul className='navbar-bg-color bg-base-100 font-work subSubMenu-hover invisible absolute left-full top-0 z-30 w-full min-w-[230px] rounded-lg   p-0 opacity-0 shadow-md'>
      {subSubMenu.map((subSubItem: any, index: number) => (
        <li key={index} className={'relative block'}>
          {subSubItem.subMenu ? (
            <span className='text-white  flex items-center justify-between gap-1 whitespace-normal px-4 py-3 text-sm transition   hover:text-white hover:duration-300'>
              {subSubItem.title}
              <svg
                className='-rotate-90 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </span>
          ) : (
            <Link
              href={subSubItem.link}
              className='text-white block whitespace-normal px-4 py-3 text-sm transition hover:text-white hover:duration-300'
            >
              {subSubItem.title}
            </Link>
          )}
          {subSubItem.subMenu && <SubSubMenu subSubMenu={subSubItem.subMenu} />}
        </li>
      ))}
    </ul>
  );
};
