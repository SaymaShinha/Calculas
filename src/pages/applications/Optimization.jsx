import { CheckCircle2, Target } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Optimization() {
  return (
    <>
      <SEO
        title="Optimization in Calculus | Maximum and Minimum Problems"
        description="Learn how calculus optimization works using critical points, derivatives, constraints, and maximum and minimum values."
        canonical="/applications/optimization"
      />

      <PageHeader
        eyebrow="Application • Optimization"
        title="Optimization with Calculus"
        description="Optimization uses derivatives to determine where a quantity reaches a maximum or minimum."
        icon={Target}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>The basic idea</h2>

          <p>
            Many real-world problems ask for the largest, smallest, fastest,
            cheapest, or most efficient possible result. Calculus provides
            systematic tools for finding such extrema.
          </p>

          <h2>Critical points</h2>

          <p>
            For a differentiable function, interior local extrema often occur at
            points where the derivative is zero.
          </p>

          <MathRenderer block>f'(x) = 0</MathRenderer>

          <p>
            Critical points can also occur where the derivative does not exist.
          </p>

          <h2>A typical optimization workflow</h2>

          <div className="not-prose mt-7 space-y-3">
            {[
              "Define the quantity you want to maximize or minimize.",
              "Express it as a function of one variable when possible.",
              "Determine the valid domain or constraints.",
              "Differentiate the objective function.",
              "Find critical points.",
              "Compare candidate values and endpoints.",
              "Interpret the result in the original problem.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-base-300 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-success" />
                <span className="text-sm leading-6">
                  <strong>{index + 1}.</strong> {item}
                </span>
              </div>
            ))}
          </div>

          <h2>Why constraints matter</h2>

          <p>
            A mathematical maximum may not be physically meaningful. For
            example, dimensions of a box cannot be negative, and a design
            problem may impose limits on material, cost, or available space.
          </p>

          <p>
            Good optimization therefore combines calculus with careful
            interpretation of the original problem.
          </p>
        </article>
      </main>
    </>
  );
}
