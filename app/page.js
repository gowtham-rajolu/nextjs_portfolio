"use client";

import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./data.json";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-8 shadow-lg z-50">
        <ul className="flex gap-8 justify-center text-lg font-semibold">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-row items-center justify-center min-h-screen px-6 gap-x-10 pt-20"
        data-aos="fade-up"
      >
          <div>
          <h1 className="text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse">
            {data.name}
          </h1>
          <ReactTyped
            strings={data.roles}
            typeSpeed={50}
            backSpeed={10}
            loop
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6"
        data-aos="fade-right"
      >
        <div>
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-xl leading-relaxed">
            {data.about}
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20"
        data-aos="zoom-in"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-8">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
    </section>
    {/* Contact Section */}
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20"
      data-aos="fade-up"
    >
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-300 mb-6">
          Let’s connect! Reach out through any of the platforms below.
        </p>
        <div className="flex gap-10 flex-wrap justify-center">
          {/* LinkedIn */}
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8 fill-current text-blue-500 hover:text-blue-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.24 8.99h4.76V24H.24V8.99zM8.34 8.99h4.56v2.05h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.66 3.14 5.66 7.22V24H18V15.21c0-2.09-.04-4.78-2.91-4.78-2.91 0-3.36 2.27-3.36 4.62V24H8.34V8.99z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8 fill-current text-white hover:text-gray-300 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.94c.58.1.8-.25.8-.56v-2.15c-3.26.71-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.79 0-1.28.46-2.33 1.21-3.15-.12-.3-.53-1.5.11-3.14 0 0 .99-.32 3.25 1.2a11.3 11.3 0 015.92 0C17.76 4.01 18.75 4.33 18.75 4.33c.65 1.64.24 2.84.12 3.14.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.49-5.37 5.78.42.37.8 1.1.8 2.23v3.3c0 .31.22.67.81.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* Email */}
            <a href={`mailto:${data.gmail}`} aria-label="Email">
              <svg
                className="w-8 h-8 fill-current text-red-400 hover:text-red-300 transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.065L.375 4.5h23.25L12 13.065zm0 2.133L.375 6.632V19.5h23.25V6.632L12 15.198z" />
              </svg>
            </a>


          {/* YouTube */}
          <a
            href={data.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg className="w-8 h-8 fill-current text-red-600 hover:text-red-500 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M549.7 124.1c-6.3-23.8-24.9-42.4-48.6-48.6C456.5 64 288 64 288 64S119.5 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C16 168.6 16 256 16 256s0 87.4 10.3 131.9c6.3 23.8 24.9 42.4 48.6 48.6C119.5 448 288 448 288 448s168.5 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560 343.4 560 256 560 256s0-87.4-10.3-131.9zM232 334.4V177.6L352 256l-120 78.4z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={data.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8 fill-current text-pink-500 hover:text-pink-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 27-27 27s-27-12.1-27-27 12-27 27-27 27 12.1 27 27zm76.1 27.2c-.1-54.4-44.2-98.5-98.6-98.6H98.6C44.2 62 0 106.1 0 160.5v191c0 54.4 44.2 98.5 98.6 98.6h191c54.4-.1 98.5-44.2 98.6-98.6V160.5zm-48.4 191c0 27-22 49-49 49H98.6c-27 0-49-22-49-49v-191c0-27 22-49 49-49h191c27 0 49 22 49 49v191z" />
            </svg>
          </a>
        </div>
      </div>
    </section>



    </div>
  );
}
