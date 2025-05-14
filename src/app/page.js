import FeatureOfBeauty from "@/components/FeatureOfBeauty";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurServiceInAction from "@/components/OurServiceInAction";
import Service from "@/components/Service";
import TrendingService from "@/components/TrendingService";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureOfBeauty />
      <Service />
      <TrendingService />
      <OurServiceInAction />
      <Footer />
    </div>
  );
}
