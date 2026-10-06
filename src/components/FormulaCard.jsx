import { Copy, Check, Sigma } from "lucide-react";
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
    <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sigma size={20} />
          </div>

          <div>
            {category && (
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {category}
              </div>
            )}

            <h3 className="font-bold">{title}</h3>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-ghost btn-sm btn-square"
          title="Copy formula"
          aria-label="Copy formula"
        >
          {copied ? (
            <Check size={17} className="text-success" />
          ) : (
            <Copy size={17} />
          )}
        </button>
      </div>

      <div className="my-5 overflow-x-auto rounded-xl bg-base-200 px-5 py-6 text-center">
        <div className="min-w-max font-mono text-lg font-semibold tracking-wide">
          {formula}
        </div>
      </div>

      {description && (
        <p className="text-sm leading-7 text-base-content/65">{description}</p>
      )}

      {variables?.length > 0 && (
        <div className="mt-5 border-t border-base-300 pt-4">
          <h4 className="mb-3 text-sm font-semibold">Where:</h4>

          <div className="space-y-2">
            {variables.map((item) => (
              <div key={item.symbol} className="flex gap-3 text-sm">
                <code className="min-w-10 font-semibold text-primary">
                  {item.symbol}
                </code>

                <span className="text-base-content/65">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
