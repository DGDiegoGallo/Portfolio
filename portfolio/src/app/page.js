"use client"

import React, { useEffect, useState } from 'react';
import { FaHtml5, FaJs, FaCss3Alt, FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import './globals.css';

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/Landing.JPG", alt: "Landing 1" },
    { src: "/Captura de pantalla (367).png", alt: "Landing 2" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll" style={{ overflowX: 'hidden' }}>
      <nav className="fixed top-0 left-0 w-full bg-orange-500 text-white flex justify-between items-center p-4 z-10">
        <div className="text-2xl font-bold">DIEGO GALLO</div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-gray-900">About Me</a>
          <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
          <a href="https://www.linkedin.com/in/diego-gallo-1976b92a6/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Contact</a>
        </div>
      </nav>
      <section className="snap-start flex flex-col items-center justify-center h-screen bg-gray-800">
        <h1 className="text-4xl font-bold text-white">
          DIEGO<span className="text-orange-500">/</span>GALLO
        </h1>
        <h2 className="text-2xl text-white">FULL STACK DEVELOPER</h2>
      </section>  
      <section id="about" className="snap-start flex flex-col items-center justify-center h-screen bg-gray-900">
        <h1 className="text-4xl font-bold text-orange-500">ABOUT ME</h1>
        <p className="text-white mt-4">
          Passionate about web development, game design, and creating efficient, scalable solutions.
        </p>
        <div className="w-full max-w-md mt-8">
          <div className="mb-4">
            <span className="text-white flex items-center"><FaHtml5 className="mr-2" />HTML5</span>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-white flex items-center"><FaJs className="mr-2" />JS</span>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-white flex items-center"><SiTypescript className="mr-2" />TS</span>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-white flex items-center"><FaCss3Alt className="mr-2" />CSS3</span>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-blue-300 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-white flex items-center"><FaReact className="mr-2" />React</span>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-cyan-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-white flex items-center"><SiNextdotjs className="mr-2" />Nextjs</span>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-gray-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="snap-start flex flex-col items-center justify-center h-screen bg-gray-950">
        <h1 className="text-4xl font-bold text-orange-500">PORTFOLIO</h1>
        <h2 className="text-2xl text-orange-300 mt-4">COMICRAFT</h2>
        <p className="text-white mt-4 max-w-md text-center">
          A platform where creators can upload comics with a creator membership, and readers can enjoy them with a monthly or annual subscription.
        </p>
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <a href="https://comiccraft.vercel.app" className="text-white text-lg underline">
            https://comiccraft.vercel.app
          </a>
        </div>
        <div className="mt-8 w-full max-w-2xl">
          <div className="relative w-full overflow-hidden"> 
            <div className="flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <a href="https://comiccraft.vercel.app">
                    <img src={image.src} alt={image.alt} className="w-full" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}