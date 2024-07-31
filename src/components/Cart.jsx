import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import CartContext from "../context/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Calculate subtotals and final sum
  const calculateSubtotals = (cart) => {
    return cart.map(product => ({
      ...product,
      subtotal: product.price * (product.num || 1)
    }));
  };

  const subtotals = calculateSubtotals(cart);
  const finalSum = subtotals.reduce((total, product) => total + product.subtotal, 0);

  return (
    <div className="my-8 max-w-4xl mx-auto p-4">
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty!</p>
          <Link to="/" className="flex items-center text-blue-500 mb-4">
            <FaRegArrowAltCircleLeft className="mr-2" />
            <span className="my-4">Back to Shopping</span>
          </Link>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {subtotals.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {product.num}</p>
                    <p className="text-gray-600 font-semibold">
                      Subtotal: ${product.subtotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total</h2>
            <p className="text-gray-600 font-semibold">
              Final Sum: ${finalSum.toFixed(2)}
            </p>
          </div>
          <Link to="/" className="flex items-center text-blue-500 mt-6">
            <FaRegArrowAltCircleLeft className="mr-2" />
            <span className="my-4">Back to Shopping</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
