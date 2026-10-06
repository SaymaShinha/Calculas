import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FunctionSquare,
  LineChart,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const representations = [
  {
    title: "Equation",
    description:
      "An equation gives a precise mathematical rule for calculating an output from an input.",
    example: "f(x) = x² + 2x + 1",
  },
  {
    title: "Table",
    description:
      "A table pairs input values with their corresponding outputs and can reveal numerical patterns.",
    example: "x → f(x)",
  },
  {
    title: "Graph",
    description:
      "A graph provides a visual representation of how the output changes as the input changes.",
    example: "Input → Output",
  },
];

const functionProperties = [
  {
    title: "Domain",
    description: "The set of input values for which a function is defined.",
  },
  {
    title: "Range",
    description: "The set of output values produced by the function.",
  },
  {
    title: "Intercepts",
    description: "Points where a graph crosses or touches an axis.",
  },
  {
    title: "Increasing and decreasing",
    description:
      "Intervals where the function's output rises or falls as the input increases.",
  },
];

const habits = [
  "Identify the input and output variables.",
  "Determine the domain before evaluating a function.",
  "Look at both the equation and its graph.",
  "Check whether the function is increasing or decreasing.",
  "Think about what the variables represent in the real situation.",
];

export default function Foundations() {
  return (
    <>
      <SEO
        title="Calculus Foundations | Functions, Graphs & Rates of Change"
        description="Learn the mathematical foundations of calculus, including functions, domain and range, graphs, rates of change, variables, and mathematical modeling."
        canonical="/learn/foundations"
      />

      <PageHeader
        eyebrow="Learn • Foundations"
        title="Calculus Foundations"
        description="Build the mathematical language you need for calculus. Learn how functions describe relationships, how graphs reveal behavior, and how rates of change lead naturally to derivatives."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="pml-prose">
                <div className="pml-eyebrow">Starting point</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What is calculus built on?
                </h2>

                <p className="mt-5">
                  Calculus is the mathematics of change and accumulation. To
                  describe those ideas precisely, we need a way to represent
                  quantities, relationships, and how one quantity depends on
                  another.
                </p>

                <p>
                  Functions provide that language. They allow us to describe how
                  an output changes when an input changes. This simple
                  relationship becomes the foundation for limits, derivatives,
                  integrals, and mathematical modeling.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#17324d] text-white">
                    <FunctionSquare size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Core idea
                    </p>
                    <p className="text-xs text-slate-500">
                      A function describes a relationship
                    </p>
                  </div>
                </div>

                <div className="pml-formula mt-6 text-center">
                  <MathRenderer block>f(x) = x² + 2x + 1</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Here, <strong>x</strong> is the input and{" "}
                  <strong>f(x)</strong> is the corresponding output.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Functions */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">01 · Functions</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Functions turn relationships into mathematics.
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  A function assigns an output to each allowed input. In
                  calculus, functions are used to describe quantities such as
                  position, velocity, temperature, population, cost, and
                  distance.
                </p>

                <p>
                  A function can be represented in several different ways.
                  Learning to move between these representations is an important
                  mathematical skill.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {representations.map((item) => (
                <div key={item.title} className="pml-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <BookOpen size={19} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                    <code className="font-mono text-xs font-semibold text-[#17324d]">
                      {item.example}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domain and range */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Function properties</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                  Know what a function can do.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Before differentiating or integrating a function, it is useful
                  to understand its basic properties and behavior.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {functionProperties.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rates of change */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">02 · Rates of change</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Calculus begins with change.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    Suppose a quantity changes from one value to another. We can
                    measure its average rate of change by comparing the change
                    in the output with the change in the input.
                  </p>

                  <p>
                    For a function <strong>f(x)</strong>, the average rate of
                    change between two points is:
                  </p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer block>
                    {"Average rate of change = Δy / Δx"}
                  </MathRenderer>
                </div>

                <div className="pml-prose mt-5">
                  <p>
                    This idea appears everywhere. For example, average speed is
                    distance divided by elapsed time. In calculus, this idea is
                    taken further to describe change at an exact instant.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <LineChart size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  From average to instantaneous change
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  The average rate of change uses two points. The derivative
                  will allow us to study what happens at a single point by
                  considering what happens as the two points move closer
                  together.
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    This leads to
                  </p>

                  <Link
                    to="/learn/limits"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Limits
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphs */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">03 · Graphs</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Learn to read mathematical behavior.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Equations tell us how a function is defined. Graphs help us
                  see what that definition means.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <LineChart size={19} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      What can a graph tell you?
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        "Where the function is increasing",
                        "Where the function is decreasing",
                        "Where it crosses an axis",
                        "Where turning points occur",
                        "Whether behavior approaches a value",
                        "How quickly the graph changes",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex gap-2.5 text-sm text-slate-600"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#17324d]"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical habits */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="pml-eyebrow justify-center">A useful habit</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Connect every representation.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                When studying a function, do not look at its equation in
                isolation. Try to connect the symbolic, numerical, and graphical
                views.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
              {habits.map((habit, index) => (
                <div key={habit} className="flex gap-4 py-5">
                  <span className="font-mono text-xs font-semibold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-slate-600">{habit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">Foundations summary</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                  The ideas to take with you
                </h2>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  Functions give us a way to describe relationships. Graphs help
                  us see those relationships. Rates of change tell us how
                  quantities vary. These ideas provide the foundation for the
                  central concepts of calculus.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <div className="space-y-4">
                  {[
                    "Functions describe relationships between quantities.",
                    "Domain and range describe valid inputs and possible outputs.",
                    "Graphs provide a visual view of mathematical behavior.",
                    "Average rate of change compares changes in two quantities.",
                    "Instantaneous rate of change leads to the derivative.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#18794e]"
                      />

                      <p className="text-sm leading-6 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next step */}
        <section className="border-t border-slate-200 bg-[#17324d]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Next topic
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  What happens as we approach a value?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  The next step is understanding limits—the idea that allows
                  calculus to describe behavior at an exact point.
                </p>
              </div>

              <Link
                to="/learn/limits"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Limits
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
