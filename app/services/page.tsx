import type { Metadata } from "next";
import PageHeader from "../components/ui/PageHeader";
import ServicesSection from "../components/sections/ServicesSection";
import CTASection from "../components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Content strategy, content creation, planning, analytics, ad campaign management and AI creative content for social media.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="What I do" tone="dark" />
      <ServicesSection />
      <CTASection />
    </>
  );
}
