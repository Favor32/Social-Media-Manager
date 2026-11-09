import type { Metadata } from "next";
import AboutSection from "../components/sections/AboutSection";
import FocusSection from "../components/sections/FocusSection";
import CTASection from "../components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Paul Omowunmi Bisola is a Social Media Manager who combines strategy, creativity and data to help brands build a purposeful online presence.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <FocusSection />
      <CTASection />
    </>
  );
}
