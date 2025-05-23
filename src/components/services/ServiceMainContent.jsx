"use client";
import React, { useState } from "react";
import { Clock, Search } from "lucide-react";
import ServicesSingleCard from "@/components/services/ServicesSingleCard";
import { allServices, categories, filtersByCategory } from "@/data/Product";

const ServiceMainContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Body Care");
  const [selectedFilter, setSelectedFilter] = useState([
    "Manicure And Pedicure",
  ]);
  const [sortBy, setSortBy] = useState("Featured");
  const [search, setSearch] = useState("");

  // Get filters for current category
  const currentFilters =
    selectedCategory === "All" ? [] : filtersByCategory[selectedCategory] || [];

  // Filter services by category, filter, and search
  let filteredServices = allServices.filter((service) => {
    // Category
    if (selectedCategory !== "All" && service.category !== selectedCategory)
      return false;
    // Filter
    if (
      selectedCategory !== "All" &&
      selectedFilter.length > 0 &&
      !service.filters.some((f) => selectedFilter.includes(f))
    )
      return false;
    // Search
    if (
      search &&
      !(
        service.title.toLowerCase().includes(search.toLowerCase()) ||
        service.subtitle.toLowerCase().includes(search.toLowerCase())
      )
    )
      return false;
    return true;
  });

  // Sort
  if (sortBy === "PriceLowHigh") {
    filteredServices = filteredServices.sort((a, b) => a.price - b.price);
  } else if (sortBy === "PriceHighLow") {
    filteredServices = filteredServices.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-6 text-xs text-gray-500 mb-2">
        HOME / <span className="text-pink-600">SERVICES</span>
      </div>
      {/* Section Heading */}
      <h1 className="text-3xl font-semibold text-center text-pink-700 mb-8">
        Our Service
      </h1>
      {/* Category Tabs */}
      <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border transition text-sm ${
              selectedCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-pink-100"
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedFilter(
                cat !== "All" && filtersByCategory[cat]?.length
                  ? [filtersByCategory[cat][0].label]
                  : []
              );
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Controls */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between px-4 mb-4 gap-4">
        <div className="font-semibold text-gray-700 uppercase tracking-widest text-sm">
          {selectedCategory} Items
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded pl-8 pr-2 py-1 text-sm focus:ring-2 focus:ring-pink-200"
            />
            <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
          </div>
          <span className="text-gray-500 text-sm">PRICE</span>
          <span className="text-gray-700 text-lg font-bold">↑</span>
          <span className="text-gray-500 text-sm">SORT BY</span>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Featured">Featured</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Sidebar Filter */}
        {selectedCategory !== "All" && (
          <aside className="md:w-64 w-full order-2 md:order-1">
            <div className="bg-white rounded-xl shadow p-4 mb-6 border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700">
                  {selectedCategory.toUpperCase()} ({filteredServices.length})
                </span>
                <button className="text-xs text-gray-500">▼</button>
              </div>
              <div className="space-y-2">
                {currentFilters.map((filter) => (
                  <label
                    key={filter.label}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilter.includes(filter.label)}
                      onChange={() => {
                        setSelectedFilter((prev) =>
                          prev.includes(filter.label)
                            ? prev.filter((f) => f !== filter.label)
                            : [...prev, filter.label]
                        );
                      }}
                      className="accent-pink-500"
                    />
                    <span>{filter.label}</span>
                    <span className="ml-auto text-gray-400">
                      {filter.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>
        )}
        <ServicesSingleCard filteredServices={filteredServices} />
      </div>
    </div>
  );
};

export default ServiceMainContent;
