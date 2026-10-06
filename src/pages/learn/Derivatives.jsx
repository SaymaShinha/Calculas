import { ArrowRight, Infinity, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Limits() {
  return (
    <>
      <SEO
        title="Limits in Calculus | Definition, Examples & Applications"
        description="Learn what limits mean, how to evaluate limits, one-sided limits, limits at infinity, continuity, and why limits are fundamental to calculus."
        canonical="/learn/limits"
      />

      <PageHeader
        eyebrow="Learn • Limits"
        title="Understanding Limits"
        description="Limits describe the behavior of a function as its input approaches a particular value, even when the function is not evaluated exactly at that value."
        icon={Infinity}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>What does a limit mean?</h2>

          <p>
            A limit asks what value a function approaches as its input gets
            closer and closer to a particular number.
          </p>

          <MathRenderer block>lim x→a f(x) = L</MathRenderer>

          <p>
            This notation means that as x approaches a, the values of f(x)
            approach L.
          </p>

          <h2>Why are limits important?</h2>

          <p>
            Limits provide the foundation for several major ideas in calculus.
            Derivatives are defined using limits, and definite integrals can be
            understood through limits of sums.
          </p>

          <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
            {[
              ["Derivatives", "Instantaneous rate of change"],
              ["Continuity", "Understanding uninterrupted behavior"],
              ["Integrals", "Limits of accumulated sums"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 p-5"
              >
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <h2>Direct substitution</h2>

          <p>
            When a function is continuous at a point, a limit can often be
            evaluated through direct substitution.
          </p>

          <MathRenderer block>lim x→2 (x² + 3x) = 10</MathRenderer>

          <h2>One-sided limits</h2>

          <p>
            Sometimes the behavior from the left and right must be examined
            separately.
          </p>

          <MathRenderer block>
            lim x→a⁻ f(x) &nbsp;&nbsp; and &nbsp;&nbsp; lim x→a⁺ f(x)
          </MathRenderer>

          <p>
            A two-sided limit exists only when the left-hand and right-hand
            limits agree.
          </p>

          <div className="not-prose my-8 rounded-2xl border border-warning/20 bg-warning/5 p-6">
            <div className="flex gap-4">
              <Lightbulb className="mt-1 shrink-0 text-warning" />

              <div>
                <h3 className="font-bold">Important distinction</h3>

                <p className="mt-2 text-sm leading-7 text-base-content/65">
                  A function can have a limit at a point even if the function
                  itself is undefined at that point. The limit describes nearby
                  behavior, not necessarily the value at the point.
                </p>
              </div>
            </div>
          </div>

          <h2>Continuity</h2>

          <p>
            Informally, a function is continuous at a point when its nearby
            behavior connects smoothly to its value at that point.
          </p>

          <p>
            Limits therefore provide the language needed to define continuity
            precisely.
          </p>

          <h2>Next step: derivatives</h2>

          <p>
            The derivative takes the idea of rate of change and makes it
            instantaneous. Its definition comes directly from a limit.
          </p>

          <div className="not-prose mt-8">
            <Link to="/learn/derivatives" className="btn btn-primary">
              Continue to Derivatives
              <ArrowRight size={17} />
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
