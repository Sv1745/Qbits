import React, { useState } from 'react';
import { Menu, X, Atom } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Atom className="h-8 w-8 text-[#8000ff]" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-[#ffdd00] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</a>
                <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#join" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Join Us</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#home" className="text-[#ffdd00] block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#events" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Events</a>
            <a href="#projects" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#join" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Join Us</a>
            <a href="#contact" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}