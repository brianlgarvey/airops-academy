import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Add a subtle background pattern */
  pattern?: "grid" | "dots" | "none";
}

export function SectionWrapper({
  id,
  children,
  className = "",
  pattern = "none",
}: SectionWrapperProps) {
  const patternClass =
    pattern === "grid"
      ? "bg-grid-pattern"
      : pattern === "dots"
        ? "bg-dot-pattern"
        : "";

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${patternClass} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-gray-400 ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
