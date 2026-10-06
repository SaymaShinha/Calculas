// src/pages/Home.jsx

import {
  ArrowRight,
  BookOpen,
  Calculator,
  FunctionSquare,
  Infinity,
  LineChart,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO.jsx";
import TopicCard from "../components/TopicCard.jsx";
import CalculatorCard from "../components/CalculatorCard.jsx";

const topics = [
  {
    title: "Foundations",
    description:
      "Build the mathematical foundation needed to understand functions, graphs, notation, and change.",
    path: "/learn/foundations",
    icon: BookOpen,
    level: "Beginner",
    topics: ["Functions", "Graphs", "Notation", "Algebra"],
  },
  {
    title: "Limits",
    description:
      "Understand the central idea behind calculus: what happens as a quantity approaches a value.",
    path: "/learn/limits",
    icon: Infinity,
    level: "Beginner",
    topics: [
      "Continuity",
      "One-sided limits",
      "Infinite limits",
      "Squeeze theorem",
    ],
  },
  {
    title: "Derivatives",
    description:
      "Learn how derivatives describe instantaneous change, slopes, motion, and optimization.",
    path: "/learn/derivatives",
    icon: LineChart,
    level: "Core",
    topics: [
      "Product rule",
      "Chain rule",
      "Implicit differentiation",
      "Applications",
    ],
  },
  {
    title: "Integrals",
    description:
      "Study accumulation, area, the Fundamental Theorem of Calculus, and practical integration methods.",
    path: "/learn/integrals",
    icon: Sigma,
    level: "Core",
    topics: ["Antiderivatives", "Definite integrals", "FTC", "Applications"],
  },
];

const calculators = [
  {
    title: "Function Grapher",
    description:
      "Plot mathematical functions and explore their behavior visually.",
    path: "/calculators/function",
    icon: FunctionSquare,
    category: "Graphing",
  },
  {
    title: "Derivative Calculator",
    description:
      "Calculate and understand numerical derivatives at selected points.",
    path: "/calculators/derivative",
    icon: LineChart,
    category: "Derivatives",
  },
  {
    title: "Integral Calculator",
    description:
      "Evaluate definite integrals and explore numerical integration.",
    path: "/calculators/integral",
    icon: Sigma,
    category: "Integrals",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the idea",
    description:
      "Start with what a mathematical concept means before relying on a formula.",
  },
  {
    number: "02",
    title: "See the mathematics",
    description:
      "Use formulas, graphs, examples, and visual explanations to connect the ideas.",
  },
  {
    number: "03",
    title: "Apply the method",
    description:
      "Work through practical problems and see where calculus is useful.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Practical Math Lab | Learn Calculus Clearly"
        description="Learn calculus from first principles with clear explanations, formulas, examples, applications, and interactive calculators."
        canonical="/"
      />

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#DEDEDB] bg-white">
        <div className="absolute inset-0 pml-math-grid opacity-60" />

        <div className="relative mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="pml-eyebrow">Calculus · Theory · Application</div>

            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#17202A] sm:text-6xl lg:text-7xl">
              Calculus explained
              <span className="block text-[#17324D]">clearly.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#687481] sm:text-lg">
              Learn the ideas behind calculus, understand the formulas, work
              through examples, and apply the mathematics with practical tools.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/learn" className="pml-btn-primary !text-white">
                Start learning
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/calculators"
                className="pml-btn-secondary !text-[#17324D]"
              >
                Browse calculators
                <Calculator size={17} />
              </Link>
            </div>
          </div>

          <div className="mt-16 max-w-3xl border-l-2 border-[#2F5BEA] pl-5">
            <p className="font-serif text-xl leading-relaxed text-[#34404C] sm:text-2xl">
              Calculus is the mathematics of change, accumulation, and the
              relationship between the two.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING PATH
          ===================================================== */}

      <section className="pml-section">
        <div className="pml-container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="pml-eyebrow">Learning path</div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17202A] sm:text-4xl">
                Build your understanding step by step
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#687481]">
                Start with the foundations and gradually move toward the central
                ideas of calculus.
              </p>
            </div>

            <Link
              to="/learn"
              className="inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors hover:!text-[#2448C7]"
            >
              View all topics
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <TopicCard key={topic.path} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CALCULATORS
          ===================================================== */}

      <section className="border-y border-[#DEDEDB] bg-white">
        <div className="pml-container py-16 md:py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="pml-eyebrow">Interactive tools</div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17202A] sm:text-4xl">
                Calculate and explore
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#687481]">
                Use interactive tools to test ideas, check calculations, and
                explore mathematical behavior.
              </p>
            </div>

            <Link
              to="/calculators"
              className="inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors hover:!text-[#2448C7]"
            >
              All calculators
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {calculators.map((calculator) => (
              <CalculatorCard key={calculator.path} {...calculator} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
          ===================================================== */}

      <section className="pml-section">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="pml-eyebrow">Our approach</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#17202A] sm:text-4xl">
                Learn the mathematics,
                <span className="block text-[#17324D]">
                  not just the procedure.
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#687481]">
                A good calculus resource should help you understand why a method
                works, when to use it, and what the result actually means.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors hover:!text-[#2448C7]"
              >
                Learn more about Practical Math Lab
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="divide-y divide-[#DEDEDB] border-y border-[#DEDEDB]">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-4 py-7 sm:grid-cols-[64px_1fr]"
                >
                  <div className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    {principle.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#17202A]">
                      {principle.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#687481]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT OVERVIEW
          ===================================================== */}

      <section className="border-y border-[#DEDEDB] bg-white">
        <div className="pml-container py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="pml-eyebrow">Beyond the basics</div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17202A] sm:text-4xl">
              A broader view of calculus
            </h2>

            <p className="mt-4 leading-8 text-[#687481]">
              Calculus becomes more useful when its central ideas are connected
              to applications, computation, and mathematical reasoning.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="pml-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <BookOpen size={21} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                Learn
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Build a strong conceptual foundation through structured lessons
                covering the major ideas of calculus.
              </p>

              <Link
                to="/learn"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
              >
                Explore lessons
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="pml-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Calculator size={21} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                Calculate
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Experiment with functions, limits, derivatives, integrals,
                series, and optimization using interactive tools.
              </p>

              <Link
                to="/calculators"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
              >
                Open calculators
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="pml-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Sigma size={21} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                Implement
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Understand how calculus can be approximated and transformed into
                numerical algorithms for computational use.
              </p>

              <Link
                to="/implementation"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
              >
                Explore implementation
                <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="border-t border-[#DEDEDB] bg-[#17324D]">
        <div className="pml-container py-14 md:py-16">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                Ready to begin?
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Start with the mathematics that interests you.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                Explore a topic, work through an example, or use a calculator to
                investigate an idea.
              </p>
            </div>

            <Link
              to="/learn"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold !text-[#17324D] transition-colors hover:bg-slate-100 hover:!text-[#10283F]"
            >
              Explore calculus
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
