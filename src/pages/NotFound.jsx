import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-500 transition duration-300"
        >
          Back To Shop
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
