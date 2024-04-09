import React from 'react';

const SriMission = () => {
  return (
    <div className='max-w-[1280px] pt-[200px] mx-auto'>
      <h2 className='text-[50px] text-[#5C6898] capitalize font-semibold'>SRII Mission Statement</h2>
      <p className='pt-[24px] text-[18px] text-[#5C6898] capitalize font-semibold'>
        "Innovating Digital Economy for a better World"
      </p>

      <p className=' text-[18px] text-[#5C6898] capitalize font-normal'>
        "At <span className='font-semibold'>SRII,</span> our mission is to pioneer sustainable solutions through
        research, innovation, and collaboration. We strive to address pressing global challenges by harnessing the
        collective power of science, technology, and entrepreneurship. Through interdisciplinary partnerships and
        evidence-based practices, we aim to create lasting positive impact, promoting environmental stewardship, social
        equity, and economic resilience. Our commitment is to lead the way towards a more sustainable and inclusive
        future, ensuring the well-being of current and future generations."
      </p>
      <p className='pt-[24px] text-[18px] text-[#5C6898] capitalize '>
        Our <span className='font-semibold'>vision</span> is to create a world where technology serves as a force for
        good, empowering individuals, strengthening communities, and advancing the collective well-being of humanity."
      </p>

      <h2 className=' pt-[34px] text-[50px] text-[#5C6898] capitalize font-semibold'>SRII Organization</h2>
      <p className='pt-[24px] text-[18px] text-[#5C6898] capitalize '>
        SRII is led by senior leaders from major IT companies like Google, Amazon, Apple, Facebook, Intel, Citrix,
        Microsoft, IBM, HP, Infosys, TCS, eBay/PayPal, Accenture, etc., in close partnership with academia, research
        institutes, as well as government organizations from around the world.
      </p>
      <h2 className=' pt-[34px] text-[50px] text-[#5C6898] capitalize font-semibold '>SRII Strategy</h2>
      <div>
        <div className='mt-[28px] pb-[28px] border-t-2 flex gap-[14px] pl-[20px]'>
          {[1, 2, 3, , 4].map((item, index) => (
            <div className=''>
              <p className='pt-[12px] text-[15px] text-[#6E8BEB] capitalize'>Major Domains/Disciplines (Horizontal)</p>
              <p className='pt-[12px] text-[14px] text-[#7B7A7A] capitalize'>
                Technology Platform, Professional Services, Business Process/Models/Tools, Service Ops Management, Human
                Factor Engineering, Information Management, etc.
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
        "Our mission is to spearhead innovation within service industry verticals, including healthcare, financial
        services, energy, retail, transportation, telecom, government, education, and more. By focusing on major domains
        such as technology platforms, professional services, business processes, tools, service operations management,
        human factor engineering, and information management, we aim to drive transformative change across these
        sectors.
      </p>
      <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
        To achieve this goal, we establish specialized teams or Special Interest Groups (SIGs) dedicated to each
        vertical and domain. These SIGs are designed to foster collaboration, research, and development initiatives
        aligned with existing service research organizations and SIGs under the SRII umbrella.
      </p>
      <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
        Our membership model caters to industry stakeholders of all sizes - large, medium, and small enterprises - as
        well as academic institutions and individual professionals/students.
      </p>
      <p className='pt-[18px] text-[18px] text-[#5C6898] capitalize '>
        By bringing together diverse perspectives and expertise, we create a dynamic ecosystem that accelerates
        innovation, drives excellence, and advances the collective well-being of society."
      </p>

      <h2 className=' pt-[62px] text-[50px] text-[#5C6898] capitalize font-semibold '>SRII Strategy</h2>
      <p className='pt-[23px] pl-[8px] text-[18px] text-[#5C6898] capitalize '>
        Srii is in strong partnership with the following communities :
      </p>
      <ul className='list-disc pt-[30px] '>
        <li className='text-[18px] pl-[8px] text-[#5C6898] capitalize'>
          <span className='font-semibold'>Professional Societies</span>: IEEE, ACM, Informs, and many others
        </li>
        <li className='text-[18px] pl-[8px] text-[#5C6898] capitalize'>
          <span className='font-semibold'>Global Research Organizations</span>: NSF, JST, CSIRO, ITRI, Fraunhofer,
          VTT/Tivit
        </li>
        <li className='text-[18px] pl-[8px] text-[#5C6898] capitalize'>
          <span className='font-semibold'>Major Universities/Institutes</span>
        </li>
        <li className='text-[18px] pl-[8px] text-[#5C6898] capitalize pb-[152px]'>
          <span className='font-semibold'>Government Organizations</span>
        </li>
      </ul>
    </div>
  );
};

export default SriMission;
