import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopicCard({
  title,
  description,
  path,
  icon: Icon = BookOpen,
  level,
  topics = [],
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
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
          <Icon size={20} strokeWidth={1.8} />
        </div>

        {level && (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
            {level}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      )}

      {topics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
          <span>Explore topic</span>

          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
