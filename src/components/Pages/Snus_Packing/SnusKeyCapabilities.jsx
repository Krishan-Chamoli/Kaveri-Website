import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaClipboardList,
  FaCogs,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";

import capabilityVideo from "../../../assets/videos/our_process.mp4";

const SnusKeyCapabilities = () => {
  const capabilities = {
    video: capabilityVideo,
    title: "Machine Capabilities",
    subtitle: "Specialized Features for Snus Manufacturing",
    items: [
      {
        title: "Precise Portioning",
        desc: "Advanced volumetric or gravimetric filling systems ensure every pouch has the exact amount of product.",
        icon: <FaClipboardList />,
        color: "#bb2929",
      },
      {
        title: "High-Quality Sealing",
        desc: "Ultrasonic or heat sealing refines pouch integrity, preventing leakage and maintaining freshness.",
        icon: <FaAward />,
        color: "#000000ff",
      },
      {
        title: "Gentle Handling",
        desc: "Designed to handle delicate pouch materials without tearing or damaging the product.",
        icon: <FaCogs />,
        color: "#bb2929",
      },
      {
        title: "Compact Design",
        desc: "Space-saving footprint without compromising on performance or accessibility.",
        icon: <FaChalkboardTeacher />,
        color: "#000000ff",
      },
      {
        title: "Rapid Changeover",
        desc: "Tool-less changeover parts allow for quick switches between different pouch sizes or formats.",
        icon: <FaRocket />,
        color: "#bb2929",
      },
    ],
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-8 md:py-16 relative overflow-hidden min-h-[50vh] md:min-h-[80vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={capabilities.video} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wide mb-4">
            {capabilities.title}
          </h2>

          {/* Red Underline */}
          <div className="w-32 h-1 bg-[#d03232] mx-auto mt-6 mb-4"></div>

          <p className="max-w-4xl mx-auto text-white text-lg md:text-xl leading-relaxed text-center">
            {capabilities.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 mt-8 md:mt-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 pt-10 pb-20">
          {capabilities.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl relative mt-0 mx-auto w-[45%] md:w-full max-w-sm md:max-w-[90%] flex flex-col min-h-[220px] md:min-h-[300px]"
            >
              {/* Content */}
              <div className="p-3 md:p-6 pb-14 md:pb-16 text-center flex-grow">
                <h4 className="font-bold text-sm md:text-xl mb-2 md:mb-4 text-[#c62626]">
                  {item.title}
                </h4>
                <p className="text-[10px] md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Floating Icon */}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-3xl text-white shadow-lg border-4 border-white"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnusKeyCapabilities;
