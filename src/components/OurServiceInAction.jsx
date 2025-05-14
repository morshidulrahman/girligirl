"use client";
import React, { useState } from "react";

const serviceActions = [
  {
    name: "Parisa",
    image: "https://static.romoni.com.bd/p/videos/Parisa.webp",
    video: "https://static.romoni.com.bd/p/videos/Parisa.webm",
  },
  {
    name: "Pari",
    image: "https://static.romoni.com.bd/p/videos/Pari.webp",
    video: "https://static.romoni.com.bd/p/videos/Pari.webm",
  },
  {
    name: "Nashia",
    image: "https://static.romoni.com.bd/p/videos/Neela.webp",
    video: "https://static.romoni.com.bd/p/videos/Parisa.webm",
  },
  {
    name: "Sinthia",
    image: "https://static.romoni.com.bd/p/videos/Sinthia.webp",
    video: "https://static.romoni.com.bd/p/videos/Parisa.webm",
  },
];

const OurServiceInAction = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-500 mb-10">
          Our Services In Action
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {serviceActions.map((action, idx) => (
            <div
              key={idx}
              className="relative w-72 h-96 rounded-xl overflow-hidden shadow-md bg-gray-100 cursor-pointer group"
              onClick={() => setPlayingIndex(idx)}
            >
              {playingIndex === idx ? (
                <video
                  src={action.video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onClick={(e) => e.stopPropagation()}
                  poster={action.image}
                />
              ) : (
                <>
                  <img
                    src={action.image}
                    alt={action.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-3 bottom-3 text-white font-medium text-sm z-10">
                    {action.name}
                  </span>
                  <button
                    className="absolute inset-0 flex items-center justify-center z-10"
                    aria-label="Play Video"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white opacity-80"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="24"
                        fill="black"
                        fillOpacity="0.4"
                      />
                      <polygon points="20,16 34,24 20,32" fill="white" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServiceInAction;
