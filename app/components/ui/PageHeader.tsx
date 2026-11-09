import type { ReactNode } from "react";
import TypeText from "./TypeText";

// Title block at the top of every inner page.
export default function PageHeader({
  title,
  children,
  tone = "light",
}: {
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <header
      className={`section-y ${
        dark ? "surface-dark bg-chocolate text-cream" : "bg-cream text-chocolate"
      }`}
    >
      <div className="container-x">
        <h1 className="max-w-6xl font-heading text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight">
          <TypeText text={title} delay={150} speed={90} />
        </h1>
        {children && (
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed ${
              dark ? "text-cream/75" : "text-muted"
            }`}
          >
            {children}
          </p>
        )}
      </div>
    </header>
  );
}
