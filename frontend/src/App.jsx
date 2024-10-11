import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import Navbar from "./components/Navbar";
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './components/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='category/:categoryName' element={<CategoryPage />} />
        </Routes>
    </Router>
  );
}

export default App;
