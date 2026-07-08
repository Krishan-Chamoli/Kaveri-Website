import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MachineLayout = ({ data }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [activeHotspots, setActiveHotspots] = useState([]);

  const toggleHotspot = (id) => {
    setActiveHotspots((prev) =>
      prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id],
    );
  };

  // Destructure data
  const {
    hero = {},
    details = {},
    quality = {},
    capabilities = {},
  } = data || {};

  return (
    <div id="machine-page" className="w-full bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="relative w-full min-h-[40vh] md:min-h-screen overflow-hidden bg-black mt-16"
      >
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          {hero.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={hero.video} type="video/mp4" />
            </video>
          ) : hero.bgImage ? (
            <img
              src={hero.bgImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null}
        </div>

        {/* Content */}
        <div className="relative z-10 container w-full min-h-[40vh] md:min-h-screen flex flex-row items-center justify-between px-2 md:px-0">
          {/* Left Side Text */}
          {(hero.title1 || hero.title2) && (
            <div className="textstructure w-1/2 md:py-[10vh] flex flex-col justify-center z-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                }}
              >
                {hero.title1 && (
                  <div className="masker">
                    <div className="w-fit flex items-center overflow-hidden">
                      <h1 className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[8vw] text-[7vw] uppercase whitespace-nowrap leading-none h-full text-black mix-blend-difference">
                        {hero.title1}
                      </h1>
                    </div>
                  </div>
                )}
                {hero.title2 && (
                  <div className="masker">
                    <div className="w-fit flex items-center overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "8vw" }}
                        transition={{
                          ease: [0.76, 0, 0.24, 1],
                          duration: 1,
                          delay: 2.3,
                        }}
                        className="w-[5vw] h-[3vh] sm:h-[6vh] sm:w-[4vw] mt-2 sm:mt-5 mr-2 sm:mr-5 rounded-md bg-[#bb2929]"
                      ></motion.div>
                      <h1 className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[8vw] text-[7vw] uppercase whitespace-nowrap leading-none h-full text-black mix-blend-difference">
                        {hero.title2}
                      </h1>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}

          {/* Right Side Image */}
          {hero.image && (
            <div className="w-1/2 flex justify-end items-center z-20">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 1.5,
                  delay: 2.5,
                }}
                className="w-full max-w-5xl"
              >
                <img
                  src={hero.image}
                  alt="Machine"
                  className="w-full h-auto object-contain drop-shadow-2xl max-h-[50vh] md:max-h-none"
                />
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Advance Packaging Technology Section */}
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
          <div className="relative w-full mt-12 md:mt-24 flex justify-center">
            {/* Reduced max-width limits to make the main machine image more compact. */}
            <div className="relative w-fit max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto">
              {details.image || hero.image ? (
                <img
                  src={details.image || hero.image}
                  alt="Machine Hotspots Reference"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              ) : (
                <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
              )}

              {/* Dynamically Map Hotspots from details.hotspots array */}
              {(details.hotspots || []).map((hotspot, index) => {
                const id = index + 1;

                // Position mappings based on the specific 'position' passed down from the machine data
                const positionStyles = {
                  "top-right":
                    "top-[18%] right-[10%] md:top-[15%] md:right-[12%]",
                  "top-left": "top-[32%] left-[12%] md:top-[28%] md:left-[15%]",
                  "bottom-right":
                    "top-[62%] right-[15%] md:top-[60%] md:right-[18%]",
                  "bottom-left":
                    "bottom-[18%] left-[15%] md:bottom-[22%] md:left-[18%]",
                };

                const containerClass =
                  positionStyles[hotspot.position] ||
                  positionStyles["top-right"];

                return (
                  <div key={id} className={`absolute ${containerClass}`}>
                    <div
                      className="relative flex items-center justify-center group cursor-pointer"
                      onClick={() => toggleHotspot(id)}
                    >
                      {/* Faint Outer Ring */}
                      <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full border-[1.5px] border-red-600/30 transition-transform duration-300 group-hover:scale-110"></div>
                      {/* Inner Red Button */}
                      <button className="relative z-10 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-red-600 rounded-full shadow-[0_4px_10px_rgba(220,38,38,0.4)] transition-transform duration-300 group-hover:scale-105 group-hover:bg-red-700">
                        <motion.svg
                          animate={{
                            rotate: activeHotspots.includes(id) ? 45 : 0,
                          }}
                          className="w-3.5 h-3.5 md:w-4 md:h-4 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </motion.svg>
                      </button>

                      {/* Animation Container */}
                      <div className="absolute top-1/2 left-1/2 pointer-events-none z-0">
                        <AnimatePresence>
                          {activeHotspots.includes(id) && (
                            <>
                              {/* --- Animations for TOP RIGHT --- */}
                              {hotspot.position === "top-right" && (
                                <>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 90 }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[-1px] left-0 h-[2px] bg-red-600 origin-left"
                                  />
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 60 }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    className="absolute left-[90px] bottom-0 w-[2px] bg-red-600 origin-bottom"
                                  />
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                    className="absolute left-[87px] top-[-64px] w-2 h-2 bg-red-600 rounded-full"
                                  />
                                  <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                    className="absolute left-[90px] bottom-[68px] -translate-x-1/2 whitespace-nowrap text-red-600 font-bold text-xs md:text-sm tracking-wide text-left"
                                  >
                                    {Array.isArray(hotspot.label) ? (
                                      <div className="flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm p-3 rounded-md shadow-sm border border-red-100">
                                        {hotspot.label.map((line, i) => (
                                          <div
                                            key={i}
                                            className="flex items-center gap-2"
                                          >
                                            <svg
                                              className="w-4 h-4 shrink-0 text-red-600"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="3"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className="normal-case">
                                              {line}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      hotspot.label
                                    )}
                                  </motion.div>
                                </>
                              )}

                              {/* --- Animations for TOP LEFT --- */}
                              {hotspot.position === "top-left" && (
                                <>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 90 }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[-1px] right-0 h-[2px] bg-red-600 origin-right"
                                  />
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 60 }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    className="absolute right-[90px] bottom-0 w-[2px] bg-red-600 origin-bottom"
                                  />
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                    className="absolute right-[87px] top-[-64px] w-2 h-2 bg-red-600 rounded-full"
                                  />
                                  <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                    className="absolute right-[90px] bottom-[68px] translate-x-1/2 whitespace-nowrap text-red-600 font-bold text-xs md:text-sm tracking-wide text-left"
                                  >
                                    {Array.isArray(hotspot.label) ? (
                                      <div className="flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm p-3 rounded-md shadow-sm border border-red-100">
                                        {hotspot.label.map((line, i) => (
                                          <div
                                            key={i}
                                            className="flex items-center gap-2"
                                          >
                                            <svg
                                              className="w-4 h-4 shrink-0 text-red-600"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="3"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className="normal-case">
                                              {line}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      hotspot.label
                                    )}
                                  </motion.div>
                                </>
                              )}

                              {/* --- Animations for BOTTOM RIGHT --- */}
                              {hotspot.position === "bottom-right" && (
                                <>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 90 }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[-1px] left-0 h-[2px] bg-red-600 origin-left"
                                  />
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 60 }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    className="absolute left-[90px] top-[-1px] w-[2px] bg-red-600 origin-top"
                                  />
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                    className="absolute left-[87px] top-[55px] w-2 h-2 bg-red-600 rounded-full"
                                  />
                                  <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                    className="absolute left-[90px] top-[65px] -translate-x-1/2 whitespace-nowrap text-red-600 font-bold text-xs md:text-sm tracking-wide text-left"
                                  >
                                    {Array.isArray(hotspot.label) ? (
                                      <div className="flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm p-3 rounded-md shadow-sm border border-red-100">
                                        {hotspot.label.map((line, i) => (
                                          <div
                                            key={i}
                                            className="flex items-center gap-2"
                                          >
                                            <svg
                                              className="w-4 h-4 shrink-0 text-red-600"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="3"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className="normal-case">
                                              {line}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      hotspot.label
                                    )}
                                  </motion.div>
                                </>
                              )}

                              {/* --- Animations for BOTTOM LEFT --- */}
                              {hotspot.position === "bottom-left" && (
                                <>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 90 }}
                                    exit={{ width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[-1px] right-0 h-[2px] bg-red-600 origin-right"
                                  />
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    className="absolute right-[86px] top-[-4px] w-2 h-2 bg-red-600 rounded-full"
                                  />
                                  <motion.div
                                    initial={{ opacity: 0, x: 5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 5 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                    className="absolute right-[100px] top-[-7px] whitespace-nowrap text-red-600 font-bold text-xs md:text-sm tracking-wide text-left"
                                  >
                                    {Array.isArray(hotspot.label) ? (
                                      <div className="flex flex-col gap-1.5 bg-white/80 backdrop-blur-sm p-3 rounded-md shadow-sm border border-red-100 transform -translate-y-1/2 mt-1">
                                        {hotspot.label.map((line, i) => (
                                          <div
                                            key={i}
                                            className="flex items-center gap-2"
                                          >
                                            <svg
                                              className="w-4 h-4 shrink-0 text-red-600"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="3"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className="normal-case">
                                              {line}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      hotspot.label
                                    )}
                                  </motion.div>
                                </>
                              )}
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality and Efficiency Section */}
      <section className="w-full bg-white/20 pt-4 pb-8 md:pt-10 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10 md:mb-20">
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
              className="text-xl text-red-600 font-light"
            >
              {quality.subtitle}
            </motion.p>
          </div>

          {/* Diagram Container - Desktop */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[600px] hidden md:block">
            {/* Central SVG Diagram */}
            <div
              className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
              style={{
                width: quality.diagramSize || 500,
                height: quality.diagramSize || 500,
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <img
                  src={quality.diagramImage}
                  className="w-full h-full object-contain"
                  alt="Quality Cycle"
                />
              </motion.div>
            </div>

            {quality.points &&
              quality.points.map((point, idx) => {
                // Define positions based on index
                const positions = [
                  "top-0 left-[40%] text-center -translate-x-1/2", // Top
                  "top-[30%] right-0 text-left", // Right
                  "bottom-[10%] right-10 text-left", // Bottom Right
                  "bottom-[10%] left-10 text-right", // Bottom Left
                  "top-[30%] left-0 text-right", // Left
                ];

                // Animations
                const initialStates = [
                  { y: -20, opacity: 0 },
                  { x: 20, opacity: 0 },
                  { x: 20, opacity: 0 },
                  { x: -20, opacity: 0 },
                  { x: -20, opacity: 0 },
                ];

                return (
                  <motion.div
                    key={idx}
                    initial={initialStates[idx]}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className={`absolute w-72 ${positions[idx] || ""}`}
                  >
                    <h3 className="text-2xl text-[#c62726] font-bold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600">{point.text}</p>
                  </motion.div>
                );
              })}
          </div>

          {/* Mobile View (Stacked Cards) */}
          <div className="md:hidden flex flex-wrap justify-center gap-2 mt-10">
            {quality.points &&
              quality.points.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[32%] flex flex-col items-center text-center p-2 bg-white rounded-lg shadow-sm border border-gray-100 min-h-[120px]"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs mb-2 shadow-md bg-transparent`}
                  >
                    <div
                      className="p-2 rounded-full flex items-center justify-center w-full h-full"
                      style={{ backgroundColor: item.color || "#000" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-[10px] font-bold mb-1 leading-tight text-[#c62726]">
                    {item.title}
                  </h3>
                  <p className="text-black text-[8px] leading-tight block">
                    {item.text}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
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

        {/* Patterns */}
        <div
          className="absolute top-0 left-0 w-48 h-48 opacity-20 z-10"
          style={{
            backgroundImage: "radial-gradient(#a3a3a3 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 opacity-20 z-10"
          style={{
            backgroundImage: "radial-gradient(#a3a3a3 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

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
            {capabilities.items &&
              capabilities.items.map((item, index) => (
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
    </div>
  );
};

export default MachineLayout;
