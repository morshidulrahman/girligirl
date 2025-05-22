import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center group">
      <div className="h-68 overflow-hidden w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded mb-2  group-hover:scale-105 transition duration-300"
        />
      </div>
      <h3 className="font-semibold text-center mt-3">{product.name}</h3>
      <p className="text-pink-600 font-bold mt-1">
        {product.price.toLocaleString()}৳
      </p>
    </div>
  );
};

export default SingleProduct;
