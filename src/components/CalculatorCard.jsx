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

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#17324D]">
          <Icon size={20} strokeWidth={1.8} />
        </div>

        {category && (
          <span className="border border-[#DEDEDB] bg-[#F8F7F4] px-2.5 py-1 text-[11px] font-semibold text-[#687481]">
            {category}
          </span>
        )}
      </div>

      {/* Title */}

      <h3 className="mt-6 text-lg font-bold tracking-tight text-[#17202A]">
        {title}
      </h3>

      {/* Description */}

      {description && (
        <p className="mt-3 text-sm leading-6 text-[#687481]">{description}</p>
      )}

      {/* Action */}

      <div className="mt-auto pt-6">
        <div className="inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors group-hover:!text-[#2448C7]">
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
