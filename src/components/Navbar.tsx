"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-orange-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nom avec animation */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white 
               bg-blue-900 px-6 py-3 rounded-md animate-[fadeIn_4s_ease-in-out_forwards]">
  Adem Khalfaoui
</h1>


        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#hero" className="hover:text-yellow-300 transition">Home</a>
          <a href="#skills" className="hover:text-yellow-300 transition">Skills</a>
          <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>

          {/* Download CV */}
          <a
            href="/uploads/cv.pdf"
            download="Adem-Khalfaoui-CV-2025.pdf"
            className="ml-3 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Download CV
          </a>
        </div>

        {/* Menu Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons text-3xl text-white">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-900 via-blue-800 to-orange-500 shadow-md px-6 py-4 flex flex-col space-y-4">
          <a href="#hero" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#skills" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>Contact</a>

          <a
            href="/uploads/cv.pdf"
            download="Adem-Khalfaoui-CV-2025.pdf"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
