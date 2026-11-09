import Image from "next/image";
import { site } from "@/data/site";
import { focusAreas } from "@/data/services";
import SocialLinks from "../ui/SocialLinks";
import TypeText from "../ui/TypeText";

// Colours and positions of the floating tags around her portrait.
const tagStyles = [
  "top-[10%] left-[2%] bg-accent text-ink",
  "top-[28%] right-[0%] bg-chocolate text-cream",
  "top-[52%] left-[0%] bg-paper text-chocolate border border-chocolate/15",
  "top-[70%] right-[4%] bg-copper text-cream",
];

export default function AboutSection() {
  return (
    <section className="bg-cream">
      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="px-6 py-16 md:px-12 lg:py-28 lg:pl-20 lg:pr-12">
          <h1 className="font-heading text-[clamp(2.75rem,6vw,5rem)] leading-[1.05] tracking-tight">
            <TypeText text="About me" delay={150} speed={110} />
          </h1>
          <p className="mt-4 text-xl font-medium text-copper">
            {site.name}, {site.role}
          </p>

          <p className="mt-10 max-w-xl text-lg leading-relaxed">
            I&rsquo;m  a Social Media Manager focused on{" "}
            <span className="font-medium text-copper">
              helping businesses build a strong and purposeful presence online.
            </span>
          </p>

          <p className="mt-10 max-w-xl border-l-4 border-accent pl-6 font-heading text-2xl leading-snug md:text-3xl">
            &ldquo;I combine{" "}
            <span className="text-copper">strategy, creativity and data</span> to
            help brands communicate their value, connect with their target
            audience and maintain a consistent digital presence.&rdquo;
          </p>

          <p className="mt-10 max-w-xl leading-relaxed text-muted">
            From developing content strategies and planning content to creating,
            managing and analysing social media performance, I approach every
            project with{" "}
            <span className="font-medium text-copper">intention</span>.
          </p>

          <SocialLinks className="mt-10 text-chocolate" />
        </div>

        {/* No box or background: the portrait sits directly on the page. A thin
            orange ring and floating tags frame her. */}
        <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[44rem]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[14%] aspect-square w-[84%] -translate-x-1/2 rounded-full border-2 border-accent/50"
          />
          <Image
            src="/profile.png"
            alt="Paul Omowunmi Bisola"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain object-bottom"
          />
          <ul aria-hidden="true">
            {focusAreas.map((area, i) => (
              <li
                key={area.title}
                className={`animate-float absolute z-10 rounded-full px-3 py-1.5 text-xs font-medium shadow-lg md:px-5 md:py-2 md:text-sm ${tagStyles[i % tagStyles.length]}`}
                style={{ animationDelay: `${i * 500}ms` }}
              >
                {area.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
