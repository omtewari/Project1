import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get the category name from the URL

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to {categoryName} Courses</h1>
      <p className="mt-4">Here you will find all the courses related to {categoryName}.</p>
      {/* Add more content about the category */}
    </div>
  );
};

export default CategoryPage;
