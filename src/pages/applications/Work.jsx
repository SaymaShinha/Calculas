import { Hammer, MoveRight } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Work() {
  return (
    <>
      <SEO
        title="Work and Integration | Calculus Application"
        description="Learn how integration calculates work when force varies with position."
        canonical="/applications/work"
      />

      <PageHeader
        eyebrow="Application • Work"
        title="Work and Variable Forces"
        description="Integration allows us to calculate work when the force acting on an object changes with position."
        icon={Hammer}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Constant force</h2>

          <p>
            For a constant force acting in the direction of motion, work can be
            calculated using the familiar product of force and displacement.
          </p>

          <MathRenderer block>W = Fd</MathRenderer>

          <h2>Variable force</h2>

          <p>
            When force changes with position, the simple formula is no longer
            sufficient. Instead, the motion can be divided into small intervals
            where the force is approximately constant.
          </p>

          <MathRenderer block>W = ∫ₐᵇ F(x) dx</MathRenderer>

          <h2>Why integration appears</h2>

          <p>
            Each small contribution to work is approximately force multiplied by
            a small displacement. Adding infinitely many contributions produces
            the integral.
          </p>

          <div className="not-prose my-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <MoveRight className="text-primary" />
              <h3 className="font-bold">The key idea</h3>
            </div>

            <p className="mt-3 text-sm leading-7 text-base-content/65">
              Whenever the amount contributed by each small interval depends on
              position, time, or another continuously changing variable,
              integration provides a natural accumulation mechanism.
            </p>
          </div>

          <h2>Applications beyond mechanics</h2>

          <p>
            Similar accumulation ideas appear in economics, engineering,
            probability, fluid mechanics, and many other fields.
          </p>
        </article>
      </main>
    </>
  );
}
