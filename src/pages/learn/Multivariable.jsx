import { Box, FunctionSquare, Layers } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Multivariable() {
  return (
    <>
      <SEO
        title="Multivariable Calculus | Partial Derivatives & Multiple Integrals"
        description="Learn multivariable calculus including functions of several variables, partial derivatives, gradients, directional derivatives, and multiple integrals."
        canonical="/learn/multivariable-calculus"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Multivariable Calculus"
        description="Extend the ideas of calculus from one independent variable to functions involving several variables."
        icon={Layers}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Functions of several variables</h2>

          <p>
            In single-variable calculus, a function often maps one input to one
            output. Multivariable calculus studies functions where several
            independent variables influence the output.
          </p>

          <MathRenderer block>f(x, y) = x² + y²</MathRenderer>

          <h2>Partial derivatives</h2>

          <p>
            A partial derivative measures how a function changes with respect to
            one variable while holding the other variables constant.
          </p>

          <MathRenderer block>
            ∂f/∂x &nbsp;&nbsp; and &nbsp;&nbsp; ∂f/∂y
          </MathRenderer>

          <h2>Gradient</h2>

          <p>The gradient collects the partial derivatives into a vector.</p>

          <MathRenderer block>∇f = ⟨fₓ, fᵧ, f_z⟩</MathRenderer>

          <p>
            The gradient points in the direction of greatest local increase for
            a differentiable scalar field.
          </p>

          <h2>Multiple integrals</h2>

          <p>
            Integration can also be extended to two or more variables. Double
            and triple integrals are used for areas, volumes, mass, probability,
            and physical quantities.
          </p>

          <div className="not-prose mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Partial Derivatives", FunctionSquare],
              ["Gradient", Layers],
              ["Multiple Integrals", Box],
            ].map(([title, Icon]) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 p-5"
              >
                <Icon className="text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
