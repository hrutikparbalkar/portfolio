import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 300 });
  }, []);

  const projects = [
    {
      title: "Doctor Appointment System",
      description:
        "A full-stack web application for booking and managing doctor appointments with authentication and CRUD operations.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      img: "https://img.freepik.com/premium-vector/making-appointment-with-doctor-flat-concept-vector-illustration_151150-12192.jpg",
      demoLink: "https://doctor-appointment-web-appp.netlify.app/",
      githubLink: "https://github.com/hrutikparbalkar/doctor_appointment",
    },
    {
      title: "Document Management System",
      description:
        "Efficient system for tracking inventory, managing stock levels, and generating reports.",
      techStack: ["React.js", "Firebase", "Tailwind"],
      img: "https://www.shutterstock.com/image-vector/icon-illustrations-digital-document-storage-260nw-681801973.jpg",
      demoLink: "https://github.com/hrutikparbalkar",
      githubLink: "https://github.com/hrutikparbalkar",
    },
    {
      title: "Attainment Calculator",
      description:
        "A web-based tool to calculate student attainment using Excel files and dynamic formulas.",
      techStack: ["HTML", "CSS", "JavaScript"],
      img: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
      demoLink: "https://github.com/hrutikparbalkar",
      githubLink: "https://github.com/hrutikparbalkar",
    },
   
  ];

  return (
    <div className="bg-gray-900 text-white py-20" id="project" data-aos="fade-up">
      <div className="container mx-auto px-6 lg:px-16">
        
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
          My <span className="text-red-500">Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-500 border border-gray-700"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-gray-300 font-semibold">Tech Stack:</h4>
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
