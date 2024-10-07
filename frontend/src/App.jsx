import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
