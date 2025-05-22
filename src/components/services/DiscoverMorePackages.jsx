import React from "react";
import { Clock } from "lucide-react";

const packages = [
  {
    discount: "29% OFF",
    title: "Ma & May",
    duration: "215 min",
    orders: 12,
    services: [
      "Milk Protein Facial",
      "Basic Cleansing Facial",
      "Back Relaxation(Only Oil)",
      "See All",
    ],
    price: 3325,
    oldPrice: 4749,
    image: "/img/girl.png",
  },
  {
    discount: "32% OFF",
    title: "Sukoon Package",
    duration: "195 min",
    orders: 97,
    services: [
      "Luxury Paraffin Pedicure",
      "24K Gold Facial",
      "Hair Oil Massage",
      "See All",
    ],
    price: 4200,
    oldPrice: 6199,
    image: "/img/packages/sukoon.jpg",
  },
  {
    discount: "34% OFF",
    title: "Barakh Package",
    duration: "195 min",
    orders: 145,
    services: [
      "Spa Pedicure with Pack",
      "Spa Manicure with Pack",
      "Milk Protein Facial",
      "See All",
    ],
    price: 3620,
    oldPrice: 5529,
    image: "/img/packages/barakh.jpg",
  },
  {
    discount: "29% OFF",
    title: "Noor Package",
    duration: "150 min",
    orders: 116,
    services: [
      "Signature Bright & Glow Facial",
      "Keratin spa(XL)",
      "Back Relaxation(Only Oil)",
      "See All",
    ],
    price: 2999,
    oldPrice: 4260,
    image: "/img/packages/noor.jpg",
  },
];

const DiscoverMorePackages = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-700 mb-8 px-4">
        Discover Our Exclusive Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg flex flex-col items-center p-4 relative"
          >
            {/* Discount Badge */}
            <span className="absolute top-4 left-4 bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full">
              {pkg.discount}
            </span>
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            {/* Details */}
            <div className="w-full">
              <div className="text-xs text-gray-500 font-semibold tracking-widest mb-1">
                PACKAGE
              </div>
              <div className="font-semibold text-lg mb-1">
                {pkg.title} Package
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-1">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {pkg.duration}
                </span>
                <span>{pkg.orders} orders</span>
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                Package Service Includes
              </div>
              <ul className="text-sm text-gray-600 mb-2 list-disc pl-4">
                {pkg.services.map((srv, i) => (
                  <li key={i}>{srv}</li>
                ))}
              </ul>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-lg font-bold text-gray-800">
                  ৳ {pkg.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ৳ {pkg.oldPrice.toLocaleString()}
                </span>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverMorePackages;
