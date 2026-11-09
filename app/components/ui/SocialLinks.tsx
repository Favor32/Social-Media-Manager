import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { site } from "@/data/site";

// Icons for each social network listed in data/site.ts.
const icons: Record<string, IconType> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  Facebook: FaFacebook,
};

export default function SocialLinks({
  className = "",
  size = 22,
}: {
  className?: string;
  size?: number;
}) {
  const links = [
    // A social with an empty link is hidden.
    ...site.socials
      .filter((s) => s.url !== "")
      .map((s) => ({ name: s.name, url: s.url, icon: icons[s.name] })),
    { name: "Email", url: `mailto:${site.email}`, icon: FaEnvelope },
  ];

  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map(({ name, url, icon: Icon }) => {
        const external = !url.startsWith("mailto:");
        return (
          <li key={name}>
            <a
              href={url}
              aria-label={name}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block transition-colors duration-200 hover:text-glow"
            >
              {Icon && <Icon size={size} aria-hidden="true" />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
