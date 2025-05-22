import React from "react";

const page = () => {
  return (
    <div>
      {/* Header Section with Background Image and Centered Text */}
      <div
        className="w-full h-64 flex items-center justify-center bg-cover  relative "
        style={{
          backgroundImage:
            "url('https://cdn.kaykraft.com/wp-content/uploads/2025/03/DSC_8678-2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide text-center">
          Contact
        </h1>
      </div>
      {/* Contact Form Section */}
      <section className="flex justify-center items-center py-12 px-4 bg-pink-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
            Get In Touch With Us
          </h2>
          <form className="space-y-6">
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              {["Job Seeker", "Investor", "Company", "Other"].map((role) => (
                <label
                  key={role}
                  className="flex items-center gap-2 text-pink-600"
                >
                  <input type="radio" name="role" className="accent-pink-500" />
                  <span className="uppercase text-sm">{role}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">
                  Full Name<span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">
                  Phone Number<span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="0 123 456 7879"
                  className="w-full border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">
                  Email Address<span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 font-semibold">
                  Present Location
                </label>
                <input
                  type="text"
                  placeholder="Ex. Mirpur-12"
                  className="w-full border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-1 font-semibold">
                Your Message<span className="text-pink-500">*</span>
              </label>
              <textarea
                placeholder="Type here..."
                className="w-full border border-pink-200 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
