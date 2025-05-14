import React from "react";
import { Home, Users, Gem, Star } from "lucide-react";

const features = [
  {
    icon: <Home size={48} strokeWidth={1.5} className="mx-auto" />,
    title: "Ultimate Convenience",
    description:
      "Book effortlessly within 5 minutes, skip the salon visits and avoid traffic",
  },
  {
    icon: <Users size={48} strokeWidth={1.5} className="mx-auto" />,
    title: "Accessible Luxury",
    description:
      "Enjoy top-tier services at affordable prices, provided by beauticians with 10+ years of expertise.",
  },
  {
    icon: <Gem size={48} strokeWidth={1.5} className="mx-auto" />,
    title: "Premium Quality & Hygiene",
    description:
      "Experience high-quality services with exclusive, single-use branded products.",
  },
  {
    icon: <Star size={48} strokeWidth={1.5} className="mx-auto" />,
    title: "Expert Beauticians",
    description:
      "Our team consists of certified professionals dedicated to delivering outstanding results every time.",
  },
];

const FeatureOfBeauty = () => {
  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto px-4 container">
        <h2 className="text-3xl font-semibold text-center text-pink-500 mb-16">
          The Future Of Beauty
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 text-gray-700">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOfBeauty;
