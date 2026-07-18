"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { nav } from "@/content/site";

/**
 * Sticky header. Transparent over the hero (dark pages get on-ink
 * treatment), solid paper with a hairline once scrolled.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [practicesOpen, setPracticesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setPracticesOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!practicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPracticesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPracticesOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [practicesOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-line bg-paper/95 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-terra",
                pathname.startsWith("/practices") && "text-terra"
              )}
              aria-expanded={practicesOpen}
              aria-haspopup="true"
              onClick={() => setPracticesOpen((v) => !v)}
            >
              {nav.practices.label}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                aria-hidden="true"
                className={cn("transition-transform", practicesOpen && "rotate-180")}
              >
                <path d="M1 1l3.5 3.5L8 1" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            {practicesOpen ? (
              <div className="absolute left-0 top-full mt-4 w-72 border border-line bg-paper shadow-[0_16px_40px_rgba(12,27,42,0.10)]">
                {nav.practices.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="block border-b border-line px-5 py-3.5 text-sm text-ink transition-colors last:border-b-0 hover:bg-paper-dim hover:text-terra"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-ink transition-colors hover:text-terra",
                pathname === link.href && "text-terra"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={nav.cta.href}
            className="border border-ink bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:border-terra hover:bg-terra"
          >
            {nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={cn(
              "h-px w-5 bg-ink transition-transform",
              mobileOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-ink transition-transform",
              mobileOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-line bg-paper px-6 pb-8 pt-4 md:hidden">
          <p className="text-eyebrow pb-2 text-stone">{nav.practices.label}</p>
          {nav.practices.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
              className="block border-b border-line py-3 text-base text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="block border-b border-line py-3 text-base text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={nav.cta.href}
            onClick={closeMenus}
            className="mt-6 block border border-ink bg-ink px-5 py-3 text-center text-sm text-paper"
          >
            {nav.cta.label}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
