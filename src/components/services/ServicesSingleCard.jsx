import { Clock } from "lucide-react";
import React from "react";

const ServicesSingleCard = ({ filteredServices }) => {
  return (
    <>
      {/* Service Cards */}
      <div className="flex-1 order-1 md:order-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 py-12">
              No services found.
            </div>
          ) : (
            filteredServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
              >
                <img
                  src={service.image}
                  alt={service.subtitle}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <div className="w-full">
                  <div className="text-xs text-gray-500 font-semibold tracking-widest mb-1">
                    {service.title}
                  </div>
                  <div className="font-medium mb-2">{service.subtitle}</div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {service.duration}
                    </span>
                    <span>{service.orders.toLocaleString()} orders</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-4">
                    ৳ {service.price}
                  </div>
                  <button className="w-full bg-pink-600 text-white py-2 rounded font-semibold hover:bg-pink-700 transition">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesSingleCard;
