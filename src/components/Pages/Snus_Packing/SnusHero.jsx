import React from "react";
import carDash from "../../../assets/Snus/snus_machine1.jpeg";

const SnusHero = () => {
  const hero = {
    bgImage: carDash,
  };

  return (
    <section
      id="hero"
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="relative w-full min-h-[40vh] md:min-h-screen overflow-hidden bg-black mt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {hero.bgImage && (
          <img
            src={hero.bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container w-full min-h-[40vh] md:min-h-screen flex flex-row items-center justify-between px-2 md:px-0">
        <div className="w-full text-center">
          {/* Title omitted intentionally per user desire for snus packing currently */}
        </div>
      </div>
    </section>
  );
};

export default SnusHero;
