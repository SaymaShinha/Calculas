import {
  BookOpen,
  Calculator,
  Code2,
  Eye,
  GraduationCap,
  Lightbulb,
  Sigma,
} from "lucide-react";

import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

const principles = [
  {
    icon: Lightbulb,
    title: "Concept before formula",
    description:
      "A formula is easier to remember when you understand the mathematical idea behind it.",
  },
  {
    icon: Eye,
    title: "Visual understanding",
    description:
      "Graphs and geometric interpretations can make abstract calculus concepts easier to understand.",
  },
  {
    icon: Calculator,
    title: "Practical calculation",
    description:
      "Interactive tools allow learners to experiment with limits, derivatives, integrals, and other ideas.",
  },
  {
    icon: Code2,
    title: "Numerical implementation",
    description:
      "Calculus also matters in computing, engineering, simulation, and scientific programming.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Practical Math Lab"
        description="Learn about Practical Math Lab, its educational philosophy, calculus resources, calculators, applications, and numerical methods."
        canonical="/about"
      />

      <PageHeader
        eyebrow="About the Lab"
        title="Making calculus practical and understandable"
        description="Practical Math Lab is an educational resource designed to connect calculus theory with calculation, visualization, applications, and implementation."
        icon={Sigma}
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black">
              Why Practical Math Lab exists
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-base-content/65">
              <p>
                Calculus is often taught as a sequence of formulas and
                procedures. While formulas are important, they are only one part
                of mathematical understanding.
              </p>

              <p>
                Practical Math Lab is designed to provide a broader learning
                experience. A learner can study a concept, inspect the important
                formulas and rules, calculate an example, visualize the result,
                and then explore a practical application.
              </p>

              <p>
                The site also introduces numerical and computational methods so
                that learners can understand how calculus ideas are approximated
                and implemented by computers.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-base-300 bg-base-200/50 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-content">
              <GraduationCap size={28} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Learn → Understand → Apply → Implement
            </h3>

            <p className="mt-4 leading-8 text-base-content/60">
              The site follows a progression from mathematical foundations to
              advanced applications and numerical computation.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Learn the concept",
                "Understand the formula",
                "Practice the method",
                "Visualize the result",
                "Apply the mathematics",
                "Implement numerical methods",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-base-100 p-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black">Our educational principles</h2>

            <p className="mt-4 leading-8 text-base-content/60">
              The resources are designed around a few principles that help turn
              calculus from a memorization exercise into a connected
              mathematical subject.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-base-300 bg-base-100 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-base-content/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-10">
            <BookOpen size={30} className="text-primary" />

            <h2 className="mt-5 text-2xl font-black">What you can find here</h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Calculus lessons",
                "Formula references",
                "Derivative and integral rules",
                "Interactive calculators",
                "Function visualization",
                "Worked mathematical examples",
                "Real-world applications",
                "Numerical methods",
                "Programming-oriented explanations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-base-100 p-4 text-sm font-medium shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
