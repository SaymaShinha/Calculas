// src/pages/learn/Foundations.jsx

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FunctionSquare,
  LineChart,
  Sigma,
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
    description: "Points where a graph crosses or touches a coordinate axis.",
  },
  {
    title: "Increasing and decreasing",
    description:
      "Intervals where the function's output rises or falls as the input increases.",
  },
];

const habits = [
  "Identify the input and output variables before working with a function.",
  "Determine the domain before evaluating or manipulating the function.",
  "Move between equations, tables, and graphs when studying behavior.",
  "Look for intervals where the function increases or decreases.",
  "Ask what the variables represent in the real situation being modeled.",
];

const calculusConnections = [
  {
    title: "Functions",
    description:
      "Functions describe relationships between quantities and provide the basic language of calculus.",
  },
  {
    title: "Limits",
    description:
      "Limits describe what happens as an input approaches a particular value.",
  },
  {
    title: "Derivatives",
    description:
      "Derivatives measure instantaneous rates of change and local behavior.",
  },
  {
    title: "Integrals",
    description:
      "Integrals describe accumulation and connect naturally to area and total change.",
  },
];

const algebraSkills = [
  "Simplifying algebraic expressions",
  "Working with exponents and powers",
  "Factoring polynomials",
  "Solving equations and inequalities",
  "Understanding fractions and rational expressions",
  "Working with functions and function notation",
];

function RepresentationCard({ title, description, example }) {
  return (
    <div className="pml-card p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
        <BookOpen size={19} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>

      <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
        <code className="font-mono text-xs font-semibold text-[#17324d]">
          {example}
        </code>
      </div>
    </div>
  );
}

