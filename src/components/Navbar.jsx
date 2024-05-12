import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-950">
        {/* Use the container class to center the content and set max-width */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flexbox for layout */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="text-lg text-white font-bold cursor-pointer">KenBuy254</div>
            {/* Add space between divs */}
            <div className="hidden sm:block sm:w-1/4"></div>
            {/* Search input */}
            <div className="w-3/4 md:w-1/2 lg:w-1/3">
              <input
                type="text"
                className="w-full md:w-auto py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
            </div>
            {/* Add space between divs */}
            <div className="hidden sm:block sm:w-1/4"></div>
            {/* Sign In and Sign Up buttons */}
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white text-nowrap rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white text-nowrap rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
