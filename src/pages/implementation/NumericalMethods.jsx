// src/pages/implementation/NumericalMethods.jsx

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  GitBranch,
  Lightbulb,
  Link as LinkIcon,
  Settings2,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

const principles = [
  {
    title: "Accuracy",
    description:
      "A numerical result should be close to the mathematical quantity it is intended to approximate.",
    icon: CheckCircle2,
  },
  {
    title: "Convergence",
    description:
      "A reliable method should approach the correct solution as the approximation is refined under appropriate conditions.",
    icon: GitBranch,
  },
  {
    title: "Stability",
    description:
      "Small errors in data or intermediate calculations should not grow uncontrollably during the computation.",
    icon: Settings2,
  },
];

const commonMethods = [
  {
    title: "Numerical differentiation",
    description:
      "Approximates derivatives using function values at nearby points.",
    link: "/implementation/numerical-derivative",
    label: "Study numerical derivatives",
  },
  {
    title: "Numerical integration",
    description:
      "Approximates definite integrals using sampled function values and weighted sums.",
    link: "/implementation/numerical-integration",
    label: "Study numerical integration",
  },
  {
    title: "Root finding",
    description: "Finds approximate solutions of equations such as f(x) = 0.",
    link: "/calculators/function",
    label: "Explore function behavior",
  },
];

const additionalMethods = [
  {
    title: "Interpolation",
    description:
      "Estimates unknown values between known data points using an approximating function.",
  },
  {
    title: "Differential equations",
    description:
      "Approximates solutions when differential equations cannot be solved conveniently in closed form.",
  },
  {
    title: "Optimization",
    description:
      "Searches for approximate minima or maxima of functions subject to mathematical constraints.",
  },
  {
    title: "Linear systems",
    description:
      "Solves large systems of equations using direct or iterative computational methods.",
  },
  {
    title: "Simulation",
    description:
      "Uses repeated numerical calculations to model physical, financial, scientific, or engineering systems.",
  },
  {
    title: "Iterative algorithms",
    description:
      "Repeatedly improve an approximation until a chosen stopping condition is satisfied.",
  },
];

