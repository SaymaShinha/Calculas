import { BookOpenCheck, FunctionSquare } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import RuleCard from "../../components/RuleCard";

const rules = [
  {
    number: 1,
    category: "Differentiation",
    title: "Power Rule",
    rule: "d/dx [xⁿ] = n xⁿ⁻¹",
    explanation: "Multiply by the exponent and reduce the exponent by one.",
    example: "d/dx [x⁵] = 5x⁴",
  },
  {
    number: 2,
    category: "Differentiation",
    title: "Constant Multiple Rule",
    rule: "d/dx [cf(x)] = cf'(x)",
    explanation: "A constant factor remains unchanged during differentiation.",
    example: "d/dx [3x²] = 6x",
  },
  {
    number: 3,
    category: "Differentiation",
    title: "Product Rule",
    rule: "(fg)' = f'g + fg'",
    explanation:
      "Differentiate the first function and multiply by the second, then add the first function multiplied by the derivative of the second.",
  },
  {
    number: 4,
    category: "Differentiation",
    title: "Quotient Rule",
    rule: "(f/g)' = (f'g − fg') / g²",
    explanation: "Used when one differentiable function is divided by another.",
  },
  {
    number: 5,
    category: "Differentiation",
    title: "Chain Rule",
    rule: "(f(g(x)))' = f'(g(x))g'(x)",
    explanation:
      "Differentiate the outer function while keeping the inner function, then multiply by the derivative of the inner function.",
  },
  {
    number: 6,
    category: "Integration",
    title: "Power Rule for Integration",
    rule: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1",
    explanation: "Increase the exponent by one and divide by the new exponent.",
  },
];

export default function Rules() {
  return (
    <>
      <SEO
        title="Calculus Rules Reference | Derivative & Integral Rules"
        description="Reference important calculus rules including power, product, quotient, chain, and integration rules."
        canonical="/rules"
      />

      <PageHeader
        eyebrow="Reference"
        title="Calculus Rules"
        description="A concise reference for common differentiation and integration rules, with explanations and examples."
        icon={BookOpenCheck}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {rules.map((rule) => (
            <RuleCard key={rule.number} {...rule} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-7">
          <FunctionSquare className="text-primary" />

          <h2 className="mt-4 text-2xl font-black">
            Rules are tools, not the whole subject
          </h2>

          <p className="mt-3 max-w-3xl leading-8 text-base-content/65">
            The rules make calculations efficient, but calculus is ultimately
            about understanding change, accumulation, limits, and mathematical
            structure.
          </p>
        </div>
      </main>
    </>
  );
}
