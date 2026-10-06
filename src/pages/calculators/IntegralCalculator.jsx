import { useState } from "react";
import { AreaChart } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";

function evaluate(expression, x) {
  try {
    const normalized = expression
      .replace(/\^/g, "**")
      .replace(/\bsin\b/g, "Math.sin")
      .replace(/\bcos\b/g, "Math.cos")
      .replace(/\bsqrt\b/g, "Math.sqrt")
      .replace(/\bexp\b/g, "Math.exp");

    return Function("x", `"use strict"; return ${normalized};`)(x);
  } catch {
    return NaN;
  }
}

function simpson(expression, a, b, n = 1000) {
  if (n % 2 !== 0) n += 1;

  const h = (b - a) / n;

  let sum = evaluate(expression, a) + evaluate(expression, b);

  for (let i = 1; i < n; i += 1) {
    const x = a + i * h;

    sum += (i % 2 === 0 ? 2 : 4) * evaluate(expression, x);
  }

  return (h / 3) * sum;
}

export default function IntegralCalculator() {
  const [expression, setExpression] = useState("x^2");
  const [lower, setLower] = useState("0");
  const [upper, setUpper] = useState("3");
  const [result, setResult] = useState(null);

  function calculate() {
    const value = simpson(expression, Number(lower), Number(upper));

    setResult(Number.isFinite(value) ? value : null);
  }

  return (
    <>
      <SEO
        title="Integral Calculator | Numerical Integration"
        description="Calculate definite integrals numerically using Simpson's rule and learn how integration represents accumulation and area."
        canonical="/calculators/integral"
      />

      <PageHeader
        eyebrow="Calculator • Integration"
        title="Integral Calculator"
        description="Estimate the definite integral of a function over a selected interval."
        icon={AreaChart}
      />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
          <label className="text-sm font-semibold">Function f(x)</label>

          <input
            value={expression}
            onChange={(event) => setExpression(event.target.value)}
            className="input input-bordered mt-2 w-full font-mono"
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Lower bound</label>

              <input
                value={lower}
                onChange={(event) => setLower(event.target.value)}
                className="input input-bordered mt-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Upper bound</label>

              <input
                value={upper}
                onChange={(event) => setUpper(event.target.value)}
                className="input input-bordered mt-2 w-full"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={calculate}
            className="btn btn-primary mt-7"
          >
            Calculate Integral
          </button>

          {result !== null && (
            <div className="mt-8 rounded-2xl bg-primary/5 p-7 text-center">
              <div className="text-sm font-semibold text-primary">
                Approximate integral
              </div>

              <div className="mt-3 text-4xl font-black">
                {result.toFixed(8)}
              </div>
            </div>
          )}
        </section>

        <section className="prose prose-lg mt-12 max-w-none">
          <h2>Numerical integration</h2>

          <p>
            This calculator approximates a definite integral using Simpson's
            rule. Numerical integration is especially useful when an
            antiderivative is difficult or impossible to express in an
            elementary closed form.
          </p>

          <div className="not-prose my-6 rounded-xl bg-base-200 p-5 text-center font-mono">
            ∫ₐᵇ f(x) dx ≈ Simpson's Rule
          </div>

          <p>
            For functions that are sufficiently smooth, increasing the number of
            subintervals can improve the approximation.
          </p>
        </section>
      </main>
    </>
  );
}
