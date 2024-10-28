import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
    // Wait for a moment before scrolling to the top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }, 100); // Adjust the delay as needed
  };

  return (
    <nav className="flex items-center justify-center space-x-4 mt-4" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Current Page and Total Pages */}
      <span className="text-lg font-semibold">
        {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
