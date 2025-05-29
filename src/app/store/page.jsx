import StoreLocation from "@/components/StoreLocation";

export const metadata = {
  title: "Store Locations | Girligirl & Ruthi’s Aesthetics Beauty - Mymensingh",
  description:
    "Visit Girligirl & Ruthi’s Aesthetics Beauty at our two convenient Mymensingh locations. Explore exclusive fashion collections, enjoy premium beauty services, and experience personalized care in a welcoming environment.",
  keywords:
    "Girligirl store location, Ruthi’s Aesthetics Beauty Mymensingh, women's fashion outlets, beauty salons in Mymensingh, AB Guho Road Kazi Tower, Ganganapar stores, beauty services near BRAC Bank, parking at Girligirl, beauty and fashion Bangladesh",
  openGraph: {
    title: "Girligirl Store Locations | Fashion & Beauty in Mymensingh",
    description:
      "Find Girligirl’s fashion and beauty outlets in Mymensingh. With stylish clothing, expert beauticians, and a welcoming atmosphere, our locations are designed for your convenience and comfort.",
    type: "website",
    locale: "en_US",
    siteName: "Girligirl & Ruthi’s Aesthetics Beauty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Girligirl | Mymensingh Store Locations for Fashion & Beauty",
    description:
      "Discover stylish clothing and luxury beauty services at Girligirl’s outlets in Mymensingh. Easy to access, parking-friendly, and always welcoming.",
  },
};

const page = () => {
  return (
    <div>
      <StoreLocation />
    </div>
  );
};

export default page;
