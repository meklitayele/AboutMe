import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-800 sticky top-0 left-0 right-0 z-10">
      <div className="px-0">
        <div className="flex flex-wrap items-center justify-between px-5 py-8">
          <a className="text-lg font-bold text-white" href="#about">
            Meklit Ayele
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="#projects"
              className="mr-5 text-white hover:text-gray-200"
            >
              Past Work
            </a>
            <a
              href="#skills"
              className="mr-5 text-white hover:text-gray-200"
            >
              Skills
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
