import AboutPage from "@/components/about/AboutPage";
import HowItWorks from "@/components/about/HowItWorks";
import OurCommit from "@/components/about/OurCommit";
import WhyGirligirl from "@/components/about/whyGirligirl";
import React from "react";

export const metadata = {
  title:
    "About Girligirl & Ruthi’s Aesthetics Beauty | Fashion & Beauty in Mymensingh",
  description:
    "Discover how Girligirl and Ruthi’s Aesthetics Beauty empower women through fashion and wellness. Learn about our team, services, values, and commitment to excellence in beauty and style.",
  keywords:
    "About Girligirl, Ruthi’s Aesthetics Beauty, women's fashion Mymensingh, beauty services Bangladesh, fashion and beauty, holistic beauty care, expert beauticians, community empowerment, style and wellness, ladies clothing, facials, haircuts, home service beauty",
  openGraph: {
    title:
      "About Girligirl & Ruthi’s Aesthetics Beauty | Empowering Women Through Fashion & Beauty",
    description:
      "Girligirl and Ruthi’s Aesthetics Beauty blend fashion and wellness under one roof. With skilled professionals, premium products, and a mission to empower, discover what makes us Mymensingh's go-to destination.",
    type: "website",
    locale: "en_US",
    siteName: "Girligirl & Ruthi’s Aesthetics Beauty",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Girligirl & Ruthi’s Aesthetics Beauty | Mymensingh's Fashion & Beauty Experts",
    description:
      "From trendy outfits to expert facials and haircuts, Girligirl and Ruthi’s Aesthetics Beauty deliver a luxurious, safe, and empowering experience for every woman.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
      <WhyGirligirl />
      <HowItWorks />
      <OurCommit />
    </div>
  );
};

export default page;
