import Image from "next/image";
import { tools } from "@/data/tools";
import Reveal from "../ui/Reveal";

// Separate brown cards on the cream page. Cards pop in as you scroll and each
// icon floats gently; on hover a card grows and its icon spins a little.
export default function ToolkitSection() {
  return (
    <section className="bg-cream pb-24 md:pb-32">
      <div className="container-x">
        <ul className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <li key={tool.name}>
                <Reveal variant="pop" delay={(i % 3) * 140} className="h-full">
                  <div className="surface-dark group h-full rounded-3xl bg-chocolate p-8 text-cream transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-chocolate/30 md:p-10">
                    <span
                      className="animate-float flex h-16 w-16 items-center justify-center rounded-2xl bg-cream/10 transition-transform duration-500 group-hover:rotate-12"
                      style={{ animationDelay: `${i * 400}ms` }}
                    >
                      {tool.image && (
                        <Image src={tool.image} alt="" width={32} height={32} />
                      )}
                      {Icon && <Icon size={32} className="text-glow" />}
                    </span>
                    <h2 className="mt-8 font-heading text-2xl leading-tight">
                      {tool.name}
                    </h2>
                    <p className="mt-3 leading-relaxed text-sand">
                      {tool.description}
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
