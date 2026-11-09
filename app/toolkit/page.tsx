import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import ToolkitSection from "../components/sections/ToolkitSection";
import CTASection from "../components/sections/CTASection";

export const metadata: Metadata = {
  title: "Toolkit",
  description:
    "The tools behind the work: Canva, CapCut, Meta Business Suite, Meta Ads Manager and AI creative tools.",
};

export default function ToolkitPage() {
  return (
    <>
      <PageHeader title="Tools I use">
        I use technology to improve my creative process and efficiency while
        keeping strategy, creativity and human judgement at the centre of my
        work.
      </PageHeader>
      <ToolkitSection />
      <CTASection />
    </>
  );
}
