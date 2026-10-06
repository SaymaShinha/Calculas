import { Calculator, Code2, Cpu, GitBranch } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import TopicCard from "../../components/TopicCard";

const topics = [
  {
    title: "Numerical Derivatives",
    description:
      "Approximate derivatives using finite differences and understand the tradeoff between step size and numerical error.",
    path: "/implementation/numerical-derivative",
    icon: Calculator,
  },
  {
    title: "Numerical Integration",
    description:
      "Explore trapezoidal and Simpson-type methods for approximating definite integrals.",
    path: "/implementation/numerical-integration",
    icon: GitBranch,
  },
  {
    title: "Numerical Methods",
    description:
      "Learn how mathematical problems are approximated computationally using algorithms and iterative methods.",
    path: "/implementation/numerical-methods",
    icon: Cpu,
  },
];

export default function Implementation() {
  return (
    <>
      <SEO
        title="Numerical Calculus & Implementation | Practical Math Lab"
        description="Learn how calculus concepts can be implemented numerically using finite differences, numerical integration, algorithms, and computational methods."
        canonical="/implementation"
      />

      <PageHeader
        eyebrow="Implementation"
        title="Calculus on a computer"
        description="Exact symbolic mathematics is powerful, but many practical problems require numerical approximation. Learn the computational ideas behind common calculus methods."
        icon={Code2}
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.path} {...topic} />
          ))}
        </div>
      </main>
    </>
  );
}
