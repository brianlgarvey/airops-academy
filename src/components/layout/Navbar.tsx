"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, navigation } from "@/content/siteContent";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-lg border-b border-stone-200/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-[11px] font-bold text-white tracking-tight transition-colors group-hover:bg-stone-700">
              AI
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-stone-900">
              {brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navigation.cta.href}
              className="rounded-lg bg-stone-900 px-4 py-2 text-[13px] font-medium text-white hover:bg-stone-700 transition-colors"
            >
              {navigation.cta.label}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-500 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-stone-200/60 py-4 space-y-1">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-stone-500 hover:text-stone-900 transition-colors py-2 px-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navigation.cta.href}
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-lg bg-stone-900 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-stone-700 transition-colors mt-3"
            >
              {navigation.cta.label}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
