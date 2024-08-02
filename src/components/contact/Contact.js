import { GitHub, Instagram, LinkedIn,ArrowUpward } from "@mui/icons-material";
import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { animateScroll as scroll} from 'react-scroll';
import { useEffect } from "react";

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  useEffect(()=>{
    Aos.init({duration:2000,delay:300})
  })
  return (
    <div className=" lg:mt-44 pb-10 mt-20"data-aos="fade">
      <h1 className=" lg:text-5xl font-semibold font-mono text-red-600 md:text-4xl text-3xl text-center">
        Contact
      </h1>
      <section class="text-gray-600 body-font relative" id="contact">
        <div class="container px-5 py-12 mx-auto">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="name"
                    name="name"
                    class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    id="email"
                    name="email"
                    class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    autoComplete="off"
                    name="message"
                    class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-5 text-center">
                <a class="text-indigo-500 text-lg lg:text-2xl">hrutik391@gmail.com</a>
                <span class="inline-flex ml-2 gap-2 items-center">
                  <a href="https://www.instagram.com/h_r_u_t_i_k_k_k/"><Instagram className=" text-white hover:-translate-y-1 transition-all cursor-pointer delay-1000"/></a>
                  <a href="https://www.linkedin.com/in/hrutik-parbalkar-b49468294/"><LinkedIn className=" text-white hover:-translate-y-1 transition-all delay-1000 cursor-pointer"/></a>
                  <a href="https://github.com/hrutikparbalkar"><GitHub className=" text-white hover:-translate-y-1 transition-all delay-1000 cursor-pointer"/></a>
                  <button onClick={scrollToTop}><ArrowUpward className="text-white "/></button>
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
