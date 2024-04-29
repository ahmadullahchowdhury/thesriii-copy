import React from 'react';

const Hero = () => {
    return (
        <div className='bg-transparent max-w-[1505px] mx-auto pt-[100px] pb-[100px]'>
            <div className="px-5 justify-start items-center gap-2.5 inline-flex">
                <p className="text-center py-10 text-white text-4xl capitalize">srii has organized and conducted countless summits worldwide. </p>
            </div>
            <div className="w-full px-[34px] py-[30px] bg-indigo-400 bg-opacity-60 rounded-[14px] flex-col justify-center items-center gap-[35px] inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 h-[49px] p-0.5 bg-slate-800 rounded-md justify-center items-center gap-2.5 flex">
                        <p className="w-full text-center text-white text-4xl font-medium font-['Lexend'] capitalize">Upcoming events</p>
                    </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <p className="text-center text-white text-4xl font-medium font-['Lexend'] capitalize">Silicon Valley Virtual Global Summit 2022</p>
                    </div>
                    <div className="max-w-[337px] text-center text-white text-[27px] font-medium font-['Lexend'] underline capitalize">Summit overview : </div>
                    <div className="max-w-[325px] justify-center items-center gap-2.5 inline-flex">
                        <p className="text-center text-white text-[27px] font-medium font-['Lexend'] underline capitalize">Registration link : </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;