import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/ecell-logo-dark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="Ecell Logo" style={{ height: '80px', width: '150px' }} />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#events" className="text-gray-100 hover:text-primary-light transition-colors">Events</a>
          <a href="#initiatives" className="text-gray-100 hover:text-primary-light transition-colors">Initiatives</a>
          <a href="#team" className="text-gray-100 hover:text-primary-light transition-colors">Team</a>
          <a href="#gallery" className="text-gray-100 hover:text-primary-light transition-colors">Gallery</a>
          <a href="#contact" className="bg-primary-light text-black px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#events" className="block px-3 py-2 text-gray-100 hover:text-primary-light">Events</a>
            <a href="#initiatives" className="block px-3 py-2 text-gray-100 hover:text-primary-light">Initiatives</a>
            <a href="#team" className="block px-3 py-2 text-gray-100 hover:text-primary-light">Team</a>
            <a href="#contact" className="block px-3 py-2 text-primary-light font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;