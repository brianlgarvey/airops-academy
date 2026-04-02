import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { whyThisExists } from "@/content/siteContent";

export function WhyThisExists() {
  return (
    <SectionWrapper id="why" pattern="dots">
      <SectionHeader
        title={whyThisExists.sectionTitle}
        subtitle={whyThisExists.sectionSubtitle}
      />
      <div className="grid md:grid-cols-2 gap-6">
        {whyThisExists.points.map((point, i) => (
          <div
            key={i}
            className="group rounded-xl border border-surface-700/50 bg-surface-900/50 p-8 hover:border-surface-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600/20 text-sm font-bold text-brand-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {point.title}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
