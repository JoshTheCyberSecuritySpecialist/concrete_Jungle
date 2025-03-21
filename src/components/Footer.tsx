import React from 'react';
import { Shovel, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shovel className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">Concrete Jungle</span>
            </div>
            <p className="text-gray-400">
              Professional property maintenance services you can trust
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Excavation & Grading</li>
              <li className="text-gray-400">Land Clearing</li>
              <li className="text-gray-400">Pond Excavation</li>
              <li className="text-gray-400">Paver Installation</li>
              <li className="text-gray-400">Landscaping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <a href="tel:407-810-7335" className="text-gray-400 hover:text-white">
                  407-810-7335
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-500" />
                <a href="mailto:concretejunglepm@gmail.com" className="text-gray-400 hover:text-white">
                  concretejunglepm@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">Serving Central Florida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Concrete Jungle Property Maintenance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}