import { inviteModel } from "@/content/siteContent";

export function InviteModel() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {inviteModel.sectionTitle}
          </h2>
          <p className="mt-5 text-xl text-stone-600 font-medium">
            {inviteModel.body}
          </p>

          <div className="mt-8 space-y-4">
            {inviteModel.points.map((point, i) => (
              <p
                key={i}
                className="text-[16px] text-stone-500 leading-relaxed pl-5 border-l-2 border-stone-300"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
