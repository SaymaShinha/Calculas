import {
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  Code2,
  Cpu,
  GitBranch,
  Gauge,
  Lightbulb,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import TopicCard from "../../components/TopicCard";
import MathRenderer from "../../components/MathRenderer";

const topics = [
  {
    title: "Numerical Derivatives",
    description:
      "Learn how derivatives can be approximated from function values using finite differences, step sizes, and error analysis.",
    path: "/implementation/numerical-derivative",
    icon: Calculator,
    level: "Intermediate",
    topics: [
      "Forward difference",
      "Backward difference",
      "Central difference",
      "Step-size error",
    ],
  },
  {
    title: "Numerical Integration",
    description:
      "Approximate definite integrals using sampled function values and understand the trapezoidal rule, Simpson's rule, and numerical error.",
    path: "/implementation/numerical-integration",
    icon: GitBranch,
    level: "Intermediate",
    topics: [
      "Trapezoidal rule",
      "Simpson's rule",
      "Riemann sums",
      "Numerical error",
    ],
  },
  {
    title: "Numerical Methods",
    description:
      "Study computational algorithms for solving equations, finding roots, refining approximations, and analyzing convergence.",
    path: "/implementation/numerical-methods",
    icon: Cpu,
    level: "Intermediate",
    topics: ["Bisection", "Newton-Raphson", "Convergence", "Stopping criteria"],
  },
];

const principles = [
  {
    number: "01",
    title: "Discretization",
    description:
      "A continuous mathematical problem is represented using a finite collection of points, intervals, or computational steps.",
  },
  {
    number: "02",
    title: "Approximation",
    description:
      "An exact mathematical operation is replaced by a numerical procedure that produces an estimate of the desired quantity.",
  },
  {
    number: "03",
    title: "Error analysis",
    description:
      "A useful computation requires an understanding of accuracy, stability, convergence, and the limitations of the approximation.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Define",
    text: "State the mathematical problem and identify the quantity that must be computed.",
  },
  {
    number: "02",
    title: "Choose",
    text: "Select a numerical method appropriate for the function, data, domain, and desired accuracy.",
  },
  {
    number: "03",
    title: "Compute",
    text: "Run the algorithm and monitor its iterations, step size, tolerance, or stopping condition.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Check the result using theory, another method, known bounds, or an independent calculation.",
  },
];

const accuracyTopics = [
  {
    title: "Truncation error",
    description:
      "Error introduced when an exact mathematical process is replaced by a finite approximation.",
  },
  {
    title: "Round-off error",
    description:
      "Error caused by the finite precision used to represent numbers and perform arithmetic on a computer.",
  },
  {
    title: "Convergence",
    description:
      "Describes whether successive approximations move toward the desired mathematical value as the computation is refined.",
  },
  {
    title: "Stability",
    description:
      "Describes how strongly errors in the input or intermediate calculations affect the final result.",
  },
];

export default function Implementation() {
  return (
    <>
      <SEO
        title="Numerical Calculus & Implementation | Practical Math Lab"
        description="Learn how calculus concepts are implemented computationally using finite differences, numerical integration, root-finding algorithms, approximation methods, convergence, stability, and numerical error analysis."
        canonical="/implementation"
      />

      <PageHeader
        eyebrow="Implementation"
        title="Calculus on a computer"
        description="Exact symbolic mathematics is powerful, but many practical problems require numerical approximation. Learn how derivatives, integrals, equations, and other calculus problems become computational algorithms."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* ---------------------------------------------------------------- */}
        {/* Introduction                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="pml-eyebrow">From mathematics to algorithms</div>

              <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-[#17202A] sm:text-3xl">
                How calculus becomes something a computer can calculate
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#34404C]">
                Many calculus problems have exact mathematical solutions. For
                example, the derivative of a polynomial or the antiderivative of
                a simple function can often be obtained symbolically.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Practical problems are often more complicated. A function may
                come from experimental measurements, a simulation, a large
                dataset, or a physical model whose exact solution is difficult
                to obtain. In these situations, numerical methods provide a
                systematic way to estimate the quantity we need.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Numerical calculus is therefore more than entering numbers into
                a calculator. A reliable computation requires an appropriate
                algorithm, suitable numerical parameters, and an understanding
                of the errors introduced during the calculation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/implementation/numerical-derivative"
                  className="pml-btn-primary"
                >
                  Start with numerical derivatives
                </Link>

                <Link
                  to="/implementation/numerical-methods"
                  className="pml-btn-secondary"
                >
                  Explore numerical methods
                </Link>
              </div>
            </div>

            <div className="pml-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Code2 size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                The computational viewpoint
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                A mathematical definition can be translated into an algorithm
                that operates on finite numerical data.
              </p>

              <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                <div className="font-mono text-sm text-[#17324D]">
                  mathematics
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  algorithm
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  approximation
                </div>

                <div className="my-2 text-[#687481]">↓</div>

                <div className="font-mono text-sm text-[#17324D]">
                  error check
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* What computers change                                             */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="pml-card p-6">
              <Calculator size={22} className="text-[#2F5BEA]" />

              <h3 className="mt-4 text-lg font-semibold text-[#17202A]">
                Finite calculations
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Computers perform a finite number of arithmetic operations.
                Concepts involving limits, infinitesimals, or infinite sums must
                therefore be represented through suitable approximations.
              </p>
            </article>

            <article className="pml-card p-6">
              <Gauge size={22} className="text-[#2F5BEA]" />

              <h3 className="mt-4 text-lg font-semibold text-[#17202A]">
                Controlled approximation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Numerical methods introduce parameters such as step size,
                tolerance, number of subintervals, or maximum iterations. These
                parameters influence the computed result.
              </p>
            </article>

            <article className="pml-card p-6">
              <CheckCircle2 size={22} className="text-[#18794E]" />

              <h3 className="mt-4 text-lg font-semibold text-[#17202A]">
                Verification
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                A numerical answer should be checked rather than accepted
                automatically. Agreement with theory, bounds, or another method
                increases confidence in the result.
              </p>
            </article>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Core topics                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Core topics</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Numerical calculus topics
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Start with the mathematical operation you want to approximate,
              then study the numerical method used to perform it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.path} {...topic} />
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Three principles                                                   */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Three principles</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              What makes a numerical method useful?
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              A numerical algorithm is useful when its approximation can be
              computed efficiently and its behavior can be understood.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.number} className="pml-card p-6">
                <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-[#17202A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Numerical derivative                                               */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Calculator size={20} />
                </div>

                <div className="pml-eyebrow">Example 01</div>
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-[#17202A]">
                Approximating a derivative
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                The derivative describes the instantaneous rate of change of a
                function. Its definition involves a limit, but a computer cannot
                directly substitute an infinitely small value of
                <em> h</em>.
              </p>

              <div className="mt-6 pml-formula">
                <MathRenderer>
                  {"f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}"}
                </MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                A finite-difference method replaces the limiting process with a
                small but nonzero step. The central difference uses information
                on both sides of the point.
              </p>

              <div className="mt-5">
                <Link
                  to="/implementation/numerical-derivative"
                  className="pml-btn-secondary"
                >
                  Explore numerical derivatives
                </Link>
              </div>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Central difference</div>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {"f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}"}
                </MathRenderer>
              </div>

              <div className="mt-6 border-t border-[#E9E9E6] pt-6">
                <div className="pml-eyebrow">Worked idea</div>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  Suppose
                  <span className="font-medium text-[#34404C]"> f(x)=x^2</span>.
                  At
                  <span className="font-medium text-[#34404C]"> x=3</span>
                  with
                  <span className="font-medium text-[#34404C]"> h=0.01</span>:
                </p>

                <div className="mt-4 pml-formula">
                  <MathRenderer>
                    {"f'(3)\\approx\\frac{(3.01)^2-(2.99)^2}{0.02}=6"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The exact derivative is
                  <span className="font-medium text-[#34404C]"> f'(x)=2x</span>,
                  so
                  <span className="font-medium text-[#34404C]"> f'(3)=6</span>.
                  This gives a simple example of how a numerical approximation
                  can reproduce an exact result very closely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Numerical integration                                              */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 pml-card p-7">
              <div className="pml-eyebrow">Trapezoidal rule</div>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {
                    "\\int_a^b f(x)\\,dx\\approx\\frac{h}{2}\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                The interval is divided into smaller subintervals. Each piece is
                approximated by a trapezoid, and the areas are combined to
                estimate the definite integral.
              </p>

              <div className="mt-6 border-t border-[#E9E9E6] pt-6">
                <div className="pml-eyebrow">Key relationship</div>

                <div className="mt-3 pml-formula">
                  <MathRenderer>{"h=\\frac{b-a}{n}"}</MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  Increasing the number of subintervals makes
                  <span className="font-medium text-[#34404C]"> h </span>
                  smaller. For sufficiently smooth functions, this generally
                  improves the approximation.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <GitBranch size={20} />
                </div>

                <div className="pml-eyebrow">Example 02</div>
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-[#17202A]">
                Approximating an integral
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical integration is particularly useful when a function has
                no convenient elementary antiderivative or when only sampled
                measurements are available.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Instead of asking for an exact symbolic expression, the
                algorithm estimates the accumulated area from a finite number of
                function evaluations.
              </p>

              <div className="mt-5">
                <Link
                  to="/implementation/numerical-integration"
                  className="pml-btn-secondary"
                >
                  Explore numerical integration
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Root finding                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="pml-eyebrow">Example 03</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Finding roots numerically
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Some equations cannot be solved conveniently using elementary
                algebra. In these cases, the objective is to find a value of
                <em> x</em> for which the function is zero.
              </p>

              <div className="pml-formula mt-6 max-w-md">
                <MathRenderer>{"f(x)=0"}</MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                Root-finding algorithms repeatedly improve an estimate of the
                solution. The process continues until the approximation is
                sufficiently accurate or another stopping condition is met.
              </p>

              <div className="mt-6">
                <Link
                  to="/implementation/numerical-methods"
                  className="pml-btn-secondary"
                >
                  Explore numerical methods
                </Link>
              </div>
            </div>

            <div className="pml-card p-7">
              <div className="flex items-center gap-3">
                <Gauge size={21} className="text-[#2F5BEA]" />

                <h3 className="font-semibold text-[#17324D]">
                  Newton-Raphson iteration
                </h3>
              </div>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}"}
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                Newton-Raphson uses the derivative and the tangent line at the
                current approximation to generate the next estimate.
              </p>

              <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm leading-7 text-[#687481]">
                  Its speed can be excellent near a suitable root, but the
                  method may fail or behave poorly when the starting value is
                  inappropriate or when the derivative is zero or very small.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Accuracy and reliability                                          */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Accuracy and reliability</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  An approximate answer is not automatically a reliable answer
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#34404C]">
                  Numerical computation always involves some form of
                  approximation. A smaller step size or a larger number of
                  iterations can improve an answer in some situations, but
                  blindly increasing computational effort is not a universal
                  solution. Different sources of error interact with one
                  another.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {accuracyTopics.map((item) => (
                <div
                  key={item.title}
                  className="border border-[#E9E9E6] bg-[#F8F7F4] p-5"
                >
                  <h3 className="font-semibold text-[#17202A]">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Step size                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">A common misconception</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Is a smaller step size always better?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Not necessarily. In finite-difference calculations, decreasing
                the step size can reduce truncation error, but very small
                differences between floating-point numbers can increase the
                influence of round-off error.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                This creates an important practical balance: the numerical
                parameters should be small enough to capture the mathematical
                behavior but not so extreme that computer arithmetic dominates
                the calculation.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Conceptual balance</div>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[#17202A]">Large h</span>

                    <span className="text-[#687481]">
                      More truncation error
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-[#E9E9E6]">
                    <div className="h-2 w-4/5 bg-[#2F5BEA]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[#17202A]">
                      Very small h
                    </span>

                    <span className="text-[#687481]">
                      More round-off influence
                    </span>
                  </div>

                  <div className="mt-2 h-2 bg-[#E9E9E6]">
                    <div className="h-2 w-4/5 bg-[#2F5BEA]" />
                  </div>
                </div>

                <div className="border-t border-[#E9E9E6] pt-5">
                  <p className="text-sm leading-7 text-[#687481]">
                    The practical goal is not simply to make a parameter as
                    small as possible. The goal is to choose a value that gives
                    a useful balance between competing numerical errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Exact vs numerical                                                */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">A useful distinction</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Exact mathematics vs numerical approximation
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Symbolic and numerical methods are not competing versions of
              mathematics. They solve different computational problems and are
              often used together.
            </p>
          </div>

          <div className="pml-table-wrap">
            <table className="pml-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Exact / symbolic</th>
                  <th>Numerical</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Result</td>
                  <td>Exact value or mathematical expression</td>
                  <td>Approximate numerical value</td>
                </tr>

                <tr>
                  <td>Typical input</td>
                  <td>Symbolic functions or equations</td>
                  <td>Function evaluations, measurements, or numerical data</td>
                </tr>

                <tr>
                  <td>Strength</td>
                  <td>Preserves mathematical structure</td>
                  <td>Handles many difficult practical problems</td>
                </tr>

                <tr>
                  <td>Main concern</td>
                  <td>Algebraic complexity</td>
                  <td>
                    Accuracy, stability, convergence, and computational cost
                  </td>
                </tr>

                <tr>
                  <td>Example</td>
                  <td>
                    <MathRenderer inline>
                      {"\\int x^2\\,dx=\\frac{x^3}{3}+C"}
                    </MathRenderer>
                  </td>
                  <td>
                    Estimate a definite integral from sampled function values
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Computational workflow                                            */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Problem-solving workflow</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              A reliable numerical workflow
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Numerical analysis becomes much easier to reason about when the
              computational process is treated as a sequence of deliberate
              decisions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <article key={item.number} className="pml-card p-5">
                <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                  {item.number}
                </span>

                <h3 className="mt-3 font-semibold text-[#17202A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Good computational practice                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <div className="pml-eyebrow">Good computational practice</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                What should a numerical result tell you?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                A professional numerical calculation should communicate more
                than a single number. The method, inputs, numerical parameters,
                and assumptions affect how the answer should be interpreted.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Which numerical method was used?",
                "What step size, tolerance, or number of iterations was chosen?",
                "Did the algorithm converge?",
                "How sensitive is the answer to the chosen parameters?",
                "Can the result be checked independently?",
                "Are there domain restrictions or assumptions that affect the calculation?",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#E9E9E6] pb-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#18794E]"
                  />

                  <span className="text-sm leading-6 text-[#34404C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Where numerical calculus is used                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Applications</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Where numerical calculus is useful
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Numerical methods are especially valuable when mathematical models
              interact with real measurements, simulations, or complex systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Engineering",
                text: "Estimate rates, accumulated quantities, system responses, and solutions to engineering models.",
              },
              {
                title: "Physics",
                text: "Approximate motion, energy, fields, and other quantities that arise from mathematical models.",
              },
              {
                title: "Data analysis",
                text: "Estimate derivatives, integrals, trends, and other quantities from sampled or measured data.",
              },
              {
                title: "Scientific computing",
                text: "Solve equations and simulate systems that may be too complicated for closed-form solutions.",
              },
            ].map((item) => (
              <article key={item.title} className="pml-card p-6">
                <h3 className="text-lg font-semibold text-[#17202A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Common mistakes                                                   */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Common mistakes</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Numerical computation requires judgment
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                A program can execute an algorithm correctly and still produce a
                misleading answer if the method is unsuitable for the problem.
                Numerical analysis therefore combines computation with
                mathematical reasoning.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Using a method without checking whether its assumptions apply.",
                "Assuming more iterations always guarantee a better answer.",
                "Ignoring the effect of step size or tolerance.",
                "Reporting a numerical value without explaining its accuracy.",
                "Failing to check whether the algorithm actually converged.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-[#E9E9E6] bg-white p-4"
                >
                  <span className="mt-0.5 font-mono text-xs font-semibold text-[#2F5BEA]">
                    •
                  </span>

                  <p className="text-sm leading-6 text-[#34404C]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Related resources                                                 */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-eyebrow">Continue learning</div>

          <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
            Related calculus resources
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
            Build the mathematical theory first, then use numerical tools to
            explore how those ideas are implemented computationally.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <Link
              to="/formulas"
              className="pml-card group p-6 transition hover:-translate-y-0.5"
            >
              <Sigma size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Calculus Formulas
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Browse formulas for limits, derivatives, integrals, series,
                multivariable calculus, and numerical methods.
              </p>
            </Link>

            <Link
              to="/learn"
              className="pml-card group p-6 transition hover:-translate-y-0.5"
            >
              <BookOpenCheckIcon />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Calculus Learning Path
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Build the mathematical concepts that support numerical
                computation and calculus applications.
              </p>
            </Link>

            <Link
              to="/calculators"
              className="pml-card group p-6 transition hover:-translate-y-0.5"
            >
              <Calculator size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">Calculators</h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Apply calculus concepts using interactive numerical and
                computational tools.
              </p>
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Final CTA                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-t border-[#DEDEDB] pt-12">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <Code2 size={25} />

            <h2 className="mt-4 text-2xl font-semibold">
              Turn a mathematical definition into an algorithm
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Numerical calculus connects mathematical theory with practical
              computation. Start with finite differences, move to numerical
              integration, and then explore root-finding and broader numerical
              methods.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/implementation/numerical-derivative"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
              >
                Numerical derivatives
              </Link>

              <Link
                to="/implementation/numerical-integration"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Numerical integration
              </Link>

              <Link
                to="/implementation/numerical-methods"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Numerical methods
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function BookOpenCheckIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
      <BookOpenCheck size={21} />
    </div>
  );
}
