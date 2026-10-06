import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FunctionSquare,
  LineChart,
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
    example: "f(x) = x^2 + 2x + 1",
  },
  {
    title: "Table",
    description:
      "A table pairs input values with corresponding outputs and can reveal numerical patterns.",
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
    description: "The set of output values that a function can produce.",
  },
  {
    title: "Intercepts",
    description:
      "Points where the graph crosses or touches the coordinate axes.",
  },
  {
    title: "Increasing and decreasing",
    description:
      "Intervals where the function's output rises or falls as the input increases.",
  },
];

const graphObservations = [
  "Where the function is increasing",
  "Where the function is decreasing",
  "Where the graph crosses an axis",
  "Where turning points occur",
  "Whether the graph approaches a particular value",
  "How rapidly the function changes",
];

const habits = [
  "Identify the input and output variables.",
  "Determine the domain before evaluating a function.",
  "Look at both the equation and its graph.",
  "Check whether the function is increasing or decreasing.",
  "Think about what the variables represent in the real situation.",
];

const summaryPoints = [
  "Functions describe relationships between quantities.",
  "Domain and range describe valid inputs and possible outputs.",
  "Equations, tables, and graphs are different representations of the same relationship.",
  "Graphs provide a visual view of mathematical behavior.",
  "Average rate of change compares changes in two quantities.",
  "Instantaneous rate of change leads naturally to the derivative.",
];

