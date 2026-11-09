import type { Metadata } from "next";
import ContactSection from "../components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Paul Omowunmi Bisola about social media management, content strategy and brand growth.",
};

export default function ContactPage() {
  return <ContactSection />;
}
