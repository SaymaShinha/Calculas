import { Compass, GitBranch, Waves } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function VectorCalculus() {
  return (
    <>
      <SEO
        title="Vector Calculus | Gradient, Divergence, Curl & Integrals"
        description="Learn vector calculus concepts including vector fields, line integrals, surface integrals, gradient, divergence, curl, and major vector calculus theorems."
        canonical="/learn/vector-calculus"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Vector Calculus"
        description="Study how calculus operates on vector fields and how local derivatives connect to global geometric quantities."
        icon={Compass}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Vector fields</h2>

          <p>
            A vector field assigns a vector to each point in a region. Vector
            fields appear naturally in fluid flow, electromagnetism,
            gravitational models, and dynamical systems.
          </p>

          <MathRenderer block>
            F(x,y,z) = ⟨P(x,y,z), Q(x,y,z), R(x,y,z)⟩
          </MathRenderer>

          <h2>Gradient</h2>

          <p>
            The gradient transforms a scalar field into a vector field that
            describes the direction of greatest increase.
          </p>

          <h2>Divergence</h2>

          <MathRenderer block>∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z</MathRenderer>

          <p>
            Divergence measures the net tendency of a vector field to spread
            outward from a point.
          </p>

          <h2>Curl</h2>

          <MathRenderer block>∇ × F</MathRenderer>

          <p>Curl measures local rotational behavior in a vector field.</p>

          <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
            {[
              ["Gradient", Compass],
              ["Divergence", GitBranch],
              ["Curl", Waves],
            ].map(([title, Icon]) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 bg-base-100 p-5"
              >
                <Icon className="text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
              </div>
            ))}
          </div>

          <h2>Major theorems</h2>

          <p>
            Vector calculus includes powerful theorems such as Green's theorem,
            Stokes' theorem, and the Divergence theorem. These results connect
            local derivatives with integrals over curves, surfaces, and volumes.
          </p>
        </article>
      </main>
    </>
  );
}
