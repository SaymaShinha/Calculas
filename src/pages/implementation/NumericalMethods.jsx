import {
  Code2,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  GitBranch,
  Lightbulb,
  Settings2,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const principles = [
  {
    number: "01",
    title: "Accuracy",
    icon: CheckCircle2,
    description:
      "Accuracy describes how close a computed result is to the mathematical quantity we want to approximate.",
  },
  {
    number: "02",
    title: "Stability",
    icon: Settings2,
    description:
      "A stable method should not allow small input or rounding errors to grow uncontrollably during computation.",
  },
  {
    number: "03",
    title: "Convergence",
    icon: GitBranch,
    description:
      "A convergent method approaches the desired solution as its approximation is progressively refined.",
  },
];

const methods = [
  {
    title: "Finite Differences",
    description:
      "Approximate derivatives using function values at nearby points. These methods are useful when derivatives are unavailable analytically or when working with sampled data.",
    path: "/implementation/numerical-derivative",
    icon: GitBranch,
    topics: ["Forward difference", "Backward difference", "Central difference"],
  },
  {
    title: "Numerical Integration",
    description:
      "Approximate definite integrals by combining sampled function values using weighted sums.",
    path: "/implementation/numerical-integration",
    icon: Cpu,
    topics: ["Riemann sums", "Trapezoidal rule", "Simpson's rule"],
  },
  {
    title: "Root Finding",
    description:
      "Find approximate solutions of equations such as f(x) = 0 using iterative algorithms.",
    path: "/implementation/numerical-methods",
    icon: Settings2,
    topics: ["Bisection", "Newton-Raphson", "Secant method"],
  },
];

export default function NumericalMethods() {
  return (
    <>
      <SEO
        title="Numerical Methods | Approximation, Error, Convergence & Algorithms"
        description="Learn numerical methods in mathematics, including approximation, truncation error, round-off error, convergence, stability, root finding, interpolation, numerical integration, and computational algorithms."
        canonical="/implementation/numerical-methods"
      />

      <PageHeader
        eyebrow="Implementation • Numerical Mathematics"
        title="Numerical Methods"
        description="Learn how mathematical problems are transformed into algorithms that computers can execute, refine, and analyze."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article>
              <div className="pml-eyebrow">The computational viewpoint</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                What are numerical methods?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                Numerical methods are systematic algorithms for obtaining
                approximate solutions to mathematical problems. They become
                especially useful when an exact analytical solution is
                unavailable, difficult to derive, or too expensive to compute
                directly.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Instead of manipulating mathematical expressions indefinitely, a
                numerical algorithm performs a finite sequence of calculations.
                The algorithm may repeatedly improve an approximation until a
                chosen accuracy or stopping condition is reached.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical mathematics therefore sits between mathematical theory
                and practical computation. Understanding the algorithm is only
                part of the problem; understanding its error, convergence, and
                limitations is equally important.
              </p>
            </article>

            <aside className="pml-card h-fit p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Cpu size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                Mathematical problem
              </h3>

              <div className="mt-5 space-y-2 font-mono text-sm text-[#17324D]">
                <div>problem</div>
                <div className="text-[#687481]">↓</div>
                <div>algorithm</div>
                <div className="text-[#687481]">↓</div>
                <div>approximation</div>
                <div className="text-[#687481]">↓</div>
                <div>error analysis</div>
              </div>
            </aside>
          </div>
        </section>

        {/* Why numerical methods */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Why approximation?</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                When exact mathematics is not enough
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Some equations have elegant closed-form solutions. Others do
                not. Even when an exact solution exists, evaluating it may be
                impractical when the problem contains a large amount of data or
                must be solved repeatedly inside a simulation.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical methods make these problems computationally manageable
                by replacing an exact operation with a carefully designed
                approximation.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">Typical situations</div>

              <div className="mt-5 space-y-4">
                {[
                  "The exact solution does not have an elementary closed form.",
                  "The function is available only through measured data.",
                  "The problem must be solved repeatedly in a simulation.",
                  "The exact symbolic calculation is too expensive or complicated.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#18794E]"
                    />

                    <p className="text-sm leading-6 text-[#34404C]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core principles */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Numerical analysis</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Three properties of a good numerical method
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              A useful algorithm should not merely produce a number. We also
              need to know whether that number is accurate and whether the
              method behaves reliably.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.number} className="pml-card p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                      {item.number}
                    </span>

                    <Icon size={20} className="text-[#2F5BEA]" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Error */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Approximation and error</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Where does numerical error come from?
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-[#34404C]">
              Numerical answers are generally approximations. The difference
              between the computed value and the mathematical quantity being
              approximated is called numerical error.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Truncation error
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                This occurs when an exact mathematical process is replaced by a
                finite approximation.
              </p>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {
                    "\\text{exact process}\\rightarrow\\text{finite approximation}"
                  }
                </MathRenderer>
              </div>
            </article>

            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Round-off error
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Computers represent numbers with finite precision, so arithmetic
                operations can introduce small numerical differences.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Input error
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Measurements and initial data may already contain uncertainty. A
                numerical method cannot automatically remove that uncertainty.
              </p>
            </article>
          </div>
        </section>

        {/* Error measurement */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Measuring error</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Absolute and relative error
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                If the exact value is known, numerical accuracy can be measured
                directly. Let x be the exact value and x̃ be the approximation.
              </p>

              <div className="pml-card mt-6 p-6">
                <div className="pml-eyebrow">Absolute error</div>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"E_{abs}=|x-\\tilde{x}|"}</MathRenderer>
                </div>
              </div>

              <div className="pml-card mt-5 p-6">
                <div className="pml-eyebrow">Relative error</div>

                <div className="pml-formula mt-4">
                  <MathRenderer>
                    {"E_{rel}=\\frac{|x-\\tilde{x}|}{|x|}"}
                  </MathRenderer>
                </div>
              </div>
            </div>

            <div className="pml-card h-fit p-7">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={21}
                  className="mt-0.5 shrink-0 text-[#9A5B00]"
                />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    What if the exact value is unknown?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    In many real computational problems, there is no exact
                    answer available for direct comparison. Instead, we can
                    compare successive approximations or use theoretical error
                    bounds to estimate reliability.
                  </p>

                  <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                    <div className="font-mono text-sm text-[#17324D]">
                      approximation 1
                    </div>

                    <div className="my-2 text-[#687481]">↓</div>

                    <div className="font-mono text-sm text-[#17324D]">
                      approximation 2
                    </div>

                    <div className="my-2 text-[#687481]">↓</div>

                    <div className="font-mono text-sm text-[#17324D]">
                      approximation 3
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#687481]">
                      If successive values stabilize, this provides evidence
                      that the algorithm may be approaching a solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convergence */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <div className="pml-eyebrow">Convergence</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Does refinement move toward the correct answer?
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Convergence describes the behavior of an algorithm as its
                approximation is progressively refined. A method can be fast but
                useless if it does not converge toward the desired solution.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Different algorithms converge at different rates. This is why
                numerical analysis considers not only whether a method
                converges, but also how quickly it does so.
              </p>
            </div>

            <div className="pml-card p-7">
              <div className="pml-eyebrow">A simple pattern</div>

              <div className="mt-6 space-y-4">
                {[
                  ["n = 1", "2.5000"],
                  ["n = 2", "2.7500"],
                  ["n = 4", "2.6875"],
                  ["n = 8", "2.6719"],
                  ["n = 16", "2.6679"],
                ].map(([iteration, value]) => (
                  <div
                    key={iteration}
                    className="flex items-center justify-between border-b border-[#E9E9E6] pb-3"
                  >
                    <span className="font-mono text-sm text-[#687481]">
                      {iteration}
                    </span>

                    <span className="font-mono text-sm font-semibold text-[#17324D]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-[#687481]">
                Successive approximations becoming closer to a stable value is a
                common sign of convergence.
              </p>
            </div>
          </div>
        </section>

        {/* Stability */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Settings2 size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Stability</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  A small input error should not automatically become a huge
                  output error
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#687481]">
                  Stability concerns how an algorithm responds to errors already
                  present in its input or intermediate calculations. An unstable
                  algorithm can amplify tiny numerical errors until the final
                  result becomes unreliable.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="border border-[#CFE8DA] bg-[#EEF9F3] p-5">
                <h3 className="font-semibold text-[#18794E]">
                  Stable behavior
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#34404C]">
                  Small numerical perturbations remain controlled throughout the
                  calculation.
                </p>
              </div>

              <div className="border border-[#E8D9B7] bg-[#FFF7E8] p-5">
                <h3 className="font-semibold text-[#9A5B00]">
                  Unstable behavior
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#34404C]">
                  Small errors can grow significantly and contaminate the final
                  numerical result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common methods */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Common techniques</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Numerical methods you should know
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Numerical mathematics contains many specialized algorithms. These
              are some of the most useful techniques for calculus and
              computational mathematics.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <Link
                  key={method.title}
                  to={method.path}
                  className="pml-card group p-6 transition hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    {method.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {method.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-[#DEDEDB] bg-[#F8F7F4] px-3 py-1 text-xs text-[#687481]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-semibold text-[#2F5BEA]">
                    Explore method →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Other techniques */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Beyond the core topics</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Other important numerical techniques
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="pml-card p-6">
              <h3 className="font-semibold text-[#17202A]">Interpolation</h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Estimate values between known data points using a mathematical
                approximation such as polynomial interpolation.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="font-semibold text-[#17202A]">
                Differential equations
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Approximate solutions to differential equations when closed-form
                solutions are unavailable or impractical.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="font-semibold text-[#17202A]">Optimization</h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Search computationally for minima or maxima of functions subject
                to specified constraints.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="font-semibold text-[#17202A]">Linear systems</h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Solve large systems of equations using direct or iterative
                computational techniques.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="font-semibold text-[#17202A]">
                Numerical simulation
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Combine numerical algorithms to model changing physical,
                scientific, or engineering systems.
              </p>
            </article>

            <article className="pml-card p-6">
              <h3 className="font-semibold text-[#17202A]">
                Iterative algorithms
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                Repeatedly improve an estimate until an error tolerance or
                stopping condition is satisfied.
              </p>
            </article>
          </div>
        </section>

        {/* Computational workflow */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Practical workflow</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              How to approach a numerical problem
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Define",
                text: "Translate the mathematical problem into a precise computational task.",
              },
              {
                number: "02",
                title: "Choose",
                text: "Select a numerical method appropriate for the problem and data.",
              },
              {
                number: "03",
                title: "Compute",
                text: "Run the algorithm using suitable tolerances, step sizes, and stopping conditions.",
              },
              {
                number: "04",
                title: "Validate",
                text: "Check convergence, error estimates, or an independent reference result.",
              },
            ].map((item) => (
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

        {/* Applications */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="pml-eyebrow">Applications</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Why numerical methods matter
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Modern scientific and engineering software relies heavily on
                numerical algorithms. Many systems are too complicated to solve
                entirely by hand or symbolically.
              </p>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Numerical methods allow mathematical models to be evaluated,
                simulated, optimized, and repeatedly solved using computers.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Engineering simulation",
                "Physics",
                "Weather modeling",
                "Computer graphics",
                "Machine learning",
                "Financial modeling",
                "Scientific computing",
                "Control systems",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-[#E9E9E6] bg-white p-4"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-[#18794E]" />

                  <span className="text-sm font-medium text-[#34404C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key takeaway */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Key takeaway</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Numerical computation is more than getting a number
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#34404C]">
                  A reliable numerical solution requires three questions:
                  <strong> What method was used?</strong>
                  <strong> How accurate is the result?</strong>
                  <strong> Why should the result be trusted?</strong>
                  Understanding these questions is what turns a calculation into
                  numerical analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Continue learning</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
              Related resources
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              to="/implementation/numerical-derivative"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <GitBranch size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Numerical Derivatives
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Learn finite-difference methods and the relationship between
                step size and derivative accuracy.
              </p>
            </Link>

            <Link
              to="/implementation/numerical-integration"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <Cpu size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Numerical Integration
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Explore Riemann sums, the trapezoidal rule, Simpson's rule, and
                numerical integration error.
              </p>
            </Link>

            <Link
              to="/implementation"
              className="pml-card p-6 transition hover:-translate-y-0.5"
            >
              <Code2 size={21} className="text-[#2F5BEA]" />

              <h3 className="mt-4 font-semibold text-[#17202A]">
                Implementation Overview
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Return to the broader computational calculus section.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-[#DEDEDB] pt-12">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-semibold">
              Put numerical mathematics into practice
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Start with a specific numerical operation, understand the
              algorithm behind it, and then study how accuracy and convergence
              affect the result.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/implementation/numerical-derivative"
                className="inline-flex items-center rounded-md bg-white/30 px-4 py-2.5 text-sm font-semibold text-[#17324D] transition hover:bg-white/30"
              >
                Numerical derivatives
              </Link>

              <Link
                to="/implementation/numerical-integration"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Numerical integration
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
