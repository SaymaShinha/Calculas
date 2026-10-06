import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function RuleCard({
  number,
  title,
  rule,
  explanation,
  example,
  category,
}) {
  return (
    <article className="group rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg">
      <div className="flex gap-4">
        {number !== undefined && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-content">
            {number}
          </div>
        )}

        <div className="min-w-0 flex-1">
          {category && (
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {category}
            </div>
          )}

          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-base-300 bg-base-200/60 p-5">
        <div className="min-w-max text-center font-mono text-lg font-semibold">
          {rule}
        </div>
      </div>

      {explanation && (
        <div className="mt-5 flex gap-3">
          <CheckCircle2 size={18} className="mt-1 shrink-0 text-success" />

          <p className="text-sm leading-7 text-base-content/65">
            {explanation}
          </p>
        </div>
      )}

      {example && (
        <div className="mt-5 rounded-xl bg-primary/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <ArrowRight size={14} />
            Example
          </div>

          <div className="text-sm leading-7 text-base-content/70">
            {example}
          </div>
        </div>
      )}
    </article>
  );
}
