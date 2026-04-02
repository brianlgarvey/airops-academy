import { SectionWrapper } from "@/components/ui/SectionWrapper";

/**
 * Testimonial placeholder section.
 * Replace with real testimonials once available.
 * To hide this section, simply remove it from the homepage.
 */
export function Testimonials() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-xl border border-dashed border-surface-700/50 bg-surface-900/30 p-12">
          <p className="text-sm text-gray-600 uppercase tracking-wider font-medium mb-2">
            Coming Soon
          </p>
          <p className="text-lg text-gray-500">
            Testimonials from AIRops Workshop graduates will appear here after
            the first cohort completes.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
