import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Invite — AIRops Academy",
  description:
    "Request an invite to join an AIRops Academy study group. Free, informal, and designed for operators.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-xl px-5 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          Request an Invite
        </h1>
        <p className="mt-4 text-lg text-stone-500">
          Study groups are free and informal. Tell us a bit about yourself and
          we&apos;ll match you with a group.
        </p>

        <div className="mt-10 rounded-xl border border-stone-200 bg-white p-8 text-left">
          <p className="text-sm text-stone-400 text-center">
            Registration form coming soon. In the meantime, reach out directly
            to express interest.
          </p>
        </div>
      </div>
    </div>
  );
}
