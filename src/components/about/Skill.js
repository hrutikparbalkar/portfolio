import React, { useState,useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'animate.css';

const Skill = () => {
  useEffect(()=>{
    Aos.init({duration:2000,delay:300})
  })
  const [data, setData] = useState([
    {
      name: "HTML",
      img: "https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png",
    },
    {
      name: "CSS",
      img: "https://camo.githubusercontent.com/b9714180de7437a8f4da9f998b998101ce0d73cef3df55b0c0400cecc219e348/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667",
    },
    {
      name: "JS",
      img: "https://i.pinimg.com/originals/13/40/7c/13407c12f50f08d328800c3caef43f61.png",
    },
    {
      name: "React JS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s",
    },
    {
      name: "Tailwind",
      img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632979765809/HTEigfQR-.png?auto=compress,format&format=webp",
    },
    {
      name: "MySQL",
      img: "https://pipedream.com/s.v0/app_1YMhwo/logo/orig",
    },
    {
      name: "Python",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    },
    {
      name: "Bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    },
  ]);
  return (
    <div className="  lg:mt-32 mt-10 " id="skill" data-aos="zoom-in">
      <h1 className=" text-center font-mono text-white lg:text-5xl text-3xl font-semibold">
        My<span className="  text-red-600 pl-3 lg:pl-5">skills</span>
      </h1>
      <section class=" body-font">
        <div class="container px-5 py-10 lg:py-24 mx-auto">
          <div class="lg:flex lg:flex-wrap lg:place-content-center lg:gap-20 gap-5 grid grid-cols-2 md:grid-cols-3 " >
            {data.map((item, i) => {
              return (
                <div class="xl:w-1/6 md:w-60 hover:-translate-y-4 duration-700 ease-out transition-all cursor-pointer w-54 lg:w-1/6 p-4" key={i}>
                  <div class=" p-6 rounded-lg border-2 border-white/50">
                    <img
                      class="h-24 md:h-36 lg:h-40 rounded w-full object-cover object-center mb-6"
                      src={item.img}
                      alt="content"
                    />
                    <h2 class="text-lg text-white font-medium title-font mb-1 text-center">
                      {item.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
