import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import pebImage from "../assets/images/featureSection/PEB.jpg";
import textileImage from "../assets/images/featureSection/TEXTILE.jpg";
import SlideButton from "./common/SlideButton";

function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
    <div className="container w-full sm:pt-20 pt-10 bg-white">
      <div className="w-full border-b-[2px] border-[#bb2929] pb-5">
        <h1 className="text-4xl sm:text-6xl text-black font-KuraleRegular ">Our Businesses</h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide text-black font-EireneSansRegular">
            <span className="w-2 h-2 bg-[#bb2929] rounded-full"></span>
            PEB - Pre Engineering Building
          </h1>
          <h1 className="absolute text-[#fbeb45] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl !font-KuraleRegular leading-none tracking-tighter">
            {"PEB".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block font-KuraleRegular"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src={pebImage}
              alt="PEB"
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide text-black font-EireneSansRegular">
            <span className="w-2 h-2 bg-[#bb2929] rounded-full"></span> TEXTILE - Textile Industry
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#fbeb45] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl !font-KuraleRegular leading-none tracking-tighter">
            {"TEXTILE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block font-KuraleRegular"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src={textileImage}
              alt="TEXTILE"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center mt-10">
        <SlideButton className="py-4 tracking-[0.2em] text-sm md:text-base border-[1.5px]">
          SEE ALL PROJECTS
        </SlideButton>
      </div>
    </div>
  );
}

export default Featured;
