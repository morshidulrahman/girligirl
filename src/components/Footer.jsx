import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#faf8ee] pt-10 pb-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & Brand */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/img/girligirl.webp"
              alt="Fashionista Logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-pink-600">Girligirl</span>
          </div>
          <span className="tracking-widest text-gray-700 text-sm mb-2">
            A CLOTHING BRAND
          </span>
        </div>
        {/* Menubar */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="font-bold text-gray-800 mb-2">Menubar</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Store Location
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Register
              </a>
            </li>
          </ul>
        </div>
        {/* Useful Links */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="font-bold text-gray-800 mb-2">Useful Links</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="font-bold text-gray-800 mb-2">Reach Out to us</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <Mail size={18} /> shop@fashionista.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +99012345
            </li>
          </ul>
        </div>
      </div>
      {/* Back to top button */}
      {/* <div className="flex justify-end max-w-7xl mx-auto px-4 mt-6">
        <a
          href="#"
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          aria-label="Back to top"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
