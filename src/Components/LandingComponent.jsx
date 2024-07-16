import React from 'react'
import TypingEffect from './Profession'

export default function LandingComponent() {
    return (
        <div className="landing lg:flex w-screen lg:h-[75vh] justify-center items-center flex-row-reverse z-40">
            
            <div className='lg:w-1/2 flex justify-center items-center'>
                <div className='rounded-full h-72 w-72 lg:h-[450px] lg:w-[450px] mt-10 overflow-hidden'>
                    <img src="./Resources/Profile.png" alt="Img" className='w-96 lg:w-[450px] rounded-full object-center' />
                </div>
            </div>
            <div className='lg:w-1/2 text-green-400 relative flex flex-col justify-center items-center lg:justify-start lg:items-start z-10'>
                <div className='text-2xl absolute top-10 lg:left-28 font-thin'>─── HELLO!</div>
                <div className='flex lg:ml-28 mt-24 text-4xl text-start text-white'>I'm &nbsp; <TypingEffect /></div>
                <div className='lg:ml-28 text-[#808dad] font-light mt-5'>Fullstack Developer & Instructor</div>
                <div className='lg:ml-28 text-[#808dad] font-light mt-7 p-1 md:p-0 text-center lg:text-start'>Hi there! My name is Shubhanshu Pandey and I’m a Web Developer with 1 years of experience in the industry. I love all things tech and coding, I'm also a Sketch Artist, a Freelancer</div>

                <div className="lg:ml-28 mt-10 relative inline-flex group">
                    <div className="absolute w-full transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="./Resources/Shubhanshu's Resume.pdf" target='_blank' className="relative w-full text-sm sm:text-md md:text-lg text-center items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-white" role="button">
                        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }} className="block">Download Resume</span>
                    </a>
                </div>

            </div>
        </div>
    )
}
