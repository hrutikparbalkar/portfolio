import React, { useEffect } from "react";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 300 });
  });
  return (
    <div className="bg-slate-900 lg:mt-28 mt-10" id="about">
      <div className=" lg:px-6">
        <h2
          className=" lg:pt-20 text-center font-semibold text-white lg:text-5xl text-3xl font-mono md:text-4xl pt-8 md:pt-10"
          data-aos="zoom-in-up"
        >
          About
          <p className=" inline-block font-semibold text-red-700 lg:ml-4 ml-2 ">
            Me
          </p>
        </h2>
        <div
          className=" lg:p-10 lg:mt-5 lg:w-[80%] lg:mx-auto p-5 md:p-10"
          data-aos="zoom-in-up"
        >
          <p className=" text-white lg:text-xl tracking-wide leading-loose text-xs  md:text-[14px] ">
            Hi, I'm Hrutik Parbalkar, a passionate Full Stack Developer
            specializing in the MERN stack (MongoDB, Express.js, React.js,
            Node.js). I enjoy building scalable and efficient web applications
            with a focus on clean code, performance, and user experience.I have
            hands-on experience in creating RESTful APIs, authenticatione. I’m
            skilled in responsive design using Tailwind CSS and deploying
            applications on Netlify, Vercel, and Render. I’m always eager to
            learn new technologies and solve real-world problems through code.
            🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
