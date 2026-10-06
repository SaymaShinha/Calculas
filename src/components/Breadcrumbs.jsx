import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function formatSegment(segment) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumbs({ items }) {
  const location = useLocation();

  const generatedItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, segments) => ({
      label: formatSegment(segment),
      path: `/${segments.slice(0, index + 1).join("/")}`,
    }));

  const breadcrumbItems = items || generatedItems;

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-base-content/50 transition hover:bg-base-200 hover:text-primary"
          >
            <Home size={15} />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li
              key={`${item.path}-${item.label}`}
              className="flex items-center gap-1.5"
            >
              <ChevronRight size={15} className="text-base-content/30" />

              {isLast ? (
                <span
                  className="max-w-[220px] truncate rounded-lg px-2 py-1.5 font-medium text-base-content/75"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="rounded-lg px-2 py-1.5 text-base-content/50 transition hover:bg-base-200 hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
