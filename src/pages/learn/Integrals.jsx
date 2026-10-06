import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Layers,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

const sections = [
  {
    id: "meaning",
    title: "What is an integral?",
    content:
      "Integration is one of the two fundamental operations of calculus. While differentiation describes instantaneous change, integration describes accumulation. Depending on the problem, an integral can represent area, distance, volume, work, probability, or another accumulated quantity.",
  },
  {
    id: "indefinite",
    title: "Indefinite integrals",
    content:
      "An indefinite integral represents a family of antiderivatives. If F′(x) = f(x), then F(x) is an antiderivative of f(x). Because differentiating a constant produces zero, an arbitrary constant C must be included in the result.",
  },
  {
    id: "definite",
    title: "Definite integrals",
    content:
      "A definite integral has specified lower and upper limits. It produces a number representing accumulated signed area or another accumulated quantity over an interval.",
  },
  {
    id: "ftc",
    title: "Fundamental Theorem of Calculus",
    content:
      "The Fundamental Theorem of Calculus connects differentiation and integration. Under appropriate conditions, it allows a definite integral to be evaluated using an antiderivative at the endpoints.",
  },
];

const basicRules = [
  {
    title: "Power Rule",
    formula: "∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C",
    note: "Valid when n ≠ −1.",
  },
  {
    title: "Constant Rule",
    formula: "∫ c dx = cx + C",
    note: "The integral of a constant is a linear function.",
  },
  {
    title: "Exponential",
    formula: "∫ eˣ dx = eˣ + C",
    note: "The exponential function is its own antiderivative.",
  },
  {
    title: "Natural Logarithm",
    formula: "∫ 1/x dx = ln|x| + C",
    note: "The absolute value accounts for both positive and negative values of x.",
  },
  {
    title: "Sine",
    formula: "∫ sin(x) dx = −cos(x) + C",
    note: "Differentiate −cos(x) to verify the result.",
  },
  {
    title: "Cosine",
    formula: "∫ cos(x) dx = sin(x) + C",
    note: "Differentiate sin(x) to verify the result.",
  },
];

const methods = [
  {
    title: "Direct integration",
    description:
      "Apply a known antiderivative rule directly. This is often the fastest approach for simple polynomial, exponential, and trigonometric expressions.",
  },
  {
    title: "Substitution",
    description:
      "Introduce a new variable to simplify a complicated expression and transform the integral into an easier form.",
  },
  {
    title: "Integration by parts",
    description:
      "Useful for products of functions and derived from the product rule for differentiation.",
  },
  {
    title: "Partial fractions",
    description:
      "Decompose suitable rational functions into simpler fractions that can be integrated separately.",
  },
  {
    title: "Numerical integration",
    description:
      "Approximate a definite integral when an exact antiderivative is difficult or unavailable.",
  },
];

const applications = [
  {
    title: "Area",
    text: "Calculate accumulated area under curves and between functions.",
    path: "/applications/area",
  },
  {
    title: "Volume",
    text: "Find volumes of solids using cross-sections and rotation.",
    path: "/applications/volume",
  },
  {
    title: "Motion",
    text: "Recover position or distance from velocity and acceleration.",
    path: "/applications/motion",
  },
  {
    title: "Work",
    text: "Calculate work done by forces that vary with position.",
    path: "/applications/work",
  },
];

function FormulaCard({ title, formula, note }) {
  return (
    <div className="pml-card p-6">
      <h3 className="text-base font-bold text-slate-900">{title}</h3>

      <div className="pml-formula mt-5">
        <MathRenderer block>{formula}</MathRenderer>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">{note}</p>
    </div>
  );
}

