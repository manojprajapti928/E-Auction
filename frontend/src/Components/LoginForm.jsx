import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
        
        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter a username"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mb-4"
        >
          Login
        </button>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={() => navigate('/Registration')} // Navigate to the registration page
          className="w-full bg-gray-200 text-blue-500 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Create an Account
        </button>
      </form>
    </div>
  );
  
}




