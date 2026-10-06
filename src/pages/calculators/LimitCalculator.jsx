import { useState } from "react";
import { ArrowRight, Calculator, Info, RotateCcw } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import {
  evaluateExpression,
  numericalDerivative,
  numericalSecondDerivative,
  formatNumber,
} from "../../utils/mathHelpers.js";

export default function DerivativeCalculator() {
  const [expression, setExpression] = useState("x^3 - 4*x + 2");
  const [x, setX] = useState("2");
  const [h, setH] = useState("0.000001");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateDerivative() {
    setError("");
    setResult(null);

    try {
      const point = Number(x);
      const step = Number(h);

      if (!Number.isFinite(point)) {
        throw new Error("Enter a valid x-value.");
      }

      if (!Number.isFinite(step) || step <= 0) {
        throw new Error("Step size must be greater than zero.");
      }

      const fn = (value) => evaluateExpression(expression, value);

      const functionValue = fn(point);

      const firstDerivative = numericalDerivative(fn, point, step);

      const secondDerivative = numericalSecondDerivative(
        fn,
        point,
        Math.max(step * 10, 0.0001),
      );

      setResult({
        functionValue,
        firstDerivative,
        secondDerivative,
      });
    } catch (err) {
      setError(err?.message || "Unable to calculate the derivative.");
    }
  }

  function reset() {
    setExpression("x^3 - 4*x + 2");
    setX("2");
    setH("0.000001");
    setResult(null);
    setError("");
  }

  return (
    <>
      <SEO
        title="Derivative Calculator | Numerical Derivative"
        description="Calculate the first and second derivative of a mathematical function at a chosen point using numerical differentiation."
      />

      <PageHeader
        eyebrow="Calculators"
        title="Derivative Calculator"
        description="Estimate the first and second derivative of a function at a specific point using numerical differentiation."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Calculator */}
          <div className="card border border-base-300 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Calculator size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Calculate a Derivative</h2>
                  <p className="text-sm text-base-content/60">
                    Use central finite differences.
                  </p>
                </div>
              </div>

              <div className="divider" />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="derivative-expression"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Function f(x)
                  </label>

                  <input
                    id="derivative-expression"
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    placeholder="Example: x^3 - 4*x + 2"
                    className="input input-bordered w-full font-mono"
                  />

                  <p className="mt-2 text-xs text-base-content/60">
                    Supported examples: <code>x^2</code>, <code>sin(x)</code>,{" "}
                    <code>cos(x)</code>, <code>sqrt(x)</code>,{" "}
                    <code>ln(x)</code>
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="derivative-x"
                      className="mb-2 block text-sm font-semibold"
                    >
                      x-value
                    </label>

                    <input
                      id="derivative-x"
                      type="number"
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="derivative-h"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Step size h
                    </label>

                    <input
                      id="derivative-h"
                      type="number"
                      step="any"
                      value={h}
                      onChange={(e) => setH(e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {error && (
                  <div className="alert alert-error">
                    <Info size={20} />
                    <span>{error}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={calculateDerivative}
                    className="btn btn-primary"
                  >
                    Calculate
                    <ArrowRight size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={reset}
                    className="btn btn-ghost"
                  >
                    <RotateCcw size={17} />
                    Reset
                  </button>
                </div>
              </div>

              {result && (
                <div className="mt-8">
                  <div className="divider" />

                  <h3 className="mb-4 text-lg font-bold">Result</h3>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
                      <p className="text-sm text-base-content/60">f(x)</p>
                      <p className="mt-2 break-words text-xl font-bold">
                        {formatNumber(result.functionValue)}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                      <p className="text-sm text-base-content/60">f′(x)</p>
                      <p className="mt-2 break-words text-xl font-bold text-primary">
                        {formatNumber(result.firstDerivative)}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-200 p-5">
                      <p className="text-sm text-base-content/60">f″(x)</p>
                      <p className="mt-2 break-words text-xl font-bold">
                        {formatNumber(result.secondDerivative)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-6">
            <div className="card border border-base-300 bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">What is a derivative?</h2>

                <p className="leading-7 text-base-content/70">
                  A derivative measures how quickly a function changes with
                  respect to its input. Geometrically, it represents the slope
                  of the tangent line to the graph at a particular point.
                </p>

                <div className="my-3 rounded-xl bg-base-200 p-5 text-center font-mono text-lg">
                  f′(x) ≈<span className="mx-2">[f(x + h) − f(x − h)]</span>/
                  <span className="ml-2">2h</span>
                </div>

                <p className="text-sm leading-6 text-base-content/60">
                  This calculator uses the central difference approximation,
                  which generally provides better accuracy than using only the
                  point immediately before or after x.
                </p>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">When are derivatives useful?</h2>

                <ul className="space-y-3 text-sm leading-6 text-base-content/70">
                  <li>• Finding slopes of curves</li>
                  <li>• Measuring instantaneous velocity</li>
                  <li>• Finding maxima and minima</li>
                  <li>• Studying rates of change</li>
                  <li>• Modeling physical systems</li>
                  <li>• Numerical and scientific computing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Educational section */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="card border border-base-300 bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Understanding the step size</h2>

              <p className="leading-7 text-base-content/70">
                The value of <strong>h</strong> determines how close the
                calculator samples the function around the chosen point. Smaller
                values can provide a closer approximation, but making h
                excessively small can introduce floating-point rounding errors.
              </p>

              <p className="text-sm leading-6 text-base-content/60">
                For many ordinary functions, a value around 0.000001 provides a
                useful numerical estimate. The best value depends on the
                function and the numerical precision required.
              </p>
            </div>
          </article>

          <article className="card border border-base-300 bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Example</h2>

              <p className="leading-7 text-base-content/70">For</p>

              <div className="rounded-xl bg-base-200 p-4 text-center font-mono">
                f(x) = x³ − 4x + 2
              </div>

              <p className="leading-7 text-base-content/70">
                the analytical derivative is
              </p>

              <div className="rounded-xl bg-base-200 p-4 text-center font-mono">
                f′(x) = 3x² − 4
              </div>

              <p className="text-sm text-base-content/60">
                At x = 2, the derivative is 8. The numerical calculator should
                produce a value very close to this result.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
