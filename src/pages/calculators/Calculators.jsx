import {
  ArrowRight,
  Calculator,
  CheckCircle2,
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
    number: "01",
    title: "Function Grapher",
    shortDescription:
      "Visualize a function and explore how its output changes as the input changes.",
    explanation:
      "A function describes a relationship between an input and an output. A graph makes that relationship visible, helping you identify intercepts, turning points, increasing and decreasing intervals, and overall behavior.",
    question: "What does the function look like?",
    path: "/calculators/function",
    icon: FunctionSquare,
    level: "Beginner",
    topics: ["Functions", "Graphs", "Behavior"],
  },
  {
    number: "02",
    title: "Limit Calculator",
    shortDescription:
      "Investigate what a function approaches as the input gets closer to a particular value.",
    explanation:
      "Limits describe the behavior of a function near a point. They are fundamental to continuity, derivatives, and many important ideas in calculus.",
    question: "What value does the function approach?",
    path: "/calculators/limit",
    icon: Infinity,
    level: "Beginner",
    topics: ["Limits", "Continuity", "Approaching values"],
  },
  {
    number: "03",
    title: "Derivative Calculator",
    shortDescription:
      "Calculate the rate at which a function changes at a particular point.",
    explanation:
      "The derivative measures instantaneous rate of change. Geometrically, it represents the slope of the tangent line to a curve and can be used to study motion, growth, and optimization.",
    question: "How quickly is the function changing?",
    path: "/calculators/derivative",
    icon: Gauge,
    level: "Intermediate",
    topics: ["Derivatives", "Slope", "Rate of change"],
  },
  {
    number: "04",
    title: "Integral Calculator",
    shortDescription:
      "Estimate the accumulated value of a function over an interval.",
    explanation:
      "A definite integral measures accumulated change and can represent quantities such as area, distance, work, and total growth. Numerical integration provides an approximation when an exact antiderivative is unavailable or inconvenient.",
    question: "How much has accumulated?",
    path: "/calculators/integral",
    icon: Sigma,
    level: "Intermediate",
    topics: ["Integrals", "Area", "Accumulation"],
  },
  {
    number: "05",
    title: "Series Calculator",
    shortDescription:
      "Calculate partial sums and explore how an infinite series behaves as more terms are added.",
    explanation:
      "An infinite series adds infinitely many terms. Calculating partial sums helps you investigate whether the sequence of sums approaches a finite value or continues without settling.",
    question: "Does the series converge?",
    path: "/calculators/series",
    icon: Calculator,
    level: "Advanced",
    topics: ["Sequences", "Series", "Convergence"],
  },
  {
    number: "06",
    title: "Optimization Calculator",
    shortDescription:
      "Find numerical maximum and minimum values of a function over a chosen interval.",
    explanation:
      "Optimization uses calculus to locate the largest or smallest possible value of a quantity. It is widely used in geometry, engineering, economics, physics, and applied mathematics.",
    question: "Where is the function largest or smallest?",
    path: "/calculators/optimization",
    icon: Target,
    level: "Intermediate",
    topics: ["Optimization", "Extrema", "Critical points"],
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Identify the quantity",
    description:
      "First decide what you are trying to find: a function value, a limit, a rate of change, an accumulated quantity, a sum, or an optimum.",
  },
  {
    number: "02",
    title: "Choose the method",
    description:
      "Select the calculator that matches the mathematical question. The method matters because different calculus concepts measure different quantities.",
  },
  {
    number: "03",
    title: "Check the inputs",
    description:
      "Make sure the function, interval, point, or other parameters represent the original problem correctly before calculating.",
  },
  {
    number: "04",
    title: "Interpret the result",
    description:
      "A numerical answer is only useful when you understand what it represents and whether the method used introduces approximation or other limitations.",
  },
];

