import React, { useState } from "react";
import snusMachineImg from "../../../assets/Snus/kaveri-snus-machine.png";

const SnusPackagingTech = () => {
  const [hoveredHotspotIndex, setHoveredHotspotIndex] = useState(null);

  const details = {
    image: snusMachineImg,
    title1: "Efficient Snus",
    title2: "Packaging",
    description:
      "The Snus Packing Machine is engineered for the high-speed, precise portioning and packaging of snus products. It ensures accurate weight control, airtight sealing, and hygienic handling. Designed to meet strict industry standards, it offers reliable performance for both traditional and modern snus formats.",
    hotspots: [
      {
        label: "1",
        detail: "Can Elevator",
        x: "4%",
        y: "30%",
        type: "top",
        lineH: "h-6 md:h-10",
      },
      {
        label: "2A",
        detail: "Snus Packing Machine",
        x: "15%",
        y: "38%",
        type: "top",
        lineH: "h-10 md:h-16",
      },
      {
        label: "2B",
        detail: "Snus Packing Machine",
        x: "26%",
        y: "42%",
        type: "top",
        lineH: "h-10 md:h-16",
      },
      {
        label: "3",
        detail: "Indexing Table",
        x: "20%",
        y: "55%",
        type: "bottom",
        lineH: "h-6 md:h-24",
      },
      {
        label: "4",
        detail: "Cap Elevator",
        x: "38%",
        y: "36%",
        type: "top",
        lineH: "h-8 md:h-12",
      },
      {
        label: "8",
        detail: "Connecting Conveyor",
        x: "32%",
        y: "56%",
        type: "bottom",
        lineH: "h-6 md:h-16",
      },
      {
        label: "5",
        detail: "Capping Machine",
        x: "46%",
        y: "48%",
        type: "top",
        lineH: "h-6 md:h-12",
      },
      {
        label: "6",
        detail: "Weighing and Metal Detector",
        x: "60%",
        y: "44%",
        type: "top",
        lineH: "h-12 md:h-20",
      },
      {
        label: "7",
        detail: "Labelling Machine",
        x: "70%",
        y: "43%",
        type: "top",
        lineH: "h-8 md:h-10",
      },
      {
        label: "9",
        detail: "L Sealer & Shrink Tunnel",
        x: "86%",
        y: "43.5%",
        type: "top",
        lineH: "h-8 md:h-10",
      },
    ],
  };

  return (
    <section className="w-full bg-white pt-8 pb-4 md:pt-20 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black tracking-wide mb-4 !font-KuraleRegular">
            {details.title1}
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black tracking-wide">
            {details.title2}
          </h2>

          {/* Red Underline */}
          <div className="w-32 h-1 bg-[#d03232] mx-auto mt-6 mb-8"></div>

          {/* Description Text */}
          <p className="max-w-4xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed text-center hidden md:block !font-EireneSansRegular">
            {details.description}
          </p>
          <p className="max-w-4xl mx-auto text-gray-700 text-base md:text-xl leading-relaxed text-center md:hidden !font-EireneSansRegular">
            {details.description}
          </p>
        </div>

        {/* Machine Image with Hotspots styled after the reference photo */}
        <div className="relative w-full -mt-2 md:-mt-10 lg:-mt-20 flex justify-center -mb-12 md:-mb-32 lg:-mb-48 xl:-mb-64">
          {/* Main Machine Image */}
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
            {details.image ? (
              <img
                src={details.image}
                alt="Machine Hotspots Reference"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            ) : (
              <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
            )}

            {/* Blur Overlay - shown when a hotspot is hovered */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 pointer-events-none z-[5] ${hoveredHotspotIndex !== null ? "opacity-100" : "opacity-0"}`}
            >
              <div
                className="absolute inset-0 backdrop-blur-[5px] bg-white/30"
                style={{
                  maskImage:
                    hoveredHotspotIndex !== null
                      ? `radial-gradient(circle at ${details.hotspots[hoveredHotspotIndex].x} ${details.hotspots[hoveredHotspotIndex].y}, transparent 8%, black 16%)`
                      : "none",
                  WebkitMaskImage:
                    hoveredHotspotIndex !== null
                      ? `radial-gradient(circle at ${details.hotspots[hoveredHotspotIndex].x} ${details.hotspots[hoveredHotspotIndex].y}, transparent 8%, black 16%)`
                      : "none",
                }}
              />
            </div>

            {/* Static Hotspot Labels based on actual machine image */}
            {(details.hotspots || []).map((hotspot, index) => {
              return (
                <div
                  key={index}
                  className="absolute z-10 hover:z-50 group cursor-pointer"
                  style={{ left: hotspot.x, top: hotspot.y }}
                  onMouseEnter={() => setHoveredHotspotIndex(index)}
                  onMouseLeave={() => setHoveredHotspotIndex(null)}
                >
                  {hotspot.type === "top" ? (
                    <div className="flex flex-col items-center transform -translate-x-1/2 -translate-y-full">
                      <div className="relative">
                        <div className="bg-[#BB2929] text-white px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm lg:text-base font-semibold shadow-md md:min-w-[32px] text-center whitespace-nowrap leading-none tracking-wide">
                          {hotspot.label}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap">
                          <div className="bg-white text-gray-800 border border-gray-200 px-3 py-1.5 shadow-lg flex items-center gap-2 rounded">
                            <span className="w-1.5 h-1.5 bg-[#d03232] rounded-full"></span>
                            <span className="font-medium text-sm md:text-base">
                              {hotspot.detail}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-[1px] md:w-[1.5px] bg-black ${hotspot.lineH || "h-8 md:h-12"}`}
                      ></div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center transform -translate-x-1/2">
                      <div
                        className={`w-[1px] md:w-[1.5px] bg-black ${hotspot.lineH || "h-8 md:h-12"}`}
                      ></div>
                      <div className="relative">
                        <div className="bg-[#BB2929] text-white px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm lg:text-base font-semibold shadow-md md:min-w-[32px] text-center whitespace-nowrap leading-none tracking-wide">
                          {hotspot.label}
                        </div>
                        {/* Tooltip */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap">
                          <div className="bg-white text-gray-800 border border-gray-200 px-3 py-1.5 shadow-lg flex items-center gap-2 rounded">
                            <span className="w-1.5 h-1.5 bg-[#d03232] rounded-full"></span>
                            <span className="font-medium text-sm md:text-base">
                              {hotspot.detail}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnusPackagingTech;
