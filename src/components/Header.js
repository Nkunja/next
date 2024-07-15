"use client"
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Logo</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-gray-700 border border-gray-600 text-white"
        />
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-4`}
      >
        <a href="/" className="block py-2 lg:py-0">
          Home
        </a>
        <a href="/about" className="block py-2 lg:py-0">
          About
        </a>
        <a href="/contact" className="block py-2 lg:py-0">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
