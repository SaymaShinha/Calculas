import {
  ArrowRight,
  CheckCircle2,
  Infinity,
  Lightbulb,
  Sigma,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const convergenceTests = [
  {
    title: "Geometric series",
    text: "Use the common ratio to determine whether a geometric series converges and, when appropriate, find its sum.",
  },
  {
    title: "Comparison test",
    text: "Compare the terms with a known positive series to transfer information about convergence or divergence.",
  },
  {
    title: "Ratio test",
    text: "Examine the limiting ratio of consecutive absolute terms, especially for factorials and exponential expressions.",
  },
  {
    title: "Root test",
    text: "Use the nth root of the absolute value of each term to analyze the long-term behavior of the series.",
  },
  {
    title: "Integral test",
    text: "Relate a positive-term series to an improper integral when the terms come from a suitable continuous function.",
  },
  {
    title: "Alternating series test",
    text: "Analyze series whose signs alternate when the term magnitudes decrease toward zero.",
  },
];

const applications = [
  [
    "Numerical computation",
    "Approximate functions and numerical values that may be difficult to calculate directly.",
  ],
  [
    "Differential equations",
    "Construct series-based solutions to differential equations and analyze their behavior.",
  ],
  [
    "Physics",
    "Model oscillations, waves, fields, perturbations, and other physical systems.",
  ],
  [
    "Engineering",
    "Develop approximations that can simplify calculations and system analysis.",
  ],
  [
    "Probability",
    "Use generating functions, probability series, and expansions in probabilistic models.",
  ],
  [
    "Mathematical analysis",
    "Study convergence, approximation, infinite processes, and properties of functions.",
  ],
];

const coreIdeas = [
  "A sequence is an ordered list of terms indexed by positive integers.",
  "A series is formed by adding the terms of a sequence.",
  "An infinite series is defined through the limit of its partial sums.",
  "A convergent series has a finite limit for its partial sums.",
  "If a series converges, its individual terms must approach zero.",
  "The condition aₙ → 0 is necessary for convergence but is not sufficient by itself.",
  "Convergence tests help determine the behavior of series that cannot be summed directly.",
  "Power series represent functions using infinitely many powers of a variable.",
  "Taylor and Maclaurin series provide polynomial approximations to functions.",
];

export default function Series() {
  return (
    <>
      <SEO
        title="Sequences and Infinite Series | Convergence, Taylor & Maclaurin Series"
        description="Learn sequences and infinite series, sequence limits, convergence and divergence, geometric series, convergence tests, power series, Taylor series, and Maclaurin series with examples and applications."
        canonical="/learn/series"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Sequences and Infinite Series"
        description="Learn how sequences describe patterns, how infinite series accumulate terms, and how convergence and power series provide powerful tools for approximation and mathematical analysis."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="pml-prose">
                <div className="pml-eyebrow">The big picture</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  From sequences to infinite sums
                </h2>

                <p className="mt-5">
                  Calculus frequently studies processes that continue
                  indefinitely. A <strong>sequence</strong> gives us an ordered
                  list of values, while a <strong>series</strong> adds the terms
                  of a sequence together.
                </p>

                <p>
                  Infinite series are particularly important because complicated
                  functions can sometimes be represented as sums of simpler
                  expressions. This creates a bridge between exact mathematics,
                  approximation, numerical computation, physics, engineering,
                  and differential equations.
                </p>

                <p>
                  The central difficulty is that an infinite sum cannot simply
                  be treated like an ordinary finite addition. Instead, we use
                  limits to define what the infinite sum means.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#17324d] text-white">
                    <Infinity size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      The central question
                    </p>

                    <p className="text-xs text-slate-500">
                      What happens after infinitely many terms?
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  When infinitely many terms are added, do the partial sums
                  approach a finite value?
                </p>

                <div className="mt-6 rounded-lg border border-slate-200 bg-white px-4 py-2">
                  <MathRenderer>{"S=\\lim_{n\\to\\infty}S_n"}</MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sequences */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">01 · Sequences</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is a sequence?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A sequence is an ordered list of numbers generated according to
                a rule. The individual values are called <strong>terms</strong>,
                and each term is associated with an index.
              </p>
            </div>

            <div className="pml-formula mt-7 max-w-3xl">
              <MathRenderer>{"a_1,a_2,a_3,\\ldots,a_n,\\ldots"}</MathRenderer>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="pml-card">
                <p className="text-sm leading-7 text-slate-600">
                  Consider the sequence:
                </p>

                <div className="mt-5">
                  <MathRenderer>
                    {"1,\\frac12,\\frac13,\\frac14,\\ldots"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Each term becomes smaller as the index increases.
                </p>
              </div>

              <div className="pml-card">
                <p className="text-sm leading-7 text-slate-600">
                  The sequence can be represented by:
                </p>

                <div className="mt-5">
                  <MathRenderer>{"a_n=\\frac1n"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  The formula tells us how to calculate the nth term.
                </p>
              </div>
            </div>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Key idea:</strong> A sequence describes individual
                  terms. A series is created when those terms are added
                  together.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limits of sequences */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">02 · Limits</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  The limit of a sequence
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  A sequence may approach a particular number as its index
                  becomes very large. We describe this behavior using a limit.
                </p>
              </div>

              <div>
                <div className="pml-card">
                  <MathRenderer>{"\\lim_{n\\to\\infty}a_n=L"}</MathRenderer>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    This means that the terms of the sequence become arbitrarily
                    close to <strong>L</strong> as <strong>n</strong> becomes
                    large.
                  </p>
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Example
                  </p>

                  <div className="mt-4">
                    <MathRenderer>
                      {"\\lim_{n\\to\\infty}\\frac1n=0"}
                    </MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    As <strong>n</strong> grows, the denominator becomes
                    arbitrarily large, so the fraction approaches zero.
                  </p>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  Sequence limits become especially important for series because
                  an infinite series is defined through the limit of its partial
                  sums.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite series */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">03 · Infinite series</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is an infinite series?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A series is the sum of the terms of a sequence. An infinite
                series is written using sigma notation:
              </p>
            </div>

            <div className="pml-formula mt-7 max-w-3xl">
              <MathRenderer>{"\\sum_{n=1}^{\\infty}a_n"}</MathRenderer>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  Step 1
                </p>

                <h3 className="mt-3 font-bold text-slate-900">
                  Form partial sums
                </h3>

                <div className="mt-4">
                  <MathRenderer>{"S_n=a_1+a_2+\\cdots+a_n"}</MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  Step 2
                </p>

                <h3 className="mt-3 font-bold text-slate-900">
                  Increase the number of terms
                </h3>

                <div className="mt-4">
                  <MathRenderer>{"n\\to\\infty"}</MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  Step 3
                </p>

                <h3 className="mt-3 font-bold text-slate-900">
                  Take the limit
                </h3>

                <div className="mt-4">
                  <MathRenderer>{"S=\\lim_{n\\to\\infty}S_n"}</MathRenderer>
                </div>
              </div>
            </div>

            <p className="pml-prose mt-8 max-w-3xl">
              If the sequence of partial sums approaches a finite value, the
              infinite series <strong>converges</strong> to that value. If the
              partial sums do not approach a finite value, the series{" "}
              <strong>diverges</strong>.
            </p>
          </div>
        </section>

        {/* Geometric series */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">04 · Fundamental example</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Geometric series
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The geometric series is one of the most important examples of an
                infinite series. Each term is obtained by multiplying the
                previous term by the same constant ratio.
              </p>
            </div>

            <div className="pml-formula mt-7 max-w-3xl">
              <MathRenderer>{"a+ar+ar^2+ar^3+\\cdots"}</MathRenderer>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              <div className="pml-card">
                <p className="text-sm leading-7 text-slate-600">
                  When the absolute value of the common ratio is less than one:
                </p>

                <div className="mt-4">
                  <MathRenderer>{"|r|<1"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  the infinite series converges and its sum is:
                </p>

                <div className="mt-4">
                  <MathRenderer>
                    {"\\sum_{n=0}^{\\infty}ar^n=\\frac{a}{1-r}"}
                  </MathRenderer>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Worked example
                </p>

                <div className="mt-5">
                  <MathRenderer>
                    {"1+\\frac12+\\frac14+\\frac18+\\cdots"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Here <strong>a = 1</strong> and <strong>r = 1/2</strong>.
                </p>

                <div className="mt-4">
                  <MathRenderer>{"S=\\frac{1}{1-\\frac12}=2"}</MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convergence */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">05 · Convergence</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Convergence and divergence
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                An infinite series <strong>converges</strong> when its partial
                sums approach a finite number. It <strong>diverges</strong> when
                the partial sums fail to approach a finite limit.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="pml-card">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#18794E]" size={21} />

                  <h3 className="font-semibold text-[#17202A]">Convergent</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The sequence of partial sums approaches a finite value.
                </p>

                <div className="mt-5">
                  <MathRenderer>{"\\lim_{n\\to\\infty}S_n=S"}</MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-[#9A5B00]" size={21} />

                  <h3 className="font-semibold text-[#17202A]">Divergent</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The partial sums fail to approach a finite limit.
                </p>

                <div className="mt-5">
                  <MathRenderer>
                    {
                      "\\lim_{n\\to\\infty}S_n\\text{ does not exist as a finite number}"
                    }
                  </MathRenderer>
                </div>
              </div>
            </div>

            <div className="pml-warning mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0" size={20} />

                <div className="text-sm leading-7">
                  <strong>Important:</strong> If{" "}
                  <MathRenderer inline>{"\\sum a_n"}</MathRenderer> converges,
                  then necessarily{" "}
                  <MathRenderer inline>
                    {"\\lim_{n\\to\\infty}a_n=0"}
                  </MathRenderer>
                  . But the fact that the terms approach zero does{" "}
                  <strong>not</strong> guarantee convergence.
                </div>
              </div>
            </div>

            <div className="pml-card mt-8">
              <h3 className="text-lg font-bold text-[#17202A]">
                A classic example of the distinction
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                The harmonic series has terms that approach zero:
              </p>

              <div className="mt-4">
                <MathRenderer>{"\\lim_{n\\to\\infty}\\frac1n=0"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                Yet the harmonic series itself diverges:
              </p>

              <div className="mt-4">
                <MathRenderer>
                  {"\\sum_{n=1}^{\\infty}\\frac1n=\\infty"}
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                Therefore, checking whether the individual terms approach zero
                is a necessary first step, not a complete convergence test.
              </p>
            </div>
          </div>
        </section>

        {/* Convergence tests */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">06 · Convergence tests</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                How do we determine convergence?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Many series do not have an obvious closed-form sum. Convergence
                tests provide systematic ways to determine whether such series
                converge or diverge.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {convergenceTests.map((item) => (
                <div key={item.title} className="pml-card">
                  <h3 className="text-lg font-bold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
              <div className="pml-table-wrap">
                <table className="pml-table">
                  <thead>
                    <tr>
                      <th>Test</th>
                      <th>Useful when</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Ratio</td>
                      <td>
                        Terms contain factorials, powers, or exponential growth.
                      </td>
                    </tr>

                    <tr>
                      <td>Root</td>
                      <td>
                        Terms contain expressions raised to the nth power.
                      </td>
                    </tr>

                    <tr>
                      <td>Comparison</td>
                      <td>The series resembles a known benchmark series.</td>
                    </tr>

                    <tr>
                      <td>Integral</td>
                      <td>
                        Terms can be connected to a positive continuous
                        function.
                      </td>
                    </tr>

                    <tr>
                      <td>Alternating</td>
                      <td>
                        Signs alternate and term magnitudes decrease toward
                        zero.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Power series */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">07 · Power series</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Representing functions with series
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A power series is an infinite series involving powers of a
                variable. A common form centered at <strong>a</strong> is:
              </p>
            </div>

            <div className="pml-formula mt-7 max-w-3xl">
              <MathRenderer>{"\\sum_{n=0}^{\\infty}c_n(x-a)^n"}</MathRenderer>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              <div className="pml-card">
                <h3 className="text-lg font-bold text-[#17202A]">
                  Interval of convergence
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  A power series usually converges for some values of{" "}
                  <strong>x</strong> and diverges for others. The set of values
                  for which it converges is its interval of convergence.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The distance from the center to the boundary of this region is
                  called the radius of convergence.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  General form
                </p>

                <div className="mt-5">
                  <MathRenderer>{"|x-a|<R"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Here <strong>R</strong> represents the radius of convergence.
                </p>
              </div>
            </div>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Why this matters:</strong> Within its interval of
                  convergence, a power series can provide a useful
                  representation of a function and can often be differentiated
                  or integrated term by term.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Taylor series */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">08 · Taylor series</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Taylor series turn derivatives into approximations.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  A Taylor series represents a sufficiently differentiable
                  function as an infinite power series centered at a chosen
                  point <strong>a</strong>.
                </p>
              </div>

              <div>
                <div className="pml-card">
                  <MathRenderer>
                    {"f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n"}
                  </MathRenderer>

                  <p className="mt-6 text-sm leading-7 text-slate-600">
                    The first few terms make the construction easier to see:
                  </p>

                  <div className="mt-4">
                    <MathRenderer>
                      {"f(x)=f(a)+f'(a)(x-a)+\\frac{f''(a)}{2!}(x-a)^2+\\cdots"}
                    </MathRenderer>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                  <h3 className="font-bold text-slate-900">
                    Why derivatives appear
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Each derivative captures additional information about the
                    local behavior of the function. The constant term describes
                    the function's value, the first derivative describes local
                    slope, and higher derivatives provide increasingly detailed
                    information about its local shape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maclaurin */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">09 · Maclaurin series</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Taylor series centered at zero
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A Maclaurin series is a Taylor series centered at{" "}
                <strong>a = 0</strong>.
              </p>
            </div>

            <div className="pml-formula mt-7 max-w-3xl">
              <MathRenderer>
                {"f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n"}
              </MathRenderer>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600">
              Several familiar functions have important Maclaurin expansions.
              These examples are central to calculus, numerical computation,
              physics, and engineering.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="pml-card">
                <h3 className="text-lg font-bold text-[#17202A]">
                  Exponential function
                </h3>

                <div className="mt-5">
                  <MathRenderer>
                    {"e^x=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\cdots"}
                  </MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <h3 className="text-lg font-bold text-[#17202A]">
                  Sine function
                </h3>

                <div className="mt-5">
                  <MathRenderer>
                    {"\\sin(x)=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots"}
                  </MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <h3 className="text-lg font-bold text-[#17202A]">
                  Cosine function
                </h3>

                <div className="mt-5">
                  <MathRenderer>
                    {"\\cos(x)=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots"}
                  </MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <h3 className="text-lg font-bold text-[#17202A]">
                  Geometric expansion
                </h3>

                <div className="mt-5">
                  <MathRenderer>
                    {"\\frac{1}{1-x}=1+x+x^2+x^3+\\cdots"}
                  </MathRenderer>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  This representation is valid for <strong>|x| &lt; 1</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approximation */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">10 · Approximation</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Taylor series are useful
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Infinite series can approximate functions using polynomials.
                Polynomial expressions are often easier to evaluate,
                differentiate, integrate, and implement in numerical algorithms.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  First approximation
                </p>

                <div className="mt-5">
                  <MathRenderer>{"\\sin(x)\\approx x"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Near zero, the sine function is well approximated by its
                  tangent-line behavior.
                </p>
              </div>

              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  Improved approximation
                </p>

                <div className="mt-5">
                  <MathRenderer>
                    {"\\sin(x)\\approx x-\\frac{x^3}{3!}"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Adding another appropriate term generally improves the local
                  approximation.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
              <div className="flex items-start gap-4">
                <Lightbulb
                  className="mt-0.5 shrink-0 text-[#9A5B00]"
                  size={22}
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Approximation has limits
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    A Taylor polynomial is an approximation, not automatically
                    an exact replacement for the original function. Accuracy
                    depends on the number of terms, the point of expansion, the
                    value of x, and the convergence properties of the series.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Error and remainder */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">11 · Accuracy</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  How accurate is a series approximation?
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  A finite Taylor polynomial leaves out the remaining terms of
                  the infinite series. The difference between the true function
                  and the approximation is called the remainder or error.
                </p>
              </div>

              <div className="pml-card">
                <h3 className="text-lg font-bold text-[#17202A]">
                  Taylor's theorem
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  One common form describes the function as a polynomial plus a
                  remainder:
                </p>

                <div className="mt-5">
                  <MathRenderer>{"f(x)=P_n(x)+R_n(x)"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  Here <strong>Pₙ(x)</strong> is the nth-degree Taylor
                  polynomial and <strong>Rₙ(x)</strong> represents the part
                  omitted from the approximation.
                </p>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-sm leading-7 text-slate-600">
                    This distinction is important in numerical work: a useful
                    approximation should come with an understanding of how much
                    error may remain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">12 · Applications</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Where sequences and series are used
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Sequences and series provide practical methods for representing,
                approximating, and analyzing quantities in many areas of
                mathematics and science.
              </p>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {applications.map(([title, text]) => (
                <div
                  key={title}
                  className="border-l-2 border-[#DEDEDB] py-1 pl-5"
                >
                  <h3 className="font-semibold text-[#17202A]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical workflow */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">A practical workflow</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A systematic way to study a series
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                When you encounter a new infinite series, avoid immediately
                applying a random convergence test. First identify its
                structure.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Identify",
                  "Write the general term and determine what type of series you have.",
                ],
                [
                  "02",
                  "Check terms",
                  "Determine whether the individual terms approach zero.",
                ],
                [
                  "03",
                  "Choose a test",
                  "Look for geometric, alternating, comparison, ratio, root, or integral structure.",
                ],
                [
                  "04",
                  "Conclude",
                  "State clearly whether the series converges or diverges and explain why.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="pml-card">
                  <span className="font-mono text-xs font-semibold text-blue-700">
                    {number}
                  </span>

                  <h3 className="mt-4 font-bold text-slate-900">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core concepts */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Core concepts</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {coreIdeas.map((item, index) => (
                  <div key={item} className="flex gap-4 py-5">
                    <span className="font-mono text-xs font-semibold text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#18794E]"
                      />

                      <p className="text-sm leading-6 text-[#34404C]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Understanding infinite behavior
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  Sequences and series provide a framework for studying infinite
                  processes. A sequence describes the behavior of individual
                  terms, while a series investigates what happens when those
                  terms are accumulated.
                </p>

                <p>
                  The key concept is the sequence of partial sums. An infinite
                  series converges when these partial sums approach a finite
                  limit. When they do not, the series diverges.
                </p>

                <p>
                  Power series extend these ideas by representing functions as
                  infinite sums of powers. Taylor and Maclaurin series then use
                  derivatives to construct local polynomial approximations,
                  connecting infinite series directly to differentiation,
                  numerical methods, physics, engineering, and differential
                  equations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related topics */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Continue learning</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Related calculus topics
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Series connect naturally with limits, derivatives, integrals,
                and differential equations. Review the foundations or move into
                a related advanced topic.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                to="/learn/limits"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Infinity className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">Limits</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review the limit concepts that provide the foundation for
                  sequence and series convergence.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review limits
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/derivatives"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <TrendingUp className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Derivatives
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Understand derivatives and higher derivatives before studying
                  Taylor expansions.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review derivatives
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/differential-equations"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Sigma className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Differential Equations
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  See how series methods can be used to construct and analyze
                  solutions to differential equations.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Explore differential equations
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-slate-200 bg-[#17324d]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Sigma className="text-white" size={21} />

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                    Practice
                  </p>
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Explore series with a calculator.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Apply the ideas of partial sums, geometric series, and
                  convergence to numerical examples with the Series Calculator.
                </p>
              </div>

              <Link
                to="/calculators/series"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Open Series Calculator
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
