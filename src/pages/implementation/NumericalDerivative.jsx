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
    formula: "f'(x)\\approx\\frac{f(x+h)-f(x)}{h}",
    order: "O(h)",
    bestFor: "Points near the beginning of a data set",
    description:
      "Uses the current point and a point to its right. It is useful when values before x are unavailable.",
  },
  {
    name: "Backward difference",
    formula: "f'(x)\\approx\\frac{f(x)-f(x-h)}{h}",
    order: "O(h)",
    bestFor: "Points near the end of a data set",
    description:
      "Uses the current point and a point to its left. It is useful when future data points are unavailable.",
  },
  {
    name: "Central difference",
    formula: "f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}",
    order: "O(h^2)",
    bestFor: "Interior points with data on both sides",
    description:
      "Uses values on both sides of x and generally provides a more accurate approximation for sufficiently smooth functions.",
  },
];

const methodComparison = [
  {
    method: "Forward",
    formula: "f'(x)\\approx\\frac{f(x+h)-f(x)}{h}",
    order: "O(h)",
    points: "x, x+h",
  },
  {
    method: "Backward",
    formula: "f'(x)\\approx\\frac{f(x)-f(x-h)}{h}",
    order: "O(h)",
    points: "x-h, x",
  },
  {
    method: "Central",
    formula: "f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}",
    order: "O(h^2)",
    points: "x-h, x+h",
  },
];

const practicalChecks = [
  "Is the function sufficiently smooth near the point?",
  "Are values available on both sides of the point?",
  "Is the chosen step size appropriate?",
  "Could measurement noise affect the derivative?",
  "Does the result agree with an exact or independent calculation?",
];

