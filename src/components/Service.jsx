import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Premium Beauty Care",
    image: "/img/services/1707079876.webp",
  },
  {
    title: "Body Care",
    image: "/img/services/Body20Care1714383007.webp",
  },
  {
    title: "Hair Care",
    image: "img/services/Hair20Care1714389119.webp",
  },
  {
    title: "Makeover",
    image: "/img/services/Makeover1714389530.webp",
  },
  {
    title: "Bridal Services",
    image: "/img/services/Bridal1714389886.webp",
  },
  {
    title: "Beauty Packages",
    image: "/img/services/Packages1714389751.webp",
  },
  {
    title: "Henna Art",
    image: "/img/services/Henna20Art1714390144.webp",
  },
  {
    title: "Hair Removal",
    image: "/img/services/Hair20Removal1714389322.webp",
  },
  //   {
  //     title: "Hairstyling",
  //     image: "/img/services/Hairstyle1714389432.webp",
  //   },
];

const Service = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-pink-500 mb-12">
          💇‍♀️ Beauty Services at Ruthi’s Aesthetics Beauty
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden group shadow-md h-40 flex items-end"
              style={{ minHeight: "160px" }}
            >
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                /
              </div>
              <div className="relative w-full text-center z-10 pb-6">
                <h3 className="text-lg font-semibold tracking-wide text-white drop-shadow">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
