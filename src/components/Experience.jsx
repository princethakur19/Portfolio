import { FiBriefcase, FiCode, FiDatabase } from "react-icons/fi";
import Timeline3D from "./ui/3d-interactive-timeline";
import "./Experience.css";

import tradeFairImage from "../assets/tradefair.png";

const experienceEvents = [
  {
    id: "codesynergix-internship",
    date: "Jan 2026 - Apr 2026",
    title: "Software Developer Intern",
    company: "CodeSynergix",
    description:
      "Engineered a full-stack Trade Fair Stall Booking System with MongoDB data modeling, Express APIs, and a responsive React interface for booking and admin workflows.",
    icon: <FiBriefcase />,
    image: tradeFairImage,
    category: "Internship",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  }
  
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <Timeline3D
        events={experienceEvents}
        eyebrow="Career Path"
        title="Experience."
      />
    </section>
  );
}

export default Experience;
