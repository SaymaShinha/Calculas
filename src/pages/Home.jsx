import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Sigma,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import TopicCard from "../components/TopicCard";
import CalculatorCard from "../components/CalculatorCard";

const topics = [
  {
    title: "Calculus Foundations",
    description:
      "Build the mathematical foundation needed to understand functions, graphs, rates of change, limits, continuity, and the central ideas of calculus.",
    path: "/learn/foundations",
    icon: GraduationCap,
    level: "Beginner",
    topics: ["Functions", "Graphs", "Rates", "Continuity"],
  },
  {
    title: "Limits",
    description:
      "Understand the language of limits and how limits provide the foundation for derivatives, continuity, and integration.",
    path: "/learn/limits",
    icon: Sigma,
    level: "Beginner",
    topics: ["Limits", "Continuity", "One-sided Limits", "Infinity"],
  },
  {
    title: "Derivatives",
    description:
      "Learn derivatives from first principles, derivative rules, implicit differentiation, higher derivatives, and applications.",
    path: "/learn/derivatives",
    icon: FlaskConical,
    level: "Intermediate",
    topics: ["Rules", "Chain Rule", "Implicit", "Optimization"],
  },
  {
    title: "Integrals",
    description:
      "Explore indefinite and definite integrals, the Fundamental Theorem of Calculus, substitution, and practical applications.",
    path: "/learn/integrals",
    icon: BookOpen,
    level: "Intermediate",
    topics: ["Antiderivatives", "Area", "FTC", "Substitution"],
  },
];

const calculators = [
  {
    title: "Function Grapher",
    description:
      "Explore functions visually and develop intuition about curves, intercepts, growth, and mathematical behavior.",
    path: "/calculators/function",
    icon: Sigma,
    category: "Visualization",
    difficulty: "All levels",
    featured: true,
  },
  {
    title: "Derivative Calculator",
    description:
      "Calculate derivatives and study how the rate of change of a function behaves.",
    path: "/calculators/derivative",
    icon: FlaskConical,
    category: "Differentiation",
    difficulty: "Intermediate",
  },
  {
    title: "Integral Calculator",
    description:
      "Evaluate integrals and connect antiderivatives with area, accumulation, and numerical methods.",
    path: "/calculators/integral",
    icon: Calculator,
    category: "Integration",
    difficulty: "Intermediate",
  },
];

const benefits = [
  "Concept-first explanations",
  "Interactive calculations",
  "Real-world applications",
];

export default function Home() {
  return (
    <>
      <SEO
        title="Practical Math Lab | Learn Calculus"
        description="Learn calculus through clear explanations, formulas, rules, interactive calculators, examples, applications, visualization, and numerical methods."
        canonical="/"
      />

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="relative overflow-hidden border-b border-base-300/60">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles size={16} />
              Calculus from first principles to applications
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Understand calculus.
              <span className="block text-primary">
                Don't just memorize it.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-base-content/65 sm:text-xl">
              Practical Math Lab brings together explanations, formulas,
              calculations, visualizations, applications, and numerical methods
              into one structured calculus learning resource.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/learn"
                className="btn btn-primary btn-lg shadow-lg shadow-primary/20"
              >
                <BookOpen size={19} />
                Start Learning
                <ArrowRight size={18} />
              </Link>

              <Link to="/calculators" className="btn btn-outline btn-lg">
                <Calculator size={19} />
                Explore Calculators
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-base-content/65"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-success" />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          LEARNING PATH
      ================================================================ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            A structured path
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Learn calculus in the right order
          </h2>

          <p className="mt-4 text-base leading-8 text-base-content/60">
            Calculus becomes easier when its ideas are connected. Start with
            foundations, understand limits, then build toward derivatives,
            integrals, series, multivariable calculus, and differential
            equations.
          </p>
        </div>

        {/* IMPORTANT: explicit grid */}
        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic.path} className="min-w-0">
              <TopicCard {...topic} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/learn" className="btn btn-outline">
            Explore the complete curriculum
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ================================================================
          CALCULATORS
      ================================================================ */}
      <section className="border-y border-base-300/60 bg-base-200/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Learn by doing
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Interactive calculus tools
              </h2>

              <p className="mt-4 text-base leading-8 text-base-content/60">
                Experiment with mathematical ideas using interactive tools. Each
                calculator is designed to support understanding rather than
                replace it.
              </p>
            </div>

            <Link to="/calculators" className="btn btn-outline shrink-0">
              All calculators
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* IMPORTANT: explicit 3-column grid */}
          <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {calculators.map((calculator) => (
              <div key={calculator.path} className="min-w-0">
                <CalculatorCard {...calculator} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          PHILOSOPHY
      ================================================================ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-200/40">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="p-8 sm:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg">
                <Sigma size={28} />
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight">
                The Practical Math Lab approach
              </h2>

              <p className="mt-4 text-base leading-7 text-base-content/55">
                Learn the meaning behind the mathematics, not just the
                procedure.
              </p>
            </div>

            {/* Right */}
            <div className="border-t border-base-300/70 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="space-y-6 text-base leading-8 text-base-content/65">
                <p>
                  Calculus is not a collection of unrelated formulas. Limits
                  explain instantaneous change, derivatives describe that
                  change, and integrals describe accumulation.
                </p>

                <p>
                  Our goal is to connect those ideas. When you encounter a
                  formula, you should understand what it means, when it applies,
                  how it is derived, and how it can be used.
                </p>

                <p>
                  From introductory calculus to numerical implementation,
                  Practical Math Lab is designed to be a reference you can
                  return to whenever a concept needs clarification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
