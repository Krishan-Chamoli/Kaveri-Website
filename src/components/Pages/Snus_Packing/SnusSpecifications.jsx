import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCogs, FaTachometerAlt, FaWeightHanging, FaScroll, 
  FaRulerCombined, FaArrowsAltH, FaFire, FaSyncAlt, 
  FaSatelliteDish, FaMicrochip, FaShieldAlt, FaBolt, 
  FaDesktop, FaBoxOpen, FaExpandArrowsAlt, FaSearch,
  FaChevronDown, FaChevronUp
} from "react-icons/fa";

const specsData = [
  {
    id: "machine-type",
    title: "Machine Type",
    description: "Automatic 7-Axis Servo Based Single-Track Vertical Form Fill Seal (VFFS) Nicotine Pouch Packing Machine",
    icon: <FaCogs />,
  },
  {
    id: "packing-speed",
    title: "Packing Speed",
    description: "Up to 60 cans/min line speed (with capping section); pouch speed depends on filling size and material",
    icon: <FaTachometerAlt />,
    badge: "High Speed",
  },
  {
    id: "capacity",
    title: "Capacity",
    description: "Filling volume approx. 0.3 g to 1.0 g per pouch",
    icon: <FaWeightHanging />,
  },
  {
    id: "film-type",
    title: "Film Type",
    description: "Non-woven filter paper",
    icon: <FaScroll />,
  },
  {
    id: "product-size",
    title: "Product Size Range",
    description: "Pouch Width: 11.5 mm to 17 mm; Pouch Length: 30 mm to 40 mm",
    icon: <FaRulerCombined />,
  },
  {
    id: "film-width",
    title: "Film Width",
    description: "As per pouch size and forming tube requirement (customized); reel dia max 400 mm",
    icon: <FaArrowsAltH />,
  },
  {
    id: "sealing-type",
    title: "Sealing Type",
    description: "Heat sealing, vertical form-fill-seal type",
    icon: <FaFire />,
  },
  {
    id: "film-feed",
    title: "Film Feed Type",
    description: "Servo-driven automatic film feeding system",
    icon: <FaSyncAlt />,
  },
  {
    id: "sensor-type",
    title: "Sensor Type",
    description: "Material sensor / counter sensor / photoelectric sensors (P&F Germany / Omron)",
    icon: <FaSatelliteDish />,
  },
  {
    id: "drive-system",
    title: "Drive System",
    description: "7-Axis Servo Motors with Motion Control System",
    icon: <FaMicrochip />,
    badge: "7-Axis Servo",
  },
  {
    id: "material",
    title: "Material Construction",
    description: "SS304 Stainless Steel machine body, panel and food-grade covering",
    icon: <FaShieldAlt />,
    badge: "Food Grade",
  },
  {
    id: "power",
    title: "Power Requirement",
    description: "400V, 50Hz, 3 Phase + N + E, Max 5.5 kW",
    icon: <FaBolt />,
    badge: "5.5 kW",
  },
  {
    id: "control",
    title: "Control System",
    description: "PLC + HMI Touch Screen (Omron / Mitsubishi Japan)",
    icon: <FaDesktop />,
  },
  {
    id: "format",
    title: "Packaging Format",
    description: "Single-track nicotine/snus pouch sachet packing",
    icon: <FaBoxOpen />,
  },
  {
    id: "dimensions",
    title: "Machine Dimensions",
    description: "Height 2190 mm × Width 1681 mm × Depth 1260 mm",
    icon: <FaExpandArrowsAlt />,
  },
];

const SnusSpecifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredSpecs = specsData.filter(
    (spec) =>
      spec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spec.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 !font-KuraleRegular tracking-wide"
          >
            Technical Specifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto !font-EireneSansRegular leading-relaxed"
          >
            Detailed technical parameters for the Snus Packaging Machine. Search below to find specific capabilities.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-2xl mx-auto mb-10"
        >
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:shadow-[0_8px_30px_rgba(187,41,41,0.1)] focus:ring-2 focus:ring-[#BB2929]/50 focus:border-[#BB2929] outline-none transition-all duration-300 bg-white text-gray-800 !font-EireneSansRegular text-lg placeholder-gray-400"
            placeholder="Search specifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {/* Responsive Styled Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden"
        >
          {/* Desktop/Tablet Header (Sticky) */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 border-b border-gray-200 px-6 py-5 sticky top-0 z-20 shadow-sm">
            <div className="col-span-4 font-bold text-gray-900 text-lg tracking-wide uppercase !font-KuraleRegular">Specification</div>
            <div className="col-span-8 font-bold text-gray-900 text-lg tracking-wide uppercase !font-KuraleRegular">Description</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            <AnimatePresence>
              {filteredSpecs.map((spec, index) => {
                const isEven = index % 2 === 0;
                const isExpanded = expandedRows[spec.id];
                const isLong = spec.description.length > 70; // Set threshold to 70 characters for expand/collapse

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    key={spec.id}
                    className={`
                      group border-b border-gray-100 last:border-b-0
                      ${isEven ? "bg-white" : "bg-gray-50/50"}
                      hover:bg-red-50/30 transition-colors duration-300
                    `}
                  >
                    {/* Desktop/Tablet Row View */}
                    <div className="hidden md:grid grid-cols-12 gap-6 px-6 py-5 items-start cursor-pointer" onClick={() => isLong && toggleRow(spec.id)}>
                      {/* Left Column: Icon + Title */}
                      <div className="col-span-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 group-hover:bg-[#BB2929]/10 group-hover:text-[#BB2929] transition-colors duration-300 shadow-sm text-xl">
                          {spec.icon}
                        </div>
                        <h4 className="text-[17px] font-semibold text-gray-900 !font-EireneSansRegular">
                          {spec.title}
                        </h4>
                      </div>

                      {/* Right Column: Description & Badges */}
                      <div className="col-span-8 flex flex-col justify-center min-h-[48px]">
                        <div className="flex items-start justify-between gap-4">
                          <div className={`text-gray-600 text-[16px] leading-relaxed !font-EireneSansRegular relative ${!isExpanded && isLong ? "line-clamp-2" : ""}`}>
                            {spec.description}
                          </div>
                          
                          <div className="flex flex-col items-end gap-2 flex-shrink-0">
                            {spec.badge && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#BB2929]/10 text-[#BB2929] whitespace-nowrap">
                                {spec.badge}
                              </span>
                            )}
                            {isLong && (
                              <button className="text-gray-400 group-hover:text-[#BB2929] transition-colors mt-1">
                                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Row View (Card-like) */}
                    <div className="md:hidden flex flex-col p-5 gap-3 cursor-pointer" onClick={() => isLong && toggleRow(spec.id)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-[#BB2929]/10 group-hover:text-[#BB2929] transition-colors duration-300 shadow-sm text-lg">
                            {spec.icon}
                          </div>
                          <h4 className="text-[16px] font-semibold text-gray-900 !font-EireneSansRegular">
                            {spec.title}
                          </h4>
                        </div>
                        {spec.badge && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#BB2929]/10 text-[#BB2929]">
                            {spec.badge}
                          </span>
                        )}
                      </div>
                      <div className="pl-[52px]">
                        <div className={`text-gray-600 text-[14px] leading-relaxed !font-EireneSansRegular ${!isExpanded && isLong ? "line-clamp-2" : ""}`}>
                          {spec.description}
                        </div>
                        {isLong && (
                          <button className="text-[#BB2929] text-xs font-medium mt-2 flex items-center gap-1">
                            {isExpanded ? "Show Less" : "Read More"} {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredSpecs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6 text-gray-400 text-3xl">
                  <FaSearch />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 !font-KuraleRegular">No specifications found</h3>
                <p className="text-gray-500 text-lg !font-EireneSansRegular">We couldn't find anything matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SnusSpecifications;
