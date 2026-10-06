import {
  ArrowRight,
  CheckCircle2,
  FunctionSquare,
  Lightbulb,
  LineChart,
  MoveUpRight,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const derivativeIdeas = [
  {
    title: "Slope",
    description:
      "The derivative gives the slope of a curve at a particular point.",
    icon: LineChart,
  },
  {
    title: "Instantaneous change",
    description:
      "It measures how quickly a quantity is changing at an exact moment.",
    icon: MoveUpRight,
  },
  {
    title: "Function behavior",
    description:
      "Derivatives help identify increasing, decreasing, and stationary behavior.",
    icon: FunctionSquare,
  },
];

const rules = [
  {
    name: "Constant rule",
    formula: "d/dx(c) = 0",
    description:
      "The derivative of a constant is zero because a constant does not change.",
  },
  {
    name: "Power rule",
    formula: "d/dx(xⁿ) = nxⁿ⁻¹",
    description: "Multiply by the exponent and reduce the exponent by one.",
  },
  {
    name: "Sum rule",
    formula: "d/dx[f(x) + g(x)] = f′(x) + g′(x)",
    description: "Differentiate each term separately and combine the results.",
  },
  {
    name: "Product rule",
    formula: "(fg)′ = f′g + fg′",
    description:
      "Use this rule when two differentiable functions are multiplied.",
  },
  {
    name: "Quotient rule",
    formula: "(f/g)′ = (f′g − fg′)/g²",
    description:
      "Use this rule when one differentiable function is divided by another.",
  },
  {
    name: "Chain rule",
    formula: "(f(g(x)))′ = f′(g(x))g′(x)",
    description:
      "Differentiate a composition by working from the outside function inward.",
  },
];

const applications = [
  {
    title: "Motion",
    description:
      "Position, velocity, and acceleration can be connected through successive derivatives.",
  },
  {
    title: "Optimization",
    description:
      "Critical points can help identify maximum and minimum values.",
  },
  {
    title: "Graph analysis",
    description:
      "The sign and behavior of a derivative reveal how a function changes.",
  },
  {
    title: "Related rates",
    description:
      "Derivatives help determine how connected quantities change over time.",
  },
];

export default function Derivatives() {
  return (
    <>
      <SEO
        title="Derivatives in Calculus | Rules, Examples & Applications"
        description="Learn derivatives from first principles. Understand the derivative as slope and instantaneous rate of change, learn differentiation rules, worked examples, and applications."
        canonical="/learn/derivatives"
      />

      <PageHeader
        eyebrow="Learn • Derivatives"
        title="Understanding Derivatives"
        description="Learn how derivatives measure instantaneous change, define the slope of a curve, and provide powerful tools for analyzing functions and solving real-world problems."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="pml-prose">
                <div className="pml-eyebrow">The central idea</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What does a derivative measure?
                </h2>

                <p className="mt-5">
                  A derivative measures how a quantity changes when its input
                  changes. Geometrically, it represents the slope of a curve at
                  a particular point.
                </p>

                <p>
                  This makes the derivative one of the most useful ideas in
                  calculus. It allows us to study instantaneous velocity,
                  changing costs, population growth, optimization, and many
                  other forms of change.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Derivative notation
                </p>

                <div className="pml-formula mt-5 text-center">
                  <MathRenderer block>{"f′(x) = d/dx f(x)"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  The notation <strong>f′(x)</strong> represents the derivative
                  of <strong>f(x)</strong> with respect to <strong>x</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three interpretations */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Three ways to understand it</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                One derivative, several meanings.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The derivative can be understood geometrically, physically, and
                algebraically. These perspectives describe the same mathematical
                idea from different angles.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {derivativeIdeas.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="pml-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Definition from first principles */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">01 · First principles</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  The derivative comes from a limit.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  The derivative is not simply a memorized collection of rules.
                  Its definition comes directly from the idea of an
                  instantaneous rate of change.
                </p>
              </div>

              <div>
                <div className="pml-formula">
                  <MathRenderer block>
                    {"f′(x) = lim h→0 [f(x+h) − f(x)] / h"}
                  </MathRenderer>
                </div>

                <div className="pml-prose mt-6">
                  <p>
                    Start with the average rate of change between two nearby
                    points on a curve. The horizontal distance between the
                    points is represented by <strong>h</strong>.
                  </p>

                  <p>
                    As <strong>h</strong> becomes smaller and approaches zero,
                    the average rate of change approaches the instantaneous rate
                    of change. That limiting value is the derivative.
                  </p>
                </div>

                <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-sm font-semibold text-[#17324d]">
                    Key connection
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Limits tell us what happens as two points move together.
                    Derivatives use that idea to define the slope at one exact
                    point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Finding a derivative from the definition
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Consider the simple function:
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer block>{"f(x) = x²"}</MathRenderer>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Start with the definition",
                  formula: "f′(x) = lim h→0 [f(x+h) − f(x)] / h",
                },
                {
                  number: "02",
                  title: "Substitute the function",
                  formula: "f′(x) = lim h→0 [(x+h)² − x²] / h",
                },
                {
                  number: "03",
                  title: "Simplify",
                  formula: "f′(x) = lim h→0 [2xh + h²] / h",
                },
                {
                  number: "04",
                  title: "Take the limit",
                  formula: "f′(x) = 2x",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <span className="font-mono text-xs font-bold text-blue-700">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <div className="mt-4 rounded-lg bg-slate-50 p-3">
                    <code className="font-mono text-xs leading-6 text-[#17324d]">
                      {step.formula}
                    </code>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#b9e4ce] bg-[#eef9f3] p-6">
              <div className="flex gap-4">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#18794e]"
                />

                <div>
                  <p className="font-bold text-slate-900">Result</p>

                  <div className="mt-3">
                    <MathRenderer block>{"d/dx (x²) = 2x"}</MathRenderer>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The derivative tells us the slope of the curve{" "}
                    <strong>y = x²</strong> at every value of <strong>x</strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rules */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">02 · Differentiation rules</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The rules that make differentiation practical.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Once the definition is understood, differentiation rules let us
                calculate derivatives efficiently without repeating the limit
                process every time.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {rules.map((rule) => (
                <div
                  key={rule.name}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {rule.name}
                  </h3>

                  <div className="pml-formula mt-4">
                    <MathRenderer block>{rule.formula}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product / chain rule explanation */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="pml-eyebrow">Example · Product rule</p>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  When two functions are multiplied
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  If a function is the product of two differentiable functions,
                  differentiate each part and combine them using the product
                  rule.
                </p>

                <div className="pml-formula mt-6">
                  <MathRenderer block>{"(fg)′ = f′g + fg′"}</MathRenderer>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="pml-eyebrow">Example · Chain rule</p>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  When functions are nested
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The chain rule is used when one function is inside another. It
                  is especially important for powers, trigonometric functions,
                  exponentials, and logarithms.
                </p>

                <div className="pml-formula mt-6">
                  <MathRenderer block>
                    {"d/dx f(g(x)) = f′(g(x))g′(x)"}
                  </MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interpreting derivative */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Reading a derivative</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What does the sign of a derivative tell you?
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  The derivative contains information about the local behavior
                  of a function.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {[
                  [
                    "f′(x) > 0",
                    "The function is increasing on the relevant interval.",
                  ],
                  [
                    "f′(x) < 0",
                    "The function is decreasing on the relevant interval.",
                  ],
                  [
                    "f′(x) = 0",
                    "The point is stationary and may be a maximum, minimum, or another critical point.",
                  ],
                ].map(([formula, description]) => (
                  <div
                    key={formula}
                    className="grid gap-3 py-6 sm:grid-cols-[130px_1fr]"
                  >
                    <code className="font-mono text-sm font-bold text-[#17324d]">
                      {formula}
                    </code>

                    <p className="text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Applications</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Where are derivatives used?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Derivatives are useful whenever a problem involves change,
                sensitivity, or optimization.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {applications.map((item) => (
                <div key={item.title} className="pml-card p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important note */}
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
                    A useful way to think about derivatives
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Do not think of a derivative only as a symbolic answer.
                    Think of it as information about how a quantity is changing.
                    In an application, always ask what the derivative represents
                    and what its units mean.
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
              <div className="pml-eyebrow">Derivatives summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
                {[
                  "A derivative measures instantaneous rate of change.",
                  "Geometrically, a derivative represents the slope of a curve at a point.",
                  "The derivative is defined using a limit.",
                  "Differentiation rules make derivative calculations efficient.",
                  "The sign of the derivative provides information about increasing and decreasing behavior.",
                  "Derivatives are widely used in motion, optimization, modeling, and sensitivity analysis.",
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
                  From change to accumulation
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Integrals provide the other major perspective of calculus:
                  accumulation, area, and the connection between derivatives and
                  antiderivatives.
                </p>
              </div>

              <Link
                to="/learn/integrals"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Integrals
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
