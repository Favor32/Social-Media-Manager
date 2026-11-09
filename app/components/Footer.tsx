import Link from "next/link";
import { navLinks, site } from "@/data/site";
import SocialLinks from "./ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="surface-dark section-round bg-chocolate text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-heading text-2xl">{site.name}</p>
          <p className="mt-1 text-sand">{site.role}</p>
          <p className="mt-5 max-w-sm leading-relaxed text-cream/70">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline pb-0.5 text-cream/80 hover:text-cream"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <a
            href={`mailto:${site.email}`}
            className="link-underline break-all pb-0.5 text-sm text-cream/80 hover:text-cream"
          >
            {site.email}
          </a>
          <SocialLinks className="mt-6" />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="container-x py-6 text-sm text-sand">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
