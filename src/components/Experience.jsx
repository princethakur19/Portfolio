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
  },
  {
    id: "mern-platform",
    date: "2026",
    title: "MERN Application Development",
    company: "Trade Fair Booking Platform",
    description:
      "Built authentication, stall management, booking flows, and dashboard screens with a focus on clean component structure, state-driven UI, and production-ready routing.",
    icon: <FiCode />,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    category: "Full Stack",
    tech: ["JWT", "REST APIs", "React Router", "Vite"],
  },
  {
    id: "database-architecture",
    date: "2026",
    title: "Database & API Architecture",
    company: "Backend Systems",
    description:
      "Designed MongoDB collections and API contracts to support stall availability, booking records, user roles, and reliable admin operations across the application.",
    icon: <FiDatabase />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    category: "Backend",
    tech: ["Schemas", "Controllers", "Validation", "Security"],
  },
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
