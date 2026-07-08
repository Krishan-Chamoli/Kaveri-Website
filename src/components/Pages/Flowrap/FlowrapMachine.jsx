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

// Assets
import flowwrapVideo from "../../../assets/Flowrap/flowwrap_machine.mp4";
import flowwrapMachineImg from "../../../assets/Flowrap/flowrap-packing-machine.png";
import cycleImg from "../../../assets/Flowrap/cycle.png";
import carInterior from "../../../assets/images/featureSection/PEB.jpg";
import carSide from "../../../assets/images/featureSection/TEXTILE.jpg";
import carDash from "../../../assets/images/heroSection/1.jpg";
import capabilityVideo from "../../../assets/videos/our_process.mp4";

const FlowrapMachine = () => {
  // Configuration Data for Flowrap Machine
  const machineData = {
    hero: {
      video: flowwrapVideo,
      title1: "Flowrap",
      title2: "Machine",
      image: flowwrapMachineImg,
    },
    details: {
      title1: "Details Packaging",
      title2: "Technology",
      description:
        "The Flow Wrap Machine is a high-speed packaging solution used for wrapping products in a continuous flow of packaging material. It ensures secure sealing, uniform wrapping, and excellent product protection. This machine is ideal for maintaining hygiene and preventing contamination during the packaging process. Its automated operation enables consistent output, reduced material wastage, and enhanced shelf appeal, making it suitable for premium packaging requirements.",
      hotspots: [
        { position: "top-right", label: "CONTINUOUS WRAPPING" },
        { position: "top-left", label: "SECURE SEALING" },
        { position: "bottom-right", label: "AUTOMATED OPERATION" },
        { position: "bottom-left", label: "UNIFORM WRAPPING" },
      ],
    },
    quality: {
      title: "Quality And Efficiency",
      subtitle: "Five aspects to assess operational excellence",
      diagramImage: cycleImg,
      points: [
        {
          title: "Quality",
          text: "Deliver products that meet or exceed quality standards consistently and reliably.",
          icon: <FaAward />,
          color: "#FF8A80",
        },
        {
          title: "Speed",
          text: "Complete processes quickly without sacrificing quality or attention to detail.",
          icon: <FaStopwatch />,
          color: "#EC407A",
        },
        {
          title: "Cost",
          text: "Manage expenses carefully to optimize profitability and sustain business growth.",
          icon: <FaHome />,
          color: "#AB47BC",
        },
        {
          title: "Flexibility",
          text: "Adapt operations swiftly to changing market demands and new opportunities.",
          icon: <FaDesktop />,
          color: "#7E57C2",
        },
        {
          title: "Safety",
          text: "Maintain secure environments to protect people, assets, and sensitive information.",
          icon: <FaShieldAlt />,
          color: "#5C6BC0",
        },
      ],
    },
    capabilities: {
      video: capabilityVideo,
      title: "Key Capabilities",
      subtitle: "High-Performance Packaging Solution Flow Wrap Machine",
      items: [
        {
          title: "High Speed Packaging",
          desc: "The Flow Wrap Machine is designed for continuous, high speed operation, enabling large volumes of products to be packaged efficiently without interruptions.",
          icon: <FaClipboardList />,
          color: "#bb2929",
        },
        {
          title: "Precision Sealing & Pack Integrity",
          desc: "Equipped with advanced sealing mechanisms, the machine delivers strong, uniform, and tamper resistant seals.",
          icon: <FaDraftingCompass />,
          color: "#000000ff",
        },
        {
          title: "Accurate Material Handling",
          desc: "The Flow Wrap Machine ensures precise alignment and tension control of packaging material.",
          icon: <FaCogs />,
          color: "#bb2929",
        },
        {
          title: "Consistent Packaging Quality",
          desc: "Every pack produced maintains uniform size, shape, and finish, ensuring a premium and professional appearance.",
          icon: <FaChalkboardTeacher />,
          color: "#000000ff",
        },
        {
          title: "Operational Efficiency & Reliability",
          desc: "Designed for stability and long-term performance, the machine minimizes unplanned downtime and supports smooth operation.",
          icon: <FaRocket />,
          color: "#bb2929",
        },
      ],
    },
  };

  return <MachineLayout data={machineData} />;
};

export default FlowrapMachine;
