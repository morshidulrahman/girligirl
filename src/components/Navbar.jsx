"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  MapPin,
  House,
  Phone,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: Search },
  { href: "/products", label: "Product", icon: ShoppingCart },
  { href: "/services", label: "Services", icon: Search },
  { href: "/store", label: "Store Location", icon: MapPin },
  { href: "/contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center ${
                pathname === href
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700 hover:text-pink-600"
              }`}
            >
              <Icon className="w-4 h-4 mr-1" /> {label}
            </Link>
          ))}
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
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 flex items-center ${
                pathname === href
                  ? "text-pink-600 font-semibold"
                  : "text-gray-700 hover:text-pink-600"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <Icon className="w-4 h-4 mr-1" /> {label}
            </Link>
          ))}
          <button className="w-full mt-2 px-4 py-2 bg-rose-400 text-white rounded hover:bg-rose-500 transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
