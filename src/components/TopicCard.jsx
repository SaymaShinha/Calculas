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

        {level && (
          <span className="border border-[#DEDEDB] bg-[#F8F7F4] px-2.5 py-1 text-[11px] font-semibold text-[#687481]">
            {level}
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

      {/* Topics */}

      {topics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="border border-[#E9E9E6] bg-[#F8F7F4] px-2.5 py-1 text-[11px] font-medium text-[#687481]"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}

      <div className="mt-auto pt-6">
        <div className="inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors group-hover:!text-[#2448C7]">
          <span>Explore topic</span>

          <ArrowRight
            size={15}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
