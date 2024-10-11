// src/pages/Home.js
import React from 'react';
import Header from './Header';
import Categories from './Categories';
import StudentFeedbacks from './StudentFeedbacks';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <StudentFeedbacks />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
