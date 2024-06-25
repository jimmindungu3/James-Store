import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-3 sticky top-0 shadow-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 items-center">
        <div className="flex justify-start lg:justify-start">
          <NavLink to="/" className="font-bold text-2xl px-2">
            James Store
          </NavLink>
        </div>
        <div className="flex justify-center">
          <ul className="navbar-nav flex flex-col lg:flex-row lg:space-x-4 text-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link block lg:inline-block px-2 py-1"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link block lg:inline-block px-2 py-1"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link block lg:inline-block px-2 py-1"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <div className="buttons flex flex-col lg:flex-row lg:items-center lg:space-x-2">
            <NavLink
              to="/"
              className="btn m-2 border border-gray-700 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink
              to="/"
              className="btn m-2 border border-gray-700 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink
              to="/cart"
              className="btn m-2 border border-gray-700 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              <i className="fa fa-cart-shopping mr-1"></i> Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
