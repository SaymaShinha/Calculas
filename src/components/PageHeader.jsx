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
    <section className="border-b border-[#DEDEDB] bg-white">
      <div className="pml-container py-12 md:py-16">
        {backTo && (
          <Link
            to={backTo}
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              !text-[#687481]
              transition-colors
              hover:!text-[#17324D]
            "
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            {backLabel}
          </Link>
        )}

        {eyebrow && <div className="pml-eyebrow">{eyebrow}</div>}

        <h1 className="pml-title mt-4 max-w-4xl text-4xl sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="pml-lead mt-5 max-w-3xl">{description}</p>
        )}

        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
