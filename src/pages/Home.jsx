//Home.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Products />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
