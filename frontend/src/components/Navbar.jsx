// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white shadow p-4">
      {/* Left Side - Logo */}
      <div className="text-orange-500 text-2xl font-bold">
        <Link to="/">EduPress</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-gray-700"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={`fas fa-${isOpen ? "times" : "bars"}`}></i>
      </button>

      {/* Center - Nav Links */}
      <ul
        className={`flex-col md:flex-row md:flex md:space-x-6 text-gray-700 md:flex md:items-center ${isOpen ? "flex" : "hidden"} md:visible`}
      >
        <li>
          <Link
            to="/"
            className={`hover:text-orange-500 ${
              location.pathname === "/" ? "border-b-2 border-orange-500" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className={`hover:text-orange-500 ${
              location.pathname === "/courses"
                ? "border-b-2 border-orange-500"
                : ""
            }`}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`hover:text-orange-500 ${
              location.pathname === "/blog"
                ? "border-b-2 border-orange-500"
                : ""
            }`}
          >
            Blog
          </Link>
        </li>
      </ul>

      {/* Right Side - Login/Register & Search */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-orange-500">
          Login / Register
        </Link>
        <button className="text-gray-700 hover:text-orange-500">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
