import React from "react";
import { Sparkles, Scissors, Smile, MapPin, ParkingCircle, Bus } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-pink-500 mb-2" />,
    title: "Exclusive Collections",
    desc: "Discover stylish and comfortable women’s wear handpicked for all occasions — from casual outings to festive celebrations.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-pink-500 mb-2" />,
    title: "Professional Beauty Care",
    desc: "Experience top-notch haircuts, facials, threading, and more at Ruthi’s Aesthetics Beauty, run by expert beauticians dedicated to your wellness.",
  },
  {
    icon: <Smile className="w-8 h-8 text-pink-500 mb-2" />,
    title: "Personalized Service",
    desc: "Our friendly staff is always ready to assist you in finding the perfect outfit or recommending the right beauty treatment.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-pink-500 mb-2" />,
    title: "Convenient Locations",
    desc: "Easily accessible stores in key areas of Mymensingh with ample parking and local transport connections.",
  },
];

const directions = [
  {
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    title: "Landmarks",
    desc: "Both outlets are near well-known landmarks like BRAC Bank and Ganginapar for easy navigation.",
  },
  {
    icon: <ParkingCircle className="w-6 h-6 text-pink-400" />,
    title: "Parking",
    desc: "Ample parking space is available around the stores, making your visit hassle-free whether you come by car or bike.",
  },
  {
    icon: <Bus className="w-6 h-6 text-pink-400" />,
    title: "Public Transport",
    desc: "Public transport routes frequently pass by both locations, providing easy access for all customers.",
  },
];

const WhyVisit = () => {
  return (
    <section className="bg-[#faf8ee] py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Why Visit Girligirl?
        </h2>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-pink-100 transition"
            >
              {feature.icon}
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        {/* Directions & Parking Cards */}
        <h3 className="font-semibold text-xl text-gray-800 mb-6 text-center">
          Directions &amp; Parking
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {directions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-5 flex flex-col items-center text-center"
            >
              {item.icon}
              <div className="font-semibold text-md mt-2 mb-1 text-gray-700">{item.title}</div>
              <div className="text-gray-600 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
        {/* Closing Statement */}
        <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto text-center text-gray-700">
          <p className="mb-2">
            <span className="font-semibold text-pink-500">
              We’re Here to Make You Look and Feel Your Best
            </span>
          </p>
          <p>
            Whether you want to revamp your wardrobe, get a fresh haircut, or enjoy a relaxing beauty treatment, visiting Girligirl is the perfect first step. Our stores are designed to provide a welcoming atmosphere where style and self-care meet.
          </p>
          <p className="mt-2">
            <span className="font-semibold text-pink-500">
              Come visit us today and experience the Girligirl difference — because you deserve to shine every day.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;
