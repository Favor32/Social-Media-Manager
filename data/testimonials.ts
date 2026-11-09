// Client testimonials.
//
// The Testimonials section appears on the home page automatically once this
// list has at least one entry. While it is empty, the section is hidden.
// Only add real quotes from real clients.
//
// To add one, copy this example into the list below and fill it in:
//
//   {
//     quote: "What the client said, in their own words.",
//     name: "Client name",
//     role: "Their job title",
//     company: "Their business",     // optional
//   },

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [];
