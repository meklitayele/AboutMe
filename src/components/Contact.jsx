import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-900 text-gray-100">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <form
          name="contact"
          className="lg:w-1/2 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-medium title-font mb-5 text-white">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            Got a project in mind or just want to say hi? Feel free to drop me a message.
          </p>
          <div className="relative mb-4 w-full">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-full">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="bg-gray-800 py-4 text-gray-400 text-sm text-center">
        <div className="container mx-auto">
          <p>
            <span className="mr-2">Address:</span>
            Addis Ababa, Ethiopia
          </p>
          <p>
            <span className="mr-2">School:</span>
            ASSTU
          </p>
          <p>
            <span className="mr-2">Email:</span>
            <a href="mailto:meklitmelkamu34@yahoo.com" className="text-indigo-400">meklitmelkamu34@yahoo.com</a>
          </p>
        </div>
      </footer>
    </section>
  );
}
