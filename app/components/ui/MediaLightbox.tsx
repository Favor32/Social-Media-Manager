"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { MediaItem } from "@/data/projects";

export default function MediaLightbox({
  media,
  startIndex,
  title,
  onClose,
}: {
  media: MediaItem[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = media[index];

  const next = useCallback(
    () => setIndex((i) => (i + 1) % media.length),
    [media.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + media.length) % media.length),
    [media.length],
  );

  // On open: lock page scroll and move focus to the close button.
  // On close: restore scrolling and return focus to whatever opened the lightbox.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  // Keyboard support: Escape closes, arrow keys move between samples.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, prev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} samples`}
      className="surface-dark fixed inset-0 z-[60] flex items-center justify-center bg-chocolate/95"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-cream/10 p-3 text-xl text-cream hover:bg-accent hover:text-ink"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      {media.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-2 rounded-full bg-cream/10 p-4 text-xl text-cream hover:bg-accent hover:text-ink md:left-6"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
      )}

      <div
        className="relative h-[82vh] w-[min(88vw,30rem)] overflow-hidden rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "photo" ? (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 640px) 480px, 88vw"
            className="object-contain"
          />
        ) : (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-contain"
          />
        )}
      </div>

      {media.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-2 rounded-full bg-cream/10 p-4 text-xl text-cream hover:bg-accent hover:text-ink md:right-6"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      )}

      {media.length > 1 && (
        <p
          className="absolute bottom-5 text-sm text-sand"
          aria-live="polite"
        >
          {index + 1} of {media.length}
        </p>
      )}
    </div>
  );
}
