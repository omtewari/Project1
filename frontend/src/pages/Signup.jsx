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
    <div className=' gap-14 flex shadow-lg shadow-gray-400 justify-center align-center'>
      <div className='   '>
      <img className='w-auto h-auto ' src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp" alt="" />
      </div>
    <div className=" max-w-lg w-full ">
      <h2 className="text-xl font-semibold m-2 mb-4 font-serif underline">Sign Up</h2>

      {error && <p className="text-red-500">{error}</p>} {/* Show error if any */}
      {success && <p className="text-green-500">{success}</p>} {/* Show success if any */}

      <form onSubmit={handleSubmit} className="space-y-4 h-auto">
        <div>
          <label className="block m-2 text-lg font-serif ">Name: </label>
          <input
            className="w-full p-4 border rounded shadow-md shadow-gray-400"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block m-2 text-lg font-serif">Email: </label>
          <input
            className="w-full p-4 border rounded shadow-md shadow-gray-400"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block m-2 text-lg font-serif">Password: </label>
          <input
            className="w-full p-4 border rounded shadow-md shadow-gray-400"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block m-2 text-lg font-serif">Role: </label>
          <select
            className="w-full p-4 border rounded shadow-md shadow-gray-400"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button className="w-full my-10 bg-blue-400 text-white font-serif p-5 rounded hover:bg-blue-600 shadow-md shadow-gray-400" type="submit">
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
