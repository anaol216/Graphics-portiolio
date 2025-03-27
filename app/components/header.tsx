"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

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

  return (
    <header className="flex justify-between items-center p-4 text-white mt-4 relative">
      {/* Logo on the left */}
      <div className="logo">
        <Link href="/" className="font-bold text-xl mt-2 hover:text-[#FFD700]">
          Your Logo
        </Link>
      </div>

      {/* Centered Navigation for desktop */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-[#c60797] transition-all duration-200 py-2 hover:scale-110">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#e336d7] transition-all duration-200 py-2 hover:scale-110">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-[#c60797] transition-all duration-200 py-2 hover:scale-110">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-[#c60797] transition-all duration-200 py-2 hover:scale-110">
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right side elements */}
      <div className="flex items-center space-x-6">
        {/* Social links and theme toggle (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="https://github.com/yourusername"
            className="text-xl transition-transform duration-200 hover:scale-125 hover:text-[#c60797]/70"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            className="text-xl transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            className="text-xl transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme" 
            className="text-xl hover:scale-125 transition-transform"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Minimized mobile menu button (right side) */}
        <button 
          className="md:hidden z-50 hover:text-[#c60797] transition-colors p-1"
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Compact mobile menu with centered text and transparent hover */}
      <nav
        className={`fixed top-16 mt-4 right-4 w-48 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 bg-black bg-opacity-90 backdrop-blur-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } md:hidden py-3 px-4 shadow-xl`}
      >
        <ul className="flex flex-col space-y-3 text-center">
          <li className="rounded transition-all duration-200 hover:bg-transparent hover:text-xl">
            <Link 
              href="/" 
              className="block py-2 hover:text-[#c60797] transition-all duration-200 hover:scale-105 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="rounded transition-all duration-200 hover:bg-transparent  hover:text-xl">
            <Link 
              href="/about" 
              className="block py-2 hover:text-[#e336d7] transition-all duration-200 hover:scale-105 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="rounded transition-all duration-200 hover:bg-transparent hover:text-xl">
            <Link 
              href="/skills" 
              className="block py-2 hover:text-[#c60797] transition-all duration-200 hover:scale-105 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="rounded transition-all duration-200 hover:bg-transparent hover:text-xl">
            <Link 
              href="/projects" 
              className="block py-2 hover:text-[#c60797] transition-all duration-200 hover:scale-105 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social links for smaller devices (left side) */}
      <div className="md:hidden fixed top-[60%] left-4 transform -translate-y-1/2 flex flex-col z-30">
        <Link
          href="https://github.com/yourusername"
          className="text-xl mb-8 transition-transform duration-200 hover:scale-125 hover:text-[#c60797]/70"
          aria-label="GitHub"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          className="text-xl mb-8 transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          className="text-xl mb-8 transition-transform duration-200 hover:scale-125 hover:text-[#e336d7]/70"
          aria-label="Twitter"
        >
          <FaTwitter />
        </Link>
      </div>
    </header>
  );
};

export default Header;