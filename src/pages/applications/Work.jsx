import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Lightbulb,
  MoveRight,
  Ruler,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const workIdeas = [
  {
    title: "Force",
    description:
      "A force is a push or pull that can change the motion of an object. In a simple model, force may be constant or may depend on position.",
    icon: MoveRight,
  },
  {
    title: "Displacement",
    description:
      "Work is associated with displacement in the direction of the force. The distance traveled alone does not determine the amount of work.",
    icon: Ruler,
  },
  {
    title: "Accumulation",
    description:
      "When force varies continuously, integration adds the small amounts of work produced over many small displacement intervals.",
    icon: Sigma,
  },
];

const applications = [
  {
    title: "Springs",
    description:
      "The force required to stretch or compress a spring generally changes with displacement, making integration useful for calculating the work required.",
  },
  {
    title: "Lifting objects",
    description:
      "When an object's weight is effectively constant, work can be modeled using force multiplied by displacement.",
  },
  {
    title: "Pumping fluids",
    description:
      "The force needed to move fluid can vary with height, distance, or the amount of fluid being moved.",
  },
  {
    title: "Engineering",
    description:
      "Variable-force models help engineers calculate energy requirements in mechanical systems and physical processes.",
  },
  {
    title: "Mechanical systems",
    description:
      "Work calculations provide a way to connect forces acting through displacement with energy transferred by a system.",
  },
  {
    title: "Energy analysis",
    description:
      "Work is closely related to energy transfer, making integral models useful in studying changing physical systems.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Identify the force",
    description:
      "Determine how the force depends on position and identify the function F(x).",
  },
  {
    number: "02",
    title: "Choose the interval",
    description:
      "Determine the starting and ending positions, a and b, over which the object moves.",
  },
  {
    number: "03",
    title: "Model a small contribution",
    description:
      "Over a small displacement Δx, the work is approximately F(x)Δx.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Take the limit of the accumulated small contributions to obtain the total work.",
  },
];

