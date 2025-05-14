"use client";
import React, { useState } from "react";

const popularLocations = [
  "Dhaka",
  "Chittagong",
  "Gazipur",
  "Savar",
  "Narayanganj",
  "Tongi",
];

const ExpandLocation = () => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setInput("");
      }, 2000);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-500 mb-6">
          Expanded Locations!
        </h2>
        {/* Cityscape Illustration */}
        <div className="mb-6 w-full flex justify-center">
          <svg
            width="100%"
            height="80"
            viewBox="0 0 600 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <rect x="0" y="60" width="600" height="20" fill="#f3f3f3" />
            <rect x="20" y="40" width="40" height="40" fill="#f3f3f3" />
            <rect x="70" y="30" width="30" height="50" fill="#f3f3f3" />
            <rect x="110" y="50" width="30" height="30" fill="#f3f3f3" />
            <rect x="150" y="35" width="50" height="45" fill="#f3f3f3" />
            <rect x="210" y="20" width="40" height="60" fill="#f3f3f3" />
            <rect x="260" y="45" width="30" height="35" fill="#f3f3f3" />
            <rect x="300" y="25" width="60" height="55" fill="#f3f3f3" />
            <rect x="370" y="40" width="30" height="40" fill="#f3f3f3" />
            <rect x="410" y="30" width="40" height="50" fill="#f3f3f3" />
            <rect x="460" y="50" width="30" height="30" fill="#f3f3f3" />
            <rect x="500" y="35" width="50" height="45" fill="#f3f3f3" />
            <rect x="560" y="20" width="30" height="60" fill="#f3f3f3" />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2 justify-center my-3">
          {popularLocations.map((loc) => (
            <span
              key={loc}
              className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium"
            >
              {loc}
            </span>
          ))}
        </div>
        <p className="text-center text-gray-600 mb-4">
          Help us serve you better by suggesting new locations where you&apos;d
          like to see our services.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 w-full max-w-md mb-4"
        >
          <input
            type="text"
            placeholder="Type your area"
            className="border border-gray-300 rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            SUBMIT
          </button>
        </form>
        {submitted && (
          <div className="text-green-600 mb-2">
            Thank you for your suggestion!
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpandLocation;
