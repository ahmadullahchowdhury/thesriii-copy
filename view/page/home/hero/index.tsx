import { companyData } from '@json-db';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  const { theme } = useTheme();

  const router = useRouter();
  const handleClick = () => {
    router.push('/#contact');
  };

  // console.log(companyData);
// bg-no-repeat bg-center bg-cover bg-[url(/image/bg-1.png)]
  return (
    <div className='bg-white z-10 bg-no-repeat bg-center bg-cover  bg-[url(/image/bg-1.png)]  '>
      {/* <Image 
        width={0}
        height={0}
        sizes="100vw"
        objectFit='contain'
        src='/image/bg-1.png'
        alt='hero-bg'
        className='absolute w-full h-full bg-cover top-0 left-0 -z-10'
      /> */}
      <div className='mx-10 md:mx-20 lg:mx-10  pt-16 md:pt-20 lg:pt-20 relative'>
        <div
          style={{ background: 'linear-gradient(104deg, #4B6585 0.02%, #6E86A3 68.05%)' }}
          className='container-sm  mb-5 md:mb-8 lg:mb-10 rounded-[10px] '
        >
          <div className='px-10 md:px-20 lg:px-24 py-8 md:py-12 lg:py-14 grid gap-x-5 gap-y-10 grid-cols-1  lg:grid-cols-5 '>
            <div className='lg:col-span-3 '>
              <h1 className=' lg:leading-[55px] text-white text-3xl font-semibold md:text-5xl lg:text-5xl  capitalize tracking-[4.50px]  '>
                Empowering Global Innovation for a Sustainable Tomorrow
              </h1>
              <p className='lg:leading-[35px] text-white text-base md:text-lg lg:text-lg capitalize tracking-[3px] pt-5 md:pt-7 lg:pt-10'>
                We are committed to driving positive change through cutting-edge research, innovation, and
                collaboration. Our mission is to tackle some of the most pressing challenges facing our planet by
                harnessing the power of science, technology, and entrepreneurship.
              </p>
            </div>
            <div className='lg:col-span-2 flex justify-center items-center'>
              <Image
                src={'/image/Vector.png'}
                className='w-9/12 md:w-8/12 lg:w-full  object-center'
                alt='hero'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className=' max-w-[1280px] mx-auto border-b-2 bg-white mb-10 relative '>
          <p className='text-slate-500 text-2xl pb-2'>SRII Sponsors & Partner Organizations</p>
          <div className='z-10 absolute left-[0px]  -bottom-[4.5px] h-2 w-2 bg-[#A9A9A9]/90 rounded-full'></div>
        </div>
        <div className=' max-w-[1280px] mx-auto pb-20 md:pb-28 lg:pb-44'>
          <Marquee style={{ flexDirection: 'row' }} className='bg-white'>
            {companyData.map((company, index) => (
              <Image key={index} src={company.image} className='mr-10' alt='hero' width={200} height={200} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