export default function Work() {
  return (
    <>
      <SEO
        title="Work and Integration | Variable Force in Calculus"
        description="Learn how calculus uses definite integrals to calculate work when force varies with position. Understand constant and variable forces, work-energy ideas, springs, pumping fluids, and worked examples."
        canonical="/applications/work"
      />

      <PageHeader
        eyebrow="Application • Work"
        title="Work and Variable Forces"
        description="Learn how integration calculates work when the force acting on an object changes with position, and understand why work is naturally modeled as an accumulated quantity."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="pml-prose">
                <div className="pml-eyebrow">The central idea</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What does work mean in calculus?
                </h2>

                <p className="mt-5">
                  In mechanics, work describes the energy transferred when a
                  force acts through a displacement. When the force remains
                  constant and acts in the direction of motion, the calculation
                  is straightforward.
                </p>

                <p>
                  Real systems, however, often involve forces that change as an
                  object moves. A spring becomes harder to stretch, a fluid may
                  require different lifting forces at different heights, and
                  other physical systems can produce position-dependent forces.
                </p>

                <p>
                  Calculus handles these situations by dividing the motion into
                  small pieces and accumulating the work done over each piece.
                  This is exactly the role of a definite integral.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#17324d] text-white">
                    <Hammer size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Core relationship
                    </p>

                    <p className="text-xs text-slate-500">
                      Force accumulated over displacement
                    </p>
                  </div>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"W = \\int_a^b F(x)\\,dx"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Here, <strong>F(x)</strong> is the force as a function of
                  position, while <strong>a</strong> and <strong>b</strong>{" "}
                  describe the starting and ending positions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three ideas */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Three ingredients</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Work connects force, displacement, and accumulation.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Understanding these three ideas makes the transition from the
                elementary work formula to integration much more natural.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {workIdeas.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="pml-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Constant force */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">01 · Constant force</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  The familiar work formula
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  If a constant force acts in the direction of displacement,
                  every part of the motion experiences the same force. The work
                  is therefore the product of force and displacement.
                </p>
              </div>

              <div>
                <div className="pml-formula">
                  <MathRenderer>{"W = Fd"}</MathRenderer>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      symbol: "W",
                      title: "Work",
                      description: "Energy transferred by the force.",
                    },
                    {
                      symbol: "F",
                      title: "Force",
                      description: "The constant force acting on the object.",
                    },
                    {
                      symbol: "d",
                      title: "Displacement",
                      description: "The distance moved in the force direction.",
                    },
                  ].map((item) => (
                    <div
                      key={item.symbol}
                      className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-5"
                    >
                      <div className="font-mono text-lg font-bold text-[#17324d]">
                        {item.symbol}
                      </div>

                      <h3 className="mt-2 text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pml-prose mt-7">
                  <p>
                    In SI units, force is measured in newtons and displacement
                    in meters. Therefore, work is measured in newton-meters,
                    which is called a <strong>joule</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variable force */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">02 · Variable force</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What changes when force depends on position?
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  Suppose the force is not constant but instead depends on the
                  object's position. We can represent it by a function{" "}
                  <strong>F(x)</strong>.
                </p>

                <p>
                  The formula <strong>W = Fd</strong> can no longer use one
                  single force value for the entire motion. Instead, we consider
                  a very small displacement where the force changes very little.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Small displacement",
                  formula: "\\Delta W \\approx F(x)\\Delta x",
                  description:
                    "Over a sufficiently small interval, the force can be treated as approximately constant.",
                },
                {
                  number: "02",
                  title: "Add the contributions",
                  formula: "W \\approx \\sum_{i=1}^{n} F(x_i)\\Delta x",
                  description:
                    "Adding the work from many small intervals gives an approximation to the total work.",
                },
                {
                  number: "03",
                  title: "Take the limit",
                  formula:
                    "W = \\lim_{n\\to\\infty}\\sum_{i=1}^{n}F(x_i)\\Delta x",
                  description:
                    "As the intervals become arbitrarily small, the sum becomes a definite integral.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <span className="font-mono text-xs font-bold text-blue-700">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-base font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <div className="pml-formula mt-5">
                    <MathRenderer>{step.formula}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why integration */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">03 · Why integration appears</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Work is an accumulation problem.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  The integral is designed to accumulate continuously changing
                  quantities. For variable force, it accumulates small amounts
                  of work across the displacement interval.
                </p>
              </div>

              <div>
                <div className="rounded-xl border border-slate-200 bg-white p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Fundamental model
                  </p>

                  <div className="pml-formula mt-5">
                    <MathRenderer>{"W = \\int_a^b F(x)\\,dx"}</MathRenderer>
                  </div>

                  <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                    {[
                      ["F(x)", "Force at position x."],
                      ["dx", "An infinitesimally small displacement."],
                      ["a", "Starting position."],
                      ["b", "Ending position."],
                      ["W", "Total work over the interval."],
                    ].map(([symbol, description]) => (
                      <div
                        key={symbol}
                        className="grid gap-2 py-4 sm:grid-cols-[90px_1fr]"
                      >
                        <code className="font-mono text-sm font-bold text-[#17324d]">
                          {symbol}
                        </code>

                        <p className="text-sm leading-6 text-slate-600">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex gap-4">
                    <Lightbulb
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        The key connection
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        The same accumulation principle appears in area,
                        distance traveled, fluid volume, and many other
                        applications of definite integrals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked example</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Calculating work from a variable force
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Suppose an object moves from position 0 to position 3 meters
                under a force given by:
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>{"F(x) = 2x + 1"}</MathRenderer>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Identify the force",
                  formula: "F(x) = 2x + 1",
                },
                {
                  number: "02",
                  title: "Set the interval",
                  formula: "0 \\le x \\le 3",
                },
                {
                  number: "03",
                  title: "Write the integral",
                  formula: "W = \\int_0^3 (2x+1)\\,dx",
                },
                {
                  number: "04",
                  title: "Evaluate",
                  formula: "W = [x^2+x]_0^3 = 12\\text{ J}",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <span className="font-mono text-xs font-bold text-blue-700">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <div className="pml-formula mt-4">
                    <MathRenderer>{step.formula}</MathRenderer>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#b9e4ce] bg-[#eef9f3] p-6">
              <div className="flex gap-4">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#18794e]"
                />

                <div>
                  <p className="font-bold text-slate-900">Interpretation</p>

                  <div className="mt-3">
                    <MathRenderer>{"W = 12\\text{ J}"}</MathRenderer>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The integral accumulates the changing force over the entire
                    3-meter displacement. The resulting work is 12 joules under
                    the assumptions of this one-dimensional model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direction and sign */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Interpreting the sign</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Positive and negative work
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Work is not determined only by how large the force is. Its
                  direction relative to displacement also matters.
                </p>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {[
                  [
                    "W > 0",
                    "The force contributes energy to the motion in the modeled direction.",
                  ],
                  [
                    "W < 0",
                    "The force removes energy from the motion or acts opposite the displacement.",
                  ],
                  ["W = 0", "The net work over the interval is zero."],
                ].map(([formula, description]) => (
                  <div
                    key={formula}
                    className="grid gap-3 py-6 sm:grid-cols-[110px_1fr]"
                  >
                    <code className="font-mono text-sm font-bold text-[#17324d]">
                      {formula}
                    </code>

                    <p className="text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work and energy */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Work and energy</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Work provides a bridge to energy.
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  Work is closely connected to the transfer of mechanical
                  energy. When a net force does work on an object, the object's
                  kinetic energy can change.
                </p>

                <p>
                  This relationship is expressed by the work-energy theorem.
                </p>
              </div>
            </div>

            <div className="mt-8 max-w-2xl">
              <div className="pml-formula">
                <MathRenderer>{"W_{\\text{net}} = \\Delta K"}</MathRenderer>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Net work",
                  description:
                    "The total work done by all relevant forces on the object.",
                },
                {
                  title: "Kinetic energy",
                  description: "Energy associated with an object's motion.",
                },
                {
                  title: "Change in energy",
                  description:
                    "The difference between the final and initial kinetic energies.",
                },
              ].map((item) => (
                <div key={item.title} className="pml-card p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Applications</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Where is variable-force work useful?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The work integral is useful whenever the force changes over the
                displacement being studied.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((item) => (
                <div key={item.title} className="pml-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <Hammer size={19} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Springs */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">
                  A classic variable-force model
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Stretching a spring
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    For an ideal spring, Hooke's law models the restoring force
                    as proportional to displacement from equilibrium.
                  </p>

                  <p>
                    If the magnitude of the applied force is modeled by{" "}
                    <strong>F(x) = kx</strong>, the work required to stretch the
                    spring from 0 to x is found by integration.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7">
                <p className="pml-eyebrow">Model</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"F(x) = kx"}</MathRenderer>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-900">
                    Work required to stretch from 0 to x
                  </p>

                  <div className="pml-formula mt-4">
                    <MathRenderer>
                      {"W = \\int_0^x kt\\,dt = \\frac{1}{2}kx^2"}
                    </MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    Because the force increases with displacement, the constant
                    force formula cannot simply be applied using the final force
                    value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem solving workflow */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="pml-eyebrow justify-center">
                Problem-solving workflow
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A reliable approach to work problems
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Before calculating an integral, identify the physical meaning of
                every quantity in the model.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
              {workflow.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 py-6 sm:grid-cols-[70px_190px_1fr]"
                >
                  <span className="font-mono text-xs font-bold text-blue-700">
                    {item.number}
                  </span>

                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important note */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Think about the model before the integral
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The most important step in an applied work problem is often
                    deciding what the force function represents and choosing the
                    correct displacement interval. A correctly evaluated
                    integral cannot fix an incorrect physical model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Work summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
                {[
                  "For a constant force acting along the displacement, work is W = Fd.",
                  "When force varies with position, a single force value cannot represent the entire motion.",
                  "Small amounts of work can be approximated by F(x)Δx.",
                  "Adding infinitely many small contributions leads to the definite integral W = ∫ₐᵇ F(x) dx.",
                  "The sign of work depends on the direction of the force relative to displacement.",
                  "Work is measured in joules in the SI system.",
                  "Variable-force work appears in springs, fluid systems, engineering, and energy analysis.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 p-5">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#18794e]"
                    />

                    <div className="flex gap-3">
                      <span className="font-mono text-xs font-semibold text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next topic */}
        <section className="border-t border-slate-200 bg-[#17324d]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Continue learning
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Explore more applications of integration
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Continue studying how definite integrals model area, volume,
                  accumulation, and other quantities that build up continuously.
                </p>
              </div>

              <Link
                to="/applications/volume"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Volume
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
