"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { WomenProducts } from "@/data/Product";
import SingleProduct from "@/components/product/SingleProduct";

const categories = [
  "Eid ul-Adha",
  "Men's Panjabi",
  "New Arrival",
  "Sale Offer",
  "Women",
  "Unstitched Dress",
  // ...add more categories as needed
];

const page = () => {
  const [price, setPrice] = useState([1000, 5000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredProducts = WomenProducts.filter(
    (product) =>
      product.price >= price[0] &&
      product.price <= price[1] &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-6">
      {/* Sidebar Filter */}
      <aside className="w-full lg:w-64 bg-white rounded-lg shadow p-4 md:p-6 mb-6 lg:mb-0">
        <h2 className="font-bold text-lg mb-4">Filter by Price</h2>
        <Slider
          min={500}
          max={10000}
          step={100}
          value={price}
          onValueChange={setPrice}
          range
        />
        <div className="flex justify-between text-xs mt-2 mb-6">
          <span>{price[0]}</span>
          <span>{price[1]}</span>
        </div>
        <h2 className="font-bold text-lg mb-4">Filter by Category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="accent-pink-500"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </aside>
      {/* Product Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">
            No products found.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default page;
