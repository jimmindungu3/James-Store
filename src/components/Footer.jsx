import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-end ">
            <a href="#" className="text-gray-700 px-4 py-2 hover:text-gray-400">
              Men's Clothes
            </a>
            <a href="#" className="text-gray-700 pl-4 py-2 hover:text-gray-400">
              women's Clothes
            </a>
            <a href="#" className="text-gray-700 px-4 py-2 hover:text-gray-400">
              Jewellery
            </a>
            <a href="#" className="text-gray-700 pl-4 py-2 hover:text-gray-400">
              Electronics
            </a>
           
          </nav>

          <hr className="border-gray-600 my-4" />

          <div className="text-gray-700 flex justify-between">
            <a href="#" className="mr-4 hover:text-gray-400">
              Terms and Conditions
            </a>
            <div className="text-gray-700">
              &copy; {new Date().getFullYear()} KenBuy254. All Rights Reserved.
            </div>
            <div className="text-gray-700 flex items-center">
              <a href="#" className="mr-4 hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="mr-4 hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="mr-4 hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="mr-4 hover:text-gray-400">
                <FaTiktok />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
