"use client";

import { useEffect, useState } from "react";

// Types text out one letter at a time. `delay` is the wait before typing
// starts and `speed` is the time between letters, both in milliseconds.
// The full text stays in the page for search engines and screen readers,
// and the not-yet-typed part is hidden but still takes up space, so the
// layout never jumps.
export default function TypeText({
  text,
  delay = 0,
  speed = 40,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Visitors who asked their device for less motion see the text at once.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let typed = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        typed += 1;
        setCount(typed);
        if (typed >= text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="invisible">{text.slice(count)}</span>
      </span>
    </>
  );
}