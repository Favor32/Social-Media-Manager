// Site-wide details. Change your name, contact details and links here.

export const site = {
  name: "Paul Omowunmi Bisola",
  role: "Social Media Manager",
  tagline:
    "Building intentional digital presence for businesses that want to be seen, understood and remembered.",
  email: "Omowunmibisola93@gmail.com",
  // Contact form submissions are sent to this Formspree form.
  formEndpoint: "https://formspree.io/f/mrpgelyk",
  socials: [
    { name: "Instagram", url: "https://instagram.com/the_wunmipaul" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wunmi-paul-a8146b436" },
    // Facebook account name: "Paul Omowunmi". Paste the link to the profile
    // between the quotes below (Facebook > your profile > Copy link). The
    // icon stays hidden until a link is added.
    { name: "Facebook", url: "https://facebook.com/Paul Omowunmi" },
  ],
} as const;

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Toolkit", href: "/toolkit" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
] as const;
