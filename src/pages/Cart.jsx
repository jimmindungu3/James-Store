import React from "react";
import Navbar from "../components/Navbar";
import Cart from '../components/Cart'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
};

export default Page;
