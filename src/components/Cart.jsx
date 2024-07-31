import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import {} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CartContext from "../context/cartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, decrementProduct, emptyCart } =
    useContext(CartContext);

  // Calculate subtotals and final sum
  const calculateSubtotals = (cart) => {
    return cart.map((product) => ({
      ...product,
      subtotal: product.price * (product.num || 1),
    }));
  };

  const subtotals = calculateSubtotals(cart);
  const finalSum = subtotals.reduce(
    (total, product) => total + product.subtotal,
    0
  );

  return (
    <div className="bg-gray-200">
      <div className="my-8 max-w-4xl mx-auto p-4 min-h-screen ">
        {cart.length === 0 ? (
          <div>
            <p className="text-lg font-semibold">Your cart is empty!</p>
            <Link
              to="/"
              className="flex items-center font-bold text-blue-600 my-10 hover:text-blue-500"
            >
              <button className="bg-teal-600 text-white px-6 py-2 rounded font-bold text-lg hover:bg-teal-500 transition duration-300">
                <FaRegArrowAltCircleLeft className="mr-2 inline-block" />
                Back To Shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="-mt-10">
            <Link
              to="/"
              className="flex items-center font-bold text-blue-600 my-10 hover:text-blue-500"
            >
              <button className="bg-teal-600 text-white px-6 py-2 rounded font-bold text-lg hover:bg-teal-500 transition duration-300">
                <FaRegArrowAltCircleLeft className="mr-2 inline-block" />
                Keep Shopping
              </button>
            </Link>
            <div className="space-y-4">
              {subtotals.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>

                    <div className="ml-8">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-gray-600">
                        Unit Price: $ {product.price}
                      </p>
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementProduct(product.id)}
                          className="bg-gray-400 px-3 text-white text-lg font-semibold rounded hover:bg-gray-500"
                        >
                          -
                        </button>
                        <p className="text-gray-600 mx-4">{product.num}</p>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-gray-400 px-3 text-white text-lg font-semibold rounded hover:bg-gray-500"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-gray-600 font-semibold mt-2">
                        Subtotal: $ {product.subtotal.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-600 text-3xl hover:text-red-500 transform hover:scale-110 transition duration-300"
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">TOTAL</h2>
                <p className="text-gray-600 font-semibold">
                  $ {finalSum.toFixed(2)}
                </p>
              </div>
              <button
                onClick={emptyCart}
                className="bg-red-500 text-white px-6 py-2 rounded font-bold text-lg hover:bg-red-400 transition duration-300"
              >
                Empty Cart
              </button>
              <Link to={"/checkout"}>
                <button className="bg-teal-600 text-white px-6 py-2 rounded font-bold text-lg hover:bg-teal-500 transition duration-300">
                  Proceed To Checkout
                  <FaRegArrowAltCircleRight className="ml-2 inline-block" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
