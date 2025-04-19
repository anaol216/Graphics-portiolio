"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-4 text-white mt-4 relative">
      {/* Logo */}
      <div className="logo">
        <button 
          onClick={() => handleScroll('home')} 
          className="font-bold text-xl mt-2 hover:text-[#FFD700]"
        >
          Your Logo
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-8">
          <li>
            <button 
              onClick={() => handleScroll('home')} 
              className="hover:text-[#c60797] transition-all duration-200 py-2 hover:scale-110"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('skills')} 
              className="hover:text-[#e336d7] transition-all duration-200 py-2 hover:scale-110"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('projects')} 
              className="hover:text-[#c60797] transition-all duration-200 py-2 hover:scale-110"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('contact')} 
              className="hover:text-[#c60797] transition-all duration-200 py-2 hover:scale-110"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Right side elements */}
      <div className="flex items-center space-x-6">
        {/* Social links and theme toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/anaol216"
            className="text-xl transition-transform duration-200 hover:scale-125 hover:text-[#c60797]/70"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/anaol216"
            className="text-xl transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/anaol216"
            className="text-xl transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme" 
            className="text-xl hover:scale-125 transition-transform"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 hover:text-[#c60797] transition-colors p-1"
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 mt-4 right-4 w-48 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 bg-black bg-opacity-90 backdrop-blur-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } md:hidden py-3 px-4 shadow-xl`}
      >
        <ul className="flex flex-col space-y-3 text-center">
          <li>
            <button 
              onClick={() => handleScroll('home')}
              className="block py-2 hover:text-[#c60797] transition-all duration-200 hover:scale-105 w-full"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('skills')}
              className="block py-2 hover:text-[#e336d7] transition-all duration-200 hover:scale-105 w-full"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('projects')}
              className="block py-2 hover:text-[#c60797] transition-all duration-200 hover:scale-105 w-full"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleScroll('contact')}
              className="block py-2 hover:text-[#c60797] transition-all duration-200 hover:scale-105 w-full"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Social Links */}
      <div className="md:hidden fixed top-[60%] left-4 transform -translate-y-1/2 flex flex-col z-30">
        <a
          href="https://github.com/anaol216"
          className="text-xl mb-8 transition-transform duration-200 hover:scale-125 hover:text-[#c60797]/70"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="text-xl mb-8 transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="text-xl mb-8 transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;