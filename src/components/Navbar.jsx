import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import CartContext from "../context/cartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce(
    (total, product) => total + (product.num || 1),
    0
  );

  return (
    <nav className="bg-gray-100 py-3 sticky top-0 shadow-lg z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-2xl">
          James Store
        </NavLink>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link px-2 py-1"
                onClick={toggleMenu}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link px-2 py-1"
                onClick={toggleMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link px-2 py-1"
                onClick={toggleMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu and Auth/Cart Buttons */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to="/"
              className="btn border border-gray-700 rounded-md px-4 py-2 text-gray-700 hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300"
              onClick={toggleMenu}
            >
              Login
            </NavLink>
            <NavLink
              to="/"
              className="btn border text-gray-700 border-gray-700 rounded-md px-4 py-2 hover:bg-gray-600 hover:border-gray-600 hover:text-white transition duration-300"
              onClick={toggleMenu}
            >
              Register
            </NavLink>
            <NavLink
              to="/cart"
              className="btn relative text-2xl border border-gray-700 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
              onClick={toggleMenu}
            >
              <BsCart2 />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalQuantity}
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <ul className="flex flex-col items-center bg-gray-100 space-y-2 py-2">
          <li>
            <NavLink to="/" className="block px-4 py-2" onClick={toggleMenu}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block px-4 py-2"
              onClick={toggleMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block px-4 py-2"
              onClick={toggleMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="block px-4 py-2" onClick={toggleMenu}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="block px-4 py-2" onClick={toggleMenu}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="block px-4 py-2"
              onClick={toggleMenu}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
