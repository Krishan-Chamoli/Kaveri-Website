import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

/* VIDEO */
import videoSource from "../assets/videos/heroVideo.mp4";

/* ======================
   MOBILE CHECK
====================== */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const resize = () =>
      setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return isMobile;
};

/* ======================
   PARALLAX TEXT
====================== */
const ParallaxText = ({ children, baseVelocity = -4 }) => {
  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    x.current += (baseVelocity * delta) / 10;
  });

  return (
    <motion.div
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        transform: `translateX(${x.current}px)`,
      }}
    >
      {children}
      {children}
    </motion.div>
  );
};

/* ======================
   REVEAL COVER
====================== */
const RevealCover = () => (
  <motion.div
    style={{
      position: "absolute",
      inset: 0,
      background: "#fff",
      zIndex: 5,
    }}
    initial={{ scaleX: 1 }}
    whileInView={{ scaleX: 0 }}
    transformOrigin="left"
    transition={{
      duration: 1.2,
      ease: [0.77, 0, 0.175, 1],
    }}
    viewport={{ once: true }}
  />
);

/* ======================
   IMAGE ANIMATION
====================== */
const imageVariants = {
  hidden: { scale: 1.6 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

/* ======================
   MAIN COMPONENT
====================== */
const RevealImg = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <section style={{ width: "100%", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "auto",
          padding: isMobile ? "60px 20px" : "120px 40px",
        }}
      >
        {/* TITLE */}
        <div
          style={{
            marginBottom: "60px",
            textAlign: "left",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              color: "#BB2929",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              fontFamily: "EireneSansRegular",
              letterSpacing: "0.15em",
              marginBottom: isMobile ? "20px" : "40px",
            }}
          >
            Packaging Solutions
          </motion.p>

          <h1
            style={{
              fontSize: isMobile ? "32px" : "72px",
              fontWeight: "normal",
              fontFamily: "KuraleRegular",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "#000",
            }}
          >
            <span style={{ display: "block" }}>Premium Packaging Solutions</span>
            <span style={{ display: "block" }}>of Nicotine Pouches</span>
          </h1>
        </div>

        {/* VIDEO */}
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            height: isMobile ? "auto" : "80vh",
            aspectRatio: isMobile ? "16/9" : "auto",
            overflow: "hidden",
          }}
        >
          <RevealCover />

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
            onViewportEnter={() => {
              if (videoRef.current) {
                videoRef.current.play().catch((err) => {
                  console.error("Autoplay failed:", err);
                });
              }
            }}
            style={{
              position: isMobile ? "relative" : "absolute",
              width: "100%",
              height: "100%",
              inset: 0,
            }}
          >
            <video
              ref={videoRef}
              src={videoSource}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "3px groove #BB2929 ",
                borderRadius: "12px",
              }}
              loop
              muted
              playsInline
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default RevealImg;
