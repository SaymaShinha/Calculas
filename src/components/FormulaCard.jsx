import { Check, Copy, Sigma } from "lucide-react";
import { useState } from "react";

export default function FormulaCard({
  title,
  formula,
  description,
  category,
  variables,
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formula);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  }

  return (
    <article
      className="
        flex
        h-full
        min-w-0
        flex-col
        border
        border-[#DEDEDB]
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-[#BFC8D2]
        hover:shadow-md
        sm:p-6
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#17324D]">
            <Sigma size={20} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            {category && (
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2F5BEA]">
                {category}
              </div>
            )}

            <h3 className="text-base font-bold tracking-tight text-[#17202A] sm:text-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Copy button */}

        <button
          type="button"
          onClick={handleCopy}
          title={copied ? "Formula copied" : "Copy formula"}
          aria-label={copied ? "Formula copied" : "Copy formula"}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            border
            border-[#DEDEDB]
            bg-white
            text-[#687481]
            transition-colors
            hover:border-[#BFC8D2]
            hover:bg-[#F8F7F4]
            hover:text-[#17324D]
            focus:outline-none
            focus:ring-2
            focus:ring-[#2F5BEA]/20
          "
        >
          {copied ? (
            <Check size={17} strokeWidth={2} className="text-[#18794E]" />
          ) : (
            <Copy size={17} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Formula */}

      <div className="my-5 overflow-x-auto border border-[#E9E9E6] bg-[#F8F7F4] px-5 py-6">
        <div className="min-w-max text-center font-mono text-base font-semibold tracking-wide text-[#17324D] sm:text-lg">
          {formula}
        </div>
      </div>

      {/* Description */}

      {description && (
        <p className="text-sm leading-7 text-[#687481]">{description}</p>
      )}

      {/* Variables */}

      {variables?.length > 0 && (
        <div className="mt-5 border-t border-[#E9E9E6] pt-4">
          <h4 className="mb-3 text-sm font-bold text-[#34404C]">Where:</h4>

          <div className="space-y-2.5">
            {variables.map((item) => (
              <div key={item.symbol} className="flex gap-3 text-sm">
                <code className="min-w-10 shrink-0 font-mono font-semibold text-[#17324D]">
                  {item.symbol}
                </code>

                <span className="leading-6 text-[#687481]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
