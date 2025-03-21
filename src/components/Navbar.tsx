import React, { useState } from 'react';
import { Menu, X, Shovel, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shovel className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Concrete Jungle</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600">Services</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-green-600">Gallery</Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            <Link to="/quote" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              Get Quote
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600">
              <User className="h-5 w-5" />
            </Link>
            <div className="flex items-center space-x-4">
              <a href="tel:407-810-7335" className="flex items-center text-green-600">
                <Phone className="h-5 w-5 mr-1" />
                <span>407-810-7335</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="block px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Customer Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}