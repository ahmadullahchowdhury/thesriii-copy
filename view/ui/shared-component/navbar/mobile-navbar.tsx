import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarLayoutProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navbarData: {
    companyName: {
      title: string;
      link: string;
    };
    navbarList: {
      title: string;
      link: string;
    }[];
  };
};

const MobileNavbar = ({ isMenuOpen, setIsMenuOpen, navbarData }: SidebarLayoutProps) => {
  const pathname = usePathname();

  return (
    <>
      <div className='block xl:hidden bg-primary '>
        <div
          className={`overflow-y-auto z-50 bg-primary  flex flex-col h-full w-2/3 max-w-full fixed duration-500 ease-in gap-2 md:gap-0 ${
            isMenuOpen ? 'top-0 left-0' : 'top-0 -left-full'
          }`}
        >
          <div className=' bg-primary dark:bg-dark_primary_higher  bg-base-100 relative flex flex-col p-6 mt-2 text-lg font-normal leading-6'>
            <div className='flex items-center justify-between mb-6'>
              <Link
                href={navbarData.companyName.link}
                aria-label='Company'
                title={navbarData.companyName.title}
                className='inline-flex items-center'
                onClick={() => setIsMenuOpen(false)}
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
              <button
                aria-label='Close Menu'
                title='Close Menu'
                className='p-3 shadow-lg rounded-xl bg-white/70 -mt-2 -mr-2 transition duration-200 '
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                <svg className='w-5 text-white' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                  />
                </svg>
              </button>
            </div>
            <ul className='space-y-4'>
              {navbarData?.navbarList?.map((lt, index) => (
                <li key={index}>
                  <Link
                    href={lt.link}
                    aria-label={lt.title}
                    title={lt.title}
                    className={`font-medium tracking-normal text-white transition-colors duration-200 '}`}
                    style={{
                      color: pathname === lt?.link ? '#E95656' : '#FFFFFF'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {lt.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BG OVERLAY */}
      <div
        className={`xl:hidden fixed z-30 transition-all duration-500 ease-in-out bg-[#0000009f] opacity-80 h-full w-full ${
          isMenuOpen ? 'top-0 left-0' : 'top-0 -left-full'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default MobileNavbar;
