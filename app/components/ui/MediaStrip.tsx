"use client";

import { useState } from "react";
import Image from "next/image";
import MediaLightbox from "./MediaLightbox";
import type { MediaItem } from "@/data/projects";

// A horizontal row of sample thumbnails that open in the lightbox.
export default function MediaStrip({
  media,
  title,
}: {
  media: MediaItem[];
  title: string;
}) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  return (
    <>
      <ul className="-mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-4 md:-mx-10 md:px-10 lg:mx-0 lg:px-0">
        {media.map((item, i) => (
          <li key={item.src} className="w-60 shrink-0 snap-start md:w-72">
            <button
              type="button"
              onClick={() => setOpenAt(i)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-3xl bg-espresso"
              aria-label={`Open ${item.alt}`}
            >
              {item.type === "photo" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="288px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <video
                  src={`${item.src}#t=0.1`}
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
              )}
            </button>
          </li>
        ))}
      </ul>

      {openAt !== null && (
        <MediaLightbox
          media={media}
          startIndex={openAt}
          title={title}
          onClose={() => setOpenAt(null)}
        />
      )}
    </>
  );
}
