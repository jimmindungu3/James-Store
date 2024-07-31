// Products.jsx

import React, { useState, useEffect, useContext } from "react";
import Loader from "./Loader";
import Modal from "./Modal";
import axios from "axios";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import CartContext from "../context/cartContext";

const truncateWords = (str, numWords) => {
  const words = str.split(" ");
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "...";
  } else {
    return str;
  }
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [API_URL, setAPI_URL] = useState("https://fakestoreapi.com/products");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const APISetter = (endpoint) => {
    setAPI_URL(`https://fakestoreapi.com/products${endpoint}`);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [API_URL]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex pb-8 pt-6">
        <div className="hidden lg:block lg:w-1/6 p-4">
          <div className="mb-4 text-2xl font-bold">Categories</div>
          <ul>
            <li
              onClick={() => APISetter("/category/men's clothing")}
              className="py-1 px-2 cursor-pointer font-bold text-nowrap hover:bg-blue-950 hover:text-white active:bg-blue-900 active:text-white rounded-md"
            >
              Men's Clothes
            </li>
            <li
              onClick={() => APISetter("/category/women's clothing")}
              className="py-1 px-2 cursor-pointer font-bold text-md text-nowrap hover:bg-blue-950 hover:text-white active:bg-blue-900 active:text-white rounded-md"
            >
              Women's Clothes
            </li>
            <li
              onClick={() => APISetter("/category/jewelery")}
              className="py-1 px-2 cursor-pointer font-bold text-md text-nowrap hover:bg-blue-950 hover:text-white active:bg-blue-900 active:text-white rounded-md"
            >
              Jewellery
            </li>
            <li
              onClick={() => APISetter("/category/electronics")}
              className="py-1 px-2 cursor-pointer font-bold text-md text-nowrap hover:bg-blue-950 hover:text-white active:bg-blue-900 active:text-white rounded-md"
            >
              Electronics
            </li>
            <li
              onClick={() => APISetter("")}
              className="py-1 px-2 cursor-pointer font-bold text-md text-nowrap hover:bg-blue-950 hover:text-white active:bg-blue-900 active:text-white rounded-md"
            >
              All Products
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-5/6 p-4">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Loader />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between items-center"
                >
                  <div>
                    <div className="mb-4 font-bold">
                      {truncateWords(product.title, 3)}
                    </div>
                    <div className="mb-4 h-60 w-full flex justify-center items-center">
                      <img
                        className="h-full cursor-pointer"
                        src={product.image}
                        alt={product.title}
                        onClick={() => openModal(product)}
                      />
                    </div>
                    <div className="mt-4">
                      {truncateWords(product.description, 20)}{" "}
                      <span
                        className="text-blue-600 text-nowrap font-semibold hover:cursor-pointer hover:text-blue-500 "
                        onClick={() => openModal(product)}
                      >
                        More details
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center w-full">
                    <div className="font-bold text-blue-600">
                      $ {product.price}
                    </div>
                    <div className="inline-flex rounded-md shadow-sm">
                      <button
                        onClick={() => {
                          addToCart(product);
                          // console.log(product);
                        }}
                        type="button"
                        className="px-4 py-2 text-lg font-bold bg-gray-300 hover:bg-gray-400 active:bg-gray-300 rounded-l-md"
                      >
                        +
                      </button>
                      <button
                        disabled
                        type="button"
                        className="px-4 py-2 text-lg font-bold bg-gray-300"
                      >
                        <PiShoppingCartSimpleBold />
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-lg font-bold bg-gray-300 hover:bg-gray-400 active:bg-gray-300 rounded-r-md"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal selectedProduct={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Products;
