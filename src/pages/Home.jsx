import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [API_URL, setAPI_URL] = useState("https://fakestoreapi.com/products");

  const APISetter = (endpoint) => {
    setAPI_URL(`https://fakestoreapi.com/products${endpoint}`);
  };

  useEffect(() => {
    setLoading(true)
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data);
        setLoading(false)
      })
      .catch((error) => console.error(error));
  }, [API_URL]);

  return (
    <>
      <Navbar />
      <Products products={products} APISetter={APISetter} loading={loading}/>
      <Footer />
    </>
  );
};

export default Home;
