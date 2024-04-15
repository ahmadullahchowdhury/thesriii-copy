import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const SriMission = () => {
  const sri_strategy = [
    {
      title: 'Major Domains/Disciplines (Horizontal)',
      description: `Technology Platform, Professional Services, Business Process/Models/Tools, Service Ops Management, Human Factor Engineering, Information Management, etc.`
    },
    {
      title: 'Service Industry Verticals',
      description: `Healthcare, Financial, Energy, Retail, Transportation, Telecom, Government, Education, etc.`
    },
    {
      title: 'Alignement with existing Service org.',
      description: `Focus Teams (SIGs) around each Vertical and each Domain. Alignment with existing Service Research Organizations/SIGs under SRII Umbrella.`
    },
    {
      title: 'Membership model',
      description: `Industry (large, medium, small), Institutions and Individual professionals/students.`
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

          <p className='text-[#7E7E7E] text-[16px] font-medium'>About us</p>
          <IoIosArrowForward />
          <p className='text-[#1D1D1D] text-[16px] font-medium'>Srii mission, Strategy & partnerships </p>
        </div>

        <h2 className='text-[50px] pt-[40px] text-[#5C6898] capitalize font-semibold'>SRII Mission Statement</h2>
        <div className='p-[8px]'>
          <p className='pt-[24px] text-[18px] text-[#5C6898] capitalize font-semibold'>
            "Innovating Digital Economy for a better World"
          </p>

          <p className=' text-[18px] text-[#5C6898] capitalize font-normal'>
            "At <span className='font-semibold'>SRII,</span> our mission is to pioneer sustainable solutions through
            research, innovation, and collaboration. We strive to address pressing global challenges by harnessing the
            collective power of science, technology, and entrepreneurship. Through interdisciplinary partnerships and
            evidence-based practices, we aim to create lasting positive impact, promoting environmental stewardship,
            social equity, and economic resilience. Our commitment is to lead the way towards a more sustainable and
            inclusive future, ensuring the well-being of current and future generations."
          </p>
          <p className='pt-[24px] text-[18px] text-[#5C6898] capitalize '>
            Our <span className='font-semibold'>vision</span> is to create a world where technology serves as a force
            for good, empowering individuals, strengthening communities, and advancing the collective well-being of
            humanity."
          </p>
        </div>

        <h2 className=' pt-[34px] text-[50px] text-[#5C6898] capitalize font-semibold'>SRII Organization</h2>
        <p className='pt-[24px] text-[18px] p-[8px] text-[#5C6898] capitalize '>
          SRII is led by senior leaders from major IT companies like Google, Amazon, Apple, Facebook, Intel, Citrix,
          Microsoft, IBM, HP, Infosys, TCS, eBay/PayPal, Accenture, etc., in close partnership with academia, research
          institutes, as well as government organizations from around the world.
        </p>
        <h2 className=' pt-[34px] text-[50px] text-[#5C6898] capitalize font-semibold '>SRII Strategy</h2>
        <div className='timeline'>
          <div className='mt-[28px] pb-[28px]  flex gap-[50px] pl-[50px]'>
            {sri_strategy.map((item, index) => (
              <div>
                <div>
                  <Image src='/icon/round.svg' priority quality={90} width={24} height={24} alt='round' />
                </div>
                <div
                  className={` ${(() => {
                    switch (index) {
                      case 0:
                        return 'w-[323px]';
                      case 1:
                        return 'w-[214px]';
                      case 2:
                        return 'w-[301px]';
                      case 3:
                        return 'w-[224px]';
                      default:
                        return '';
                    }
                  })()}`}
                >
                  <p className='pt-[12px] text-[16px] text-[#6E8BEB] capitalize'>{item.title}</p>
                  <p className='pt-[12px] text-[14px] text-[#7B7A7A] capitalize'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='p-[8px]'>
          <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
            "Our mission is to spearhead innovation within service industry verticals, including healthcare, financial
            services, energy, retail, transportation, telecom, government, education, and more. By focusing on major
            domains such as technology platforms, professional services, business processes, tools, service operations
            management, human factor engineering, and information management, we aim to drive transformative change
            across these sectors.
          </p>
          <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
            To achieve this goal, we establish specialized teams or Special Interest Groups (SIGs) dedicated to each
            vertical and domain. These SIGs are designed to foster collaboration, research, and development initiatives
            aligned with existing service research organizations and SIGs under the SRII umbrella.
          </p>
          <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
            Our membership model caters to industry stakeholders of all sizes - large, medium, and small enterprises -
            as well as academic institutions and individual professionals/students.
          </p>
          <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
            By bringing together diverse perspectives and expertise, we create a dynamic ecosystem that accelerates
            innovation, drives excellence, and advances the collective well-being of society."
          </p>
        </div>

        <h2 className=' pt-[62px] text-[50px] text-[#5C6898] capitalize font-semibold '>SRII Strategy</h2>
        <p className='pt-[23px] pl-[8px] text-[18px] text-[#5C6898] capitalize '>
          Srii is in strong partnership with the following communities :
        </p>
        <ul className='list-disc pl-[28px] pt-[30px] '>
          <li className='text-[18px]  text-[#5C6898] capitalize'>
            <span className='font-semibold'>Professional Societies</span>: IEEE, ACM, Informs, and many others
          </li>
          <li className='text-[18px]  text-[#5C6898] capitalize'>
            <span className='font-semibold'>Global Research Organizations</span>: NSF, JST, CSIRO, ITRI, Fraunhofer,
            VTT/Tivit
          </li>
          <li className='text-[18px]  text-[#5C6898] capitalize'>
            <span className='font-semibold'>Major Universities/Institutes</span>
          </li>
          <li className='text-[18px]  text-[#5C6898] capitalize pb-[152px]'>
            <span className='font-semibold'>Government Organizations</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SriMission;
