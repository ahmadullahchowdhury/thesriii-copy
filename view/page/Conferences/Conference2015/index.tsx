import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Conference2015 = () => {
  const sri_strategy = [
    {
      title: 'Address',
      description: `The Fairmont San Jose <br>
      170 South Market Street <br>
      San Jose, California <br>
      United States <br>
      95113`
    },
    {
      title: 'Room rates',
      description: `Fee per night:
      <br>
      Varies.`
    },
    {
      title: 'Contact Information.',
      description: `TOLL FREE: 1(866)  540-4493 <br>
      TEL:(408) 998-1900 <br>
      Fax: (408) 287-1648 <br>
      Mobile: 9393959928 <br>
      E-mail: sanjose@fairmont.com`
    },
    {
      title: 'Website',
      description: `Site: www.fairmont.com/
      <br>sanjose`
    }
  ];
  const paper_submission_guide = [
    {
      title: 'Step 1',
      description: `To open the EasyChair Login Page for the SRII Global Conference 2015 in a separate window
      <p style='font-weight: bold;'>click this link: https://easychair.org/<br>conferences/?conf=srii2015</p>`
    },
    {
      title: 'Step 2',
      description: `Create a new account by clicking <p style='font-weight: bold;'>"Sign up for an account"</p>`
    },
    {
      title: 'Step 3',
      description: `Fill in the generated words, click Continue to be taken to a form requiring a valid e-mail address.`
    },
    {
      title: 'Step 4',
      description: `You will then receive a confirmation e-mail. To continue, click the embedded link.`
    }
  ];

  return (
    <div className='bg-white'>
      <div className='max-w-[1280px]  pt-[200px] mx-auto'>
        <div className='flex gap-[16px] items-center'>
          <Link href='/' className='text-[#7E7E7E] text-[16px] font-medium'>
            Home
          </Link>
          <IoIosArrowForward />
          <p className='text-[#7E7E7E] text-[16px] font-medium'>Conferences</p>
          <IoIosArrowForward />
          <p className='text-[#1D1D1D] text-[16px] font-medium'>Global Conference 2015 </p>
        </div>
        <h2 className='text-slate-500 capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[42px]'>
          Global Conference 2015
        </h2>
        <div className='bg-[#F3F3F3] max-w-[1186px] rounded-[6px] flex justify-between px-[11px] py-[7px] mt-[38px]'>
          <p className='text-[#5C6898] text-[20px] '>
            Event date: <span className='font-semibold'>06-07-2015</span>
          </p>
          <div className='bg-[#5C6898] w-[3px] h-[30px] rounded-md '></div>

          <p className='text-[#5C6898] text-[20px] '>
            Event time: <span className='font-semibold'>12:00pm</span>
          </p>
          <p className='bg-[#5C6898] w-[3px] h-[30px] rounded-md '></p>
          <p className='text-[#5C6898] text-[20px] '>
            Event Capacity: <span className='font-semibold'>Unlimited</span>
          </p>

          <Link href={'/'} className='text-white px-[63px] rounded-[3px] bg-[#6E8BEB] text-[20px]'>
            Register
          </Link>
        </div>
        <p className='text-[#5C6898] p-[8px] text-[18px] mt-[23px] '>
          The Annual SRII Global Conference is a unique forum for organizations and researchers from around the world to
          share their work and build team work for driving innovation for IT-Enabled Services for major sectors of
          global economy. The Global Conference also reinforces organizational alignment and partnership with SRII
          India, SRII Asia, SRII Europe and various SRII Focus groups (SIGs).
        </p>

        <p className='text-[#5C6898] p-[8px] text-[18px] mt-[23px]'>Features of the 2015 Conference include:</p>

        <ul className='list-disc pl-[30px] text-[#5C6898]'>
          <li>An increase in Invited Papers around specific topics and themes</li>
          <li>Parallel tracks of Research Paper presentations</li>
          <li>Participation by University Students</li>
          <li>Participation by Industry Leaders and Start-up IT Companies</li>
          <li>A Hackathon</li>
          <li>A final Gala Event for networking and socializing </li>
          <li>Panel Sessions addressing salient topics in IT-enabled service.</li>
          <li>
            Keynote Speakers from leading Silicon-Valley companies, international government agencies and leading
            researchers.
          </li>
          <li>
            Innovation Showcase to display the cutting-edge products and services of leading IT companies and startups.
          </li>
          <li>Special Event at UC Berkeley -- Building Entrepreneurship Program/Curriculum.</li>
        </ul>

        <p className='text-[#5C6898] pl-[30px] text-[18px] py-[23px]'>
          To learn more click here:{' '}
          <span className='font-semibold text-[15px]'>https://thesrii.org/images/Pdfs/SRII2015Flyer.pdf </span>{' '}
        </p>
        <p className='text-[#5C6898] pl-[30px] text-[18px] '>
          To register click here:
          <span className='font-semibold text-[15px]'>
            https://docs.google.com/forms/d/e/1FAIpQLSdIHDKU9vYkaeWFOnYQGN_3XlX8iohg-2CsQGVDqgTuAYblSw/viewform
          </span>{' '}
        </p>

        <h2 className='text-slate-500 capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[84px]'>
          Venue
        </h2>
        <div className='mt-[75px] p-[8px] '>
          <p className='text-[#5C6898]  text-[30px]'>The Fairmont San Jose</p>
          <p className='text-[#5C6898]  text-[18px]'>
            With the meteoric growth of the computer industry, Silicon Valley has become one of the world's busiest
            hubs, and the capital of this high-tech mecca is San Jose. In the heart of northern California's largest
            city, The Fairmont San Jose luxury hotel blends historic grandeur with all the high-tech excitement of
            Silicon Valley.
          </p>
          <Image src='/image/Fairmont_Large.png' className='pt-[57px]' alt='Fairmont' width={1278} height={560} />
        </div>

        <div className='timeline'>
          <div className='mt-[28px] pb-[28px]  flex gap-[50px] pl-[50px]'>
            {sri_strategy.map((item, index) => (
              <div>
                <div
                // style={{
                //   zIndex: 100
                // }}
                >
                  <Image
                    src='/icon/star.svg'
                    className='relative z-10'
                    priority
                    quality={90}
                    width={24}
                    height={24}
                    alt='round'
                  />
                </div>
                <div
                  className={` ${(() => {
                    switch (index) {
                      case 0:
                        return 'w-[323px]';
                      case 1:
                        return 'w-[214px]';
                      case 2:
                        return 'w-[300px]';
                      case 3:
                        return 'w-[214px]';
                      default:
                        return '';
                    }
                  })()}`}
                >
                  <p className='pt-[12px] text-[16px] text-[#6E8BEB] font-semibold capitalize'>{item.title}</p>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className='pt-[12px] text-[14px] text-[#7B7A7A] capitalize'
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className='text-slate-500 capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[84px]'>
          Conference Schedule & details
        </h2>
        <ul className='list-disc pl-[30px] pt-[30px] text-[#5C6898] text-[18px] leading-[208.605%]'>
          <li>
            <span className='font-semibold'>Conference agenda: </span>https://thesrii.org/images/Pdfs/Agenda2015.pdf
          </li>
          <li>
            <span className='font-semibold'>Startup Showcase: </span>
            https://thesrii.org/images/Pdfs/2015_Startup_Innovation_Showcase.pdf
          </li>
          <li>
            <span className='font-semibold'>SRII data challenge: </span>
            https://thesrii.org/images/Pdfs/SRII_Data_Challenge_2015.pdf
          </li>
        </ul>
        <h2 className='text-slate-500 capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[84px]'>
          Paper submission Guide
        </h2>
        <div className='timeline'>
          <div className='mt-[28px] pb-[28px]  flex gap-[50px] pl-[50px]'>
            {paper_submission_guide.map((item, index) => (
              <div>
                <div
                // style={{
                //   zIndex: 100
                // }}
                >
                  <Image
                    src='/icon/arrow.png'
                    className='relative z-50'
                    priority
                    quality={90}
                    width={24}
                    height={24}
                    alt='round'
                  />
                </div>
                <div
                  className={` ${(() => {
                    switch (index) {
                      case 0:
                        return 'w-[323px]';
                      case 1:
                        return 'w-[214px]';
                      case 2:
                        return 'w-[300px]';
                      case 3:
                        return 'w-[214px]';
                      default:
                        return '';
                    }
                  })()}`}
                >
                  <p className='pt-[12px] text-[16px] font-semibold text-[#6E8BEB] capitalize'>{item.title}</p>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className='pt-[12px] text-[14px] text-[#7B7A7A] '
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference2015;
