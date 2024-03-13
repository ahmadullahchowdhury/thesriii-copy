import Image from 'next/image';
import React from 'react';

const Conference = () => {
  const data = [
    {
      name: "Kris Sing",
      designation : "SRII President",
      image: '/image/Kris.png'
    },
    {
      name: "Tim Draper",
      designation : "VP, Services & research, IBM",
      image: '/image/Draper.png'
    },
    {
      name: "Prith Banerjee",
      designation : "Senior VP Research, HP",
      image: '/image/Banerjee.png'
    },
    {
      name: "Tony Scott",
      designation : "CTO Corporate Networks, Google",
      image: '/image/Scott.png'
    },
    {
      name: "Geng Lin",
      designation : "CTO Corporate Networks, Google",
      image: '/image/Lin.png'
    },
    {
      name: "Martin Duursma",
      designation : "CTO Office Chair & VP, Citrix Labs",
      image: '/image/Duursma.png'
    },
    {
      name: "Jeff Welser",
      designation : "VP & Lab Director, IBM Almaden",
      image: '/image/Welser.png'
    },
    {
      name: "Rajeeb Hazra",
      designation : "VP, Intel Architecture Group & GM Technical Computing",
      image: '/image/Hazra.png'
    },
    {
      name: "John Seely Brown",
      designation : "Board of directors at Amazon",
      image: '/image/SeelyBrown.png'
    },
    {
      name: "Steve Kirsch",
      designation : "CEO at OneID and  Cointrust",
      image: '/image/kirsch.png'
    },
    {
      name: "Peter Denning",
      designation : "Distinguished Professor   at Naval Postgraduate School",
      image: '/image/Denning.png'
    },
    {
      name: "Chris C. Kemp",
      designation : "Founder of Nebula & OpenStack",
      image: '/image/kris.png'
    },
    {
      name: "Sumit Dhawan",
      designation : "VP and General  Manager, VMware",
      image: '/image/Kemp.png'
    },
    {
      name: "Manoj Leelanivas",
      designation : "CEO at Cyphort",
      image: '/image/Leelanivas.png'
    },
    {
      name: "Ikhlaq Sidhu",
      designation : "Founding Director of UC Berkeley's Center for Entrepreneurship & Technology",
      image: '/image/Ikhlaq_Sidhu.png'
    },
    {
      name: "Ian Ellison-Taylor",
      designation : "Director of “Open Web Platform”, Google",
      image: '/image/IanEllisonTaylor.png'
    },
  ]

  return (
    <div className='mx-10 md:mx-20 lg:mx-10'>
      <div className='container-sm py-8 md:py-16 lg:py-20'>
        <div className='text-center text-slate-500 text-[50px] font-medium  capitalize'>Conference & summits </div>

        <div className=' px-64 text-center text-slate-500 text-base font-normal  leading-normal'>
          Lorem ipsum dolor sit amet consectetur. Donec adipiscing ac condimentum tristique suspendisse malesuada. Sem
          adipiscing praesent vitae dolor dolor at augue viverra aenean. Diam eu accumsan nulla odio risus nunc amet
          praesent urna. Consequat egestas aliquet urna leo cursus suscipit.
        </div>

        <div className='w-[1203px] h-[685.50px] px-9 py-[37px] rounded-[10px] flex-col justify-center items-center gap-[30px] inline-flex'>
          <div className='flex-col justify-start items-center gap-[53px] flex'>
            <div className='justify-center items-center gap-[100px] inline-flex'>

              <div className="text-center text-slate-500 text-2xl font-bold font-['Poppins']">
                SRII Global Conference 2014 Keynote/Panel Speakers Included:
              </div>

            </div>
            <div className='flex-col justify-start items-start gap-8 flex'>
              <div className=' px-5 justify-center items-center gap-4 grid grid-cols-8'>
                {
                  data.map(item => 
                    <div className='h-[236px] flex-col justify-start items-center gap-[9px] inline-flex'>
                    <div className=' bg-white rounded-[10px] flex-col justify-center items-center flex'>
                      <Image width={100} height={100} alt="conf" className='w-[117px] h-[156px] rounded-xl' src={item.image} />
                    </div>
                    <div className='flex-col justify-center items-center gap-0.5 flex'>
                      <div className=" text-center text-slate-500 text-sm font-bold  ">{item.name}</div>
                      <div className="text-slate-500 text-[10px] text-center  font-normal ">{item.designation}</div>
                    </div>
                  </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className='justify-start items-start gap-[17px] inline-flex'>
            <div className='w-[65px] h-[13px] relative bg-indigo-400 rounded-[9px]' />
            <div className='w-[65px] h-[13px] relative bg-zinc-400 rounded-[9px]' />
            <div className='w-[65px] h-[13px] relative bg-zinc-400 rounded-[9px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
