import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { FaCogs } from "react-icons/fa";
import snusMachineImg from "../../../assets/Snus/kaveri-snus-machine.png";
import machinePart1 from "../../../assets/Snus/2.png";
import machinePart2 from "../../../assets/Snus/3.png";
import machinePart3 from "../../../assets/Snus/4.png";
import machinePart4 from "../../../assets/Snus/5.png";
import machinePart5 from "../../../assets/Snus/6.png";
import machinePart6 from "../../../assets/Snus/7.png";
import machinePart7 from "../../../assets/Snus/8.png";

const SnusQualityEfficiency = () => {
  const orbitRef = useRef(null);
  const orbitTween = useRef(null);
  const [activeOrbitItem, setActiveOrbitItem] = useState(null);

  const quality = {
    title: "Quality & Hygiene",
    subtitle: "Ensuring product safety and consistency",
    diagramImage: snusMachineImg,
    points: [
      {
        title: "Can Elevator",
        text: "Lifts and transports snus or nicotine material from the hopper to the filling unit in a continuous and controlled flow.",
        image: machinePart1,
        color: "#5C6BC0",
      },
      {
        title: "Snus Packing Machine",
        text: "Advanced system that automatically forms, fills, and seals snus pouches with precision, speed, and strict quality control.",
        image: machinePart2,
        color: "#FF8A80",
      },
      {
        title: "Cap Elevator",
        text: "Automatically lifts and feeds empty caps/lids to the capping unit, ensuring continuous and aligned supply for sealing containers.",
        image: machinePart3,
        color: "#EC407A",
      },
      {
        title: "Capping Machine",
        text: "Automatically places and tightens caps on containers with precise torque, ensuring secure and consistent sealing.",
        image: machinePart4,
        color: "#AB47BC",
      },
      {
        title: "Weighing And Metal Detector",
        text: "Checks product weight for accuracy and detects metal contaminants, rejecting non-compliant items to ensure quality and safety.",
        image: machinePart5,
        color: "#7E57C2",
      },
      {
        title: "Labelling Machine",
        text: "Automatically applies labels to containers or packages with precise positioning for consistent branding and product information.",
        image: machinePart6,
        color: "#26A69A",
      },
      {
        title: "L Sealer & Shrink Tunnel",
        text: "Seals products in film using an L-shaped cutter and then shrinks the film with heat for tight, secure packaging.",
        image: machinePart7,
        color: "#FFA726",
      },
    ],
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      orbitTween.current = gsap.timeline({ repeat: -1 });
      orbitTween.current.to(
        ".orbit-container",
        { rotation: 360, duration: 40, ease: "none" },
        0,
      );
      orbitTween.current.to(
        ".orbit-item-inner",
        { rotation: -360, duration: 40, ease: "none" },
        0,
      );
    }, orbitRef);

    return () => ctx.revert();
  }, []);

  const handleOrbitMouseEnter = (item) => {
    setActiveOrbitItem(item);
    if (orbitTween.current) orbitTween.current.pause();
  };

  const handleOrbitMouseLeave = () => {
    if (orbitTween.current) orbitTween.current.play();
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white pt-10 pb-16 md:pt-20 md:pb-32 overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl !font-KuraleRegular font-normal text-black tracking-wide mb-4"
          >
            {quality.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-red-600 font-light"
          >
            {quality.subtitle}
          </motion.p>
        </div>

        <div
          className="flex flex-col xl:flex-row items-center justify-center w-full max-w-[1600px] mx-auto min-h-[500px] md:min-h-[850px] relative gap-10 xl:gap-16 px-4 xl:px-10"
          ref={orbitRef}
        >
          {/* Circular Showcase */}
          <div className="relative w-full xl:w-[60%] flex justify-center items-center h-[500px] md:h-[850px] z-10">
            {/* Soft Background Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[410px] h-[410px] md:w-[750px] md:h-[750px] bg-[#BB2929]/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

            {/* Central Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[480px] h-auto z-0 pointer-events-none drop-shadow-2xl">
              <img
                src={quality.diagramImage}
                className="w-full h-full object-contain"
                alt="Machine Center"
              />
            </div>

            {/* Orbit Container */}
            <div className="orbit-container relative w-[390px] h-[390px] md:w-[700px] md:h-[700px] rounded-full border-[1.5px] border-gray-200/60 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]">
              {quality.points.map((pt, i) => {
                const angle = (i * 360) / quality.points.length;
                const isActive = activeOrbitItem?.title === pt.title;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-0 h-0 z-20"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* Negative Margin pulls element outside to the radius */}
                    <div
                      className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 -ml-10 md:-ml-16 -mt-[195px] md:-mt-[350px]"
                      style={{ transform: `rotate(-${angle}deg)` }}
                    >
                      <div className="orbit-item-inner w-full h-full">
                        <div
                          className={`relative w-full h-full rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white flex items-center justify-center cursor-pointer transition-all duration-300 ${isActive ? "scale-125 ring-4 ring-[#BB2929]/30 shadow-[#BB2929]/20 shadow-2xl" : "hover:scale-110 hover:shadow-xl"}`}
                          onMouseEnter={() => handleOrbitMouseEnter(pt)}
                          onMouseLeave={handleOrbitMouseLeave}
                        >
                          <div
                            className="absolute inset-[2.5px] md:inset-[3.5px] rounded-full flex items-center justify-center bg-gray-100 overflow-hidden"
                            style={{
                              boxShadow: `inset 0 0 10px ${pt.color}40`,
                            }}
                          >
                            <img
                              src={pt.image}
                              alt={pt.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Glow effect on hover/active */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md pointer-events-none"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full xl:w-[40%] flex justify-center xl:justify-start items-center p-4 md:p-8 z-20 min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeOrbitItem ? (
                <motion.div
                  key={activeOrbitItem.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[340px] w-full relative overflow-hidden group h-[520px] flex flex-col mx-auto xl:mx-0"
                >
                  {/* Top Image Section */}
                  <div className="relative w-full h-[50%] flex items-center justify-center p-6 bg-gray-50/80">
                    {/* Subtle glow behind the transparent PNG */}
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        background: `radial-gradient(circle at center, ${activeOrbitItem.color} 0%, transparent 70%)`,
                      }}
                    ></div>

                    <img
                      src={activeOrbitItem.image}
                      alt={activeOrbitItem.title}
                      className="w-full h-full object-contain relative z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
                    />

                    {/* Seamless gradient blend to the light bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/90 to-transparent z-20"></div>
                  </div>

                  {/* Bottom Details Section */}
                  <div className="relative z-30 flex flex-col flex-grow px-6 pb-6 -mt-2">
                    <h3 className="text-[24px] font-bold text-gray-900 mb-2 tracking-wide !font-EireneSansRegular">
                      {activeOrbitItem.title}
                    </h3>

                    <p className="text-gray-600 text-[14px] leading-[1.6] !font-EireneSansRegular mb-4">
                      {activeOrbitItem.text}
                    </p>

                    {/* Mock Chips mimicking the picture but in light mode */}
                    <div className="flex items-center gap-2 mb-6 mt-auto">
                      <div className="flex items-center gap-1.5 bg-gray-100 text-gray-800 text-[12px] font-medium px-3 py-1.5 rounded-full border border-gray-200/60">
                        <svg
                          className="w-3 h-3 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>Top Rated</span>
                      </div>
                      <div className="bg-gray-100 text-gray-800 text-[12px] font-medium px-3 py-1.5 rounded-full border border-gray-200/60">
                        High Efficiency
                      </div>
                    </div>

                    <button className="w-full bg-gray-900 text-white px-6 py-3.5 rounded-full font-semibold text-[15px] tracking-wide hover:bg-[#BB2929] transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                      Enquire Details
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center lg:text-left opacity-60 max-w-md mx-auto lg:mx-0 p-8"
                >
                  <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 text-gray-300">
                    <FaCogs className="w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-600 mb-3 !font-KuraleRegular">
                    Interactive Showcase
                  </h3>
                  <p className="text-gray-500 text-lg !font-EireneSansRegular">
                    Hover over the orbital features to quickly explore machine
                    capabilities, specifications, and efficiency metrics in
                    detail.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnusQualityEfficiency;
