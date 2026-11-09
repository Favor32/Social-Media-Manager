// Tools shown on the Toolkit page. Give a tool either an `icon` component
// or an `image` path (a file in /public).
import type { ComponentType } from "react";
import { FaRobot } from "react-icons/fa";
import CapCutIcon from "@/app/components/icons/CapCutIcon";
import MetaAdsManagerIcon from "@/app/components/icons/MetaAdsManagerIcon";
import MetaBusinessSuiteIcon from "@/app/components/icons/MetaBusinessSuiteIcon";
import AIVideoCreationIcon from "@/app/components/icons/AIVideoCreationIcon";

export type Tool = {
  name: string;
  description: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
  image?: string;
};

export const tools: Tool[] = [
  {
    name: "Canva",
    description:
      "Graphic design, carousels, presentations, branded content and social media creatives.",
    image: "/icons/canva.png",
  },
  {
    name: "CapCut",
    description:
      "Reels, short form video editing, subtitles, transitions and visual storytelling.",
    icon: CapCutIcon,
  },
  {
    name: "Meta AI",
    description: "Creative ideation, content assistance and concept development.",
    icon: FaRobot,
  },
  {
    name: "Meta Business Suite",
    description:
      "Scheduling, publishing, content management and performance monitoring.",
    icon: MetaBusinessSuiteIcon,
  },
  {
    name: "Meta Ads Manager",
    description:
      "Campaign setup, audience targeting, monitoring and performance analysis.",
    icon: MetaAdsManagerIcon,
  },
  {
    name: "AI Video Creation Tools",
    description: "AI assisted visual concepts and video creation.",
    icon: AIVideoCreationIcon,
  },
];
