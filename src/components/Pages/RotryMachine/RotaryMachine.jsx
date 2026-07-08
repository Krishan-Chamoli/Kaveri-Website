import MachineLayout from "../MachineLayout";
import {
  FaShieldAlt,
  FaAward,
  FaStopwatch,
  FaHome,
  FaDesktop,
  FaClipboardList,
  FaDraftingCompass,
  FaCogs,
  FaChalkboardTeacher,
  FaRocket,
} from "react-icons/fa";

// Assets (Using Flowrap assets as placeholders for now, please replace with Rotary Machine specific assets)
import flowwrapVideo from "../../../assets/Flowrap/flowwrap_machine.mp4";
import flowwrapMachineImg from "../../../assets/Flowrap/rottary-Machine-removebg.png";
import cycleImg from "../../../assets/Flowrap/cycle.png";
import carInterior from "../../../assets/images/featureSection/PEB.jpg";
import carSide from "../../../assets/images/featureSection/TEXTILE.jpg";
import carDash from "../../../assets/images/heroSection/1.jpg";
import capabilityVideo from "../../../assets/videos/our_process.mp4";

const RotaryMachine = () => {
  // Configuration Data for Rotary Machine
  const machineData = {
    hero: {
      video: flowwrapVideo, // Replace with Rotary specific video
      title1: "Rotary",
      title2: "Machine",
      image: flowwrapMachineImg, // Replace with Rotary specific image
    },
    details: {
      title1: "Precision Rotary",
      title2: "Technology",
      description:
        "The Rotary Machine offers high-speed, continuous motion packaging solutions designed for maximum efficiency. It excels in handling complex packaging formats with precision and stability. Ideal for high-volume production lines, it ensures consistent quality and minimal downtime, adapting easily to various product sizes and types.",
      hotspots: [
        {
          position: "top-right",
          label: ["Capacity: 0.1 to 2.5 gram", "Speed: 1000 pouch per minute"],
        },
        {
          position: "top-left",
          label: ["Filling System: Funnel", "Sealing Type: 3 Side Seal"],
        },
        {
          position: "bottom-right",
          label: ["Power: 40KW Three Phase", "Machine Weight: Approx. 4000 KG"],
        },
        { position: "bottom-left", label: ["Configuration: Single Track"] },
      ],
    },
    quality: {
      title: "Performance & Quality",
      subtitle: "Key metrics defining our Rotary solutions",
      diagramImage: cycleImg,
      points: [
        {
          title: "Precision",
          text: "Exceptional accuracy in every cycle for uniform packaging results.",
          icon: <FaAward />,
          color: "#FF8A80",
        },
        {
          title: "Throughput",
          text: "Maximized output rates to meet demanding production schedules.",
          icon: <FaStopwatch />,
          color: "#EC407A",
        },
        {
          title: "Efficiency",
          text: "Low energy consumption and optimized operation costs.",
          icon: <FaHome />,
          color: "#AB47BC",
        },
        {
          title: "Versatility",
          text: "Quick changeover capabilities for different product formats.",
          icon: <FaDesktop />,
          color: "#7E57C2",
        },
        {
          title: "Reliability",
          text: "Robust construction ensures long-lasting performance and safety.",
          icon: <FaShieldAlt />,
          color: "#5C6BC0",
        },
      ],
    },
    capabilities: {
      video: capabilityVideo,
      title: "System Capabilities",
      subtitle: "Advanced Features of the Rotary Packaging System",
      items: [
        {
          title: "Continuous Motion",
          desc: "Ensures smooth handling of products at high speeds, reducing damage and increasing line efficiency.",
          icon: <FaClipboardList />,
          color: "#bb2929",
        },
        {
          title: "Hermetic Sealing",
          desc: "Advanced sealing technology guarantees air-tight packs for extended shelf life.",
          icon: <FaDraftingCompass />,
          color: "#000000ff",
        },
        {
          title: "Smart Integration",
          desc: "Seamlessly integrates with up-stream and down-stream equipment for a complete line solution.",
          icon: <FaCogs />,
          color: "#bb2929",
        },
        {
          title: "User-Friendly Interface",
          desc: "Intuitive HMI allows for easy operation, monitoring, and troubleshooting.",
          icon: <FaChalkboardTeacher />,
          color: "#000000ff",
        },
        {
          title: "Minimal Maintenance",
          desc: "Engineered for durability with easy access to parts, reducing maintenance time and costs.",
          icon: <FaRocket />,
          color: "#bb2929",
        },
      ],
    },
  };

  return <MachineLayout data={machineData} />;
};

export default RotaryMachine;
