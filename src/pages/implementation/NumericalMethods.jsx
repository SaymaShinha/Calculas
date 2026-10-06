import { Cpu, GitBranch, Settings2 } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

export default function NumericalMethods() {
  return (
    <>
      <SEO
        title="Numerical Methods in Mathematics | Practical Math Lab"
        description="Understand numerical methods, approximation, error, convergence, iteration, and how mathematical algorithms are implemented computationally."
        canonical="/implementation/numerical-methods"
      />

      <PageHeader
        eyebrow="Implementation"
        title="Numerical Methods"
        description="Numerical mathematics turns continuous mathematical problems into algorithms that computers can execute."
        icon={Cpu}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>What are numerical methods?</h2>

          <p>
            Numerical methods are algorithms for obtaining approximate solutions
            to mathematical problems. They are particularly useful when an exact
            analytical solution is unavailable, complicated, or computationally
            impractical.
          </p>

          <h2>Approximation and error</h2>

          <p>
            Numerical answers are generally accompanied by some degree of error.
            Understanding and controlling that error is a central part of
            numerical analysis.
          </p>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Accuracy", "How close is the result to the exact value?"],
              ["Precision", "How finely can values be represented?"],
              ["Stability", "Does the algorithm behave reliably?"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 p-5"
              >
                <Settings2 className="text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <h2>Common numerical techniques</h2>

          <ul>
            <li>Finite differences</li>
            <li>Numerical integration</li>
            <li>Root-finding algorithms</li>
            <li>Interpolation</li>
            <li>Numerical solutions of differential equations</li>
            <li>Iterative optimization</li>
          </ul>

          <h2>Why this matters</h2>

          <p>
            Modern scientific computing relies heavily on numerical methods.
            Engineering simulations, weather models, graphics, machine learning,
            physics, and financial modeling all depend on numerical algorithms.
          </p>
        </article>
      </main>
    </>
  );
}
