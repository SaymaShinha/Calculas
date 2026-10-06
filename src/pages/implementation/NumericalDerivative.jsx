import { Code2, GitBranch } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function NumericalDerivative() {
  return (
    <>
      <SEO
        title="Numerical Derivatives | Finite Difference Methods"
        description="Learn how derivatives can be approximated numerically using forward, backward, and central finite differences."
        canonical="/implementation/numerical-derivative"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Calculus"
        title="Numerical Derivatives"
        description="Learn how a computer can approximate derivatives when an exact symbolic derivative is unavailable or inconvenient."
        icon={GitBranch}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Why approximate derivatives?</h2>

          <p>
            In many computational problems, we may have numerical data rather
            than an explicit formula. Even when a formula exists, a numerical
            derivative can be useful for simulation and algorithms.
          </p>

          <h2>Forward difference</h2>

          <MathRenderer block>f'(x) ≈ [f(x+h) − f(x)] / h</MathRenderer>

          <h2>Backward difference</h2>

          <MathRenderer block>f'(x) ≈ [f(x) − f(x−h)] / h</MathRenderer>

          <h2>Central difference</h2>

          <MathRenderer block>f'(x) ≈ [f(x+h) − f(x−h)] / 2h</MathRenderer>

          <p>
            Central differences are often more accurate than simple one-sided
            approximations for sufficiently smooth functions.
          </p>

          <h2>Step size matters</h2>

          <p>
            Choosing h involves a tradeoff. A large step can introduce
            approximation error because the local behavior is sampled over a
            wider interval. An extremely small step can expose floating-point
            rounding errors.
          </p>

          <div className="not-prose mt-8 rounded-2xl border border-base-300 bg-base-200/50 p-6">
            <Code2 className="text-primary" />

            <h3 className="mt-4 font-bold">Implementation principle</h3>

            <p className="mt-2 text-sm leading-7 text-base-content/65">
              Numerical methods are algorithms. Their accuracy depends not only
              on the mathematical formula but also on implementation details
              such as floating-point arithmetic, step size, and stopping
              conditions.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
