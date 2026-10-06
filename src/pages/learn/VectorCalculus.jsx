import {
  ArrowRight,
  CheckCircle2,
  Compass,
  GitBranch,
  Lightbulb,
  Move3D,
  Sigma,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function VectorCalculus() {
  return (
    <>
      <SEO
        title="Vector Calculus | Gradient, Divergence, Curl & Integral Theorems"
        description="Learn vector calculus through vector fields, gradients, line integrals, surface integrals, divergence, curl, Green's theorem, Stokes' theorem, and the Divergence theorem."
        canonical="/learn/vector-calculus"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Vector Calculus"
        description="Learn how derivatives and integrals extend to vector fields, and how local properties such as divergence and curl connect to global quantities along curves, surfaces, and volumes."
      />

      <main className="pml-container pml-section">
        <article className="max-w-4xl">
          {/* Introduction */}
          <section>
            <div className="pml-eyebrow">The big picture</div>

            <h2 className="pml-section-title mt-3">
              Calculus for fields, curves, and surfaces
            </h2>

            <p className="pml-prose mt-5">
              Single-variable calculus studies functions along a line.
              Multivariable calculus extends those ideas to functions of several
              variables. Vector calculus goes a step further by studying
              quantities that have both magnitude and direction and how those
              quantities vary throughout space.
            </p>

            <p className="pml-prose mt-4">
              The subject provides mathematical tools for describing fluid
              motion, electromagnetic fields, gravitational fields, heat flow,
              and many other systems in which a quantity varies from point to
              point.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#EEF3FF] p-3 text-[#2F5BEA]">
                  <Compass size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#17202A]">
                    The central idea
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Vector calculus connects local behavior—such as the
                    direction a field changes—with global quantities such as
                    circulation, flux, and total accumulation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vector fields */}
          <section className="mt-16">
            <div className="pml-eyebrow">01 • Vector fields</div>

            <h2 className="pml-section-title mt-3">What is a vector field?</h2>

            <p className="pml-prose mt-5">
              A vector field assigns a vector to every point in a region of
              space. A vector can represent both a magnitude and a direction,
              making vector fields useful for describing quantities such as
              velocity and force.
            </p>

            <MathRenderer block>
              F(x,y,z) = ⟨P(x,y,z), Q(x,y,z), R(x,y,z)⟩
            </MathRenderer>

            <p className="pml-prose mt-5">
              For example, a velocity field for a moving fluid can assign a
              velocity vector to every point in the fluid. At each location, the
              vector tells us how quickly the fluid is moving and in which
              direction.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Velocity",
                  text: "Describes the direction and speed of a moving fluid or object.",
                },
                {
                  title: "Force",
                  text: "Represents forces that vary from one location to another.",
                },
                {
                  title: "Electric field",
                  text: "Describes the force per unit charge throughout space.",
                },
              ].map((item) => (
                <div key={item.title} className="pml-card">
                  <h3 className="font-semibold text-[#17202A]">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Gradient */}
          <section className="mt-16">
            <div className="pml-eyebrow">02 • Gradient</div>

            <h2 className="pml-section-title mt-3">
              The gradient of a scalar field
            </h2>

            <p className="pml-prose mt-5">
              The gradient takes a scalar-valued function and produces a vector
              field. For a function of three variables:
            </p>

            <MathRenderer block>∇f = ⟨∂f/∂x, ∂f/∂y, ∂f/∂z⟩</MathRenderer>

            <p className="pml-prose mt-5">
              The gradient points in the direction in which the function
              increases most rapidly. Its magnitude tells us the maximum
              instantaneous rate of increase.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <Move3D className="mt-1 text-[#2F5BEA]" size={22} />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    Geometric interpretation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Imagine a landscape whose elevation is represented by
                    f(x,y). The gradient points in the direction of steepest
                    uphill increase.
                  </p>
                </div>
              </div>
            </div>

            <p className="pml-prose mt-6">
              This makes the gradient particularly important in optimization,
              physics, and machine learning, where determining a direction of
              greatest increase or decrease is useful.
            </p>
          </section>

          {/* Line integrals */}
          <section className="mt-16">
            <div className="pml-eyebrow">03 • Line integrals</div>

            <h2 className="pml-section-title mt-3">
              Integrating along a curve
            </h2>

            <p className="pml-prose mt-5">
              A line integral accumulates a quantity along a curve rather than
              across an interval. For a scalar field, a common form is:
            </p>

            <MathRenderer block>∫ᶜ f ds</MathRenderer>

            <p className="pml-prose mt-5">
              Line integrals of vector fields have another important form:
            </p>

            <MathRenderer block>∫ᶜ F · dr</MathRenderer>

            <p className="pml-prose mt-5">
              This expression measures how strongly the vector field acts in the
              direction of motion along the curve. In physics, it is closely
              connected to the work done by a force.
            </p>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Key idea:</strong> A line integral accumulates
                  information along a path. The path itself matters, especially
                  for vector fields.
                </div>
              </div>
            </div>
          </section>

          {/* Divergence */}
          <section className="mt-16">
            <div className="pml-eyebrow">04 • Divergence</div>

            <h2 className="pml-section-title mt-3">Measuring outward flow</h2>

            <p className="pml-prose mt-5">
              Divergence measures the local tendency of a vector field to spread
              outward from a point or converge toward it.
            </p>

            <MathRenderer block>∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z</MathRenderer>

            <p className="pml-prose mt-5">
              If the divergence is positive at a point, the field behaves
              locally like a source. Negative divergence indicates a tendency
              toward inward flow, while zero divergence indicates no net local
              expansion or contraction.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Positive",
                  text: "Local net outward behavior.",
                },
                {
                  title: "Negative",
                  text: "Local net inward behavior.",
                },
                {
                  title: "Zero",
                  text: "No net local expansion or contraction.",
                },
              ].map((item) => (
                <div key={item.title} className="pml-card">
                  <h3 className="font-semibold text-[#17202A]">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Curl */}
          <section className="mt-16">
            <div className="pml-eyebrow">05 • Curl</div>

            <h2 className="pml-section-title mt-3">Measuring local rotation</h2>

            <p className="pml-prose mt-5">
              Curl measures the tendency of a vector field to produce local
              rotation around a point.
            </p>

            <MathRenderer block>∇ × F</MathRenderer>

            <p className="pml-prose mt-5">For:</p>

            <MathRenderer block>F = ⟨P,Q,R⟩</MathRenderer>

            <p className="pml-prose mt-5">the curl can be written as:</p>

            <MathRenderer block>
              ∇ × F = ⟨Rᵧ - Q_z, P_z - R_x, Q_x - P_y⟩
            </MathRenderer>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <Waves className="mt-1 text-[#2F5BEA]" size={22} />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    Physical intuition
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Imagine placing a tiny paddle wheel inside a flowing fluid.
                    Curl describes the field's tendency to make that wheel
                    rotate locally.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Surface integrals */}
          <section className="mt-16">
            <div className="pml-eyebrow">06 • Surface integrals</div>

            <h2 className="pml-section-title mt-3">
              Integrating across surfaces
            </h2>

            <p className="pml-prose mt-5">
              Surface integrals extend integration from curves and planar
              regions to surfaces in three-dimensional space.
            </p>

            <p className="pml-prose mt-4">
              A scalar surface integral has the form:
            </p>

            <MathRenderer block>∬ₛ f dS</MathRenderer>

            <p className="pml-prose mt-5">
              A vector surface integral is commonly used to calculate flux
              through a surface:
            </p>

            <MathRenderer block>∬ₛ F · n dS</MathRenderer>

            <p className="pml-prose mt-5">
              Here, <strong>n</strong> represents a chosen unit normal
              direction. Flux measures how much of the vector field passes
              through the surface.
            </p>
          </section>

          {/* Green */}
          <section className="mt-16">
            <div className="pml-eyebrow">07 • Green's theorem</div>

            <h2 className="pml-section-title mt-3">
              Connecting a region to its boundary
            </h2>

            <p className="pml-prose mt-5">
              Green's theorem connects a line integral around a closed curve
              with a double integral over the region enclosed by that curve.
            </p>

            <MathRenderer block>
              ∮ᶜ P dx + Q dy = ∬ᴿ (∂Q/∂x - ∂P/∂y) dA
            </MathRenderer>

            <p className="pml-prose mt-5">
              The theorem is useful because it allows a problem involving the
              boundary of a region to be converted into a problem involving the
              entire region, or vice versa.
            </p>

            <div className="pml-card mt-8">
              <h3 className="font-semibold text-[#17202A]">
                A broader pattern
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Green's theorem is part of a larger family of results in vector
                calculus that connect local derivatives with integrals over
                boundaries and regions.
              </p>
            </div>
          </section>

          {/* Stokes */}
          <section className="mt-16">
            <div className="pml-eyebrow">08 • Stokes' theorem</div>

            <h2 className="pml-section-title mt-3">Curl and circulation</h2>

            <p className="pml-prose mt-5">
              Stokes' theorem generalizes the idea behind Green's theorem to
              surfaces in three-dimensional space.
            </p>

            <MathRenderer block>∮ᶜ F · dr = ∬ₛ (∇ × F) · n dS</MathRenderer>

            <p className="pml-prose mt-5">
              The theorem says that the circulation of a vector field around the
              boundary of a surface is related to the flux of its curl through
              that surface.
            </p>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Connection:</strong> Stokes' theorem turns information
                  about local rotation, represented by curl, into a global
                  circulation along a boundary.
                </div>
              </div>
            </div>
          </section>

          {/* Divergence theorem */}
          <section className="mt-16">
            <div className="pml-eyebrow">09 • Divergence theorem</div>

            <h2 className="pml-section-title mt-3">
              Connecting volume and surface flux
            </h2>

            <p className="pml-prose mt-5">
              The Divergence theorem relates the total outward flux through a
              closed surface to the divergence throughout the volume enclosed by
              that surface.
            </p>

            <MathRenderer block>∬ₛ F · n dS = ∭ᵥ (∇ · F) dV</MathRenderer>

            <p className="pml-prose mt-5">
              This is especially useful when calculating flux directly across a
              complicated surface would be difficult, but the divergence inside
              the volume is easier to integrate.
            </p>
          </section>

          {/* The three operators */}
          <section className="mt-16">
            <div className="pml-eyebrow">10 • The core operators</div>

            <h2 className="pml-section-title mt-3">
              Gradient, divergence, and curl
            </h2>

            <p className="pml-prose mt-5">
              These three operators form a central part of vector calculus. They
              act on fields in different ways and answer different questions.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Compass,
                  title: "Gradient",
                  formula: "∇f",
                  text: "Takes a scalar field and produces a vector field showing the direction of greatest increase.",
                },
                {
                  icon: GitBranch,
                  title: "Divergence",
                  formula: "∇ · F",
                  text: "Produces a scalar measuring local net outward or inward behavior of a vector field.",
                },
                {
                  icon: Waves,
                  title: "Curl",
                  formula: "∇ × F",
                  text: "Produces a vector describing the local rotational tendency of a vector field.",
                },
              ].map(({ icon: Icon, title, formula, text }) => (
                <div key={title} className="pml-card">
                  <Icon size={22} className="text-[#2F5BEA]" />

                  <h3 className="mt-4 font-semibold text-[#17202A]">{title}</h3>

                  <div className="mt-3 rounded-md bg-[#F8F7F4] px-3 py-2 font-mono text-sm text-[#17324D]">
                    {formula}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mt-16">
            <div className="pml-eyebrow">11 • Applications</div>

            <h2 className="pml-section-title mt-3">
              Where vector calculus is used
            </h2>

            <p className="pml-prose mt-5">
              Vector calculus is particularly useful for systems where
              quantities vary throughout space and have directional behavior.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Fluid dynamics",
                  "Describe velocity fields, circulation, flow, and sources or sinks.",
                ],
                [
                  "Electromagnetism",
                  "Model electric and magnetic fields and their spatial behavior.",
                ],
                [
                  "Gravitation",
                  "Represent gravitational fields and calculate their effects.",
                ],
                [
                  "Heat transfer",
                  "Analyze temperature fields and heat flow through materials.",
                ],
                [
                  "Engineering",
                  "Study fields, stresses, fluxes, and spatially varying systems.",
                ],
                [
                  "Physics",
                  "Express fundamental laws involving fields, forces, and conservation.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-l-2 border-[#DEDEDB] py-1 pl-5"
                >
                  <h3 className="font-semibold text-[#17202A]">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Core concepts */}
          <section className="mt-16">
            <div className="pml-eyebrow">Core concepts</div>

            <h2 className="pml-section-title mt-3">What to remember</h2>

            <div className="mt-8 space-y-3">
              {[
                "A vector field assigns a vector to every point in a region.",
                "The gradient points in the direction of greatest local increase of a scalar field.",
                "Divergence measures the local tendency of a vector field to spread outward or converge.",
                "Curl measures local rotational behavior.",
                "Line integrals accumulate quantities along curves.",
                "Surface integrals accumulate quantities across surfaces and can measure flux.",
                "Green's theorem connects a closed line integral with a double integral over a planar region.",
                "Stokes' theorem connects circulation around a boundary with the surface integral of curl.",
                "The Divergence theorem connects outward flux through a closed surface with divergence throughout the enclosed volume.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#E9E9E6] py-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#18794E]"
                  />

                  <p className="text-sm leading-6 text-[#34404C]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="mt-16">
            <div className="pml-eyebrow">Summary</div>

            <h2 className="pml-section-title mt-3">
              From local derivatives to global behavior
            </h2>

            <p className="pml-prose mt-5">
              Vector calculus provides a unified language for understanding
              quantities that vary throughout space. Gradients describe the
              direction of greatest increase, divergence measures local
              expansion or contraction, and curl describes local rotation.
            </p>

            <p className="pml-prose mt-4">
              Line and surface integrals extend accumulation to curves and
              surfaces, while Green's theorem, Stokes' theorem, and the
              Divergence theorem reveal deep connections between derivatives and
              integrals.
            </p>
          </section>

          {/* Related topics */}
          <section className="mt-16 border-t border-[#DEDEDB] pt-10">
            <div className="pml-eyebrow">Continue learning</div>

            <h2 className="pml-section-title mt-3">Related topics</h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <Link
                to="/learn/multivariable-calculus"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Move3D className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Multivariable Calculus
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review partial derivatives, gradients, directional
                  derivatives, optimization, and multiple integrals.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review multivariable calculus
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/integrals"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Sigma className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">Integrals</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review the foundations of accumulation before working with
                  line and surface integrals.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review integrals
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
                <GitBranch className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Differential Equations
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Explore equations that model changing systems and physical
                  processes.
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
          </section>

          {/* Final CTA */}
          <section className="mt-16 rounded-2xl bg-[#17324D] p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <Compass className="mt-1 shrink-0 text-white" size={22} />

              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Apply the mathematics
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                  Continue through Practical Math Lab to explore calculus
                  applications and numerical methods that turn mathematical
                  concepts into practical calculations.
                </p>

                <Link
                  to="/applications"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Explore Applications
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
