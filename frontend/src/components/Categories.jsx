import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Categories data
const categories = [
  { name: 'Art & Design', courses: 38, icon: '🎨', path: '/category/art-design' },
  { name: 'Development', courses: 38, icon: '💻', path: '/category/development' },
  { name: 'Communication', courses: 38, icon: '💬', path: '/category/communication' },
  { name: 'Videography', courses: 38, icon: '🎥', path: '/category/videography' },
  { name: 'Photography', courses: 38, icon: '📷', path: '/category/photography' },
  { name: 'Marketing', courses: 38, icon: '📊', path: '/category/marketing' },
  { name: 'Content Writing', courses: 38, icon: '✍️', path: '/category/content-writing' },
  { name: 'Finance', courses: 38, icon: '💰', path: '/category/finance' },
  { name: 'Science', courses: 38, icon: '🔬', path: '/category/science' },
  { name: 'Network', courses: 38, icon: '🔗', path: '/category/network' },
  { name: 'Network', courses: 38, icon: '🔗', path: '/category/network' },
  { name: 'Network', courses: 38, icon: '🔗', path: '/category/network' },
];

const Categories = () => {
  const [visibleCategories, setVisibleCategories] = useState(10); // Show only 8 initially
  const [showAll, setShowAll] = useState(false); // State to manage Show All/Show Less
  const [showPopup, setShowPopup] = useState(false); // State to manage the popup modal

  // Toggle Show All/Show Less categories
  const toggleCategories = () => {
    setShowAll(!showAll);
    setVisibleCategories(showAll ? 10 : categories.length);
  };

  // Function to toggle the popup modal
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="px-8 py-12 max-w-6xl mx-auto">
      {/* Header Section and Buttons */}
      <div className="flex justify-between items-center mb-8">
        {/* Header Section */}
        <div className="text-left">
          <h2 className="text-3xl font-semibold">Top Categories</h2>
          <p className="text-gray-500">Explore our Popular Categories</p>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-4">
          {/* Show More/Less Button */}
          <button
            className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition duration-300"
            onClick={toggleCategories}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>

          {/* All Categories Popup Button */}
          <button
            className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition duration-300"
            onClick={togglePopup}
          >
            All Categories
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.slice(0, visibleCategories).map((category, index) => (
          <Link
            to={category.path}
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-orange-500 text-4xl mb-4">
              {category.icon}
            </div>
            {/* Category Title */}
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            {/* Courses Count */}
            <p className="text-gray-500">{category.courses} Courses</p>
          </Link>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={togglePopup}
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold mb-4">All Categories</h3>
            {/* List of Categories */}
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center space-x-4">
                  {/* Icon */}
                  <span className="text-orange-500 text-2xl">{category.icon}</span>
                  {/* Link to Category Page */}
                  <Link
                    to={category.path}
                    className="text-lg hover:underline"
                    onClick={togglePopup} // Close popup when a link is clicked
                  >
                    {category.name}
                  </Link>
                  {/* Courses Count */}
                  <span className="text-gray-500">({category.courses} Courses)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
