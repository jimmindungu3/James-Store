import React from "react";

const Products = ({ products, APISetter }) => {
  return (
    <div className=" bg-gray-200">
      <div className="container mx-auto flex">
        <div className="w-1/6 p-4">
          <div className="mb-4 font-bold">Categories</div>
          <ul>
            <li
              onClick={() => APISetter("/category/men's clothing")}
              className="cursor-pointer text-nowrap"
            >
              Mens Clothes
            </li>
            <li
              onClick={() => APISetter("/category/women's clothing")}
              className="cursor-pointer text-nowrap"
            >
              Women's clothes
            </li>
            <li
              onClick={() => APISetter("/category/jewelery")}
              className="cursor-pointer"
            >
              Jewellery
            </li>
            <li
              onClick={() => APISetter("/category/electronics")}
              className="cursor-pointer"
            >
              Electronics
            </li>
            <li onClick={() => APISetter("")} className="cursor-pointer text-nowrap">
              All Products
            </li>
          </ul>
        </div>
        <div className="w-5/6 p-4">
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
        </div>
      </div>
    </div>
  );
};

export default Products;
