import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export default function CalculatorCard({
  title,
  description,
  path,
  icon: Icon = Calculator,
  category,
}) {
  return (
    <Link
      to={path}
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        rounded-xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-md
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
          <Icon size={20} strokeWidth={1.8} />
        </div>

        {category && (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
            {category}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      )}

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
          <span>Open calculator</span>

          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
