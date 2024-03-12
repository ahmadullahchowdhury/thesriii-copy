import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const { theme } = useTheme()

    const router = useRouter();
    const handleClick = () => {
        router.push('/#contact');
    }
// something
    return (
        <div  className='relative  duration-700 overflow-hidden'>

        </div >
    );
};

export default Hero;