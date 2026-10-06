import {
  Activity,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Lightbulb,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

const applications = [
  {
    title: "Population models",
    description:
      "Differential equations can describe population growth, decline, competition, and interaction between species.",
  },
  {
    title: "Motion",
    description:
      "Position, velocity, and acceleration are connected through differential equations that describe changing motion.",
  },
  {
    title: "Electrical circuits",
    description:
      "Circuit models use differential equations to describe how current and voltage change with time.",
  },
  {
    title: "Heat transfer",
    description:
      "Temperature changes can be modeled using equations that describe rates of heat transfer and temperature variation.",
  },
  {
    title: "Fluid dynamics",
    description:
      "Differential equations are used to model the motion, pressure, and transport of fluids.",
  },
  {
    title: "Control systems",
    description:
      "Dynamic systems can be modeled to study stability, response, feedback, and system behavior over time.",
  },
];

const equationTypes = [
  {
    title: "Ordinary differential equations",
    description:
      "An ODE involves derivatives with respect to one independent variable.",
    formula: "\\frac{dy}{dx}=f(x,y)",
  },
  {
    title: "First-order equations",
    description:
      "A first-order differential equation contains derivatives only up to the first derivative.",
    formula: "\\frac{dy}{dx}+P(x)y=Q(x)",
  },
  {
    title: "Second-order equations",
    description:
      "A second-order equation contains a second derivative and appears frequently in motion and physical models.",
    formula: "\\frac{d^2y}{dx^2}=f\\left(x,y,\\frac{dy}{dx}\\right)",
  },
];

const solvingMethods = [
  {
    number: "01",
    title: "Separation of variables",
    description:
      "Rewrite the equation so that terms involving each variable can be placed on opposite sides and integrated.",
  },
  {
    number: "02",
    title: "Integrating factors",
    description:
      "A standard technique for solving many first-order linear differential equations.",
  },
  {
    number: "03",
    title: "Characteristic equations",
    description:
      "A common method for solving linear differential equations with constant coefficients.",
  },
  {
    number: "04",
    title: "Numerical methods",
    description:
      "Approximate solutions can be calculated when an exact symbolic solution is difficult or unavailable.",
  },
];

export default function DifferentialEquations() {
  return (
    <>
      <SEO
        title="Differential Equations | Introduction, Types & Applications"
        description="Learn the foundations of differential equations, including ordinary differential equations, initial conditions, first-order and second-order equations, exponential growth and decay, solution methods, and real-world applications."
        canonical="/learn/differential-equations"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Differential Equations"
        description="Learn how differential equations describe changing systems through relationships between unknown functions and their derivatives."
      />

      <main>
        {/* ============================================================ */}
        {/* Introduction                                                 */}
        {/* ============================================================ */}

        <section className="border-b border-[#DEDEDB] bg-white">
          <div className="pml-container py-12 sm:py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <article className="pml-prose">
                <div className="pml-eyebrow">The central idea</div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  What is a differential equation?
                </h2>

                <p className="mt-5">
                  A differential equation is an equation involving an unknown
                  function and one or more of its derivatives. Instead of
                  solving for a single number, the goal is usually to find a
                  function that satisfies the equation.
                </p>

                <p>
                  Differential equations are especially useful when a system is
                  changing. A derivative describes a rate of change, while a
                  differential equation describes a relationship between that
                  rate of change and the quantities in the system.
                </p>

                <p>
                  This makes differential equations one of the central
                  mathematical languages used to model physical, biological,
                  economic, and engineering systems.
                </p>
              </article>

              <aside className="pml-card p-7 sm:p-8">
                <p className="pml-eyebrow">A simple example</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"\\frac{dy}{dx}=ky"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  This equation says that the rate of change of{" "}
                  <strong className="text-[#17202A]">y</strong> is proportional
                  to its current value. Depending on the value of{" "}
                  <strong className="text-[#17202A]">k</strong>, it can describe
                  exponential growth or exponential decay.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Why they matter                                             */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Why they matter</div>

              <h2 className="pml-title mt-4">
                Calculus becomes a language for changing systems.
              </h2>

              <p className="pml-lead mt-5">
                Derivatives tell us how quantities change. Differential
                equations use those derivatives to describe relationships within
                an entire system.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Rate of change",
                  description:
                    "A derivative describes how a quantity changes at a particular point in time or space.",
                  icon: Activity,
                },
                {
                  title: "Relationships",
                  description:
                    "A differential equation connects an unknown quantity with one or more of its rates of change.",
                  icon: GitBranch,
                },
                {
                  title: "Models",
                  description:
                    "Solving the equation can produce a function that describes how a modeled system evolves.",
                  icon: Sigma,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="pml-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#687481]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ODE                                                          */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">
                  01 · Ordinary differential equations
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  What is an ODE?
                </h2>

                <p className="mt-5 max-w-lg leading-8 text-[#687481]">
                  An ordinary differential equation, or ODE, involves
                  derivatives with respect to a single independent variable.
                </p>
              </div>

              <div>
                <div className="pml-formula">
                  <MathRenderer>{"\\frac{dy}{dx}=f(x,y)"}</MathRenderer>
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
                    introductory applied mathematics because many real systems
                    evolve primarily with respect to one variable such as time.
                  </p>
                </div>

                <div className="mt-7 rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-6">
                  <p className="text-sm font-bold text-[#17202A]">Example</p>

                  <div className="pml-formula mt-4">
                    <MathRenderer>{"\\frac{dy}{dx}=3x^2"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#687481]">
                    Solving this equation means finding a function{" "}
                    <strong className="text-[#17202A]">y(x)</strong> whose
                    derivative is{" "}
                    <strong className="text-[#17202A]">3x²</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Types                                                         */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Common forms</div>

              <h2 className="pml-title mt-4">
                Different equations require different methods.
              </h2>

              <p className="pml-lead mt-5">
                Differential equations can be classified in several ways. Their
                order and structure often determine which solution technique is
                appropriate.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {equationTypes.map((item) => (
                <article key={item.title} className="pml-card p-6">
                  <h3 className="text-lg font-bold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-lg border border-[#E9E9E6] bg-[#F8F7F4] px-3 py-2">
                    <MathRenderer inline>{item.formula}</MathRenderer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Order and classification                                     */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Understanding order</div>

              <h2 className="pml-title mt-4">
                The highest derivative determines the order.
              </h2>

              <p className="pml-lead mt-5">
                The order of a differential equation is the order of the highest
                derivative that appears in it. This classification is useful
                because the order often indicates the amount of information
                needed to determine a particular solution.
              </p>
            </div>

            <div className="pml-table-wrap mt-10">
              <table className="pml-table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Example</th>
                    <th>Typical context</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>First order</td>
                    <td>
                      <MathRenderer inline>{"y'=f(x,y)"}</MathRenderer>
                    </td>
                    <td>Growth, decay, mixing, simple dynamic models</td>
                  </tr>

                  <tr>
                    <td>Second order</td>
                    <td>
                      <MathRenderer inline>{"y''+ay'+by=0"}</MathRenderer>
                    </td>
                    <td>Motion, oscillations, mechanical systems</td>
                  </tr>

                  <tr>
                    <td>Higher order</td>
                    <td>
                      <MathRenderer inline>
                        {"y^{(n)}=F(x,y,y',\\ldots)"}
                      </MathRenderer>
                    </td>
                    <td>Advanced physical and engineering models</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Initial conditions                                            */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="pml-eyebrow">02 · Initial conditions</div>

                <h2 className="pml-title mt-4">
                  Choosing one particular solution
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    A differential equation can have many possible solutions. An
                    initial condition provides additional information that can
                    identify one particular solution.
                  </p>

                  <p>
                    For a model involving a quantity <strong>y(t)</strong>, we
                    might know the value of the quantity at the starting time.
                  </p>

                  <p>
                    This distinction is important: the differential equation
                    describes the rule governing change, while the initial
                    condition tells us where the modeled system begins.
                  </p>
                </div>
              </div>

              <div className="pml-card p-7 sm:p-8">
                <p className="pml-eyebrow">Initial condition</p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"y(0)=y_0"}</MathRenderer>
                </div>

                <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                  <p className="text-sm leading-7 text-[#687481]">
                    The differential equation describes how the system changes,
                    while the initial condition specifies its starting state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Exponential growth                                           */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Worked model</div>

              <h2 className="pml-title mt-4">Exponential growth and decay</h2>

              <p className="pml-lead mt-5">
                One of the simplest and most important differential equation
                models describes a quantity whose rate of change is proportional
                to its current value.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "The equation",
                  formula: "\\frac{dy}{dt}=ky",
                  description:
                    "The constant k determines whether the quantity grows or decays.",
                },
                {
                  number: "02",
                  title: "The general solution",
                  formula: "y(t)=Ce^{kt}",
                  description:
                    "The constant C is determined by an initial condition.",
                },
                {
                  number: "03",
                  title: "With an initial value",
                  formula: "y(t)=y_0e^{kt}",
                  description:
                    "Using y(0)=y₀ gives C=y₀ and produces the particular solution.",
                },
              ].map((step) => (
                <article key={step.number} className="pml-card p-6">
                  <span className="font-mono text-xs font-bold text-[#2F5BEA]">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-base font-bold text-[#17202A]">
                    {step.title}
                  </h3>

                  <div className="pml-formula mt-5">
                    <MathRenderer>{step.formula}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#687481]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="pml-success mt-8">
              <div className="flex gap-4">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                <div>
                  <p className="font-bold text-[#17202A]">The important idea</p>

                  <p className="mt-2 text-sm leading-7 text-[#34404C]">
                    The solution is not simply an algebraic answer. It is a
                    function that describes how the modeled quantity evolves
                    over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Growth vs decay                                              */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Interpreting k</div>

              <h2 className="pml-title mt-4">
                Growth and decay are controlled by the sign of k.
              </h2>

              <p className="pml-lead mt-5">
                For the model{" "}
                <strong className="text-[#17202A]">y(t)=y₀eᵏᵗ</strong>, the sign
                of k determines the qualitative behavior of the solution.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="pml-card p-6">
                <p className="font-mono text-lg font-bold text-[#18794E]">
                  k &gt; 0
                </p>

                <h3 className="mt-3 text-lg font-bold text-[#17202A]">
                  Exponential growth
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  The quantity increases as time increases, assuming a positive
                  initial value.
                </p>
              </article>

              <article className="pml-card p-6">
                <p className="font-mono text-lg font-bold text-[#9A5B00]">
                  k &lt; 0
                </p>

                <h3 className="mt-3 text-lg font-bold text-[#17202A]">
                  Exponential decay
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  The quantity decreases toward zero as time increases, under
                  the usual positive-initial-value model.
                </p>
              </article>

              <article className="pml-card p-6">
                <p className="font-mono text-lg font-bold text-[#17324D]">
                  k = 0
                </p>

                <h3 className="mt-3 text-lg font-bold text-[#17202A]">
                  Constant quantity
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  The differential equation becomes y′=0, so the solution is
                  constant.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Applications                                                  */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Applications</div>

              <h2 className="pml-title mt-4">
                Differential equations model real systems.
              </h2>

              <p className="pml-lead mt-5">
                Many systems in science, engineering, economics, and technology
                can be represented using differential equations.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((item) => (
                <article key={item.title} className="pml-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <GitBranch size={19} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#687481]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Solving methods                                               */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Solving equations</div>

                <h2 className="pml-title mt-4">
                  There is no single method for every equation.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    The appropriate solution technique depends on the structure
                    of the differential equation.
                  </p>

                  <p>
                    Some equations can be solved exactly using algebra and
                    integration. Others require numerical approximation because
                    an elementary closed-form solution is unavailable or
                    impractical.
                  </p>
                </div>
              </div>

              <div className="pml-card overflow-hidden">
                {solvingMethods.map((method, index) => (
                  <div
                    key={method.title}
                    className={`p-6 ${
                      index !== solvingMethods.length - 1
                        ? "border-b border-[#E9E9E6]"
                        : ""
                    }`}
                  >
                    <div className="flex gap-4">
                      <span className="font-mono text-xs font-bold text-[#2F5BEA]">
                        {method.number}
                      </span>

                      <div>
                        <h3 className="font-bold text-[#17202A]">
                          {method.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#687481]">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Initial value problem                                        */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="pml-container py-16 sm:py-20">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Initial-value problems</div>

              <h2 className="pml-title mt-4">
                A model needs both a rule and a starting state.
              </h2>

              <p className="pml-lead mt-5">
                A differential equation specifies how a system changes, but
                initial conditions provide the information needed to select the
                relevant solution.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="pml-card p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Sigma size={20} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                  Differential equation
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Describes the rule governing how the unknown quantity changes.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"\\frac{dy}{dt}=ky"}</MathRenderer>
                </div>
              </article>

              <article className="pml-card p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <CheckCircle2 size={20} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                  Initial condition
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  Specifies the state of the system at a known starting point.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>{"y(0)=y_0"}</MathRenderer>
                </div>
              </article>
            </div>

            <div className="mt-7 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2F5BEA]"
                />

                <p className="text-sm leading-7 text-[#34404C]">
                  Together, the differential equation and initial condition form
                  an{" "}
                  <strong className="text-[#17202A]">
                    initial-value problem
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Modeling workflow                                            */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Modeling workflow</div>

              <h2 className="pml-title mt-4">
                From a real system to a mathematical model
              </h2>

              <p className="pml-lead mt-5">
                Solving a differential equation is only part of the modeling
                process. A useful model begins by translating the real system
                into mathematical quantities and relationships.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                [
                  "01",
                  "Identify",
                  "Determine the quantities that change and what their derivatives represent.",
                ],
                [
                  "02",
                  "Model",
                  "Translate the relationships between the quantities into a differential equation.",
                ],
                [
                  "03",
                  "Solve",
                  "Use an analytical or numerical method appropriate for the equation.",
                ],
                [
                  "04",
                  "Interpret",
                  "Compare the mathematical solution with the behavior of the real system.",
                ],
              ].map(([number, title, description]) => (
                <article
                  key={number}
                  className="border-l-2 border-[#2F5BEA] pl-4"
                >
                  <span className="font-mono text-xs font-bold text-[#2F5BEA]">
                    {number}
                  </span>

                  <h3 className="mt-2 font-bold text-[#17202A]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Important note                                               */}
        {/* ============================================================ */}

        <section className="border-y border-[#DEDEDB] bg-white">
          <div className="pml-container py-14">
            <div className="mx-auto max-w-3xl rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6 sm:p-7">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2F5BEA]"
                />

                <div>
                  <h3 className="font-bold text-[#17202A]">
                    A useful way to think about differential equations
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#34404C]">
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

        {/* ============================================================ */}
        {/* Summary                                                       */}
        {/* ============================================================ */}

        <section className="pml-section">
          <div className="pml-container">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Summary</div>

              <h2 className="pml-title mt-4">The ideas to remember</h2>

              <div className="mt-8 overflow-hidden border-y border-[#DEDEDB] bg-white">
                {[
                  "A differential equation contains an unknown function and one or more derivatives.",
                  "An ordinary differential equation involves derivatives with respect to one independent variable.",
                  "The highest derivative determines the order of a differential equation.",
                  "Initial conditions can identify a particular solution from a family of solutions.",
                  "Different equations require different analytical or numerical solution methods.",
                  "Differential equations are widely used to model changing systems in science, engineering, and other fields.",
                  "The meaning of a solution depends on the real-world quantities represented by its variables.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex gap-4 p-5 ${
                      index !== 0 ? "border-t border-[#E9E9E6]" : ""
                    }`}
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#18794E]"
                    />

                    <div className="flex gap-3">
                      <span className="font-mono text-xs font-semibold text-[#2F5BEA]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-[#687481]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* Next topic                                                    */}
        {/* ============================================================ */}

        <section className="border-t border-[#DEDEDB] bg-[#17324D]">
          <div className="pml-container py-14 sm:py-16">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#BFCBFF]">
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
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-[#F8F7F4]"
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
