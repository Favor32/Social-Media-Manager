"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // While the mobile menu is open: lock page scroll, close on Escape, and
  // move focus into the menu. Focus returns to the menu button on close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    const menuButton = menuButtonRef.current;
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [open]);

  const pageLinks = navLinks.filter((link) => link.href !== "/contact");

  return (
    <>
      <header className="surface-dark sticky top-0 z-40 border-b border-cream/10 bg-chocolate/95 text-cream backdrop-blur">
        <nav
          aria-label="Main"
          className="flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-20"
        >
          <Link href="/" className="leading-tight">
            <span className="block font-heading text-lg tracking-tight">
              {site.name}
            </span>
            <span className="hidden text-xs text-sand sm:block">{site.role}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-7 text-sm">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="link-underline pb-1 text-cream/85 hover:text-cream aria-[current=page]:text-cream"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-accent px-5 py-2.5 text-sm">
              Contact
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            className="p-2 text-2xl md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <FaBars aria-hidden="true" />
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="surface-dark fixed inset-0 z-[70] flex flex-col bg-chocolate px-6 py-5 text-cream md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-lg">{site.name}</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 text-2xl"
              aria-label="Close menu"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          <ul className="mt-12 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-cream/10">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="block py-4 font-heading text-3xl hover:text-glow aria-[current=page]:text-glow"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
