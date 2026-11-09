import { site } from "@/data/site";
import SocialLinks from "../ui/SocialLinks";
import ContactForm from "./ContactForm";
import TypeText from "../ui/TypeText";

export default function ContactSection() {
  return (
    <section className="surface-dark section-y bg-warm text-cream">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <h1 className="font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight">
            <TypeText
              text="Let's build something great together"
              delay={150}
              speed={90}
            />
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/80">
            Whether you&rsquo;re looking to grow your brand&rsquo;s presence, need a
            content strategy that actually connects, or want a partner who treats
            your business as if it were their own, I&rsquo;d love to hear from you.
            Send a message and let&rsquo;s talk about what&rsquo;s possible.
          </p>

          <div className="mt-10 border-t border-cream/15 pt-8">
            <p className="text-sand">Prefer email?</p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-2 inline-block break-all pb-1 font-heading text-2xl"
            >
              {site.email}
            </a>
            <SocialLinks className="mt-8" />
          </div>
        </div>

        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
