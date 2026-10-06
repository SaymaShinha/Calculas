import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Calculator,
  Layers,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";

const sections = [
  {
    id: "meaning",
    title: "What is an integral?",
    content:
      "Integration is one of the two fundamental operations of calculus. While differentiation measures how a quantity changes, integration can be used to measure accumulation. Depending on the problem, an integral can represent area, distance, volume, work, probability, or another accumulated quantity.",
  },
  {
    id: "indefinite",
    title: "Indefinite integrals",
    content:
      "An indefinite integral represents a family of antiderivatives. If F′(x) = f(x), then F(x) is an antiderivative of f(x). Because differentiating a constant produces zero, an arbitrary constant C is included in the result.",
  },
  {
    id: "definite",
    title: "Definite integrals",
    content:
      "A definite integral has specified lower and upper bounds. It produces a number representing accumulated signed area or another accumulated quantity over an interval.",
  },
  {
    id: "ftc",
    title: "Fundamental Theorem of Calculus",
    content:
      "The Fundamental Theorem of Calculus connects differentiation and integration. It shows that, under appropriate continuity conditions, evaluating an antiderivative at the endpoints gives the value of a definite integral.",
  },
];

const basicRules = [
  {
    title: "Power Rule",
    formula: "∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C",
    note: "Valid for n ≠ −1.",
  },
  {
    title: "Constant Rule",
    formula: "∫ C dx = Cx + C₁",
    note: "The integral of a constant is linear in x.",
  },
  {
    title: "Exponential",
    formula: "∫ eˣ dx = eˣ + C",
    note: "The exponential function is its own antiderivative.",
  },
  {
    title: "Natural Logarithm",
    formula: "∫ 1/x dx = ln|x| + C",
    note: "The absolute value is needed because the logarithm's real-domain expression is defined for positive arguments.",
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
      "Apply a known antiderivative rule directly. This is often the fastest method for simple polynomial, exponential, and trigonometric expressions.",
  },
  {
    title: "Substitution",
    description:
      "Rewrite a complicated expression using a new variable so that the integral becomes easier to evaluate.",
  },
  {
    title: "Integration by parts",
    description:
      "Useful for products of functions. It is based on the product rule for differentiation.",
  },
  {
    title: "Partial fractions",
    description:
      "Rational functions can sometimes be decomposed into simpler fractions that are easier to integrate.",
  },
  {
    title: "Numerical integration",
    description:
      "When an exact antiderivative is difficult or unavailable, numerical methods such as the trapezoidal rule and Simpson's rule can approximate the integral.",
  },
];

function FormulaCard({ title, formula, note }) {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
      <h3 className="font-bold">{title}</h3>

      <div className="my-4 overflow-x-auto rounded-xl bg-base-200 p-4 text-center">
        <code className="whitespace-nowrap font-mono text-base font-semibold">
          {formula}
        </code>
      </div>

      <p className="text-sm leading-6 text-base-content/60">{note}</p>
    </div>
  );
}

