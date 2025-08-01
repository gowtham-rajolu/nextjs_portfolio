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
    </div>
  );
}
