import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import TypeText, { typingEnd } from "../ui/TypeText";

// Typing schedule (milliseconds): role, then the name on two lines, then the
// tagline. Each piece starts when the one before it finishes.
const ROLE = { delay: 350, speed: 100 };
const LINE_1 = "Paul Omowunmi";
const LINE_2 = "Bisola";
const NAME_SPEED = 200;
const line1Start = typingEnd(site.role, ROLE.delay, ROLE.speed) + 50;
const line2Start = typingEnd(LINE_1, line1Start, NAME_SPEED) + 40;
const taglineStart = typingEnd(LINE_2, line2Start, NAME_SPEED) + 70;
const TAGLINE_SPEED = 50;
const typingDone = typingEnd(site.tagline, taglineStart, TAGLINE_SPEED);

export default function HeroSection() {
  return (
    <section className="surface-dark bg-warm text-cream">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-center px-6 pb-20 pt-16 md:px-12 lg:py-28 lg:pl-20 lg:pr-12">
          <p className="text-lg text-sand">
            <TypeText text={site.role} delay={ROLE.delay} speed={ROLE.speed} />
          </p>

          <h1 className="mt-4 font-heading text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1] tracking-tight">
            <span className="block">
              <TypeText text={LINE_1} delay={line1Start} speed={NAME_SPEED} />
            </span>
            <span className="block">
              <TypeText text={LINE_2} delay={line2Start} speed={NAME_SPEED} />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            <TypeText
              text={site.tagline}
              delay={taglineStart}
              speed={TAGLINE_SPEED}
            />
            <span
              className="type-caret"
              aria-hidden="true"
              style={{ animationDelay: `${typingDone}ms` }}
            />
          </p>

          <div
            className="rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: `${taglineStart + 400}ms` }}
          >
            <Link href="/work" className="btn btn-accent">
              See my work
            </Link>
            <Link href="/services" className="btn btn-line-light">
              What I do
            </Link>
          </div>
        </div>

        {/* No box or background: the portrait sits directly on the page colour. */}
        <div className="relative min-h-[26rem] sm:min-h-[34rem] lg:min-h-[54rem]">
          <Image
            src="/hero.png"
            alt="Paul Omowunmi Bisola"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain object-bottom contrast-[1.1] saturate-[1.25] drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
