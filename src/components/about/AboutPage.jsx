import Link from "next/link";
import React from "react";

const stats = [
  {
    value: "100,000+",
    label: "Satisfied Customers",
  },
  {
    value: "150+",
    label: "Highly Trained Beauty Specialists",
  },
  {
    value: "25,000+",
    label: "Community Members",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white  pb-12">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pt-6 text-xs text-gray-500">
        <Link href="/" className="mr-2">
          HOME
        </Link>{" "}
        / <span className="ml-2 text-pink-500 font-semibold">ABOUT</span>
      </div>
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-pink-500 mt-4 mb-8">
        About
      </h1>
      {/* Description */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-gray-700 mb-4">
            <span className="font-semibold">
              About Girligirl &amp; Ruthi’s Aesthetics Beauty
            </span>
          </h2>
          <p className="text-gray-700 mb-4">
            Girligirl is a leading destination in Mymensingh for stylish women’s
            fashion and professional beauty services. Since our inception, we
            have been dedicated to empowering women through confidence, style,
            and self-care. Complementing our trendy collections, Ruthi’s
            Aesthetics Beauty offers expert beauty treatments delivered by
            skilled professionals passionate about enhancing natural beauty.
          </p>
          <p className="text-gray-700 mb-4">
            Together, we create a seamless experience that blends fashion and
            wellness, helping every woman look and feel her best — whether she’s
            stepping out in a new outfit or indulging in luxurious beauty care.
          </p>
        </div>
      </div>
      {/* Impact Stats */}
      <div className="max-w-4xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-3xl font-bold text-gray-800 mb-2 border-t border-b py-2">
              {stat.value}
            </div>
            <div className="text-gray-500 tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
