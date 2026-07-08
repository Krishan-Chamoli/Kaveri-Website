import "./OurProcess.css";
import OurProcessVideo from "../assets/videos/our_process.mp4"

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "An in-depth discussion to understand your packaging requirements, production goals, and application needs.",
  },
  {
    number: "02",
    title: "Design & Quotation",
    desc: "Custom machine design and detailed quotation prepared to match your specifications, product type, and automation level.",
  },
  {
    number: "03",
    title: "Manufacturing",
    desc: "Precision-built machines crafted in our advanced facility using high-grade materials and global manufacturing standards.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    desc: "Timely dispatch, installation assistance, and ongoing technical support to ensure smooth operation and performance.",
  },
];

export default function OurProcess() {
  return (
    <div className="our-process-wrapper">
      {/* Heading and subtitle – ensure visible above the section */}
      <div className="our-process-heading-block">
        <h2 className="our-process-title">Our Process</h2>
        <p className="our-process-subtitle">
          A streamlined approach to deliver cutting-edge packaging solutions with precision and reliability.
        </p>
      </div>
      <section className="our-process-section" style={{ position: "relative", overflow: "hidden" }}>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <source src={OurProcessVideo} type="video/mp4" />
          {/* Optionally add a fallback message */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.44)",
            zIndex: 1,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        {/* Foreground content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="our-process-steps">
            {steps.map((step, idx) => (
              <div className="our-process-step" key={step.number}>
                <div className="our-process-circle">{step.number}</div>
                <h3 className="our-process-step-title">{step.title}</h3>
                <p className="our-process-step-desc">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="our-process-arrow">
                    <svg width="60" height="20">
                      <line x1="0" y1="10" x2="50" y2="10" stroke="#d3d3d3" strokeWidth="2" strokeDasharray="5,5" />
                      <polygon points="50,5 60,10 50,15" fill="#d3d3d3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
