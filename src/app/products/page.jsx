"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { WomenProducts } from "@/data/Product";
import SingleProduct from "@/components/product/SingleProduct";

const categories = [
  "Eid ul-Adha",
  "Valentine's Day",
  "New Arrival",
  "Sale Offer",
  "Women",
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
          step={10}
          value={price}
          onValueChange={setPrice}
          range
          renderThumb={(props, state) => (
            <div
              {...props}
              className="rounded-full bg-gray-500 w-5 h-5 flex items-center justify-center shadow"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-500 text-white text-xs rounded">
                ৳
                {state.valueNow.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          )}
          trackClassName="bg-slate-400 h-3 rounded-full"
          rangeClassName="bg-slate-500 h-3 rounded-full"
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