export default function Foundations() {
  return (
    <>
      <SEO
        title="Calculus Foundations | Functions, Graphs & Rates of Change"
        description="Learn the mathematical foundations of calculus, including functions, domain and range, graphs, variables, rates of change, and mathematical modeling."
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
                  an output changes when an input changes. This relationship
                  becomes the foundation for limits, derivatives, integrals,
                  differential equations, and mathematical modeling.
                </p>

                <p>
                  Before studying the techniques of calculus, it is therefore
                  useful to understand functions, variables, graphs, domain,
                  range, and rates of change.
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
                  <MathRenderer>{"f(x) = x^2 + 2x + 1"}</MathRenderer>
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
                  A function assigns an output to each allowed input. The input
                  is often represented by <strong>x</strong>, while the output
                  is represented by <strong>f(x)</strong>.
                </p>

                <p>
                  Functions can describe quantities such as position,
                  temperature, population, revenue, cost, distance, and
                  concentration. Once a relationship has been represented as a
                  function, calculus gives us tools for studying how that
                  relationship changes.
                </p>

                <p>
                  A function can also be represented in several different ways.
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

        {/* Function notation */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">Function notation</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Read the notation before calculating.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    Function notation tells us which rule is being applied to a
                    particular input. If
                    <strong> f(x) = x² + 2x + 1</strong>, then substituting a
                    value for <strong>x</strong> gives the corresponding output.
                  </p>

                  <p>
                    For example, when <strong>x = 2</strong>:
                  </p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"f(2) = 2^2 + 2(2) + 1 = 9"}</MathRenderer>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Function structure
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {"\\text{input} \\rightarrow f \\rightarrow \\text{output}"}
                  </MathRenderer>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-200 bg-[#f8f7f4] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                      Input
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      x
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-[#f8f7f4] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                      Rule
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      f
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-[#f8f7f4] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                      Output
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      f(x)
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-500">
                  This input-output perspective becomes especially important
                  when calculus studies how a function responds to small changes
                  in its input.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain and range */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">02 · Domain and range</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Know what values are allowed.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    A function is not necessarily defined for every possible
                    input. The <strong>domain</strong> is the set of allowed
                    inputs, while the <strong>range</strong> is the set of
                    outputs produced by those inputs.
                  </p>

                  <p>
                    Domain restrictions often come from operations such as
                    division by zero or taking the square root of a negative
                    number when working over the real numbers.
                  </p>
                </div>
              </div>

              <div>
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

                <div className="mt-5 rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Example
                  </p>

                  <div className="pml-formula mt-4">
                    <MathRenderer>{"f(x) = \\frac{1}{x-2}"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    The denominator cannot be zero, so
                    <strong> x = 2</strong> is excluded from the domain.
                  </p>

                  <div className="pml-formula mt-4">
                    <MathRenderer>{"x \\neq 2"}</MathRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphs */}
        <section className="border-y border-slate-200 bg-white">
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

                <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                  A graph can reveal information that may not be immediately
                  obvious from the equation alone. It allows us to study
                  direction, turning points, intercepts, and overall behavior.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <LineChart size={19} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      What can a graph tell you?
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {graphObservations.map((item) => (
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

        {/* Rates of change */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">04 · Rates of change</div>

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
                    change between two inputs <strong>x₁</strong> and{" "}
                    <strong>x₂</strong> is:
                  </p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>
                    {"\\frac{f(x_2)-f(x_1)}{x_2-x_1}"}
                  </MathRenderer>
                </div>

                <div className="pml-prose mt-5">
                  <p>
                    The same idea can be written as
                    <strong> Δy / Δx</strong>. It tells us how much the output
                    changes, on average, for each unit of change in the input.
                  </p>

                  <p>
                    Average speed is a familiar example: total distance divided
                    by elapsed time is an average rate of change.
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
                  The average rate of change uses two points. Calculus asks a
                  more precise question: what is the rate of change at a single
                  point?
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

        {/* Variables and modeling */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">05 · Mathematical modeling</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Give the variables a meaning.
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  Calculus is often used to model real situations. In those
                  problems, symbols are not just abstract quantities. They
                  represent measurable features of the world.
                </p>

                <p>
                  A strong mathematical model begins by identifying what each
                  variable represents, what units are being used, and how the
                  quantities are related.
                </p>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="overflow-x-auto">
                <table className="pml-table w-full">
                  <thead>
                    <tr>
                      <th>Situation</th>
                      <th>Input</th>
                      <th>Output</th>
                      <th>Possible function</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Motion</td>
                      <td>Time</td>
                      <td>Position</td>
                      <td>s(t)</td>
                    </tr>

                    <tr>
                      <td>Population</td>
                      <td>Time</td>
                      <td>Population</td>
                      <td>P(t)</td>
                    </tr>

                    <tr>
                      <td>Production</td>
                      <td>Units produced</td>
                      <td>Total cost</td>
                      <td>C(x)</td>
                    </tr>

                    <tr>
                      <td>Temperature</td>
                      <td>Time</td>
                      <td>Temperature</td>
                      <td>T(t)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                  <FunctionSquare size={19} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Why units matter
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Units provide a useful check on a mathematical model. If
                    position is measured in meters and time in seconds, for
                    example, a rate of change of position has units of meters
                    per second. Dimensional reasoning can help identify
                    incorrect formulas or interpretations.
                  </p>
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
                isolation. Try to connect the symbolic, numerical, graphical,
                and real-world interpretations.
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

        {/* Important idea */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-[#f8f7f4] p-7 md:p-9">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Important idea
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    Calculus is about relationships, not just formulas.
                  </h2>

                  <div className="pml-prose mt-4">
                    <p>
                      It is easy to think of calculus as a collection of rules
                      for differentiating and integrating expressions. A deeper
                      understanding begins by asking what the variables
                      represent and how they change.
                    </p>

                    <p>
                      The equation, graph, table, and real-world interpretation
                      should support one another. When they agree, a
                      mathematical model becomes much easier to understand and
                      use.
                    </p>
                  </div>
                </div>
              </div>
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
                  quantities vary. Together, these ideas provide the foundation
                  for the central concepts of calculus.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <div className="space-y-4">
                  {summaryPoints.map((item) => (
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

        {/* Related topics */}
        <section className="border-t border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <Link
                to="/learn/limits"
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Next concept
                </p>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Limits
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Learn how calculus describes behavior as an input approaches a
                  particular value.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Study limits
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                to="/calculators/function"
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Tool
                </p>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Function Grapher
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Explore functions visually and connect equations with their
                  graphical behavior.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Open grapher
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                to="/learn/derivatives"
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Continue
                </p>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Derivatives
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Learn how instantaneous rates of change are defined and how
                  derivatives describe function behavior.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Study derivatives
                  <ArrowRight size={15} />
                </span>
              </Link>
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
                  calculus to describe behavior at and near an exact point.
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
