"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { products, sliders } from "@/data/Product";

const Hero = () => {
  return (
    <section className="bg-[#faf8ee]">
      <div className="flex flex-col lg:flex-row gap-6  py-10 overflow-hidden min-h-[500px] container mx-auto px-4">
        {/* Left Banner Slider */}
        <div className=" rounded-lg p-0 lg:w-[70%] relative overflow-hidden flex items-center">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {sliders.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="relative p-8 min-h-[430px] gap-8 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="flex-1 flex flex-col justify-center items-start z-50 relative w-full lg:w-[50%] py-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-50 mb-6">{slide.description}</p>
                    <button className="bg-rose-400 text-white px-6 py-2 rounded hover:bg-rose-500 transition">
                      {slide.cta} &rarr;
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right Swiper */}
        <div className="flex-1 relative lg:w-[30%] ">
          <span className="inline-block left-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full z-10 mb-4">
            New Arrival
          </span>
          <Swiper
            direction="vertical"
            spaceBetween={16}
            slidesPerView={3}
            className="w-full !h-[400px]"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`flex items-center justify-between p-4 rounded-lg mb-4 ${product.bg}`}
                >
                  <div>
                    <h3 className="font-bold text-lg">{product.title}</h3>
                    <div className="text-xs text-gray-600 mb-1">
                      Size: {product.sizes.join(" ")}
                    </div>
                    <div className="font-semibold text-lg">
                      BDT {product.price}
                    </div>
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
