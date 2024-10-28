import React, { useState } from 'react';
import CourseList from '../course_compo/CourseList';
import FilterSidebar from '../course_compo/FilterSidebar';

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen p-5">
      <FilterSidebar />
      <CourseList />
    </div>
  );
}

export default App;
