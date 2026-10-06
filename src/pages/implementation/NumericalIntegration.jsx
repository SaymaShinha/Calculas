import {
  AlertTriangle,
  AreaChart,
  CheckCircle2,
  Code2,
  Lightbulb,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const methods = [
  {
    number: "01",
    name: "Left Riemann Sum",
    formula: "I_n = h\\left[f(x_0)+f(x_1)+f(x_2)+\\cdots+f(x_{n-1})\\right]",
    order: "O(h)",
    description:
      "Approximates the integral by using the function value at the left endpoint of every subinterval.",
    bestFor:
      "Simple approximations, introductory numerical integration, and understanding Riemann sums.",
  },

  {
    number: "02",
    name: "Right Riemann Sum",
    formula: "I_n = h\\left[f(x_1)+f(x_2)+f(x_3)+\\cdots+f(x_n)\\right]",
    order: "O(h)",
    description:
      "Approximates the integral using the right endpoint of each subinterval.",
    bestFor:
      "Simple numerical estimates and comparison with left-endpoint approximations.",
  },

  {
    number: "03",
    name: "Midpoint Rule",
    formula: "M_n = h\\left[f(m_1)+f(m_2)+\\cdots+f(m_n)\\right]",
    order: "O(h^2)",
    description:
      "Uses the midpoint of each subinterval to approximate the function.",
    bestFor: "Smooth functions where a better approximation is desired.",
  },

  {
    number: "04",
    name: "Trapezoidal Rule",
    formula:
      "T_n = \\frac{h}{2}\\left[f(x_0)+2f(x_1)+2f(x_2)+\\cdots+2f(x_{n-1})+f(x_n)\\right]",
    order: "O(h^2)",
    description:
      "Approximates the curve using straight-line segments, creating a sequence of trapezoids.",
    bestFor: "Smooth functions and practical numerical integration.",
  },

  {
    number: "05",
    name: "Simpson's Rule",
    formula:
      "S_n = \\frac{h}{3}\\left[f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+\\cdots+2f(x_{n-2})+4f(x_{n-1})+f(x_n)\\right]",
    order: "O(h^4)",
    description: "Uses quadratic approximations over pairs of subintervals.",
    bestFor: "Smooth functions when higher numerical accuracy is required.",
  },
];

export default function NumericalIntegration() {
  return (
    <>
      <SEO
        title="Numerical Integration | Riemann Sums, Trapezoidal & Simpson's Rule"
        description="Learn numerical integration using Riemann sums, the trapezoidal rule, and Simpson's rule. Understand step size, convergence, truncation error, accuracy, and practical implementation."
        canonical="/implementation/numerical-integration"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Calculus"
        title="Numerical Integration"
        description="Learn how computers approximate definite integrals when an exact antiderivative is unavailable, inconvenient, or based on numerical data."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article>
              <div className="pml-eyebrow">The basic idea</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                Why use numerical integration?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                A definite integral measures accumulated quantity. In simple
                cases, calculus gives us an exact antiderivative that can be
                evaluated at the endpoints. But many practical functions do not
                have elementary antiderivatives.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical integration provides another approach. Instead of
                searching for an exact antiderivative, we evaluate the function
                at selected points and combine those values according to a
                numerical rule.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The result is an approximation rather than an exact symbolic
                expression. Its quality depends on the method, the number of
                subintervals, the behavior of the function, and numerical
                precision.
              </p>

              <div className="pml-card mt-7 p-6">
                <div className="pml-eyebrow">Definite integral</div>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"I=\\int_a^b f(x)\\,dx"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  Numerical integration replaces the continuous accumulation
                  represented by the integral with a finite weighted sum of
                  function values.
                </p>
              </div>
            </article>

            <aside className="pml-card h-fit p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <AreaChart size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                Computational viewpoint
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Replace continuous area with a finite collection of simple
                geometric approximations.
              </p>

              <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                <div className="font-mono text-sm text-[#17324D]">
                  interval [a,b]
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  subintervals
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  weighted sum
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Riemann sums */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="pml-eyebrow">Step 01 • Riemann sums</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Start with rectangles
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Divide the interval from <strong>a</strong> to{" "}
                <strong>b</strong> into <strong>n</strong> smaller pieces. If
                every piece has the same width, then:
              </p>

              <div className="pml-formula mt-5">
                <MathRenderer>{"h=\\frac{b-a}{n}"}</MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                The area of each rectangle is approximately its height
                multiplied by its width. Adding all of the rectangles produces a
                numerical estimate of the integral.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Basic approximation</div>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"\\int_a^b f(x)\\,dx\\approx\\sum_{i=1}^{n}f(x_i^*)h"}
                </MathRenderer>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm leading-7 text-[#687481]">
                  <strong className="text-[#34404C]">h</strong> is the width of
                  each subinterval.
                </p>

                <p className="text-sm leading-7 text-[#687481]">
                  <strong className="text-[#34404C]">xᵢ*</strong> is a chosen
                  sample point inside the subinterval.
                </p>

                <p className="text-sm leading-7 text-[#687481]">
                  More subintervals generally make the approximation finer and
                  improve the result for sufficiently well-behaved functions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Readable notation */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Understanding the notation</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              What does the summation formula mean?
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              The notation may look compact, but it represents a simple repeated
              calculation. For the left Riemann sum, we evaluate the function at
              the left endpoint of every subinterval and add the corresponding
              rectangle areas.
            </p>
          </div>

          <div className="pml-card p-7 sm:p-9">
            <div className="pml-formula">
              <MathRenderer>
                {
                  "\\boxed{\\int_a^b f(x)\\,dx\\approx h\\sum_{i=0}^{n-1}f(x_i)}"
                }
              </MathRenderer>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  a
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Lower limit of integration.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  b
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Upper limit of integration.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  n
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Number of subintervals.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  h
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Width of each subinterval.
                </p>

                <div className="pml-formula mt-3">
                  <MathRenderer>{"h=\\frac{b-a}{n}"}</MathRenderer>
                </div>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  xᵢ
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  The i-th partition point.
                </p>

                <div className="pml-formula mt-3">
                  <MathRenderer>{"x_i=a+ih"}</MathRenderer>
                </div>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  Σ
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Add the terms for every value of i in the specified range.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Numerical methods</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Common integration rules
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Different rules use different approximations to represent the
              function between sampled points.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {methods.map((method, index) => (
              <article key={method.name} className="pml-card p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-[#DEDEDB] bg-[#F8F7F4] px-3 py-1 text-xs font-medium text-[#687481]">
                    {method.order}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#17202A]">
                  {method.name}
                </h3>

                <div className="pml-formula mt-5 overflow-x-auto">
                  <MathRenderer>{method.formula}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  {method.description}
                </p>

                <div className="mt-5 border-t border-[#E9E9E6] pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Useful when
                  </div>

                  <p className="mt-1 text-sm leading-6 text-[#34404C]">
                    {method.bestFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trapezoidal rule */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="pml-eyebrow">Method 01 • Trapezoidal rule</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Replace rectangles with trapezoids
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Instead of assuming the function is constant across each
                interval, the trapezoidal rule connects neighboring points with
                a straight line. The region under that line forms a trapezoid.
              </p>

              <div className="pml-formula mt-6 overflow-x-auto">
                <MathRenderer>
                  {
                    "\\int_a^b f(x)\\,dx\\approx\\frac{h}{2}\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Why it works</div>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                For a smooth function, the straight-line approximation between
                neighboring points can follow the curve much more closely than a
                constant-height rectangle.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <div className="font-semibold text-[#17202A]">Simple</div>

                  <p className="mt-1 text-xs leading-6 text-[#687481]">
                    Easy to implement and understand.
                  </p>
                </div>

                <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <div className="font-semibold text-[#17202A]">General</div>

                  <p className="mt-1 text-xs leading-6 text-[#687481]">
                    Works well for many smooth functions.
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                <div className="pml-formula">
                  <MathRenderer>{"\\text{error}=O(h^2)"}</MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simpson */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 pml-card p-7">
              <div className="pml-eyebrow">Quadratic approximation</div>

              <div className="pml-formula mt-5 overflow-x-auto">
                <MathRenderer>
                  {
                    "\\int_a^b f(x)\\,dx\\approx\\frac{h}{3}\\left[f(x_0)+4\\sum_{\\substack{i=1\\\\i\\text{ odd}}}^{n-1}f(x_i)+2\\sum_{\\substack{i=2\\\\i\\text{ even}}}^{n-2}f(x_i)+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                Simpson's rule requires an even number of subintervals. The
                alternating weights 4 and 2 arise from integrating local
                quadratic approximations.
              </p>

              <div className="mt-6 rounded-lg border border-[#CFE8DA] bg-[#EEF9F3] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#18794E]">
                  <CheckCircle2 size={17} />
                  Higher-order approximation
                </div>

                <p className="mt-2 text-sm leading-6 text-[#34404C]">
                  For sufficiently smooth functions, Simpson's rule has a
                  fourth-order truncation error.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="pml-eyebrow">Method 02 • Simpson's rule</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Approximate the curve with parabolas
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Simpson's rule improves on the straight-line approximation by
                using quadratic polynomials across pairs of subintervals.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                This additional curvature allows the numerical approximation to
                follow many smooth functions more closely.
              </p>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Worked example</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Approximate an integral using the trapezoidal rule
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
              Consider the integral below and divide the interval into two equal
              subintervals.
            </p>

            <div className="pml-formula mt-5 max-w-xl">
              <MathRenderer>{"\\int_0^2x^2\\,dx"}</MathRenderer>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 1</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Find the step size
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>{"h=\\frac{2-0}{2}=1"}</MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 2</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Evaluate the points
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"f(0)=0,\\quad f(1)=1,\\quad f(2)=4"}
                </MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 3</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Apply the rule
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"T=\\frac{1}{2}\\left[0+2(1)+4\\right]=3"}
                </MathRenderer>
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-xl border border-[#CFE8DA] bg-[#EEF9F3] p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#18794E]"
              />

              <div>
                <div className="font-semibold text-[#17202A]">
                  Compare with the exact result
                </div>

                <p className="mt-2 text-sm leading-7 text-[#34404C]">
                  The exact integral is:
                </p>

                <div className="pml-formula mt-3">
                  <MathRenderer>
                    {
                      "\\int_0^2x^2\\,dx=\\left[\\frac{x^3}{3}\\right]_0^2=\\frac{8}{3}\\approx2.6667"
                    }
                  </MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-7 text-[#34404C]">
                  The two-panel trapezoidal approximation is <strong>3</strong>.
                  The difference illustrates numerical approximation error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Accuracy and convergence</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              More intervals usually improve the result
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              When a numerical method converges, increasing the number of
              subintervals generally causes the approximation to approach the
              exact integral. However, the rate at which the error decreases
              depends on the method and the smoothness of the function.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DEDEDB] bg-white">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Approximation</th>
                  <th>Typical error</th>
                  <th>Important condition</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Left Riemann sum</td>
                  <td>Rectangles</td>
                  <td>O(h)</td>
                  <td>Depends on endpoint/sample-point choice</td>
                </tr>

                <tr>
                  <td>Trapezoidal rule</td>
                  <td>Linear segments</td>
                  <td>O(h²)</td>
                  <td>Works well for sufficiently smooth functions</td>
                </tr>

                <tr>
                  <td>Simpson's rule</td>
                  <td>Quadratic segments</td>
                  <td>O(h⁴)</td>
                  <td>Requires an even number of subintervals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Error */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Error analysis</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Why can a numerical integral be wrong?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical integration replaces a continuous curve with a finite
                approximation. The gap between the approximation and the exact
                integral is numerical error.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Increasing the number of subintervals can reduce truncation
                error, but practical implementations must also consider
                floating-point arithmetic and the cost of evaluating the
                function many times.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={21}
                  className="mt-0.5 shrink-0 text-[#9A5B00]"
                />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    Important sources of error
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="font-semibold text-sm text-[#17324D]">
                        Truncation error
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from replacing the exact integral with a finite
                        approximation.
                      </p>
                    </div>

                    <div>
                      <div className="font-semibold text-sm text-[#17324D]">
                        Round-off error
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from finite-precision computer arithmetic.
                      </p>
                    </div>

                    <div>
                      <div className="font-semibold text-sm text-[#17324D]">
                        Function behavior
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Rapid changes, discontinuities, singularities, or sharp
                        features may require special treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Code2 size={22} />
              </div>

              <div className="pml-eyebrow mt-5">Implementation principle</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Turning integration into an algorithm
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                A numerical integration program needs to divide the interval,
                evaluate the function at the required points, apply the
                appropriate weights, and combine the results.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Conceptual workflow</div>

              <ol className="mt-5 space-y-4">
                {[
                  "Choose the integration interval [a,b].",
                  "Select the number of subintervals n.",
                  "Calculate the step size h.",
                  "Evaluate f(x) at the required sample points.",
                  "Apply the method's weights and sum the results.",
                  "Check convergence or compare against a known result.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 text-[#34404C]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Symbolic vs numerical */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">A useful distinction</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Numerical versus symbolic integration
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DEDEDB] bg-white">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Symbolic integration</th>
                  <th>Numerical integration</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Goal</td>
                  <td>Find an exact antiderivative or exact value</td>
                  <td>Estimate a definite integral</td>
                </tr>

                <tr>
                  <td>Input</td>
                  <td>Usually a symbolic expression</td>
                  <td>Function evaluations or numerical data</td>
                </tr>

                <tr>
                  <td>Output</td>
                  <td>Exact expression when available</td>
                  <td>Approximate numerical value</td>
                </tr>

                <tr>
                  <td>Strength</td>
                  <td>Preserves mathematical structure</td>
                  <td>
                    Handles many functions without elementary antiderivatives
                  </td>
                </tr>

                <tr>
                  <td>Main concern</td>
                  <td>Finding a closed-form expression</td>
                  <td>Accuracy, convergence, and computational cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical considerations */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Practical considerations</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Before trusting a numerical integral
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Is the function smooth?
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Sharp changes or discontinuities can make basic rules less
                  effective and may require smaller intervals or specialized
                  methods.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  How many evaluations are needed?
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Higher accuracy often requires more function evaluations,
                  which matters when each evaluation is computationally
                  expensive.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Does the method converge?
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Compare results with increasing numbers of subintervals to see
                  whether the approximation stabilizes.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Can the result be validated?
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  When possible, compare the numerical result with an exact
                  solution, another method, or a known reference value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Continue learning</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Related resources
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              to="/learn/integrals"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <Sigma size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Learn Integrals
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Understand definite integrals, accumulation, Riemann sums, and
                the Fundamental Theorem of Calculus.
              </p>
            </Link>

            <Link
              to="/implementation/numerical-derivative"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <AreaChart size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Numerical Derivatives
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Learn how finite differences approximate derivatives from nearby
                function values.
              </p>
            </Link>

            <Link
              to="/implementation/numerical-methods"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <Code2 size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Numerical Methods
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Explore root finding, iteration, convergence, and broader
                computational techniques.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-[#DEDEDB] pt-12">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-semibold">From area to algorithm</h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Numerical integration connects the geometric meaning of an
              integral with practical computation. Continue with numerical
              methods to see how similar ideas are used for equations and
              iterative algorithms.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/implementation/numerical-methods"
                className="inline-flex items-center rounded-md bg-white/30 px-4 py-2.5 text-sm font-semibold text-[#17324D] transition hover:bg-white/30"
              >
                Numerical methods
              </Link>

              <Link
                to="/calculators/integral"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Integral calculator
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
