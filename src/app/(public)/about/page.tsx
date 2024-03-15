import { executive_team, global_leadership_team, members } from '@json-db';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <div className='container-sm pt-32'>
        <div className='text-slate-500 text-2xl md:text-4xl lg:text-5xl font-semibold '>Global Leadership Team</div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-20 pt-4 md:pt-8 lg:pt-12' >
          {global_leadership_team.map(item => (
            <div className='    '>
              <Image
                alt='members'
                width={100}
                height={100}
                className='w-[240px] h-[240px] rounded-[5px]'
                src={item.image}
              />
              <div className='min-h-[280px] pt-5 grid grid-rows-2 justify-between gap-5 '>
                <div className=''>
                  <div className='text-zinc-800 text-2xl font-bold text-left'>{item.name}</div>
                  <div className='w-[275px] pt-2 text-zinc-500 text-base text-left font-light '>{item.designation}</div>
                </div>
                <div className='text-zinc-500 text-xl font-normal underline'>Show bio</div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-slate-500 text-2xl md:text-4xl lg:text-5xl font-semibold pt-10 md:pt-14 lg:pt-20 '>Board of directors</div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-20 pt-4 md:pt-8 lg:pt-12' >
          {members.map(item => (
            <div className='    '>
              <Image
                alt='members'
                width={100}
                height={100}
                className='w-[240px] h-[240px] rounded-[5px]'
                src={item.image}
              />
              <div className='min-h-[280px] pt-5 grid grid-rows-2 justify-between gap-5 '>
                <div className=''>
                  <div className='text-zinc-800 text-2xl font-bold text-left'>{item.name}</div>
                  <div className='w-[275px] pt-2 text-zinc-500 text-base text-left font-light '>{item.designation}</div>
                </div>
                <div className='text-zinc-500 text-xl font-normal underline'>Show bio</div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-slate-500 text-2xl md:text-4xl lg:text-5xl font-semibold pt-10 md:pt-14 lg:pt-20 '>Executive Team</div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-20 pt-4 md:pt-8 lg:pt-12' >
          {executive_team.map(item => (
            <div className='    '>
              <Image
                alt='members'
                width={100}
                height={100}
                className='w-[240px] h-[240px] rounded-[5px]'
                src={item.image}
              />
              <div className='min-h-[280px] pt-5 grid grid-rows-2 justify-between gap-5 '>
                <div className=''>
                  <div className='text-zinc-800 text-2xl font-bold text-left'>{item.name}</div>
                  <div dangerouslySetInnerHTML={{ __html: item.designation }} className='w-[275px] pt-2 text-zinc-500 text-base text-left font-light '></div>
                </div>
                <div className='text-zinc-500 text-xl font-normal underline'>Show bio</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
