import React, { useState, useEffect } from "react";
import img from "../Image/car.webp";
import { useNavigate } from "react-router";
import Details from './Details'
import Navbar from "../Components/Navbar";

export default function Home() {
  const Navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer
  }, []);

  // Format the time into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <>
    <Navbar/>
      <div className="m-1 flex flex-row flex-wrap justify-center items-center">
        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button
              onClick={() => Navigate("/Details")}
              className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700"
            >
              Click here
            </button>
          </div>
        </div>

        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>

        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>

        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>

        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>
        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>

        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>

        <div className="w-[45vh] h-[57vh] bg-slate-300 border-2 border-black rounded-md p-3 shadow-lg shadow-black m-3">
          <div>
            <img src={img} alt="Car" className="rounded-md mb-2" />
          </div>
          <div>
            <p className="text-lg font-bold">Name: Car</p>
            <p className="text-md">Number of Bids: 3</p>
            <p className="text-lg font-bold">Price: $1000</p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            <button className="bg-blue-900 text-white h-[7vh] w-[13vw] cursor-pointer m-5 rounded-md ml-7 hover:bg-blue-700 hover:text-black active:bg-green-700">
              Click here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
