import React from "react";

const features = [
  {
    image: "/img/services/spa-pedicure-with-pack1715603461.webp",
    title: "Skilled & Trusted Professionals",
    description:
      "Our team consists of experienced, certified, and passionate beauty experts and fashion consultants who stay updated with the latest trends and techniques. We carefully select and train every member to deliver personalized, flawless services that exceed your expectations.",
  },
  {
    image:
      "https://www.ohsogo.com/cdn/shop/products/foaming_face_wash_100ml-caffiene-1.jpg?v=1695926584&width=535",
    title: "Premium Quality Products",
    description:
      "We only use high-quality, branded, and skin-friendly products in our beauty treatments and clothing collections. This ensures not only stunning results but also the safety and comfort of our clients, making your experience truly luxurious and worry-free.",
  },
  {
    image: "pricing.webp",
    title: "Transparent & Fair Pricing",
    description:
      "We believe in building long-term relationships with our customers through honesty and fairness. Our pricing is straightforward, with no hidden fees, allowing you to enjoy premium fashion and beauty services at affordable rates.",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61liiCNNNkL._AC_UF1000,1000_QL80_.jpg",
    title: "Holistic Fashion & Beauty Experience",
    description:
      "Girligirl offers a seamless blend of fashion and beauty under one roof. Whether you want to refresh your wardrobe or indulge in relaxing and rejuvenating beauty treatments, we provide a complete solution tailored to your lifestyle and preferences.",
  },
  {
    image:
      "https://houseofbeautyindia.com/cdn/shop/articles/Screenshot_2022-06-17_at_1.09.06_PM.png?v=1656317763&width=622",
    title: "Convenient & Customer-Centric",
    description:
      "With two accessible locations in Mymensingh and flexible service hours, we make it easy for you to visit or book appointments. Our friendly staff is always ready to assist you with personalized recommendations and exceptional customer care.",
  },
  {
    image: "/img/services/Body20Care1714383007.webp",
    title: "Commitment to Hygiene & Safety",
    description:
      "Your health and safety are our top priorities. We maintain strict hygiene protocols and use sanitized tools and products to ensure a safe and comfortable environment for all our clients.",
  },
  {
    image: "/img/services/eye-brows-threading1703754223.webp",
    title: "Empowering Women & Building Community",
    description:
      "Beyond fashion and beauty, Girligirl and Ruthi’s Aesthetics Beauty are committed to empowering women—whether through creating employment opportunities, hosting community events, or inspiring confidence and self-expression every day.",
  },
];

const WhyGirligirl = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center text-pink-500 mb-10">
        Why Choose Girligirl & Ruthi’s Aesthetics Beauty?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.slice(0, 3).map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#f9f6fb] rounded-xl shadow p-6 flex flex-col items-center text-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      {/* Second row for remaining features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {features.slice(3).map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#f9f6fb] rounded-xl shadow p-6 flex flex-col items-center text-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGirligirl;
