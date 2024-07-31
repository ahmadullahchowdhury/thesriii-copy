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
  const paper_submission_guide_1_4 = [
    {
      title: 'Step 1',
      description: `To open the EasyChair Login Page for the SRII Global Conference 2015 in a separate window
      <p style='font-weight: bold;'>click this link: <span> <a href='https://easychair.org/conferences/?conf=srii2015'>https://easychair.org/<br>conferences/?conf=srii2015 </Link> </p> </span> `
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
  const paper_submission_guide_5_8 = [
    {
      title: 'Step 5',
      description: `Complete the sign-up process by filling out your account information and clicking <span style="font-weight:bold">create my account</span>.
      `
    },
    {
      title: 'Step 6',
      description: `You will then be shown a confirmation and be given a link returning you to the sign-in page (from step1). 
      <p  style='padding-bottom: 10px;'></p>
      <a href='https://www.easychair.org/account/signin.cgi?key=8020161.ickD12EGq3pL8Yhb'><p style='font-weight: 700;'>https://www.easychair.org/account/signin.cgi?key=8020161.ickD12EGq3pL8Yhb
      </p></a>
      <p  style='padding-bottom: 10px;'></p>
      Sign in with the user name and password you provided in step 5.
      `
    },
    {
      title: 'Step 7',
      description: `Click 'New Submission' to upload your abstract.
      `
    },
    {
      title: 'Step 4',
      description: `You will then receive a confirmation e-mail. To continue, click the embedded link.
      <p  style='padding-bottom: 10px;'></p>
      <p  style='color: #EF8080;'>*Further down you can add keywords to make you paper easily searchable.</p>`
    }
  ];
  const paper_submission_guide_9_12 = [
    {
      title: 'Step 9',
      description: `Complete the sign-up process by filling out your account information and clicking create my account.
      <p  style='padding-bottom: 10px;'></p>
      <p  style='color: #EF8080;'>*If they have already signed up to the SRii EasyChair,then press (click here to add an associate) and select them from the list.
      </p>`
    },
    {
      title: 'Step 10',
      description: `Upload your (full) submission by clicking Browse and finding the corresponding file.
      <p  style='padding-bottom: 10px;'></p>
      <p  style='color: #EF8080;'>**Please refrain from uploading your abstract using this attachment feature; there is a space provided for your abstract when filling   out your information.
      <p  style='padding-bottom: 10px;'></p>
       <p  style='padding-bottom: 10px;'></p>
       Check Abstract Only if that is what you are submitting. Click Submit Paper to Finish.
      </p>`
    },
    {
      title: 'Step 11',
      description: `Check Abstract Only if that is what you are submitting. Click Submit Paper to Finish.
      <p  style='padding-bottom: 10px;'></p>
      Here, you have the options to update or withdraw your submission.
      `
    },
    {
      title: 'Step 4',
      description: `To submit your full paper, click Submit a New Version and attach your paper (PDF/Word).
      <p  style='padding-bottom: 10px;'></p>
      If you had attached your abstract earlier (by browsing for it as a file), then add the text from your abstract in the space provided by clicking Update Information.
.
      `
    }
  ];

  return (
    <div className='bg-white'>
      <div className='max-w-[1280px]  pt-[200px] mx-auto'>
        <div className='flex gap-[16px] items-center'>
          <Link href='/' className='text-[#7E7E7E] text-[16px] font-medium'>
            Home
          </Link>
          <IoIosArrowForward  color='black'/>
          <p className='text-[#7E7E7E] text-[16px] font-medium'>Conferences</p>
          <IoIosArrowForward color='black'/>
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

          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSdIHDKU9vYkaeWFOnYQGN_3XlX8iohg-2CsQGVDqgTuAYblSw/viewform'
            className='text-white px-[63px] rounded-[3px] bg-[#6E8BEB] text-[20px]'
          >
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
          <li>
            An increase in <span className='font-bold'>Invited Papers</span> around specific topics and themes
          </li>
          <li>
            Parallel tracks of <span className='font-bold'>Research Paper</span> presentations
          </li>
          <li>
            Participation by <span className='font-bold'>University Students</span>
          </li>
          <li>
            Participation by <span className='font-bold'>Industry Leaders</span> and{' '}
            <span className='font-bold'>Start-up IT Companies</span>
          </li>
          <li>
            A <span className='font-bold'>Hackathon</span>
          </li>
          <li>
            A final <span className='font-bold'>Gala Event</span> for networking and socializing{' '}
          </li>
          <li>
            <span className='font-bold'>Panel Sessions</span> addressing salient topics in IT-enabled service.
          </li>
          <li>
            <span className='font-bold'>Keynote Speakers</span> from leading Silicon-Valley companies, international
            government agencies and leading researchers.
          </li>
          <li>
            <span className='font-bold'>Innovation Showcase </span> to display the cutting-edge products and services of
            leading IT companies and startups.
          </li>

          <li>
            {' '}
            <span className='font-bold'>Special Event at UC Berkeley</span> -- Building Entrepreneurship
            Program/Curriculum.
          </li>
        </ul>

        <p className='text-[#5C6898] pl-[30px] text-[18px] py-[23px]'>
          To learn more click here:{' '}
          <Link target='_blank' href='https://thesrii.org/images/Pdfs/SRII2015Flyer.pdf'>
            <span className='underline hover:font-semibold text-[15px]'>
              https://thesrii.org/images/Pdfs/SRII2015Flyer.pdf{' '}
            </span>{' '}
          </Link>
        </p>
        {/* <p className='text-[#5C6898] pl-[30px] text-[18px] '>
          To register click here:
          <Link
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSdIHDKU9vYkaeWFOnYQGN_3XlX8iohg-2CsQGVDqgTuAYblSw/viewform'
          >
            <span className='font-semibold text-[15px]'>
              https://docs.google.com/forms/d/e/1FAIpQLSdIHDKU9vYkaeWFOnYQGN_3XlX8iohg-2CsQGVDqgTuAYblSw/viewform
            </span>{' '}
          </Link>
        </p> */}

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
            <span className='font-semibold'>Conference agenda: </span>{' '}
            <span className='underline hover:font-semibold'>
              {' '}
              <Link href='https://thesrii.org/images/Pdfs/Agenda2015.pdf'>
                https://thesrii.org/images/Pdfs/Agenda2015.pdf
              </Link>{' '}
            </span>
          </li>
          <li>
            <span className='font-semibold'>Startup Showcase: </span>
            <span className='underline hover:font-semibold'>
              {' '}
              <Link href='https://thesrii.org/images/Pdfs/2015_Startup_Innovation_Showcase.pdf'>
                https://thesrii.org/images/Pdfs/2015_Startup_Innovation_Showcase.pdf
              </Link>
            </span>
          </li>
          <li>
            <span className='font-semibold'>SRII data challenge: </span>
            <span className='underline hover:font-semibold'>
              {' '}
              <Link href='https://thesrii.org/images/Pdfs/SRII_Data_Challenge_2015.pdf'>
                https://thesrii.org/images/Pdfs/SRII_Data_Challenge_2015.pdf
              </Link>
            </span>
          </li>
        </ul>
        <h2 className='text-slate-500 capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[84px]'>
          Paper submission Guide
        </h2>
        <div className='timeline'>
          <div className='mt-[28px] pb-[28px]  flex gap-[50px] pl-[50px]'>
            {paper_submission_guide_1_4.map((item, index) => (
              <div>
                <div key={index}>
                  <Image
                    src='/icon/arrow.png'
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
        <div className='timeline'>
          <div className='mt-[28px] pb-[28px]  flex gap-[50px] pl-[50px]'>
            {paper_submission_guide_5_8.map((item, index) => (
              <div>
                <div key={index}>
                  <Image
                    src='/icon/arrow.png'
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
        <div className='timeline'>
          <div className='mt-[28px] pb-[28px]  flex gap-[50px] pl-[50px]'>
            {paper_submission_guide_9_12.map((item, index) => (
              <div>
                <div key={index}>
                  <Image
                    src='/icon/arrow.png'
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

        <div className='p-[8px]'>
          <p className='flex'>
            <span className='pr-[10px] text-[18px] font-bold text-[#5C6898]'>
              Instructions for Paper Formatting 2015:{' '}
            </span>
            <span>
              {' '}
              <Image alt='dd' src='/icon/doc.svg' width={100} height={100} className='size-[28px] ' />
            </span>
            <Link
              target='_blank'
              href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
              className='underline pl-[10px] text-[18px] text-[#5C6898]'
            >
              Paper Template.doc
            </Link>
          </p>
          <p className='pt-[70px] pb-[187px] text-[#5C6898] text-[18px]'>
            For Additional Assistance, Please Contact:
            <span className='font-bold text-[#5C6898]'>Ralph Badinelli (Program Chair), </span>
            Email:{' '}
            <a href='mailto:ralphb@vt.edu' className='font-bold text-[#5C6898]'>
              ralphb@vt.edu
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conference2015;
