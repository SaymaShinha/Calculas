import {
  AlertTriangle,
  CheckCircle2,
  Code2,
  GitBranch,
  Lightbulb,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const methods = [
  {
    name: "Forward difference",
    formula: "f'(x) \\approx \\frac{f(x+h)-f(x)}{h}",
    order: "O(h)",
    bestFor: "Points near the beginning of a data set",
    description:
      "Uses the current point and a point to its right. It is simple and useful when values before x are unavailable.",
  },
  {
    name: "Backward difference",
    formula: "f'(x) \\approx \\frac{f(x)-f(x-h)}{h}",
    order: "O(h)",
    bestFor: "Points near the end of a data set",
    description:
      "Uses the current point and a point to its left. It is particularly useful when future data points are unavailable.",
  },
  {
    name: "Central difference",
    formula: "f'(x) \\approx \\frac{f(x+h)-f(x-h)}{2h}",
    order: "O(h^2)",
    bestFor: "Interior points with data on both sides",
    description:
      "Samples the function on both sides of x and generally provides better accuracy for smooth functions.",
  },
];

export default function NumericalDerivative() {
  return (
    <>
      <SEO
        title="Numerical Derivatives | Forward, Backward & Central Difference"
        description="Learn how numerical derivatives are approximated using forward, backward, and central finite differences. Understand step size, truncation error, round-off error, accuracy, and practical implementation."
        canonical="/implementation/numerical-derivative"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Calculus"
        title="Numerical Derivatives"
        description="Learn how a computer approximates derivatives when an exact symbolic derivative is unavailable, inconvenient, or based on numerical data."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article>
              <div className="pml-eyebrow">The basic idea</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                Why approximate derivatives?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                In calculus, the derivative describes the instantaneous rate of
                change of a function. When we know an exact formula, symbolic
                differentiation can often give us the derivative directly.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Computational problems are often different. A computer may
                receive measurements such as temperature, position, pressure, or
                sensor readings rather than a convenient symbolic function. In
                these situations, the derivative can be estimated from nearby
                values.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Finite-difference methods replace the limiting process in the
                derivative definition with a small but finite step size h.
              </p>

              <div className="pml-card mt-7 p-6">
                <div className="pml-eyebrow">From the definition</div>

                <div className="pml-formula mt-4">
                  <MathRenderer>
                    {"f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  A numerical method chooses a finite h and uses nearby function
                  values to estimate the derivative.
                </p>
              </div>
            </article>

            <aside className="pml-card h-fit p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <GitBranch size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                Core idea
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Replace an infinitesimal change with a small measurable change.
              </p>

              <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                <div className="font-mono text-sm text-[#17324D]">small h</div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  nearby values
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  derivative estimate
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Finite difference methods */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Finite differences</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Three common derivative approximations
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              The appropriate formula depends on which neighboring values are
              available and how much accuracy is required.
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

                <div className="pml-formula mt-5">
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

        {/* Worked example */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Estimate the derivative of x²
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Consider the function
                <span className="mx-2 font-mono text-[#17324D]">f(x) = x²</span>
                and estimate its derivative at x = 3 using a central difference
                with h = 0.01.
              </p>

              <div className="mt-6">
                <div className="pml-eyebrow">Step 1 — choose the method</div>

                <div className="pml-formula mt-3">
                  <MathRenderer>
                    {"f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}"}
                  </MathRenderer>
                </div>
              </div>

              <div className="mt-7">
                <div className="pml-eyebrow">
                  Step 2 — substitute the values
                </div>

                <div className="pml-formula mt-3">
                  <MathRenderer>
                    {"f'(3)\\approx\\frac{f(3.01)-f(2.99)}{0.02}"}
                  </MathRenderer>
                </div>
              </div>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Step 3 — evaluate</div>

              <div className="mt-5 space-y-4">
                <div className="border-b border-[#E9E9E6] pb-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Function values
                  </div>

                  <div className="mt-3">
                    <MathRenderer>{"f(3.01)=3.01^2=9.0601"}</MathRenderer>
                  </div>

                  <div className="mt-3">
                    <MathRenderer>{"f(2.99)=2.99^2=8.9401"}</MathRenderer>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Approximation
                  </div>

                  <div className="mt-3">
                    <MathRenderer>
                      {"f'(3)\\approx\\frac{9.0601-8.9401}{0.02}=6"}
                    </MathRenderer>
                  </div>
                </div>

                <div className="rounded-lg border border-[#CFE8DA] bg-[#EEF9F3] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#18794E]">
                    <CheckCircle2 size={17} />
                    Exact derivative
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#34404C]">
                    Since
                    <span className="mx-1 font-mono">f′(x) = 2x</span>, the
                    exact value at x = 3 is also 6.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy comparison */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Accuracy</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Why central differences are often more accurate
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              Forward and backward differences have first-order truncation
              error. Central differences cancel more of the leading error term
              and have second-order truncation error for sufficiently smooth
              functions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DEDEDB] bg-white">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Approximation</th>
                  <th>Typical truncation error</th>
                  <th>Data requirement</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Forward</td>
                  <td>Uses x and x + h</td>
                  <td>O(h)</td>
                  <td>Point to the right</td>
                </tr>

                <tr>
                  <td>Backward</td>
                  <td>Uses x and x − h</td>
                  <td>O(h)</td>
                  <td>Point to the left</td>
                </tr>

                <tr>
                  <td>Central</td>
                  <td>Uses x − h and x + h</td>
                  <td>O(h²)</td>
                  <td>Points on both sides</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Step size */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
            <div>
              <div className="pml-eyebrow">Step size</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Smaller h is not always better
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                It is tempting to assume that choosing an extremely small h will
                always produce a more accurate derivative. In finite precision
                arithmetic, that assumption can fail.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                As h becomes smaller, the subtraction
                <span className="mx-1 font-mono text-[#17324D]">
                  f(x+h) − f(x)
                </span>
                can involve two numbers that are very close together. Rounding
                errors can then become significant.
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
                    Two competing sources of error
                  </h3>

                  <div className="mt-5 space-y-5">
                    <div>
                      <div className="font-semibold text-sm text-[#17324D]">
                        Truncation error
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from replacing the exact limiting process with a
                        finite approximation.
                      </p>
                    </div>

                    <div>
                      <div className="font-semibold text-sm text-[#17324D]">
                        Round-off error
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from the finite precision of computer arithmetic.
                      </p>
                    </div>

                    <div className="border-t border-[#E9E9E6] pt-5">
                      <p className="text-sm font-medium leading-6 text-[#34404C]">
                        Good numerical practice balances these effects instead
                        of blindly minimizing h.
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
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Code2 size={22} />
              </div>

              <div className="pml-eyebrow mt-5">Implementation principle</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                A numerical derivative is an algorithm
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Implementing a finite difference requires more than copying the
                mathematical formula. The program must evaluate the function,
                choose a step size, handle invalid inputs, and represent the
                result using finite-precision numbers.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Conceptual algorithm</div>

              <ol className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    01
                  </span>

                  <span className="text-sm leading-6 text-[#34404C]">
                    Choose the evaluation point x.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    02
                  </span>

                  <span className="text-sm leading-6 text-[#34404C]">
                    Choose an appropriate step size h.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    03
                  </span>

                  <span className="text-sm leading-6 text-[#34404C]">
                    Evaluate the required neighboring function values.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    04
                  </span>

                  <span className="text-sm leading-6 text-[#34404C]">
                    Apply the chosen finite-difference formula.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    05
                  </span>

                  <span className="text-sm leading-6 text-[#34404C]">
                    Check whether the result is numerically reasonable.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* When to use */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Practical selection guide</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Which method should you use?
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Use forward difference
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                when values to the right of the point are available but values
                to the left are not.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Use backward difference
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                when the point is near the end of your available data and future
                values cannot be used.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Use central difference
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                when values exist on both sides of the point and improved
                accuracy is important.
              </p>
            </article>
          </div>
        </section>

        {/* Important notes */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Important notes</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Numerical results require interpretation
                </h2>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Smooth functions
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  The standard accuracy results for finite differences assume
                  sufficient smoothness of the underlying function.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">Noisy data</h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Differentiation can amplify measurement noise, so real-world
                  data may require smoothing or specialized numerical methods.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Boundary points
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  At a boundary, one-sided methods may be necessary because
                  values may exist on only one side.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">Validation</h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Whenever possible, compare a numerical derivative with an
                  exact derivative or an independent approximation.
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
              to="/learn/derivatives"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <GitBranch size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Learn Derivatives
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Understand the mathematical derivative before studying its
                numerical approximation.
              </p>
            </Link>

            <Link
              to="/implementation/numerical-integration"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <Sigma size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Numerical Integration
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Learn how definite integrals can be approximated
                computationally.
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
                Explore root finding, iteration, convergence, and computational
                algorithms.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-[#DEDEDB] pt-12">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-semibold">
              From derivative theory to computation
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Once you understand finite differences, the next step is to
              explore how numerical integration and iterative algorithms use
              similar ideas to solve practical mathematical problems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/implementation/numerical-integration"
                className="inline-flex items-center rounded-md bg-white/30 px-4 py-2.5 text-sm font-semibold text-[#17324D] transition hover:bg-white/30"
              >
                Numerical integration
              </Link>

              <Link
                to="/implementation/numerical-methods"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Numerical methods
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
