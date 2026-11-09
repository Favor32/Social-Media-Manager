import Image from "next/image";
import Link from "next/link";
import ViewsChart from "../ui/ViewsChart";
import type { Project } from "@/data/projects";

// Dark, editorial summary of one project. Used on the home page (without the
// chart) and at the top of the Work page (with the chart).
export default function FeaturedCaseStudy({
  project,
  showChart = false,
}: {
  project: Project;
  showChart?: boolean;
}) {
  const result = project.results[0];

  return (
    <section className="surface-dark section-y section-round bg-chocolate text-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-espresso lg:col-span-5">
          <Image
            src={project.coverSrc}
            alt={project.coverAlt}
            fill
            sizes="(min-width: 1024px) 34vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-sand">Featured case study</p>
          <h2 className="mt-3 font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight">
            {project.name}
          </h2>
          <p className="mt-3 text-lg text-sand">
            {project.category}. Role: {project.role}
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
            {project.objective}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.contentFocus.map((focus) => (
              <li
                key={focus}
                className="rounded-full border border-cream/25 px-3.5 py-1 text-sm text-cream/85"
              >
                {focus}
              </li>
            ))}
          </ul>

          {result && (
            <p className="mt-10 flex items-baseline gap-4 border-t border-cream/15 pt-8">
              <span className="font-heading text-5xl text-glow">{result.value}</span>
              <span className="max-w-[16rem] text-sm leading-snug text-sand">
                {result.label}
              </span>
            </p>
          )}

          {showChart && project.views && (
            <div className="mt-8">
              <h3 className="mb-3 font-medium">Content views, July to October</h3>
              <ViewsChart data={project.views} />
            </div>
          )}

          <Link href={`/work/${project.slug}`} className="btn btn-accent mt-10">
            Read the case study
          </Link>
        </div>
      </div>
    </section>
  );
}
