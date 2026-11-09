import { focusAreas } from "@/data/services";
import Reveal from "../ui/Reveal";

// Four cards that fade in, then bounce gently forever, each a little later
// than the one before it.
export default function FocusSection() {
  return (
    <section className="surface-dark section-y section-round bg-chocolate text-cream">
      <div className="container-x">
        <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight">
          My focus
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <li key={area.title}>
              <Reveal delay={i * 150} className="h-full">
                <div
                  className="animate-gentle-bounce h-full rounded-3xl bg-cream/10 p-6 backdrop-blur-sm md:p-8"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <h3 className="font-heading text-2xl text-glow md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sand">{area.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
