import React, { useState, useEffect } from "react";
import img1 from "../Image/car.webp";
import img2 from "../Image/car1.webp";
import img3 from "../Image/car2.jpg";

export default function Description() {
  const [selectedImage, setSelectedImage] = useState(img1);
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
    <div className="bg-gray-100 text-black py-8 px-4">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">Product Details</h1>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section */}
          <div className="flex flex-col items-center lg:w-1/2">
            {/* Main Image */}
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Car"
                className="h-[40vh] w-auto rounded-md border border-gray-300"
              />
            </div>
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {[img1, img2, img3].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Car View ${index + 1}`}
                  className={`h-20 w-20 rounded-md cursor-pointer border ${
                    selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Name: Luxury Sports Car</h2>
            <p className="text-lg text-green-600 font-bold">Price: $10,000</p>
            <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-green-500 w-[13vw] mt-3">
              Quick a Bit $17899
            </button>
            <p className="text-gray-600 mt-3">
              This luxury sports car combines speed, design, and comfort,
              offering an unparalleled driving experience. Perfect for car
              enthusiasts and professionals.
            </p>
            <p className="text-red-700 font-bold mt-2">
              Time Left: {formatTime(timeLeft)}
            </p>
            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 w-[13vw]">
                Buy now
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 w-[13vw]">
                Add to cart
              </button>
            </div>

            {/* Bidding Section */}
            <div className="mt-6 ">
              <h4 className="text-lg font-bold mb-2">Place Your Bid</h4>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your maximum bid"
                  className="border-2 border-gray-300 rounded-l-md p-3 mb-5 w-[30vw] rounded-md"
                />
                <button className="px-6 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-400 h-[7vh] w-[30vw] rounded-md">
                  Place a bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Specifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Engine Type: V8 Turbocharged</li>
            <li>Horsepower: 700 HP</li>
            <li>Transmission: Automatic</li>
            <li>Seating Capacity: 2</li>
            <li>Fuel Efficiency: 18 MPG City / 25 MPG Highway</li>
            <li>Warranty: 5 Years / 60,000 Miles</li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-gray-800 font-semibold">John Doe</p>
              <p>
                "An amazing car with outstanding performance. Worth every
                penny!"
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-gray-800 font-semibold">Jane Smith</p>
              <p>"The design and speed are remarkable. Highly recommend!"</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <img
                src={img2}
                alt="Related Car 1"
                className="h-32 w-auto mx-auto mb-4"
              />
              <p className="text-gray-800 font-bold">Convertible Car</p>
              <p className="text-green-600">$8,000</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
                View Details
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <img
                src={img3}
                alt="Related Car 2"
                className="h-32 w-auto mx-auto mb-4"
              />
              <p className="text-gray-800 font-bold">Luxury Sedan</p>
              <p className="text-green-600">$12,000</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
