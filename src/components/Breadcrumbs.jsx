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

  // Don't render breadcrumbs on the homepage.
  if (!location.pathname || location.pathname === "/") {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-[1180px] px-4 pt-5 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {/* Home */}

        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 !text-[#687481] transition-colors hover:bg-[#F8F7F4] hover:!text-[#17324D]"
          >
            <Home size={15} strokeWidth={1.8} />

            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {/* Breadcrumb items */}

        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li
              key={`${item.path}-${item.label}`}
              className="flex min-w-0 items-center gap-1"
            >
              <ChevronRight
                size={15}
                strokeWidth={1.7}
                className="shrink-0 text-[#B4BCC4]"
              />

              {isLast ? (
                <span
                  className="max-w-[220px] truncate rounded-md px-2 py-1.5 font-medium text-[#34404C]"
                  aria-current="page"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="max-w-[180px] truncate rounded-md px-2 py-1.5 !text-[#687481] transition-colors hover:bg-[#F8F7F4] hover:!text-[#17324D]"
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
