import React, { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mgegpebj");

  useEffect(()=>{
    if (state.succeeded) {
      alert("Successfully Submitted Thanks for reaching out!");
      document.getElementById('contact-form').reset();
  
    }
  },[state.succeeded]);

  return (
    <div className='mt-32 relative' id='Contact'>
      <h2 className="text-3xl mb-4 text-green-400 font-thin md:ml-28 ml-10">─── Contact Me</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14884.00595915742!2d72.87779199999997!3d21.15233900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711900008211!5m2!1sen!2sin" className='w-[100vw] h-[600px] lg:w-[90vw]lg:h-[700px] m-auto mt-10 hidden md:block' allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container px-5 py-24 mx-auto flex md:absolute md:top-2 md:right-20 lg:right-32">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-xl shadow-purple-600/[.2]">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Contact me</h2>
          <p className="leading-relaxed mb-5 text-gray-400"></p>
          <form onSubmit={handleSubmit} id='contact-form'>
            <div className="relative mb-4">
              <label htmlFor="Name" className="leading-7 text-sm text-gray-300">Name</label>
              <input type="text" id="name" className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
              <input type="email" id="email" className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-md w-full">Submit</button>
          </form>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>

    </div>
  )
}
