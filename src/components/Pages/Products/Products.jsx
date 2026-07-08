import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

// Importing available machine images (using PNGs for transparent background if possible)
import flowrapMachine from "../../../assets/Flowrap/flowrap-packing-machine.png";
import rotaryMachine from "../../../assets/Flowrap/rottary-Machine-removebg.png";
import snusMachine from "../../../assets/Flowrap/Snus-Packaging-Machine.png";
import screwConveyor from "../../../assets/Flowrap/Screw Conveyor and System.png";
// Fallbacks
import heroFlowrap from "../../../assets/images/heroSection/flowrap-packing-machine.jpg";
import heroRotary from "../../../assets/images/heroSection/rotary-pick-fill-seal-machine.jpg";

const Products = () => {
  const [shuffleOffset, setShuffleOffset] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setShuffleOffset((prev) => (prev + 1) % 3);
    }, 2500); // Shuffle every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#E5E5E5] font-NueueMontreal">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center mt-[4rem] sm:mt-[5rem]">
        {/* Background Image */}
        <img
          src={heroRotary}
          alt="Machinery Showcase"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85]"
        />
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Content Box - Flush to left on small screens, container-aligned on large screens */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-0 md:px-8 lg:px-16 flex items-center py-10 md:py-0">
          <div className="bg-[#1f2b3e]/90 p-8 sm:p-10 md:p-12 lg:p-16 w-full md:max-w-[700px] lg:max-w-[850px] shadow-2xl md:backdrop-blur-sm">
            <div className="flex flex-col gap-4 md:gap-5">
              <div className="flex items-center gap-4">
                <span className="text-white font-medium text-xs sm:text-sm tracking-[0.2em] font-sans uppercase">
                  Explore all machines
                </span>
                <div className="h-[1px] w-12 sm:w-24 bg-white/40 hidden sm:block"></div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.2] tracking-tight">
                Explore All Machines & Solutions by Kaveri Industries
              </h1>

              <p className="text-white/85 text-sm sm:text-base lg:text-lg font-light leading-relaxed mt-2 text-justify sm:text-left">
                Discover Kaveri Industries full portfolio of advanced packing
                machines, production equipment, turnkey lines and accessories -
                engineered for Tobacco, Snus, Nicotine, Food & Beverages,
                Pharma, Cosmetics, Industrial Goods and more. Built with
                precision, automation and industry-leading technology, our
                machines deliver maximum productivity, accuracy and long-term
                reliability for every manufacturing environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-16 pb-8 md:pt-24 md:pb-8 px-4 md:px-8 lg:px-16 flex justify-center items-center">
        <div className="max-w-[1400px] w-full">
          {/* Section Heading */}
          <div className="flex flex-col items-center justify-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl !font-KuraleRegular text-neutral-800 tracking-tight text-center">
              Our Products
            </h2>
            <div className="w-20 h-1 bg-[#BB2929] mt-4 sm:mt-5 rounded-full"></div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[minmax(200px,280px)] xl:auto-rows-[300px]">
            {/* Card 1 - Small Top Left */}
            <div className="relative group col-span-1 row-span-1 rounded-2xl bg-gradient-to-br from-[#f1f1f1] to-[#b3b3b3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <Link to="/flowrap-machine" className="block w-full h-full">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img
                    src={flowrapMachine || heroFlowrap}
                    alt="Flowrap Machine"
                    className="max-h-full max-w-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-NueueMontreal font-medium text-lg lg:text-xl drop-shadow-md flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  Flowrap Machine <FiArrowUpRight className="text-xl" />
                </div>
              </Link>
            </div>

            {/* Card 2 - Large Top Middle */}
            <div className="relative group md:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#f1f1f1] to-[#b3b3b3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <Link to="/rotary-machine" className="block w-full h-full">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img
                    src={rotaryMachine || heroRotary}
                    alt="Rotary Pick Fill Seal Machine"
                    className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500 scale-[1.15]"
                  />
                </div>
                <div className="absolute bottom-5 left-6 text-white font-NueueMontreal font-medium text-xl lg:text-2xl drop-shadow-md flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  Rotary Packaging Machine{" "}
                  <FiArrowUpRight className="text-2xl" />
                </div>
              </Link>
            </div>

            {/* Card 3 - Tall Top Right */}
            <div className="relative group col-span-1 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#f1f1f1] to-[#b3b3b3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <Link to="/snus-packing-machine" className="block w-full h-full">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img
                    src={snusMachine}
                    alt="Snus Packaging Machine"
                    className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                </div>
                <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white font-NueueMontreal font-medium text-lg lg:text-xl drop-shadow-md flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity z-10">
                  Snus Machine <FiArrowUpRight className="text-xl" />
                </div>
              </Link>
            </div>

            {/* Card 4 - Tall Bottom Left */}
            <div className="relative group col-span-1 md:row-span-2 rounded-2xl bg-gradient-to-br from-[#f1f1f1] to-[#b3b3b3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="block w-full h-full">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img
                    src={screwConveyor}
                    alt="Cartoning Machine Solutions"
                    className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-NueueMontreal font-medium text-lg lg:text-xl drop-shadow-md flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  Screw Conveyors <FiArrowUpRight className="text-xl" />
                </div>
              </div>
            </div>

            {/* Card 5 - Wide Bottom Middle */}
            <div className="relative group col-span-1 md:col-span-2 md:row-span-1 rounded-2xl bg-gradient-to-br from-[#f1f1f1] to-[#b3b3b3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-center bg-no-repeat bg-cover">
              <div className="block w-full h-full">
                <div className="w-full h-full flex items-center justify-around p-4 md:p-8">
                  <img
                    src={heroFlowrap}
                    alt="Wrapping Solutions"
                    className="h-[120%] object-cover opacity-80 mix-blend-multiply absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-500 w-full"
                  />
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <div className="relative z-20 w-full h-full flex flex-col justify-end">
                    <div className="text-white font-NueueMontreal font-medium text-xl lg:text-2xl drop-shadow-md flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                      Complete Integration Lines{" "}
                      <FiArrowUpRight className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Small Bottom Right */}
            <div className="relative group col-span-1 md:row-span-1 rounded-2xl bg-gradient-to-br from-[#f1f1f1] to-[#b3b3b3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <Link to="/products" className="block w-full h-full">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img
                    src={rotaryMachine}
                    alt="Custom Machinery"
                    className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 opacity-50 mix-blend-multiply"
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-white font-NueueMontreal font-medium text-lg lg:text-xl drop-shadow-md flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  Ancillary Equipments <FiArrowUpRight className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="w-full pt-4 pb-16 md:pt-6 md:pb-24 px-4 md:px-8 lg:px-16 flex justify-center items-center bg-[#E5E5E5]">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Floating Machine Cards */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center my-8 lg:my-0 lg:ml-4 perspective-1000">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-neutral-300/50 rounded-full blur-[60px] z-0"></div>

            {/* Dynamic Shuffling Cards */}
            {[
              {
                id: 1,
                title: "Flowrap Line",
                image: flowrapMachine,
                basePos: 2, // Starts Left
              },
              {
                id: 2,
                title: "Conveyor Sys",
                image: screwConveyor,
                basePos: 1, // Starts Right
              },
              {
                id: 3,
                title: "Snus Pack",
                image: snusMachine,
                basePos: 0, // Starts Center
              },
            ].map((card) => {
              const currentPos = (card.basePos + shuffleOffset) % 3;

              // 0 = Center
              // 1 = Right
              // 2 = Left

              const isCenter = currentPos === 0;

              let posClasses = "";
              if (currentPos === 0) {
                posClasses =
                  "w-[55%] sm:w-[48%] min-h-[200px] sm:min-h-[280px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] translate-y-[15%] z-30 border-2 border-white scale-100";
              } else if (currentPos === 1) {
                posClasses =
                  "w-[50%] sm:w-[45%] min-h-[180px] sm:min-h-[240px] shadow-xl translate-x-[40%] -translate-y-[5%] rotate-[15deg] z-20 border border-neutral-100 scale-95 opacity-95";
              } else {
                posClasses =
                  "w-[50%] sm:w-[45%] min-h-[180px] sm:min-h-[240px] shadow-xl -translate-x-[40%] -translate-y-[18%] -rotate-[12deg] z-10 border border-neutral-100 scale-95 opacity-95";
              }

              return (
                <div
                  key={card.id}
                  className={`absolute bg-white rounded-2xl p-4 sm:p-6 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center hover:scale-[1.05] cursor-pointer ${posClasses}`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`${isCenter ? "max-h-[120px] sm:max-h-[170px] drop-shadow-xl" : "max-h-[100px] sm:max-h-[140px] drop-shadow-md"} object-contain transition-all duration-1000`}
                  />
                  <div
                    className={`mt-4 sm:mt-6 h-1 rounded-full transition-all duration-1000 ${isCenter ? "w-16 bg-[#BB2929]" : "w-12 bg-[#BB2929]/20"}`}
                  ></div>
                  <p
                    className={`mt-2 font-NueueMontreal text-center tracking-wide uppercase transition-all duration-1000 ${isCenter ? "text-sm sm:text-base font-bold text-black" : "text-xs sm:text-sm font-semibold text-neutral-800"}`}
                  >
                    {card.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-0 lg:pr-12">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] !font-KuraleRegular text-neutral-800 mb-6 font-sans tracking-tight">
              Why Choose Kaveri Industries?
            </h2>
            <p className="text-neutral-600 text-sm md:text-base font-EireneSansRegular leading-[1.8] font-light mb-10 text-justify sm:text-left">
              Transform your ideas into tangible results with Kaveri Industries
              machinery. Whether you&apos;re starting with a conceptual layout
              on a napkin or diving into a comprehensive manufacturing facility
              upgrade, our packing machines are engineered to help you produce
              with confidence.
            </p>

            <div className="flex flex-col gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#BB2929"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#BB2929]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 9 10 15 7.5 12.5"></polyline>
                  </svg>
                </div>
                <p className="text-neutral-700 text-sm md:text-base font-NueueMontreal font-medium pt-[2px]">
                  Robust and reliable machines for long-lasting performance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#BB2929"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#BB2929]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 9 10 15 7.5 12.5"></polyline>
                  </svg>
                </div>
                <p className="text-neutral-700 text-sm md:text-base font-NueueMontreal font-medium pt-[2px]">
                  Innovative solutions tailored to modern packaging needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#BB2929"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#BB2929]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 9 10 15 7.5 12.5"></polyline>
                  </svg>
                </div>
                <p className="text-neutral-700 text-sm md:text-base font-NueueMontreal font-medium pt-[2px]">
                  Customer support dedicated to your project&apos;s success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
