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
    <article
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        border
        border-[#DEDEDB]
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-[#BFC8D2]
        hover:shadow-md
      "
    >
      {/* Header */}

      <div className="flex gap-4">
        {number !== undefined && (
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-md
              bg-[#17324D]
              text-sm
              font-bold
              text-white
            "
          >
            {number}
          </div>
        )}

        <div className="min-w-0 flex-1">
          {category && (
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2F5BEA]">
              {category}
            </div>
          )}

          <h3 className="text-lg font-bold tracking-tight text-[#17202A]">
            {title}
          </h3>
        </div>
      </div>

      {/* Rule */}

      <div
        className="
          mt-5
          overflow-x-auto
          border
          border-[#E9E9E6]
          bg-[#F8F7F4]
          p-5
        "
      >
        <div className="min-w-max text-center font-mono text-base font-semibold text-[#17324D] sm:text-lg">
          {rule}
        </div>
      </div>

      {/* Explanation */}

      {explanation && (
        <div className="mt-5 flex gap-3">
          <CheckCircle2
            size={18}
            strokeWidth={1.8}
            className="mt-1 shrink-0 text-[#18794E]"
          />

          <p className="text-sm leading-7 text-[#687481]">{explanation}</p>
        </div>
      )}

      {/* Example */}

      {example && (
        <div className="mt-5 border border-[#DCE5FF] bg-[#EEF3FF] p-4">
          <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2448C7]">
            <ArrowRight size={14} strokeWidth={1.8} />
            Example
          </div>

          <div className="text-sm leading-7 text-[#34404C]">{example}</div>
        </div>
      )}
    </article>
  );
}
