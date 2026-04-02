import { sessionTopics } from "@/content/siteContent";

export function SessionTopics() {
  return (
    <section className="py-20 md:py-28 bg-stone-100/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {sessionTopics.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            {sessionTopics.sectionSubtitle}
          </p>
        </div>

        {/* Topics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sessionTopics.topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border border-stone-200/80 bg-white p-6 hover:border-stone-300 transition-colors group"
            >
              <span className="inline-block text-[11px] font-medium uppercase tracking-wider text-primary-600 mb-3">
                {topic.tag}
              </span>
              <h3 className="text-[16px] font-semibold text-stone-900">
                {topic.title}
              </h3>
              <p className="mt-2 text-[14px] text-stone-500 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
