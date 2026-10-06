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

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

const derivativeIdeas = [
  {
    title: "Slope",
    description:
      "The derivative gives the slope of a curve at a particular point and describes the local direction of the graph.",
    icon: LineChart,
  },
  {
    title: "Instantaneous change",
    description:
      "It measures how quickly a quantity is changing at an exact point rather than over an entire interval.",
    icon: MoveUpRight,
  },
  {
    title: "Function behavior",
    description:
      "Derivatives help identify increasing, decreasing, stationary, and potentially extreme behavior.",
    icon: FunctionSquare,
  },
];

const rules = [
  {
    name: "Constant rule",
    formula: "\\frac{d}{dx}(c)=0",
    description:
      "The derivative of a constant is zero because a constant does not change as x changes.",
  },
  {
    name: "Power rule",
    formula: "\\frac{d}{dx}(x^n)=nx^{n-1}",
    description: "Multiply by the exponent and reduce the exponent by one.",
  },
  {
    name: "Sum rule",
    formula: "\\frac{d}{dx}[f(x)+g(x)]=f'(x)+g'(x)",
    description: "Differentiate each term separately and combine the results.",
  },
  {
    name: "Product rule",
    formula: "(fg)'=f'g+fg'",
    description:
      "Use this rule when two differentiable functions are multiplied.",
  },
  {
    name: "Quotient rule",
    formula: "\\left(\\frac{f}{g}\\right)'=\\frac{f'g-fg'}{g^2}",
    description:
      "Use this rule when one differentiable function is divided by another.",
  },
  {
    name: "Chain rule",
    formula: "\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)",
    description:
      "Differentiate a composition by differentiating the outer function and multiplying by the derivative of the inner function.",
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
      "Critical points and derivative tests can help identify maximum and minimum values.",
  },
  {
    title: "Graph analysis",
    description:
      "The sign and behavior of a derivative reveal how a function changes across an interval.",
  },
  {
    title: "Related rates",
    description:
      "Derivatives help determine how connected quantities change with respect to time.",
  },
];

const workedSteps = [
  {
    number: "01",
    title: "Start with the definition",
    formula: "f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}",
  },
  {
    number: "02",
    title: "Substitute the function",
    formula: "f'(x)=\\lim_{h\\to0}\\frac{(x+h)^2-x^2}{h}",
  },
  {
    number: "03",
    title: "Simplify",
    formula: "f'(x)=\\lim_{h\\to0}\\frac{2xh+h^2}{h}",
  },
  {
    number: "04",
    title: "Take the limit",
    formula: "f'(x)=2x",
  },
];

