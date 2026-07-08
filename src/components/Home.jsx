import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import WelspunWorld from "./WelspunWorld";
// import Featured from "./Featured";
// import CompanyAbout from "./CompanyAbout";
// import LegacyLeadership from "./LegacyLeadership";
import RevealImg from "./RevealImg";
import GlobalNetwork from "./GlobalNetwork";
import CircularGallery from "./CircularGallery";
import OurProcess from "./OurProcess";

function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-white text-white">
      <HeroSection />
      {/* <Marquee /> */}
      <WelspunWorld />
      {/* <Featured /> */}
      {/* <About /> */}
      {/* <Eyes /> */}
      {/* <CompanyAbout /> */}
      {/* <LegacyLeadership /> */}
      <div className="w-full bg-white py-10 md:py-20">
        <div className="max-w-full mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col mb-6 md:mb-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#BB2929] font-EireneSansRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-6 md:mb-8"
            >
              Our State of the Art
            </motion.p>
            <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[0.95] tracking-tight">
              Machinery Showcase
            </h2>
          </motion.div>
        </div>
        <div className="relative w-full h-[600px] overflow-hidden">
          <CircularGallery
            bend={3}
            textColor="#dc2626"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
      <OurProcess />
      <RevealImg />
      {/* <GlobalNetwork /> */}
      {/* <SupportSection /> */}
      {/* <Cards /> */}
    </div>
  );
}

export default Home;