export default function NumericalDerivative() {
  return (
    <>
      <SEO
        title="Numerical Derivatives | Forward, Backward & Central Difference"
        description="Learn how numerical derivatives are approximated using forward, backward, and central finite differences. Understand Taylor-series error, step size, truncation error, round-off error, accuracy, and practical implementation."
        canonical="/implementation/numerical-derivative"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Calculus"
        title="Numerical Derivatives"
        description="Learn how a computer approximates derivatives when an exact symbolic derivative is unavailable, inconvenient, or based on numerical data."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* ---------------------------------------------------------------- */}
        {/* Introduction                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article>
              <div className="pml-eyebrow">The basic idea</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                Why approximate derivatives?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                In calculus, the derivative describes the instantaneous rate of
                change of a function. When an exact formula is available,
                symbolic differentiation can often produce the derivative
                directly.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Computational problems are often different. A computer may
                receive measurements such as position, temperature, pressure,
                velocity, or sensor readings rather than a convenient symbolic
                function. In these situations, derivatives can be estimated from
                nearby values.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Finite-difference methods replace the limiting process in the
                derivative definition with a small but finite step size,
                allowing the calculation to be performed using ordinary
                numerical operations.
              </p>

              <div className="pml-card mt-7 p-6">
                <div className="pml-eyebrow">From the definition</div>

                <div className="pml-formula mt-4">
                  <MathRenderer>
                    {"f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The derivative is defined by a limit. A numerical method
                  replaces the ideal limiting process with a finite value of h
                  and uses nearby function values to estimate the result.
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
                <div className="font-mono text-sm text-[#17324D]">choose h</div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  evaluate nearby points
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  apply difference formula
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  derivative estimate
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* What finite differences mean                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="pml-card p-6">
              <div className="pml-eyebrow">01</div>

              <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                Difference in function values
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                A finite difference measures how much the function changes
                between nearby points.
              </p>

              <div className="mt-4 pml-formula">
                <MathRenderer>{"\\Delta f=f(x+h)-f(x)"}</MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">02</div>

              <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                Difference in the input
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                The corresponding change in the independent variable is the step
                size h.
              </p>

              <div className="mt-4 pml-formula">
                <MathRenderer>{"\\Delta x=h"}</MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <div className="pml-eyebrow">03</div>

              <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                Approximate rate of change
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Dividing the change in the function by the change in x produces
                an average rate of change that approaches the derivative as the
                step becomes smaller under suitable conditions.
              </p>

              <div className="mt-4 pml-formula">
                <MathRenderer>{"\\frac{\\Delta f}{\\Delta x}"}</MathRenderer>
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Methods                                                           */}
        {/* ---------------------------------------------------------------- */}

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

        {/* ---------------------------------------------------------------- */}
        {/* Method comparison                                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Comparison</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              How the finite-difference formulas differ
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              The main difference is where the method samples the function.
              Central differences use information on both sides of the point,
              while forward and backward differences are one-sided.
            </p>
          </div>

          <div className="pml-table-wrap">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Formula</th>
                  <th>Truncation order</th>
                  <th>Sample locations</th>
                </tr>
              </thead>

              <tbody>
                {methodComparison.map((item) => (
                  <tr key={item.method}>
                    <td>{item.method}</td>

                    <td>
                      <MathRenderer inline>{item.formula}</MathRenderer>
                    </td>

                    <td>{item.order}</td>

                    <td>{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Worked example                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Estimate the derivative of x²
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Consider the function
                <span className="mx-2 font-mono text-[#17324D]">f(x)=x²</span>
                and estimate its derivative at
                <span className="mx-1 font-mono text-[#17324D]">x=3</span>
                using a central difference with
                <span className="mx-1 font-mono text-[#17324D]">h=0.01</span>.
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
                <div className="pml-eyebrow">Step 2 — substitute x=3</div>

                <div className="pml-formula mt-3">
                  <MathRenderer>
                    {"f'(3)\\approx\\frac{f(3.01)-f(2.99)}{0.02}"}
                  </MathRenderer>
                </div>
              </div>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">
                Step 3 — evaluate the function values
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    First value
                  </div>

                  <div className="mt-3">
                    <MathRenderer>{"f(3.01)=(3.01)^2=9.0601"}</MathRenderer>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Second value
                  </div>

                  <div className="mt-3">
                    <MathRenderer>{"f(2.99)=(2.99)^2=8.9401"}</MathRenderer>
                  </div>
                </div>

                <div className="border-t border-[#E9E9E6] pt-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Step 4 — calculate the approximation
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
                    Result
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#34404C]">
                    The numerical approximation is
                    <span className="mx-1 font-mono font-semibold">6</span>.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#34404C]">
                    The exact derivative is
                    <span className="mx-1 font-mono">f′(x)=2x</span>, so
                    <span className="mx-1 font-mono">f′(3)=6</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Taylor error                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div>
              <div className="pml-eyebrow">Where the error comes from</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Taylor expansion explains the accuracy
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The accuracy of finite-difference formulas can be understood
                using Taylor series. Expanding a function around x reveals which
                terms cancel and which terms remain in the approximation.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                This is why the three common formulas have different orders of
                truncation error.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Central difference</div>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {
                    "f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+O(h^4)"
                  }
                </MathRenderer>
              </div>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {
                    "f(x-h)=f(x)-hf'(x)+\\frac{h^2}{2}f''(x)-\\frac{h^3}{6}f'''(x)+O(h^4)"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                Subtracting these expansions cancels the even-power terms and
                leads to the central-difference approximation with a leading
                truncation error proportional to
                <span className="mx-1 font-mono text-[#17324D]">h²</span>.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Accuracy comparison                                               */}
        {/* ---------------------------------------------------------------- */}

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

          <div className="pml-table-wrap">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Typical truncation error</th>
                  <th>Accuracy as h decreases</th>
                  <th>Typical use</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Forward</td>
                  <td>O(h)</td>
                  <td>First order</td>
                  <td>One-sided data</td>
                </tr>

                <tr>
                  <td>Backward</td>
                  <td>O(h)</td>
                  <td>First order</td>
                  <td>One-sided data</td>
                </tr>

                <tr>
                  <td>Central</td>
                  <td>O(h²)</td>
                  <td>Second order</td>
                  <td>Interior points</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 pml-card p-6">
            <p className="text-sm leading-7 text-[#687481]">
              Here,
              <span className="mx-1 font-mono text-[#17324D]">O(h)</span>
              and
              <span className="mx-1 font-mono text-[#17324D]">O(h²)</span>
              describe how the truncation error scales as h approaches zero.
              Second-order error decreases more rapidly with h than first-order
              error, provided the underlying function is sufficiently smooth.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Step size                                                         */}
        {/* ---------------------------------------------------------------- */}

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
                When h becomes very small, the two function values being
                subtracted can become extremely close. The subtraction may then
                magnify the effects of floating-point round-off.
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
                      <div className="text-sm font-semibold text-[#17324D]">
                        Truncation error
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from replacing the exact limiting process with a
                        finite approximation.
                      </p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#17324D]">
                        Round-off error
                      </div>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        Comes from the finite precision used to represent and
                        manipulate numerical values.
                      </p>
                    </div>

                    <div className="border-t border-[#E9E9E6] pt-5">
                      <p className="text-sm font-medium leading-6 text-[#34404C]">
                        Good numerical practice balances these effects instead
                        of simply minimizing h.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Data and noise                                                     */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Real-world data</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Differentiating measured data is different from differentiating an
              exact formula
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              Real measurements are rarely exact. Small fluctuations caused by
              sensors, measurement conditions, or other sources of noise can
              become much more noticeable when differences are taken.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Smooth analytical function
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Finite differences usually behave predictably when the function
                is sufficiently smooth and can be evaluated accurately.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Sampled measurements
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                The derivative must be estimated from discrete observations,
                which limits the available choices of step size and formula.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Noisy measurements
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Differentiation can amplify noise, so smoothing, fitting, or
                specialized numerical techniques may be necessary.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Implementation                                                     */}
        {/* ---------------------------------------------------------------- */}

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
                Implementing a finite difference requires more than copying a
                mathematical formula. A program must evaluate the function,
                choose a numerical parameter, handle invalid values, and
                represent the result using finite-precision arithmetic.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Conceptual algorithm</div>

              <ol className="mt-5 space-y-4">
                {[
                  "Choose the evaluation point x.",
                  "Determine which neighboring data values are available.",
                  "Choose an appropriate step size h.",
                  "Evaluate the required function values.",
                  "Apply the selected finite-difference formula.",
                  "Check whether the result is numerically reasonable.",
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

        {/* ---------------------------------------------------------------- */}
        {/* Practical selection                                               */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Practical selection guide</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Which method should you use?
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Method selection depends on data availability, location within the
              data set, smoothness, and accuracy requirements.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <div className="font-mono text-sm font-semibold text-[#2F5BEA]">
                Forward
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                Use a forward difference
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                when values to the right of the point are available but values
                to the left are not.
              </p>

              <div className="mt-5 pml-formula">
                <MathRenderer>
                  {"f'(x)\\approx\\frac{f(x+h)-f(x)}{h}"}
                </MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <div className="font-mono text-sm font-semibold text-[#2F5BEA]">
                Backward
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                Use a backward difference
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                when the point is near the end of the available data and future
                values cannot be used.
              </p>

              <div className="mt-5 pml-formula">
                <MathRenderer>
                  {"f'(x)\\approx\\frac{f(x)-f(x-h)}{h}"}
                </MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <div className="font-mono text-sm font-semibold text-[#2F5BEA]">
                Central
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                Use a central difference
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                when values exist on both sides of the point and improved
                accuracy is important.
              </p>

              <div className="mt-5 pml-formula">
                <MathRenderer>
                  {"f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}"}
                </MathRenderer>
              </div>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Practical checks                                                   */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <div className="pml-eyebrow">Before trusting the result</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                A short numerical checklist
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                A derivative estimate should be interpreted in the context of
                the function and the available data. Before using the result,
                check the assumptions behind the approximation.
              </p>
            </div>

            <div className="space-y-4">
              {practicalChecks.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#E9E9E6] pb-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#18794E]"
                  />

                  <span className="text-sm leading-6 text-[#34404C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Important notes                                                   */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Important notes</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Numerical differentiation has limitations
                </h2>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Smoothness matters
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Standard finite-difference error estimates rely on sufficient
                  differentiability near the point being evaluated.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Boundary points need care
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  At the edge of a data set, central differences may not be
                  possible because data exists on only one side.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Noise can be amplified
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  Differentiation can make small fluctuations in measured data
                  more prominent.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Numerical is not synonymous with exact
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#687481]">
                  A computed derivative is an approximation unless an exact
                  mathematical argument establishes otherwise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Summary                                                           */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="pml-eyebrow">Summary</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                What to remember
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Finite differences approximate derivatives using values at nearby points.",
                  "Forward and backward differences are first-order methods.",
                  "Central differences are second-order and often more accurate for smooth interior points.",
                  "Step size creates a balance between truncation error and round-off error.",
                  "Real-world noisy data may require additional processing before differentiation.",
                  "A numerical result should be validated rather than accepted without checking.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#18794E]"
                    />

                    <p className="text-sm leading-7 text-[#34404C]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pml-card h-fit p-6">
              <Sigma size={22} className="text-[#2F5BEA]" />

              <h3 className="mt-4 text-lg font-semibold text-[#17202A]">
                Central idea
              </h3>

              <div className="mt-4 pml-formula">
                <MathRenderer>
                  {"\\text{derivative}\\approx\\text{finite difference}"}
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                Numerical differentiation connects the definition of a
                derivative with finite computational operations.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Related resources                                                 */}
        {/* ---------------------------------------------------------------- */}

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
                Understand the mathematical definition, rules, interpretation,
                and applications of derivatives.
              </p>
            </Link>

            <Link
              to="/implementation"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <Code2 size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Numerical Calculus
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                See how derivatives, integrals, and root-finding problems become
                computational algorithms.
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
                Learn how definite integrals can be approximated from sampled
                function values.
              </p>
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Final CTA                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] pt-12">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <Code2 size={25} />

            <h2 className="mt-4 text-2xl font-semibold">
              Continue from derivatives to numerical integration
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Numerical differentiation is one example of a broader idea:
              replacing an exact mathematical operation with a controlled
              computational approximation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/implementation/numerical-integration"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
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
