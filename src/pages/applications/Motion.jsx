import { Car, Gauge, Timer } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Motion() {
  return (
    <>
      <SEO
        title="Calculus and Motion | Position, Velocity & Acceleration"
        description="Learn how derivatives and integrals connect position, velocity, acceleration, and distance in motion problems."
        canonical="/applications/motion"
      />

      <PageHeader
        eyebrow="Application • Motion"
        title="Calculus and Motion"
        description="Derivatives and integrals provide a natural mathematical language for describing moving objects."
        icon={Car}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>Position, velocity, and acceleration</h2>

          <p>
            Suppose the position of an object is represented by s(t), where t is
            time. Differentiation connects position to velocity and
            acceleration.
          </p>

          <MathRenderer block>v(t) = s'(t)</MathRenderer>

          <MathRenderer block>a(t) = v'(t) = s''(t)</MathRenderer>

          <h2>Velocity describes instantaneous motion</h2>

          <p>
            Velocity is the instantaneous rate of change of position. A positive
            velocity means position is increasing, while a negative velocity
            means position is decreasing relative to the chosen coordinate
            direction.
          </p>

          <h2>Acceleration describes changing velocity</h2>

          <p>
            Acceleration measures how velocity changes with time. An object can
            have positive velocity and negative acceleration, or negative
            velocity and positive acceleration.
          </p>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Position", "Where the object is", Timer],
              ["Velocity", "How position changes", Gauge],
              ["Acceleration", "How velocity changes", Car],
            ].map(([title, description, Icon]) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 p-5"
              >
                <Icon className="text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-base-content/60">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <h2>Integration reverses the process</h2>

          <p>
            If velocity is known, integrating velocity over a time interval
            gives the corresponding change in position.
          </p>

          <MathRenderer block>s(b) − s(a) = ∫ₐᵇ v(t) dt</MathRenderer>

          <p>
            This connection between derivatives and integrals is one of the most
            important practical uses of calculus.
          </p>
        </article>
      </main>
    </>
  );
}