export default function Integrals() {
  const [openSection, setOpenSection] = useState("meaning");

  return (
    <>
      <SEO
        title="Integrals Explained | Definite, Indefinite & Fundamental Theorem"
        description="Learn integration from the basics: indefinite and definite integrals, antiderivatives, the Fundamental Theorem of Calculus, integration rules, methods, examples, and applications."
      />

      <PageHeader
        eyebrow="Learn Calculus"
        title="Integrals"
        description="Understand integration as accumulation, learn the most important integration rules, and see how definite and indefinite integrals connect to real-world problems."
      />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        {/* Intro */}
        <section className="mb-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Sigma size={25} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary">
                    Core Calculus Concept
                  </p>

                  <h2 className="text-2xl font-bold">
                    Integration measures accumulation
                  </h2>
                </div>
              </div>

              <p className="leading-8 text-base-content/70">
                Integration gives us a mathematical way to accumulate infinitely
                many small contributions. Geometrically, a definite integral can
                represent the signed area between a curve and the x-axis.
              </p>

              <p className="mt-4 leading-8 text-base-content/70">
                Integration is also the reverse operation of differentiation.
                This connection is one of the central ideas of calculus.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-primary">Key idea</p>

              <div className="my-5 overflow-x-auto rounded-2xl bg-base-100 p-6 text-center shadow-sm">
                <span className="whitespace-nowrap font-mono text-xl font-bold">
                  F′(x) = f(x)
                </span>
              </div>

              <p className="text-sm leading-6 text-base-content/65">
                If F is an antiderivative of f, then integrating f gives F plus
                an arbitrary constant.
              </p>
            </div>
          </div>
        </section>

        {/* Learning sections */}
        <section className="mb-12">
          <div className="grid gap-3">
            {sections.map((section) => {
              const isOpen = openSection === section.id;

              return (
                <div
                  key={section.id}
                  className="overflow-hidden rounded-2xl border border-base-300 bg-base-100"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpen ? null : section.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-base-200"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BookOpen size={17} />
                      </span>

                      <span className="font-bold">{section.title}</span>
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-base-300 px-5 pb-6 pt-5">
                      <p className="max-w-4xl leading-8 text-base-content/70">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Definite integral */}
        <section className="mb-12">
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="rounded-xl bg-secondary/10 p-3 text-secondary">
                <Layers size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">The definite integral</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Accumulation over a finite interval
                </p>
              </div>
            </div>

            <p className="leading-8 text-base-content/70">
              Consider a function f(x) on an interval from a to b. A definite
              integral adds up the function's contributions throughout that
              interval. When f(x) is positive, this corresponds to ordinary area
              above the x-axis. When f(x) is negative, the contribution is
              negative.
            </p>

            <div className="my-7 overflow-x-auto rounded-2xl bg-base-200 p-6 text-center">
              <code className="whitespace-nowrap font-mono text-xl font-bold">
                ∫ₐᵇ f(x) dx
              </code>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-base-200 p-5">
                <p className="font-bold">a</p>
                <p className="mt-1 text-sm text-base-content/60">
                  Lower limit of integration
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-5">
                <p className="font-bold">b</p>
                <p className="mt-1 text-sm text-base-content/60">
                  Upper limit of integration
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-5">
                <p className="font-bold">f(x)</p>
                <p className="mt-1 text-sm text-base-content/60">
                  Integrand being accumulated
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visualization */}
        <section className="mb-12">
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Calculator size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Visual meaning of an integral
                </h2>

                <p className="text-sm text-base-content/60">
                  A definite integral can represent signed area
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl bg-base-200 p-4">
              <div className="mx-auto flex min-w-[420px] max-w-3xl items-end justify-center gap-1 px-4 py-12">
                {Array.from({ length: 24 }).map((_, index) => {
                  const height = 35 + Math.sin(index / 3) * 25 + index * 1.5;

                  return (
                    <div
                      key={index}
                      className="w-3 rounded-t bg-primary/60 sm:w-5"
                      style={{
                        height: `${Math.max(20, height)}px`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-base-content/60">
              Conceptually, the integral can be understood by dividing an
              interval into many thin slices and adding their contributions. As
              the slices become thinner, the approximation approaches the exact
              integral under suitable conditions.
            </p>
          </div>
        </section>

        {/* Basic formulas */}
        <section className="mb-12">
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary">
              Essential formulas
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Basic integration rules
            </h2>

            <p className="mt-2 max-w-3xl leading-7 text-base-content/60">
              These are some of the most frequently used antiderivative
              formulas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {basicRules.map((rule) => (
              <FormulaCard key={rule.title} {...rule} />
            ))}
          </div>
        </section>

        {/* Fundamental theorem */}
        <section className="mb-12">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Central theorem
                </p>

                <h2 className="text-2xl font-bold">
                  Fundamental Theorem of Calculus
                </h2>
              </div>
            </div>

            <p className="leading-8 text-base-content/70">
              Suppose F is an antiderivative of f. Then the definite integral of
              f from a to b can be evaluated using the difference between F at
              the endpoints.
            </p>

            <div className="my-7 overflow-x-auto rounded-2xl bg-base-100 p-6 text-center shadow-sm">
              <code className="whitespace-nowrap font-mono text-xl font-bold">
                ∫ₐᵇ f(x) dx = F(b) − F(a)
              </code>
            </div>

            <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
              <p className="text-sm font-semibold">Example</p>

              <p className="mt-3 leading-7 text-base-content/70">
                Let f(x) = x. An antiderivative is F(x) = x²/2. Therefore:
              </p>

              <div className="my-4 overflow-x-auto rounded-xl bg-base-200 p-4 text-center">
                <code className="whitespace-nowrap font-mono">
                  ∫₀² x dx = [x²/2]₀² = 2
                </code>
              </div>

              <p className="text-sm leading-6 text-base-content/60">
                The result represents the signed area under y = x between x = 0
                and x = 2.
              </p>
            </div>
          </div>
        </section>

        {/* Integration methods */}
        <section className="mb-12">
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary">
              Problem-solving techniques
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Common integration methods
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((method, index) => (
              <article
                key={method.title}
                className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                  {index + 1}
                </div>

                <h3 className="font-bold">{method.title}</h3>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  {method.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold text-primary">
                Why integration matters
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Applications of integration
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Area",
                  text: "Calculate areas under curves and between functions.",
                  path: "/applications/area",
                },
                {
                  title: "Volume",
                  text: "Find volumes of solids using cross-sections.",
                  path: "/applications/volume",
                },
                {
                  title: "Motion",
                  text: "Recover position or distance from velocity and acceleration.",
                  path: "/applications/motion",
                },
                {
                  title: "Work",
                  text: "Model work done by variable forces.",
                  path: "/applications/work",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="group rounded-2xl border border-base-300 p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
                >
                  <h3 className="font-bold group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-base-content/60">
                    {item.text}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Explore
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Numerical integration */}
        <section>
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Beyond exact integration
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  When an exact antiderivative is difficult
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-base-content/70">
                  Some functions do not have elementary antiderivatives. In
                  those situations, numerical integration can approximate the
                  value of a definite integral. Common techniques include the
                  trapezoidal rule, midpoint rule, and Simpson's rule.
                </p>
              </div>

              <Link to="/calculators/integral" className="btn btn-primary">
                Try Integral Calculator
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
