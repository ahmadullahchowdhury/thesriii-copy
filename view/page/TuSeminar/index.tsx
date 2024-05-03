import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const TuSeminar = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-[1280px]  pt-[200px] mx-auto'>
        <div className='flex gap-[16px] items-center'>
          <Link href='/' className='text-[#7E7E7E] text-[16px] font-medium'>
            Home
          </Link>
          <IoIosArrowForward />
          <p className='text-black text-[16px] font-medium'>TU Seminar</p>
        </div>
        <h2 className='text-[#5C6898] capitalize text-2xl md:text-[36px] leading-normal lg:text-[50px] font-semibold  pt-[42px]'>
          SRII/Tsinghua University Special Program “Innovating Entrepreneurship for Digital Economy”
        </h2>
        <div className='bg-[#F3F3F3] max-w-[1250px] rounded-[6px] flex justify-between px-[11px] py-[7px] mt-[38px]'>
          <p className='text-[#5C6898] text-[20px] '>
            Event Start: <span className='font-semibold'>27-06-2016</span>
          </p>
          <div className='bg-[#5C6898] w-[3px] h-[30px] rounded-md '></div>

          <p className='text-[#5C6898] text-[20px] '>
            Event End: <span className='font-semibold'>01-07-2016</span>
          </p>
          <p className='bg-[#5C6898] w-[3px] h-[30px] rounded-md '></p>
          <p className='text-[#5C6898] text-[20px] '>
            Event Capacity: <span className='font-semibold'>   &nbsp; --  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  </span>
          </p>

          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSdIHDKU9vYkaeWFOnYQGN_3XlX8iohg-2CsQGVDqgTuAYblSw/viewform'
            className='text-white px-[63px] rounded-[3px] bg-[#6E8BEB] text-[20px]'
          >
            Register
          </Link>
        </div>
        <p className='text-[#5C6898] p-[8px] text-[18px] mt-[23px] '>
          This is a special course designed for young entrepreneurs and experienced professional to provide a much
          deeper understanding of major sectors of global economy and their major challenges and opportunities and how
          digital solutions and services (Cloud, Mobile, Big data, IoT, Social, Security) can help address and those
          challenges and opportunities. This course also prepares students to start building solutions while they are
          still studying at university
        </p>
        <p className='text-[#5C6898] p-[8px] text-[18px] mt-[16px]'>
          Historical perspectives on “Evolution of Digital Economy”
        </p>
        <ul className='list-disc pl-[30px] text-[#5C6898]'>
          <li> Agriculture Economy</li>
          <li> Industrial Economy</li>
          <li> Internet Economy</li>
          <li> Knowledge Economy</li>
        </ul>
        <p className='text-[#5C6898] p-[8px] text-[18px] mt-[16px]'>
          Major Sectors of Digital Economy: Challenges & Opportunities
        </p>
        <ul className='list-disc pl-[30px] text-[#5C6898]'>
          <li>Manufacturing</li>
          <li>Healthcare</li>
          <li>Financial</li>
          <li>E-Commerce</li>
          <li>Government</li>
          <li>Agriculture</li>
          <li>Education</li>
          <li>Smart City</li>
        </ul>
        <p className='text-[#5C6898] p-[8px] text-[18px] mt-[16px]'>Major advances in Digital Technology:</p>
        <ul className='list-disc pl-[30px] text-[#5C6898]'>
          <li>Artificial Intelligence</li>
          <li>Blockchain Technology</li>
          <li>Internet of Things (IoT)</li>
          <li>Big Data Analytics</li>
          <li>Cybersecurity Solutions</li>
          <li>Cloud Computing</li>
          <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
          <li>Robotics and Automation</li>
        </ul>
        <h2 className='text-[#5C6898] capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[65px]'>
          Speakers
        </h2>
        <div className='pt-[20px]'>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>
                Truls Berg - "Innovating Digital Economy for the Nordic Region"
              </span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/video_icon.png' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                Video
              </Link>
            </p>
          </div>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>
                Dr. Yan Chow - "Innovating Healthcare Services"
              </span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/doc.svg' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                PDF
              </Link>
              <span className='ml-4'>
                {' '}
                <Image alt='dd' src='/icon/video_icon.png' width={100} height={100} className=' size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                Video
              </Link>
            </p>
          </div>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>Ash Damle Lumiata</span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/video_icon.png' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                Video
              </Link>
            </p>
          </div>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>
                Paul Iske - "Innovations in the Financial World"
              </span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/video_icon.png' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                Video
              </Link>
            </p>
          </div>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>
                Krijn Poppe - "Data-Driven Business Models"
              </span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/doc.svg' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                PDF
              </Link>
            </p>
          </div>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>
                Jonathan Reichental - "Making City Smarter"
              </span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/video_icon.png' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                Video
              </Link>
            </p>
          </div>
          <div className='p-[5px]'>
            <p className='flex items-center'>
              <span className='pr-[10px] text-[30px] font-[500] text-[#5C6898]'>
                Amy Wang - “The Blueprint and Path of Made In China 2025”
              </span>
              <span>
                {' '}
                <Image alt='dd' src='/icon/doc.svg' width={100} height={100} className='size-[32px] ' />
              </span>
              <Link
                target='_blank'
                href='https://thesrii.org/component/docman/?task=doc_download&gid=61&Itemid=134'
                className='underline font-[500] pl-[4px] text-[30px] text-[#5C6898]'
              >
                PDF
              </Link>
            </p>
          </div>
        </div>

        <h2 className='text-[#5C6898] capitalize text-2xl md:text-4xl lg:text-[50px] font-semibold  pt-[65px]'>
          Conference Schedule & details
        </h2>

        <ul className='list-disc pl-[30px]'>
          <li className='text-[#5C6898] font-bold text-[18px] py-[23px] pb-[93px]'>
          Seminar agenda: &nbsp;
            <Link target='_blank' href='https://thesrii.org/images/Pdfs/TUSeminarBeijing/TUSeminarProgram.pdf'>
              <span className='underline hover:font-semibold text-[15px]'>
                https://thesrii.org/images/Pdfs/TUSeminarBeijing/TUSeminarProgram.pdf
              </span>{' '}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TuSeminar;
