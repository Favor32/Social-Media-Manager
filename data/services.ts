// Services shown on the Services page. Add or edit an entry to change the page.
import type { IconType } from "react-icons";
import {
  FaChessKnight,
  FaPaintBrush,
  FaCalendarAlt,
  FaChartLine,
  FaRobot,
  FaBullhorn,
} from "react-icons/fa";

export type Service = { title: string; description: string; icon: IconType };

export const services: Service[] = [
  {
    title: "Content Strategy",
    description:
      "Developing a clear content direction based on the brand, audience and business objectives.",
    icon: FaChessKnight,
  },
  {
    title: "Content Creation",
    description:
      "Creating Reels, graphics, carousels, captions and other social media content.",
    icon: FaPaintBrush,
  },
  {
    title: "Content Planning",
    description:
      "Developing content pillars, topics and calendars that keep the brand organised and consistent.",
    icon: FaCalendarAlt,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Tracking performance and turning social media data into useful insights.",
    icon: FaChartLine,
  },
  {
    title: "Ad Campaign Management",
    description:
      "Planning, setting up and managing paid ad campaigns to boost reach, drive engagement and grow the right audience.",
    icon: FaBullhorn,
  },
  {
    title: "AI & Creative Content",
    description:
      "Using AI powered creative tools to support ideation, visual development and video creation.",
    icon: FaRobot,
  },
];

// Short highlights shown on the home page.
export const highlights = [
  {
    title: "Social Media Management",
    description: "Consistent, organised and engaging presence.",
  },
  {
    title: "Content Strategy",
    description: "Clear direction rooted in brand and audience.",
  },
  {
    title: "Analytics & Reporting",
    description: "Data turned into useful insight.",
  },
];

// The four-part approach shown on the About page.
export const focusAreas = [
  { title: "Strategy", description: "Creating direction." },
  { title: "Content", description: "Creating meaningful communication." },
  { title: "Management", description: "Maintaining consistency." },
  { title: "Growth", description: "Learning from data and improving." },
];
