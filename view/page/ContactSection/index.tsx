import Title from 'view/ui/shared-component/component/title';
import ContactForm from '../ContactForm';

const ContactSection = () => {
    return (
        <div id='contact' className='bg-primary_higher dark:bg-neutral-2 duration-700 pt-2 md:pt-4 lg:pt-24 relative'>
            <div className="container-sm px-10 pt-12 pb-10 md:pb-28 z-10">
                <div className="flex flex-col lg:flex-row justify-center gap-14" id="ContactUs">
                    <div className='flex-1 flex flex-col gap-7'>
                        <Title title={"Get in touch"} />

                        <ContactForm />
                    </div>
                    <div className="flex-1 flex flex-col gap-7  w-full">
                        <Title title={"Contact Info"} />

                        <div className='flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-10'>
                            <p className='text-md md:text-xl text-text_color w-full md:w-4/5 dark:text-dark_text_color duration-700'>If you have any questions or inquiries, please feel free to contact us using the form below. We look forward to hearing from you.</p>
                            <p className='text-md md:text-xl text-text_color dark:text-dark_text_color duration-700'><span className='font-bold'>Phone:</span> +919980007455</p>
                            <p className='text-md md:text-xl text-text_color dark:text-dark_text_color duration-700'><span className='font-bold'>Email: </span>srakesh99@yahoo.com</p>
                            <p className='text-md md:text-xl text-text_color dark:text-dark_text_color duration-700'><span className='font-bold'>Address: </span> St John's Medical College And Hospital, <br /> Sarjapur Main Road, Bengaluru, Karnataka 560034, India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-0 z-0 pt-10 h-80 w-full' style={{
                backgroundPosition: "left 0% top 0%",
                overflowY: 'auto',
                backgroundImage: `url('/image/head.png')`,
                backgroundSize: "120px 175px",
                backgroundRepeat: 'no-repeat',
                opacity: "0.4",
                pointerEvents: "none"
            }}></div>
            <div className='hidden lg:block absolute bottom-0 right-0 z-0 pt-10 h-80 w-full' style={{
                backgroundPosition: "right 0% bottom 0%",
                overflowY: 'auto',
                backgroundImage: `url('/image/plus.png')`,
                backgroundSize: "173px 173px",
                backgroundRepeat: 'no-repeat',
                opacity: "0.2",
                pointerEvents: "none"
            }}></div>
        </div>
    );
};

export default ContactSection;