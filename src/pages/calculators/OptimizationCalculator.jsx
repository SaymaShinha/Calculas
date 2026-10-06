import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  Info,
  RotateCcw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import { evaluateExpression, formatNumber } from "../../utils/mathHelpers.js";

export default function OptimizationCalculator() {
  const [expression, setExpression] = useState("x^2 - 6*x + 5");
  const [lower, setLower] = useState("-5");
  const [upper, setUpper] = useState("10");
  const [resolution, setResolution] = useState("1000");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateOptimization() {
    setError("");
    setResult(null);

    try {
      const a = Number(lower);
      const b = Number(upper);
      const points = Math.floor(Number(resolution));

      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error("Enter valid lower and upper bounds.");
      }

      if (b <= a) {
        throw new Error(
          "The upper bound must be greater than the lower bound.",
        );
      }

      if (!Number.isFinite(points) || points < 10 || points > 100000) {
        throw new Error("Resolution must be between 10 and 100,000 points.");
      }

      const fn = (x) => evaluateExpression(expression, x);

      let minimum = {
        x: a,
        value: fn(a),
      };

      let maximum = {
        x: a,
        value: fn(a),
      };

      const step = (b - a) / points;

      let validPoints = 0;

      for (let i = 0; i <= points; i++) {
        const x = a + i * step;

        try {
          const value = fn(x);

          if (!Number.isFinite(value)) {
            continue;
          }

          validPoints += 1;

          if (value < minimum.value) {
            minimum = { x, value };
          }

          if (value > maximum.value) {
            maximum = { x, value };
          }
        } catch {
          // Skip points outside the function's domain.
        }
      }

      if (validPoints === 0) {
        throw new Error(
          "No valid function values were found in this interval.",
        );
      }

      setResult({
        minimum,
        maximum,
        step,
        validPoints,
      });
    } catch (err) {
      setError(err?.message || "Unable to perform the optimization.");
    }
  }

  function reset() {
    setExpression("x^2 - 6*x + 5");
    setLower("-5");
    setUpper("10");
    setResolution("1000");
    setResult(null);
    setError("");
  }

  return (
    <>
      <SEO
        title="Optimization Calculator | Numerical Min & Max"
        description="Find approximate minimum and maximum values of a function over a specified interval using numerical optimization."
      />

      <PageHeader
        eyebrow="Calculators"
        title="Optimization Calculator"
        description="Search an interval numerically to estimate the minimum and maximum values of a mathematical function."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Calculator */}
          <div className="card border border-base-300 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Calculator size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Optimize a Function</h2>

                  <p className="text-sm text-base-content/60">
                    Estimate numerical minimum and maximum values.
                  </p>
                </div>
              </div>

              <div className="divider" />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="optimization-expression"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Function f(x)
                  </label>

                  <input
                    id="optimization-expression"
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    placeholder="Example: x^2 - 6*x + 5"
                    className="input input-bordered w-full font-mono"
                  />

                  <p className="mt-2 text-xs text-base-content/60">
                    Example:
                    <code className="ml-1">x^2 - 6*x + 5</code>
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="optimization-lower"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Lower bound
                    </label>

                    <input
                      id="optimization-lower"
                      type="number"
                      step="any"
                      value={lower}
                      onChange={(e) => setLower(e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="optimization-upper"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Upper bound
                    </label>

                    <input
                      id="optimization-upper"
                      type="number"
                      step="any"
                      value={upper}
                      onChange={(e) => setUpper(e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="optimization-resolution"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Search resolution
                  </label>

                  <input
                    id="optimization-resolution"
                    type="number"
                    min="10"
                    max="100000"
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                    className="input input-bordered w-full"
                  />

                  <p className="mt-2 text-xs text-base-content/60">
                    More points can improve the estimate but require more
                    calculations.
                  </p>
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
                    onClick={calculateOptimization}
                    className="btn btn-primary"
                  >
                    Find Extrema
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

                  <h3 className="mb-4 text-lg font-bold">
                    Optimization result
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-info/30 bg-info/5 p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-info/10 p-2 text-info">
                          <TrendingDown size={22} />
                        </div>

                        <div>
                          <h4 className="font-bold">Approximate Minimum</h4>

                          <p className="text-xs text-base-content/60">
                            Lowest sampled value
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between gap-4">
                          <span className="text-sm text-base-content/60">
                            x
                          </span>

                          <strong>{formatNumber(result.minimum.x)}</strong>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span className="text-sm text-base-content/60">
                            f(x)
                          </span>

                          <strong>{formatNumber(result.minimum.value)}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-success/10 p-2 text-success">
                          <TrendingUp size={22} />
                        </div>

                        <div>
                          <h4 className="font-bold">Approximate Maximum</h4>

                          <p className="text-xs text-base-content/60">
                            Highest sampled value
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between gap-4">
                          <span className="text-sm text-base-content/60">
                            x
                          </span>

                          <strong>{formatNumber(result.maximum.x)}</strong>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span className="text-sm text-base-content/60">
                            f(x)
                          </span>

                          <strong>{formatNumber(result.maximum.value)}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-base-200 p-4 text-sm">
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <span>
                        <strong>Sample spacing:</strong>{" "}
                        {formatNumber(result.step)}
                      </span>

                      <span>
                        <strong>Valid points:</strong>{" "}
                        {result.validPoints.toLocaleString()}
                      </span>
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
                <h2 className="card-title">What is optimization?</h2>

                <p className="leading-7 text-base-content/70">
                  Optimization is the process of finding values that make a
                  function as large or as small as possible under specified
                  conditions.
                </p>

                <div className="my-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-base-200 p-4">
                    <p className="font-semibold">Minimum</p>
                    <p className="mt-1 text-sm text-base-content/60">
                      A point where the function reaches a low value.
                    </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-4">
                    <p className="font-semibold">Maximum</p>
                    <p className="mt-1 text-sm text-base-content/60">
                      A point where the function reaches a high value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">Why use numerical optimization?</h2>

                <p className="leading-7 text-base-content/70">
                  Not every function is easy to optimize analytically. Numerical
                  methods can provide useful estimates when symbolic
                  differentiation or algebraic solutions are inconvenient.
                </p>

                <ul className="mt-3 space-y-2 text-sm text-base-content/60">
                  <li>• Works with complicated functions</li>
                  <li>• Useful for numerical modeling</li>
                  <li>• Can handle functions without simple closed forms</li>
                  <li>• Easy to apply over a finite interval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Educational content */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="card border border-base-300 bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Worked example</h2>

              <p className="leading-7 text-base-content/70">Consider:</p>

              <div className="rounded-xl bg-base-200 p-4 text-center font-mono">
                f(x) = x² − 6x + 5
              </div>

              <p className="leading-7 text-base-content/70">
                This parabola has its minimum at x = 3. The calculator searches
                the chosen interval and samples many points to approximate the
                location of that minimum.
              </p>

              <div className="rounded-xl bg-base-200 p-4 text-center font-mono">
                f(3) = 9 − 18 + 5 = −4
              </div>
            </div>
          </article>

          <article className="card border border-base-300 bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Important limitation</h2>

              <p className="leading-7 text-base-content/70">
                This calculator performs a grid search. It does not symbolically
                solve for critical points and therefore reports an approximate
                result based on the sampling resolution.
              </p>

              <p className="leading-7 text-base-content/70">
                Increasing the resolution reduces the distance between sampled
                points and can improve the estimate, but it does not replace a
                rigorous calculus-based optimization analysis.
              </p>

              <div className="alert alert-warning mt-2">
                <Info size={20} />
                <span className="text-sm">
                  For mathematical proofs or exact extrema, analyze critical
                  points and endpoints analytically.
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