const applications = [
  "Engineering design",
  "Physics and mechanics",
  "Weather and climate modeling",
  "Computer graphics",
  "Scientific computing",
  "Machine learning",
  "Financial modeling",
  "Control systems",
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="pml-eyebrow">{eyebrow}</div>}

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
        {title}
      </h2>

      {children && (
        <p className="mt-4 text-base leading-8 text-[#687481] sm:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}

function MethodCard({ title, description, link, label }) {
  return (
    <article className="pml-card flex h-full flex-col">
      <h3 className="text-xl font-semibold text-[#17202A]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#687481]">{description}</p>

      <div className="mt-auto pt-6">
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA] transition-colors hover:text-[#2448C7]"
        >
          {label}
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

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

      <main>
        {/* ------------------------------------------------------------------ */}
        {/* Introduction                                                       */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">The computational viewpoint</div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                  Mathematics becomes an algorithm
                </h2>

                <div className="pml-prose mt-6">
                  <p>
                    Many mathematical problems have exact solutions on paper,
                    but real computational problems are often more complicated.
                    A function may be available only through measured data, an
                    equation may have no convenient closed-form solution, or a
                    calculation may be too large to perform symbolically.
                  </p>

                  <p>
                    Numerical methods provide a systematic way to obtain
                    approximate answers. Instead of manipulating expressions
                    indefinitely, a numerical algorithm performs a sequence of
                    calculations and produces a result whose accuracy can be
                    studied.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-5">
                  {[
                    "Problem",
                    "Model",
                    "Algorithm",
                    "Approximation",
                    "Validation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="relative border border-[#DEDEDB] bg-[#F8F7F4] px-4 py-4 text-center"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                        {index + 1}
                      </div>

                      <div className="mt-1 text-sm font-semibold text-[#17202A]">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Cpu size={22} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                  What numerical methods actually do
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  A numerical method replaces a difficult mathematical operation
                  with a sequence of simpler operations that a computer can
                  execute.
                </p>

                <div className="mt-6 border-t border-[#E9E9E6] pt-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                    Central idea
                  </div>

                  <p className="mt-2 text-sm leading-7 text-[#34404C]">
                    The important question is not only whether an algorithm
                    produces an answer, but also how accurate, stable, and
                    reliable that answer is.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Why approximation                                                   */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="01 • Why approximation?"
              title="Why do we need numerical methods?"
            >
              Exact symbolic mathematics is powerful, but it does not solve
              every computational problem efficiently.
            </SectionHeading>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "No closed form",
                  text: "Some equations and integrals do not have convenient elementary formulas for their solutions.",
                },
                {
                  title: "Discrete data",
                  text: "Real measurements are often available only at a finite collection of points.",
                },
                {
                  title: "Large systems",
                  text: "Scientific and engineering models can involve thousands or millions of interacting quantities.",
                },
                {
                  title: "Computational models",
                  text: "A numerical simulation can be more useful than an exact symbolic expression when modeling a real system.",
                },
              ].map((item) => (
                <article key={item.title} className="pml-card">
                  <h3 className="text-lg font-semibold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Core principles                                                     */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="02 • Core principles"
              title="Three questions every numerical method should answer"
            >
              Numerical analysis is not simply about calculating a decimal
              approximation. We also need to understand the behavior of the
              algorithm that produced it.
            </SectionHeading>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="pml-card">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                      <Icon size={21} />
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

            <div className="mt-8 border border-[#DEDEDB] bg-[#F8F7F4] p-6">
              <div className="flex items-start gap-4">
                <Lightbulb size={21} className="mt-1 shrink-0 text-[#2F5BEA]" />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    A useful distinction
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    Accuracy describes how close a computed result is to the
                    desired mathematical value. Convergence describes what
                    happens as the numerical approximation is refined. Stability
                    describes how the algorithm responds to errors introduced
                    during computation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Error analysis                                                       */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="03 • Error analysis"
              title="Understanding numerical error"
            >
              Every approximation contains some degree of error. Numerical
              analysis provides tools for identifying where that error comes
              from and how it behaves.
            </SectionHeading>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <article className="pml-card">
                <h3 className="text-xl font-semibold text-[#17202A]">
                  Absolute and relative error
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  Suppose the exact value is x and the computed approximation is
                  x̃. The absolute error measures the size of their difference.
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {String.raw`E_{\mathrm{abs}} = \left|x-\tilde{x}\right|`}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  Relative error compares the error with the magnitude of the
                  exact value.
                </p>

                <div className="pml-formula mt-4">
                  <MathRenderer>
                    {String.raw`E_{\mathrm{rel}} =
                    \frac{\left|x-\tilde{x}\right|}{\left|x\right|}`}
                  </MathRenderer>
                </div>
              </article>

              <article className="pml-card">
                <h3 className="text-xl font-semibold text-[#17202A]">
                  Where errors come from
                </h3>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      title: "Truncation error",
                      text: "Created when an infinite mathematical process is replaced by a finite approximation.",
                    },
                    {
                      title: "Round-off error",
                      text: "Created because computers represent numbers with finite precision.",
                    },
                    {
                      title: "Data error",
                      text: "Created when input measurements or parameters are themselves approximate.",
                    },
                    {
                      title: "Model error",
                      text: "Created when the mathematical model is only an approximation of the real system.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border-l-2 border-[#2F5BEA] pl-4"
                    >
                      <h4 className="font-semibold text-[#17202A]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-[#687481]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="pml-warning mt-8">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="mt-0.5 shrink-0" />

                <div>
                  <h3 className="font-semibold">
                    Smaller is not always better
                  </h3>

                  <p className="mt-1 text-sm leading-7">
                    Reducing a numerical step size can decrease truncation
                    error, but extremely small steps can increase round-off
                    error and floating-point cancellation. Good numerical
                    algorithms balance different sources of error rather than
                    blindly choosing the smallest possible step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Convergence example                                                  */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="04 • Convergence"
              title="A concrete example of numerical convergence"
            >
              Consider approximating a definite integral with the trapezoidal
              rule. As the number of subintervals increases, the approximation
              approaches the exact integral.
            </SectionHeading>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <article className="pml-card">
                <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                  Exact value
                </div>

                <div className="pml-formula mt-3">
                  <MathRenderer>
                    {String.raw`\int_0^2 x^2\,dx = \frac{8}{3}`}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  The table shows how the trapezoidal approximation changes as
                  the number of subintervals increases.
                </p>
              </article>

              <div className="pml-table-wrap">
                <table className="pml-table">
                  <thead>
                    <tr>
                      <th>Subintervals n</th>
                      <th>Approximation</th>
                      <th>Absolute error</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>4.000000</td>
                      <td>1.333333</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>3.000000</td>
                      <td>0.333333</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>2.750000</td>
                      <td>0.083333</td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>2.687500</td>
                      <td>0.020833</td>
                    </tr>

                    <tr>
                      <td>16</td>
                      <td>2.671875</td>
                      <td>0.005208</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 border border-[#DEDEDB] bg-[#F8F7F4] p-6">
              <div className="flex items-start gap-4">
                <GitBranch size={21} className="mt-1 shrink-0 text-[#2F5BEA]" />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    What the table demonstrates
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    The approximation moves toward the exact value 8/3 ≈
                    2.666667 as n increases. This is an example of convergence:
                    refinement of the numerical procedure produces increasingly
                    accurate results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Stability and conditioning                                           */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="05 • Stability"
              title="Stability and conditioning"
            >
              Two different questions must be separated when analyzing a
              numerical computation: how sensitive the mathematical problem is,
              and how the algorithm behaves while solving it.
            </SectionHeading>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Settings2 size={21} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                  Conditioning
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  Conditioning describes how sensitive the mathematical problem
                  itself is to changes in its input. A poorly conditioned
                  problem can amplify small input errors even when the algorithm
                  is implemented correctly.
                </p>
              </article>

              <article className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Cpu size={21} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                  Stability
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#687481]">
                  Stability concerns the behavior of the numerical algorithm. A
                  stable algorithm controls the growth of errors introduced by
                  finite precision, approximation, or imperfect data.
                </p>
              </article>
            </div>

            <div className="pml-card mt-6">
              <h3 className="text-lg font-semibold text-[#17202A]">
                Why the distinction matters
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                A calculation can be difficult because the underlying problem is
                sensitive, because the algorithm is unstable, or because of
                both. Good numerical analysis examines the problem and the
                algorithm separately before interpreting the final answer.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common methods                                                       */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="06 • Core techniques"
              title="Common numerical methods"
            >
              Different mathematical problems require different approximation
              strategies. These techniques form an important part of numerical
              calculus.
            </SectionHeading>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {commonMethods.map((method) => (
                <MethodCard key={method.title} {...method} />
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Additional methods                                                   */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="07 • Beyond basic calculus"
              title="Additional numerical techniques"
            >
              Numerical mathematics extends far beyond differentiation and
              integration. The same ideas of approximation, iteration, error
              control, and validation appear throughout computational science.
            </SectionHeading>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {additionalMethods.map((method) => (
                <article key={method.title} className="pml-card">
                  <h3 className="text-lg font-semibold text-[#17202A]">
                    {method.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    {method.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Iteration and stopping criteria                                      */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">08 • Iterative algorithms</div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                  When should an algorithm stop?
                </h2>

                <div className="pml-prose mt-6">
                  <p>
                    Many numerical algorithms generate a sequence of
                    approximations rather than producing the final answer in a
                    single calculation.
                  </p>

                  <p>
                    The computation therefore needs a stopping criterion. A
                    common strategy is to stop when two successive
                    approximations are sufficiently close.
                  </p>
                </div>
              </div>

              <article className="pml-card">
                <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                  Example stopping criterion
                </div>

                <div className="pml-formula mt-4">
                  <MathRenderer>
                    {String.raw`\left|x_{n+1}-x_n\right| < \varepsilon`}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  Here, ε represents the desired tolerance. If the change
                  between successive approximations becomes smaller than this
                  tolerance, the algorithm may consider the result sufficiently
                  converged.
                </p>

                <div className="mt-5 border-t border-[#E9E9E6] pt-5">
                  <h3 className="font-semibold text-[#17202A]">
                    Important caution
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    A stopping criterion does not automatically prove that the
                    approximation is correct. The algorithm should also be
                    checked for convergence, stability, domain restrictions, and
                    other problem-specific conditions.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Newton iteration                                                    */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="09 • Example algorithm"
              title="Newton's method"
            >
              Newton's method illustrates how an iterative numerical algorithm
              can repeatedly improve an approximation to a root.
            </SectionHeading>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <article className="pml-card">
                <h3 className="text-xl font-semibold text-[#17202A]">
                  Iteration formula
                </h3>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {String.raw`x_{n+1}
                    =
                    x_n-\frac{f(x_n)}{f'(x_n)}`}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#687481]">
                  Starting from an initial estimate x₀, the formula generates a
                  new estimate. Repeating the process can move the sequence
                  toward a solution of f(x) = 0.
                </p>
              </article>

              <article className="pml-card">
                <h3 className="text-xl font-semibold text-[#17202A]">
                  What can go wrong?
                </h3>

                <ul className="mt-5 space-y-4">
                  {[
                    "The derivative may be zero or extremely small.",
                    "The initial estimate may be poorly chosen.",
                    "The iteration may diverge instead of converging.",
                    "The function may have multiple roots.",
                    "Floating-point errors can affect the final result.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-[#687481]"
                    >
                      <AlertTriangle
                        size={17}
                        className="mt-1 shrink-0 text-[#9A5B00]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Implementation workflow                                             */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="10 • Implementation workflow"
              title="A practical workflow for numerical computation"
            >
              A numerical solution becomes much more reliable when the algorithm
              is designed and validated systematically.
            </SectionHeading>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Define",
                  text: "Identify the mathematical problem, inputs, domain, desired output, and required tolerance.",
                },
                {
                  number: "02",
                  title: "Choose",
                  text: "Select an appropriate numerical method based on accuracy, cost, stability, and the structure of the problem.",
                },
                {
                  number: "03",
                  title: "Compute",
                  text: "Implement the algorithm carefully and monitor intermediate values, convergence, and numerical errors.",
                },
                {
                  number: "04",
                  title: "Validate",
                  text: "Compare with known solutions, alternative methods, theoretical bounds, or independent calculations when possible.",
                },
              ].map((step) => (
                <article key={step.number} className="pml-card">
                  <div className="text-xs font-bold tracking-widest text-[#2F5BEA]">
                    {step.number}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-[#17202A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Pseudocode                                                           */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="11 • Algorithm design"
              title="From mathematical formula to computer procedure"
            >
              A numerical formula must eventually become a sequence of explicit
              computational steps.
            </SectionHeading>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <article className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Code2 size={21} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                  General algorithm pattern
                </h3>

                <ol className="mt-5 space-y-4">
                  {[
                    "Choose input values and parameters.",
                    "Initialize the approximation.",
                    "Perform the numerical update.",
                    "Measure the change or error.",
                    "Check the stopping criterion.",
                    "Repeat until the result is sufficiently converged.",
                    "Validate the final approximation.",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-[#687481]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#17324D] text-xs font-semibold text-white">
                        {index + 1}
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="overflow-hidden border border-[#DEDEDB] bg-white">
                <div className="border-b border-[#DEDEDB] px-5 py-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                    Conceptual pseudocode
                  </div>
                </div>

                <pre className="overflow-x-auto p-6 text-sm leading-8 text-[#34404C]">
                  <code>{`choose initial approximation x
choose tolerance epsilon

repeat:
    compute next approximation
    measure the change
    update x

until change < epsilon

validate the result
return approximation`}</code>
                </pre>
              </article>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Numerical differentiation/integration connection                    */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="12 • Numerical calculus"
              title="How numerical calculus fits together"
            >
              Differentiation and integration are closely connected to the
              broader ideas of approximation and error control.
            </SectionHeading>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <MethodCard
                title="Numerical differentiation"
                description="Estimate a derivative from nearby function values using finite differences. Study forward, backward, and central difference formulas."
                link="/implementation/numerical-derivative"
                label="Open numerical differentiation"
              />

              <MethodCard
                title="Numerical integration"
                description="Approximate a definite integral using Riemann sums, the trapezoidal rule, or Simpson's rule."
                link="/implementation/numerical-integration"
                label="Open numerical integration"
              />
            </div>

            <div className="mt-8 border border-[#DEDEDB] bg-[#F8F7F4] p-6">
              <div className="flex items-start gap-4">
                <LinkIcon size={21} className="mt-1 shrink-0 text-[#2F5BEA]" />

                <div>
                  <h3 className="font-semibold text-[#17202A]">
                    Symbolic mathematics and numerical mathematics work together
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    An exact symbolic formula can provide theory, while a
                    numerical method can provide a practical approximation.
                    Comparing the two is often one of the best ways to study
                    numerical accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Practical considerations                                             */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <SectionHeading
              eyebrow="13 • Practical considerations"
              title="What should you check before trusting a numerical result?"
            >
              A numerical answer is meaningful only when the computation and its
              assumptions have been examined.
            </SectionHeading>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Check the domain",
                  text: "Make sure the function and algorithm are valid at the points where they are evaluated.",
                },
                {
                  title: "Check convergence",
                  text: "Determine whether increasing iterations or resolution actually moves the approximation toward a stable value.",
                },
                {
                  title: "Check step size",
                  text: "Choose a resolution appropriate for the smoothness of the function and the numerical method.",
                },
                {
                  title: "Check precision",
                  text: "Remember that floating-point arithmetic introduces finite-precision effects.",
                },
                {
                  title: "Compare methods",
                  text: "When possible, compare results from independent numerical methods or with an exact solution.",
                },
                {
                  title: "Report limitations",
                  text: "A responsible numerical result should include relevant assumptions, tolerance, approximation method, or error information.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="border border-[#DEDEDB] bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#18794E]"
                    />

                    <div>
                      <h3 className="font-semibold text-[#17202A]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#687481]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Applications                                                         */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="14 • Applications"
              title="Where numerical methods are used"
            >
              Numerical algorithms are fundamental whenever mathematical models
              must be evaluated using real data and finite computing resources.
            </SectionHeading>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {applications.map((application) => (
                <div
                  key={application}
                  className="border border-[#DEDEDB] bg-[#F8F7F4] px-4 py-5 text-center text-sm font-semibold text-[#34404C]"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Important idea                                                       */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="border border-[#DEDEDB] bg-white p-7 sm:p-9">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Lightbulb size={22} />
                </div>

                <div>
                  <div className="pml-eyebrow">Important idea</div>

                  <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                    An approximation should come with an explanation
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#687481] sm:text-base">
                    Numerical computation is not simply the process of producing
                    a decimal number. A useful numerical solution identifies the
                    method used, explains the approximation, considers error and
                    convergence, and provides enough information to judge
                    whether the result is trustworthy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Summary                                                             */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <SectionHeading
              eyebrow="15 • Summary"
              title="The essential ideas"
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Numerical methods turn mathematical problems into computational algorithms.",
                "Approximation is often necessary when exact symbolic solutions are unavailable or impractical.",
                "Accuracy, convergence, and stability are central concepts in numerical analysis.",
                "Truncation, round-off, measurement, and model errors can all affect a result.",
                "Reducing step size does not always improve a computation because floating-point effects can become important.",
                "Iterative methods require sensible stopping criteria and validation.",
                "A numerical result should be interpreted together with its assumptions and limitations.",
                "Numerical calculus connects naturally to differentiation, integration, optimization, differential equations, and scientific computing.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#E9E9E6] pb-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#18794E]"
                  />

                  <p className="text-sm leading-7 text-[#34404C]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Related resources                                                    */}
        {/* ------------------------------------------------------------------ */}

        <section className="border-t border-[#DEDEDB] bg-[#F8F7F4]">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <Link
                to="/implementation/numerical-derivative"
                className="group border border-[#DEDEDB] bg-white p-6 transition-colors hover:border-[#2F5BEA]"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                  Related
                </div>

                <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                  Numerical Derivatives
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Learn finite differences, step size, truncation error, and
                  numerical derivative accuracy.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Continue
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                to="/implementation/numerical-integration"
                className="group border border-[#DEDEDB] bg-white p-6 transition-colors hover:border-[#2F5BEA]"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                  Related
                </div>

                <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                  Numerical Integration
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Study Riemann sums, trapezoidal integration, Simpson's rule,
                  and numerical accuracy.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Continue
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                to="/calculators/optimization"
                className="group border border-[#DEDEDB] bg-white p-6 transition-colors hover:border-[#2F5BEA]"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#687481]">
                  Related
                </div>

                <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                  Optimization Calculator
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Explore numerical search and approximation for minimum and
                  maximum values.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Open calculator
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Final CTA                                                           */}
        {/* ------------------------------------------------------------------ */}

        <section className="bg-[#10283F]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                Continue learning
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Connect numerical methods with calculus
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                See how numerical approximation is used to compute derivatives,
                integrals, and other quantities when exact symbolic methods are
                inconvenient or unavailable.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/implementation/numerical-derivative"
                  className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Numerical derivatives
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/implementation/numerical-integration"
                  className="pml-dark-cta-link inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Numerical integration
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/learn"
                  className="pml-dark-cta-link inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Explore calculus
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
