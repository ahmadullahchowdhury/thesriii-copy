import Image from 'next/image';
import React from 'react';


const Members = () => {
  const data = [
    {
      name: 'Kris Sing',
      designation: 'SRII President',
      image: '/image/mem_kris.png'
    },
    {
      name: 'Mark Gorenberg',
      designation: 'Managing Director of Hummer Winblad Venture Partners',
      image: '/image/mem_mark.png'
    },
    {
      name: 'Ajit Singh',
      designation: 'Partner at Artiman Venture & Consulting Professor at Stanford University',
      image: '/image/mem_ajit.png'
    },
    {
      name: 'Rajeeb Hazra',
      designation: 'Vice President at Intel',
      image: '/image/mem_rajeeb.png'
    }
  ];

  return (
    <div className='bg-[#FBFBFB] py-8 md:py-12 lg:py-16 px-10 md:px-20 lg:px-10 '>
      <div className='container-sm'>
        <div className='text-center text-slate-500 text-[50px] font-medium  capitalize'>Conference & summits </div>
        <div className=' '>
          
            <div className='pt-5 md:pt-8 lg:pt-12  justify-start items-start gap-14 inline-flex'>
              {data.map(item => (
                <div className='flex-col justify-start items-start gap-3 inline-flex'>
                  <Image alt='members' width={100} height={100} className='w-[277px] h-[277px] rounded-[5px]' src={item.image} />
                  <div className='min-h-[250px] grid grid-rows-2 justify-between gap-5 '>
                    <div className=''>
                      <div className='text-zinc-800 text-2xl font-bold '>{item.name}</div>
                      <div className='w-[275px] pt-2 text-zinc-500 text-base font-light '>
                      {item.designation}

                      </div>
                    </div>
                    <div className='text-zinc-500 text-xl font-normal underline'>Show bio</div>
                  </div>
                </div>
              ))}
              {/* <div className='flex-col justify-start items-start gap-5 inline-flex'>
                  <img className='w-[277px] h-[277px]' src='https://via.placeholder.com/277x277' />
                  <div className='flex-col justify-start items-start gap-5 flex'>
                    <div className='flex-col justify-center items-start gap-1.5 flex'>
                      <div className="text-zinc-800 text-3xl font-bold font-['Poppins']">Mark Gorenberg</div>
                      <div className="w-[280px] text-zinc-500 text-base font-light font-['Poppins']">
                        Managing Director of Hummer Winblad Venture Partners
                        <br />
                      </div>
                    </div>
                    <div className="text-zinc-500 text-xl font-normal font-['Poppins'] underline">Show bio</div>
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-5 inline-flex'>
                  <img className='w-[277px] h-[277px]' src='https://via.placeholder.com/277x277' />
                  <div className='flex-col justify-start items-start gap-5 flex'>
                    <div className='flex-col justify-center items-start gap-1.5 flex'>
                      <div className="text-zinc-800 text-3xl font-bold font-['Poppins']">Ajit Singh</div>
                      <div className="w-[275px] text-zinc-500 text-base font-light font-['Poppins']">
                        Partner at Artiman Venture & Consulting Professor at Stanford University
                      </div>
                    </div>
                    <div className="text-zinc-500 text-xl font-normal font-['Poppins'] underline">Show bio</div>
                  </div>
                </div>
                <div className='self-stretch flex-col justify-start items-start gap-5 inline-flex'>
                  <img className='w-[277px] h-[277px]' src='https://via.placeholder.com/277x277' />
                  <div className='h-[173px] flex-col justify-start items-start gap-5 flex'>
                    <div className='flex-col justify-center items-start gap-1.5 flex'>
                      <div className="text-zinc-800 text-3xl font-bold font-['Poppins']">Rajeeb Hazra</div>
                      <div className="w-[217px] text-zinc-500 text-base font-light font-['Poppins']">
                        Vice President at Intel
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="text-zinc-500 text-xl font-normal font-['Poppins'] underline">Show bio</div>
                  </div>
                </div>
                <div className='justify-start items-start gap-[76px] flex'>
                  <div className='flex-col justify-start items-start gap-5 inline-flex'>
                    <img className='w-[277px] h-[277px]' src='https://via.placeholder.com/277x277' />
                    <div className='flex-col justify-start items-start gap-5 flex'>
                      <div className='flex-col justify-center items-start gap-1.5 flex'>
                        <div className="text-zinc-800 text-3xl font-bold font-['Poppins']">Ray Harishankar</div>
                        <div className="w-[277px] text-zinc-500 text-base font-light font-['Poppins']">
                          IBM Fellow & CTO of Global Solutions, Global Business Services, IBM
                        </div>
                      </div>
                      <div className="text-zinc-500 text-xl font-normal font-['Poppins'] underline">Show bio</div>
                    </div>
                  </div>
                </div> */}
            </div>

            {/* <SliderMember/> */}
          
        </div>
      </div>
    </div>
  );
};

export default Members;
