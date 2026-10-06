import {
  ArrowRight,
  CheckCircle2,
  Infinity,
  Lightbulb,
  Sigma,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Series() {
  return (
    <>
      <SEO
        title="Sequences and Infinite Series | Convergence, Taylor & Maclaurin Series"
        description="Learn sequences and infinite series, convergence and divergence, geometric series, convergence tests, power series, Taylor series, and Maclaurin series."
        canonical="/learn/series"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Sequences and Infinite Series"
        description="Learn how sequences describe patterns, how infinite series accumulate terms, and how convergence and power series provide powerful tools for approximation and analysis."
      />

      <main className="pml-container pml-section">
        <article className="max-w-4xl">
          {/* Introduction */}
          <section>
            <div className="pml-eyebrow">The big picture</div>

            <h2 className="pml-section-title mt-3">
              From sequences to infinite sums
            </h2>

            <p className="pml-prose mt-5">
              Calculus frequently studies processes that continue indefinitely.
              A sequence gives us an ordered list of values, while a series adds
              the terms of a sequence together.
            </p>

            <p className="pml-prose mt-4">
              Infinite series are especially useful because complicated
              functions can sometimes be represented as sums of simpler
              expressions. This makes series important in approximation,
              numerical computation, physics, engineering, and differential
              equations.
            </p>

            <div className="pml-card mt-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#EEF3FF] p-3 text-[#2F5BEA]">
                  <Infinity size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#17202A]">
                    The central question
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#687481]">
                    When infinitely many terms are added together, does the
                    resulting sum approach a finite value?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sequences */}
          <section className="mt-16">
            <div className="pml-eyebrow">01 • Sequences</div>

            <h2 className="pml-section-title mt-3">What is a sequence?</h2>

            <p className="pml-prose mt-5">
              A sequence is an ordered list of numbers generated according to
              some rule. The individual values are called terms.
            </p>

            <MathRenderer block>a₁, a₂, a₃, ..., aₙ, ...</MathRenderer>

            <p className="pml-prose mt-5">For example, the sequence</p>

            <MathRenderer block>1, 1/2, 1/3, 1/4, ...</MathRenderer>

            <p className="pml-prose mt-5">can be described by the formula:</p>

            <MathRenderer block>aₙ = 1/n</MathRenderer>

            <p className="pml-prose mt-5">
              As <strong>n</strong> becomes larger, the terms become smaller and
              approach zero. This idea of approaching a value is closely
              connected to limits.
            </p>

            <div className="pml-success mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Key idea:</strong> A sequence describes individual
                  terms. A series is formed when those terms are added together.
                </div>
              </div>
            </div>
          </section>

          {/* Sequence limits */}
          <section className="mt-16">
            <div className="pml-eyebrow">02 • Limits</div>

            <h2 className="pml-section-title mt-3">The limit of a sequence</h2>

            <p className="pml-prose mt-5">
              A sequence may approach a particular number as its index becomes
              very large. We write this using a limit:
            </p>

            <MathRenderer block>limₙ→∞ aₙ = L</MathRenderer>

            <p className="pml-prose mt-5">
              This means that the terms of the sequence get arbitrarily close to{" "}
              <strong>L</strong> as <strong>n</strong> becomes large.
            </p>

            <p className="pml-prose mt-4">For example:</p>

            <MathRenderer block>limₙ→∞ 1/n = 0</MathRenderer>

            <p className="pml-prose mt-5">
              Sequence limits are important because convergence of an infinite
              series is determined by the behavior of its partial sums.
            </p>
          </section>

          {/* Infinite series */}
          <section className="mt-16">
            <div className="pml-eyebrow">03 • Infinite series</div>

            <h2 className="pml-section-title mt-3">
              What is an infinite series?
            </h2>

            <p className="pml-prose mt-5">
              A series is the sum of the terms of a sequence. An infinite series
              can be written as:
            </p>

            <MathRenderer block>Σₙ₌₁∞ aₙ</MathRenderer>

            <p className="pml-prose mt-5">
              To understand an infinite sum, we first consider finite partial
              sums:
            </p>

            <MathRenderer block>Sₙ = a₁ + a₂ + a₃ + ... + aₙ</MathRenderer>

            <p className="pml-prose mt-5">
              We then study what happens to these partial sums as{" "}
              <strong>n</strong> approaches infinity.
            </p>

            <MathRenderer block>S = limₙ→∞ Sₙ</MathRenderer>

            <p className="pml-prose mt-5">
              If this limit exists and is finite, the infinite series converges.
              Otherwise, it diverges.
            </p>
          </section>

          {/* Geometric series */}
          <section className="mt-16">
            <div className="pml-eyebrow">04 • A fundamental example</div>

            <h2 className="pml-section-title mt-3">Geometric series</h2>

            <p className="pml-prose mt-5">
              One of the most important examples of an infinite series is the
              geometric series:
            </p>

            <MathRenderer block>a + ar + ar² + ar³ + ...</MathRenderer>

            <p className="pml-prose mt-5">When the common ratio satisfies:</p>

            <MathRenderer block>|r| &lt; 1</MathRenderer>

            <p className="pml-prose mt-5">the series converges to:</p>

            <MathRenderer block>Σₙ₌₀∞ arⁿ = a/(1-r)</MathRenderer>

            <div className="pml-card mt-8">
              <h3 className="font-semibold text-[#17202A]">Example</h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Consider the series:
              </p>

              <MathRenderer block>1 + 1/2 + 1/4 + 1/8 + ...</MathRenderer>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Here, <strong>a = 1</strong> and <strong>r = 1/2</strong>.
                Therefore:
              </p>

              <MathRenderer block>S = 1/(1 - 1/2) = 2</MathRenderer>
            </div>
          </section>

          {/* Convergence */}
          <section className="mt-16">
            <div className="pml-eyebrow">05 • Convergence</div>

            <h2 className="pml-section-title mt-3">
              Convergence and divergence
            </h2>

            <p className="pml-prose mt-5">
              An infinite series <strong>converges</strong> when its partial
              sums approach a finite number. It <strong>diverges</strong> when
              the partial sums do not approach a finite value.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="pml-card">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#18794E]" size={21} />

                  <h3 className="font-semibold text-[#17202A]">Convergent</h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  The partial sums approach a finite limit.
                </p>
              </div>

              <div className="pml-card">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-[#9A5B00]" size={21} />

                  <h3 className="font-semibold text-[#17202A]">Divergent</h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  The partial sums fail to approach a finite limit.
                </p>
              </div>
            </div>

            <div className="pml-warning mt-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0" size={20} />

                <div>
                  <strong>Important test:</strong> If a series{" "}
                  <MathRenderer inline>Σaₙ</MathRenderer> converges, then
                  necessarily <MathRenderer inline>limₙ→∞ aₙ = 0</MathRenderer>.
                  However, the reverse is not necessarily true.
                </div>
              </div>
            </div>
          </section>

          {/* Convergence tests */}
          <section className="mt-16">
            <div className="pml-eyebrow">06 • Convergence tests</div>

            <h2 className="pml-section-title mt-3">
              How do we determine convergence?
            </h2>

            <p className="pml-prose mt-5">
              Many series do not have an obvious closed-form sum. In these
              cases, convergence tests allow us to determine whether the series
              converges or diverges.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Geometric series",
                  text: "Use the common ratio to determine whether a geometric series converges.",
                },
                {
                  title: "Comparison test",
                  text: "Compare the terms with another series whose behavior is already known.",
                },
                {
                  title: "Ratio test",
                  text: "Examine the limit of the ratio between consecutive absolute terms.",
                },
                {
                  title: "Root test",
                  text: "Use nth roots of the absolute values of the terms.",
                },
                {
                  title: "Integral test",
                  text: "Relate an infinite series to an improper integral.",
                },
                {
                  title: "Alternating series test",
                  text: "Analyze series whose terms alternate between positive and negative.",
                },
              ].map(({ title, text }) => (
                <div
                  key={title}
                  className="border-l-2 border-[#DEDEDB] py-1 pl-5"
                >
                  <h3 className="font-semibold text-[#17202A]">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Power series */}
          <section className="mt-16">
            <div className="pml-eyebrow">07 • Power series</div>

            <h2 className="pml-section-title mt-3">
              Representing functions with series
            </h2>

            <p className="pml-prose mt-5">
              A power series is an infinite series involving powers of a
              variable. A common form centered at <strong>a</strong> is:
            </p>

            <MathRenderer block>Σₙ₌₀∞ cₙ(x-a)ⁿ</MathRenderer>

            <p className="pml-prose mt-5">
              Power series do not necessarily converge for every value of
              <strong> x</strong>. They typically have an interval or radius of
              convergence that determines where the representation is valid.
            </p>

            <div className="pml-card mt-8">
              <h3 className="font-semibold text-[#17202A]">Why this matters</h3>

              <p className="mt-3 text-sm leading-7 text-[#687481]">
                Within its interval of convergence, a power series can provide a
                useful representation of a function and can often be
                differentiated or integrated term by term.
              </p>
            </div>
          </section>

          {/* Taylor series */}
          <section className="mt-16">
            <div className="pml-eyebrow">08 • Taylor series</div>

            <h2 className="pml-section-title mt-3">Taylor series</h2>

            <p className="pml-prose mt-5">
              A Taylor series represents a sufficiently differentiable function
              as an infinite power series around a chosen point{" "}
              <strong>a</strong>.
            </p>

            <MathRenderer block>
              f(x) = Σₙ₌₀∞ [f⁽ⁿ⁾(a) / n!] (x-a)ⁿ
            </MathRenderer>

            <p className="pml-prose mt-5">The first few terms are:</p>

            <MathRenderer block>
              f(x) = f(a) + f′(a)(x-a) + f″(a)/2!(x-a)² + ...
            </MathRenderer>

            <p className="pml-prose mt-5">
              The more terms we include, the more closely the polynomial may
              approximate the original function near the center of expansion.
            </p>
          </section>

          {/* Maclaurin */}
          <section className="mt-16">
            <div className="pml-eyebrow">09 • Maclaurin series</div>

            <h2 className="pml-section-title mt-3">
              Taylor series centered at zero
            </h2>

            <p className="pml-prose mt-5">
              A Maclaurin series is simply a Taylor series centered at{" "}
              <strong>a = 0</strong>.
            </p>

            <MathRenderer block>f(x) = Σₙ₌₀∞ [f⁽ⁿ⁾(0) / n!]xⁿ</MathRenderer>

            <p className="pml-prose mt-5">
              Several familiar functions have important Maclaurin expansions.
              For example:
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="pml-card">
                <h3 className="font-semibold text-[#17202A]">
                  Exponential function
                </h3>

                <MathRenderer block>
                  eˣ = 1 + x + x²/2! + x³/3! + ...
                </MathRenderer>
              </div>

              <div className="pml-card">
                <h3 className="font-semibold text-[#17202A]">Sine function</h3>

                <MathRenderer block>
                  sin(x) = x - x³/3! + x⁵/5! - ...
                </MathRenderer>
              </div>
            </div>
          </section>

          {/* Approximation */}
          <section className="mt-16">
            <div className="pml-eyebrow">10 • Approximation</div>

            <h2 className="pml-section-title mt-3">
              Why Taylor series are useful
            </h2>

            <p className="pml-prose mt-5">
              Infinite series can be used to approximate functions with
              polynomials. Polynomial expressions are often easier to evaluate,
              differentiate, integrate, or use in numerical algorithms.
            </p>

            <p className="pml-prose mt-4">For example, near zero:</p>

            <MathRenderer block>sin(x) ≈ x</MathRenderer>

            <p className="pml-prose mt-5">
              A more accurate approximation includes additional terms:
            </p>

            <MathRenderer block>sin(x) ≈ x - x³/3!</MathRenderer>

            <p className="pml-prose mt-5">
              This illustrates an important principle: adding more appropriate
              terms can improve an approximation within the region where the
              series converges effectively.
            </p>
          </section>

          {/* Applications */}
          <section className="mt-16">
            <div className="pml-eyebrow">11 • Applications</div>

            <h2 className="pml-section-title mt-3">
              Where sequences and series are used
            </h2>

            <p className="pml-prose mt-5">
              Series are not only theoretical objects. They provide practical
              methods for representing and approximating quantities in many
              fields.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Numerical computation",
                  "Approximate functions and values that are difficult to calculate directly.",
                ],
                [
                  "Differential equations",
                  "Construct series-based solutions to important differential equations.",
                ],
                [
                  "Physics",
                  "Model oscillations, waves, fields, and other physical systems.",
                ],
                [
                  "Engineering",
                  "Develop useful approximations for system analysis and computation.",
                ],
                [
                  "Probability",
                  "Represent generating functions and evaluate important probability quantities.",
                ],
                [
                  "Mathematical analysis",
                  "Study convergence, approximation, and properties of functions.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-l-2 border-[#DEDEDB] py-1 pl-5"
                >
                  <h3 className="font-semibold text-[#17202A]">{title}</h3>

                  <p className="mt-1 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Core ideas */}
          <section className="mt-16">
            <div className="pml-eyebrow">Core concepts</div>

            <h2 className="pml-section-title mt-3">What to remember</h2>

            <div className="mt-8 space-y-3">
              {[
                "A sequence is an ordered list of terms.",
                "A series is the sum of the terms of a sequence.",
                "An infinite series is studied through its sequence of partial sums.",
                "A convergent series has a finite limit for its partial sums.",
                "The fact that aₙ approaches zero is necessary for convergence but is not sufficient by itself.",
                "Convergence tests help determine the behavior of series that cannot be evaluated directly.",
                "Power series represent functions using infinitely many powers of a variable.",
                "Taylor and Maclaurin series provide polynomial approximations to functions.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#E9E9E6] py-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#18794E]"
                  />

                  <p className="text-sm leading-6 text-[#34404C]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="mt-16">
            <div className="pml-eyebrow">Summary</div>

            <h2 className="pml-section-title mt-3">
              Understanding infinite behavior
            </h2>

            <p className="pml-prose mt-5">
              Sequences and series provide a framework for understanding
              infinite processes. Sequences describe how individual terms
              behave, while series investigate what happens when those terms are
              accumulated.
            </p>

            <p className="pml-prose mt-4">
              The concepts of convergence, power series, and Taylor expansions
              connect directly to limits, derivatives, integrals, numerical
              methods, and differential equations. They are therefore an
              important bridge between introductory calculus and more advanced
              mathematical analysis.
            </p>
          </section>

          {/* Related topics */}
          <section className="mt-16 border-t border-[#DEDEDB] pt-10">
            <div className="pml-eyebrow">Continue learning</div>

            <h2 className="pml-section-title mt-3">Related topics</h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <Link
                to="/learn/limits"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Infinity className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">Limits</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review the limit concepts that provide the foundation for
                  sequence and series convergence.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review limits
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/derivatives"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <TrendingUp className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Derivatives
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Understand derivatives before using higher derivatives in
                  Taylor expansions.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review derivatives
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/differential-equations"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Sigma className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Differential Equations
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  See how series can be used to construct solutions to
                  differential equations.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Explore differential equations
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16 rounded-2xl bg-[#17324D] p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <Sigma className="mt-1 shrink-0 text-white" size={22} />

              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Put calculus into practice
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                  Explore practical calculus applications and numerical tools to
                  see how the concepts you learn can be used to solve real
                  mathematical problems.
                </p>

                <Link
                  to="/calculators/series"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Open Series Calculator
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
