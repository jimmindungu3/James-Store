import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartContext from "./src/context/cartContext.js";
import Home from "./src/pages/Home.jsx";
import CartPage from "./src/pages/CartPage.jsx";
import NotFound from "./src/pages/NotFound.jsx";
import "./src/index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProductIndex = prevCart.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex >= 0) {
        // Product exists in the cart, increment its num value
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          num: updatedCart[existingProductIndex].num + 1,
        };
        return updatedCart;
      } else {
        // Product does not exist in the cart, add it with num key set to 1
        return [...prevCart, { ...product, num: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

// Define your routes here
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <CartPage /> },
  { path: "*", element: <NotFound /> },
]);

export default App;
