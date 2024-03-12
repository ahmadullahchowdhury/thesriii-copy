import Image from 'next/image';

const About = () => {

    return (
        <div id='about-us' className='pt-6 md:pt-20 min-h-[100vh] flex items-center justify-center bg-primary_higher dark:bg-dark_primary_higher duration-700 relative'>
            <div className='container-sm py-16'>
                <div className='flex flex-col gap-y-5'>
                    {/* LEFT DIV */}
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <h1 className='text-neutral dark:text-white text-3xl font-bold capitalize'>Contact Info</h1>
                            <div className='w-64 h-[7px] relative bg-secondary_1 rounded-[19px] mt-3' />
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-16'>
                            <p className='text-md font-medium'>
                                I come from a lineage deeply rooted in the medical profession, with both my parents serving as esteemed medical practitioners in our homeland, Kerala, famously known as "God's Own Country."
                                <br />
                                <br />
                                In 1999, I proudly earned my Medical degree from Alleppey Medical College, Kerala. Following that milestone, I embarked on a journey of continuous learning and growth, undertaking residencies in General Surgery and serving as a Registrar in Surgical Oncology until 2008. It was during these formative years that I honed my skills and nurtured my passion for combating cancer.
                                <br />
                                <br />
                                In 2009, I embraced a new chapter in my career by joining the Surgical Oncology department of St. John's Medical College, Bangalore. This transition marked a pivotal moment as I delved deeper into the complexities of oncological care, driven by a relentless pursuit of excellence.
                                <br />
                                <br />
                                Reflecting upon my trajectory, I am filled with a profound sense of gratitude and fulfillment. Today, I proudly hold the esteemed position of Professor of Surgical Oncology at St. John's Medical College, where I continue to contribute to the field with dedication and honor.
                            </p>
                            <Image src={'/image/people.png'} alt='people' className='hidden md:block w-80 h-72 rounded-full' width={500} height={500} priority />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div className='flex justify-end'>
                            <div>
                                <h1 className='text-neutral dark:text-white text-3xl font-bold capitalize'>My Vision</h1>
                                <div className='w-48 h-[7px] relative bg-secondary_1 rounded-[19px] mt-3' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-16 '>
                            <div className='flex'>
                                <span className='w-32'>
                                    <Image src={'/image/badge.svg'} alt='badge' className='w-full' width={100} height={100} priority />
                                </span>
                                <span className='w-32'>
                                    <Image src={'/image/badge.svg'} alt='badge' className='w-full' width={100} height={100} priority />
                                </span>
                            </div>
                            <p className='text-md font-medium'>
                                As an active member of Community oncology activities, my core aim is to diagnose the cause and provide patients with the best possible treatment.
                                Due to a lack of screening and access to right treatment procedure, we are experiencing higher mortality rates than ever before due to cancer.
                                We need to put an end to this desperate condition. The only way to achieve this mission is through research.
                                Research is advancing day by day that directly improve our understanding about cancer treatment plans.
                                <br />
                                <br />
                                Here in this scenario, I aspire to convey the best treatment plan & surgical techniques available that improves the patient’s overall health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default About;
