import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 300 });
  }, []);

  const frontendSkills = [
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/888/888859.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/888/888847.png" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "Tailwind CSS", img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632979765809/HTEigfQR-.png?auto=compress,format&format=webp" },
    { name: "React.js", img: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" }
  ];

  const backendSkills = [
    { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Express.js", img: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" },
    { name: "MongoDB", img: "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" },
    { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png" }
  ];

  return (
    <div className="bg-gray-900 text-white py-20" id="skill" data-aos="fade-up">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Frontend Section */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
          Frontend <span className="text-red-500">Skills</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl hover:bg-white/20 duration-500 p-6 flex flex-col items-center justify-center border border-gray-700"
            >
              <img src={skill.img} alt={skill.name} className="w-20 h-20 mb-4" />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Backend Section */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold my-16">
          Backend <span className="text-blue-500">Skills</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl hover:bg-white/20 duration-500 p-6 flex flex-col items-center justify-center border border-gray-700"
            >
              <img src={skill.img} alt={skill.name} className="w-20 h-20 mb-4" />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
