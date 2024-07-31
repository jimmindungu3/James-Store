import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const CheckoutPage = () => {
  const { cart, emptyCart } = useContext(CartContext);

  // Calculate total items and final sum
  const totalItems = cart.reduce(
    (total, product) => total + (product.num || 1),
    0
  );
  const finalSum = cart.reduce(
    (total, product) => total + product.price * (product.num || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout process here
    emptyCart(); // Empty cart after successful order placement
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto min-h-screen -mt-8">
        <div className="my-8 max-w-6xl mx-auto p-4">
          <Link
            to="/cart"
            className="flex items-center font-bold text-blue-600 my-10 hover:text-blue-500"
          >
            <button className="bg-teal-600 text-white px-6 py-2 rounded font-bold text-lg hover:bg-teal-500 transition duration-300">
              <FaRegArrowAltCircleLeft className="mr-2 inline-block" />
              Keep Shopping
            </button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between border-b py-2">
                <div className="font-semibold">Number of Items</div>
                <div>{totalItems}</div>
              </div>
              <div className="flex justify-between font-semibold mt-4">
                <div>Total Price</div>
                <div>${finalSum.toFixed(2)}</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Card Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      className="w-full p-2 border rounded"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        name="expirationDate"
                        className="w-full p-2 border rounded"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        className="w-full p-2 border rounded"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-6 py-2 rounded font-bold text-lg hover:bg-teal-500 transition duration-300"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
