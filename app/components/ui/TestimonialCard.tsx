import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const { quote, name, role, company } = testimonial;
  return (
    <figure className="flex h-full flex-col justify-between rounded-3xl border border-chocolate/15 bg-cream p-8">
      <blockquote className="font-heading text-2xl leading-snug">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8">
        <span className="block font-medium">{name}</span>
        <span className="block text-sm text-muted">
          {role}
          {company ? `, ${company}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
