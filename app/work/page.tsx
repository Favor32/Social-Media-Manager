import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import FeaturedCaseStudy from "../components/sections/FeaturedCaseStudy";
import WorkGallery from "../components/sections/WorkGallery";
import CTASection from "../components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected social media work: the FACO case study, content calendars, carousels, bio and page revamps, analytics and video.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader title="My work" />
      {projects[0] && <FeaturedCaseStudy project={projects[0]} showChart />}
      <WorkGallery />
      <CTASection />
    </>
  );
}
