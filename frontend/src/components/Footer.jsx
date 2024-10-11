import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Container for all footer sections */}
        <div className="flex flex-col md:flex-row justify-between md:space-x-16 space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-semibold mb-4">NAME</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          {/* Get Help Section */}
          <div className="md:w-1/4">
            <h2 className="font-semibold mb-4">GET HELP</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-600">Latest Articles</a></li>
              <li><a href="#" className="hover:text-orange-600">FAQ</a></li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="md:w-1/4">
            <h2 className="font-semibold mb-4">PROGRAMS</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-600">Art & Design</a></li>
              <li><a href="#" className="hover:text-orange-600">Business</a></li>
              <li><a href="#" className="hover:text-orange-600">IT & Software</a></li>
              <li><a href="#" className="hover:text-orange-600">Languages</a></li>
              <li><a href="#" className="hover:text-orange-600">Programming</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:w-1/4">
            <h2 className="font-semibold mb-4">CONTACT US</h2>
            <p>Address: 2231 New Design St, Lorem Ipsum 10 Hudson Yards, USA</p>
            <p>Tel: + (123) 2500-567-898</p>
            <p>Email: supportlms@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-orange-600">Facebook</a>
              <a href="#" className="hover:text-orange-600">Pinterest</a>
              <a href="#" className="hover:text-orange-600">Instagram</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center md:text-left">
          <p>Copyright © 2024 Name </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
