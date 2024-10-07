import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend
      const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
      console.log('Signup success:', response.data);
      
      setSuccess('Signup successful!');  // Display success message
      setError(''); // Clear any error message
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError('Signup failed. Please try again.'); // Display error message
      setSuccess(''); // Clear any success message
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

      {error && <p className="text-red-500">{error}</p>} {/* Show error if any */}
      {success && <p className="text-green-500">{success}</p>} {/* Show success if any */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name: </label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Email: </label>
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Password: </label>
          <input
            className="w-full p-2 border rounded"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Role: </label>
          <select
            className="w-full p-2 border rounded"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
