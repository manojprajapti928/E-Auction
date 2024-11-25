import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="bg-gray-100 shadow-md p-1">
      <div className="flex items-center justify-between mx-5 my-2">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">Auction</h1>

        {/* Search Box */}
        <div className="flex items-center space-x-2">
          <label htmlFor="search" className="text-gray-600 font-medium">Search:</label>
          <input
            id="search"
            type="text"
            placeholder="Enter a search"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>
            <ul>
              <li>
                Brower
                <select name="" id="">
                  <option value="">asdf</option>
                  <option value="">sdfgh</option>
                  <option value="">asdfgh</option>
                  <option value="">assdfgh</option>
                </select>
               
              </li>
            </ul>
            <li> 
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-blue-500">Service</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Sell Button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-[7vw]"
          aria-label="Sell"
          onClick={()=>navigate("/LoginForm")}
        >
          Sell
        </button>
      </div>
    </div>
  );
}
