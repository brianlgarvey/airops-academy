import { hero } from "@/content/siteContent";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-stone-900">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl">
            {hero.subheadline}
          </p>

          {/* Supporting line */}
          <p className="mt-5 text-[15px] text-stone-400">
            {hero.supportingLine}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-stone-900 px-7 py-3 text-[15px] font-medium text-white hover:bg-stone-700 transition-all"
            >
              {hero.primaryCta.label}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-7 py-3 text-[15px] font-medium text-stone-600 hover:border-stone-400 hover:text-stone-900 transition-all"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
