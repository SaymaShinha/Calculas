import { ArrowRight, Car, Gauge, MapPin, Timer, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

export default function Motion() {
  return (
    <>
      <SEO
        title="Calculus and Motion | Position, Velocity & Acceleration"
        description="Learn how derivatives and integrals connect position, velocity, acceleration, displacement, and distance in calculus-based motion problems."
        canonical="/applications/motion"
      />

      <PageHeader
        eyebrow="Application • Motion"
        title="Calculus and Motion"
        description="Derivatives and integrals provide a mathematical language for describing position, velocity, acceleration, displacement, and distance."
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
                Motion as a changing quantity
              </h2>

              <p className="mt-5 leading-7 text-[#34404C]">
                Calculus is especially useful for describing motion because the
                important physical quantities change continuously with time.
              </p>

              <p className="mt-4 leading-7 text-[#34404C]">
                If the position of an object is known as a function of time,
                differentiation gives its velocity and acceleration.
              </p>

              <div className="pml-formula mt-7">
                <MathRenderer>{"v(t)=s'(t)"}</MathRenderer>
              </div>

              <div className="pml-formula mt-4">
                <MathRenderer>{"a(t)=v'(t)=s''(t)"}</MathRenderer>
              </div>
            </article>

            <aside className="pml-card p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Car size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#17202A]">
                Why calculus is useful
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                Basic algebra can describe constant-speed motion. Calculus
                becomes necessary when velocity or acceleration changes
                continuously over time.
              </p>

              <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm font-semibold text-[#17202A]">
                  Key relationship
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Differentiation describes instantaneous change; integration
                  accumulates change.
                </p>
              </div>
            </aside>
          </div>

          {/* ============================================================ */}
          {/* Three fundamental quantities                                 */}
          {/* ============================================================ */}

          <section className="mt-10">
            <div className="max-w-3xl">
              <p className="pml-eyebrow">Three fundamental quantities</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
                Position, velocity, and acceleration
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                These quantities describe different levels of information about
                an object's motion.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Position",
                  symbol: "s(t)",
                  description:
                    "Describes where the object is located relative to a chosen reference point.",
                  icon: MapPin,
                },
                {
                  title: "Velocity",
                  symbol: "v(t)",
                  description:
                    "Describes the instantaneous rate and direction of change of position.",
                  icon: Gauge,
                },
                {
                  title: "Acceleration",
                  symbol: "a(t)",
                  description:
                    "Describes the instantaneous rate of change of velocity.",
                  icon: TrendingUp,
                },
              ].map(({ title, symbol, description, icon: Icon }) => (
                <article key={title} className="pml-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Icon size={20} />
                  </div>

                  <p className="mt-5 font-mono text-lg font-semibold text-[#17324D]">
                    {symbol}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#17202A]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* Derivative chain                                             */}
          {/* ============================================================ */}

          <article className="pml-card mt-10 p-6 sm:p-8">
            <p className="pml-eyebrow">Differentiation and motion</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              The derivative chain
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Each derivative gives the instantaneous rate of change of the
              quantity before it. Starting with position, the first derivative
              gives velocity and the second derivative gives acceleration.
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>
                {
                  "s(t)\\xrightarrow{\\frac{d}{dt}}v(t)\\xrightarrow{\\frac{d}{dt}}a(t)"
                }
              </MathRenderer>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="pml-table">
                <thead>
                  <tr>
                    <th>Quantity</th>
                    <th>Expression</th>
                    <th>Typical units</th>
                    <th>Meaning</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Position</td>
                    <td className="font-mono">s(t)</td>
                    <td>m, ft</td>
                    <td>Location</td>
                  </tr>

                  <tr>
                    <td>Velocity</td>
                    <td className="font-mono">s′(t)</td>
                    <td>m/s, ft/s</td>
                    <td>Rate of position change</td>
                  </tr>

                  <tr>
                    <td>Acceleration</td>
                    <td className="font-mono">s″(t)</td>
                    <td>m/s², ft/s²</td>
                    <td>Rate of velocity change</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Velocity interpretation                                      */}
          {/* ============================================================ */}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Velocity</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Velocity describes instantaneous motion
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                Velocity is the instantaneous rate of change of position. Its
                sign indicates the direction of motion relative to the chosen
                coordinate system.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"v(t)=\\frac{ds}{dt}"}</MathRenderer>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-4">
                  <p className="font-semibold text-[#17202A]">v(t) &gt; 0</p>

                  <p className="mt-1 text-sm leading-6 text-[#687481]">
                    Position is increasing in the positive coordinate direction.
                  </p>
                </div>

                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-4">
                  <p className="font-semibold text-[#17202A]">v(t) &lt; 0</p>

                  <p className="mt-1 text-sm leading-6 text-[#687481]">
                    Position is decreasing in the positive coordinate direction.
                  </p>
                </div>

                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-4">
                  <p className="font-semibold text-[#17202A]">v(t) = 0</p>

                  <p className="mt-1 text-sm leading-6 text-[#687481]">
                    The object is instantaneously at rest.
                  </p>
                </div>
              </div>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Acceleration</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Acceleration describes changing velocity
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                Acceleration measures how velocity changes with time. Its sign
                does not by itself tell us whether an object is speeding up or
                slowing down.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"a(t)=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}"}
                </MathRenderer>
              </div>

              <div className="pml-warning mt-6">
                Positive acceleration does not automatically mean the object is
                speeding up. Velocity and acceleration must be considered
                together.
              </div>
            </article>
          </div>

          {/* ============================================================ */}
          {/* Speeding up / slowing down                                   */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">A common source of confusion</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Speeding up versus slowing down
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              The signs of velocity and acceleration provide a useful test for
              determining whether an object is speeding up or slowing down.
            </p>

            <div className="mt-7 overflow-x-auto">
              <table className="pml-table">
                <thead>
                  <tr>
                    <th>Velocity</th>
                    <th>Acceleration</th>
                    <th>Behavior</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Positive</td>
                    <td>Positive</td>
                    <td>Speeding up</td>
                  </tr>

                  <tr>
                    <td>Positive</td>
                    <td>Negative</td>
                    <td>Slowing down</td>
                  </tr>

                  <tr>
                    <td>Negative</td>
                    <td>Positive</td>
                    <td>Slowing down</td>
                  </tr>

                  <tr>
                    <td>Negative</td>
                    <td>Negative</td>
                    <td>Speeding up</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#687481]">
              The key idea is that an object speeds up when velocity and
              acceleration have the same sign, and slows down when they have
              opposite signs.
            </p>
          </article>

          {/* ============================================================ */}
          {/* Integration                                                  */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Integration reverses differentiation</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              From velocity back to position
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              If velocity is known, integration can determine the change in
              position over a time interval.
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>{"s(b)-s(a)=\\int_a^b v(t)\\,dt"}</MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              Similarly, if acceleration is known, integrating acceleration
              gives the change in velocity.
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"v(b)-v(a)=\\int_a^b a(t)\\,dt"}</MathRenderer>
            </div>

            <div className="pml-success mt-7">
              Differentiation moves from position → velocity → acceleration.
              Integration moves in the reverse direction.
            </div>
          </article>

          {/* ============================================================ */}
          {/* Displacement vs distance                                     */}
          {/* ============================================================ */}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Displacement</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Net change in position
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                Displacement measures the difference between the final and
                initial positions.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"\\Delta s=s(b)-s(a)"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                Displacement can be positive, negative, or zero.
              </p>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Total distance</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Total ground covered
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                Distance measures the total amount of ground traveled,
                regardless of direction.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"D=\\int_a^b|v(t)|\\,dt"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                Velocity changes direction when it changes sign, so those
                intervals may need to be treated separately.
              </p>
            </article>
          </div>

          {/* ============================================================ */}
          {/* Worked example                                               */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Worked example</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              An object with quadratic position
            </h2>

            <p className="mt-4 leading-7 text-[#34404C]">
              Suppose the position of an object is:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"s(t)=t^2+2t"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Differentiate to obtain velocity:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"v(t)=s'(t)=2t+2"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Differentiate once more to obtain acceleration:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"a(t)=v'(t)=2"}</MathRenderer>
            </div>

            <div className="mt-7 rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
              <p className="font-semibold text-[#17202A]">Interpretation</p>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                The velocity increases linearly with time, while the
                acceleration remains constant at 2 units of distance per unit
                time squared.
              </p>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Practical workflow                                          */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Problem-solving workflow</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              How to approach a motion problem
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-4">
              {[
                [
                  "01",
                  "Identify",
                  "Determine whether the problem gives position, velocity, or acceleration.",
                ],
                [
                  "02",
                  "Differentiate",
                  "Differentiate when moving from position to velocity or acceleration.",
                ],
                [
                  "03",
                  "Integrate",
                  "Integrate when moving from acceleration to velocity or velocity to position.",
                ],
                [
                  "04",
                  "Interpret",
                  "Use signs, units, and intervals to explain the physical meaning.",
                ],
              ].map(([number, title, description]) => (
                <div key={number} className="border-l-2 border-[#2F5BEA] pl-4">
                  <p className="font-mono text-sm font-bold text-[#2F5BEA]">
                    {number}
                  </p>

                  <h3 className="mt-2 font-bold text-[#17202A]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* ============================================================ */}
          {/* Important distinction                                        */}
          {/* ============================================================ */}

          <article className="mt-6 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F5BEA]">
                <Timer size={20} />
              </div>

              <div>
                <p className="pml-eyebrow">Practical interpretation</p>

                <h2 className="mt-2 text-xl font-bold text-[#17202A]">
                  Always distinguish the quantity being asked for
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-[#34404C]">
                  A motion problem may ask for position, displacement, velocity,
                  acceleration, speed, or total distance. These quantities are
                  related, but they are not interchangeable.
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
                Motion problems bring together derivatives, integrals,
                functions, and the interpretation of rates of change.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/learn/derivatives" className="pml-btn-primary">
                Learn derivatives
                <TrendingUp size={17} />
              </Link>

              <Link to="/learn/integrals" className="pml-btn-secondary">
                Learn integrals
                <ArrowRight size={17} />
              </Link>

              <Link to="/applications/area" className="pml-btn-secondary">
                Explore area
                <ArrowRight size={17} />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
