import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FunctionSquare,
  Infinity,
  Layers3,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import TopicCard from "../../components/TopicCard";

const topics = [
  {
    title: "Foundations",
    description:
      "Build the mathematical foundation for calculus with functions, graphs, algebra, notation, and rates of change.",
    path: "/learn/foundations",
    icon: BookOpen,
    level: "Beginner",
    topics: ["Functions", "Graphs", "Notation", "Algebra"],
  },
  {
    title: "Limits",
    description:
      "Understand what happens as a quantity approaches a value and why limits provide the foundation for derivatives and integrals.",
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
      "Learn how derivatives describe instantaneous change, slopes, motion, optimization, and the behavior of functions.",
    path: "/learn/derivatives",
    icon: FunctionSquare,
    level: "Intermediate",
    topics: [
      "Derivative rules",
      "Chain rule",
      "Implicit differentiation",
      "Applications",
    ],
  },
  {
    title: "Integrals",
    description:
      "Study accumulation, antiderivatives, definite integrals, area, and the connection between differentiation and integration.",
    path: "/learn/integrals",
    icon: Sigma,
    level: "Intermediate",
    topics: ["Antiderivatives", "Definite integrals", "FTC", "Applications"],
  },
  {
    title: "Series",
    description:
      "Explore infinite sequences and series, convergence, power series, and Taylor and Maclaurin expansions.",
    path: "/learn/series",
    icon: Sigma,
    level: "Advanced",
    topics: ["Sequences", "Convergence", "Power series", "Taylor series"],
  },
  {
    title: "Multivariable Calculus",
    description:
      "Extend calculus to functions of several variables using partial derivatives, gradients, optimization, and multiple integrals.",
    path: "/learn/multivariable-calculus",
    icon: Brain,
    level: "Advanced",
    topics: [
      "Partial derivatives",
      "Gradients",
      "Optimization",
      "Multiple integrals",
    ],
  },
  {
    title: "Vector Calculus",
    description:
      "Study vector fields and the calculus of curves and surfaces, including divergence, curl, and major integral theorems.",
    path: "/learn/vector-calculus",
    icon: Layers3,
    level: "Advanced",
    topics: ["Vector fields", "Line integrals", "Divergence", "Curl"],
  },
  {
    title: "Differential Equations",
    description:
      "Learn how equations involving derivatives describe changing systems and how common differential equations can be solved.",
    path: "/learn/differential-equations",
    icon: Calculator,
    level: "Advanced",
    topics: [
      "First-order ODEs",
      "Second-order ODEs",
      "Modeling",
      "Applications",
    ],
  },
];

const learningStages = [
  {
    number: "01",
    title: "Build the foundation",
    description:
      "Start with functions, graphs, notation, and the mathematical language used throughout calculus.",
  },
  {
    number: "02",
    title: "Understand change",
    description:
      "Learn limits and derivatives to understand instantaneous change and the behavior of functions.",
  },
  {
    number: "03",
    title: "Understand accumulation",
    description:
      "Use integrals to study area, accumulation, and the relationship between derivatives and integrals.",
  },
  {
    number: "04",
    title: "Go further",
    description:
      "Move into series, multivariable calculus, vector calculus, and differential equations.",
  },
];

const principles = [
  {
    title: "Concept first",
    description:
      "Learn what a mathematical idea means before memorizing a procedure.",
  },
  {
    title: "Formula with context",
    description:
      "See formulas together with the conditions, notation, and situations in which they are useful.",
  },
  {
    title: "Examples that connect",
    description:
      "Work from mathematical examples toward applications and practical problems.",
  },
];

export default function Learn() {
  return (
    <>
      <SEO
        title="Learn Calculus | Step-by-Step Calculus Lessons | Practical Math Lab"
        description="Learn calculus step by step with clear explanations of foundations, limits, derivatives, integrals, series, multivariable calculus, vector calculus, and differential equations."
        canonical="/learn"
      />

      <PageHeader
        eyebrow="Calculus Curriculum"
        title="Learn calculus with a clear path"
        description="Build your understanding from the foundations of functions and limits to derivatives, integrals, series, multivariable calculus, vector calculus, and differential equations."
      />

      {/* Introduction */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="pml-eyebrow">How to use this curriculum</div>

              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Learn the idea before learning the rule.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Calculus becomes much easier when its major ideas are connected.
                Instead of treating each formula as an isolated rule, this
                curriculum follows the mathematical relationships that make
                calculus work.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Each topic is designed to help you understand the concept, see
                the important formulas, work through examples, and recognize
                where the mathematics is used.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#17324d] text-white">
                  <BookOpen size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Recommended starting point
                  </p>

                  <p className="text-xs text-slate-500">New to calculus?</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Begin with <strong>Foundations</strong>, then continue through
                Limits, Derivatives, and Integrals. These four topics form the
                core path through introductory calculus.
              </p>

              <Link
                to="/learn/foundations"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Start with Foundations
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="pml-section">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="pml-eyebrow">Recommended learning path</div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Follow the ideas in order
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              The topics are arranged so that each major idea prepares you for
              the next one.
            </p>
          </div>

          <div className="mt-10 grid gap-0 border-y border-slate-200 md:grid-cols-2">
            {learningStages.map((stage) => (
              <div
                key={stage.number}
                className="grid gap-4 border-b border-slate-200 py-7 md:grid-cols-[60px_1fr] md:even:border-l md:even:pl-7 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="font-mono text-sm font-semibold text-blue-700">
                  {stage.number}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {stage.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="pml-eyebrow">Explore the curriculum</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Choose a calculus topic
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Start at the beginning or jump directly to a topic you are
                currently studying.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-slate-400 md:flex">
              <span>{topics.length}</span>
              <span>learning areas</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <TopicCard key={topic.path} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* Core concepts */}
      <section className="pml-section">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="pml-eyebrow">What you will learn</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                More than formulas
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                Understanding calculus means knowing what a formula represents,
                why it works, and when it should be used.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4 py-6">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#17324d]"
                    strokeWidth={1.8}
                  />

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {principle.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculus connection */}
      <section className="border-y border-slate-200 bg-[#f8f7f4]">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="pml-eyebrow justify-center">The central idea</div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Calculus connects change and accumulation.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Derivatives measure how quantities change. Integrals measure how
              quantities accumulate. The Fundamental Theorem of Calculus
              connects these two ideas and is one of the central results of the
              subject.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
                Change
              </div>

              <div className="mt-3 font-serif text-3xl text-slate-900">
                f′(x)
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Derivative
              </p>
            </div>

            <div className="flex items-center justify-center text-slate-300 md:hidden">
              <ChevronRight className="rotate-90" size={20} />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
                Connection
              </div>

              <div className="mt-3 font-serif text-3xl text-slate-900">
                ∫ f′(x) dx
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Accumulation
              </p>
            </div>

            <div className="flex items-center justify-center text-slate-300 md:hidden">
              <ChevronRight className="rotate-90" size={20} />
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
                Meaning
              </div>

              <div className="mt-3 font-serif text-3xl text-slate-900">
                F(b) − F(a)
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Net accumulation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-[#17324d]">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                Start learning
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Begin with the foundations of calculus.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Learn functions, graphs, notation, and the mathematical ideas
                that prepare you for limits and derivatives.
              </p>
            </div>

            <Link
              to="/learn/foundations"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
            >
              Start Foundations
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
