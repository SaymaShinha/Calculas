// src/pages/learn/Limits.jsx

import {
  ArrowRight,
  CheckCircle2,
  Infinity,
  Lightbulb,
  MoveRight,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

const whyLimitsMatter = [
  {
    title: "Derivatives",
    description:
      "The derivative is defined using a limit, allowing us to describe instantaneous rates of change.",
    path: "/learn/derivatives",
  },
  {
    title: "Continuity",
    description:
      "Limits provide the language used to determine whether a function behaves continuously at a point.",
    path: "#continuity",
  },
  {
    title: "Integrals",
    description:
      "Definite integrals can be understood as limits of sums that approximate accumulated quantities.",
    path: "/learn/integrals",
  },
];

const limitMethods = [
  {
    number: "01",
    title: "Direct substitution",
    description:
      "If the function is continuous at the point, substitute the approaching value directly.",
  },
  {
    number: "02",
    title: "Algebraic simplification",
    description:
      "Factor, expand, rationalize, or otherwise simplify an expression before evaluating the limit.",
  },
  {
    number: "03",
    title: "One-sided analysis",
    description:
      "Examine what happens from the left and right when the behavior near a point differs by direction.",
  },
  {
    number: "04",
    title: "Limits at infinity",
    description:
      "Study the long-term behavior of a function as the input becomes very large or very negative.",
  },
];

const summaryPoints = [
  "A limit describes what a function approaches as the input gets close to a particular value.",
  "The value of a limit does not necessarily equal the function's actual value at that point.",
  "Direct substitution often works when the function is continuous at the point.",
  "A two-sided limit exists only when the corresponding left-hand and right-hand limits agree.",
  "Limits provide the foundation for derivatives, continuity, and the limiting process behind definite integrals.",
];

export default function Limits() {
  return (
    <>
      <SEO
        title="Limits in Calculus | Definition, Examples & Applications"
        description="Learn what limits mean, how to evaluate limits, direct substitution, one-sided limits, limits at infinity, continuity, and why limits are fundamental to calculus."
        canonical="/learn/limits"
      />

      <PageHeader
        eyebrow="Learn • Limits"
        title="Understanding Limits"
        description="Learn how limits describe the behavior of functions as inputs approach a value, and see why limits form the foundation of derivatives, continuity, and integral calculus."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="pml-prose">
                <div className="pml-eyebrow">The central question</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  What does a limit actually mean?
                </h2>

                <p className="mt-5">
                  A limit asks what value a function approaches as its input
                  gets closer and closer to a particular number.
                </p>

                <p>
                  The important idea is <strong>approach</strong>. We are
                  interested in the behavior of the function near a point,
                  rather than simply asking what happens when the input is
                  exactly equal to that point.
                </p>

                <p>
                  This distinction becomes especially important when a function
                  is undefined at the point, has a removable discontinuity, or
                  behaves differently from the left and right.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Limit notation
                </p>

                <div className="pml-formula mt-5 text-center">
                  <MathRenderer>{"\\lim_{x\\to a} f(x) = L"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  This means that as <strong>x</strong> approaches{" "}
                  <strong>a</strong>, the values of <strong>f(x)</strong>{" "}
                  approach <strong>L</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intuition */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Think about approach</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  The value at the point is not always the main question.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  A function may be undefined at a particular point and still
                  have a perfectly well-defined limit there.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <MoveRight size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    Nearby behavior
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Imagine moving toward <strong>x = a</strong> from nearby
                  values. The limit describes the number that the function
                  values are getting closer to during that process.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["x = a - 0.1", "approaching"],
                    ["x = a", "target"],
                    ["x = a + 0.1", "approaching"],
                  ].map(([value, label]) => (
                    <div
                      key={value}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"
                    >
                      <code className="font-mono text-xs font-semibold text-[#17324d]">
                        {value}
                      </code>

                      <p className="mt-1 text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why limits matter */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Why limits matter</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Limits connect the major ideas of calculus.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Limits are not an isolated topic. They provide the mathematical
                foundation for several of the most important concepts in
                calculus.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {whyLimitsMatter.map((item) => {
                const isAnchor = item.path.startsWith("#");

                const content = (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#17324d]">
                      <Sigma size={19} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    {!isAnchor && (
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
                        Explore topic
                        <ArrowRight size={15} />
                      </div>
                    )}
                  </>
                );

                return isAnchor ? (
                  <a key={item.title} href={item.path} className="pml-card p-6">
                    {content}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="pml-card p-6"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Direct substitution */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">01 · Evaluating limits</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Start with direct substitution.
                </h2>

                <div className="pml-prose mt-5">
                  <p>
                    When a function is continuous at the point we are
                    approaching, the limit can often be found simply by
                    substituting that value into the expression.
                  </p>

                  <p>Consider:</p>
                </div>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"\\lim_{x\\to 2}(x^2+3x)"}</MathRenderer>
                </div>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"= 2^2 + 3(2) = 10"}</MathRenderer>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Worked idea
                </p>

                <ol className="mt-5 space-y-5">
                  {[
                    "Identify the value x approaches.",
                    "Substitute that value into the function.",
                    "Simplify the resulting expression.",
                    "Check whether the result is finite and meaningful.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-xs font-bold text-[#17324d]">
                        {index + 1}
                      </span>

                      <p className="pt-1 text-sm leading-6 text-slate-600">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* When direct substitution fails */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">When it gets harder</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                  What if substitution gives an undefined form?
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Some limits cannot be evaluated by direct substitution. In
                  those cases, the expression may need to be simplified or its
                  behavior examined more carefully.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {limitMethods.map((method) => (
                  <div
                    key={method.number}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <span className="font-mono text-xs font-bold text-blue-700">
                      {method.number}
                    </span>

                    <h3 className="mt-4 text-base font-bold text-slate-900">
                      {method.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* One-sided limits */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">02 · One-sided limits</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Approach a point from either direction.
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  Sometimes the behavior of a function is different depending on
                  whether we approach a point from the left or from the right.
                </p>

                <p>
                  These are called one-sided limits. The superscript minus
                  indicates approach from values smaller than the target, while
                  the superscript plus indicates approach from values larger
                  than the target.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="pml-formula">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  From the left
                </p>

                <MathRenderer>{"\\lim_{x\\to a^-}f(x)"}</MathRenderer>
              </div>

              <div className="pml-formula">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  From the right
                </p>

                <MathRenderer>{"\\lim_{x\\to a^+}f(x)"}</MathRenderer>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#f1d7a3] bg-[#fff7e8] p-6">
              <div className="flex gap-4">
                <Lightbulb
                  className="mt-0.5 shrink-0 text-[#9a5b00]"
                  size={20}
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Important condition
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A two-sided limit exists only when the left-hand and
                    right-hand limits both exist and are equal.
                  </p>

                  <div className="mt-4">
                    <MathRenderer>
                      {"\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L"}
                    </MathRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important distinction */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Important distinction</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A limit and a function value are not the same thing.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The expression <strong>f(a)</strong> asks for the actual value
                of the function at <strong>a</strong>. A limit asks what values
                the function approaches as <strong>x</strong> gets close to{" "}
                <strong>a</strong>.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                    Function value
                  </p>

                  <div className="mt-4">
                    <MathRenderer>{"f(a)"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    What the function actually equals at the point.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                    Limit
                  </p>

                  <div className="mt-4">
                    <MathRenderer>{"\\lim_{x\\to a}f(x)"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    What the function approaches near the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continuity */}
        <section id="continuity" className="pml-section scroll-mt-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">03 · Continuity</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Limits help define continuity.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Informally, a function is continuous at a point when its
                  nearby behavior connects with the function's actual value at
                  that point.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">
                  A function <strong>f</strong> is continuous at{" "}
                  <strong>x = a</strong> when three conditions are satisfied:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "f(a) is defined.",
                    "The limit as x approaches a exists.",
                    "The limit equals f(a).",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#18794e]"
                      />

                      <div>
                        <span className="font-mono text-xs text-slate-400">
                          {index + 1}.
                        </span>{" "}
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pml-formula mt-7">
                  <MathRenderer>{"\\lim_{x\\to a}f(x)=f(a)"}</MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limits at infinity */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">04 · Limits at infinity</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Study long-term behavior.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Limits are also used to describe what happens as the input
                  becomes arbitrarily large or arbitrarily negative.
                </p>

                <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                  These limits help us understand horizontal asymptotes and the
                  long-term behavior of functions.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Example
                </p>

                <div className="pml-formula mt-5">
                  <MathRenderer>
                    {"\\lim_{x\\to\\infty}\\frac{1}{x}=0"}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  As <strong>x</strong> becomes increasingly large,{" "}
                  <strong>1/x</strong> gets closer and closer to zero.
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Interpretation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    The function approaches zero without requiring x to equal
                    any finite value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Epsilon intuition */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">A deeper definition</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Precision: the epsilon-delta idea.
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  The intuitive idea of getting closer can be made precise. The
                  formal definition of a limit uses two positive quantities,
                  usually written as <strong>ε</strong> and <strong>δ</strong>.
                </p>

                <p>
                  Roughly speaking, if we want the function values to be within
                  a chosen distance <strong>ε</strong> of <strong>L</strong>, we
                  can restrict <strong>x</strong> to be sufficiently close to{" "}
                  <strong>a</strong>.
                </p>
              </div>

              <div className="pml-formula mt-7">
                <MathRenderer>
                  {
                    "\\forall\\,\\varepsilon>0,\\ \\exists\\,\\delta>0\\ \\text{such that}\\ 0<|x-a|<\\delta\\Rightarrow|f(x)-L|<\\varepsilon"
                  }
                </MathRenderer>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                The formal definition is especially important in higher
                mathematics because it replaces the informal phrase "gets
                arbitrarily close" with a precise condition.
              </p>
            </div>
          </div>
        </section>

        {/* Key idea */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex gap-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    A useful way to think about limits
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A limit is fundamentally about{" "}
                    <strong>behavior near a point</strong>. The function may
                    have a value at the point, may have no value there, or may
                    behave differently from either side. What matters for the
                    limit is the value the function approaches.
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
              <div className="pml-eyebrow">Limits summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
                {summaryPoints.map((item, index) => (
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
                  Next topic
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  From limits to instantaneous change
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  The derivative uses limits to measure the instantaneous rate
                  at which a function changes.
                </p>
              </div>

              <Link
                to="/learn/derivatives"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Derivatives
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
