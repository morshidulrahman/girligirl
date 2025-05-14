import React from "react";
import {
  Calendar,
  ShoppingBag,
  Users,
  CheckCircle,
  Home,
  ShieldCheck,
  Smile,
  PhoneCall,
} from "lucide-react";

const stepsLeft = [
  {
    icon: <Calendar className="text-pink-500 w-7 h-7" />,
    title: "Choose Your Service",
    desc: "Browse our website or visit our stores to select the fashion pieces or beauty treatments you desire—from stylish outfits to expert haircuts and facials.",
  },
  {
    icon: <ShoppingBag className="text-pink-500 w-7 h-7" />,
    title: "Book Appointment or Shop",
    desc: "Easily book your beauty service appointment online or shop for your favorite women’s wear at our outlets with personalized assistance.",
  },
  {
    icon: <Users className="text-pink-500 w-7 h-7" />,
    title: "Expert Matching & Scheduling",
    desc: "For beauty services, we connect you with a skilled and trusted beautician who fits your needs and schedule, ensuring a seamless experience.",
  },
  {
    icon: <CheckCircle className="text-pink-500 w-7 h-7" />,
    title: "Appointment Confirmation",
    desc: "You’ll receive a confirmation call or message from your beautician or our team to finalize the appointment details.",
  },
];

const stepsRight = [
  {
    icon: <Home className="text-pink-500 w-7 h-7" />,
    title: "Visit or At-Home Service",
    desc: "Visit us at our welcoming Girligirl outlets for shopping and treatments, or opt for our safe and convenient at-home beauty service by Ruthi’s Aesthetics Beauty.",
  },
  {
    icon: <ShieldCheck className="text-pink-500 w-7 h-7" />,
    title: "Safety & Comfort First",
    desc: "Your health and safety matter. Our beauticians follow strict hygiene protocols and provide services in a clean, secure environment.",
  },
  {
    icon: <Smile className="text-pink-500 w-7 h-7" />,
    title: "Enjoy Your Experience",
    desc: "Relax, refresh, and rejuvenate with top-quality fashion and beauty services tailored just for you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center text-pink-700 mb-10">
        How It Works
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Steps */}
        <div className="flex-1 flex flex-col gap-6">
          {stepsLeft.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-pink-50 rounded-full p-2">
                {step.icon}
              </div>
              <div>
                <div className="font-semibold">{step.title}</div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Center Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="rounded-full bg-pink-50 p-8 shadow-lg">
            <img
              src="/girlmessage.webp"
              alt="How it works illustration"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>
        {/* Right Steps */}
        <div className="flex-1 flex flex-col gap-6">
          {stepsRight.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-pink-50 rounded-full p-2">
                {step.icon}
              </div>
              <div>
                <div className="font-semibold">{step.title}</div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile illustration */}
      <div className="md:hidden flex justify-center mt-8">
        <img
          src="/img/howitworks/beauty-illustration.svg"
          alt="How it works illustration"
          className="w-48 h-48 object-contain"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
