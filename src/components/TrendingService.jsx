import React from "react";
import { Clock, ShoppingCart } from "lucide-react";

const trendingServices = [
  {
    title: "MANICURE AND PEDICURE",
    subtitle: "Spa Manicure and Pedicure",
    duration: "85 min",
    price: 1199,
    description:
      "Indulge in our luxurious spa manicure and pedicure services. Enjoy smooth, healthy nails and relaxation with our expert care. This treatment includes nail shaping, cuticle care, exfoliation, and a soothing massage.",
    orders: 15898,
    image: "/img/services/spamaincare.webp",
  },
  {
    title: "THREADING",
    subtitle: "Eye Brows Threading",
    duration: "15 min",
    price: 80,
    description:
      "Achieve perfectly shaped brows with our threading service. It's quick, precise, and perfect for creating sharp, defined eyebrows.",
    orders: 14768,
    image: "/img/services/spa-pedicure-with-pack1715603461.webp",
  },
  {
    title: "MANICURE AND PEDICURE",
    subtitle: "Spa Pedicure with Pack",
    duration: "45 min",
    price: 750,
    description:
      "Treat your feet to our spa pedicure service, which includes exfoliation, nail care, and a moisturizing treatment. Finish off with a relaxing foot massage.",
    orders: 9600,
    image: "/img/services/Packages1714389751.webp",
  },
  {
    title: "FACIALS",
    subtitle: "Basic Cleansing Facial",
    duration: "25 min",
    price: 600,
    description:
      "Rejuvenate your skin with a basic cleansing facial. This service is designed to clean your pores, remove impurities, and leave your skin fresh and glowing.",
    orders: 8400,
    image: "/img/services/basic-cleansing-facial1716284357.webp",
  },
];

const TrendingService = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-pink-500 mb-10">
          🌟 Trending Services Ruthi’s Aesthetics Beauty
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Discover our Most Popular Beauty Treatments. These trending services
          are loved by our customers for their effectiveness and relaxation.
          Whether you’re looking to pamper yourself or get ready for a special
          occasion, our services offer everything you need to look and feel your
          best.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.subtitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {service.title}
                </h3>
                <div className="text-base font-medium mb-1">
                  {service.subtitle}
                </div>
                <div className="flex items-center text-xs text-gray-400 mb-2 gap-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {service.duration}
                  </span>
                  <span>{service.orders.toLocaleString()} orders</span>
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  ৳ {service.price.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mb-4 flex-1">
                  {service.description}
                </p>
                <button className="w-full bg-pink-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-pink-700 transition">
                  <ShoppingCart size={16} /> ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-purple-100 text-pink-700 px-6 py-2 rounded font-medium hover:bg-pink-200 transition"
          >
            Experience the Best in Beauty – Browse more trending services and
            treat yourself today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingService;
