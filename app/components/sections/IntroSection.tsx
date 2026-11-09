import Link from "next/link";
import { highlights } from "@/data/services";

export default function IntroSection() {
  return (
    <section className="section-y section-round bg-cream">
      <div className="container-x">
        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-tight text-copper">
          Quick Look
        </h2>

        <ul className="mt-8 border-t border-chocolate/25">
          {highlights.map((item) => (
            <li key={item.title} className="border-b border-chocolate/25">
              <Link
                href="/services"
                className="group -mx-4 flex flex-col gap-2 rounded-3xl px-4 py-6 transition-colors duration-300 hover:bg-chocolate hover:text-cream md:-mx-8 md:flex-row md:items-center md:justify-between md:px-8 md:py-8"
              >
                <h3 className="font-heading text-2xl tracking-tight md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-muted transition-colors duration-300 group-hover:text-sand md:max-w-sm md:text-right">
                  {item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/services"
          className="link-underline mt-10 inline-block pb-0.5 font-medium"
        >
          See all services
        </Link>
      </div>
    </section>
  );
}