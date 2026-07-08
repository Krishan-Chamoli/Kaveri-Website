import { FocusRail } from "./ui/focus-rail";
import flowrapMachineImg from "../assets/Flowrap/Flowrap_machine.png";
import rotaryMachineImg from "../assets/Flowrap/rottary-Machine.png";
import snusPackagingMachineImg from "../assets/Flowrap/Snus-Packaging-Machine.png";

const DEMO_ITEMS = [
  {
    id: 1,
    title: "Flowrap Machine",
    description:
      "The Flowrap Machine is a high-speed packaging solution used for wrapping products in a continuous flow of packaging material.",
    meta: "Packaging • Machine",
    imageSrc: flowrapMachineImg,
    href: "#flowrap",
  },
  {
    id: 2,
    title: "Rotary Machine",
    description:
      "The Rotary Machine is a high-speed packaging solution used for wrapping products in a continuous flow of packaging material.",
    meta: "Design • Nature",
    imageSrc:
      rotaryMachineImg,
    href: "#nordic",
  },
  {
    id: 3,
    title: "Snus Packaging Machine",
    description:
      "The Snus Packaging Machine is a high-speed packaging solution used for wrapping products in a continuous flow of packaging material.",
    meta: "Adventure • Heat",
    imageSrc:
      snusPackagingMachineImg,
    href: "#sahara",
  },
  // {
  //   id: 4,
  //   title: "Cyber Future",
  //   description:
  //     "A glimpse into a technological singularity where AI meets humanity.",
  //   meta: "Tech • AI",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  //   href: "#cyber",
  // },
  // {
  //   id: 5,
  //   title: "Deep Ocean",
  //   description:
  //     "The crushing pressure and alien beauty of the Mariana Trench.",
  //   meta: "Science • Deep",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop",
  //   href: "#ocean",
  // },
];

export default function CircularGallery() {
  return (
    <main className="h-full w-full overflow-hidden bg-white flex flex-col items-center justify-center">
      <FocusRail items={DEMO_ITEMS} loop className="h-full" />
    </main>
  );
}
