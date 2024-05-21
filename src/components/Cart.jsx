// import React from "react";

// const Cart = ({ items }) => {
//   return (
//     <div>
//       {items.length > 0 ? (
//         items.map((item) => (
//           <CartItem
//             key={item.id}
//             title={item.title}
//             id={item.id}
//             image={item.image}
//             description={item.description}
//             price={item.price}
//           />
//         ))
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// const CartItem = ({ title, id, image, description, price }) => {
//   return (
//     <div className="flex items-center border-b border-gray-200 py-4">
//       <img
//         src={image}
//         alt={title}
//         className="w-16 h-16 object-cover rounded-md mr-4"
//       />
//       <div className="flex flex-col flex-grow">
//         <h3 className="text-lg font-semibold">{title}</h3>

//         <p className="text-sm text-gray-600">{description}</p>

//         <p className="text-xs text-gray-400 mt-1">ID: {id}</p>
//       </div>
//       <div className="ml-auto">
//         <p className="text-lg font-semibold">${price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div>Cart</div>
      <Footer />
    </>
  );
};

export default Cart;
