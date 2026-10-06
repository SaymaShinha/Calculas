import { AreaChart, Code2 } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function NumericalIntegration() {
  return (
    <>
      <SEO
        title="Numerical Integration | Trapezoidal & Simpson Methods"
        description="Learn how definite integrals can be approximated numerically using rectangular sums, the trapezoidal rule, and Simpson's rule."
        canonical="/implementation/numerical-integration"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Calculus"
        title="Numerical Integration"
        description="Learn how computers approximate definite integrals using weighted sums of function values."
        icon={AreaChart}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Why numerical integration?</h2>

          <p>
            Some functions do not have elementary antiderivatives. Numerical
            integration allows us to approximate the definite integral anyway.
          </p>

          <h2>Rectangular approximation</h2>

          <p>
            The simplest idea is to divide an interval into small pieces and
            approximate the area using rectangles.
          </p>

          <MathRenderer block>∫ₐᵇ f(x) dx ≈ Σ f(xᵢ) Δx</MathRenderer>

          <h2>Trapezoidal rule</h2>

          <p>
            Instead of rectangles, the trapezoidal rule approximates each
            section using a trapezoid.
          </p>

          <MathRenderer block>
            ∫ₐᵇ f(x) dx ≈ (h/2)[f(x₀) + 2Σf(xᵢ) + f(xₙ)]
          </MathRenderer>

          <h2>Simpson's rule</h2>

          <p>
            Simpson's rule uses quadratic approximations and often provides
            excellent accuracy for smooth functions.
          </p>

          <div className="not-prose my-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <Code2 className="text-primary" />

            <h3 className="mt-4 font-bold">
              Numerical versus symbolic integration
            </h3>

            <p className="mt-2 text-sm leading-7 text-base-content/65">
              Symbolic integration attempts to find an exact antiderivative.
              Numerical integration instead estimates the definite integral from
              sampled function values.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
