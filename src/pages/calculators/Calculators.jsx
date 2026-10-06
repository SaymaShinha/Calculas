import {
  Calculator,
  FunctionSquare,
  Gauge,
  Infinity,
  Sigma,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";

const calculators = [
  {
    title: "Function Grapher",
    description:
      "Plot mathematical functions and explore their behavior visually.",
    path: "/calculators/function",
    icon: FunctionSquare,
  },
  {
    title: "Limit Calculator",
    description:
      "Explore numerical limits from the left and right sides.",
    path: "/calculators/limit",
    icon: Infinity,
  },
  {
    title: "Derivative Calculator",
    description:
      "Calculate numerical derivatives and understand the rate of change.",
    path: "/calculators/derivative",
    icon: Gauge,
  },
  {
    title: "Integral Calculator",
    description:
      "Approximate definite integrals using numerical integration.",
    path: "/calculators/integral",
    icon: Sigma,
  },
  {
    title: "Series Calculator",
    description:
      "Calculate partial sums and investigate convergence behavior.",
    path: "/calculators/series",
    icon: Calculator,
  },
  {
    title: "Optimization Calculator",
    description:
      "Find numerical extrema of functions over a selected interval.",
    path: "/calculators/optimization",
    icon: Target,
  },
];

export default function Calculators() {
  return (
    <>
      <SEO
        title="Calculus Calculators | Practical Math Lab"
        description="Interactive calculus calculators for limits, derivatives, integrals, series, optimization, and function visualization."
      />

      <PageHeader
        eyebrow="Calculus Tools"
        title="Calculus Calculators"
        description="Interactive tools designed to help you calculate, visualize, and understand calculus."
      />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => {
            const Icon = calculator.icon;

            return (
              <Link
                key={calculator.path}
                to={calculator.path}
                className="group rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <h2 className="text-xl font-bold">
                  {calculator.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-base-content/70">
                  {calculator.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-primary">
                  Open calculator →
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
}