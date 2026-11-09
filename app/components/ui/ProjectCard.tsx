"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import type { MediaItem, WorkCategory } from "@/data/projects";

// One category of work: a title, a short description and a scrolling row that
// shows EVERY sample. Clicking a sample opens it large in the lightbox.
// A category with no media yet shows a plain placeholder tile.
export default function ProjectCard({
  item,
  onOpen,
}: {
  item: WorkCategory;
  onOpen: (media: MediaItem[], index: number, title: string) => void;
}) {
  const title = item.brand ? `${item.name} for ${item.brand}` : item.name;

  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h2 className="font-heading text-3xl tracking-tight md:text-4xl">
          {item.name}
        </h2>
        {item.brand && (
          <span className="rounded-full bg-accent/15 px-4 py-1 text-sm font-medium text-copper">
            {item.brand}
          </span>
        )}
      </div>
      <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">
        {item.description}
      </p>

      {item.media.length === 0 ? (
        <div className="mt-8 flex aspect-[4/5] w-60 items-center justify-center rounded-3xl border-2 border-dashed border-chocolate/30 p-6 text-center text-muted md:w-72">
          Samples will be added here
        </div>
      ) : (
        // The row stretches to the screen edges and scrolls sideways.
        <ul className="-mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
          {item.media.map((media, i) => (
            <li key={media.src} className="w-60 shrink-0 snap-start md:w-72">
              <button
                type="button"
                onClick={() => onOpen(item.media, i, title)}
                aria-label={`Open ${media.alt}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-espresso"
              >
                {media.type === "photo" ? (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(min-width: 768px) 288px, 240px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <>
                    {/* "#t=0.1" shows the first frame without loading the whole video. */}
                    <video
                      src={`${media.src}#t=0.1`}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 text-chocolate">
                        <FaPlay aria-hidden="true" className="ml-1" />
                      </span>
                    </span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
