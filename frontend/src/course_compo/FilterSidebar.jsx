import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="w-full md:w-1/5 p-3 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4 border-b pb-2">Course Category</h2>
      <div className="mb-6">
        {['Commercial', 'Office', 'Shop', 'Educate', 'Academy', 'Single family home', 'Studio', 'University'].map((category, index) => (
          <div key={index} className="flex items-center justify-between mb-2 hover:bg-gray-100 transition-colors rounded p-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {category}
            </label>
            <span className="text-gray-500">15</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-4 border-b pb-2">Instructors</h2>
      <div className="mb-6">
        {['Kenny White', 'John Doe'].map((instructor, index) => (
          <div key={index} className="flex items-center justify-between mb-2 hover:bg-gray-100 transition-colors rounded p-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {instructor}
            </label>
            <span className="text-gray-500">15</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-4 border-b pb-2">Price</h2>
      <div className="mb-6">
        {['All', 'Free', 'Paid'].map((price, index) => (
          <div key={index} className="flex items-center justify-between mb-2 hover:bg-gray-100 transition-colors rounded p-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {price}
            </label>
            <span className="text-gray-500">15</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-4 border-b pb-2">Review</h2>
      <div className="mb-6">
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center justify-between mb-2 hover:bg-gray-100 transition-colors rounded p-1">
            <div className="flex items-center">
              {[...Array(stars)].map((_, i) => (
                <span key={i} className="text-yellow-500">&#9733;</span>
              ))}
              {[...Array(5 - stars)].map((_, i) => (
                <span key={i} className="text-gray-300">&#9733;</span>
              ))}
            </div>
            <span className="text-gray-500">(1,025)</span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-4 border-b pb-2">Level</h2>
      <div className="mb-6">
        {['All levels', 'Beginner', 'Intermediate', 'Expert'].map((level, index) => (
          <div key={index} className="flex items-center justify-between mb-2 hover:bg-gray-100 transition-colors rounded p-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {level}
            </label>
            <span className="text-gray-500">15</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
