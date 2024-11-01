import React from 'react';
import { Instagram, Linkedin, X } from 'lucide-react';
import logo from './assets/ecell-logo-dark.png';

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <img src={logo} alt="E-Cell Logo" style={{ width: '150px', height: '90px' }} />
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/ecell_vit.bhopal/" target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-shadow">
            <Instagram className="h-8 w-8 text-primary-light hover:text-gray-100 transition-colors" />
          </a>
          
          <a href="https://www.linkedin.com/company/e-cell-vit-bhopal/mycompany/" target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-shadow">
            <Linkedin className="h-8 w-8 text-primary-light hover:text-gray-100 transition-colors" />
          </a>

          <a href="https://x.com/ecell_vitb" target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-shadow">
            <X className="h-8 w-8 text-primary-light hover:text-gray-100 transition-colors" />
          </a>
        </div>

        <nav className="mt-8" aria-label="Footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8">
              <a href="#events" className="text-gray-400 hover:text-gray-300">Events</a>
              <a href="#initiatives" className="text-gray-400 hover:text-gray-300">Initiatives</a>
              <a href="#team" className="text-gray-400 hover:text-gray-300">Team</a>
              <a href="#contact" className="text-gray-400 hover:text-gray-300">Contact</a>
            </div>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} E-Cell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;