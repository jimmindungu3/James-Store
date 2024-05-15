import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5"

import React, { useState } from "react";
import Loader from "./Loader";

const truncateWords = (str, numWords) => {
  const words = str.split(" ");
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "...";
  } else {
    return str;
  }
};

const Products = ({ products, APISetter, loading }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto">
      <div className="flex mb-8 mt-4">
        <div className="w-1/6 p-4">
          <div className="mb-4 text-xl font-bold">Categories</div>
          <ul className="text-sm">
            <li
              onClick={() => APISetter("/category/men's clothing")}
              className="py-1 px-2 cursor-pointer font-bold text-md text-nowrap hover:bg-blue-950 hover:text-white active:bg-blue-900 active:text-white rounded-md"
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

        <div className="w-5/6 p-4">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Loader />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12">
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
                        className="text-blue-600 text-nowrap cursor-pointer"
                        onClick={() => openModal(product)}
                      >
                        More details
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center w-full">
                    <div className="font-bold text-blue-600">
                      Ksh {product.price}
                    </div>
                    <div className="inline-flex rounded-md shadow-sm">
                      <button
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

      {/* Modal starts here */}
      {selectedProduct && (
  <div className="fixed inset-0 z-2 flex justify-center items-center bg-gray-800 bg-opacity-50">
    <div className="p-4 bg-white rounded-lg flex flex-col justify-between items-center max-w-[450px]">
      <div className="flex justify-between w-full">
        <div className="font-bold">{selectedProduct.title}</div>
        <IoCloseCircleOutline onClick={() => closeModal()} className="cursor-pointer text-red-900 text-4xl font-bold" />
      </div>
      <div className="mb-4 h-60 w-full flex justify-center items-center">
        <img
          className="h-full mt-6"
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />
      </div>
      <div className="mt-4">{selectedProduct.description}</div>
      <div className="mt-4 flex justify-between items-center w-full">
        <div className="font-bold text-blue-600">
          $ {selectedProduct.price}
        </div>
        <div className="inline-flex rounded-md shadow-sm">
          <button
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
  </div>
)}

    </div>
  );
};

export default Products;
