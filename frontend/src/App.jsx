import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Home from './components/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Student/Teacher Portal</h1>
        <nav className="mb-4">
          <Link className="mr-4 text-blue-500 hover:underline" to="/signup">Sign Up</Link>
          <Link className="text-blue-500 hover:underline" to="/login">Login</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
