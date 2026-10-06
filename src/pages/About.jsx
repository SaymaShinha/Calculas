// src/pages/About.jsx

import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Code2,
  Eye,
  GraduationCap,
  Lightbulb,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";

const principles = [
  {
    icon: Lightbulb,
    title: "Concept before formula",
    description:
      "A formula is easier to remember when you understand the mathematical idea behind it. The lessons emphasize meaning, interpretation, and reasoning before relying on memorization.",
  },
  {
    icon: Eye,
    title: "Visual understanding",
    description:
      "Graphs and geometric interpretations can make abstract calculus concepts easier to understand and help connect equations with the behavior they describe.",
  },
  {
    icon: Calculator,
    title: "Practical calculation",
    description:
      "Interactive tools allow learners to experiment with functions, limits, derivatives, integrals, series, and optimization while developing an intuitive understanding of the mathematics.",
  },
  {
    icon: Code2,
    title: "Numerical implementation",
    description:
      "Calculus also matters in computing, engineering, simulation, and scientific programming. Numerical methods show how mathematical ideas can be translated into algorithms.",
  },
];

const learningSteps = [
  "Learn the concept",
  "Understand the formula",
  "Practice the method",
  "Visualize the result",
  "Apply the mathematics",
  "Implement numerical methods",
];

const resources = [
  "Calculus lessons",
  "Formula references",
  "Derivative and integral rules",
  "Interactive calculators",
  "Function visualization",
  "Worked mathematical examples",
  "Real-world applications",
  "Numerical methods",
  "Programming-oriented explanations",
];

