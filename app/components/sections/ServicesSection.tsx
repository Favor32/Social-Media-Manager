import { services } from "@/data/services";
import Reveal from "../ui/Reveal";

// Separate rounded cards on the brown background. Each rises in as you scroll;
// on hover a card lifts, its border turns orange and the icon tilts.
export default function ServicesSection() {
  return (
    <section className="surface-dark bg-chocolate pb-24 text-cream md:pb-32">
      <div className="container-x">
        <ul className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <Reveal delay={(i % 3) * 140} className="h-full">
                  <div className="group h-full rounded-3xl border border-cream/15 bg-cream/[0.07] p-8 transition duration-300 hover:-translate-y-2 hover:border-accent hover:bg-cream/[0.12] md:p-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-glow transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-ink">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h2 className="mt-8 font-heading text-2xl leading-tight">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-sand">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
