import { galleryImages } from "@/data/Product";
import Image from "next/image";
import React from "react";

const OurGallery = () => {
  return (
    <div className="text-center my-10 container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-500 flex items-center justify-center gap-2">
        <span role="img" aria-label="sparkle">
          ✨
        </span>
        Our Gallery
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-base">
        Check out is a great addition to our "must have" fashion collection that
        every Girligirl is smitten over! Featuring an array of high-end options
        from casual to fate-turning, every piece is picked for its innovation,
        flair, and ready to elevate any look. Whether you’re shopping for
        yourself or looking for the perfect gift, the most fashion-forward
        picks are meant to have you looking and feeling your best.
      </p>

      <div>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {galleryImages.slice(0, 2).map((item, index) => (
              <Image
                src={item.image}
                key={index}
                width={900}
                height={400}
                className="rounded-md"
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6">
            {galleryImages.slice(2, 12).map((item, index) => (
              <Image
                src={item.image}
                key={index}
                width={600}
                height={400}
                className="rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
