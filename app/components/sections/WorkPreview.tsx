import Image from "next/image";
import Link from "next/link";
import { workCategories } from "@/data/projects";

// Pieces from data/projects.ts shown on the home page. Change the slugs to
// show different work.
const previewSlugs = [
  "carousels-faco",
  "carousels-o-gadgets",
  "graphic-design",
  "page-revamp",
];

export default function WorkPreview() {
  const items = workCategories.filter(
    (category) =>
      previewSlugs.includes(category.slug) && category.media[0]?.type === "photo",
  );

  return (
    <section className="surface-dark section-y section-round bg-espresso text-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-heading text-[clamp(2rem,4.5vw,3.75rem)] leading-tight tracking-tight">
            Recent work
          </h2>
          <Link href="/work" className="link-underline pb-0.5 font-medium">
            See all work
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.slug}>
              <Link href="/work" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-chocolate">
                  <Image
                    src={item.media[0].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                {item.brand && <p className="mt-4 text-sm text-sand">{item.brand}</p>}
                <p className={`font-heading text-xl ${item.brand ? "" : "mt-4"}`}>
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
