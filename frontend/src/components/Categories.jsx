import React from 'react';

const categories = [
  { name: 'Art & Design', courses: 38 },
  { name: 'Development', courses: 38 },
  { name: 'Communication', courses: 38 },
  { name: 'Videography', courses: 38 },
  { name: 'Photography', courses: 38 },
  { name: 'Marketing', courses: 38 },
  { name: 'Content Writing', courses: 38 },
  { name: 'Finance', courses: 38 },
  { name: 'Science', courses: 38 },
  { name: 'Network', courses: 38 },
];

const Categories = () => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p>{category.courses} Courses</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
