// src/pages/Reference.jsx

import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  FileText,
  Layers3,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";

const resources = [
  {
    title: "Calculus Formulas",
    description:
      "A structured collection of essential formulas for limits, differentiation, integration, sequences, series, and multivariable calculus.",
    path: "/formulas",
    icon: Sigma,
    label: "Formula reference",
    topics: ["Derivatives", "Integrals", "Limits", "Series"],
  },
  {
    title: "Calculus Rules",
    description:
      "Review common differentiation, integration, limit, differential equation, and numerical mathematics rules with explanations and examples.",
    path: "/rules",
    icon: FileText,
    label: "Rules reference",
    topics: ["Differentiation", "Integration", "Limits", "ODEs"],
  },
  {
    title: "Calculators",
    description:
      "Use interactive numerical tools to explore functions, limits, derivatives, definite integrals, series, and optimization problems.",
    path: "/calculators",
    icon: Calculator,
    label: "Interactive tools",
    topics: ["Function graphs", "Limits", "Derivatives", "Integrals"],
  },
  {
    title: "Learn Calculus",
    description:
      "Follow structured lessons that build calculus knowledge from functions and limits through derivatives, integrals, series, and advanced topics.",
    path: "/learn",
    icon: BookOpen,
    label: "Learning path",
    topics: ["Foundations", "Limits", "Derivatives", "Integrals"],
  },
];

const referenceSections = [
  {
    title: "When you need a formula",
    description:
      "Use the formula reference when you already understand the concept and need to recall a standard mathematical relationship, identity, or result.",
    link: "/formulas",
    linkLabel: "Browse formulas",
  },
  {
    title: "When you need a rule",
    description:
      "Use the rules reference when solving a problem and you need to determine which differentiation, integration, limit, or numerical rule applies.",
    link: "/rules",
    linkLabel: "Browse rules",
  },
  {
    title: "When you want to calculate",
    description:
      "Use the calculators to experiment with mathematical expressions and compare numerical results with the concepts discussed in the learning materials.",
    link: "/calculators",
    linkLabel: "Open calculators",
  },
  {
    title: "When you need an explanation",
    description:
      "Return to the learning sections when you need definitions, intuition, worked examples, mathematical reasoning, and connections between topics.",
    link: "/learn",
    linkLabel: "Start learning",
  },
];

const topicLinks = [
  {
    title: "Foundations",
    description:
      "Functions, notation, domain, range, graphs, and rates of change.",
    path: "/learn/foundations",
  },
  {
    title: "Limits",
    description:
      "Approaching values, continuity, one-sided limits, and limits at infinity.",
    path: "/learn/limits",
  },
  {
    title: "Derivatives",
    description:
      "Instantaneous change, derivative rules, applications, and interpretation.",
    path: "/learn/derivatives",
  },
  {
    title: "Integrals",
    description:
      "Accumulation, antiderivatives, definite integrals, and the Fundamental Theorem.",
    path: "/learn/integrals",
  },
  {
    title: "Series",
    description: "Sequences, convergence, infinite series, and power series.",
    path: "/learn/series",
  },
  {
    title: "Multivariable Calculus",
    description:
      "Functions of several variables, partial derivatives, and multiple integrals.",
    path: "/learn/multivariable-calculus",
  },
];

