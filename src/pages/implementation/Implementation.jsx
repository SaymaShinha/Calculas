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
      "Approximate derivatives using finite differences and understand how step size, truncation error, and floating-point precision affect the result.",
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
      "Approximate definite integrals when an exact antiderivative is unavailable or inconvenient using standard quadrature methods.",
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
      "Learn how mathematical problems are converted into algorithms for root finding, approximation, iteration, and computational analysis.",
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
      "The algorithm replaces an exact mathematical operation with a numerical procedure that produces an approximate result.",
  },
  {
    number: "03",
    title: "Error analysis",
    description:
      "A useful numerical result includes an understanding of accuracy, stability, convergence, and the limitations of the approximation.",
  },
];

export default function Implementation() {
  return (
    <>
      <SEO
        title="Numerical Calculus & Implementation | Practical Math Lab"
        description="Learn how calculus concepts are implemented computationally using finite differences, numerical integration, root-finding algorithms, approximation methods, convergence, and numerical error analysis."
        canonical="/implementation"
      />

      <PageHeader
        eyebrow="Implementation"
        title="Calculus on a computer"
        description="Exact symbolic mathematics is powerful, but many practical problems require numerical approximation. Learn the computational ideas behind derivatives, integrals, equations, and iterative algorithms."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Introduction */}
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
                a simple function can often be found symbolically.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Real computational problems are often less convenient. A
                function may come from experimental measurements, a simulation,
                a large data set, or an equation whose exact solution is
                difficult to obtain. Numerical methods provide a systematic way
                to approximate the quantity we need.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                The important idea is that numerical calculus is not simply
                "doing calculus with a calculator." It requires choosing an
                algorithm, controlling approximation error, and understanding
                when the computed answer can be trusted.
              </p>
            </div>

            <div className="pml-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Code2 size={22} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                The computational viewpoint
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#687481]">
                A mathematical definition becomes an algorithm. The algorithm
                operates on finite numerical data and returns an approximation.
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
              </div>
            </div>
          </div>
        </section>

        {/* Core topics */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Core topics</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Numerical calculus topics
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-[#687481]">
              Start with the operation you want to approximate, then study the
              numerical method behind it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicCard key={topic.path} {...topic} />
            ))}
          </div>
        </section>

        {/* Three principles */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">Three principles</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              What makes a numerical method useful?
            </h2>
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

        {/* Derivatives */}
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
                The derivative can be defined using a limit. A computer cannot
                evaluate an idealized infinitely small step directly, so a
                finite value of h is used.
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
                  {"f'(x) \\approx \\frac{f(x+h)-f(x-h)}{2h}"}
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                The central difference uses values on both sides of x. For
                sufficiently smooth functions, it generally provides a more
                accurate approximation than basic forward or backward
                differences for the same step size.
              </p>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 pml-card p-7">
              <div className="pml-eyebrow">Trapezoidal rule</div>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {
                    "\\int_a^b f(x)\\,dx \\approx \\frac{h}{2}\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right]"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#687481]">
                The interval is divided into smaller pieces and each section is
                approximated by a trapezoid. Increasing the number of
                subintervals generally improves the approximation for smooth
                functions.
              </p>
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
                Numerical integration is useful when a definite integral cannot
                easily be evaluated symbolically or when the function is
                available only through sampled values.
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

        {/* Root finding */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="pml-eyebrow">Example 03</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                Finding roots numerically
              </h2>

              <p className="mt-4 text-base leading-8 text-[#34404C]">
                Sometimes the problem is not to differentiate or integrate a
                function, but to find a value of x for which the function
                becomes zero.
              </p>

              <div className="pml-formula mt-6 max-w-md">
                <MathRenderer>{"f(x)=0"}</MathRenderer>
              </div>

              <p className="mt-5 text-base leading-8 text-[#34404C]">
                Methods such as bisection and Newton-Raphson turn this problem
                into an iterative process. Each iteration produces a new
                approximation until a chosen stopping condition is satisfied.
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

              <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                <p className="text-sm leading-7 text-[#687481]">
                  The method uses the tangent line at the current approximation
                  to produce the next approximation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Lightbulb size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Accuracy matters</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  An approximate answer is not automatically a reliable answer
                </h2>

                <p className="mt-4 max-w-4xl text-sm leading-7 text-[#34404C]">
                  Numerical algorithms introduce approximation error. Choosing a
                  smaller step size can reduce some errors, but making the step
                  arbitrarily small is not always better because computers also
                  operate with finite numerical precision.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Truncation error
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Error caused by replacing an exact mathematical process with a
                  finite approximation.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">
                  Round-off error
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Error caused by the finite precision used to represent numbers
                  inside a computer.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <h3 className="font-semibold text-[#17202A]">Convergence</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Describes whether repeated refinement moves the numerical
                  approximation toward the desired mathematical value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exact vs numerical */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="mb-8">
            <div className="pml-eyebrow">A useful distinction</div>

            <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
              Exact mathematics vs numerical approximation
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DEDEDB] bg-white">
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
                  <td>Mathematical expression or exact value</td>
                  <td>Approximate numerical value</td>
                </tr>

                <tr>
                  <td>Typical input</td>
                  <td>Symbolic function or equation</td>
                  <td>Function evaluations or numerical data</td>
                </tr>

                <tr>
                  <td>Strength</td>
                  <td>Preserves mathematical structure</td>
                  <td>Works for many difficult practical problems</td>
                </tr>

                <tr>
                  <td>Main concern</td>
                  <td>Algebraic complexity</td>
                  <td>Accuracy, stability, and convergence</td>
                </tr>

                <tr>
                  <td>Example</td>
                  <td>∫x²dx = x³/3 + C</td>
                  <td>Approximate a definite integral from sampled values</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Workflow */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Define",
                text: "State the mathematical problem and identify the quantity you need.",
              },
              {
                number: "02",
                title: "Choose",
                text: "Select an algorithm appropriate for the function, data, and desired accuracy.",
              },
              {
                number: "03",
                title: "Compute",
                text: "Run the numerical procedure and monitor its progress or stopping condition.",
              },
              {
                number: "04",
                title: "Validate",
                text: "Check the result against theory, alternative methods, or an expected range.",
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

        {/* Good computational practice */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <div className="pml-eyebrow">Good computational practice</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                What should a numerical result tell you?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                A professional numerical calculation should communicate more
                than a single number. The method, inputs, precision, and
                assumptions all affect how that number should be interpreted.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Which numerical method was used?",
                "What step size or tolerance was chosen?",
                "Did the algorithm converge?",
                "How sensitive is the answer to the chosen parameters?",
                "Can the result be checked independently?",
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

        {/* Related resources */}
        <section className="border-t border-[#DEDEDB] py-12 md:py-16">
          <div className="pml-eyebrow">Continue learning</div>

          <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
            Related calculus resources
          </h2>

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
                Build the mathematical concepts behind the computational
                methods.
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

        {/* Final CTA */}
        <section className="border-t border-[#DEDEDB] pt-12">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <Code2 size={25} />

            <h2 className="mt-4 text-2xl font-semibold">
              Turn a mathematical definition into an algorithm
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Numerical calculus connects mathematical theory with practical
              computation. Start with derivatives or integration, then explore
              root-finding and broader numerical methods.
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

function BookOpenCheckIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
      <BookOpenCheck size={21} />
    </div>
  );
}
