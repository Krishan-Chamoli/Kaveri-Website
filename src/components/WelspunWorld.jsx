import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SlideButton from "./common/SlideButton";

const WelspunWorld = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/about-us");
  };
  // SVG Icons for stat cards
  const GlobeIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="2.5" />
      <path
        d="M4 24h40M24 4c5.5 3.5 10 9.5 10 20s-4.5 16.5-10 20c-5.5-3.5-10-9.5-10-20S18.5 7.5 24 4z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M12 8c2 4 4 8 4 12s-2 8-4 12M36 8c-2 4-4 8-4 12s2 8 4 12M12 40c2-4 4-8 4-12s-2-8-4-12M36 40c-2-4-4-8-4-12s2-8 4-12"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );

  const TeamIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="16" r="6" fill="white" />
      <circle cx="34" cy="16" r="6" fill="white" />
      <circle cx="24" cy="24" r="7" fill="white" />
      <path
        d="M8 32c0-3.5 2.5-6.5 6-6.5M40 32c0-3.5-2.5-6.5-6-6.5M16 34c0-2.5 2.5-5 8-5s8 2.5 8 5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  const GraphIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="2"
        stroke="white"
        strokeWidth="2.5"
      />
      <path
        d="M10 34L16 24L22 28L28 14L38 22"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="10" cy="34" r="2.5" fill="white" />
      <circle cx="16" cy="24" r="2.5" fill="white" />
      <circle cx="22" cy="28" r="2.5" fill="white" />
      <circle cx="28" cy="14" r="2.5" fill="white" />
      <circle cx="38" cy="22" r="2.5" fill="white" />
    </svg>
  );

  const statCards = [
    {
      icon: <GlobeIcon />,
      label: "Manufacturing Excellence",
      value: "25+ Years",
    },
    {
      icon: <TeamIcon />,
      label: "Strong team of",
      value: "350+ Employees",
    },
    {
      icon: <GraphIcon />,
      label: "Trusted Clients",
      value: "2500+",
    },
  ];

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-white py-10 md:py-20"
    >
      <div className="max-w-full mx-auto px-4 md:px-10 lg:px-16 xl:px-20">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#BB2929] font-KuraleRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-6 md:mb-10"
        >
          A Group Built on Manufacturing Discipline
        </motion.p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 lg:gap-24 mb-12 md:mb-24">
          {/* Left Side - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[1.1] md:leading-[0.95] tracking-tight">
              <span className="block">Where Experience</span>
              <span className="block">Meets</span>
              <span className="block">Execution</span>
            </h1>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6] md:leading-[1.7] mb-6 md:mb-8 font-EireneSansRegular text-justify md:text-left">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-[#c62626] leading-[1.6] md:leading-[1.7] mb-6 md:mb-8 font-EireneSansRegular text-justify md:text-left font-semibold">
                KAVERI INDUSTRIES{" "}
              </span>{" "}
              is a premium manufacturing enterprise founded with a clear intent
              to deliver reliable industrial production and engineered solutions
              to modern markets. Built on a foundation of precision, discipline,
              and forward thinking practices, the company focuses on developing
              efficient manufacturing processes that meet evolving industry
              expectations. Though in the early phase of its journey, Kaveri
              Industries is shaping its identity through professional
              standards, quality driven operations, and a commitment to
              long-term industrial growth.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6] md:leading-[1.7] mb-6 md:mb-8 font-EireneSansRegular text-justify md:text-left">
              By aligning its capabilities with emerging industrial demands,
              Kaveri Industries aims to support diverse sectors that rely
              on dependable manufacturing and scalable production systems.
            </p>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 md:mt-0"
            >
              <SlideButton
                onClick={handleExploreClick}
                className="py-3 md:py-4 tracking-[0.2em] text-xs md:text-sm lg:text-base border-[1.5px] w-full md:w-auto justify-center"
              >
                EXPLORE
              </SlideButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {statCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#BB2929] p-2 py-4 md:p-6 lg:p-7 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-5 shadow-lg w-full rounded-md md:rounded-none h-full"
            >
              <div className="flex-shrink-0 scale-75 md:scale-100 origin-center md:origin-left">
                {card.icon}
              </div>
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <p className="text-white text-[10px] sm:text-xs md:text-sm mb-1 md:mb-2 opacity-90 font-medium leading-tight md:leading-relaxed font-EireneSansRegular">
                  {card.label}
                </p>
                <p className="text-white text-xs sm:text-sm md:text-2xl lg:text-3xl font-bold leading-tight">
                  {card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelspunWorld;