const areas = [
  {
    title: "Foundations",
    description:
      "Functions, graphs, notation, domain and range, rates of change, and the mathematical ideas needed before formal calculus.",
    link: "/learn/foundations",
  },
  {
    title: "Limits",
    description:
      "Understand approaching behavior, one-sided limits, continuity, limits at infinity, and the foundation of calculus.",
    link: "/learn/limits",
  },
  {
    title: "Derivatives",
    description:
      "Study instantaneous rate of change, differentiation rules, graph behavior, optimization, and applications.",
    link: "/learn/derivatives",
  },
  {
    title: "Integrals",
    description:
      "Explore accumulation, antiderivatives, definite integrals, area, the Fundamental Theorem, and applications.",
    link: "/learn/integrals",
  },
  {
    title: "Numerical methods",
    description:
      "Learn how derivatives, integrals, equations, and other mathematical problems can be approximated computationally.",
    link: "/implementation/numerical-methods",
  },
  {
    title: "Calculators",
    description:
      "Use interactive mathematical tools to experiment with functions, limits, derivatives, integrals, series, and optimization.",
    link: "/calculators",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Practical Math Lab | Learn Calculus Through Theory & Practice"
        description="Learn about Practical Math Lab, an educational resource connecting calculus theory with formulas, visualization, interactive calculators, applications, and numerical implementation."
        canonical="/about"
      />

      <PageHeader
        eyebrow="About the Lab"
        title="Making calculus practical and understandable"
        description="Practical Math Lab is an educational resource designed to connect calculus theory with calculation, visualization, applications, and numerical implementation."
      />

      <main>
        {/* ------------------------------------------------------------------ */}
        {/* Why the site exists                                                 */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">Why Practical Math Lab exists</div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                  Calculus is more than a collection of formulas
                </h2>

                <div className="pml-prose mt-6">
                  <p>
                    Calculus is often introduced as a sequence of formulas,
                    rules, and procedures. These tools are important, but
                    mathematical understanding becomes much stronger when the
                    learner also understands what those formulas represent and
                    why they work.
                  </p>

                  <p>
                    Practical Math Lab is designed around that broader learning
                    experience. A learner can study a concept, review its
                    mathematical notation, work through an example, visualize
                    the result, and then explore how the idea is used in a
                    practical setting.
                  </p>

                  <p>
                    The site also introduces numerical and computational
                    methods. These topics help explain how calculus is
                    approximated when exact symbolic calculations are
                    unavailable, inconvenient, or unsuitable for a computer
                    program.
                  </p>
                </div>
              </div>

              <div className="pml-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <GraduationCap size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#17202A]">
                  Learn → Understand → Apply → Implement
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#687481]">
                  The learning system follows a progression from mathematical
                  foundations toward applications and computational methods.
                </p>

                <div className="mt-7 space-y-3">
                  {learningSteps.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-[#E9E9E6] bg-[#F8F7F4] px-4 py-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#17324D] text-xs font-bold text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-medium text-[#34404C]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Educational principles                                               */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Our educational principles</div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                Building understanding instead of memorization
              </h2>

              <p className="mt-5 text-base leading-8 text-[#687481] sm:text-lg">
                The resources are designed around a few principles that help
                turn calculus from a memorization exercise into a connected
                mathematical subject.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {principles.map(({ icon: Icon, title, description }) => (
                <article key={title} className="pml-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[#17202A]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687481]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* What you can find                                                   */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="border border-[#DEDEDB] bg-[#F8F7F4] p-7 sm:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <BookOpen size={25} />
                </div>

                <div>
                  <div className="pml-eyebrow">Learning resources</div>

                  <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                    What you can find here
                  </h2>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#687481]">
                    Practical Math Lab brings several complementary resources
                    together so that learners can move between explanation,
                    calculation, visualization, and application.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-[#E9E9E6] bg-white px-4 py-4 text-sm font-medium text-[#34404C]"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#18794E]"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Main learning areas                                                  */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Explore the site</div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                A connected calculus learning system
              </h2>

              <p className="mt-5 text-base leading-8 text-[#687481] sm:text-lg">
                Each part of the site serves a different purpose, while the
                sections are designed to work together as a coherent learning
                path.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <article
                  key={area.title}
                  className="flex h-full flex-col border border-[#DEDEDB] bg-white p-6"
                >
                  <h3 className="text-xl font-semibold text-[#17202A]">
                    {area.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#687481]">
                    {area.description}
                  </p>

                  <Link
                    to={area.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors hover:!text-[#2448C7]"
                  >
                    Explore {area.title}
                    <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Mathematical philosophy                                             */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">A practical approach</div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                  Connect different representations of the same idea
                </h2>
              </div>

              <div className="pml-prose">
                <p>
                  A mathematical concept can often be understood from several
                  perspectives. An equation describes a relationship
                  symbolically. A graph shows its behavior visually. A table
                  provides numerical values. A calculator allows
                  experimentation, while an application demonstrates why the
                  mathematics is useful.
                </p>

                <p>
                  Moving between these representations is an important part of
                  mathematical fluency. Practical Math Lab aims to make those
                  connections easier to explore.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  label: "01",
                  title: "Theory",
                  text: "Understand the mathematical concept.",
                },
                {
                  label: "02",
                  title: "Formula",
                  text: "Connect the concept to mathematical notation.",
                },
                {
                  label: "03",
                  title: "Calculation",
                  text: "Work through numerical examples and tools.",
                },
                {
                  label: "04",
                  title: "Application",
                  text: "See how the mathematics is used in practice.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[#DEDEDB] bg-[#F8F7F4] p-5"
                >
                  <div className="text-xs font-bold tracking-widest text-[#2F5BEA]">
                    {item.label}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Who the site is for                                                  */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="pml-eyebrow">Who it is for</div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                  A resource for learning and review
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Students",
                    text: "Review calculus concepts, formulas, examples, and methods alongside coursework.",
                  },
                  {
                    title: "Independent learners",
                    text: "Build calculus knowledge through a structured progression from foundations to applications.",
                  },
                  {
                    title: "Teachers and tutors",
                    text: "Use explanations, references, and computational examples as supplementary learning material.",
                  },
                  {
                    title: "Programming learners",
                    text: "Explore how mathematical concepts can be approximated and implemented computationally.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="border border-[#DEDEDB] bg-white p-6"
                  >
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
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Important note                                                       */}
        {/* ------------------------------------------------------------------ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="border border-[#DEDEDB] bg-[#F8F7F4] p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <Sigma size={22} className="mt-1 shrink-0 text-[#2F5BEA]" />

                <div>
                  <div className="pml-eyebrow">Our approach</div>

                  <h2 className="mt-3 text-2xl font-semibold text-[#17202A]">
                    Mathematics should remain understandable
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#687481] sm:text-base">
                    Practical Math Lab focuses on clear explanations,
                    transparent calculations, meaningful examples, and
                    connections between theory and practice. The goal is not
                    simply to provide an answer, but to help explain the
                    mathematical reasoning behind it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Final CTA                                                            */}
        {/* ------------------------------------------------------------------ */}

        <section className="bg-[#10283F]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                Start exploring
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build your understanding of calculus
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Start with the foundations, review important rules and formulas,
                experiment with calculators, and explore how calculus is applied
                and implemented computationally.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/learn"
                  className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold !text-[#17324D] transition-colors hover:bg-slate-100 hover:!text-[#10283F]"
                >
                  Start learning
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/calculators"
                  className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-white/10 hover:!text-white"
                >
                  Explore calculators
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/reference"
                  className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-white/10 hover:!text-white"
                >
                  Open reference
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
