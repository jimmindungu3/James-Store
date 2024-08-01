import React, { useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import CartContext from "../context/cartContext";

const Modal = ({ selectedProduct, closeModal }) => {
  const { addToCart, decrementProduct } = useContext(CartContext);
  return (
    <div>
      <div className="fixed inset-0 z-2 flex justify-center items-center bg-gray-800 bg-opacity-50">
        <div className="p-4 bg-white rounded-lg flex flex-col justify-between items-center max-w-[450px] relative">
          <div className="flex justify-between w-full">
            <div className="font-bold">{selectedProduct.title}</div>
            <button></button>
          </div>
          <IoCloseCircleOutline
            onClick={() => closeModal()}
            className="text-red-900 text-4xl font-bold absolute top-2 right-2 cursor-pointer"
          />
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
                onClick={() => addToCart(selectedProduct)}
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
                onClick={() => decrementProduct(selectedProduct.id)}
                type="button"
                className="px-4 py-2 text-lg font-bold bg-gray-300 hover:bg-gray-400 active:bg-gray-300 rounded-r-md"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
