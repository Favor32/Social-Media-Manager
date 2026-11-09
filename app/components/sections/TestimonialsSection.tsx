import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

// Hidden until real testimonials are added in data/testimonials.ts.
export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section-y section-round bg-paper">
      <div className="container-x">
        <h2 className="max-w-2xl font-heading text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
          What clients say
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
