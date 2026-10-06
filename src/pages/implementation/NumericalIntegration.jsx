import {
  AlertTriangle,
  AreaChart,
  CheckCircle2,
  Code2,
  Database,
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
    formula:
      "L_n=h\\sum_{i=0}^{n-1}f(x_i)",
    order: "O(h)",
    description:
      "Uses the left endpoint of each subinterval as the representative function value.",
    bestFor:
      "Learning the basic idea of Riemann sums and obtaining simple numerical estimates.",
  },
  {
    number: "02",
    name: "Right Riemann Sum",
    formula:
      "R_n=h\\sum_{i=1}^{n}f(x_i)",
    order: "O(h)",
    description:
      "Uses the right endpoint of each subinterval to approximate the accumulated area.",
    bestFor:
      "Simple approximations and comparing endpoint-based estimates.",
  },
  {
    number: "03",
    name: "Midpoint Rule",
    formula:
      "M_n=h\\sum_{i=1}^{n}f\\left(\\frac{x_{i-1}+x_i}{2}\\right)",
    order: "O(h^2)",
    description:
      "Evaluates the function at the midpoint of every subinterval instead of at an endpoint.",
    bestFor:
      "Smooth functions where a relatively simple rule with second-order accuracy is useful.",
  },
  {
    number: "04",
    name: "Trapezoidal Rule",
    formula:
      "T_n=\\frac{h}{2}\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right]",
    order: "O(h^2)",
    description:
      "Connects neighboring function values with straight-line segments and integrates those linear approximations.",
    bestFor:
      "General-purpose numerical integration and situations where function values are already available on a grid.",
  },
  {
    number: "05",
    name: "Simpson's Rule",
    formula:
      "S_n=\\frac{h}{3}\\left[f(x_0)+4\\sum_{i\\,\\mathrm{odd}}f(x_i)+2\\sum_{i\\,\\mathrm{even}}f(x_i)+f(x_n)\\right]",
    order: "O(h^4)",
    description:
      "Uses quadratic interpolation across pairs of subintervals to capture curvature more accurately.",
    bestFor:
      "Smooth functions when higher accuracy is needed without using an extremely fine grid.",
  },
];

const comparisonRows = [
  {
    method: "Left Riemann",
    approximation: "Rectangles",
    order: "O(h)",
    condition: "No special parity requirement",
  },
  {
    method: "Right Riemann",
    approximation: "Rectangles",
    order: "O(h)",
    condition: "No special parity requirement",
  },
  {
    method: "Midpoint",
    approximation: "Midpoint rectangles",
    order: "O(h²)",
    condition: "Requires midpoint evaluations",
  },
  {
    method: "Trapezoidal",
    approximation: "Straight-line segments",
    order: "O(h²)",
    condition: "Works naturally on an equally spaced grid",
  },
  {
    method: "Simpson",
    approximation: "Quadratic interpolation",
    order: "O(h⁴)",
    condition: "Requires an even number of subintervals",
  },
];

