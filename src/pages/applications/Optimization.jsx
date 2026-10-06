import {
  ArrowRight,
  CheckCircle2,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

export default function Optimization() {
  return (
    <>
      <SEO
        title="Optimization in Calculus | Maximum and Minimum Problems"
        description="Learn how calculus optimization works using objective functions, constraints, critical points, derivatives, endpoints, and maximum and minimum values."
        canonical="/applications/optimization"
      />

      <PageHeader
        eyebrow="Application • Optimization"
        title="Optimization with Calculus"
        description="Optimization uses derivatives to determine where a quantity reaches a maximum or minimum under a given set of constraints."
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
                Finding the best possible value
              </h2>

              <p className="mt-5 leading-7 text-[#34404C]">
                Many practical problems ask for the largest, smallest, fastest,
                cheapest, or most efficient possible result.
              </p>

              <p className="mt-4 leading-7 text-[#34404C]">
                These are optimization problems. Calculus provides a systematic
                method for locating values where a function reaches a local or
                global maximum or minimum.
              </p>

              <div className="pml-formula mt-7">
                <MathRenderer>{"f'(x)=0"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                A zero derivative is one important way a critical point can
                occur, but it is not sufficient by itself to establish a maximum
                or minimum.
              </p>
            </article>

            <aside className="pml-card p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Target size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#17202A]">
                What does optimization ask?
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                An optimization problem identifies a quantity to maximize or
                minimize and then determines which allowed input produces the
                best result.
              </p>

              <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm font-semibold text-[#17202A]">
                  Typical questions
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#687481]">
                  <li>• What dimensions maximize area?</li>
                  <li>• What design minimizes material?</li>
                  <li>• What value produces the greatest profit?</li>
                  <li>• What configuration gives the least cost?</li>
                </ul>
              </div>
            </aside>
          </div>

          {/* ============================================================ */}
          {/* Objective and constraints                                    */}
          {/* ============================================================ */}

          <section className="mt-10">
            <div className="max-w-3xl">
              <p className="pml-eyebrow">Building the mathematical model</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
                Objective functions and constraints
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                A good optimization solution begins before taking any
                derivative. The original problem must first be translated into a
                mathematical model.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <article className="pml-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <TrendingUp size={20} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#17202A]">
                  Objective function
                </h3>

                <p className="mt-3 leading-7 text-[#687481]">
                  The objective function represents the quantity that must be
                  maximized or minimized.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"Q=f(x)"}</MathRenderer>
                </div>
              </article>

              <article className="pml-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Target size={20} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#17202A]">
                  Constraints
                </h3>

                <p className="mt-3 leading-7 text-[#687481]">
                  Constraints describe the conditions that restrict which values
                  of the variables are possible.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"x\\in[a,b]"}</MathRenderer>
                </div>
              </article>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Critical points                                             */}
          {/* ============================================================ */}

          <article className="pml-card mt-10 p-6 sm:p-8">
            <p className="pml-eyebrow">Critical points</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Where extrema can occur
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              For a differentiable function, an interior local maximum or
              minimum can occur where the derivative is zero. Critical points
              can also occur where the derivative does not exist.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-semibold text-[#17202A]">
                  Case 1: derivative equals zero
                </p>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"f'(c)=0"}</MathRenderer>
                </div>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-semibold text-[#17202A]">
                  Case 2: derivative does not exist
                </p>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"f'(c)\\text{ does not exist}"}</MathRenderer>
                </div>
              </div>
            </div>

            <div className="pml-warning mt-7">
              A critical point is a candidate for an extremum, not automatically
              an extremum. Its behavior must be analyzed.
            </div>
          </article>

          {/* ============================================================ */}
          {/* First derivative test                                        */}
          {/* ============================================================ */}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">First derivative test</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Analyze how the function changes
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                The sign of the derivative tells us whether a function is
                increasing or decreasing.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"f'(x)>0\\Rightarrow f\\text{ is increasing}"}
                </MathRenderer>
              </div>

              <div className="pml-formula mt-3">
                <MathRenderer>
                  {"f'(x)<0\\Rightarrow f\\text{ is decreasing}"}
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#687481]">
                A change from increasing to decreasing indicates a local
                maximum. A change from decreasing to increasing indicates a
                local minimum.
              </p>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Second derivative test</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Use concavity to classify a critical point
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                When f′(c) = 0, the second derivative can sometimes classify the
                critical point.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-4">
                  <div className="pml-formula">
                    <MathRenderer>
                      {"f''(c)>0\\Rightarrow\\text{local minimum}"}
                    </MathRenderer>
                  </div>
                </div>

                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-4">
                  <div className="pml-formula">
                    <MathRenderer>
                      {"f''(c)<0\\Rightarrow\\text{local maximum}"}
                    </MathRenderer>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#687481]">
                If f″(c) = 0, this test is inconclusive and another method
                should be used.
              </p>
            </article>
          </div>

          {/* ============================================================ */}
          {/* Global extrema and endpoints                                */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Global optimization</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Why endpoints matter
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              On a closed interval, a continuous function can have an absolute
              maximum and an absolute minimum. These values may occur at
              interior critical points or at the endpoints.
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>{"x\\in[a,b]"}</MathRenderer>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-mono text-sm font-bold text-[#2F5BEA]">01</p>

                <h3 className="mt-2 font-bold text-[#17202A]">
                  Find critical points
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Solve f′(x) = 0 and identify points where f′ is undefined.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-mono text-sm font-bold text-[#2F5BEA]">02</p>

                <h3 className="mt-2 font-bold text-[#17202A]">
                  Check endpoints
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Evaluate the function at a and b.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-mono text-sm font-bold text-[#2F5BEA]">03</p>

                <h3 className="mt-2 font-bold text-[#17202A]">
                  Compare values
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  The largest and smallest candidate values give the absolute
                  extrema.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Worked example                                               */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Worked example</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Maximizing the area of a rectangle
            </h2>

            <p className="mt-4 leading-7 text-[#34404C]">
              Suppose a rectangle has a fixed perimeter of 20 units. Let its
              length be x and its width be y.
            </p>

            <p className="mt-5 leading-7 text-[#34404C]">
              The perimeter constraint gives:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"2x+2y=20"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">Solving for y:</p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"y=10-x"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">The area is:</p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"A=xy=x(10-x)"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Simplify the objective function:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"A(x)=10x-x^2"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">Differentiate:</p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"A'(x)=10-2x"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Set the derivative equal to zero:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"10-2x=0\\Rightarrow x=5"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Since y = 10 − x, we obtain:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"y=5"}</MathRenderer>
            </div>

            <div className="pml-success mt-7">
              The rectangle with maximum area is a 5 × 5 square, giving a
              maximum area of 25 square units.
            </div>
          </article>

          {/* ============================================================ */}
          {/* Optimization workflow                                        */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Problem-solving workflow</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              A reliable optimization method
            </h2>

            <div className="mt-7 space-y-3">
              {[
                "Identify the quantity that must be maximized or minimized.",
                "Define the variables and translate the problem into equations.",
                "Use the constraints to express the objective as a function of one variable when possible.",
                "Determine the valid domain of the objective function.",
                "Differentiate the objective function.",
                "Find critical points where the derivative is zero or undefined.",
                "Check endpoints and other relevant boundary values.",
                "Compare candidate values to determine the required extremum.",
                "Interpret the mathematical answer in the context of the original problem.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-[#DEDEDB] bg-white p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#18794E]"
                  />

                  <p className="text-sm leading-6 text-[#34404C]">
                    <strong className="text-[#17202A]">{index + 1}.</strong>{" "}
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* ============================================================ */}
          {/* Constraints                                                   */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Modeling matters</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Why constraints cannot be ignored
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              A mathematical function may produce values that are impossible in
              the original application. Constraints define which solutions are
              physically, geometrically, or economically meaningful.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <h3 className="font-bold text-[#17202A]">Geometry</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Lengths and dimensions generally cannot be negative.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <h3 className="font-bold text-[#17202A]">Engineering</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Designs may be limited by material, dimensions, strength, or
                  capacity.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <h3 className="font-bold text-[#17202A]">Economics</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Production, cost, demand, and resource limitations restrict
                  feasible choices.
                </p>
              </div>
            </div>

            <div className="pml-warning mt-7">
              An optimization result is only meaningful if the resulting
              variables satisfy the original constraints.
            </div>
          </article>

          {/* ============================================================ */}
          {/* Local vs global                                              */}
          {/* ============================================================ */}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Local extrema</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Best within a neighborhood
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                A local maximum is greater than nearby function values, while a
                local minimum is smaller than nearby values.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"f(c)\\geq f(x)\\text{ for nearby }x"}
                </MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Global extrema</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Best over the entire domain
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                An absolute or global maximum is the largest function value on
                the entire allowed domain. A global minimum is the smallest.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"f(c)\\geq f(x)\\text{ for all }x\\text{ in the domain}"}
                </MathRenderer>
              </div>
            </article>
          </div>

          {/* ============================================================ */}
          {/* Real-world applications                                      */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Applications</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Where optimization appears
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Optimization is one of the most widely used ideas in applied
              calculus because many practical decisions involve choosing the
              best value under constraints.
            </p>

            <div className="mt-7 overflow-x-auto">
              <table className="pml-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Possible objective</th>
                    <th>Typical constraint</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Engineering</td>
                    <td>Minimize material</td>
                    <td>Required dimensions or strength</td>
                  </tr>

                  <tr>
                    <td>Business</td>
                    <td>Maximize profit</td>
                    <td>Cost, demand, or capacity</td>
                  </tr>

                  <tr>
                    <td>Manufacturing</td>
                    <td>Minimize production cost</td>
                    <td>Production requirements</td>
                  </tr>

                  <tr>
                    <td>Geometry</td>
                    <td>Maximize area or volume</td>
                    <td>Fixed perimeter or surface area</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Practical interpretation                                     */}
          {/* ============================================================ */}

          <article className="mt-6 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F5BEA]">
                <Target size={20} />
              </div>

              <div>
                <p className="pml-eyebrow">Practical interpretation</p>

                <h2 className="mt-2 text-xl font-bold text-[#17202A]">
                  Calculus finds candidates; modeling gives them meaning
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-[#34404C]">
                  Taking a derivative is only one part of an optimization
                  problem. A complete solution must respect the constraints,
                  compare all relevant candidates, and explain what the
                  resulting value means in the original context.
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
                Optimization combines functions, derivatives, critical points,
                and the interpretation of extrema.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/learn/derivatives" className="pml-btn-primary">
                Learn derivatives
                <TrendingUp size={17} />
              </Link>

              <Link
                to="/calculators/optimization"
                className="pml-btn-secondary"
              >
                Try the optimization calculator
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
