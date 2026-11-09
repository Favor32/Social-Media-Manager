// Types text out one letter at a time when the page loads.
//
// It is pure CSS (see .type-char in globals.css), so the full text is already
// in the page for search engines and screen readers. `delay` and `speed` are
// in milliseconds: `speed` is the time between letters.
export default function TypeText({
  text,
  delay = 0,
  speed = 40,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const words = text.split(" ");
  let offset = 0;
  const placed = words.map((word) => {
    const start = offset;
    offset += word.length + 1; // +1 for the space after the word
    return { word, start };
  });

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {placed.map(({ word, start }, w) => (
          <span key={w}>
            {/* Letters of one word stay together so lines never break mid-word. */}
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, c) => (
                <span
                  key={c}
                  className="type-char"
                  style={{ animationDelay: `${delay + (start + c) * speed}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
            {w < placed.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </>
  );
}

// Time (ms) that typing `text` takes, so the next piece can start after it.
export const typingEnd = (text: string, delay: number, speed: number) =>
  delay + text.length * speed;
