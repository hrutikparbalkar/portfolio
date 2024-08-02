import React, { useEffect } from "react";
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000,delay:300})
  })
  return (
    <div className="bg-slate-900 lg:mt-28 mt-10" id="about">
      <div className=" lg:px-6">
        <h2 className=" lg:pt-20 text-center font-semibold text-white lg:text-5xl text-3xl font-mono md:text-4xl pt-8 md:pt-10" data-aos="zoom-in-up">About<p className=" inline-block font-semibold text-red-700 lg:ml-4 ml-2 ">Me</p></h2>
        <div className=" lg:p-10 lg:mt-5 lg:w-[80%] lg:mx-auto p-5 md:p-10" data-aos="zoom-in-up">
            <p className=" text-white lg:text-xl tracking-wide leading-loose text-xs  md:text-[14px] ">I'am Hruitk Ramesh parbalkar from kolad.I completed my HSC and SSC from D.G.tatkare High school and Jr. college Kolad.I'm currently pursuing B.E in computer department at pillai HOC college of Engineering & Technoloy,Rasayani,Panvel.I'm a skilled web developer with a strong foundation in building dynamic and interactive web applications. With a solid understanding of HTML, CSS, and JavaScript  , I can craft responsive and engaging user interfaces. I'm also proficient in Tailwind CSS, a popular utility-first CSS framework, which enables me to efficiently style and layout web applications. My knowledge of React JS, a widely-used JavaScript library, allows me to create reusable UI components and build scalable applications. Furthermore, I have a solid grasp of MySQL, a widely-used relational database management system, which enables me to design, implement, and manage databases for web applications.</p>
            
        </div>
      </div>
    </div>
  );
};

export default About;
