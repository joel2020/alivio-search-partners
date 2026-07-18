"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { nav } from "@/content/site";

/**
 * Sticky header, v2: transparent over the hero, dark glass with a
 * hairline once scrolled. The primary CTA stays visible at all times.
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
        solid
          ? "border-b border-line-1 bg-bg0/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm text-tx-2 transition-colors hover:text-tx-1",
                pathname.startsWith("/practices") && "text-tx-1"
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
              <div className="glass-raised absolute left-0 top-full mt-4 w-72 overflow-hidden rounded-xl bg-bg2">
                {nav.practices.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="block border-b border-line-1 px-5 py-3.5 text-sm text-tx-1 transition-colors last:border-b-0 hover:bg-srf-2 hover:text-acc"
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
                "text-sm text-tx-2 transition-colors hover:text-tx-1",
                pathname === link.href && "text-tx-1"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={nav.cta.href}
            className="inline-flex h-10 items-center rounded-lg bg-acc px-5 text-sm font-semibold text-acc-ink transition-colors hover:bg-acc-2"
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
              "h-px w-5 bg-tx-1 transition-transform",
              mobileOpen && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-tx-1 transition-transform",
              mobileOpen && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-line-1 bg-bg0/95 px-6 pb-8 pt-4 backdrop-blur-md md:hidden"
        >
          <p className="text-eyebrow pb-2 text-tx-3">{nav.practices.label}</p>
          {nav.practices.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
              className="block border-b border-line-1 py-3 text-base text-tx-1"
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
                className="block border-b border-line-1 py-3 text-base text-tx-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={nav.cta.href}
            onClick={closeMenus}
            className="mt-6 block rounded-lg bg-acc px-5 py-3 text-center text-sm font-semibold text-acc-ink"
          >
            {nav.cta.label}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
