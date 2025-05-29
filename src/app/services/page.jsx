import DiscoverMorePackages from "@/components/services/DiscoverMorePackages";
import ServiceMainContent from "@/components/services/ServiceMainContent";
import React from "react";
export const metadata = {
  title: "Beauty Services | Ruthi’s Aesthetics Beauty by Girligirl",
  description:
    "Explore Ruthi’s Aesthetics Beauty’s full range of expert beauty services—from facials and massages to bridal makeovers and henna art. Book self-care packages and treat yourself to the luxury you deserve.",
  keywords:
    "beauty services Bangladesh, Ruthi’s Aesthetics Beauty, Girligirl spa, manicure pedicure Mymensingh, facials, haircare, bridal makeover, henna art, self-care packages, body polish, massage therapy, women’s wellness, beauty salon services",
  openGraph: {
    title: "Beauty & Wellness Services | Ruthi’s Aesthetics Beauty",
    description:
      "Pamper yourself with Girligirl’s curated self-care services. Discover premium facials, spa packages, and bridal makeovers in Mymensingh. Safe, luxurious, and expertly delivered.",
    type: "website",
    locale: "en_US",
    siteName: "Girligirl & Ruthi’s Aesthetics Beauty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Our Beauty Services | Ruthi’s Aesthetics Beauty",
    description:
      "From rejuvenating facials to relaxing massages and full bridal packages—book your next beauty treatment at Girligirl’s trusted beauty hub in Mymensingh.",
  },
};

const page = () => {
  return (
    <div>
      <ServiceMainContent />
      <DiscoverMorePackages />
    </div>
  );
};

export default page;
