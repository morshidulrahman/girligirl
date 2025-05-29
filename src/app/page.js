import HowItWorks from "@/components/about/HowItWorks";
import ExpandLocation from "@/components/ExpandLocation";
import FeatureOfBeauty from "@/components/FeatureOfBeauty";
import Hero from "@/components/Hero";
import OurGallery from "@/components/OurGallery";
import OurServiceInAction from "@/components/OurServiceInAction";
import OurProduct from "@/components/product/OurProduct";
import Service from "@/components/Service";
import TrendingService from "@/components/TrendingService";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureOfBeauty />
      <Service />
      <OurGallery />
      <TrendingService />
      <OurProduct />
      <HowItWorks />
      <ExpandLocation />
    </div>
  );
}
