import { Activity, GitBranch, Sigma } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function DifferentialEquations() {
  return (
    <>
      <SEO
        title="Differential Equations | Introduction & Calculus"
        description="Learn the foundations of differential equations, including ordinary differential equations, initial conditions, first-order equations, and modeling."
        canonical="/learn/differential-equations"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Differential Equations"
        description="Differential equations describe relationships involving an unknown function and its derivatives."
        icon={Activity}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>What is a differential equation?</h2>

          <p>
            A differential equation contains an unknown function and one or more
            of its derivatives. Instead of solving directly for a number, we
            seek a function that satisfies the equation.
          </p>

          <MathRenderer block>dy/dx = ky</MathRenderer>

          <p>
            This simple equation appears in models of exponential growth and
            decay.
          </p>

          <h2>Ordinary differential equations</h2>

          <p>
            An ordinary differential equation involves derivatives with respect
            to a single independent variable.
          </p>

          <h2>Initial conditions</h2>

          <p>
            A differential equation may have many solutions. An initial
            condition can identify a particular solution.
          </p>

          <MathRenderer block>y(0) = y₀</MathRenderer>

          <h2>Applications</h2>

          <div className="not-prose mt-7 grid gap-4 sm:grid-cols-2">
            {[
              ["Population models", "Growth and decay"],
              ["Motion", "Position, velocity, acceleration"],
              ["Circuits", "Electrical system models"],
              ["Heat transfer", "Temperature evolution"],
              ["Fluid dynamics", "Flow and transport"],
              ["Control systems", "Dynamic system behavior"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 p-5"
              >
                <GitBranch className="text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-base-content/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
