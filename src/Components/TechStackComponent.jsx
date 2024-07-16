import React from 'react'

export default function TechStackComponent() {
    return (
        <div className='mt-24'>
            <h2 className="text-3xl mb-4 text-green-400 font-thin md:ml-28 ml-10">─── Tech Stack</h2>
            <div className='flex flex-wrap flex-col md:flex-row w-[80vw] m-auto  justify-evenly p-5 scale-90 md:scale-100'>
                <div className='grid grid-cols-2 gap-5 bg-opacity-30 backdrop-filter backdrop-blur-md p-5 bg-white rounded-xl shadow-lg md:mt-10'>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/3.svg" alt="" className='w-20 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/2.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/11.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/1.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 bg-opacity-30 backdrop-filter backdrop-blur-md p-5 bg-white rounded-xl shadow-lg mt-10'>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/5.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/6.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/9.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/8.svg" alt="" className='w-20 rounded-xl' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 bg-opacity-30 backdrop-filter backdrop-blur-lg p-5 bg-white rounded-xl shadow-lg mt-10'>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/7.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/10.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/4.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/12.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 bg-opacity-30 backdrop-filter backdrop-blur-md p-5 bg-white rounded-xl shadow-lg mt-10'>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/13.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/14.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/15.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="./techstackimages/16.svg" alt="" className='w-24 rounded-xl' />
                    </div>
                </div>

            </div>
        </div>
    )
}
