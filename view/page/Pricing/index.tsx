'use client';
import { pricingData } from '@json-db';
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosPeople } from 'react-icons/io';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import ProjectModal from 'view/ui/shared-component/component/pricingModal';
import Summits from '../home/summits';

const PricingPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedPricingDetails, setSelectedPricingDetails] = useState<number>(0);

  const pricingDetails = [
    {
      title: 'Individual membership',
      icon: '/icon/icon-1.png',
      info: 'In case of questions, please contact us.',
      price: '$99',
      desc: `Membership is open to individuals who are currently involved in the services research, service innovation, and/or the service science field of interest either through their career and/or education.   Individual members have an opportunity to meet and discuss today’s current challenges, research projects, etc. with other like-minded services professionals from around the world.
      `,
      benefits: [
        'Access to SRII member profiles',
        'Participate in an SRII Special Interest Group (SIG)',
        'Right to view, post and/or blog in the SRII online community',
        'Receive the online e-newsletter',
        'Access to the digital research library',
        'Receive the member registration rate at the SRII annual conference and other associated events'
      ]
    },
    {
      title: 'Individual Partner membership',
      icon: '/icon/icon-2.png',
      price: '$49',
      info: '*Annual fee for members is $49.00 US. You must list the name of a valid SRII partner to receive this membership level.',
      desc: `Membership is open to individuals already belonging to SRII partner organizations like INFORMS, AMA, IEEE, for a 50% discount off of the membership fee of $49/yearly. Partner members have an opportunity to meet and discuss today’s current challenges, research projects, etc. with other like-minded services professionals from around the world.
      `,
      benefits: [
        'Access to SRII member profiles',
        'Participate in an SRII Special Interest Group (SIG)',
        'Right to view, post and/or blog in the SRII online community',
        'Receive the online e-newsletter',
        'Access to the digital research library',
        'Receive the member registration rate at the SRII annual conference and other associated events'
      ]
    },
    {
      title: 'Student membership',
      icon: '/icon/icon-3.png',
      info: 'In case of questions, please contact us.',
      price: '$49',
      desc: `Tailored for the college student that has an interest in pursuing services as a career. To be eligible for this membership, the individual must be currently registered as a full-or half time student in an academic program that has a services research, services innovation, and or a service science field of interest (undergraduate or graduate).
      `,
      benefits: [
        'Access to SRII member profiles',
        'Participate in an SRII Special Interest Group (SIG)',
        'Right to view, post and/or blog in the SRII online community',
        'Receive the online e-newsletter',
        'Access to the digital research library',
        'Receive the member registration rate at the SRII annual conference and other associated events'
      ]
    },
    {
      title: 'Institute membership',
      info: 'If you are interested in learning more about how to become a Institute Member, please contact us',
      icon: '/icon/icon-4.png',
      price: 'There is a flat fee for institutes to register as a member.',
      desc: `This membership is open to institutes from around the world who would like to help foster future collaboration between government, industry, institutes and universities around service research, service innovation and service science.`,
      benefits: [
        'A leadership role in one or more of the SRII Special Interest Groups (SIGs)',
        'Consideration for a speaking role (keynote, breakout session, panelist, moderator) at one of the SRII annual events',
        'Opportunity to publish an article and/or a paper in the SRII e-newsletter/digital research library',
        'Unlimited membership for all institute employees at half the membership registration rate. This provides employees with access to:',
        'Access to SRII member profiles',
        'Participate in an SRII Special Interest Group (SIG)',
        'Right to view, post and/or blog in the SRII online community',
        'Receive the online e-newsletter',
        'Access to the digital research library',
        'Receive the member registration rate at the SRII annual conference and other associated events'
      ]
    }
  ];

  return (
    <div className='bg-gradient-to-b from-neutral-100 to-indigo-300'>
      <div className=' min-h-screen bg-cover bg-[url(/image/Pricing.png)] pb-10 md:pb-20 lg:pb-28 '>
        <div className='pt-16 md:pt-20 lg:pt-28 pb-4 md:pb-6 lg:pb-10 border-black border-b '>
          <div className='p-2.5 '>
            <div className='text-slate-800  text-center text-2xl md:text-3xl  lg:text-4xl font-bold '>
              Pick a Membership that suits you
            </div>
          </div>
          <div className='py-[13px]  '>
            <div className='max-w-[300px] md:max-w-[600px] mx-auto text-center  text-slate-800 text-base font-normal '>
              Explore our diverse range of membership opportunities, each offering tailored benefits designed to cater
              to the unique needs of every individual or group.
            </div>
          </div>
        </div>
        <div className='max-w-[400px] mx-auto pt-5 md:pt-5 lg:pt-8 pb-6 md:pb-8 lg:pb-12  '>
          <div className=' h-14  py-2.5 rounded-lg border-2 border-slate-800 '>
            <div className='text-center text-slate-800 text-2xl font-bold'>Annual Packages</div>
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 pt-9 md:pt-10 lg:pt-12 gap-9 md:gap-10 lg:gap-20 px-16 md:px-24 lg:px-5 '>
          {pricingData.map((item, index) => (
            <div key={index} className='bg-white pt-20 md:pt-24 relative rounded-lg grid items-end  '>
              <div className={`${index === 1 ?  'size-[120px]' :  'size-[115px]'  } absolute -top-1.5   left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-full  flex items-center justify-center`}>
                <Image src={item.icon} alt='icon' width={130} height={130} />
              </div>
              <div className=' text-gray-600 text-base font-semibold px-10 md:px-12 lg:px-14'>{item.title}</div>
              <div className=' leading-[19px] text-gray-600 text-[12px] font-normal py-6 md:py-9 lg:py-9 px-10 md:px-12 lg:px-14 '>
                {item.desc}
              </div>
              <div className='border-t-2 border-solid border-gray-100'>
                <div className='   p-3'>
                  <div className='justify-center items-center gap-1.5 flex'>
                    <div className='text-center'>
                      <span
                        className={` text-gray-700 text-[25px] font-normal 
                          
                        `}
                      >
                        $
                      </span>
                      <span className='text-gray-700 text-[35px] font-normal f'>{item.price}</span>
                    </div>
                    <div className=''>
                      <div className='w-8 text-gray-700 text-opacity-75 text-[9px] font-normal '>per year</div>
                    </div>
                  </div>
                  <div className='pt-4 md:pt-5 lg:pt-6'></div>
                  <div
                    onClick={() => {
                      setOpen(true);
                      setSelectedPricingDetails(index);
                    }}
                    className='cursor-pointer  px-7 py-[11px] bg-indigo-400 rounded-[5px] justify-center items-center gap-2.5 flex'
                  >
                    <div className='text-white text-base font-normal '>Details</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Summits /> */}

      <ProjectModal open={open} setOpen={setOpen} pricingDetails={pricingDetails[selectedPricingDetails]} />
    </div>
  );
};

export default PricingPage;
