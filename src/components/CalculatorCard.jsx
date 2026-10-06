import { ArrowRight, Calculator, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CalculatorCard({
  title,
  description,
  path,
  icon: Icon = Calculator,
  category,
  difficulty = "All levels",
  featured = false,
}) {
  return (
    <Link
      to={path}
      className={`group relative block overflow-hidden rounded-2xl border bg-base-100 p-6 transition-all duration-300 ${
        featured
          ? "border-primary/30 shadow-lg shadow-primary/5"
          : "border-base-300 shadow-sm"
      } hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl`}
    >
      {featured && (
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            <Sparkles size={12} />
            Featured
          </span>
        </div>
      )}

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-content">
        <Icon size={23} />
      </div>

      {category && (
        <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
          {category}
        </div>
      )}

      <h3 className="mt-2 text-xl font-bold tracking-tight">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-base-content/60">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="rounded-lg bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/55">
          {difficulty}
        </span>

        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          Open calculator
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
