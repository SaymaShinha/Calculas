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
        rounded-2xl
        border
        border-base-300
        bg-base-100
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
        hover:shadow-primary/5
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
            transition-colors
            duration-300
            group-hover:bg-primary
            group-hover:text-primary-content
          "
        >
          <Icon size={23} strokeWidth={2} />
        </div>

        {level && (
          <span className="shrink-0 rounded-full bg-base-200 px-2.5 py-1 text-xs font-semibold text-base-content/60">
            {level}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="mt-6 text-xl font-bold tracking-tight">{title}</h3>

        {description && (
          <p className="mt-3 text-sm leading-7 text-base-content/60">
            {description}
          </p>
        )}
      </div>

      {/* Topics */}
      {topics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="rounded-lg bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/60"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <span>Start learning</span>

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
