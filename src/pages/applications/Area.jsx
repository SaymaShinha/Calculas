import { AreaChart, ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

export default function Area() {
  return (
    <>
      <SEO
        title="Area Under a Curve | Definite Integrals Explained"
        description="Learn how definite integrals calculate area under curves, signed area, area between curves, and accumulated quantities using the Fundamental Theorem of Calculus."
        canonical="/applications/area"
      />

      <PageHeader
        eyebrow="Application • Area"
        title="Area and Definite Integrals"
        description="Integration provides a systematic way to calculate area and accumulated quantities when simple geometric formulas are no longer sufficient."
      />

      <section className="pml-section">
        <div className="pml-container">
          {/* ============================================================ */}
          {/* Introduction                                                 */}
          {/* ============================================================ */}

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">The central idea</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
                From rectangles to curved regions
              </h2>

              <p className="mt-5 leading-7 text-[#34404C]">
                The area of simple geometric shapes can be calculated with
                familiar formulas. For example, the area of a rectangle is its
                length multiplied by its width.
              </p>

              <p className="mt-4 leading-7 text-[#34404C]">
                A region bounded by a curved graph is more difficult. Instead of
                trying to find a single geometric formula, calculus divides the
                region into many thin pieces and adds their contributions.
              </p>

              <div className="pml-formula mt-7">
                <MathRenderer>
                  {"A=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x"}
                </MathRenderer>
              </div>

              <p className="mt-5 leading-7 text-[#34404C]">
                This limiting process leads to the definite integral.
              </p>

              <div className="pml-formula mt-5">
                <MathRenderer>{"A=\\int_a^b f(x)\\,dx"}</MathRenderer>
              </div>
            </article>

            <aside className="pml-card p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <AreaChart size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#17202A]">
                What does the integral measure?
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                Depending on the context, an integral can represent area,
                distance, mass, accumulated change, work, probability, or many
                other quantities.
              </p>

              <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm font-semibold text-[#17202A]">
                  General interpretation
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  An integral adds up infinitely many small contributions to
                  obtain a total quantity.
                </p>
              </div>
            </aside>
          </div>

          {/* ============================================================ */}
          {/* Definite integral                                            */}
          {/* ============================================================ */}

          <article className="pml-card mt-10 p-6 sm:p-8">
            <p className="pml-eyebrow">Definite integral</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              The notation
            </h2>

            <div className="pml-formula mt-7">
              <MathRenderer>{"\\int_a^b f(x)\\,dx"}</MathRenderer>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-mono text-lg font-bold text-[#17324D]">a</p>

                <h3 className="mt-2 font-bold text-[#17202A]">Lower limit</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  The starting x-value of the interval.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-mono text-lg font-bold text-[#17324D]">b</p>

                <h3 className="mt-2 font-bold text-[#17202A]">Upper limit</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  The ending x-value of the interval.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-mono text-lg font-bold text-[#17324D]">dx</p>

                <h3 className="mt-2 font-bold text-[#17202A]">
                  Differential width
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Represents an infinitesimally small change in x.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Signed area                                                  */}
          {/* ============================================================ */}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Important distinction</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Signed area
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                A definite integral measures <strong>signed area</strong>, not
                always the ordinary geometric area.
              </p>

              <p className="mt-4 leading-7 text-[#34404C]">
                Regions above the x-axis contribute positive values, while
                regions below the x-axis contribute negative values.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"\\int_a^b f(x)\\,dx"}</MathRenderer>
              </div>

              <div className="pml-warning mt-6">
                If a graph crosses the x-axis, positive and negative
                contributions can cancel each other.
              </div>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Geometric area</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Finding total area
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                If the goal is the total geometric area, the interval should be
                divided wherever the function crosses the x-axis, or the
                absolute value can be used.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"A=\\int_a^b|f(x)|\\,dx"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                This prevents regions below the x-axis from cancelling regions
                above it.
              </p>
            </article>
          </div>

          {/* ============================================================ */}
          {/* Area between curves                                          */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Area between curves</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Subtract the lower function from the upper
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              When two functions bound a region, the vertical height of a thin
              slice is the difference between the upper and lower functions.
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>
                {"A=\\int_a^b\\left[f(x)-g(x)\\right]dx"}
              </MathRenderer>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div>
                <p className="text-sm font-bold text-[#17202A]">
                  1. Find intersections
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Solve f(x) = g(x) to determine the relevant boundaries.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#17202A]">
                  2. Identify upper and lower
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Determine which function has the greater y-value over the
                  interval.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#17202A]">
                  3. Integrate the difference
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Integrate the vertical distance between the curves.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Worked example                                                */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Worked example</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              Area under a parabola
            </h2>

            <p className="mt-4 leading-7 text-[#34404C]">
              Find the area under the curve <strong>f(x) = x²</strong> from x =
              0 to x = 2.
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>{"A=\\int_0^2x^2\\,dx"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              An antiderivative of x² is:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"\\int x^2\\,dx=\\frac{x^3}{3}"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Applying the limits:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>
                {"A=\\left[\\frac{x^3}{3}\\right]_0^2"}
              </MathRenderer>
            </div>

            <div className="pml-formula mt-4">
              <MathRenderer>{"A=\\frac{8}{3}"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Therefore, the area under x² from 0 to 2 is 8/3 square units.
            </p>
          </article>

          {/* ============================================================ */}
          {/* Riemann sums                                                 */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Where the integral comes from</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Riemann sums
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              The definite integral can be understood as the limit of a sum of
              small rectangular areas. Divide the interval into n pieces and let
              each rectangle have width Δx.
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>
                {"S_n=\\sum_{i=1}^{n}f(x_i^*)\\Delta x"}
              </MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              As the number of rectangles increases and their widths approach
              zero, the approximation approaches the exact definite integral.
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>
                {"\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}S_n"}
              </MathRenderer>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Fundamental theorem                                         */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Fundamental Theorem of Calculus</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Why integration can be evaluated using antiderivatives
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              The Fundamental Theorem of Calculus connects differentiation and
              integration. If F is an antiderivative of f, then:
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>{"F'(x)=f(x)"}</MathRenderer>
            </div>

            <div className="pml-formula mt-4">
              <MathRenderer>{"\\int_a^b f(x)\\,dx=F(b)-F(a)"}</MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              This theorem transforms the limiting process behind the integral
              into a practical calculation using an antiderivative.
            </p>
          </article>

          {/* ============================================================ */}
          {/* Accumulation                                                 */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Beyond geometry</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Integration represents accumulation
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Area is one interpretation of an integral, but it is not the only
              one. A more general interpretation is accumulation.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <h3 className="font-bold text-[#17202A]">Motion</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Integrating velocity can determine displacement.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <h3 className="font-bold text-[#17202A]">Work</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Integrating a variable force over distance gives work.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <h3 className="font-bold text-[#17202A]">Volume</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Integrating cross-sectional areas gives the volume of a solid.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Practical interpretation                                     */}
          {/* ============================================================ */}

          <article className="mt-6 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F5BEA]">
                <Calculator size={20} />
              </div>

              <div>
                <p className="pml-eyebrow">Practical interpretation</p>

                <h2 className="mt-2 text-xl font-bold text-[#17202A]">
                  Ask what is accumulating
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-[#34404C]">
                  When approaching an application problem, identify the quantity
                  that is being accumulated. Then determine the rate or density
                  being added and integrate it over the appropriate interval.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Related topics                                               */}
          {/* ============================================================ */}

          <section className="mt-12 border-t border-[#DEDEDB] pt-10">
            <div className="max-w-3xl">
              <p className="pml-eyebrow">Continue learning</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Explore related calculus concepts
              </h2>

              <p className="mt-3 leading-7 text-[#687481]">
                Understanding area becomes easier when the underlying ideas of
                limits and integration are clear.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/learn/integrals" className="pml-btn-primary">
                Learn about integrals
                <ArrowRight size={17} />
              </Link>

              <Link to="/calculators/integral" className="pml-btn-secondary">
                Try the integral calculator
                <ArrowRight size={17} />
              </Link>

              <Link to="/applications/volume" className="pml-btn-secondary">
                Explore volume
                <ArrowRight size={17} />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
