import React, { useState } from 'react';
import CourseCard from './CourseCard';
import Pagination from './Pagination';

// Sample course data
const mockCourses = [
  {
    title: 'Create An LMS Website With LearnPress',
    instructor: 'DevAcademy',
    duration: '2',
    students:120,
    level: 'Beginner',
    lessons: 30,
    price: '200',
    rating: 4.5,
    category: 'Web Development',
    thumbnail: 'https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2022/11/create-an-lms-website-with-learnpress-4-760x424.png',
  },
  {
    title: 'Advanced Photoshop Techniques',
    instructor: 'PhotoMastery',
    duration: '1',
    students:120,
    level: 'Beginner',
    lessons: 15,
    price: 'Free',
    rating: 4.8,
    category: 'Design',
    thumbnail: 'https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2022/11/create-an-lms-website-with-learnpress-4-760x424.png',
  },
  {
    title: 'React.js for Beginners',
    instructor: 'CodeAcademy',
    duration: '3',
    students:120,
    level: 'Intermediate',
    lessons: 25,
    price: '150',
    rating: 4.7,
    category: 'Web Development',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Mastering Data Science',
    instructor: 'DataGenius',
    duration: '4',
    students:120,
    level: 'Intermediate',
    lessons: 40,
    price: '300',
    rating: 4.9,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'UI/UX Design Essentials',
    instructor: 'DesignHub',
    duration: '2',
    students:120,
    level: 'Expert',
    lessons: 20,
    price: 'Free',
    rating: 4.6,
    category: 'Design',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'JavaScript Essentials',
    instructor: 'CodeAcademy',
    duration: '2',
    students:120,
    level: 'Expert',
    lessons: 18,
    price: '100',
    rating: 4.3,
    category: 'Web Development',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Digital Marketing Masterclass',
    instructor: 'MarketingPros',
    duration: '3',
    students:120,
    level: 'Expert',
    lessons: 22,
    price: '250',
    rating: 4.4,
    category: 'Marketing',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Machine Learning with Python',
    instructor: 'AI Academy',
    duration: '5',
    students:120,
    level: 'Expert',
    lessons: 45,
    price: '400',
    rating: 4.8,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Machine Learning with Python',
    instructor: 'AI Academy',
    duration: '5',
    students:120,
    level: 'Expert',
    lessons: 45,
    price: '400',
    rating: 4.8,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Machine Learning with Python',
    instructor: 'AI Academy',
    duration: '5',
    students:120,
    level: 'Expert',
    lessons: 45,
    price: '400',
    rating: 4.8,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Machine Learning with Python',
    instructor: 'AI Academy',
    duration: '5',
    students:120,
    level: 'Expert',
    lessons: 45,
    price: '400',
    rating: 4.8,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Machine Learning with Python',
    instructor: 'AI Academy',
    duration: '5',
    students:120,
    level: 'Expert',
    lessons: 45,
    price: '400',
    rating: 4.8,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
  {
    title: 'Machine Learning with Python',
    instructor: 'AI Academy',
    duration: '5',
    students:120,
    level: 'Expert',
    lessons: 45,
    price: '400',
    rating: 4.8,
    category: 'Data Science',
    thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQmgrQD6yoolICzIxJKZnXB7XQXmgZBjV-VSRRfS3u5FHdh7Ei',
  },
    // Add more courses if needed
];

const COURSES_PER_PAGE = 12;

function CourseList() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const currentCourses = mockCourses.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(mockCourses.length / COURSES_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-3/4 ml-5">
      <h1 className="text-2xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default CourseList;