export default function Calculators() {
  return (
    <>
      <SEO
        title="Calculus Calculators | Limits, Derivatives, Integrals & More"
        description="Explore interactive calculus calculators for functions, limits, derivatives, integrals, infinite series, and optimization. Learn what each calculation means and when to use it."
        canonical="/calculators"
      />

      <PageHeader
        eyebrow="Calculus Tools"
        title="Calculus Calculators"
        description="Interactive calculators for exploring functions, limits, derivatives, integrals, series, and optimization—with explanations that help you understand the mathematics behind each result."
      />

      <main>
        {/* Introduction */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="pml-eyebrow">Learn through calculation</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Calculators that help you understand calculus
                </h2>

                <div className="pml-prose mt-5 max-w-3xl">
                  <p>
                    Calculus is not simply a collection of formulas. It is a way
                    of describing change, accumulation, motion, shape, and
                    relationships between quantities.
                  </p>

                  <p>
                    These calculators are designed to help you connect those
                    ideas with actual numerical results. Use them to check
                    calculations, experiment with functions, compare values, and
                    develop intuition.
                  </p>

                  <p>
                    For the best learning experience, try to predict what the
                    result should mean before using the calculator. Then use the
                    calculated result to test your understanding.
                  </p>
                </div>
              </div>

              <aside className="pml-card h-fit">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Calculator size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      A calculator is a learning tool
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The result is only the beginning. Understanding what the
                      result means mathematically is the more important part.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Calculator selection */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="max-w-3xl">
                <div className="pml-eyebrow">Explore the tools</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Choose what you want to investigate
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Start with the mathematical question you are trying to answer.
                  Each calculator focuses on a different idea from calculus.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {calculators.map((calculator) => {
                  const Icon = calculator.icon;

                  return (
                    <article
                      key={calculator.path}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md sm:p-8"
                    >
                      <div className="grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                        {/* Number and icon */}
                        <div className="flex items-center gap-4 lg:block">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                            <Icon size={23} strokeWidth={1.8} />
                          </div>

                          <div className="mt-0 text-xs font-bold tracking-[0.14em] text-slate-400 lg:mt-4">
                            {calculator.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2F5BEA]">
                              {calculator.level}
                            </span>

                            <span className="text-slate-300">•</span>

                            <span className="text-sm font-medium text-slate-500">
                              {calculator.question}
                            </span>
                          </div>

                          <h3 className="mt-3 text-2xl font-bold text-slate-900">
                            {calculator.title}
                          </h3>

                          <p className="mt-3 text-base font-medium leading-7 text-slate-700">
                            {calculator.shortDescription}
                          </p>

                          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                            {calculator.explanation}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {calculator.topics.map((topic) => (
                              <span
                                key={topic}
                                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="lg:pt-1">
                          <Link
                            to={calculator.path}
                            className="pml-btn-primary inline-flex w-full items-center justify-center gap-2 whitespace-nowrap lg:w-auto"
                          >
                            Open calculator
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Concept map */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">The bigger picture</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  How the calculators connect
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  The topics in calculus are closely connected. Functions
                  describe relationships, limits describe nearby behavior,
                  derivatives describe change, and integrals describe
                  accumulation.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Series and optimization build on these ideas and extend them
                  to approximation, convergence, and decision-making.
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-semibold text-[#2F5BEA]">
                    Functions
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Describe relationships between quantities.
                  </p>
                </div>

                <div className="pl-6 text-slate-300">↓</div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-semibold text-[#2F5BEA]">
                    Limits
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Describe what happens as an input approaches a value.
                  </p>
                </div>

                <div className="pl-6 text-slate-300">↓</div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-semibold text-[#2F5BEA]">
                    Derivatives
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Measure instantaneous change.
                  </p>
                </div>

                <div className="pl-6 text-slate-300">↓</div>

                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-semibold text-[#2F5BEA]">
                    Integrals
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Measure accumulation and connect back to derivatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="max-w-3xl">
                <div className="pml-eyebrow">A better way to calculate</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Four steps for using a calculator effectively
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Following a consistent process helps prevent calculator
                  results from becoming disconnected from the original
                  mathematics.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {learningSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <div className="text-sm font-bold text-[#2F5BEA]">
                      {step.number}
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important note */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex gap-4">
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-[#9A5B00]"
                />

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Numerical results may be approximations
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Several calculators on this site use numerical methods.
                    Their results may therefore contain approximation error. The
                    accuracy can depend on the function, interval, step size,
                    tolerance, and numerical method being used.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Whenever possible, compare the numerical result with an
                    exact calculation or mathematical reasoning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning CTA */}
        <section className="pml-section pt-0">
          <div className="pml-container">
            <div className="rounded-2xl bg-[#17324D] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                  Continue learning
                </div>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Learn the mathematics behind the tools
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Use the calculators to experiment, then study the underlying
                  concepts to understand why the methods work.
                </p>
              </div>

              <Link
                to="/learn"
                className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition hover:bg-slate-100 lg:mt-0"
              >
                Explore the Learn section
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
