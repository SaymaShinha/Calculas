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
        description="Learn vector calculus through vector fields, gradients, directional derivatives, line integrals, surface integrals, divergence, curl, Green's theorem, Stokes' theorem, and the Divergence theorem."
        canonical="/learn/vector-calculus"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Vector Calculus"
        description="Learn how calculus extends to vector fields, curves, and surfaces, and how gradient, divergence, curl, line integrals, and surface integrals describe physical and geometric behavior."
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
              Single-variable calculus studies functions whose inputs and
              outputs can be represented along a line. Multivariable calculus
              extends these ideas to functions of several variables. Vector
              calculus builds further by studying vector-valued quantities and
              fields that vary throughout space.
            </p>

            <p className="pml-prose mt-4">
              This provides a unified mathematical language for describing fluid
              velocity, electric and magnetic fields, gravitational fields, heat
              flow, circulation, flux, and many other systems in which both
              magnitude and direction matter.
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
                    Vector calculus connects local properties of fields—such as
                    how they change, spread, or rotate—with global quantities
                    such as circulation, flux, and total accumulation.
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
              space. Each vector has both a magnitude and a direction, allowing
              the field to describe quantities that vary from location to
              location.
            </p>

            <MathRenderer>
              {"\\mathbf{F}(x,y,z)=\\langle P(x,y,z),Q(x,y,z),R(x,y,z)\\rangle"}
            </MathRenderer>

            <p className="pml-prose mt-5">
              For example, a velocity field can assign a velocity vector to
              every point in a moving fluid. At each location, the vector tells
              us how fast the fluid is moving and in which direction.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Velocity",
                  text: "Describes the speed and direction of a moving fluid or object.",
                },
                {
                  title: "Force",
                  text: "Represents forces whose magnitude or direction varies throughout space.",
                },
                {
                  title: "Electric field",
                  text: "Describes the electric force per unit charge at different locations.",
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

            <MathRenderer>
              {
                "\\nabla f=\\left\\langle\\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y},\\frac{\\partial f}{\\partial z}\\right\\rangle"
              }
            </MathRenderer>

            <p className="pml-prose mt-5">
              The gradient points in the direction in which the scalar field
              increases most rapidly. Its magnitude represents the maximum
              instantaneous rate of increase.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <Move3D className="mt-1 shrink-0 text-[#2F5BEA]" size={22} />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    Geometric interpretation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Imagine a landscape whose elevation is represented by
                    <strong> f(x,y)</strong>. The gradient points toward the
                    direction of steepest uphill increase.
                  </p>
                </div>
              </div>
            </div>

            <p className="pml-prose mt-6">
              The gradient is therefore important in optimization, physics,
              engineering, numerical methods, and machine learning, where the
              direction of greatest increase or decrease is often useful.
            </p>
          </section>

          {/* Directional derivative */}
          <section className="mt-16">
            <div className="pml-eyebrow">03 • Directional derivatives</div>

            <h2 className="pml-section-title mt-3">
              Measuring change in a chosen direction
            </h2>

            <p className="pml-prose mt-5">
              Partial derivatives describe change along coordinate directions.
              But in many applications, we need to know how a scalar field
              changes while moving in an arbitrary direction.
            </p>

            <p className="pml-prose mt-4">
              If <strong>u</strong> is a unit vector, the directional derivative
              is:
            </p>

            <MathRenderer>
              {"D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}"}
            </MathRenderer>

            <p className="pml-prose mt-5">
              The dot product determines how much of the gradient lies in the
              chosen direction. When the direction agrees with the gradient, the
              rate of increase is greatest.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Gradient",
                  text: "Points toward the direction of greatest increase.",
                },
                {
                  title: "Unit vector",
                  text: "Specifies the direction in which movement occurs.",
                },
                {
                  title: "Directional derivative",
                  text: "Measures the rate of change along that direction.",
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

          {/* Line integrals */}
          <section className="mt-16">
            <div className="pml-eyebrow">04 • Line integrals</div>

            <h2 className="pml-section-title mt-3">
              Integrating along a curve
            </h2>

            <p className="pml-prose mt-5">
              A line integral accumulates a quantity along a curve rather than
              across a straight interval. For a scalar field, a common form is:
            </p>

            <MathRenderer>{"\\int_C f\\,ds"}</MathRenderer>

            <p className="pml-prose mt-5">
              For a vector field, an important line integral is:
            </p>

            <MathRenderer>
              {"\\int_C \\mathbf{F}\\cdot d\\mathbf{r}"}
            </MathRenderer>

            <p className="pml-prose mt-5">
              This measures how strongly the vector field acts in the direction
              of travel along the curve. In mechanics, the line integral of a
              force field is closely related to the work done by that force.
            </p>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Key idea:</strong> A line integral accumulates
                  information along a path. For a vector field, the direction of
                  the path relative to the field matters.
                </div>
              </div>
            </div>
          </section>

          {/* Divergence */}
          <section className="mt-16">
            <div className="pml-eyebrow">05 • Divergence</div>

            <h2 className="pml-section-title mt-3">
              Measuring local expansion and contraction
            </h2>

            <p className="pml-prose mt-5">
              Divergence measures the net tendency of a vector field to spread
              outward from a point or converge toward it.
            </p>

            <MathRenderer>
              {
                "\\nabla\\cdot\\mathbf{F}=\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}"
              }
            </MathRenderer>

            <p className="pml-prose mt-5">
              Positive divergence indicates local net outward behavior, while
              negative divergence indicates local net inward behavior. A zero
              divergence means there is no net local expansion or contraction.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Positive",
                  text: "The field behaves locally like a source, with net outward flow.",
                },
                {
                  title: "Negative",
                  text: "The field behaves locally like a sink, with net inward flow.",
                },
                {
                  title: "Zero",
                  text: "There is no net local expansion or contraction.",
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
            <div className="pml-eyebrow">06 • Curl</div>

            <h2 className="pml-section-title mt-3">Measuring local rotation</h2>

            <p className="pml-prose mt-5">
              Curl measures the local tendency of a vector field to produce
              rotational behavior around a point.
            </p>

            <MathRenderer>{"\\nabla\\times\\mathbf{F}"}</MathRenderer>

            <p className="pml-prose mt-5">For:</p>

            <MathRenderer>{"\\mathbf{F}=\\langle P,Q,R\\rangle"}</MathRenderer>

            <p className="pml-prose mt-5">the curl is:</p>

            <MathRenderer>
              {
                "\\nabla\\times\\mathbf{F}=\\left\\langle\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z},\\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x},\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right\\rangle"
              }
            </MathRenderer>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <Waves className="mt-1 shrink-0 text-[#2F5BEA]" size={22} />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    Physical intuition
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Imagine placing a tiny paddle wheel inside a flowing fluid.
                    Curl describes the field's local tendency to make that wheel
                    rotate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Surface integrals */}
          <section className="mt-16">
            <div className="pml-eyebrow">07 • Surface integrals</div>

            <h2 className="pml-section-title mt-3">
              Integrating across surfaces
            </h2>

            <p className="pml-prose mt-5">
              Surface integrals extend integration from curves and planar
              regions to surfaces embedded in three-dimensional space.
            </p>

            <p className="pml-prose mt-4">
              A scalar surface integral has the form:
            </p>

            <MathRenderer>{"\\iint_S f\\,dS"}</MathRenderer>

            <p className="pml-prose mt-5">
              A vector surface integral can measure the flux of a vector field
              through a surface:
            </p>

            <MathRenderer>
              {"\\iint_S \\mathbf{F}\\cdot\\mathbf{n}\\,dS"}
            </MathRenderer>

            <p className="pml-prose mt-5">
              Here, <strong>n</strong> is a chosen unit normal vector. The dot
              product selects the component of the field passing through the
              surface.
            </p>

            <div className="pml-card mt-8">
              <h3 className="font-semibold text-[#17202A]">
                Flux interpretation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Flux measures how much of a vector field passes through a
                surface. The orientation of the surface matters because the
                normal direction determines which side is considered positive.
              </p>
            </div>
          </section>

          {/* Green's theorem */}
          <section className="mt-16">
            <div className="pml-eyebrow">08 • Green's theorem</div>

            <h2 className="pml-section-title mt-3">
              Connecting a region to its boundary
            </h2>

            <p className="pml-prose mt-5">
              Green's theorem connects a line integral around a positively
              oriented closed curve with a double integral over the planar
              region enclosed by that curve.
            </p>

            <MathRenderer>
              {
                "\\oint_C P\\,dx+Q\\,dy=\\iint_R\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dA"
              }
            </MathRenderer>

            <p className="pml-prose mt-5">
              The theorem provides two ways to approach the same mathematical
              quantity: integrate around the boundary or integrate across the
              region.
            </p>

            <div className="pml-card mt-8">
              <h3 className="font-semibold text-[#17202A]">Why this matters</h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                A difficult line integral can sometimes be converted into a
                simpler double integral, while a complicated region integral may
                sometimes be replaced by an easier boundary calculation.
              </p>
            </div>
          </section>

          {/* Stokes */}
          <section className="mt-16">
            <div className="pml-eyebrow">09 • Stokes' theorem</div>

            <h2 className="pml-section-title mt-3">
              Connecting curl and circulation
            </h2>

            <p className="pml-prose mt-5">
              Stokes' theorem generalizes the central idea of Green's theorem to
              oriented surfaces in three-dimensional space.
            </p>

            <MathRenderer>
              {
                "\\oint_C \\mathbf{F}\\cdot d\\mathbf{r}=\\iint_S(\\nabla\\times\\mathbf{F})\\cdot\\mathbf{n}\\,dS"
              }
            </MathRenderer>

            <p className="pml-prose mt-5">
              The circulation of a vector field around the boundary of a surface
              equals the flux of its curl through that surface, provided the
              orientations are consistent.
            </p>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Connection:</strong> Stokes' theorem turns local
                  rotational information, represented by curl, into a global
                  circulation measured around a boundary.
                </div>
              </div>
            </div>
          </section>

          {/* Divergence theorem */}
          <section className="mt-16">
            <div className="pml-eyebrow">10 • Divergence theorem</div>

            <h2 className="pml-section-title mt-3">
              Connecting volume and surface flux
            </h2>

            <p className="pml-prose mt-5">
              The Divergence theorem relates the total outward flux through a
              closed surface to the integral of divergence throughout the volume
              enclosed by that surface.
            </p>

            <MathRenderer>
              {
                "\\iint_S \\mathbf{F}\\cdot\\mathbf{n}\\,dS=\\iiint_V(\\nabla\\cdot\\mathbf{F})\\,dV"
              }
            </MathRenderer>

            <p className="pml-prose mt-5">
              This can be especially useful when calculating flux directly
              across a complicated closed surface is difficult, but the
              divergence inside the enclosed volume is easier to integrate.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <Sigma className="mt-1 shrink-0 text-[#2F5BEA]" size={22} />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    The key relationship
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Local divergence throughout a volume determines the total
                    outward flux across its closed boundary.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Three operators */}
          <section className="mt-16">
            <div className="pml-eyebrow">11 • Core operators</div>

            <h2 className="pml-section-title mt-3">
              Gradient, divergence, and curl
            </h2>

            <p className="pml-prose mt-5">
              Gradient, divergence, and curl are three fundamental differential
              operators in vector calculus. They operate on fields in different
              ways and answer different questions.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Compass,
                  title: "Gradient",
                  formula: "\\nabla f",
                  text: "Takes a scalar field and produces a vector field showing the direction of greatest increase.",
                },
                {
                  icon: GitBranch,
                  title: "Divergence",
                  formula: "\\nabla\\cdot\\mathbf{F}",
                  text: "Produces a scalar measuring the local net outward or inward behavior of a vector field.",
                },
                {
                  icon: Waves,
                  title: "Curl",
                  formula: "\\nabla\\times\\mathbf{F}",
                  text: "Produces a vector describing the local rotational tendency of a vector field.",
                },
              ].map(({ icon: Icon, title, formula, text }) => (
                <div key={title} className="pml-card">
                  <Icon size={22} className="text-[#2F5BEA]" />

                  <h3 className="mt-4 font-semibold text-[#17202A]">{title}</h3>

                  <div className="mt-3 rounded-md bg-[#F8F7F4] px-3 py-2">
                    <MathRenderer inline>{formula}</MathRenderer>
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
            <div className="pml-eyebrow">12 • Applications</div>

            <h2 className="pml-section-title mt-3">
              Where vector calculus is used
            </h2>

            <p className="pml-prose mt-5">
              Vector calculus is particularly valuable when quantities vary
              throughout space and have directional behavior.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Fluid dynamics",
                  "Describe velocity fields, circulation, flow, sources, sinks, and conservation laws.",
                ],
                [
                  "Electromagnetism",
                  "Model electric and magnetic fields and their spatial relationships.",
                ],
                [
                  "Gravitation",
                  "Represent gravitational fields and analyze forces throughout space.",
                ],
                [
                  "Heat transfer",
                  "Study temperature fields and the movement of thermal energy.",
                ],
                [
                  "Engineering",
                  "Analyze spatially varying forces, fields, fluxes, and physical systems.",
                ],
                [
                  "Physics",
                  "Express laws involving fields, forces, conservation, and continuous systems.",
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

          {/* Practical workflow */}
          <section className="mt-16">
            <div className="pml-eyebrow">Problem-solving workflow</div>

            <h2 className="pml-section-title mt-3">
              A practical way to approach vector calculus problems
            </h2>

            <p className="pml-prose mt-5">
              Vector calculus problems can look complicated because they combine
              geometry, differentiation, integration, and orientation. A
              structured workflow makes them easier to analyze.
            </p>

            <div className="mt-8 space-y-3">
              {[
                [
                  "1",
                  "Identify the mathematical object.",
                  "Determine whether the problem involves a scalar field, vector field, curve, surface, or volume.",
                ],
                [
                  "2",
                  "Identify what is being measured.",
                  "Decide whether the goal is a rate of change, circulation, flux, accumulation, or another quantity.",
                ],
                [
                  "3",
                  "Choose the appropriate operator or integral.",
                  "Use gradient, divergence, curl, line integrals, surface integrals, or volume integrals as appropriate.",
                ],
                [
                  "4",
                  "Check orientation and domain.",
                  "Pay attention to curve direction, surface normals, boundaries, and the region over which the calculation is performed.",
                ],
                [
                  "5",
                  "Simplify before calculating.",
                  "Use theorems or coordinate changes when they turn a difficult calculation into a simpler equivalent one.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex gap-4 border-b border-[#E9E9E6] py-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] text-sm font-semibold text-[#2F5BEA]">
                    {number}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#17202A]">{title}</h3>

                    <p className="mt-1 text-sm leading-6 text-[#687481]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important idea */}
          <section className="mt-16">
            <div className="pml-card bg-[#F8F7F4]">
              <div className="flex items-start gap-4">
                <Lightbulb className="mt-1 shrink-0 text-[#2F5BEA]" size={22} />

                <div>
                  <div className="pml-eyebrow">Important idea</div>

                  <h2 className="mt-3 text-xl font-semibold text-[#17202A]">
                    Local information can determine global behavior
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    One of the deepest ideas in vector calculus is the
                    relationship between local derivatives and global integrals.
                    Divergence describes local expansion, curl describes local
                    rotation, and the major integral theorems connect these
                    local properties with quantities measured along boundaries,
                    across surfaces, or throughout volumes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core concepts */}
          <section className="mt-16">
            <div className="pml-eyebrow">Core concepts</div>

            <h2 className="pml-section-title mt-3">What to remember</h2>

            <div className="mt-8 space-y-3">
              {[
                "A vector field assigns a vector to every point in a region.",
                "The gradient of a scalar field points in the direction of greatest local increase.",
                "A directional derivative measures change in a specified direction.",
                "Divergence measures the local tendency of a vector field to spread outward or converge.",
                "Curl measures local rotational behavior.",
                "Line integrals accumulate quantities along curves.",
                "Surface integrals accumulate quantities across surfaces and can measure flux.",
                "Green's theorem connects a closed line integral with a double integral over a planar region.",
                "Stokes' theorem connects circulation around a boundary with the surface integral of curl.",
                "The Divergence theorem connects outward flux through a closed surface with divergence throughout the enclosed volume.",
                "Orientation, boundaries, and normal directions are essential when evaluating vector-calculus integrals.",
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
              From local fields to global quantities
            </h2>

            <p className="pml-prose mt-5">
              Vector calculus provides a unified framework for studying
              quantities that vary throughout space. The gradient describes the
              direction of greatest increase, divergence measures local
              expansion or contraction, and curl describes local rotation.
            </p>

            <p className="pml-prose mt-4">
              Line and surface integrals extend accumulation to curves and
              surfaces. Green's theorem, Stokes' theorem, and the Divergence
              theorem then connect local derivatives with global quantities
              measured along boundaries, across surfaces, and throughout
              volumes.
            </p>

            <p className="pml-prose mt-4">
              Together, these ideas form an important mathematical foundation
              for physics, engineering, fluid mechanics, electromagnetism,
              numerical modeling, and many other fields.
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
                  Review accumulation and definite integrals before working with
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
