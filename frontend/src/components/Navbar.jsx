import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-orange-600 text-2xl font-extrabold">
              EduPress
            </a>
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="text-gray-900 hover:text-orange-500 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out">
              Home
            </a>
            <a href="/courses" className="text-gray-900 hover:text-orange-500 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out">
              Courses
            </a>
            <a href="/blog" className="text-gray-900 hover:text-orange-500 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out">
              Blog
            </a>
          </div>

          {/* Profile & Search Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out">
            <i className="fas fa-user"></i>
            </a>
            <a href="/search" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out">
            <i className="fas fa-search"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-orange-500"
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-900 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">
              Home
            </a>
            <a href="/courses" className="block text-gray-900 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">
              Courses
            </a>
            <a href="/blog" className="block text-gray-900 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">
              Blog
            </a>
          </div>

          {/* Icons in Mobile View */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-4">
              <a href="/profile" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out">
              <i className="fas fa-user"></i>
              </a>
              <a href="/search" className="text-gray-900 hover:text-orange-500 transition-colors duration-300 ease-in-out">
              <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
