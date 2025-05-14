"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Search,
  MapPin,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/img/girligirl.webp"
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <span className="font-bold text-pink-600 text-xl">Girligirl</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-pink-600"
          >
            <ShoppingCart className="w-4 h-4 mr-1" /> Collections
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-pink-600"
          >
            <MapPin className="w-4 h-4 mr-1" /> Store Location
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-pink-600"
          >
            <Phone className="w-4 h-4 mr-1" /> Contact
          </a>

          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-pink-600"
          >
            <Heart className="w-4 h-4 mr-1" /> WishList
          </a>
          <button className="ml-4 px-4 py-2 bg-rose-400 text-white rounded hover:bg-rose-500 transition">
            Sign In
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a
            href="#"
            className="block py-2 text-gray-700 hover:text-pink-600 flex items-center"
          >
            <ShoppingCart className="w-4 h-4 mr-1" /> Collections
          </a>
          <a
            href="#"
            className="block py-2 text-gray-700 hover:text-pink-600 flex items-center"
          >
            <MapPin className="w-4 h-4 mr-1" /> Store Location
          </a>
          <a
            href="#"
            className="block py-2 text-gray-700 hover:text-pink-600 flex items-center"
          >
            <Phone className="w-4 h-4 mr-1" /> Contact
          </a>
          <a
            href="#"
            className="block py-2 text-gray-700 hover:text-pink-600 flex items-center"
          >
            <Search className="w-4 h-4 mr-1" /> Search
          </a>
          <a
            href="#"
            className="block py-2 text-gray-700 hover:text-pink-600 flex items-center"
          >
            <Heart className="w-4 h-4 mr-1" /> WishList
          </a>
          <button className="w-full mt-2 px-4 py-2 bg-rose-400 text-white rounded hover:bg-rose-500 transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
