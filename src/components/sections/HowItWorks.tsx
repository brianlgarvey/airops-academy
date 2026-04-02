import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { howItWorks } from "@/content/siteContent";

export function HowItWorks() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={howItWorks.sectionTitle}
        subtitle={howItWorks.sectionSubtitle}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorks.steps.map((step, i) => (
          <div key={i} className="relative">
            {/* Connector line (desktop) */}
            {i < howItWorks.steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-surface-700/50 z-0" />
            )}
            <div className="relative rounded-xl border border-surface-700/50 bg-surface-900/50 p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400 mb-5">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