export default function Integrals() {
  const [openSection, setOpenSection] = useState("meaning");

  return (
    <>
      <SEO
        title="Integrals in Calculus | Definite, Indefinite & Fundamental Theorem"
        description="Learn integration from the basics: indefinite and definite integrals, antiderivatives, the Fundamental Theorem of Calculus, integration rules, methods, examples, and applications."
        canonical="/learn/integrals"
      />

      <PageHeader
        eyebrow="Learn • Integrals"
        title="Understanding Integrals"
        description="Learn how integration describes accumulation, how antiderivatives work, why definite integrals represent accumulated quantities, and how integration connects to differentiation."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="pml-prose">
                <div className="pml-eyebrow">The central idea</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Integration measures accumulation.
                </h2>

                <p className="mt-5">
                  Integration is one of the two fundamental operations of
                  calculus. While differentiation measures how a quantity
                  changes, integration allows us to accumulate infinitely many
                  small contributions.
                </p>

                <p>
                  Depending on the context, an integral can represent area,
                  distance, volume, work, probability, mass, or another
                  accumulated quantity.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Antiderivative relationship
                </p>

                <div className="pml-formula mt-5 text-center">
                  <MathRenderer block>{"F′(x) = f(x)"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  If the derivative of <strong>F</strong> is <strong>f</strong>,
                  then <strong>F</strong> is an antiderivative of{" "}
                  <strong>f</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core concepts */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Four essential ideas</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Start with the meaning before the rules.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Integration becomes much easier to understand when its main
                concepts are connected rather than treated as separate formulas.
              </p>
            </div>

            <div className="mt-10 grid gap-3">
              {sections.map((section) => {
                const isOpen = openSection === section.id;

                return (
                  <div
                    key={section.id}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : section.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                          <BookOpen size={17} strokeWidth={1.8} />
                        </span>

                        <span className="font-bold text-slate-900">
                          {section.title}
                        </span>
                      </span>

                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-200 px-5 pb-6 pt-5">
                        <p className="max-w-4xl text-sm leading-7 text-slate-600">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Indefinite integrals */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">01 · Indefinite integrals</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Integration can reverse differentiation.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  An indefinite integral asks for a function whose derivative
                  equals the given integrand.
                </p>
              </div>

              <div>
                <div className="pml-formula">
                  <MathRenderer block>{"∫ f(x) dx = F(x) + C"}</MathRenderer>
                </div>

                <div className="pml-prose mt-6">
                  <p>
                    The symbol <strong>∫</strong> represents integration,{" "}
                    <strong>f(x)</strong> is the integrand, and{" "}
                    <strong>dx</strong> indicates the variable of integration.
                  </p>

                  <p>
                    The constant <strong>C</strong> is necessary because
                    infinitely many functions can have the same derivative.
                  </p>
                </div>

                <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 p-6">
                  <p className="text-sm font-bold text-[#17324d]">Example</p>

                  <div className="pml-formula mt-4">
                    <MathRenderer block>{"∫ 2x dx = x² + C"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Differentiating <strong>x² + C</strong> gives{" "}
                    <strong>2x</strong>, so it is an antiderivative of{" "}
                    <strong>2x</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definite integral */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">02 · Definite integrals</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Accumulation over a finite interval.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    A definite integral has a lower and upper limit. Instead of
                    producing a family of functions, it produces a number.
                  </p>

                  <p>
                    When the function is positive, the integral represents
                    ordinary area above the x-axis. When the function is
                    negative, that contribution is counted negatively.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Definite integral
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer block>{"∫ₐᵇ f(x) dx"}</MathRenderer>
                </div>

                <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                  {[
                    ["a", "Lower limit of integration"],
                    ["b", "Upper limit of integration"],
                    ["f(x)", "Function being accumulated"],
                  ].map(([symbol, description]) => (
                    <div
                      key={symbol}
                      className="grid grid-cols-[70px_1fr] gap-4 py-4"
                    >
                      <code className="font-mono text-sm font-bold text-[#17324d]">
                        {symbol}
                      </code>

                      <span className="text-sm text-slate-600">
                        {description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accumulation explanation */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="pml-eyebrow">Geometric interpretation</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  From rectangles to an exact accumulation.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  One way to understand a definite integral is to approximate
                  the area under a curve using many thin rectangles.
                </p>
              </div>

              <div>
                <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                  <div className="flex items-center gap-3">
                    <Calculator size={20} className="text-[#17324d]" />

                    <h3 className="font-bold text-slate-900">The basic idea</h3>
                  </div>

                  <div className="pml-prose mt-5">
                    <p>
                      Divide the interval from <strong>a</strong> to{" "}
                      <strong>b</strong> into small pieces. Approximate the
                      contribution from each piece, then add them together.
                    </p>

                    <p>
                      As the pieces become narrower, the approximation can
                      approach the exact value of the integral.
                    </p>
                  </div>

                  <div className="pml-formula mt-6">
                    <MathRenderer block>
                      {"∫ₐᵇ f(x) dx = limₙ→∞ Σ f(xᵢ*)Δx"}
                    </MathRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic formulas */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Essential formulas</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Basic integration rules
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                These antiderivative formulas form the foundation of many
                integration problems.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {basicRules.map((rule) => (
                <FormulaCard key={rule.title} {...rule} />
              ))}
            </div>
          </div>
        </section>

        {/* Fundamental theorem */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#17324d] text-white">
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <div className="pml-eyebrow">03 · Central theorem</div>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Fundamental Theorem of Calculus
                  </h2>
                </div>
              </div>

              <div className="pml-prose mt-8">
                <p>
                  The Fundamental Theorem of Calculus provides the key
                  connection between differentiation and integration. It shows
                  that, under appropriate conditions, a definite integral can be
                  evaluated using an antiderivative.
                </p>
              </div>

              <div className="pml-formula mt-7 bg-white">
                <MathRenderer block>{"∫ₐᵇ f(x) dx = F(b) − F(a)"}</MathRenderer>
              </div>

              <div className="mt-7 rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-bold text-slate-900">
                  Worked example
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Let <strong>f(x) = x</strong>. An antiderivative is{" "}
                  <strong>F(x) = x²/2</strong>.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer block>{"∫₀² x dx = [x²/2]₀² = 2"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  The result is the signed area under <strong>y = x</strong>{" "}
                  from <strong>x = 0</strong> to <strong>x = 2</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration methods */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Problem-solving techniques</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Common integration methods
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Different integrals have different structures. Recognizing that
                structure helps determine which technique to use.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {methods.map((method, index) => (
                <article key={method.title} className="pml-card p-6">
                  <span className="font-mono text-xs font-bold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {method.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Applications</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why integration matters.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Integration appears whenever many small contributions need to be
                combined into a total quantity.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {applications.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-200 hover:bg-blue-50"
                >
                  <h3 className="font-bold text-slate-900 transition-colors group-hover:text-[#2448c7]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                    Explore
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Numerical integration */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="pml-eyebrow">Beyond exact integration</div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    When an exact antiderivative is difficult.
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    Not every function has an elementary antiderivative. In
                    these cases, numerical integration can approximate the value
                    of a definite integral. Common techniques include the
                    trapezoidal rule, midpoint rule, and Simpson's rule.
                  </p>
                </div>

                <Link
                  to="/calculators/integral"
                  className="pml-btn-primary shrink-0"
                >
                  Try Integral Calculator
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Important idea */}
        <section className="border-t border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    A useful way to think about integrals
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Do not think of an integral only as an area formula. Think
                    of it as a way to accumulate small contributions. The
                    meaning of those contributions depends on the problem: they
                    might represent distance, mass, energy, probability, or
                    another quantity.
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
              <div className="pml-eyebrow">Integrals summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
                {[
                  "Integration describes accumulation and is closely connected to antiderivatives.",
                  "An indefinite integral represents a family of antiderivatives and includes an arbitrary constant.",
                  "A definite integral produces a number representing accumulated signed quantity over an interval.",
                  "The Fundamental Theorem of Calculus connects differentiation and definite integration.",
                  "Different integration problems require different techniques such as substitution and integration by parts.",
                  "Numerical integration can approximate definite integrals when exact methods are impractical.",
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
                  Continue into infinite processes
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  After derivatives and integrals, explore sequences,
                  convergence, power series, and Taylor expansions.
                </p>
              </div>

              <Link
                to="/learn/series"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Series
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
