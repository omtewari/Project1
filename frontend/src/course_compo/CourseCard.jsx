import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Course Image and Category */}
      <div className="relative w-full md:w-1/3">
        <img src={course.thumbnail} alt={course.title} className="rounded-lg object-cover h-full w-full" />
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {course.category}
        </span>
      </div>
      
      {/* Course Details */}
      <div className="flex flex-col justify-between w-full md:w-2/3 p-4">
        <div>
          <p className="text-gray-600 text-xs mb-1">by {course.instructor}</p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
          
          {/* Info (Duration, Students, Level, Lessons) */}
          <div className="flex items-center text-xs text-gray-500 space-x-3 mb-2">
            <span className="flex items-center">
              <span className="mr-1">📅</span>
              {course.duration}
            </span>
            <span className="flex items-center">
              <span className="mr-1">👥</span>
              {course.students} Students
            </span>
            <span className="flex items-center">
              <span className="mr-1">📈</span>
              {course.level}
            </span>
            <span className="flex items-center">
              <span className="mr-1">📚</span>
              {course.lessons} Lessons
            </span>
          </div>
        </div>
        
        {/* Price and View More */}
        <div className="flex justify-between items-center mt-4">
          <span className={`text-lg font-semibold ${course.price === 'Free' ? 'text-green-500' : 'text-gray-800'}`}>
            {course.price === 'Free' ? 'Free' : `$${course.price}`}
          </span>
          <button className="text-blue-500 font-semibold hover:underline">View More</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
