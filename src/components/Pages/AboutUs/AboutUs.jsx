import { useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../../assets/videos/aboutUs.mp4";
import leaderImage from "../../../assets/images/Leadership/Narender_Sir.png";
import aboutUsImage from "../../../assets/images/Leadership/17.jpg";
import visionBg from "../../../assets/images/vision.jpg";
import visionFg from "../../../assets/images/vision2.jpg";
import missionBg from "../../../assets/images/mission.jpg";
import missionFg from "../../../assets/images/mission2.jpg";
import { BiCheckDouble } from "react-icons/bi";

const AboutUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-us-page" className="w-full bg-white">

      {/* Hero Section */}
      <section
        id="about-hero"
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.3"
        className="relative w-full min-h-screen overflow-hidden bg-black"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container w-full min-h-screen flex flex-col justify-center">
          <div className="textstructure py-[10vh] mt-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
            >
              <div className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  <h1 className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[10vw] text-[13vw] uppercase whitespace-nowrap leading-none h-full text-white">
                    About
                  </h1>
                </div>
              </div>
              <div className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "16vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      delay: 0.3,
                    }}
                    className="w-[8vw] h-[5vh] sm:h-[6vh] sm:w-[4vw] sm:mt-5 mr-5 rounded-md bg-[#bb2929]"
                  ></motion.div>
                  <h1 className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[8vw] sm:text-[10vw] text-[13vw] uppercase whitespace-nowrap leading-none h-full text-white">
                    Us
                  </h1>
                </div>
              </div>
              <div className="masker">
                <div className="w-fit flex items-center overflow-hidden mt-4">
                  <h2 className="font-KuraleRegular text-[#ffffff] text-3xl md:text-5xl  tracking-wide">
                    Kaveri Industries
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-20 md:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-[#BB2929] font-EireneSansRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-6">
              Engineering Excellence Since 1995
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-KuraleRegular text-black leading-tight mb-8">
              At Kaveri Industries, we believe real growth isn't just about what we
              build it's about the people we build it with.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg lg:text-xl text-black leading-[1.8] font-EireneSansRegular">
              For over three decades, we've been driven by a simple truth: true
              success comes from trust, teamwork, and relentless innovation. From
              our humble beginnings in Faridabad, Haryana, we've grown into a
              trusted name in high-performance packaging machinery, delivering
              solutions that empower industries and inspire progress.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-black leading-[1.8] font-EireneSansRegular">
              We're proud of how far we've come from pioneering advanced rotary
              packing machines to serving leading brands in the food, beverage,
              and FMCG sectors across India and beyond. But we're even more
              excited about where we're going together. With the unwavering
              support of our partners, the dedication of our skilled teams, and the
              strength of the communities we serve, we're ready to keep moving
              forward creating lasting value for everyone along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-20 md:py-32 border-t border-neutral-200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-KuraleRegular text-[#bb2929] leading-tight mb-4">
              Our Legacy of Precision & Innovation
            </h2>
            <div className="w-24 h-1 bg-[#bb2929] mb-8"></div>
            <p className="text-[#BB2929] font-EireneSansRegular text-sm md:text-base font-semibold uppercase tracking-[0.15em]">
              Established in 1995, Kaveri Industries has built its reputation on
              engineering excellence and uncompromising quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-KuraleRegular text-black mb-6 leading-tight">
                State-of-the-art Facility & Specializations
              </h3>
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                Our facility in Sikri Industrial Area, Ballabhgarh (spanning 4
                acres) is equipped with cutting edge fabrication, CNC machining,
                automated assembly lines, and rigorous testing setups. We
                specialize in:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <ul className="list-disc pl-6 text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                <li>High-speed rotary packing machines for granular and tobacco products</li>
                <li>Form fill seal systems</li>
                <li>Pouch packing and sealing solutions</li>
                <li>Fully customized packaging machinery</li>
              </ul>
              <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
                Every machine we produce is engineered for speed, efficiency,
                minimal downtime, and international precision standards helping our
                clients maximize output while reducing waste and operational
                costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="relative w-full h-auto md:h-[90vh] mx-auto overflow-hidden flex items-center justify-center mt-10 md:mt-20 mb-12 py-12 md:py-0"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutUsImage}
            alt="Leadership Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-KuraleRegular text-white leading-tight mb-2">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#bb2929] mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group w-[60%] sm:w-[50%] lg:w-[70%] mx-auto lg:mx-0"
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm relative z-10 max-h-[60vh]">
                <img
                  src={leaderImage}
                  alt="Mr. Narendra Kumar Srivastava"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative borders matching the theme */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#bb2929]/30 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#bb2929] z-20"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-KuraleRegular text-white mb-2 leading-tight">
                  Mr. Narendra Kumar Srivastava
                </h3>
                <p className="text-red-300 font-KuraleRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em]">
                  Visionary Industrialist
                </p>
              </div>

              <div className="space-y-4 text-neutral-300 font-EireneSansRegular text-sm md:text-base leading-[1.6]">
                <p>
                  Guiding Kaveri Industries is Mr. Narendra Kumar Srivastava, a
                  visionary industrialist, strategic investor, and industrial
                  revivalist with over 35 years of proven leadership across
                  manufacturing, engineering, packaging, and allied sectors.
                </p>
                <p>
                  Mr. Srivastava is renowned for his strategic acumen in reviving
                  distressed assets and transforming them into profitable,
                  debt-free, and sustainable enterprises that generate
                  large-scale employment and contribute to India's industrial
                  ecosystem. His approach is rooted in conviction, consistency,
                  and courage, a promise to restore value where others saw
                  decline.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white pt-10 md:pt-20 pb-20 md:pb-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-2 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              {/* Back Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-[2rem] overflow-hidden">
                <img
                  src={visionBg}
                  alt="Blueprints and Plans"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Front Image */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden border-[12px] border-white shadow-xl">
                <img
                  src={visionFg}
                  alt="Engineers at Site"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-KuraleRegular text-[#bb2929] mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-EireneSansRegular">
                To be a global leader in innovative engineering solutions,
                delivering excellence through quality, sustainability, and value
                creation. We aim to continuously innovate, refine our
                manufacturing practices, and empower our workforce to forge
                enduring partnerships with clients and stakeholders.
              </p>
              <div className="space-y-4">
                {[
                  "Fostering Sustainable Growth and Green Development",
                  "Innovating for a Sustainable Future",
                  "Customer-Centric Approach",
                  "Building Stronger Communities",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <BiCheckDouble className="text-[#bb2929] text-2xl mt-1 shrink-0" />
                    <span className="text-gray-700 font-medium font-EireneSansRegular text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-20 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-KuraleRegular text-[#bb2929] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-EireneSansRegular">
                To continuously innovate, refine our manufacturing practices,
                empower our workforce through training, safety, and growth
                opportunities, and forge enduring partnerships with clients and
                stakeholders, always upholding the trust society places in us.
              </p>
              <div className="space-y-4">
                {[
                  "Refining Manufacturing Practices",
                  "Empowering Workforce Growth",
                  "Forging Enduring Partnerships",
                  "Upholding Societal Trust",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <BiCheckDouble className="text-[#bb2929] text-2xl mt-1 shrink-0" />
                    <span className="text-gray-700 font-medium font-EireneSansRegular text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              {/* Back Image */}
              <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2rem] overflow-hidden">
                <img
                  src={missionBg}
                  alt="Sustainable Factory"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Front Image */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden border-[12px] border-white shadow-xl">
                <img
                  src={missionFg}
                  alt="Partnership Handshake"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Sustainability Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-20 md:py-32 border-t border-neutral-200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-KuraleRegular text-[#bb2929] leading-tight mb-4">
              Committed to Sustainability & People
            </h2>
            <div className="w-24 h-1 bg-[#bb2929] mb-8"></div>
          </motion.div>
          <div className="space-y-6">
            <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
              Sustainability is embedded in everything we do. We minimise
              environmental impact through resource-efficient processes,
              responsible waste management, energy conservation, green belt
              development, and rainwater harvesting.
            </p>
            <p className="text-base md:text-lg text-black leading-[1.8] font-EireneSansRegular">
              We prioritise our people with safe workplaces, skill development
              programs, and fair opportunities. We actively support local
              communities through education, healthcare, and livelihood
              initiatives—because real progress lifts everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full bg-white py-20 md:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-8">
              <div className="w-32 h-1 bg-[#bb2929] mx-auto"></div>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-KuraleRegular text-black leading-[1.4] max-w-3xl mx-auto mb-8">
              Looking Ahead
            </p>
            <p className="text-lg md:text-xl text-black leading-[1.8] font-EireneSansRegular max-w-3xl mx-auto">
              As we step into the future, Kaveri Industries remains committed to
              adopting modern technologies, increasing capacity, seeking new
              markets, and achieving a balance between commercial success and
              social and environmental responsibility. We're not just building
              machines, we're building momentum, trust, and a legacy of
              excellence.
              <br />
              <br />
              Together with our partners, teams, and communities, we're excited to
              create more, achieve more, and inspire more.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

