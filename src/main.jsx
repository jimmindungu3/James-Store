// import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Cart from "./components/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/shop", element: <Home /> },
  { path: "/cart", element: <Cart /> },
  { errorElement: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
