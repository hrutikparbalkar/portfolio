import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Project = () => {
  useEffect(()=>{
    Aos.init({duration:2000,delay:300})
  })
  return (
    <div className=' lg:mt-10' id='project' data-aos="fade-up">
      <h2 className='  text-center lg:text-4xl  font-semibold font-mono md:text-4xl text-3xl text-red-700'>Projects</h2>
        <div className=' lg:flex lg:justify-evenly lg:gap-0 px-10 mt-16'>
            <div className=' lg:h-56 md:h-52  lg:w-[460px] cursor-pointer hover:-translate-y-4 duration-700 ease-out transition-all lg:mt-0 mt-4 rounded-2xl border-2 border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.2)] shadow-indigo-600'>
                <h1 className=' text-center lg:text-2xl md:text-2xl text-white font-semibold pt-3'>Attainment calculator</h1>
                <p className=' text-wrap p-3  leading-relaxed md:pt-5 -tracking-tighter text-gray-400 font-medium text-center'>The Attainment Calculator is a web-based tool designed to help educators and students track and calculate student attainment. Built using HTML, CSS, and JavaScript, this intuitive calculator provides a user-friendly interface for users to input student grades and calculate overall attainment.</p>
            </div>
            <div className=' lg:h-56 lg:w-[460px] lg:mt-0 md:h-52 mt-8 cursor-pointer hover:-translate-y-4 duration-700 ease-out transition-all rounded-2xl border-2 border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.2)] shadow-indigo-600'>
                <h1 className=' text-center lg:text-2xl md:text-2xl text-white font-semibold pt-3'>E-commerce website</h1>
                <p className=' text-wrap p-3 leading-relaxed md:pt-5 -tracking-tighter text-gray-400 font-medium text-center'> I developed a  e-commerce website using a combination of cutting-edge technologies, including HTML, CSS, React JS, and Tailwind CSS. This online storefront allows customers to browse and purchase products seamlessly, with a user-friendly interface and intuitive navigation.</p>
            </div>
            <div className=' lg:h-56 lg:w-[460px] lg:mt-0 mt-8 md:h-52 cursor-pointer hover:-translate-y-4 duration-700 ease-out transition-all rounded-2xl border-2 border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.2)] shadow-indigo-600'>
                <h1 className=' text-center lg:text-2xl md:text-2xl text-white font-semibold pt-3'>Movie website</h1>
                <p className=' text-wrap p-3 leading-relaxed md:pt-5 -tracking-tighter text-gray-400 font-medium text-center'>I designed and developed a captivating movie website using a powerful combination of technologies, including HTML, CSS, React JS, Tailwind CSS, and Firebase. This online platform allows users to explore and discover their favorite movies, with a seamless and engaging user experience.</p>
            </div>
        </div>
    </div>
  )
}

export default Project