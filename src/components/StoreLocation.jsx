"use client";
import React, { useState } from "react";
import { MapPin, Home, Phone, Clock } from "lucide-react";
import WhyVisit from "./store/WhyVisit";

const outlets = [
  {
    brand: "Girligirl",
    name: "Outlet 01",
    title: "Shop no-110, Ground Floor, Self Bridge, Kazi Tower, A B Guho Road",
    area: "Ganganapar, Mymensingh-2200",
    phones: ["01728381737", "01336251928"],
    details: [
      { icon: <Home />, label: "Ground Floor, Shop No: 110" },
      { icon: <Phone />, label: "01728381737, 01336251928" },
      { icon: <Clock />, label: "9.00am - 10.00pm" },
    ],
    image: "/girligirl.jpg",
  },
  {
    brand: "Girligirl",
    name: "Outlet 02",
    title:
      "Reja Tower, 3rd Floor, 24/KA, Shaymachoron Roy Road, Notun Bazar (Opposite of Brac Bank)",
    area: "Mymensingh-2200",
    phones: ["01728381737", "01336251929"],
    details: [
      { icon: <Home />, label: "3rd Floor, Reja Tower" },
      { icon: <Phone />, label: "01728381737, 01336251929" },
      { icon: <Clock />, label: "9.00am - 10.00pm" },
    ],
    image: "/girligirl.jpg",
  },
  // Add more outlets for Girligirl and Ruthi’s Style as needed
  {
    brand: "Ruthi’s Style",
    name: "Outlet 01",
    title: "Some Address for Ruthi’s Style",
    area: "Dhaka, Bangladesh",
    phones: ["01812345678"],
    details: [
      { icon: <Home />, label: "1st Floor, Ruthi’s Style" },
      { icon: <Phone />, label: "01812345678" },
      { icon: <Clock />, label: "10.00am - 9.00pm" },
    ],
    image: "/girligirl.jpg",
  },
  // ...add up to 22 outlets
];

const brands = [...new Set(outlets.map((o) => o.brand))];

const StoreLocation = () => {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedOutletIdx, setSelectedOutletIdx] = useState(0);

  const filteredOutlets = outlets.filter((o) => o.brand === selectedBrand);

  return (
    <section className="bg-[#faf8ee] min-h-screen py-8">
      {/* Shop Location Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Left: Tab System */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-bold text-lg mb-4">Shop Location</h3>
            {/* Brand Tabs */}
            <div className="flex gap-2 mb-4">
              {brands.map((brand, idx) => (
                <button
                  key={brand}
                  className={`px-3 py-1 rounded font-semibold ${
                    selectedBrand === brand
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setSelectedOutletIdx(0);
                  }}
                >
                  {brand}
                </button>
              ))}
            </div>
            {/* Outlet List */}
            <ul>
              {filteredOutlets.map((outlet, idx) => (
                <li
                  key={outlet.name + idx}
                  className={`flex items-start gap-2 p-2 rounded cursor-pointer mb-1 ${
                    selectedOutletIdx === idx
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedOutletIdx(idx)}
                >
                  <MapPin className="mt-1" size={18} />
                  <div>
                    <div>{outlet.name}</div>
                    <div className="text-xs text-green-600">{outlet.area}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right: Outlet Details */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col  gap-6">
            <img
              src={filteredOutlets[selectedOutletIdx].image}
              alt={filteredOutlets[selectedOutletIdx].name}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {filteredOutlets[selectedOutletIdx].name}
              </h2>
              <div className="text-lg text-gray-700 mb-1">
                {filteredOutlets[selectedOutletIdx].title}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {filteredOutlets[selectedOutletIdx].area}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredOutlets[selectedOutletIdx].details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-green-50 rounded p-3"
                  >
                    {detail.icon}
                    <span>{detail.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyVisit />
    </section>
  );
};

export default StoreLocation;
