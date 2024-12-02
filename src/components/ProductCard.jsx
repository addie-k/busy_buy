import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { setCart, setToastMessage,isLoggedIn } = useOutletContext();
  const cartHandler = (name)=>{
    setCart((prevState)=>[...prevState,product])
    setToastMessage(name+"  added to cart")
  }
  
  return (
    <div className="m-2 rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 transition-transform hover:scale-105">
      {/* Product Image */}
      <img
        className="w-full h-[40vh] sm:h-[30vh] md:h-[25vh] lg:h-[20vh] object-contain bg-gray-100"
        src={product.picture}
        alt={product.name}
      />
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
          <button onClick={()=>cartHandler(product.name)} className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" disabled={!isLoggedIn}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
