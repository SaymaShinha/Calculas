import { ArrowRight, Box, CheckCircle2, Circle, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

export default function Volume() {
  return (
    <>
      <SEO
        title="Volume with Calculus | Disks, Washers & Cylindrical Shells"
        description="Learn how calculus calculates volumes of solids using cross-sections, disk methods, washer methods, and cylindrical shells, with formulas and worked examples."
        canonical="/applications/volume"
      />

      <PageHeader
        eyebrow="Application • Volume"
        title="Volume with Integration"
        description="Definite integrals calculate the volume of three-dimensional solids by accumulating infinitely many thin cross-sections or cylindrical layers."
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
                From cross-sections to volume
              </h2>

              <p className="mt-5 leading-7 text-[#34404C]">
                The volume of familiar solids can be calculated using geometric
                formulas. For example, a cylinder has volume πr²h.
              </p>

              <p className="mt-4 leading-7 text-[#34404C]">
                More complicated solids may have curved boundaries or changing
                cross-sections. Calculus handles these objects by dividing them
                into very thin pieces and adding their volumes.
              </p>

              <div className="pml-formula mt-7">
                <MathRenderer>{"V=\\int_a^bA(x)\\,dx"}</MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                Here A(x) represents the area of a cross-section perpendicular
                to the direction of integration.
              </p>
            </article>

            <aside className="pml-card p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Box size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#17202A]">
                The key modeling question
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                Instead of starting with a formula, first ask: what does a thin
                slice of the solid look like?
              </p>

              <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm font-semibold text-[#17202A]">
                  General principle
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Volume is accumulated cross-sectional area multiplied by an
                  infinitesimally small thickness.
                </p>
              </div>
            </aside>
          </div>

          {/* ============================================================ */}
          {/* Cross-section method                                         */}
          {/* ============================================================ */}

          <article className="pml-card mt-10 p-6 sm:p-8">
            <p className="pml-eyebrow">Cross-sections</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              The general volume formula
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Suppose a solid extends from x = a to x = b and the area of a
              cross-section perpendicular to the x-axis is A(x). A thin slice
              has approximate volume A(x)Δx.
            </p>

            <div className="pml-formula mt-7">
              <MathRenderer>{"\\Delta V\\approx A(x)\\Delta x"}</MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              Adding increasingly thin slices and taking the limiting process
              gives the exact volume:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"V=\\int_a^bA(x)\\,dx"}</MathRenderer>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Three methods                                                */}
          {/* ============================================================ */}

          <section className="mt-10">
            <div className="max-w-3xl">
              <p className="pml-eyebrow">Three common methods</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
                Disks, washers, and shells
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                Solids of revolution can often be evaluated using one of three
                standard approaches. The best method depends on the geometry and
                the chosen direction of slicing.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <article className="pml-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Circle size={20} />
                </div>

                <p className="mt-5 font-mono text-sm font-bold text-[#2F5BEA]">
                  METHOD 01
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#17202A]">Disk</h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Used when rotation creates solid circular cross-sections with
                  no hole.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"V=\\pi\\int_a^bR(x)^2\\,dx"}</MathRenderer>
                </div>
              </article>

              <article className="pml-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Layers3 size={20} />
                </div>

                <p className="mt-5 font-mono text-sm font-bold text-[#2F5BEA]">
                  METHOD 02
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#17202A]">
                  Washer
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Used when rotation produces circular cross-sections with a
                  hole.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {"V=\\pi\\int_a^b\\left[R(x)^2-r(x)^2\\right]dx"}
                  </MathRenderer>
                </div>
              </article>

              <article className="pml-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Box size={20} />
                </div>

                <p className="mt-5 font-mono text-sm font-bold text-[#2F5BEA]">
                  METHOD 03
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#17202A]">
                  Cylindrical shell
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Uses thin cylindrical layers rather than circular end
                  cross-sections.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"V=2\\pi\\int_a^b x f(x)\\,dx"}</MathRenderer>
                </div>
              </article>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Disk method                                                  */}
          {/* ============================================================ */}

          <article className="pml-card mt-10 p-6 sm:p-8">
            <p className="pml-eyebrow">Method 01 • Disk</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              The disk method
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              When a region is rotated around an axis and each perpendicular
              slice produces a solid circle, the disk method is natural.
            </p>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              A disk with radius R(x) has cross-sectional area:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"A(x)=\\pi[R(x)]^2"}</MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              Integrating those areas over the interval gives:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"V=\\pi\\int_a^b[R(x)]^2\\,dx"}</MathRenderer>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Washer method                                                */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Method 02 • Washer</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              The washer method
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              If the rotated region does not reach the axis of rotation, each
              cross-section contains a circular hole. The resulting shape
              resembles a washer.
            </p>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              The cross-sectional area is the outer disk minus the inner disk:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"A(x)=\\pi R(x)^2-\\pi r(x)^2"}</MathRenderer>
            </div>

            <div className="pml-formula mt-4">
              <MathRenderer>
                {"A(x)=\\pi\\left[R(x)^2-r(x)^2\\right]"}
              </MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              Therefore:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>
                {"V=\\pi\\int_a^b\\left[R(x)^2-r(x)^2\\right]dx"}
              </MathRenderer>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Shell method                                                 */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Method 03 • Cylindrical shells</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              The shell method
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Instead of slicing perpendicular to the axis of rotation, the
              shell method uses thin strips that rotate to form cylindrical
              layers.
            </p>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              The approximate volume of a thin shell is its circumference
              multiplied by its height and thickness:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>
                {
                  "\\Delta V\\approx2\\pi(\\text{radius})(\\text{height})\\Delta x"
                }
              </MathRenderer>
            </div>

            <p className="mt-5 max-w-4xl leading-7 text-[#34404C]">
              For rotation around the y-axis, when the radius is x and the
              height is f(x):
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"V=2\\pi\\int_a^bxf(x)\\,dx"}</MathRenderer>
            </div>

            <div className="pml-success mt-7">
              Shells are often convenient when using vertical slices around a
              vertical axis would avoid solving the function for x in terms of
              y.
            </div>
          </article>

          {/* ============================================================ */}
          {/* Method selection                                             */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Choosing a method</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Which method should you use?
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Disk, washer, and shell methods can sometimes all describe the
              same volume. The goal is to choose the method that produces the
              clearest geometry and the simplest integral.
            </p>

            <div className="mt-7 overflow-x-auto">
              <table className="pml-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Basic slice</th>
                    <th>Best suited for</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Disk</td>
                    <td>Circular cross-section</td>
                    <td>No hole in the rotated region</td>
                  </tr>

                  <tr>
                    <td>Washer</td>
                    <td>Annular cross-section</td>
                    <td>Rotation creates an inner radius</td>
                  </tr>

                  <tr>
                    <td>Shell</td>
                    <td>Cylindrical layer</td>
                    <td>Strips parallel to the axis of rotation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                "Sketch the region.",
                "Mark the axis of rotation.",
                "Decide which slicing direction gives the simplest description.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-4"
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
          {/* Worked example                                               */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Worked example</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Rotating a parabola around the x-axis
            </h2>

            <p className="mt-4 leading-7 text-[#34404C]">
              Consider the region under <strong>y = x²</strong> from x = 0 to x
              = 2. Rotate the region around the x-axis.
            </p>

            <p className="mt-5 leading-7 text-[#34404C]">
              Because the slices perpendicular to the x-axis are disks, the disk
              method is appropriate.
            </p>

            <p className="mt-5 leading-7 text-[#34404C]">
              The radius of each disk is:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"R(x)=x^2"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Therefore the volume is:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"V=\\pi\\int_0^2(x^2)^2\\,dx"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">Simplify:</p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"V=\\pi\\int_0^2x^4\\,dx"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">Integrating:</p>

            <div className="pml-formula mt-4">
              <MathRenderer>
                {"V=\\pi\\left[\\frac{x^5}{5}\\right]_0^2"}
              </MathRenderer>
            </div>

            <div className="pml-formula mt-4">
              <MathRenderer>{"V=\\frac{32\\pi}{5}"}</MathRenderer>
            </div>

            <div className="pml-success mt-7">
              The resulting solid has volume 32π/5 cubic units.
            </div>
          </article>

          {/* ============================================================ */}
          {/* Important modeling considerations                            */}
          {/* ============================================================ */}

          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Radius versus diameter</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Identify the radius correctly
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                Disk and washer formulas use radii, not diameters. The radius is
                the perpendicular distance from the axis of rotation to the
                boundary of the region.
              </p>

              <div className="pml-warning mt-6">
                A common mistake is to substitute a full diameter where the
                formula requires a radius.
              </div>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Units</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Volume uses cubic units
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                Cross-sectional area has square units. Multiplying by a small
                thickness gives cubic units, so the final volume must also be
                expressed in cubic units.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"\\text{area}\\times\\text{length}=\\text{volume}"}
                </MathRenderer>
              </div>
            </article>
          </section>

          {/* ============================================================ */}
          {/* Practical workflow                                          */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Problem-solving workflow</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              A reliable method for volume problems
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-4">
              {[
                [
                  "01",
                  "Sketch",
                  "Draw the region and identify the axis of rotation.",
                ],
                [
                  "02",
                  "Slice",
                  "Determine whether disks, washers, or shells provide the simplest geometry.",
                ],
                [
                  "03",
                  "Model",
                  "Write the radius, inner radius, height, and limits correctly.",
                ],
                [
                  "04",
                  "Integrate",
                  "Evaluate the resulting definite integral and report cubic units.",
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
          {/* Practical interpretation                                     */}
          {/* ============================================================ */}

          <article className="mt-6 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F5BEA]">
                <Box size={20} />
              </div>

              <div>
                <p className="pml-eyebrow">Practical interpretation</p>

                <h2 className="mt-2 text-xl font-bold text-[#17202A]">
                  Think geometrically before integrating
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-[#34404C]">
                  The most important part of a volume problem is often
                  identifying the correct cross-section. Once the geometry is
                  modeled correctly, the integral usually follows naturally.
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
                Volume problems combine geometry, definite integrals, functions,
                and the idea of accumulation.
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
