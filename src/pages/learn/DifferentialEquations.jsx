import {
  Activity,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Lightbulb,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const applications = [
  {
    title: "Population models",
    description:
      "Differential equations can describe how populations grow, decline, or interact over time.",
  },
  {
    title: "Motion",
    description:
      "Position, velocity, and acceleration can be related through differential equations.",
  },
  {
    title: "Electrical circuits",
    description:
      "Circuit models use differential equations to describe changing current and voltage.",
  },
  {
    title: "Heat transfer",
    description:
      "Temperature changes can be modeled using equations involving rates of change.",
  },
  {
    title: "Fluid dynamics",
    description:
      "Differential equations help describe the motion and transport of fluids.",
  },
  {
    title: "Control systems",
    description:
      "Dynamic systems can be modeled to understand stability, response, and feedback.",
  },
];

const equationTypes = [
  {
    title: "Ordinary differential equations",
    description:
      "An ODE involves derivatives with respect to one independent variable.",
    formula: "dy/dx = f(x,y)",
  },
  {
    title: "First-order equations",
    description:
      "A first-order differential equation contains derivatives up to the first derivative.",
    formula: "dy/dx + P(x)y = Q(x)",
  },
  {
    title: "Second-order equations",
    description:
      "A second-order equation contains a second derivative and is common in motion and physical models.",
    formula: "d²y/dx² = f(x,y,y′)",
  },
];

export default function DifferentialEquations() {
  return (
    <>
      <SEO
        title="Differential Equations | Introduction, Types & Applications"
        description="Learn the foundations of differential equations, including ordinary differential equations, initial conditions, first-order and second-order equations, exponential models, and applications."
        canonical="/learn/differential-equations"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Differential Equations"
        description="Learn how differential equations describe changing systems through relationships between unknown functions and their derivatives."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="pml-prose">
                <div className="pml-eyebrow">The central idea</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What is a differential equation?
                </h2>

                <p className="mt-5">
                  A differential equation is an equation involving an unknown
                  function and one or more of its derivatives. Instead of
                  solving for a single number, we usually want to find a
                  function that satisfies the equation.
                </p>

                <p>
                  Differential equations are especially useful when a system is
                  changing. Rather than describing only the current state, they
                  describe how that state changes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  A simple example
                </p>

                <div className="pml-formula mt-5 text-center">
                  <MathRenderer block>{"dy/dx = ky"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  This equation says that the rate of change of{" "}
                  <strong>y</strong> is proportional to its current value. It
                  appears in models of exponential growth and decay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why differential equations matter */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Why they matter</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Calculus becomes a language for changing systems.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Derivatives tell us how quantities change. Differential
                equations use those derivatives to describe entire systems.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Rate of change",
                  description:
                    "A derivative describes how a quantity changes at a particular moment.",
                  icon: Activity,
                },
                {
                  title: "Relationships",
                  description:
                    "A differential equation connects a quantity with one or more of its rates of change.",
                  icon: GitBranch,
                },
                {
                  title: "Models",
                  description:
                    "Solving the equation can give a mathematical model for how a system evolves.",
                  icon: Sigma,
                },
              ].map((item) => {
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

        {/* ODE */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">
                  01 · Ordinary differential equations
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What is an ODE?
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  An ordinary differential equation, or ODE, involves
                  derivatives with respect to a single independent variable.
                </p>
              </div>

              <div>
                <div className="pml-formula">
                  <MathRenderer block>{"dy/dx = f(x,y)"}</MathRenderer>
                </div>

                <div className="pml-prose mt-6">
                  <p>
                    If <strong>x</strong> is the independent variable and{" "}
                    <strong>y</strong> depends on <strong>x</strong>, then an
                    ODE describes a relationship between <strong>y</strong>, its
                    derivatives, and possibly <strong>x</strong>.
                  </p>

                  <p>
                    ODEs are among the most common differential equations in
                    introductory applied mathematics.
                  </p>
                </div>

                <div className="mt-7 rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                  <p className="text-sm font-bold text-slate-900">Example</p>

                  <div className="pml-formula mt-4">
                    <MathRenderer block>{"dy/dx = 3x²"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Solving this equation means finding a function{" "}
                    <strong>y(x)</strong> whose derivative is{" "}
                    <strong>3x²</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Common forms</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Different equations require different methods.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Differential equations can be classified in several ways. Their
                structure often determines which solution technique is
                appropriate.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {equationTypes.map((item) => (
                <div key={item.title} className="pml-card p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-lg bg-slate-50 p-4">
                    <code className="font-mono text-xs leading-6 text-[#17324d]">
                      {item.formula}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initial conditions */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">02 · Initial conditions</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Choosing one particular solution
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    A differential equation can have many possible solutions. An
                    initial condition provides additional information that can
                    identify one particular solution.
                  </p>

                  <p>
                    For example, if a model describes a quantity{" "}
                    <strong>y(t)</strong>, we might know its value at the
                    starting time.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Initial condition
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer block>{"y(0) = y₀"}</MathRenderer>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm leading-7 text-slate-600">
                    The differential equation describes how the system changes,
                    while the initial condition specifies where the system
                    starts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exponential growth example */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked model</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Exponential growth and decay
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                One of the simplest and most important differential equations
                models a quantity whose rate of change is proportional to its
                current value.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "The equation",
                  formula: "dy/dt = ky",
                  description:
                    "The constant k determines whether the quantity grows or decays.",
                },
                {
                  number: "02",
                  title: "The general solution",
                  formula: "y(t) = Ceᵏᵗ",
                  description:
                    "The constant C is determined by an initial condition.",
                },
                {
                  number: "03",
                  title: "With an initial value",
                  formula: "y(0) = y₀",
                  description:
                    "The initial condition gives C = y₀, producing y(t) = y₀eᵏᵗ.",
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
                    <MathRenderer block>{step.formula}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
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
                  <p className="font-bold text-slate-900">The important idea</p>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The solution is not just an algebraic expression. It is a
                    function that describes how the modeled quantity evolves
                    over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Applications</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Differential equations model real systems.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Many systems in science, engineering, economics, and technology
                can be represented using differential equations.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((item) => (
                <div key={item.title} className="pml-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                    <GitBranch size={19} strokeWidth={1.8} />
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

        {/* Solving perspective */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">Solving equations</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  There is no single method for every equation.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    The appropriate solution technique depends on the structure
                    of the differential equation.
                  </p>

                  <p>
                    Common introductory methods include separation of variables,
                    integrating factors, characteristic equations, and numerical
                    methods.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Common methods
                </p>

                <div className="mt-5 divide-y divide-slate-200">
                  {[
                    "Separation of variables",
                    "Integrating factors",
                    "Characteristic equations",
                    "Numerical approximation",
                  ].map((method, index) => (
                    <div key={method} className="flex items-center gap-4 py-4">
                      <span className="font-mono text-xs font-bold text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-slate-700">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
                    A useful way to think about differential equations
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A differential equation is often a model of a process, not
                    merely an exercise in symbolic manipulation. Before solving
                    one, identify what each variable represents, what its
                    derivatives mean, and what assumptions the model makes.
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
              <div className="pml-eyebrow">Summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
                {[
                  "A differential equation contains an unknown function and one or more derivatives.",
                  "Ordinary differential equations involve derivatives with respect to one independent variable.",
                  "Initial conditions can identify a particular solution from a family of solutions.",
                  "Different equations require different analytical or numerical solution methods.",
                  "Differential equations are widely used to model changing systems.",
                  "The meaning of a solution depends on the real-world quantities represented by the variables.",
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
                  Explore more advanced calculus
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Continue exploring calculus through sequences and series,
                  multivariable functions, vector fields, and other advanced
                  topics.
                </p>
              </div>

              <Link
                to="/learn/series"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Series
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
