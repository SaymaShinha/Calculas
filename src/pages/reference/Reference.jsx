import { BookOpen, Calculator, FileText, Sigma } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

const resources = [
  {
    title: "Calculus Formulas",
    description:
      "Important formulas for differentiation, integration, limits, and series.",
    path: "/formulas",
    icon: Sigma,
  },
  {
    title: "Calculus Rules",
    description:
      "A practical reference for common derivative and integration rules.",
    path: "/rules",
    icon: FileText,
  },
  {
    title: "Calculators",
    description:
      "Interactive tools for functions, limits, derivatives, integrals, series, and optimization.",
    path: "/calculators",
    icon: Calculator,
  },
  {
    title: "Learn Calculus",
    description:
      "Structured lessons from foundations through advanced calculus topics.",
    path: "/learn",
    icon: BookOpen,
  },
];

export default function Reference() {
  return (
    <>
      <SEO
        title="Calculus Reference | Practical Math Lab"
        description="Use Practical Math Lab as a calculus reference for formulas, rules, lessons, calculators, applications, and numerical methods."
        canonical="/reference"
      />

      <PageHeader
        eyebrow="Reference"
        title="Calculus Reference Center"
        description="Quickly find formulas, rules, lessons, calculators, and practical resources throughout Practical Math Lab."
        icon={BookOpen}
      />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map(({ title, description, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className="group rounded-2xl border border-base-300 bg-base-100 p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content">
                <Icon size={23} />
              </div>

              <h2 className="mt-6 text-xl font-bold">{title}</h2>

              <p className="mt-3 leading-7 text-base-content/60">
                {description}
              </p>

              <div className="mt-5 text-sm font-semibold text-primary">
                Explore resource →
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-14 rounded-3xl border border-base-300 bg-base-200/50 p-8">
          <h2 className="text-2xl font-black">How to use this reference</h2>

          <p className="mt-4 max-w-3xl leading-8 text-base-content/60">
            Use the reference pages when you need a quick reminder, but return
            to the learning sections whenever you need deeper conceptual
            understanding. The strongest mathematical knowledge comes from
            combining definitions, examples, practice, and application.
          </p>
        </section>
      </main>
    </>
  );
}
