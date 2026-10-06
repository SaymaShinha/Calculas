import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FunctionSquare,
  Lightbulb,
  LineChart,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

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

const behaviorChecklist = [
  "Where the function is increasing",
  "Where the function is decreasing",
  "Where it crosses an axis",
  "Where turning points occur",
  "Whether the function approaches a value",
  "How quickly the graph changes",
];

const summaryPoints = [
  "Functions describe relationships between quantities.",
  "Domain and range describe valid inputs and possible outputs.",
  "Equations, tables, and graphs are different representations of the same relationship.",
  "Average rate of change compares changes in two quantities.",
  "Instantaneous rate of change leads naturally to the derivative.",
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
        {/* ---------------------------------------------------------------- */}
        {/* Introduction */}
        {/* ---------------------------------------------------------------- */}
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
                  describe these ideas precisely, we need a way to represent
                  quantities, relationships, and how one quantity depends on
                  another.
                </p>

                <p>
                  Functions provide that language. They allow us to describe how
                  an output changes when an input changes. This simple
                  relationship becomes the foundation for limits, derivatives,
                  integrals, and mathematical modeling.
                </p>

                <p>
                  Before studying advanced calculus, it is therefore important
                  to be comfortable with variables, functions, graphs, domains,
                  and rates of change.
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

        {/* ---------------------------------------------------------------- */}
        {/* Variables and functions */}
        {/* ---------------------------------------------------------------- */}
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
                  For example, if the position of an object depends on time, we
                  can write the position as a function:
                </p>
              </div>

              <div className="pml-formula mt-6">
                <MathRenderer>{"s(t) = t^2 + 3t"}</MathRenderer>
              </div>

              <div className="pml-prose mt-5">
                <p>
                  This notation tells us that position depends on the input
                  variable <strong>t</strong>. Changing the value of{" "}
                  <strong>t</strong> changes the value of <strong>s(t)</strong>.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {representations.map((item) => (
                <article key={item.title} className="pml-card p-6">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Domain and range */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Function properties</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Know what a function can do.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Before differentiating or integrating a function, it is useful
                  to understand its basic properties and behavior.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {functionProperties.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Domain example */}
        {/* ---------------------------------------------------------------- */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Understanding the domain</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Not every input is automatically allowed.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    The domain of a function specifies which input values are
                    mathematically meaningful. Restrictions can come from
                    division by zero, square roots of negative numbers in the
                    real number system, logarithms, or the physical meaning of a
                    model.
                  </p>

                  <p>Consider the function:</p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"f(x) = 1/(x - 2)"}</MathRenderer>
                </div>

                <div className="pml-prose mt-5">
                  <p>
                    The denominator cannot equal zero, so <strong>x = 2</strong>{" "}
                    is excluded from the domain.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                  <FunctionSquare size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Why domain matters in calculus
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Limits, derivatives, and integrals are all affected by where a
                  function is defined. Understanding the domain prevents invalid
                  calculations and helps explain discontinuities and other
                  important features.
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    A useful question
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                    Which input values make the expression meaningful?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Rates of change */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
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
                    change between <strong>x = a</strong> and{" "}
                    <strong>x = b</strong> is:
                  </p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"\\frac{f(b)-f(a)}{b-a}"}</MathRenderer>
                </div>

                <div className="pml-prose mt-5">
                  <p>
                    This is the slope of the secant line connecting the two
                    points on the graph. It tells us how much the output
                    changes, on average, for each unit of input.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <LineChart size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  A familiar example: average speed
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  If an object travels a total distance over a measured interval
                  of time, its average speed is the total distance divided by
                  the elapsed time.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {
                      "\\text{Average speed} = \\frac{\\text{distance}}{\\text{time}}"
                    }
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Calculus takes the idea of rate of change further by asking
                  what happens at an individual point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* From average to instantaneous */}
        {/* ---------------------------------------------------------------- */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                  <Lightbulb size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  The important transition
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Average rate of change uses two points. To study change at a
                  single point, we examine what happens as those two points move
                  closer together.
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

              <div>
                <div className="pml-eyebrow">From average to instantaneous</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  The derivative begins with a shrinking interval.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    The average rate of change between two points gives useful
                    information, but it does not tell us the exact rate at one
                    point.
                  </p>

                  <p>
                    Calculus addresses this by considering what happens when the
                    distance between the two input values approaches zero. This
                    idea of approaching a value is the foundation of the limit.
                  </p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>
                    {"\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}"}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  This expression becomes the definition of the derivative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Graphs */}
        {/* ---------------------------------------------------------------- */}
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

                <div className="pml-prose mt-5">
                  <p>
                    A graph can reveal behavior that is difficult to recognize
                    from an equation alone. It can show where a function rises,
                    falls, reaches an extreme value, crosses an axis, or
                    approaches a particular value.
                  </p>
                </div>
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
                      {behaviorChecklist.map((item) => (
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

        {/* ---------------------------------------------------------------- */}
        {/* Worked example */}
        {/* ---------------------------------------------------------------- */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Connect equation, table, and graph.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Consider the quadratic function:
              </p>
            </div>

            <div className="pml-formula mt-7">
              <MathRenderer>{"f(x) = x^2 - 4x + 3"}</MathRenderer>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="pml-card p-6">
                <span className="font-mono text-xs font-bold text-blue-700">
                  01
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Equation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  The equation gives an exact rule for calculating the output
                  for every allowed input.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"f(x) = x^2 - 4x + 3"}</MathRenderer>
                </div>
              </article>

              <article className="pml-card p-6">
                <span className="font-mono text-xs font-bold text-blue-700">
                  02
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Numerical values
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Evaluating selected inputs gives a table of corresponding
                  outputs.
                </p>

                <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-700">
                          x
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700">
                          f(x)
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      {[
                        ["0", "3"],
                        ["1", "0"],
                        ["2", "-1"],
                        ["3", "0"],
                        ["4", "3"],
                      ].map(([x, y]) => (
                        <tr key={x}>
                          <td className="px-4 py-2.5 font-mono text-xs text-slate-600">
                            {x}
                          </td>
                          <td className="px-4 py-2.5 font-mono text-xs text-slate-600">
                            {y}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <article className="pml-card p-6">
                <span className="font-mono text-xs font-bold text-blue-700">
                  03
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Graphical behavior
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  The graph is a parabola. The numerical values reveal that it
                  reaches a minimum near <strong>x = 2</strong>.
                </p>

                <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                    Key observation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The equation, table, and graph describe the same function
                    from different perspectives.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Practical modeling */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Mathematical modeling</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  A function can represent a real system.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Calculus is not only about manipulating symbols. Functions
                  allow mathematical expressions to represent measurable
                  relationships in the real world.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Physics",
                    text: "Position can depend on time, while velocity describes how position changes.",
                  },
                  {
                    title: "Economics",
                    text: "Revenue, cost, and demand can be represented as functions of quantity or price.",
                  },
                  {
                    title: "Biology",
                    text: "Population models describe how the size of a population changes over time.",
                  },
                  {
                    title: "Engineering",
                    text: "Functions can model temperature, pressure, energy, current, and other measurable quantities.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-5"
                  >
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Practical habits */}
        {/* ---------------------------------------------------------------- */}
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

        {/* ---------------------------------------------------------------- */}
        {/* Important idea */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    A useful way to think about calculus foundations
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Do not treat functions, graphs, and rates of change as
                    unrelated topics. They are connected descriptions of how
                    quantities behave. Calculus builds on these relationships to
                    study change at an exact point and accumulation across an
                    interval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Summary */}
        {/* ---------------------------------------------------------------- */}
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
                  quantities vary. Together, these ideas provide the language
                  needed for the central concepts of calculus.
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

        {/* ---------------------------------------------------------------- */}
        {/* Next topic */}
        {/* ---------------------------------------------------------------- */}
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
