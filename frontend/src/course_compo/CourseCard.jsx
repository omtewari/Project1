import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Course Image */}
      <div className="relative w-full md:w-1/3 overflow-hidden rounded-lg">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="object-cover w-full h-52" // Slightly increased height for better fit
        />
        <span 
          className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded"
          style={{ maxWidth: '80%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
        >
          {course.category}
        </span>
      </div>

      {/* Course Details */}
      <div className="flex flex-col justify-between w-full md:w-2/3 p-4">
        <div>
          <p className="text-gray-600 text-xs mb-1">by {course.instructor}</p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>

          {/* Info (Duration, Students, Level, Lessons) */}
          <div className="flex flex-wrap text-xs text-gray-500 space-x-3 mb-2">
            <span className="flex items-center">
              <span className="mr-1">📅</span>
              {course.duration} weeks
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
