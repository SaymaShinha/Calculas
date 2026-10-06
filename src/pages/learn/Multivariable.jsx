import {
  ArrowRight,
  Box,
  CheckCircle2,
  FunctionSquare,
  Layers,
  Lightbulb,
  Link as LinkIcon,
  Move3D,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Multivariable() {
  return (
    <>
      <SEO
        title="Multivariable Calculus | Partial Derivatives, Gradients & Multiple Integrals"
        description="Learn multivariable calculus from functions of several variables through partial derivatives, gradients, directional derivatives, optimization, and multiple integrals."
        canonical="/learn/multivariable-calculus"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Multivariable Calculus"
        description="Extend calculus from one independent variable to functions involving several variables, and learn how derivatives and integrals describe change in higher dimensions."
      />

      <main className="pml-container pml-section">
        <article className="max-w-4xl">
          {/* Introduction */}
          <section>
            <div className="pml-eyebrow">The big picture</div>

            <h2 className="pml-section-title mt-3">
              Calculus with more than one variable
            </h2>

            <p className="pml-prose mt-5">
              In single-variable calculus, we study functions such as{" "}
              <strong>f(x)</strong>, where one independent variable determines
              the output. Many real systems, however, depend on several
              quantities at the same time.
            </p>

            <p className="pml-prose mt-4">
              Multivariable calculus extends the ideas of limits, derivatives,
              and integrals to functions of two, three, or even many variables.
              It provides the mathematical language used to describe surfaces,
              temperature fields, fluid flow, optimization problems, physical
              systems, and many other applications.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#EEF3FF] p-3 text-[#2F5BEA]">
                  <Layers size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#17202A]">
                    A useful way to think about it
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Single-variable calculus studies change along a line.
                    Multivariable calculus studies change across surfaces,
                    regions, and higher-dimensional spaces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Functions */}
          <section className="mt-16">
            <div className="pml-eyebrow">01 • Functions</div>

            <h2 className="pml-section-title mt-3">
              Functions of several variables
            </h2>

            <p className="pml-prose mt-5">
              A multivariable function takes several inputs and produces an
              output. For example, a function of two variables can be written
              as:
            </p>

            <MathRenderer block>f(x, y) = x² + y²</MathRenderer>

            <p className="pml-prose mt-5">
              Here, both <strong>x</strong> and <strong>y</strong> influence the
              value of the function. Instead of describing a curve in the plane,
              the graph of this function describes a surface in
              three-dimensional space.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Two variables",
                  text: "A function such as f(x, y) can describe a surface.",
                },
                {
                  title: "Three variables",
                  text: "A function such as f(x, y, z) can describe a scalar field.",
                },
                {
                  title: "Many variables",
                  text: "Higher-dimensional functions are important in optimization and modeling.",
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

          {/* Partial derivatives */}
          <section className="mt-16">
            <div className="pml-eyebrow">02 • Derivatives</div>

            <h2 className="pml-section-title mt-3">Partial derivatives</h2>

            <p className="pml-prose mt-5">
              A partial derivative measures how a multivariable function changes
              when one variable changes while the other variables are
              temporarily held constant.
            </p>

            <MathRenderer block>
              ∂f/∂x &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; ∂f/∂y
            </MathRenderer>

            <p className="pml-prose mt-5">Consider:</p>

            <MathRenderer block>f(x, y) = x² + 3xy + y²</MathRenderer>

            <p className="pml-prose mt-5">
              When finding the partial derivative with respect to{" "}
              <strong>x</strong>, treat <strong>y</strong> as a constant:
            </p>

            <MathRenderer block>∂f/∂x = 2x + 3y</MathRenderer>

            <p className="pml-prose mt-5">
              Similarly, when differentiating with respect to <strong>y</strong>
              , treat <strong>x</strong> as constant:
            </p>

            <MathRenderer block>∂f/∂y = 3x + 2y</MathRenderer>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Key idea:</strong> A partial derivative isolates the
                  effect of one variable while temporarily freezing the others.
                </div>
              </div>
            </div>
          </section>

          {/* Gradient */}
          <section className="mt-16">
            <div className="pml-eyebrow">03 • Direction and change</div>

            <h2 className="pml-section-title mt-3">The gradient</h2>

            <p className="pml-prose mt-5">
              The gradient combines the partial derivatives of a scalar function
              into a vector. For a function of three variables:
            </p>

            <MathRenderer block>∇f = ⟨fₓ, fᵧ, f_z⟩</MathRenderer>

            <p className="pml-prose mt-5">
              For a function of two variables, the gradient is:
            </p>

            <MathRenderer block>∇f(x, y) = ⟨∂f/∂x, ∂f/∂y⟩</MathRenderer>

            <p className="pml-prose mt-5">
              At a point where the function is differentiable, the gradient
              points in the direction of greatest local increase. Its magnitude
              describes the rate of increase in that direction.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#EEF3FF] p-3 text-[#2F5BEA]">
                  <Move3D size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#17202A]">
                    Geometric interpretation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Imagine standing on a landscape. The gradient tells you
                    which horizontal direction climbs most steeply upward.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Directional derivatives */}
          <section className="mt-16">
            <div className="pml-eyebrow">04 • Directional derivatives</div>

            <h2 className="pml-section-title mt-3">
              Change in a chosen direction
            </h2>

            <p className="pml-prose mt-5">
              A partial derivative measures change along one coordinate
              direction. A directional derivative generalizes this idea by
              measuring how a function changes in any chosen direction.
            </p>

            <p className="pml-prose mt-4">
              If <strong>u</strong> is a unit vector, the directional derivative
              can be written as:
            </p>

            <MathRenderer block>Dᵤf = ∇f · u</MathRenderer>

            <p className="pml-prose mt-5">
              This connects the gradient with directional change. The dot
              product determines how much of the gradient points in the chosen
              direction.
            </p>
          </section>

          {/* Optimization */}
          <section className="mt-16">
            <div className="pml-eyebrow">05 • Optimization</div>

            <h2 className="pml-section-title mt-3">
              Optimization with several variables
            </h2>

            <p className="pml-prose mt-5">
              Multivariable calculus can be used to find maximum and minimum
              values of functions involving several variables.
            </p>

            <p className="pml-prose mt-4">
              A common starting point is to find critical points by setting the
              relevant first partial derivatives equal to zero:
            </p>

            <MathRenderer block>
              ∂f/∂x = 0
              <br />
              ∂f/∂y = 0
            </MathRenderer>

            <p className="pml-prose mt-5">
              These equations identify points where the surface may have a local
              maximum, local minimum, or saddle point. Further analysis is
              needed to classify the critical point.
            </p>

            <div className="pml-warning mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Important:</strong> A critical point is not
                  automatically a maximum or minimum. It may instead be a saddle
                  point or require additional analysis.
                </div>
              </div>
            </div>
          </section>

          {/* Multiple integrals */}
          <section className="mt-16">
            <div className="pml-eyebrow">06 • Integration</div>

            <h2 className="pml-section-title mt-3">Multiple integrals</h2>

            <p className="pml-prose mt-5">
              Integration also extends naturally to multiple variables. A double
              integral can accumulate a quantity across a two-dimensional
              region:
            </p>

            <MathRenderer block>∬ᵣ f(x, y) dA</MathRenderer>

            <p className="pml-prose mt-5">
              Triple integrals extend the idea to three-dimensional regions:
            </p>

            <MathRenderer block>∭ᵥ f(x, y, z) dV</MathRenderer>

            <p className="pml-prose mt-5">
              Depending on the function and the region, multiple integrals can
              represent volume, mass, charge, probability, average values, and
              other accumulated quantities.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Box,
                  title: "Area and volume",
                  text: "Integrate over regions and three-dimensional domains.",
                },
                {
                  icon: Sigma,
                  title: "Mass",
                  text: "Use density functions to calculate the mass of objects.",
                },
                {
                  icon: FunctionSquare,
                  title: "Probability",
                  text: "Continuous probability distributions can involve multiple integrals.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="pml-card">
                  <Icon size={22} className="text-[#2F5BEA]" />

                  <h3 className="mt-4 font-semibold text-[#17202A]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mt-16">
            <div className="pml-eyebrow">07 • Applications</div>

            <h2 className="pml-section-title mt-3">
              Where multivariable calculus is used
            </h2>

            <p className="pml-prose mt-5">
              Multivariable calculus is important whenever a system depends on
              several changing quantities simultaneously.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Physics",
                  "Motion, fields, energy, fluid flow, and electromagnetism.",
                ],
                [
                  "Engineering",
                  "Design optimization, heat transfer, structural analysis, and control.",
                ],
                [
                  "Economics",
                  "Optimization involving multiple variables and marginal quantities.",
                ],
                [
                  "Computer graphics",
                  "Surfaces, lighting, geometry, and spatial calculations.",
                ],
                [
                  "Machine learning",
                  "Gradients are central to many optimization algorithms.",
                ],
                [
                  "Probability",
                  "Joint distributions and expectations involving several variables.",
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

            <h2 className="pml-section-title mt-3">
              The main ideas to remember
            </h2>

            <div className="mt-8 space-y-3">
              {[
                "A multivariable function depends on two or more independent variables.",
                "Partial derivatives measure change with respect to one variable while holding the others constant.",
                "The gradient collects partial derivatives into a vector.",
                "The gradient points toward the direction of greatest local increase.",
                "Directional derivatives measure change along a chosen direction.",
                "Critical points are important when analyzing multivariable optimization problems.",
                "Double and triple integrals extend accumulation to higher-dimensional regions.",
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
              From curves to surfaces and fields
            </h2>

            <p className="pml-prose mt-5">
              Multivariable calculus generalizes the central ideas of calculus
              to settings where several quantities vary simultaneously. Partial
              derivatives describe individual directions of change, gradients
              describe the combined local behavior of a function, and multiple
              integrals describe accumulation over regions and volumes.
            </p>

            <p className="pml-prose mt-4">
              Once these ideas are understood, they provide the foundation for
              more advanced topics such as vector calculus, constrained
              optimization, and differential equations.
            </p>
          </section>

          {/* Related topics */}
          <section className="mt-16 border-t border-[#DEDEDB] pt-10">
            <div className="pml-eyebrow">Continue learning</div>

            <h2 className="pml-section-title mt-3">Related topics</h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <Link
                to="/learn/derivatives"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <FunctionSquare className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Derivatives
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review the single-variable derivative concepts that lead into
                  partial derivatives.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review derivatives
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/vector-calculus"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Layers className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Vector Calculus
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Continue into vector fields, line integrals, divergence, and
                  curl.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Explore vector calculus
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
                  Review accumulation and integration before studying multiple
                  integrals.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review integrals
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
              <LinkIcon className="mt-1 shrink-0 text-white" size={22} />

              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Ready for the next level?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                  Continue with vector calculus to see how multivariable
                  derivatives and integrals combine to describe vector fields
                  and physical systems.
                </p>

                <Link
                  to="/learn/vector-calculus"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Continue to Vector Calculus
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
