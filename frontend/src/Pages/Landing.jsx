import React from "react";
import { useNavigate } from "react-router-dom";

import Background from "../Images/Background.png"
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('')", // Replace with your image URL
        }}
      > <image src={Background} alt="this is a image"/></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-50">
        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 animate-bounce">
            Welcome to Auction Website
          </h1>
          <h2 className="text-lg font-medium leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam
            dolores nisi sunt adipisci voluptatum molestiae sed voluptate! Fugiat, in!
          </h2>
        </div>

        {/* Button */}
        <button
          className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          onClick={() => navigate("/Homepage")} 
        >
          Explore Auctions
        </button>
      </div>
    </div>
  );
}
