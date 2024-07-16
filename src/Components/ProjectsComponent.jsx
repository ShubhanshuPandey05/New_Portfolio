import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectsComponent() {
    return (
        <div id='Projects' className='text-[#808dad] font-thin'>
            <h2 className="text-3xl mb-4 text-green-400 font-thin xl:ml-28 ml-10 mt-32">─── Projects</h2>
            <div className='mt-24'>
                <div className='flex w-[80vw] m-auto mt-20 xl:space-x-10 flex-col xl:flex-row'>
                    <img src="./projectImages/JSRPRIMESOLUTION.png" alt="" className='xl:w-[40vw] rounded-xl' />
                    <div>
                        <h1 className='text-2xl mb-5 mt-10'><a href="https://jsrprimesolution.com" target='_blank'>JSR Prime Solutions</a></h1>
                        <p className='text-[#808dad] font-thin'>This is a dynamic website made using React js, Node js, Express js, Mongodb it is a full MERN
                            stack project made by me. This website is Owned by Gaurav Pandey and used for selling the Bussiness Solutions related to Accounting software and their Customizations.</p>

                        <div className='flex flex-wrap mt-10 mb-10'>
                        <img src="./techstackimages/10.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/4.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/11.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/3.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/8.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/13.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/2.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/5.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                        </div>

                        <Link to="/Projects#JSRPrime" className='font-thin text-[#808dad] underline'>Read more</Link>

                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <div className='flex w-[80vw] m-auto mt-20 xl:space-x-10 flex-col xl:flex-row'>
                    <img src="./projectImages/chatters.png" alt="" className='xl:w-[40vw] rounded-xl' />
                    <div>
                        <h1 className='text-2xl mb-5 mt-10'><a href="https://chatters-svk4.onrender.com" target='_blank'>Chatters</a></h1>
                        <p className='text-[#808dad] font-thin'>A real time chat web application built using React js, Node js, Express js, Mongodb and Socket.io
                            it is a Full MERN stack project made by me. This Web app allows users to create their own Profile
                            and interact with the other users on the app by messaging them.</p>

                        <div className='flex flex-wrap mt-10 mb-10'>
                            <img src="./techstackimages/10.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/4.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/11.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/3.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/8.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/13.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/2.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/5.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/14.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                        </div>

                        <Link to="/Projects#chatters" className='font-thin text-[#808dad] underline'>Read more</Link>

                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <div className='flex w-[80vw] m-auto mt-20 xl:space-x-10 flex-col xl:flex-row'>
                    <img src="./projectImages/JsrPrimeSolutions.png" alt="" className='xl:w-[40vw] rounded-xl' />
                    <div>
                        <h1 className='text-2xl mb-5 mt-10'><a href="https://alphabetglobalsolutions.in" target='_blank'>JSR Prime Solutions</a></h1>
                        <p className='text-[#808dad] font-thin'>This is a dynamic website made using React js, Node js, Express js, Mongodb it is a full MERN
                            stack project made by me. This website is Owned by Gaurav Pandey and used for selling the Bussiness Solutions related to Accounting software and their Customizations.</p>

                        <div className='flex flex-wrap mt-10 mb-10'>
                            <img src="./techstackimages/10.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/4.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/11.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/3.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/8.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/13.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/2.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                            <img src="./techstackimages/5.svg" alt="" className='w-7 xl:w-10 rounded-xl m-2' />
                        </div>

                        <Link to="/Projects#JSRPRIMESOLUTIONS" className='font-thin text-[#808dad] underline'>Read more</Link>

                    </div>
                </div>
            </div>
            <h1 className='xl:ml-40 ml-10 mt-32'><Link to="/Projects">More Projects {`->`}</Link></h1>
        </div>
    )
}