export default function Derivatives() {
  return (
    <>
      <SEO
        title="Derivatives in Calculus | Rules, Examples & Applications"
        description="Learn derivatives from first principles. Understand derivatives as slope and instantaneous rate of change, learn differentiation rules, worked examples, critical points, and practical applications."
        canonical="/learn/derivatives"
      />

      <PageHeader
        eyebrow="Learn • Derivatives"
        title="Understanding Derivatives"
        description="Learn how derivatives measure instantaneous change, define the slope of a curve, and provide powerful tools for analyzing functions and solving real-world problems."
      />

      <main>
        {/* ============================================================ */}
        {/* Introduction                                                 */}
        {/* ============================================================ */}

        <section className="border-b border-[#DEDEDB] bg-white">
          <div className="pml-container py-12 sm:py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <article className="pml-prose">
                <div className="pml-eyebrow">The central idea</div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  What does a derivative measure?
                </h2>

                <p className="mt-5">
                  A derivative measures how a quantity changes when its input
                  changes. Geometrically, it represents the slope of a curve at
                  a particular point.
                </p>

                <p>
                  This makes the derivative one of the central ideas of
                  calculus. It allows us to study instantaneous velocity,
                  changing costs, population growth, optimization, and many
                  other forms of change.
                </p>

                <p>
                  The important question is therefore not only how to calculate
                  a derivative, but also what that derivative means in the
                  context of the problem.
                </p>
              </article>

              <aside className="pml-card p-7 sm:p-8">
                <p className="pml-eyebrow">Derivative notation</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"f'(x)=\\frac{d}{dx}f(x)"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  The notation <strong className="text-[#17202A]">f′(x)</strong>{" "}
                  represents the derivative of{" "}
                  <strong className="text-[#17202A]">f(x)</strong> with respect
                  to <strong className="text-[#17202A]">x</strong>.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Three interpretations                                         */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Three ways to understand it</div>

              <h2 className="pml-title mt-4">
                One derivative, several meanings.
              </h2>

              <p className="pml-lead mt-5">
                The derivative can be understood geometrically, physically, and
                algebraically. These perspectives describe the same mathematical
                idea from different angles.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {derivativeIdeas.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="pml-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#687481]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Average vs instantaneous rate                                 */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">
                From average to instantaneous change
              </div>

              <h2 className="pml-title mt-4">
                The derivative begins with an average rate.
              </h2>

              <p className="pml-lead mt-5">
                Before defining instantaneous change, calculus considers the
                average rate of change over an interval.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="pml-card p-7">
                <p className="pml-eyebrow">Average rate</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"\\frac{f(b)-f(a)}{b-a}"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  This measures the average change in the function over the
                  interval from <strong className="text-[#17202A]">a</strong> to{" "}
                  <strong className="text-[#17202A]">b</strong>.
                </p>
              </article>

              <article className="pml-card p-7">
                <p className="pml-eyebrow">Instantaneous rate</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {"\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}"}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  Letting the interval become arbitrarily small produces the
                  instantaneous rate of change at a point.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* First principles                                             */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">01 · First principles</div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  The derivative comes from a limit.
                </h2>

                <p className="mt-5 max-w-lg leading-8 text-[#687481]">
                  The derivative is not simply a memorized collection of rules.
                  Its definition comes directly from the idea of instantaneous
                  rate of change.
                </p>
              </div>

              <div>
                <div className="pml-formula">
                  <MathRenderer>
                    {"f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}"}
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

                <div className="mt-7 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-5">
                  <p className="text-sm font-semibold text-[#17324D]">
                    Key connection
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#34404C]">
                    Limits tell us what happens as two points move together.
                    Derivatives use that idea to define the slope at one exact
                    point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Worked example                                               */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="pml-title mt-4">
                Finding a derivative from the definition
              </h2>

              <p className="pml-lead mt-5">Consider the simple function:</p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"f(x)=x^2"}</MathRenderer>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {workedSteps.map((step) => (
                <article key={step.number} className="pml-card p-5">
                  <span className="font-mono text-xs font-bold text-[#2F5BEA]">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-sm font-bold text-[#17202A]">
                    {step.title}
                  </h3>

                  <div className="mt-5 rounded-lg border border-[#E9E9E6] bg-[#F8F7F4] p-3">
                    <MathRenderer>{step.formula}</MathRenderer>
                  </div>
                </article>
              ))}
            </div>

            <div className="pml-success mt-8">
              <div className="flex gap-4">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                <div>
                  <p className="font-bold text-[#17202A]">Result</p>

                  <div className="mt-3">
                    <MathRenderer>{"\\frac{d}{dx}(x^2)=2x"}</MathRenderer>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#34404C]">
                    The derivative tells us the slope of the curve{" "}
                    <strong>y=x²</strong> at every value of <strong>x</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Rules                                                        */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">02 · Differentiation rules</div>

              <h2 className="pml-title mt-4">
                The rules that make differentiation practical.
              </h2>

              <p className="pml-lead mt-5">
                Once the definition is understood, differentiation rules let us
                calculate derivatives efficiently without repeating the limit
                process every time.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {rules.map((rule) => (
                <article key={rule.name} className="pml-card p-6">
                  <h3 className="text-base font-bold text-[#17202A]">
                    {rule.name}
                  </h3>

                  <div className="pml-formula mt-4">
                    <MathRenderer>{rule.formula}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#687481]">
                    {rule.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Product / chain rule                                         */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="pml-card p-7 sm:p-8">
                <p className="pml-eyebrow">Example · Product rule</p>

                <h3 className="mt-4 text-xl font-bold text-[#17202A]">
                  When two functions are multiplied
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  If a function is the product of two differentiable functions,
                  differentiate each part and combine them using the product
                  rule.
                </p>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"(fg)'=f'g+fg'"}</MathRenderer>
                </div>

                <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                  <p className="text-sm font-semibold text-[#17202A]">
                    Example
                  </p>

                  <div className="pml-formula mt-3">
                    <MathRenderer>
                      {"\\frac{d}{dx}(x^2\\sin x)=2x\\sin x+x^2\\cos x"}
                    </MathRenderer>
                  </div>
                </div>
              </article>

              <article className="pml-card p-7 sm:p-8">
                <p className="pml-eyebrow">Example · Chain rule</p>

                <h3 className="mt-4 text-xl font-bold text-[#17202A]">
                  When functions are nested
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The chain rule is used when one function is inside another. It
                  is especially important for powers, trigonometric functions,
                  exponentials, and logarithms.
                </p>

                <div className="pml-formula mt-6">
                  <MathRenderer>
                    {"\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)"}
                  </MathRenderer>
                </div>

                <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                  <p className="text-sm font-semibold text-[#17202A]">
                    Example
                  </p>

                  <div className="pml-formula mt-3">
                    <MathRenderer>
                      {"\\frac{d}{dx}(3x+1)^5=15(3x+1)^4"}
                    </MathRenderer>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Critical points                                               */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Critical points</div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  Derivatives reveal important points on a graph.
                </h2>

                <p className="mt-5 max-w-lg leading-8 text-[#687481]">
                  Points where the derivative is zero or does not exist can
                  require special attention when analyzing extrema and graph
                  behavior.
                </p>
              </div>

              <div>
                <div className="pml-card overflow-hidden">
                  <div className="border-b border-[#E9E9E6] p-6">
                    <p className="pml-eyebrow">Critical-point condition</p>

                    <div className="pml-formula mt-4">
                      <MathRenderer>
                        {
                          "f'(c)=0\\quad\\text{or}\\quad f'(c)\\text{ does not exist}"
                        }
                      </MathRenderer>
                    </div>
                  </div>

                  <div className="divide-y divide-[#E9E9E6]">
                    <div className="p-6">
                      <h3 className="font-bold text-[#17202A]">
                        Local maximum
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#687481]">
                        The function rises before the point and falls after it.
                      </p>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-[#17202A]">
                        Local minimum
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#687481]">
                        The function falls before the point and rises after it.
                      </p>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-[#17202A]">
                        Stationary point
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#687481]">
                        A point where the derivative is zero. It is not
                        necessarily a maximum or minimum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Reading derivative                                            */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Reading a derivative</div>

              <h2 className="pml-title mt-4">
                What does the sign of a derivative tell you?
              </h2>

              <p className="pml-lead mt-5">
                The derivative contains information about the local behavior of
                a function.
              </p>
            </div>

            <div className="mt-10 overflow-hidden border-y border-[#DEDEDB] bg-white">
              {[
                [
                  "f'(x)>0",
                  "The function is increasing on the relevant interval.",
                ],
                [
                  "f'(x)<0",
                  "The function is decreasing on the relevant interval.",
                ],
                [
                  "f'(x)=0",
                  "The point is stationary and may be a maximum, minimum, or another critical point.",
                ],
              ].map(([formula, description], index) => (
                <div
                  key={formula}
                  className={`grid gap-3 p-6 sm:grid-cols-[150px_1fr] ${
                    index !== 0 ? "border-t border-[#E9E9E6]" : ""
                  }`}
                >
                  <div>
                    <MathRenderer inline>{formula}</MathRenderer>
                  </div>

                  <p className="text-sm leading-6 text-[#687481]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Second derivative                                            */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Second derivative</div>

              <h2 className="pml-title mt-4">
                Derivatives can describe how the rate itself changes.
              </h2>

              <p className="pml-lead mt-5">
                Taking another derivative gives the second derivative. It
                provides information about concavity and, in many applications,
                the change in a rate of change.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="pml-card p-7">
                <p className="pml-eyebrow">Concavity</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"f''(x)>0"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  A positive second derivative indicates that the graph is
                  concave upward over the relevant interval.
                </p>
              </article>

              <article className="pml-card p-7">
                <p className="pml-eyebrow">Concavity</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"f''(x)<0"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  A negative second derivative indicates that the graph is
                  concave downward over the relevant interval.
                </p>
              </article>
            </div>

            <div className="mt-7 rounded-lg border border-[#DEDEDB] bg-white p-6">
              <p className="text-sm leading-7 text-[#34404C]">
                The second derivative is especially useful in motion, where
                position, velocity, and acceleration are related through
                successive derivatives.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Applications                                                  */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Applications</div>

              <h2 className="pml-title mt-4">Where are derivatives used?</h2>

              <p className="pml-lead mt-5">
                Derivatives are useful whenever a problem involves change,
                sensitivity, motion, or optimization.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {applications.map((item) => (
                <article key={item.title} className="pml-card p-6">
                  <h3 className="text-lg font-bold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Units and interpretation                                     */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <article>
                <div className="pml-eyebrow">Units matter</div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  A derivative has units too.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    In an applied problem, the units of a derivative tell you
                    what kind of rate is being measured.
                  </p>

                  <p>
                    For example, if position is measured in meters and time in
                    seconds, then the derivative of position with respect to
                    time has units of meters per second.
                  </p>
                </div>
              </article>

              <article className="pml-card p-7">
                <p className="pml-eyebrow">Example</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"v(t)=\\frac{ds}{dt}"}</MathRenderer>
                </div>

                <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                  <p className="text-sm leading-7 text-[#687481]">
                    If <strong className="text-[#17202A]">s</strong> is in
                    meters and <strong className="text-[#17202A]">t</strong> is
                    in seconds, then{" "}
                    <strong className="text-[#17202A]">v(t)</strong> is measured
                    in meters per second.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Important note                                               */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="pml-container py-14">
            <div className="mx-auto max-w-3xl rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6 sm:p-7">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2F5BEA]"
                />

                <div>
                  <h3 className="font-bold text-[#17202A]">
                    A useful way to think about derivatives
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#34404C]">
                    Do not think of a derivative only as a symbolic answer.
                    Think of it as information about how a quantity is changing.
                    In an application, always ask what the derivative
                    represents, what its sign means, and what its units are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Summary                                                       */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Derivatives summary</div>

              <h2 className="pml-title mt-4">The ideas to remember</h2>

              <div className="mt-8 overflow-hidden border-y border-[#DEDEDB] bg-white">
                {[
                  "A derivative measures instantaneous rate of change.",
                  "Geometrically, a derivative represents the slope of a curve at a point.",
                  "The derivative is defined using a limit.",
                  "Differentiation rules make derivative calculations efficient.",
                  "The sign of the derivative provides information about increasing and decreasing behavior.",
                  "Critical points can help identify possible local extrema.",
                  "The second derivative provides information about concavity and changing rates.",
                  "Derivatives are widely used in motion, optimization, modeling, and sensitivity analysis.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex gap-4 p-5 ${
                      index !== 0 ? "border-t border-[#E9E9E6]" : ""
                    }`}
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#18794E]"
                    />

                    <div className="flex gap-3">
                      <span className="font-mono text-xs font-semibold text-[#2F5BEA]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-[#687481]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Continue learning                                             */}
        {/* ============================================================ */}

        <section className="border-t border-[#DEDEDB] bg-[#17324D]">
          <div className="pml-container py-14 sm:py-16">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#BFCBFF]">
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
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-[#F8F7F4]"
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
