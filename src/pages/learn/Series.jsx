import { Infinity, Sigma } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Series() {
  return (
    <>
      <SEO
        title="Sequences and Series | Calculus"
        description="Learn sequences, infinite series, convergence, divergence, geometric series, convergence tests, Taylor series, and Maclaurin series."
        canonical="/learn/series"
      />

      <PageHeader
        eyebrow="Learn • Series"
        title="Sequences and Infinite Series"
        description="Series allow complicated functions and quantities to be represented through sums of simpler terms."
        icon={Sigma}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Sequences</h2>

          <p>
            A sequence is an ordered list of numbers. Calculus uses sequences to
            study behavior as the number of terms grows.
          </p>

          <MathRenderer block>a₁, a₂, a₃, ..., aₙ</MathRenderer>

          <h2>Infinite series</h2>

          <p>A series adds the terms of a sequence together.</p>

          <MathRenderer block>Σₙ₌₁∞ aₙ</MathRenderer>

          <p>
            An infinite series does not automatically have a finite sum. The key
            question is whether the sequence of partial sums approaches a finite
            value.
          </p>

          <h2>Convergence</h2>

          <p>
            A series converges if its partial sums approach a finite limit. If
            the partial sums fail to approach a finite value, the series
            diverges.
          </p>

          <div className="not-prose my-8 rounded-2xl border border-base-300 bg-base-200/50 p-6">
            <div className="flex items-start gap-4">
              <Infinity className="mt-1 text-primary" />

              <div>
                <h3 className="font-bold">Common convergence tools</h3>

                <ul className="mt-3 space-y-2 text-sm leading-7 text-base-content/65">
                  <li>• Geometric series</li>
                  <li>• Comparison tests</li>
                  <li>• Ratio test</li>
                  <li>• Root test</li>
                  <li>• Integral test</li>
                  <li>• Alternating series test</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Taylor series</h2>

          <p>
            Taylor series represent functions as infinite power series around a
            chosen point.
          </p>

          <MathRenderer block>
            f(x) = Σₙ₌₀∞ [f⁽ⁿ⁾(a) / n!] (x − a)ⁿ
          </MathRenderer>

          <p>
            Taylor expansions are useful for approximation, numerical
            computation, differential equations, and theoretical analysis.
          </p>
        </article>
      </main>
    </>
  );
}
