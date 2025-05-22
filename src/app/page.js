import ExpandLocation from "@/components/ExpandLocation";
import FeatureOfBeauty from "@/components/FeatureOfBeauty";
import Hero from "@/components/Hero";
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
      <TrendingService />
      <OurProduct />
      <OurServiceInAction />
      <ExpandLocation />
    </div>
  );
}
