import React from "react";

const steps = [
  {
    title: "Initial Interview",
    desc: "We begin by understanding each candidate’s background, skills, and genuine passion for beauty and style to ensure they align with our commitment to quality.",
  },
  {
    title: "Practical Skill Assessment",
    desc: "Candidates undergo hands-on evaluations over several days, providing services to real clients to demonstrate their expertise and professionalism.",
  },
  {
    title: "Comprehensive Onboarding",
    desc: "Successful applicants join our family with full support, including branded uniforms, essential tools, monthly product supplies, and safety equipment—ensuring they are fully prepared to offer the highest standard of care.",
  },
];

const OurCommit = () => {
  return (
    <section className="bg-[#f7f7fa] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4">
          Our Commitment to Excellence in Service
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          At Girligirl &amp; Ruthi’s Aesthetics Beauty, we take great pride in
          our team of highly skilled and passionate beauty professionals who
          deliver outstanding fashion and wellness experiences every day.
        </p>
        <h3 className="text-2xl font-medium text-gray-800 mb-8">
          Thorough Recruitment Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 text-left flex flex-col items-start"
            >
              <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                {step.title}
              </div>
              <div className="text-gray-700">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Join As A Service Provider Section */}
      <div className="max-w-2xl mx-auto px-4 text-center mt-16">
        <h2 className="text-3xl font-semibold text-pink-700 mb-4">
          Join As A Service Provider
        </h2>
        <p className="text-gray-700 mb-8">
          Ready to be part of something transformative? Join the Girligirl &amp;
          Ruthi’s Aesthetics Beauty family and let’s make a difference together.
          Apply today and embark on a journey that’s as unique as you are.
        </p>
        <a
          href="#"
          className="inline-block bg-pink-700 hover:bg-pink-800 text-white font-semibold px-12 py-4 rounded transition text-lg"
        >
          APPLY NOW
        </a>
      </div>
    </section>
  );
};

export default OurCommit;
