import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-6">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Worked On
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            While the number isn't extensive, I've developed a few apps as part of university and club projects which include
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="flex flex-col p-4 bg-blue-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex justify-center mb-4">
              <img
  alt="project"
  className="object-cover w-full h-auto"
  style={{ minHeight: "200px", maxHeight: "400px" }} // Adjust min and max height as needed
  src={project.image}
/>

              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-sm font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none">
                    View Project
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
