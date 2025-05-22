import { WomenProducts } from "@/data/Product";
import React from "react";
import SingleProduct from "./SingleProduct";
import Link from "next/link";

const OurProduct = () => {
  return (
    <div className="text-center my-10 container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-500 flex items-center justify-center gap-2">
        <span role="img" aria-label="sparkle">
          ✨
        </span>
        Discover What’s Hot Right Now
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-base">
        These are the essentials items our Girligirl community can’t get enough
        of. From cool classics to major must-haves, every piece is chosen for
        its ease of wear, versatility and get-you-noticed kick. Whether you’re
        in the mood to treat yourself or you’re shopping for your bestie, you’ll
        be sure to find the perfect outfit, either way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {WomenProducts.slice(0, 8).map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>

      <Link href={"/products"} className="mt-6 mx-auto inline-block">
        <button className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 cursor-pointer">
          See All Products
        </button>
      </Link>
    </div>
  );
};

export default OurProduct;
