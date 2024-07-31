import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartContext from "./src/context/cartContext.js";
import Home from "./src/pages/Home.jsx";
import CartPage from "./src/pages/Cart.jsx";
import CheckoutPage from "./src/pages/Checkout.jsx";
import NotFound from "./src/pages/NotFound.jsx";
import AboutPage from "./src/pages/About.jsx";
import ContactPage from "./src/pages/Contact.jsx";
import "./src/index.css";

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          num: updatedCart[existingProductIndex].num + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, num: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Function to decrement the quantity of a product in the cart
  const decrementProduct = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((product) => {
          if (product.id === id && product.num > 1) {
            return { ...product, num: product.num - 1 };
          }
          return product;
        })
        .filter((product) => product.num > 0); // Remove product if quantity is zero
    });
  };

  // Function to empty the cart
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decrementProduct, emptyCart }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

// Define your routes here
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: '/contact', element: <ContactPage />},
  { path: "*", element: <NotFound /> },
]);

export default App;
