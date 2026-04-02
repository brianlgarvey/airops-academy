import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { roadmap } from "@/content/siteContent";

const statusStyles = {
  available:
    "bg-accent-500/20 text-accent-400 border-accent-500/30",
  coming:
    "bg-brand-600/20 text-brand-400 border-brand-500/30",
  planned:
    "bg-surface-700/50 text-gray-500 border-surface-600/50",
};

const statusLabels = {
  available: "Available Now",
  coming: "Coming Soon",
  planned: "Planned",
};

export function Roadmap() {
  return (
    <SectionWrapper pattern="dots">
      <SectionHeader
        title={roadmap.sectionTitle}
        subtitle={roadmap.sectionSubtitle}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {roadmap.items.map((item, i) => (
          <div
            key={i}
            className={`rounded-xl border p-6 transition-all ${
              item.status === "available"
                ? "border-accent-500/30 bg-accent-500/5"
                : "border-surface-700/50 bg-surface-900/50"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3
                className={`text-base font-semibold ${
                  item.status === "available" ? "text-white" : "text-gray-300"
                }`}
              >
                {item.title}
              </h3>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[item.status]}`}
              >
                {statusLabels[item.status]}
              </span>
            </div>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
