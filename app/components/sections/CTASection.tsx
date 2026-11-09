import Link from "next/link";
import { site } from "@/data/site";

// Closing call-to-action shown at the bottom of most pages.
export default function CTASection() {
  return (
    <section className="section-y section-round bg-orange-warm text-ink">
      <div className="container-x grid items-end gap-10 lg:grid-cols-12">
        <h2 className="font-heading text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] tracking-tight lg:col-span-7">
          Let&rsquo;s build something great together
        </h2>
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed">
            Whether you&rsquo;re looking to grow your brand&rsquo;s presence, need a
            content strategy that actually connects, or want a partner who treats
            your business as if it were their own, I&rsquo;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/contact" className="btn btn-dark">
              Send a message
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="link-underline break-all pb-0.5 text-sm font-medium"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
