import React from "react";

export default function About() {
  return (
    <section id="about" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-blue-200">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
          Hi, I'm Meklit Ayele.
          <br className="hidden lg:inline-block" />I am a Student at AASTU.
        </h1>
        <p className="mb-8 leading-relaxed text-blue-800">As a student pursuing software engineering, creating my first portfolio site feels like a natural step in my growth. It's not just about showcasing my projects; it's about taking ownership of my learning and showcasing my journey as I develop my skills.

This portfolio is more than just a collection of assignments—it's a reflection of my passion for coding and my eagerness to learn. It's a way for me to document my progress and share my experiences with others.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Partner Up
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-blue-500 bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-lg">
            See My Past Work
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="../imgs/meklitt.jpg"
        />
      </div>
    </section>
  );
}
