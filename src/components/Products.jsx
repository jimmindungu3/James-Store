import React from "react";
import Loader from "./Loader";

const Products = ({ products, APISetter, loading }) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/6 p-4">
          <div className="mb-4 font-bold">Categories</div>
          <ul className="text-sm">
            <li
              onClick={() => APISetter("/category/men's clothing")}
              className="cursor-pointer font-bold text-nowrap"
            >
              Men's Clothes
            </li>
            <li
              onClick={() => APISetter("/category/women's clothing")}
              className="cursor-pointer font-bold text-nowrap"
            >
              Women's Clothes
            </li>
            <li
              onClick={() => APISetter("/category/jewelery")}
              className="cursor-pointer font-bold text-nowrap"
            >
              Jewellery
            </li>
            <li
              onClick={() => APISetter("/category/electronics")}
              className="cursor-pointer font-bold text-nowrap"
            >
              Electronics
            </li>
            <li
              onClick={() => APISetter("")}
              className="cursor-pointer font-bold text-nowrap"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <div className="font-bold">{product.title}</div>
                  <img
                    className="w-full mt-2"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="mt-2">{product.description}</div>
                  <div className="font-bold mt-2">${product.price}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
