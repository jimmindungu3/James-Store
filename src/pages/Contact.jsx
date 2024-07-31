import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

const ContactPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-6">
          Feel free to reach out to me through any of the following channels:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <IoMdGlobe className="text-teal-600 text-2xl" />
            <a
              href="https://jimmindungu3.github.io/portfolio/"
              className="text-blue-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <a
              href="https://www.linkedin.com/in/jamesndunguthedev/"
              className="text-blue-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaYoutube className="text-red-600 text-2xl" />
            <a
              href="https://youtube.com/@DevsToday"
              className="text-blue-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Channel
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaTwitter className="text-blue-400 text-2xl" />
            <a
              href="https://twitter.com/jimmindungu3"
              className="text-blue-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-600 text-2xl" />
            <a
              href="mailto:jimmindungu3@gmail.com"
              className="text-blue-600 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: jimmindungu3@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-600 text-2xl" />
            <p className="text-blue-600 hover:text-blue-500">
              WhatsApp/Call: +254 717 055 495
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
