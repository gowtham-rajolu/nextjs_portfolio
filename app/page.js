"use client";

import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./data.json";
import VantaBackground from "../components/VantaBackground";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true,startEvent: 'DOMContentLoaded', });
  }, []);

  return (
    <>
      <VantaBackground />

      <div className="text-white scroll-smooth">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-8 shadow-lg z-50">
          <ul className="flex gap-8 justify-center text-lg font-semibold">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="flex flex-row items-center justify-center min-h-screen px-6 gap-x-10 pt-20"
          data-aos="fade-up"
        >
          <div data-aos="zoom-in" data-aos-delay="300">
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
          className="min-h-screen flex items-center justify-center text-white px-6"
          data-aos="fade-right"
        >
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg max-w-xl leading-relaxed">
              {data.about}
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20"
        >
          <div className="text-center mb-16" data-aos="zoom-in">
            <h2 className="text-6xl font-bold mb-4">Projects</h2>
          </div>

          <div className="flex flex-col space-y-16 w-full max-w-6xl">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="200"
              >
                {/* Project Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-semibold mb-2 text-yellow-300">{project.title}</h3>
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

                {/* Placeholder for image or preview */}
                <div
                  className="hidden md:flex w-full md:w-1/2 h-60 rounded-lg shadow-md items-center justify-center text-lg text-white font-semibold"
                data-aos="zoom-in">
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
<section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20"
  data-aos="zoom-in"
>
  <div className="text-center">
    <h2 className="text-6xl font-bold mb-8">Contact</h2>

    {/* Social Icons */}
    <div className="flex flex-wrap justify-center gap-8">
      {/* LinkedIn */}
      <a
        href={data.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg
          className="w-8 h-8 fill-current text-blue-400 hover:text-blue-300 transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5V24H0V8zm7.5 0h4.7v2.15h.07c.66-1.24 2.28-2.55 4.7-2.55 5.02 0 5.94 3.3 5.94 7.59V24h-5v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V24h-5V8z" />
        </svg>
      </a>
      <a
  href={"mailto:" + data.gmail}
  aria-label="Email"
  className="flex items-center justify-center gap-2 text-blue-400 hover:underline text-lg mb-6"
>
  {/* Better Mail Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
    />
  </svg>
  {data.gmail}
</a>


      {/* GitHub */}
      <a
        href={data.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <svg
          className="w-8 h-8 fill-current text-gray-300 hover:text-white transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.53.11-3.19 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.66.23 2.89.11 3.19.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12c0-6.28-5.23-11.5-11.5-11.5z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href={data.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg
          className="w-8 h-8 fill-current text-pink-400 hover:text-pink-300 transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.14c.52.52.9 1.15 1.14 1.77.17.46.354 1.26.41 2.43.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.14 1.77 4.92 4.92 0 0 1-1.77 1.14c-.46.17-1.26.354-2.43.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.14 4.92 4.92 0 0 1-1.14-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.14-1.77 4.92 4.92 0 0 1 1.77-1.14c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.513.012-4.75.07-1.02.05-1.57.22-1.94.36-.49.19-.83.41-1.19.77-.36.36-.58.7-.77 1.19-.14.37-.31.92-.36 1.94-.058 1.237-.07 1.6-.07 4.75s.012 3.513.07 4.75c.05 1.02.22 1.57.36 1.94.19.49.41.83.77 1.19.36.36.7.58 1.19.77.37.14.92.31 1.94.36 1.237.058 1.6.07 4.75.07s3.513-.012 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.83-.41 1.19-.77.36-.36.58-.7.77-1.19.14-.37.31-.92.36-1.94.058-1.237.07-1.6.07-4.75s-.012-3.513-.07-4.75c-.05-1.02-.22-1.57-.36-1.94a3.1 3.1 0 0 0-.77-1.19 3.1 3.1 0 0 0-1.19-.77c-.37-.14-.92-.31-1.94-.36-1.237-.058-1.6-.07-4.75-.07zm0 3.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4zm0 1.8a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm5.4-2.5a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href={data.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <svg
          className="w-8 h-8 fill-current text-red-500 hover:text-red-400 transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.7-.8-2.1-.9C17.6 2.6 12 2.6 12 2.6s-5.6 0-8.6.3c-.5.1-1.3.1-2.1.9C.7 4.5.5 6.2.5 6.2S.3 8 .3 9.7v1.5c0 1.7.2 3.5.2 3.5s.2 1.7.8 2.4c.8.8 1.9.8 2.4.9 1.8.2 7.3.3 7.3.3s5.6 0 8.6-.3c.5-.1 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.2-1.8.2-3.5v-1.5c0-1.7-.2-3.5-.2-3.5zM9.8 14.5V8.6l6.4 2.95-6.4 2.95z" />
        </svg>
      </a>
    </div>
  </div>
</section>

      </div>
    </>
  );
}