export default function Reference() {
  return (
    <>
      <SEO
        title="Calculus Reference Center | Formulas, Rules, Calculators & Lessons"
        description="Explore the Practical Math Lab calculus reference center for formulas, rules, interactive calculators, structured lessons, applications, and numerical mathematics resources."
        canonical="/reference"
      />

      <PageHeader
        eyebrow="Reference"
        title="Calculus Reference Center"
        description="A central place to find formulas, rules, interactive calculators, and structured calculus lessons. Use the reference when you need a quick answer or a path toward deeper understanding."
      />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/* Introduction                                                     */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">How this reference works</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  Find the right resource for the problem in front of you
                </h2>

                <div className="pml-prose mt-6 max-w-3xl">
                  <p>
                    Calculus is easier to navigate when definitions, formulas,
                    rules, examples, and computation are connected. This
                    reference center brings those resources together so you can
                    move between them without losing the mathematical context.
                  </p>

                  <p>
                    If you already understand a topic, use the formulas or rules
                    as a quick reference. If a formula feels unfamiliar, move to
                    the learning section for a fuller explanation. When you want
                    to test an expression numerically, use one of the
                    interactive calculators.
                  </p>
                </div>
              </div>

              <div className="pml-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Layers3 size={21} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#17202A]">
                  A connected study system
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Learn the concept",
                    "Review the relevant rule",
                    "Apply the formula",
                    "Test the result",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-b border-[#E9E9E6] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#17324D] text-xs font-bold text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm leading-6 text-[#34404C]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Main resources                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Core resources</div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                Four ways to work with calculus
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#687481]">
                Choose a resource based on whether you are learning a concept,
                recalling a mathematical result, performing a calculation, or
                reviewing a rule.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {resources.map(
                ({ title, description, path, icon: Icon, label, topics }) => (
                  <Link
                    key={path}
                    to={path}
                    className="group rounded-xl border border-[#DEDEDB] bg-white p-7 transition-colors hover:border-[#2F5BEA]"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full border border-[#E9E9E6] px-3 py-1 text-xs font-semibold text-[#687481]">
                        {label}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#17202A]">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#687481]">
                      {description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-md bg-[#F8F7F4] px-2.5 py-1 text-xs font-medium text-[#34404C]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#17324D]">
                      Explore resource
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Choosing a resource                                              */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Choose your next step</div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                What are you trying to do?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#687481]">
                Different mathematical tasks require different kinds of
                information. Use the resource that matches your goal.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {referenceSections.map(
                ({ title, description, link, linkLabel }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-[#DEDEDB] bg-[#F8F7F4] p-6"
                  >
                    <h3 className="text-xl font-bold text-[#17202A]">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#687481]">
                      {description}
                    </p>

                    <Link
                      to={link}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA] hover:text-[#2448C7]"
                    >
                      {linkLabel}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Topic navigation                                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Topic navigation</div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                Continue directly to a calculus topic
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#687481]">
                The learning library is organized so that foundational ideas
                lead naturally into the major concepts of calculus.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topicLinks.map(({ title, description, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="group rounded-xl border border-[#DEDEDB] bg-white p-6 transition-colors hover:border-[#2F5BEA]"
                >
                  <h3 className="text-lg font-bold text-[#17202A]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#17324D]">
                    Study topic
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Study method                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">A practical study method</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                  Do not memorize formulas in isolation
                </h2>

                <div className="pml-prose mt-6">
                  <p>
                    A calculus formula is most useful when you understand what
                    it describes and when its conditions are satisfied.
                    Memorizing a derivative rule, for example, is only one part
                    of solving a differentiation problem.
                  </p>

                  <p>
                    A stronger approach is to identify the mathematical
                    structure first, choose the appropriate rule, apply it
                    carefully, and then check whether the result makes sense.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "1. Identify the concept",
                    text: "Determine whether the problem involves a limit, rate of change, accumulation, optimization, or another calculus idea.",
                  },
                  {
                    title: "2. Identify the structure",
                    text: "Look for products, quotients, compositions, powers, intervals, boundary conditions, or other features that determine the method.",
                  },
                  {
                    title: "3. Apply the appropriate rule",
                    text: "Use the relevant formula or theorem while keeping track of assumptions and domains.",
                  },
                  {
                    title: "4. Check the result",
                    text: "Use algebra, a graph, a numerical approximation, units, or another independent method when appropriate.",
                  },
                ].map(({ title, text }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-[#DEDEDB] bg-[#F8F7F4] p-5"
                  >
                    <h3 className="font-bold text-[#17202A]">{title}</h3>

                    <p className="mt-2 text-sm leading-6 text-[#687481]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Reference principles                                              */}
        {/* ---------------------------------------------------------------- */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FF] text-[#2F5BEA]">
                <CheckCircle2 size={23} />
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#17202A] sm:text-4xl">
                A reference is a starting point, not a substitute for
                understanding
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#687481]">
                Use concise reference material for review, but return to
                definitions, derivations, worked examples, and applications when
                a concept is unfamiliar. This combination makes it easier to
                recognize mathematical patterns and solve unfamiliar problems.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Final CTA                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-[#17324D]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                Continue learning
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build understanding, then use the reference when you need it
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
                Start with the structured lessons, return to the reference pages
                for review, and use the calculators to explore numerical
                behavior.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/learn"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition-colors hover:bg-slate-100"
                >
                  Start learning
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/calculators"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore calculators
                  <Calculator size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
