import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "../../components/ui/PageHeader";
import ViewsChart from "../../components/ui/ViewsChart";
import MediaStrip from "../../components/ui/MediaStrip";
import CTASection from "../../components/sections/CTASection";
import { getCategory, getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

// One page is generated for every project listed in data/projects.ts.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.objective,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  const samples = project.samplesSlug ? getCategory(project.samplesSlug) : undefined;

  const facts = [
    { label: "Brand", value: project.name },
    { label: "Category", value: project.category },
    { label: "Role", value: project.role },
    { label: "Period", value: project.period },
  ];

  return (
    <>
      <PageHeader title={`${project.name} case study`}>
        {project.category}
      </PageHeader>

      <section className="bg-cream pb-16 md:pb-24">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-y-8 border-y border-chocolate/25 py-8 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-heading text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl">The objective</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xl leading-relaxed">{project.objective}</p>
            </div>
          </div>

          {project.strategy && (
            <div className="mt-16 grid gap-12 border-t border-chocolate/25 pt-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="font-heading text-3xl">The strategy</h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xl leading-relaxed">{project.strategy}</p>
              </div>
            </div>
          )}

          <div className="mt-16 grid gap-12 border-t border-chocolate/25 pt-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl">Content focus</h2>
            </div>
            <ul className="flex flex-wrap content-start gap-2 lg:col-span-7">
              {project.contentFocus.map((focus) => (
                <li
                  key={focus}
                  className="rounded-full border border-chocolate/35 px-4 py-1.5 text-lg"
                >
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface-dark section-y section-round bg-chocolate text-cream">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl">The result</h2>
            {project.results.map((result) => (
              <p key={result.value} className="mt-8">
                <span className="block font-heading text-7xl text-glow">
                  {result.value}
                </span>
                <span className="mt-2 block max-w-xs text-sand">{result.label}</span>
              </p>
            ))}
          </div>

          {project.views && (
            <div className="lg:col-span-7">
              <h3 className="mb-3 font-medium">Content views by month</h3>
              <ViewsChart data={project.views} />
              <ul className="mt-6 grid grid-cols-2 gap-4 border-t border-cream/15 pt-6 sm:grid-cols-4">
                {project.views.map((point) => (
                  <li key={point.month}>
                    <span className="block text-sm text-sand">{point.month}</span>
                    <span className="font-heading text-2xl">
                      {point.views.toLocaleString("en-US")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {samples && samples.media.length > 0 && (
        <section className="section-y section-round bg-cream">
          <div className="container-x">
            <h2 className="font-heading text-3xl">Content samples</h2>
            <p className="mt-3 max-w-xl text-muted">{samples.description}</p>
            <div className="mt-10">
              <MediaStrip
                media={samples.media}
                title={`${project.name} ${samples.name}`}
              />
            </div>
            <Link href="/work" className="link-underline mt-10 inline-block pb-0.5 font-medium">
              Back to all work
            </Link>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
