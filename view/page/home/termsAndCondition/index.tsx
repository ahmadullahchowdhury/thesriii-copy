import { TermsAndConditionData } from "@json-db";
import Image from "next/image";

const TermsAndCondition = () => {

    return (
        <div id='terms-and-conditions' className='px-4 pt-20 pb-28 bg-primary_higher dark:bg-dark_primary_higher duration-700 overflow-hidden overflow-y-scroll no-scrollbar'
            style={{
                backgroundPosition: "right -20% bottom -500px",
                overflowY: 'auto',
                backgroundImage: `url('/icon/bg-round.svg')`,
                backgroundSize: "800px 800px",
                backgroundRepeat: 'no-repeat',
            }}>
            <h2 className='container-sm text-md sm:text-3xl font-medium self-start tracking-[2.5px] mb-4 text-secondary_1'>Terms And Condition </h2>

            <div className='container-sm py-16 bg-primary_lower dark:bg-dark_primary_lower duration-700 rounded-3xl px-4 md:px-16'>

                {
                    TermsAndConditionData.map((section, index: number) => (
                        <PrivacySection key={index} title={section.title} content={section.content} />
                    ))
                }
            </div>

            <Image src={'/icon/bg-round.svg'} className='absolute transform w-96 -top-0 -left-28 z-0 opacity-30' alt='bus' width={200} height={200} priority />

        </div>
    );
};

export default TermsAndCondition;

const PrivacySection = ({ title, content }: { title: string, content: { key: string, des: string }[] }) => (
    <div className=''>
        <h4 className='text-md tracking-[2.5px] font-bold text-secondary_1 mb-2'>{title}</h4>
        {content.map((oj: any, index: number) => (
            <p key={index} className={`${title !== '' ? "text-md xl:ms-14 tracking-[2.5px] mb-4 ms-4" : "text-md tracking-[2.5px]"}`}>
                {oj.key && <span className="text-secondary_1 font-bold">{oj.key}&nbsp;</span>}{oj.des}
            </p>
        ))}
    </div>
);