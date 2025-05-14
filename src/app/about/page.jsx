import AboutPage from "@/components/about/AboutPage";
import HowItWorks from "@/components/about/HowItWorks";
import OurCommit from "@/components/about/OurCommit";
import WhyGirligirl from "@/components/about/whyGirligirl";
import React from "react";

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
