import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({
  eyebrow,
  title,
  description,
  backTo,
  backLabel = "Back",
  children,
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {backTo && (
          <Link
            to={backTo}
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        )}

        {eyebrow && <div className="pml-eyebrow">{eyebrow}</div>}

        <h1 className="pml-title mt-4 max-w-4xl text-4xl sm:text-5xl">
          {title}
        </h1>

        {description && <p className="pml-lead mt-5">{description}</p>}

        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
