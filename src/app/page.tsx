import FeaturesSection from "@/components/Feture";
import PricingSection from "@/components/Priceing";
import StatsSection from "@/components/StatsSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default Home;
