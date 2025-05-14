import ExpandLocation from "@/components/ExpandLocation";
import FeatureOfBeauty from "@/components/FeatureOfBeauty";
import Hero from "@/components/Hero";
import OurServiceInAction from "@/components/OurServiceInAction";
import Service from "@/components/Service";
import TrendingService from "@/components/TrendingService";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureOfBeauty />
      <Service />
      <TrendingService />
      <OurServiceInAction />
      <ExpandLocation />
    </div>
  );
}
