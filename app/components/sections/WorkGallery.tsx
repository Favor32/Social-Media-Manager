"use client";

import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import MediaLightbox from "../ui/MediaLightbox";
import Reveal from "../ui/Reveal";
import { workCategories, type MediaItem } from "@/data/projects";

type Open = { media: MediaItem[]; index: number; title: string };

// Every category of work, one after another, each showing all of its samples.
export default function WorkGallery() {
  const [open, setOpen] = useState<Open | null>(null);

  return (
    <section className="section-y section-round bg-cream">
      <div className="container-x space-y-20 md:space-y-28">
        {workCategories.map((item) => (
          <Reveal key={item.slug}>
            <ProjectCard
              item={item}
              onOpen={(media, index, title) => setOpen({ media, index, title })}
            />
          </Reveal>
        ))}
      </div>

      {open && (
        <MediaLightbox
          media={open.media}
          startIndex={open.index}
          title={open.title}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
