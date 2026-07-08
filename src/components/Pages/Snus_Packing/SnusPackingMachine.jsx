import React, { useEffect } from "react";
import SnusHero from "./SnusHero";
import SnusPackagingTech from "./SnusPackagingTech";
import SnusSpecifications from "./SnusSpecifications";
import SnusQualityEfficiency from "./SnusQualityEfficiency";
import SnusKeyCapabilities from "./SnusKeyCapabilities";

const SnusPackingMachine = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="snus-machine-page" className="w-full bg-white">
      <SnusHero />
      <SnusPackagingTech />
      <SnusSpecifications />
      <SnusQualityEfficiency />
      <SnusKeyCapabilities />
    </div>
  );
};

export default SnusPackingMachine;
