"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Animates its children in when they scroll into view.
//   variant="rise": slides up and fades in
//   variant="pop":  grows in with a slight tilt
// `delay` (milliseconds) staggers neighbours, e.g. delay={index * 120}.
export default function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "pop";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hiddenClass = `reveal-hidden-${variant}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(hiddenClass);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hiddenClass]);

  return (
    <div
      ref={ref}
      className={`reveal ${hiddenClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
