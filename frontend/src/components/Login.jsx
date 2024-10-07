import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to your backend login route
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      console.log('Login success:', response.data);
      
      setSuccess('Login successful!'); // Show success message
      setError(''); // Clear any error message

      // Redirect or take further action on successful login (e.g., saving tokens)
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError('Login failed. Please try again.'); // Show error message
      setSuccess(''); // Clear any success message
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      {error && <p className="text-red-500">{error}</p>} {/* Show error if any */}
      {success && <p className="text-green-500">{success}</p>} {/* Show success if any */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email: </label>
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Password: </label>
          <input
            className="w-full p-2 border rounded"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Role: </label>
          <select
            className="w-full p-2 border rounded"
            name="role"
            value={loginData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
