import { motion } from "framer-motion";
import { WorldMap } from "./ui/map";

export default function GlobalNetwork() {
  return (
    <div className="w-full min-w-full pt-6 md:pt-10 pb-12 md:pb-16 bg-white">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#BB2929] font-EireneSansRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-4"
        >
          Worldwide Reach
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=" text-2xl md:text-7xl !font-KuraleRegular text-black mb-4"
        >
          Global Network
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto"
        >
          Connect with teams and clients worldwide. Our platform enables
          seamless collaboration across continents, bringing the world to your
          workspace.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full mt-6 md:mt-8"
      >
        <WorldMap
          theme="light"
          lineColor="#BB2929"
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: "Fairbanks",
              },
              end: {
                lat: 34.0522,
                lng: -118.2437,
                label: "Los Angeles",
              },
            },
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
                label: "Fairbanks",
              },
              end: {
                lat: -15.7975,
                lng: -47.8919,
                label: "Brasília",
              },
            },
            {
              start: {
                lat: -15.7975,
                lng: -47.8919,
                label: "Brasília",
              },
              end: {
                lat: 38.7223,
                lng: -9.1393,
                label: "Lisbon",
              },
            },
            {
              start: {
                lat: 51.5074,
                lng: -0.1278,
                label: "London",
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
              },
              end: {
                lat: 43.1332,
                lng: 131.9113,
                label: "Vladivostok",
              },
            },
            {
              start: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi",
              },
              end: {
                lat: -1.2921,
                lng: 36.8219,
                label: "Nairobi",
              },
            },
          ]}
        />
      </motion.div>
    </div>
  );
}
