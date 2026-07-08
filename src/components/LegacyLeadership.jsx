import React from "react";
import leftImage from "../assets/images/Leadership/16.jpg";
import rightImage from "../assets/images/Leadership/17.jpg";

const LegacyLeadership = () => {
  return (
    <section className="w-full bg-white text-black">
      {/* Top Heading */}
      <div className="max-w-[1400px] mx-auto px-10 pt-16 pb-6">
        <p className="text-[3vw] md:text-[2.8vw] font-semibold tracking-tight text-[#bb2929] leading-none">
          Leadership &amp; Direction
        </p>
        <p className="mt-2 text-base md:text-lg text-gray-600">
        A Renewed Focus on Industrial Growth
        </p>
      </div>

      {/* Stability & Scale Section */}
      <div className="max-w-[1400px] mx-auto px-10 py-8 md:py-12">
        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold tracking-tight text-[#bb2929] mb-6">
          STABILITY TODAY. SCALE FOR TOMORROW.
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
          Under renewed ownership and strategic leadership, Richa Industries is focused on strengthening core operations, improving productivity, and expanding responsibly across both business verticals.
        </p>
        <div className="mb-6">
          <p className="text-base md:text-lg font-semibold text-gray-800 mb-4">
            The group&apos;s roadmap prioritises:
          </p>
          <ol className="space-y-3 max-w-3xl">
            <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
              <span className="text-[#bb2929] font-bold mt-0.5">1.</span>
              <span>Operational stability and discipline</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
              <span className="text-[#bb2929] font-bold mt-0.5">2.</span>
              <span>Measured capacity utilisation improvement</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
              <span className="text-[#bb2929] font-bold mt-0.5">3.</span>
              <span>Long-term partnerships over transactional growth</span>
            </li>
            <li className="flex items-start gap-3 text-base md:text-lg text-gray-700">
              <span className="text-[#bb2929] font-bold mt-0.5">4.</span>
              <span>Sustainable and compliant manufacturing</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Split Banner */}
      <div className="relative w-full">
        <div className="w-full pb-16">
          <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden flex flex-col md:flex-row">
            {/* LEFT PANEL */}
            <div className="relative w-full md:w-1/2 h-full overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage:
                    `url(${leftImage})`,
                }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end px-8 pb-10 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Establishing a foundation of success
                </h3>
                <button className="group mt-2 inline-flex items-center gap-2 text-sm md:text-base font-medium">
                  <span className="border-b border-white/70 pb-0.5 group-hover:border-white">
                    Click to Read More
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 group-hover:border-white">
                    +
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative w-full md:w-1/2 h-full overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage:
                    `url(${rightImage})`,
                }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end px-8 pb-10 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Chairman&apos;s vision for the future
                </h3>
                <p className="mb-3 max-w-[90%] text-sm md:text-base text-white/90">
                  A perspective on growth, innovation, and responsibility that
                  defines our leadership.
                </p>
                <button className="group mt-1 inline-flex items-center gap-2 text-sm md:text-base font-medium">
                  <span className="border-b border-white/70 pb-0.5 group-hover:border-white">
                    Click to Read More
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 group-hover:border-white">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default LegacyLeadership;


