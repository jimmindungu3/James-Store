import React from "react";
import ReactDOM from "react-dom/client";
import CartPage from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <CartPage /> },
  { errorElement: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
