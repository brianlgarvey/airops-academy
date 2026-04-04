import Link from "next/link";
import { brand, footer } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-900 text-[10px] font-bold text-white">
                AI
              </div>
              <span className="text-sm font-semibold text-stone-900">
                {brand.name}
              </span>
            </Link>
            <p className="text-[13px] text-stone-400">{footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-stone-400 hover:text-stone-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-100 text-center">
          <p className="text-xs text-stone-400">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
