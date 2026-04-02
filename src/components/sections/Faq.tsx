"use client";

import { useState } from "react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { faq } from "@/content/siteContent";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-surface-700/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-white group-hover:text-brand-400 transition-colors pr-4">
          {question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-400 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <SectionWrapper id="faq">
      <SectionHeader title={faq.sectionTitle} />
      <div className="max-w-3xl mx-auto">
        {faq.items.map((item, i) => (
          <FaqItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </SectionWrapper>
  );
}
