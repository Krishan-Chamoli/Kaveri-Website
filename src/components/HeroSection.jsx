import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
function HeroSection() {

  // Different text arrays for each image
  const texts = [
    ["Kaveri", "Industries", ], // Image 1
  ];


  // Use first text array since we're not cycling through images anymore
  const currentTexts = texts[0];

  return (
    <div
      id="hero-section"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/32062725/" type="video/mp4" />
          {/* Add additional source formats if needed */}
          {/* <source src="/path/to/your/video.webm" type="video/webm" /> */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 "></div>
      </div>


      {/* Content on top */}
      <div className="relative z-10 container w-full min-h-screen flex flex-col justify-between">
        <div className="textstructure py-[10vh] mt-20 md:mt-28 px-4 md:px-0">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
          >
            {currentTexts.map((item, index) => (
              <div key={index} className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "16vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                        delay: 0.3,
                      }}
                      className="w-[8vw] h-[5vh] sm:h-[6vh] sm:w-[4vw] sm:mt-5 mr-3 md:mr-5 rounded-md bg-[#bb2929]"
                    ></motion.div>
                  )}
                  <h1 className=" font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[10vw]  text-[13vw] uppercase whitespace-nowrap leading-[0.9] sm:leading-none h-full">
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </motion.div>
          {/* </AnimatePresence> */}
        </div>
      </div>

      {/* Full width bottom section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between border-t-[1px] border-zinc-800/50 py-4 md:py-5 font-NueueMontreal backdrop-blur-sm bg-black/20 px-4 sm:px-8 gap-4 md:gap-0">
        {[
          "From Vision to Global Scale",
          "Where Engineering Meets Scalable Production",
        ].map((item, index) => (
          <p
            key={index}
            className="text-sm md:text-base font-light leading-none block"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-4 self-start md:self-auto">
          <div className="rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-4 py-2 md:px-5 text-sm font-light whitespace-nowrap uppercase transition-colors hover:bg-zinc-800 hover:text-white cursor-pointer">
            Explore Our Projects
          </div>
          <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border-[1px] border-zinc-500 transition-colors hover:bg-zinc-800 hover:text-white cursor-pointer">
            <span className="rotate-45">
              <FaArrowUpLong size="0.8em" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
