import {
  AreaChart,
  ArrowRight,
  Box,
  Car,
  FlaskConical,
  Hammer,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";

const applications = [
  {
    number: "01",
    title: "Motion",
    description:
      "Use derivatives and integrals to connect position, velocity, acceleration, and accumulated distance.",
    path: "/applications/motion",
    icon: Car,
    level: "Core",
    concepts: "Derivatives · Integrals · Rates of change",
  },
  {
    number: "02",
    title: "Optimization",
    description:
      "Use derivatives to locate maximum and minimum values in design, economics, engineering, and decision problems.",
    path: "/applications/optimization",
    icon: FlaskConical,
    level: "Core",
    concepts: "Critical points · Extrema · Derivatives",
  },
  {
    number: "03",
    title: "Area",
    description:
      "Use definite integrals to calculate area and understand accumulated quantities from continuously varying rates.",
    path: "/applications/area",
    icon: AreaChart,
    level: "Core",
    concepts: "Definite integrals · Accumulation · Riemann sums",
  },
  {
    number: "04",
    title: "Volume",
    description:
      "Calculate volumes using cross-sections, disks, washers, and cylindrical shells.",
    path: "/applications/volume",
    icon: Box,
    level: "Intermediate",
    concepts: "Integration · Cross-sections · Solids of revolution",
  },
  {
    number: "05",
    title: "Work",
    description:
      "Apply integration to calculate work when a force changes continuously with position.",
    path: "/applications/work",
    icon: Hammer,
    level: "Intermediate",
    concepts: "Force · Distance · Integration",
  },
];

export default function Applications() {
  return (
    <>
      <SEO
        title="Calculus Applications | Motion, Optimization, Area & Volume"
        description="Explore practical applications of calculus including motion, optimization, area, volume, and work. Learn how derivatives and integrals model real-world quantities."
        canonical="/applications"
      />

      <PageHeader
        eyebrow="Applications"
        title="Where calculus becomes useful"
        description="Calculus provides a mathematical language for describing change, accumulation, motion, geometry, and optimization. These applications connect core calculus ideas to problems in physics, engineering, economics, and mathematical modeling."
      />

      <section className="pml-section">
        <div className="pml-container">
          {/* ============================================================ */}
          {/* Introduction                                                 */}
          {/* ============================================================ */}

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Calculus in practice</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
                Two fundamental ideas
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-[#34404C]">
                Most applications of calculus can be understood through two
                central ideas: measuring <strong>change</strong> and measuring{" "}
                <strong>accumulation</strong>.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#2F5BEA]">
                    Derivatives
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-[#17202A]">
                    Describe change
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    Derivatives measure instantaneous rates of change. They help
                    describe velocity, acceleration, marginal quantities,
                    slopes, and optimization.
                  </p>
                </div>

                <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#18794E]">
                    Integrals
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-[#17202A]">
                    Describe accumulation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    Integrals combine continuously varying quantities. They are
                    used for area, volume, distance, work, and accumulated
                    change.
                  </p>
                </div>
              </div>
            </article>

            <aside className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">A useful framework</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                From quantity to model
              </h2>

              <ol className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17324D] text-sm font-bold text-white">
                    1
                  </span>

                  <div>
                    <h3 className="font-bold text-[#17202A]">
                      Identify the quantity
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#687481]">
                      Determine what is changing, accumulating, or being
                      optimized.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17324D] text-sm font-bold text-white">
                    2
                  </span>

                  <div>
                    <h3 className="font-bold text-[#17202A]">
                      Build a mathematical model
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#687481]">
                      Express the relationship using functions, derivatives, or
                      integrals.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17324D] text-sm font-bold text-white">
                    3
                  </span>

                  <div>
                    <h3 className="font-bold text-[#17202A]">
                      Interpret the result
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#687481]">
                      Translate the mathematical result back into the original
                      problem.
                    </p>
                  </div>
                </li>
              </ol>
            </aside>
          </div>

          {/* ============================================================ */}
          {/* Application cards                                            */}
          {/* ============================================================ */}

          <div className="mt-12">
            <div className="max-w-3xl">
              <p className="pml-eyebrow">Application topics</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
                Explore calculus through problems
              </h2>

              <p className="mt-4 leading-7 text-[#687481]">
                Each topic starts with the mathematical idea, develops the
                relevant equations, and shows how calculus can be applied to a
                concrete problem.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((application) => {
                const Icon = application.icon;

                return (
                  <Link
                    key={application.path}
                    to={application.path}
                    className="group flex h-full flex-col rounded-lg border border-[#DEDEDB] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#BFCBFF] hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                        <Icon size={22} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.14em] text-[#687481]">
                        {application.number}
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-[#17202A]">
                          {application.title}
                        </h3>

                        <span className="rounded-full border border-[#DEDEDB] px-2.5 py-1 text-[11px] font-semibold text-[#687481]">
                          {application.level}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#34404C]">
                        {application.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="border-t border-[#E9E9E6] pt-4">
                        <p className="text-xs font-semibold text-[#687481]">
                          {application.concepts}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                          Explore topic
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* Connections between topics                                   */}
          {/* ============================================================ */}

          <article className="pml-card mt-12 p-6 sm:p-8">
            <p className="pml-eyebrow">Seeing the connections</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              One idea can lead to another
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Calculus applications are not isolated topics. The same
              mathematical ideas often appear in several different settings.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="pml-table min-w-[680px]">
                <thead>
                  <tr>
                    <th>Application</th>
                    <th>Main calculus idea</th>
                    <th>Typical question</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="font-semibold">Motion</td>
                    <td>Derivatives and integrals</td>
                    <td>How fast is an object moving?</td>
                  </tr>

                  <tr>
                    <td className="font-semibold">Optimization</td>
                    <td>Derivatives</td>
                    <td>What choice gives the largest or smallest value?</td>
                  </tr>

                  <tr>
                    <td className="font-semibold">Area</td>
                    <td>Definite integrals</td>
                    <td>How much area or accumulation is there?</td>
                  </tr>

                  <tr>
                    <td className="font-semibold">Volume</td>
                    <td>Definite integrals</td>
                    <td>What is the volume of a solid?</td>
                  </tr>

                  <tr>
                    <td className="font-semibold">Work</td>
                    <td>Definite integrals</td>
                    <td>How much work is required when force varies?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Why applications matter                                      */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Beyond formulas</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A] sm:text-3xl">
              Calculus is a modeling tool
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-bold text-[#17202A]">Physics</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Position, velocity, acceleration, force, energy, and motion
                  can all be expressed using calculus.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">Engineering</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Calculus supports structural analysis, optimization, fluid
                  models, electrical systems, and design.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">Economics</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Marginal cost, marginal revenue, growth, and optimization are
                  common applications of derivatives.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Learning path                                                 */}
          {/* ============================================================ */}

          <section className="mt-12 border-t border-[#DEDEDB] pt-10">
            <div className="flex flex-col gap-6 rounded-lg border border-[#DEDEDB] bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="pml-eyebrow">Continue learning</p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  Build the calculus behind the applications
                </h2>

                <p className="mt-3 leading-7 text-[#687481]">
                  If you are new to calculus, start with the core concepts of
                  functions, limits, derivatives, and integrals before working
                  through applications.
                </p>
              </div>

              <Link to="/learn" className="pml-btn-primary shrink-0">
                Explore the curriculum
                <ArrowRight size={17} />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