export default function Foundations() {
  return (
    <>
      <SEO
        title="Calculus Foundations | Functions, Graphs & Rates of Change"
        description="Learn the mathematical foundations of calculus, including functions, domain and range, graphs, variables, notation, algebra, and rates of change."
        canonical="/learn/foundations"
      />

      <PageHeader
        eyebrow="Learn • Foundations"
        title="Calculus Foundations"
        description="Build the mathematical language you need for calculus. Learn how functions describe relationships, how graphs reveal behavior, and how rates of change lead naturally to limits and derivatives."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="pml-prose">
                <div className="pml-eyebrow">The starting point</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What is calculus built on?
                </h2>

                <p className="mt-5">
                  Calculus is the mathematics of change and accumulation. To
                  study those ideas precisely, we need a language for describing
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
                  Before learning calculus rules, it is therefore important to
                  become comfortable with functions, graphs, variables,
                  notation, and rates of change.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
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

                <p className="mt-4 text-sm leading-7 text-slate-600">
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
                  position, velocity, temperature, population, cost, revenue,
                  and distance.
                </p>

                <p>
                  A function can be represented symbolically, numerically, or
                  graphically. Being able to move between these representations
                  is an important mathematical skill because different
                  representations reveal different aspects of the same
                  relationship.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {representations.map((item) => (
                <RepresentationCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Function notation */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Function notation</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Learn to read the language of functions.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Function notation provides a compact way to describe the
                  relationship between an input and its output.
                </p>
              </div>

              <div>
                <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Example
                  </p>

                  <div className="pml-formula mt-5">
                    <MathRenderer>{"f(x) = 3x^2 - 2x + 1"}</MathRenderer>
                  </div>

                  <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                    {[
                      ["x", "Input variable"],
                      ["f(x)", "Output produced by the function"],
                      ["3x² − 2x + 1", "Rule used to calculate the output"],
                    ].map(([symbol, description]) => (
                      <div
                        key={symbol}
                        className="grid grid-cols-[100px_1fr] gap-4 py-4"
                      >
                        <code className="font-mono text-sm font-bold text-[#17324d]">
                          {symbol}
                        </code>

                        <span className="text-sm leading-6 text-slate-600">
                          {description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pml-prose mt-6">
                  <p>
                    If we want to evaluate the function at a particular input,
                    we substitute that value for <strong>x</strong>. For
                    example, when <strong>x = 2</strong>:
                  </p>
                </div>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"f(2) = 3(2)^2 - 2(2) + 1 = 9"}</MathRenderer>
                </div>
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
                  Know which values are allowed.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    Every function has restrictions on the values that can be
                    used as inputs. The set of allowed inputs is called the
                    <strong> domain</strong>.
                  </p>

                  <p>
                    The outputs produced by those allowed inputs form the
                    <strong> range</strong>.
                  </p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"f(x) = \\frac{1}{x}"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  This function is undefined when <strong>x = 0</strong>, so
                  zero is excluded from its domain.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {functionProperties.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Algebra foundation */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Mathematical preparation</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Algebra remains important throughout calculus.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    Calculus introduces new ideas, but much of the symbolic work
                    still depends on algebra. A strong algebraic foundation
                    makes calculus procedures easier to understand and reduces
                    unnecessary errors.
                  </p>

                  <p>
                    You do not need to master every advanced algebra technique
                    before beginning calculus, but you should be comfortable
                    manipulating common expressions.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <Sigma size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Useful algebra skills
                    </h3>

                    <p className="text-xs text-slate-500">
                      Skills you will repeatedly use
                    </p>
                  </div>
                </div>

                <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                  {algebraSkills.map((skill, index) => (
                    <div key={skill} className="flex gap-4 py-4">
                      <span className="font-mono text-xs font-semibold text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm leading-6 text-slate-600">
                        {skill}
                      </span>
                    </div>
                  ))}
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
                <div className="pml-eyebrow">03 · Rates of change</div>

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
                    This is the slope of the secant line joining the two points
                    on the graph. It tells us how much the output changes, on
                    average, for each unit of change in the input.
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
                  Average rate of change uses two points. Calculus goes further
                  by asking what happens when those two points move closer and
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
            </div>
          </div>
        </section>

        {/* Graphs */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">04 · Graphs</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Learn to read mathematical behavior.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Equations tell us how a function is defined. Graphs help us
                  see what that definition means.
                </p>

                <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                  A graph can reveal behavior that is difficult to recognize
                  from an equation alone, including turning points,
                  intersections, asymptotic behavior, and intervals where a
                  function increases or decreases.
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
                        "Whether values approach a particular number",
                        "How the function behaves near important points",
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

        {/* Worked example */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Connect the equation, values, and interpretation.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Consider the function:
              </p>

              <div className="pml-formula mt-5">
                <MathRenderer>{"f(x) = x^2 + 2x + 1"}</MathRenderer>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <span className="font-mono text-xs font-bold text-blue-700">
                  01
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Choose an input
                </h3>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"x = 2"}</MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We want to know the output produced by the function at this
                  input.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <span className="font-mono text-xs font-bold text-blue-700">
                  02
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Evaluate the function
                </h3>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"f(2) = 2^2 + 2(2) + 1 = 9"}</MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  The corresponding output is 9.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                <span className="font-mono text-xs font-bold text-blue-700">
                  03
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Interpret the result
                </h3>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"(2,9)"}</MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  The point belongs to the graph of the function.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Variables and modeling */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Mathematical modeling</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Variables should have meaning.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  In applied calculus, variables are more than symbols. They
                  represent measurable quantities in a real system.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7">
                <div className="pml-eyebrow">Example · Motion</div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Position as a function of time
                </h3>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"s(t) = t^2 + 3t"}</MathRenderer>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ["t", "Time"],
                    ["s(t)", "Position"],
                    ["s′(t)", "Velocity"],
                  ].map(([symbol, meaning]) => (
                    <div
                      key={symbol}
                      className="rounded-lg border border-slate-200 bg-[#f8f7f4] p-4"
                    >
                      <code className="font-mono text-sm font-bold text-[#17324d]">
                        {symbol}
                      </code>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {meaning}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  Once the variables have clear meanings, calculus operations
                  can also be interpreted in the context of the model.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical habits */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="pml-eyebrow justify-center">
                A useful mathematical habit
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Connect every representation.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                When studying a function, do not look at its equation in
                isolation. Connect the symbolic, numerical, graphical, and
                practical interpretations.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 border-y border-slate-200 bg-white">
              {habits.map((habit, index) => (
                <div key={habit} className="flex gap-4 p-5">
                  <span className="font-mono text-xs font-semibold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-slate-600">{habit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connection to calculus */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">From foundations to calculus</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                These ideas lead directly into calculus.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Functions and rates of change are not separate from calculus.
                They are the starting point from which its central concepts
                develop.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {calculusConnections.map((item, index) => (
                <div key={item.title} className="pml-card p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important idea */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-4">
                <FunctionSquare
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    A useful way to think about functions
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A function is not simply a formula to calculate. It is a
                    mathematical model describing a relationship between
                    quantities. When you study a function, ask what the inputs
                    and outputs mean, which values are allowed, how the output
                    behaves, and what the graph tells you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Foundations summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
                {[
                  "Functions describe relationships between inputs and outputs.",
                  "Functions can be represented using equations, tables, and graphs.",
                  "Domain describes allowed inputs, while range describes possible outputs.",
                  "Function notation provides a compact way to describe input-output relationships.",
                  "Average rate of change measures how much an output changes relative to an input.",
                  "Graphs reveal important behavior such as increasing, decreasing, intercepts, and turning points.",
                  "Algebraic manipulation remains an important skill throughout calculus.",
                  "These foundations lead naturally to limits, derivatives, and integrals.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 p-5">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#18794e]"
                    />

                    <div className="flex gap-3">
                      <span className="font-mono text-xs font-semibold text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next topic */}
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
                  calculus to describe behavior as an input approaches a
                  particular value.
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
