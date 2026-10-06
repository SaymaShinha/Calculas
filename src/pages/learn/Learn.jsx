import {
  BookOpen,
  Brain,
  Calculator,
  FunctionSquare,
  Infinity,
  Sigma,
} from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import TopicCard from "../../components/TopicCard";

const topics = [
  {
    title: "Foundations",
    description:
      "Functions, graphs, algebraic preparation, rates of change, and the ideas that lead into calculus.",
    path: "/learn/foundations",
    icon: BookOpen,
    level: "Beginner",
  },
  {
    title: "Limits",
    description:
      "Learn what limits mean, how to evaluate them, and why they are fundamental to calculus.",
    path: "/learn/limits",
    icon: Infinity,
    level: "Beginner",
  },
  {
    title: "Derivatives",
    description:
      "Study instantaneous rate of change, differentiation rules, higher derivatives, and applications.",
    path: "/learn/derivatives",
    icon: FunctionSquare,
    level: "Intermediate",
  },
  {
    title: "Integrals",
    description:
      "Understand antiderivatives, definite integrals, accumulation, area, and the Fundamental Theorem.",
    path: "/learn/integrals",
    icon: Sigma,
    level: "Intermediate",
  },
  {
    title: "Series",
    description:
      "Explore sequences, infinite series, convergence tests, and Taylor and Maclaurin expansions.",
    path: "/learn/series",
    icon: Sigma,
    level: "Advanced",
  },
  {
    title: "Multivariable Calculus",
    description:
      "Extend calculus to functions of several variables, partial derivatives, gradients, and multiple integrals.",
    path: "/learn/multivariable-calculus",
    icon: Brain,
    level: "Advanced",
  },
  {
    title: "Vector Calculus",
    description:
      "Study vector fields, line integrals, surface integrals, divergence, curl, and major theorems.",
    path: "/learn/vector-calculus",
    icon: Sigma,
    level: "Advanced",
  },
  {
    title: "Differential Equations",
    description:
      "Learn how differential equations model changing systems and how common equations can be solved.",
    path: "/learn/differential-equations",
    icon: Calculator,
    level: "Advanced",
  },
];

export default function Learn() {
  return (
    <>
      <SEO
        title="Learn Calculus | Practical Math Lab"
        description="Learn calculus step by step, from functions and limits to derivatives, integrals, series, multivariable calculus, vector calculus, and differential equations."
        canonical="/learn"
      />

      <PageHeader
        eyebrow="Calculus Curriculum"
        title="Learn calculus step by step"
        description="Build a connected understanding of calculus, starting with foundations and progressing toward advanced mathematical ideas and applications."
        icon={BookOpen}
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <TopicCard key={topic.path} {...topic} />
          ))}
        </div>
      </main>
    </>
  );
}
