import { ArrowRight, Sparkles } from "lucide-react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
  children,
  centered = false,
}) {
  return (
    <section className="relative overflow-hidden border-b border-base-300 bg-base-200/30">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20 ${
          centered ? "text-center" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-5 ${
            centered ? "items-center" : "max-w-4xl"
          }`}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {Icon ? <Icon size={14} /> : <Sparkles size={14} />}
              {eyebrow}
            </div>
          )}

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-3xl text-base leading-8 text-base-content/65 sm:text-lg">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
