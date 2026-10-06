import { useMemo, useState } from "react";
import {
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  Copy,
  FunctionSquare,
  Search,
  Sigma,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";

const formulaCategories = [
  {
    id: "limits",
    name: "Limits",
    description:
      "Core formulas for evaluating limits and understanding continuity.",
    icon: FunctionSquare,
    formulas: [
      {
        name: "Basic Limit Laws",
        formula: "lim [f(x) ± g(x)] = L ± M",
        explanation:
          "If lim f(x) = L and lim g(x) = M, the limit of their sum or difference is the corresponding sum or difference of the limits.",
        example: "limₓ→2 (x² + x) = 4 + 2 = 6",
      },
      {
        name: "Product Law",
        formula: "lim [f(x)g(x)] = LM",
        explanation:
          "The limit of a product equals the product of the individual limits, provided the limits exist.",
        example: "limₓ→3 [x(x + 1)] = 3 × 4 = 12",
      },
      {
        name: "Quotient Law",
        formula: "lim [f(x)/g(x)] = L/M, M ≠ 0",
        explanation:
          "The quotient of two functions approaches the quotient of their limits when the denominator's limit is nonzero.",
        example: "limₓ→2 (x + 1)/x = 3/2",
      },
      {
        name: "Continuity",
        formula: "limₓ→a f(x) = f(a)",
        explanation:
          "A function is continuous at a when its limit as x approaches a equals its actual value at a.",
        example: "For f(x) = x², limₓ→2 f(x) = f(2) = 4.",
      },
    ],
  },

  {
    id: "derivatives",
    name: "Derivatives",
    description:
      "Essential differentiation formulas from basic powers to exponential and trigonometric functions.",
    icon: FunctionSquare,
    formulas: [
      {
        name: "Power Rule",
        formula: "d/dx [xⁿ] = nxⁿ⁻¹",
        explanation:
          "Multiply the power by the coefficient and reduce the exponent by one.",
        example: "d/dx [x⁵] = 5x⁴",
      },
      {
        name: "Constant Rule",
        formula: "d/dx [C] = 0",
        explanation:
          "The derivative of a constant is zero because a constant does not change.",
        example: "d/dx [12] = 0",
      },
      {
        name: "Constant Multiple Rule",
        formula: "d/dx [Cf(x)] = Cf′(x)",
        explanation:
          "A constant factor can be kept outside the differentiation operation.",
        example: "d/dx [4x³] = 4(3x²) = 12x²",
      },
      {
        name: "Sum Rule",
        formula: "d/dx [f(x) + g(x)] = f′(x) + g′(x)",
        explanation:
          "Differentiate each term separately and add the resulting derivatives.",
        example: "d/dx [x³ + x²] = 3x² + 2x",
      },
      {
        name: "Product Rule",
        formula: "(fg)′ = f′g + fg′",
        explanation:
          "When two functions are multiplied, differentiate the first while keeping the second, then add the reverse combination.",
        example: "d/dx [x² sin x] = 2x sin x + x² cos x",
      },
      {
        name: "Quotient Rule",
        formula: "(f/g)′ = (gf′ − fg′)/g²",
        explanation:
          "For a quotient, multiply the denominator by the derivative of the numerator, subtract the numerator times the derivative of the denominator, then divide by the denominator squared.",
        example: "For f/g, derivative = (g f′ − f g′)/g².",
      },
      {
        name: "Chain Rule",
        formula: "d/dx f(g(x)) = f′(g(x))g′(x)",
        explanation:
          "The chain rule differentiates a composition of functions by multiplying the outer derivative by the inner derivative.",
        example: "d/dx [(3x + 1)⁵] = 15(3x + 1)⁴",
      },
      {
        name: "Exponential",
        formula: "d/dx [eˣ] = eˣ",
        explanation: "The exponential function eˣ is its own derivative.",
        example: "d/dx [eˣ] = eˣ",
      },
      {
        name: "General Exponential",
        formula: "d/dx [aˣ] = aˣ ln(a)",
        explanation:
          "For a positive constant a, the derivative of aˣ is aˣ multiplied by ln(a).",
        example: "d/dx [2ˣ] = 2ˣ ln 2",
      },
      {
        name: "Natural Logarithm",
        formula: "d/dx [ln x] = 1/x",
        explanation:
          "The derivative of the natural logarithm is the reciprocal of its input.",
        example: "d/dx [ln x] = 1/x",
      },
      {
        name: "Sine",
        formula: "d/dx [sin x] = cos x",
        explanation: "The derivative of sine is cosine.",
        example: "d/dx [sin x] = cos x",
      },
      {
        name: "Cosine",
        formula: "d/dx [cos x] = −sin x",
        explanation: "The derivative of cosine is negative sine.",
        example: "d/dx [cos x] = −sin x",
      },
      {
        name: "Tangent",
        formula: "d/dx [tan x] = sec²x",
        explanation: "The derivative of tangent is secant squared.",
        example: "d/dx [tan x] = sec²x",
      },
    ],
  },

  {
    id: "integrals",
    name: "Integrals",
    description: "Common indefinite and definite integration formulas.",
    icon: Sigma,
    formulas: [
      {
        name: "Power Rule",
        formula: "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1",
        explanation:
          "Increase the exponent by one and divide by the new exponent.",
        example: "∫x³ dx = x⁴/4 + C",
      },
      {
        name: "Constant Rule",
        formula: "∫C dx = Cx + C₁",
        explanation:
          "The integral of a constant is the constant multiplied by x, plus the integration constant.",
        example: "∫5 dx = 5x + C",
      },
      {
        name: "Exponential",
        formula: "∫eˣ dx = eˣ + C",
        explanation: "The exponential function eˣ is its own antiderivative.",
        example: "∫eˣ dx = eˣ + C",
      },
      {
        name: "General Exponential",
        formula: "∫aˣ dx = aˣ/ln(a) + C",
        explanation:
          "For a positive constant a different from 1, integrate aˣ by dividing by ln(a).",
        example: "∫2ˣ dx = 2ˣ/ln 2 + C",
      },
      {
        name: "Logarithm",
        formula: "∫1/x dx = ln|x| + C",
        explanation:
          "The antiderivative of 1/x is the natural logarithm of the absolute value of x.",
        example: "∫(1/x)dx = ln|x| + C",
      },
      {
        name: "Sine",
        formula: "∫sin x dx = −cos x + C",
        explanation:
          "Because the derivative of cosine is negative sine, the antiderivative of sine is negative cosine.",
        example: "∫sin x dx = −cos x + C",
      },
      {
        name: "Cosine",
        formula: "∫cos x dx = sin x + C",
        explanation: "The derivative of sine is cosine.",
        example: "∫cos x dx = sin x + C",
      },
      {
        name: "Secant Squared",
        formula: "∫sec²x dx = tan x + C",
        explanation: "The derivative of tan x is sec²x.",
        example: "∫sec²x dx = tan x + C",
      },
      {
        name: "Fundamental Theorem of Calculus",
        formula: "∫ₐᵇ f(x)dx = F(b) − F(a)",
        explanation:
          "If F is an antiderivative of f, the definite integral can be evaluated by subtracting the antiderivative at the lower limit from its value at the upper limit.",
        example: "∫₀² x dx = [x²/2]₀² = 2",
      },
    ],
  },

  {
    id: "trigonometry",
    name: "Trigonometry",
    description:
      "Identities frequently used in calculus and mathematical analysis.",
    icon: Sigma,
    formulas: [
      {
        name: "Pythagorean Identity",
        formula: "sin²x + cos²x = 1",
        explanation:
          "The fundamental Pythagorean identity connects sine and cosine.",
        example: "If sin x = 3/5, then cos²x = 1 − 9/25 = 16/25.",
      },
      {
        name: "Tangent Identity",
        formula: "tan x = sin x / cos x",
        explanation:
          "Tangent is defined as sine divided by cosine when cosine is nonzero.",
        example: "tan x = sin x / cos x",
      },
      {
        name: "Secant Identity",
        formula: "1 + tan²x = sec²x",
        explanation: "A Pythagorean identity involving tangent and secant.",
        example: "sec²x − tan²x = 1",
      },
      {
        name: "Double-Angle Sine",
        formula: "sin(2x) = 2sin x cos x",
        explanation:
          "The sine of twice an angle can be expressed using the product of sine and cosine.",
        example: "sin(2x) = 2 sin x cos x",
      },
      {
        name: "Double-Angle Cosine",
        formula: "cos(2x) = cos²x − sin²x",
        explanation:
          "The cosine double-angle identity has several equivalent forms.",
        example: "cos(2x) = 1 − 2sin²x",
      },
    ],
  },

  {
    id: "series",
    name: "Sequences & Series",
    description: "Useful formulas for arithmetic, geometric and power series.",
    icon: Sigma,
    formulas: [
      {
        name: "Arithmetic Sequence",
        formula: "aₙ = a₁ + (n − 1)d",
        explanation:
          "Finds the nth term of an arithmetic sequence with common difference d.",
        example: "For 2, 5, 8, ...: aₙ = 2 + 3(n − 1).",
      },
      {
        name: "Arithmetic Series",
        formula: "Sₙ = n/2 [2a₁ + (n − 1)d]",
        explanation:
          "Calculates the sum of the first n terms of an arithmetic sequence.",
        example: "1 + 3 + 5 + 7 = 16",
      },
      {
        name: "Geometric Sequence",
        formula: "aₙ = a₁rⁿ⁻¹",
        explanation:
          "Finds the nth term of a geometric sequence with common ratio r.",
        example: "For 2, 6, 18, ...: aₙ = 2(3ⁿ⁻¹).",
      },
      {
        name: "Finite Geometric Series",
        formula: "Sₙ = a₁(1 − rⁿ)/(1 − r)",
        explanation:
          "Calculates the sum of a finite geometric series when r ≠ 1.",
        example: "1 + 2 + 4 + 8 = 15",
      },
      {
        name: "Infinite Geometric Series",
        formula: "S = a₁/(1 − r), |r| < 1",
        explanation:
          "An infinite geometric series converges when the absolute value of its common ratio is less than one.",
        example: "1 + 1/2 + 1/4 + ... = 2",
      },
    ],
  },

  {
    id: "multivariable",
    name: "Multivariable Calculus",
    description:
      "Fundamental formulas for functions involving multiple variables.",
    icon: FunctionSquare,
    formulas: [
      {
        name: "Partial Derivative",
        formula: "∂f/∂x",
        explanation:
          "Measures the rate of change of a multivariable function with respect to x while treating other variables as constants.",
        example: "For f(x,y)=x²y, ∂f/∂x = 2xy.",
      },
      {
        name: "Gradient",
        formula: "∇f = ⟨fₓ, fᵧ, f_z⟩",
        explanation:
          "The gradient collects the partial derivatives and points in the direction of greatest increase.",
        example: "For f=x²+y², ∇f=⟨2x,2y⟩.",
      },
      {
        name: "Directional Derivative",
        formula: "Dᵤf = ∇f · u",
        explanation:
          "Measures the rate of change of a scalar field in a specified unit direction.",
        example: "Dᵤf = ∇f · u for |u| = 1.",
      },
      {
        name: "Divergence",
        formula: "∇·F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
        explanation:
          "Measures the net outward flow of a vector field from a point.",
        example: "For F=⟨x,y,z⟩, div F = 3.",
      },
      {
        name: "Curl",
        formula: "∇×F",
        explanation:
          "Measures the local rotational behavior of a vector field.",
        example:
          "Curl is computed using the determinant form involving i, j, k and the partial derivatives.",
      },
    ],
  },

  {
    id: "numerical",
    name: "Numerical Methods",
    description:
      "Important formulas for approximating derivatives, integrals and roots.",
    icon: Calculator,
    formulas: [
      {
        name: "Forward Difference",
        formula: "f′(x) ≈ [f(x+h) − f(x)]/h",
        explanation:
          "Approximates a derivative using the current point and a point ahead of it.",
        example: "Use a small positive h to estimate f′(x).",
      },
      {
        name: "Backward Difference",
        formula: "f′(x) ≈ [f(x) − f(x−h)]/h",
        explanation:
          "Approximates a derivative using the current point and a point behind it.",
        example: "Useful when values ahead of x are unavailable.",
      },
      {
        name: "Central Difference",
        formula: "f′(x) ≈ [f(x+h) − f(x−h)]/(2h)",
        explanation:
          "Uses points on both sides of x and generally provides a more accurate basic finite-difference approximation.",
        example: "Use a small h to estimate the derivative numerically.",
      },
      {
        name: "Trapezoidal Rule",
        formula: "Tₙ = h/2 [f(a) + 2Σf(xᵢ) + f(b)]",
        explanation:
          "Approximates a definite integral by replacing sections of the curve with trapezoids.",
        example:
          "Increasing n usually improves the approximation for smooth functions.",
      },
      {
        name: "Simpson's Rule",
        formula: "Sₙ = h/3 [f(a) + f(b) + 4Σf(xodd) + 2Σf(xeven)]",
        explanation:
          "Approximates an integral using quadratic interpolation and typically provides high accuracy for smooth functions.",
        example: "Simpson's rule requires an even number of subintervals.",
      },
      {
        name: "Newton-Raphson",
        formula: "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)",
        explanation:
          "Iteratively improves an estimate of a root using the function and its derivative.",
        example: "Choose an initial guess close to the desired root.",
      },
    ],
  },
];

function FormulaCard({ formula, onCopy, copied }) {
  return (
    <article className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold">{formula.name}</h3>

        <button
          type="button"
          onClick={() => onCopy(formula.formula)}
          className="btn btn-circle btn-ghost btn-sm shrink-0"
          title="Copy formula"
          aria-label={`Copy ${formula.name} formula`}
        >
          {copied ? (
            <Check size={17} className="text-success" />
          ) : (
            <Copy size={17} />
          )}
        </button>
      </div>

      <div className="my-4 overflow-x-auto rounded-xl bg-base-200 p-4 text-center">
        <code className="whitespace-nowrap font-mono text-base font-semibold sm:text-lg">
          {formula.formula}
        </code>
      </div>

      <p className="text-sm leading-6 text-base-content/70">
        {formula.explanation}
      </p>

      <div className="mt-4 rounded-xl border border-base-300/70 bg-base-200/50 p-4">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-base-content/45">
          Example
        </p>

        <p className="text-sm leading-6 text-base-content/70">
          {formula.example}
        </p>
      </div>
    </article>
  );
}

export default function Formulas() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedFormula, setCopiedFormula] = useState("");

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return formulaCategories
      .filter(
        (category) =>
          activeCategory === "all" || category.id === activeCategory,
      )
      .map((category) => {
        if (!query) {
          return category;
        }

        const filteredFormulas = category.formulas.filter(
          (formula) =>
            formula.name.toLowerCase().includes(query) ||
            formula.formula.toLowerCase().includes(query) ||
            formula.explanation.toLowerCase().includes(query) ||
            formula.example.toLowerCase().includes(query),
        );

        return {
          ...category,
          formulas: filteredFormulas,
        };
      })
      .filter((category) => category.formulas.length > 0);
  }, [search, activeCategory]);

  const totalFormulas = formulaCategories.reduce(
    (total, category) => total + category.formulas.length,
    0,
  );

  async function copyFormula(formula) {
    try {
      await navigator.clipboard.writeText(formula);

      setCopiedFormula(formula);

      setTimeout(() => {
        setCopiedFormula("");
      }, 1500);
    } catch {
      // Clipboard access may be unavailable.
    }
  }

  return (
    <>
      <SEO
        title="Calculus Formulas | Derivatives, Integrals, Limits & More"
        description="A practical calculus formula reference covering limits, derivatives, integrals, trigonometry, series, multivariable calculus, and numerical methods."
      />

      <PageHeader
        eyebrow="Reference"
        title="Calculus Formulas"
        description="A practical reference for the formulas you use most often in calculus—from limits and derivatives to integrals, series, multivariable calculus, and numerical methods."
      />

      <main className="mx-auto max-w-7xl px-4 pb-16">
        {/* Intro */}
        <section className="mb-10">
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <BookOpen size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Quick Reference
                    </p>

                    <h2 className="text-2xl font-bold">
                      Find the formula you need
                    </h2>
                  </div>
                </div>

                <p className="max-w-3xl leading-7 text-base-content/70">
                  Use the search and category filters below to quickly find
                  formulas. Each entry includes an explanation and an example so
                  you can understand when and how the formula is used rather
                  than simply memorizing it.
                </p>
              </div>

              <div className="stats border border-base-300 bg-base-200 shadow-sm">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <Sigma size={26} />
                  </div>

                  <div className="stat-title">Formulas</div>

                  <div className="stat-value text-primary">
                    {totalFormulas}+
                  </div>

                  <div className="stat-desc">
                    Across {formulaCategories.length} topics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="sticky top-[4.1rem] z-30 mb-8 rounded-2xl border border-base-300 bg-base-100/95 p-4 shadow-md backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/45"
              />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search formulas, concepts, or examples..."
                className="input input-bordered w-full pl-11"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`btn btn-sm shrink-0 ${
                  activeCategory === "all" ? "btn-primary" : "btn-ghost"
                }`}
              >
                All
              </button>

              {formulaCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`btn btn-sm shrink-0 gap-2 ${
                      activeCategory === category.id
                        ? "btn-primary"
                        : "btn-ghost"
                    }`}
                  >
                    <Icon size={15} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        {filteredCategories.length === 0 ? (
          <section className="rounded-3xl border border-dashed border-base-300 bg-base-100 p-10 text-center">
            <Search size={36} className="mx-auto mb-4 text-base-content/30" />

            <h2 className="text-xl font-bold">No formulas found</h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-base-content/60">
              Try a different search term or select another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="btn btn-primary btn-sm mt-5"
            >
              Show all formulas
            </button>
          </section>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">{category.name}</h2>

                      <p className="mt-1 max-w-3xl text-sm leading-6 text-base-content/60">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {category.formulas.map((formula) => (
                      <FormulaCard
                        key={`${category.id}-${formula.name}`}
                        formula={formula}
                        onCopy={copyFormula}
                        copied={copiedFormula === formula.formula}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* How to use formulas */}
        <section className="mt-16">
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-xl bg-secondary/10 p-3 text-secondary">
                <Calculator size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  How to use a calculus formula
                </h2>

                <p className="text-sm text-base-content/60">
                  A reliable approach for solving problems
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-base-200 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                  1
                </div>

                <h3 className="font-bold">Identify the problem</h3>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  Determine whether the problem involves a limit, derivative,
                  integral, series, or another calculus concept.
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                  2
                </div>

                <h3 className="font-bold">Select the appropriate formula</h3>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  Check the conditions of the formula before substituting values
                  or manipulating the expression.
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                  3
                </div>

                <h3 className="font-bold">Simplify and verify</h3>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  Work through the algebra carefully and check whether the
                  result makes sense in the original context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important note */}
        <section className="mt-8">
          <div className="rounded-2xl border border-warning/30 bg-warning/5 p-5">
            <div className="flex gap-3">
              <ChevronDown
                size={20}
                className="mt-0.5 shrink-0 rotate-[-90deg] text-warning"
              />

              <div>
                <h2 className="font-bold">
                  Formulas are tools, not substitutes for reasoning
                </h2>

                <p className="mt-1 text-sm leading-6 text-base-content/70">
                  Before applying a formula, understand its assumptions and
                  conditions. For example, an integration rule may require a
                  particular domain, a numerical method may introduce
                  approximation error, and a series formula may only converge
                  under certain conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