export default function NumericalIntegration() {
  return (
    <>
      <SEO
        title="Numerical Integration | Riemann Sums, Trapezoidal & Simpson's Rule"
        description="Learn numerical integration using Riemann sums, the midpoint and trapezoidal rules, and Simpson's rule. Understand step size, convergence, truncation error, numerical data, accuracy, and implementation."
        canonical="/implementation/numerical-integration"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Calculus"
        title="Numerical Integration"
        description="Learn how computers approximate definite integrals when an exact antiderivative is unavailable, inconvenient, or the available information consists of numerical data."
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
                A definite integral represents accumulated quantity over an
                interval. In elementary examples, we can often find an
                antiderivative and evaluate it exactly. But many useful
                functions do not have elementary antiderivatives, and some
                problems do not provide a symbolic function at all.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical integration provides a computational alternative.
                Instead of finding an exact antiderivative, we evaluate the
                function at selected points and combine those values using a
                carefully designed numerical rule.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The result is normally an approximation. Its accuracy depends on
                the integration rule, the spacing between sample points, the
                smoothness of the function, and the numerical precision of the
                computation.
              </p>

              <div className="pml-card mt-7 p-6">
                <div className="pml-eyebrow">Definite integral</div>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"I=\\int_a^b f(x)\\,dx"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  Numerical integration replaces continuous accumulation with a
                  finite weighted combination of function values.
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
                Replace a continuous curve with a collection of simpler local
                approximations, then add their contributions.
              </p>

              <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                <div className="font-mono text-sm text-[#17324D]">
                  interval [a,b]
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  sample points
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  weighted sum
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* When numerical integration is useful */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Where it is useful</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Three common reasons to integrate numerically
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              Numerical integration is not simply a fallback for difficult
              calculus exercises. It is an important computational technique
              used when the mathematical or physical problem is naturally
              numerical.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Sigma size={20} />
              </div>

              <h3 className="mt-5 font-semibold text-[#17202A]">
                No elementary antiderivative
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Some integrals have exact definitions but do not simplify to
                elementary functions. Numerical rules can still estimate their
                values.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Database size={20} />
              </div>

              <h3 className="mt-5 font-semibold text-[#17202A]">
                Numerical data
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Experiments, sensors, measurements, and simulations often
                produce sampled values rather than a symbolic formula.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Code2 size={20} />
              </div>

              <h3 className="mt-5 font-semibold text-[#17202A]">
                Repeated computation
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Numerical rules can be implemented efficiently and repeatedly
                inside scientific and engineering software.
              </p>
            </article>
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
                <strong>b</strong> into <strong>n</strong> equal subintervals.
                Their common width is:
              </p>

              <div className="pml-formula mt-5">
                <MathRenderer>{"h=\\frac{b-a}{n}"}</MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                Each subinterval contributes an approximate area. Depending on
                the rule, the function may be sampled at the left endpoint,
                right endpoint, or midpoint.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                As the subintervals become narrower, the local approximations
                can more closely follow the original curve.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">General approximation</div>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"\\int_a^b f(x)\\,dx\\approx h\\sum_{i=1}^{n}f(x_i^*)"}
                </MathRenderer>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm leading-7 text-[#687481]">
                  <strong className="text-[#34404C]">h</strong> is the width of
                  each subinterval.
                </p>

                <p className="text-sm leading-7 text-[#687481]">
                  <strong className="text-[#34404C]">xᵢ*</strong> is a selected
                  sample point in the i-th subinterval.
                </p>

                <p className="text-sm leading-7 text-[#687481]">
                  The choice of sample point determines which Riemann-sum rule
                  is being used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partition notation */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Understanding the notation</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Turning an interval into a grid
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              Once the interval is divided into equal pieces, every grid point
              can be generated from the starting point and the step size.
            </p>
          </div>

          <div className="pml-card p-7 sm:p-9">
            <div className="pml-formula">
              <MathRenderer>
                {"x_i=a+ih,\\qquad h=\\frac{b-a}{n},\\qquad i=0,1,\\ldots,n"}
              </MathRenderer>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  a
                </div>
                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Lower endpoint of the integration interval.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  b
                </div>
                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Upper endpoint of the integration interval.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  n
                </div>
                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Number of equal subintervals.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  h
                </div>
                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Width of every subinterval.
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
                  The i-th point of the partition.
                </p>

                <div className="pml-formula mt-3">
                  <MathRenderer>{"x_i=a+ih"}</MathRenderer>
                </div>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <div className="font-mono text-lg font-semibold text-[#17324D]">
                  n → ∞
                </div>
                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  In the theoretical limit, increasingly fine sums lead to the
                  definite integral under appropriate conditions.
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
              Numerical integration rules differ mainly in how they approximate
              the function between sampled points.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {methods.map((method) => (
              <article key={method.name} className="pml-card p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    {method.number}
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

        {/* Trapezoidal */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="pml-eyebrow">Method 04 • Trapezoidal rule</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Replace rectangles with trapezoids
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The trapezoidal rule assumes that the function between two
                neighboring sample points can be approximated by a straight
                line. The area under that line forms a trapezoid.
              </p>

              <div className="pml-formula mt-6 overflow-x-auto">
                <MathRenderer>
                  {
                    "T_n=\\frac{h}{2}\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                Interior points receive weight 2 because they are shared by two
                neighboring trapezoids. The endpoints occur in only one
                trapezoid and therefore receive weight 1.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Error behavior</div>

              <div className="pml-formula mt-5">
                <MathRenderer>{"T_n-I=O(h^2)"}</MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                For sufficiently smooth functions, the trapezoidal rule has
                second-order convergence. Roughly speaking, reducing the step
                size by a factor of two reduces the leading discretization error
                by about a factor of four.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <div className="font-semibold text-[#17202A]">Simple</div>
                  <p className="mt-1 text-xs leading-6 text-[#687481]">
                    Easy to implement and works directly with sampled data.
                  </p>
                </div>

                <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <div className="font-semibold text-[#17202A]">
                    Grid-friendly
                  </div>
                  <p className="mt-1 text-xs leading-6 text-[#687481]">
                    Particularly convenient when measurements are equally
                    spaced.
                  </p>
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
                    "S_n=\\frac{h}{3}\\left[f(x_0)+4\\sum_{i\\,\\mathrm{odd}}f(x_i)+2\\sum_{i\\,\\mathrm{even}}f(x_i)+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                Simpson's rule combines three-point quadratic approximations.
                Because each quadratic spans two subintervals, the total number
                of subintervals must be even.
              </p>

              <div className="mt-6 rounded-lg border border-[#CFE8DA] bg-[#EEF9F3] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#18794E]">
                  <CheckCircle2 size={17} />
                  Fourth-order convergence
                </div>

                <p className="mt-2 text-sm leading-6 text-[#34404C]">
                  For sufficiently smooth functions, the leading discretization
                  error behaves like O(h⁴).
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="pml-eyebrow">Method 05 • Simpson's rule</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Approximate the curve with parabolas
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                A straight line can describe a curve reasonably well over a
                small interval, but a quadratic polynomial can capture curvature
                more effectively. Simpson's rule uses this idea across pairs of
                subintervals.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                This explains why Simpson's rule can achieve much smaller
                discretization error than first-order or second-order methods
                when the function is sufficiently smooth.
              </p>

              <div className="mt-6 border-l-2 border-[#2F5BEA] pl-5">
                <p className="text-sm leading-7 text-[#687481]">
                  Higher order does not automatically mean better for every
                  problem. Discontinuities, singularities, noisy data, and
                  numerical precision can change which method is appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Worked example</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Compare numerical rules on the same integral
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
              Consider the integral below on the interval from 0 to 2. Using the
              same function makes it easier to see how different numerical
              approximations behave.
            </p>

            <div className="pml-formula mt-5 max-w-xl">
              <MathRenderer>{"I=\\int_0^2x^2\\,dx"}</MathRenderer>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 1</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Choose the partition
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>{"n=2,\\qquad h=\\frac{2-0}{2}=1"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                The grid points are 0, 1, and 2.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 2</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Evaluate the function
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"f(0)=0,\\quad f(1)=1,\\quad f(2)=4"}
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                These values are enough for several basic rules.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 3</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Trapezoidal estimate
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>{"T=\\frac{1}{2}[0+2(1)+4]=3"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                With only two panels, the straight-line approximation is
                noticeably above the curved graph.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Step 4</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Exact comparison
              </h3>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {
                    "I=\\left[\\frac{x^3}{3}\\right]_0^2=\\frac{8}{3}\\approx2.6667"
                  }
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                The numerical estimate can now be compared with the exact value.
              </p>
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
                  What does the comparison teach us?
                </div>

                <p className="mt-2 text-sm leading-7 text-[#34404C]">
                  The exact value is approximately 2.6667, while the two-panel
                  trapezoidal result is 3. The absolute error is approximately:
                </p>

                <div className="pml-formula mt-3">
                  <MathRenderer>
                    {"|3-\\frac{8}{3}|=\\frac{1}{3}\\approx0.3333"}
                  </MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-7 text-[#34404C]">
                  Increasing the number of panels would normally reduce the
                  discretization error for this smooth function.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Error order */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Accuracy and convergence</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                What does O(hᵖ) mean?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The notation O(hᵖ) describes how the leading discretization
                error changes as the step size h becomes smaller. The exponent p
                is called the order of the method.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"|E(h)|\\approx Ch^p"}</MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                Here, <strong>C</strong> depends on the function and interval,
                while <strong>p</strong> describes the rate at which the leading
                error decreases.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                For example, if a second-order method reduces h by a factor of
                two, its leading error is expected to decrease by roughly a
                factor of four when the asymptotic error model applies.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Convergence experiment</div>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                A practical way to test convergence is to calculate the integral
                using increasingly fine grids.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <span className="font-mono text-sm text-[#17324D]">
                    n = 10
                  </span>
                  <span className="text-sm text-[#687481]">
                    coarse approximation
                  </span>
                </div>

                <div className="flex items-center justify-between border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <span className="font-mono text-sm text-[#17324D]">
                    n = 20
                  </span>
                  <span className="text-sm text-[#687481]">
                    finer approximation
                  </span>
                </div>

                <div className="flex items-center justify-between border border-[#E9E9E6] bg-[#F8F7F4] p-4">
                  <span className="font-mono text-sm text-[#17324D]">
                    n = 40
                  </span>
                  <span className="text-sm text-[#687481]">
                    check stabilization
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm leading-7 text-[#687481]">
                  If successive results become closer together, that provides
                  numerical evidence of convergence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Method comparison */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Method comparison</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Choosing a numerical integration rule
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              There is no single rule that is best for every numerical problem.
              The right choice depends on the smoothness of the function, the
              available data, the required accuracy, and the cost of evaluating
              the function.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DEDEDB] bg-white">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Approximation</th>
                  <th>Typical order</th>
                  <th>Important consideration</th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.method}>
                    <td>{row.method}</td>
                    <td>{row.approximation}</td>
                    <td>{row.order}</td>
                    <td>{row.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Numerical data */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Database size={22} />
              </div>

              <div className="pml-eyebrow mt-5">
                Integration from measured data
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                What if there is no formula for f(x)?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                In experimental science and engineering, the available
                information may be a table of measurements rather than a
                symbolic function.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                If the measurements are equally spaced, the trapezoidal rule is
                particularly convenient because it can operate directly on the
                sampled values.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Example data structure</div>

              <div className="mt-5 overflow-x-auto">
                <table className="pml-table">
                  <thead>
                    <tr>
                      <th>x</th>
                      <th>f(x)</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>0.00</td>
                    </tr>
                    <tr>
                      <td>0.5</td>
                      <td>0.25</td>
                    </tr>
                    <tr>
                      <td>1.0</td>
                      <td>1.00</td>
                    </tr>
                    <tr>
                      <td>1.5</td>
                      <td>2.25</td>
                    </tr>
                    <tr>
                      <td>2.0</td>
                      <td>4.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {
                    "T\\approx\\frac{h}{2}\\left[f(x_0)+2f(x_1)+\\cdots+2f(x_{n-1})+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                No symbolic antiderivative is required. The quality of the
                result depends on the measurement spacing, measurement noise,
                and behavior of the underlying quantity.
              </p>
            </div>
          </div>
        </section>

        {/* Error sources */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Error analysis</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Why can a numerical integral be inaccurate?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                A numerical method replaces a continuous mathematical object
                with a finite computation. Several different sources of error
                can therefore affect the final result.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Increasing the number of subintervals usually reduces
                discretization error for a convergent method, but making the
                grid indefinitely fine is not always the best computational
                strategy.
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

                  <div className="mt-5 space-y-5">
                    <div>
                      <div className="text-sm font-semibold text-[#17324D]">
                        Truncation error
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from replacing the exact integral with a finite
                        approximation.
                      </p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#17324D]">
                        Round-off error
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from representing numbers with finite precision in
                        a computer.
                      </p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#17324D]">
                        Data error
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Measured values may contain noise or uncertainty that
                        numerical integration cannot remove automatically.
                      </p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#17324D]">
                        Function behavior
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Discontinuities, singularities, sharp peaks, or rapid
                        oscillations may require smaller intervals or a more
                        specialized approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step size */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Choosing the step size</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Smaller is useful, but not infinitely better
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">Coarse grid</h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  A large h means fewer function evaluations but usually more
                  discretization error.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">Fine grid</h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  A smaller h generally improves the approximation when the
                  method is operating in its expected convergence regime.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Extremely fine grid
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Very many evaluations increase computational cost and can make
                  floating-point effects more relevant.
                </p>
              </div>
            </div>

            <div className="mt-7 border-t border-[#E9E9E6] pt-6">
              <p className="text-sm leading-7 text-[#687481]">
                A practical numerical program therefore balances accuracy,
                stability, evaluation cost, and the characteristics of the
                problem instead of simply choosing the smallest possible step.
              </p>
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
                A numerical integration program follows the mathematical rule
                almost directly. It creates a grid, evaluates the function,
                applies weights, and accumulates the result.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The same structure can be adapted to symbolic functions,
                experimental data, simulations, and scientific computing
                workflows.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Conceptual algorithm</div>

              <ol className="mt-5 space-y-4">
                {[
                  "Choose the integration interval [a,b].",
                  "Select the numerical method.",
                  "Choose the number of subintervals n.",
                  "Compute the step size h=(b-a)/n.",
                  "Generate the required sample points.",
                  "Evaluate f(x) at those points.",
                  "Apply the method-specific weights.",
                  "Add the weighted values and multiply by the required factor.",
                  "Repeat with a finer grid when convergence needs to be checked.",
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

        {/* Complexity */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Computational cost</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Accuracy also has a computational price
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              A numerical method needs function evaluations. If evaluating the
              function is expensive—for example, because it involves a
              simulation—then the number of required evaluations can become an
              important part of the algorithm design.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <div className="pml-eyebrow">Low cost</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Simple rules
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Rectangle and trapezoidal methods are straightforward and often
                work well when many evaluations are inexpensive.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Higher accuracy</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Higher-order rules
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Simpson's rule can reach high accuracy efficiently when its
                smoothness assumptions are appropriate.
              </p>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">Adaptive methods</div>

              <h3 className="mt-3 font-semibold text-[#17202A]">
                Spend work where needed
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Adaptive integration can refine regions where the function is
                difficult while avoiding unnecessary evaluations in easy
                regions.
              </p>
            </article>
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
                  <td>A function, numerical samples, or measured data</td>
                </tr>

                <tr>
                  <td>Output</td>
                  <td>An exact expression when available</td>
                  <td>An approximate numerical value</td>
                </tr>

                <tr>
                  <td>Strength</td>
                  <td>Preserves mathematical structure</td>
                  <td>
                    Works even when elementary antiderivatives are unavailable
                  </td>
                </tr>

                <tr>
                  <td>Main concern</td>
                  <td>Finding a useful closed-form representation</td>
                  <td>
                    Accuracy, convergence, stability, and computational cost
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical checklist */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Practical checklist</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Before trusting a numerical integral
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Check the domain
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Make sure the function is defined where the numerical rule is
                  evaluating it. Singularities can invalidate a straightforward
                  application of a basic rule.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Check smoothness
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Sharp changes, discontinuities, and rapid oscillations can
                  require a finer grid or a specialized method.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Test convergence
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Repeat the calculation with more subintervals and check
                  whether the reported value stabilizes.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Validate the result
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  When possible, compare against an exact solution, an
                  independent numerical method, or a trusted reference value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important idea */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <div className="pml-eyebrow">Important idea</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                Numerical integration is approximation with structure
              </h2>
            </div>

            <div className="pml-card p-7">
              <p className="text-base leading-8 text-[#34404C]">
                A numerical integral is not simply a guess. Each method encodes
                a mathematical approximation—rectangles, straight lines, or
                quadratic curves—and its error behavior can be analyzed
                systematically.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {
                    "\\text{integral}\\;\\longrightarrow\\;\\text{local approximation}\\;\\longrightarrow\\;\\text{weighted sum}"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                Understanding that chain makes numerical integration much easier
                to implement, analyze, and debug.
              </p>
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
            <h2 className="text-2xl font-semibold">
              From integral to algorithm
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Numerical integration connects the geometric meaning of an
              integral with practical computation. Continue with numerical
              methods to see how approximation, iteration, and convergence are
              used throughout computational mathematics.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/implementation/numerical-methods"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
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
