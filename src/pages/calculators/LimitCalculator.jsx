import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Info,
  RotateCcw,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

import { evaluateExpression, formatNumber } from "../../utils/mathHelpers.js";

const DEFAULT_DELTA = 0.000001;
const MIN_DELTA = 0.0000000001;
const MAX_DELTA = 0.1;

const EXAMPLES = [
  {
    label: "x² at 2",
    expression: "x^2",
    point: "2",
  },
  {
    label: "2x + 3",
    expression: "2x + 3",
    point: "4",
  },
  {
    label: "sin(x) at 0",
    expression: "sin(x)",
    point: "0",
  },
  {
    label: "x² − 4 / x − 2",
    expression: "(x^2 - 4)/(x - 2)",
    point: "2",
  },
  {
    label: "1/x at 0",
    expression: "1/x",
    point: "0",
  },
];

function calculateOneSidedLimit(fn, point, delta, direction) {
  const values = [];

  /*
   * Use progressively smaller distances from the point.
   * This gives several samples that can be compared for stability.
   */
  const distances = [delta, delta / 2, delta / 4, delta / 8, delta / 16];

  for (const distance of distances) {
    const sample = direction === "left" ? point - distance : point + distance;

    try {
      const value = fn(sample);

      if (Number.isFinite(value)) {
        values.push({
          x: sample,
          value,
        });
      }
    } catch {
      // Ignore undefined samples.
    }
  }

  if (values.length < 2) {
    return {
      value: null,
      values,
      stable: false,
    };
  }

  const recent = values.slice(-3);
  const recentValues = recent.map((item) => item.value);

  const average =
    recentValues.reduce((sum, value) => sum + value, 0) / recentValues.length;

  const spread = Math.max(...recentValues) - Math.min(...recentValues);

  const scale = Math.max(1, Math.abs(average));

  const relativeSpread = spread / scale;

  return {
    value: average,
    values,
    stable: relativeSpread < 0.0001,
  };
}

function classifyLimit(left, right) {
  if (Number.isFinite(left) && Number.isFinite(right)) {
    const difference = Math.abs(left - right);
    const scale = Math.max(1, Math.abs(left), Math.abs(right));

    if (difference / scale < 0.0001) {
      return {
        type: "finite",
        label: "Finite limit",
      };
    }

    return {
      type: "does-not-exist",
      label: "Two-sided limit does not exist",
    };
  }

  return {
    type: "undefined",
    label: "Unable to determine a finite limit",
  };
}

export default function LimitCalculator() {
  const [expression, setExpression] = useState("x^2");
  const [point, setPoint] = useState("2");
  const [delta, setDelta] = useState(String(DEFAULT_DELTA));

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateLimit() {
    setError("");
    setResult(null);

    try {
      if (!expression.trim()) {
        throw new Error("Enter a mathematical expression.");
      }

      const a = Number(point);
      const h = Number(delta);

      if (!Number.isFinite(a)) {
        throw new Error("Enter a valid value for the point x = a.");
      }

      if (!Number.isFinite(h) || h < MIN_DELTA || h > MAX_DELTA) {
        throw new Error(`Delta must be between ${MIN_DELTA} and ${MAX_DELTA}.`);
      }

      const fn = (value) => evaluateExpression(expression, value);

      /*
       * Evaluate the function directly at the point.
       * This is useful for demonstrating that f(a) and
       * lim x→a f(x) are not necessarily the same thing.
       */
      let functionValue = null;

      try {
        functionValue = fn(a);
      } catch {
        functionValue = null;
      }

      const left = calculateOneSidedLimit(fn, a, h, "left");

      const right = calculateOneSidedLimit(fn, a, h, "right");

      const classification = classifyLimit(left.value, right.value);

      let limitValue = null;

      if (classification.type === "finite") {
        limitValue = (left.value + right.value) / 2;
      }

      setResult({
        point: a,
        functionValue,
        leftLimit: left.value,
        rightLimit: right.value,
        leftSamples: left.values,
        rightSamples: right.values,
        limitValue,
        classification,
      });
    } catch (err) {
      setError(err?.message || "Unable to calculate the limit.");
    }
  }

  function loadExample(example) {
    setExpression(example.expression);
    setPoint(example.point);
    setDelta(String(DEFAULT_DELTA));
    setResult(null);
    setError("");
  }

  function reset() {
    setExpression("x^2");
    setPoint("2");
    setDelta(String(DEFAULT_DELTA));
    setResult(null);
    setError("");
  }

  return (
    <>
      <SEO
        title="Limit Calculator | Numerical Limits in Calculus"
        description="Calculate numerical limits from the left and right of a point. Explore one-sided limits, two-sided limits, continuity, removable discontinuities, and numerical approximation."
        canonical="/calculators/limit"
      />

      <PageHeader
        eyebrow="Calculators"
        title="Limit Calculator"
        description="Estimate a function's limit as x approaches a chosen point by comparing values from both sides."
      />

      <section className="pml-section">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* ================================================================ */}
            {/* Calculator                                                        */}
            {/* ================================================================ */}

            <div className="pml-card">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Calculator size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#17202A]">
                      Calculate a limit
                    </h2>

                    <p className="mt-1 text-sm text-[#687481]">
                      Compare the behavior of the function from both sides of
                      the point.
                    </p>
                  </div>
                </div>

                <div className="my-7 border-t border-[#E9E9E6]" />

                {/* Function */}

                <div>
                  <label
                    htmlFor="limit-expression"
                    className="mb-2 block text-sm font-semibold text-[#17202A]"
                  >
                    Function f(x)
                  </label>

                  <input
                    id="limit-expression"
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        calculateLimit();
                      }
                    }}
                    placeholder="Example: (x^2 - 4)/(x - 2)"
                    className="pml-input font-mono"
                    spellCheck="false"
                    autoComplete="off"
                  />

                  <p className="mt-2 text-xs leading-5 text-[#687481]">
                    Examples: <code>2x</code>, <code>x^2</code>,{" "}
                    <code>sin(x)</code>, <code>(x^2-4)/(x-2)</code>,{" "}
                    <code>sqrt(x)</code>.
                  </p>
                </div>

                {/* Point and delta */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="limit-point"
                      className="mb-2 block text-sm font-semibold text-[#17202A]"
                    >
                      Approach point a
                    </label>

                    <input
                      id="limit-point"
                      type="number"
                      step="any"
                      value={point}
                      onChange={(e) => setPoint(e.target.value)}
                      className="pml-input"
                    />

                    <p className="mt-2 text-xs text-[#687481]">
                      The calculator estimates{" "}
                      <MathRenderer inline>
                        {"\\lim_{x\\to a}f(x)"}
                      </MathRenderer>
                      .
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="limit-delta"
                      className="mb-2 block text-sm font-semibold text-[#17202A]"
                    >
                      Initial distance δ
                    </label>

                    <input
                      id="limit-delta"
                      type="number"
                      step="any"
                      min={MIN_DELTA}
                      max={MAX_DELTA}
                      value={delta}
                      onChange={(e) => setDelta(e.target.value)}
                      className="pml-input"
                    />

                    <p className="mt-2 text-xs text-[#687481]">
                      Smaller values examine points closer to a.
                    </p>
                  </div>
                </div>

                {/* Examples */}

                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#687481]">
                    Try an example
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {EXAMPLES.map((example) => (
                      <button
                        key={example.label}
                        type="button"
                        onClick={() => loadExample(example)}
                        className="rounded-md border border-[#DEDEDB] bg-white px-3 py-2 text-xs font-semibold text-[#34404C] transition hover:border-[#2F5BEA] hover:text-[#2F5BEA]"
                      >
                        {example.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error */}

                {error && (
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <Info size={19} className="mt-0.5 shrink-0" />

                    <span>{error}</span>
                  </div>
                )}

                {/* Buttons */}

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={calculateLimit}
                    className="pml-btn-primary"
                  >
                    Calculate limit
                    <ArrowRight size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={reset}
                    className="pml-btn-secondary"
                  >
                    <RotateCcw size={16} />
                    Reset
                  </button>
                </div>

                {/* Result */}

                {result && (
                  <div className="mt-8 border-t border-[#E9E9E6] pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={19}
                        className={
                          result.classification.type === "finite"
                            ? "text-[#18794E]"
                            : "text-[#9A5B00]"
                        }
                      />

                      <h3 className="text-lg font-bold text-[#17202A]">
                        Result
                      </h3>
                    </div>

                    <div className="mt-5 rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#2448C7]">
                        Two-sided limit
                      </p>

                      <div className="mt-3">
                        <MathRenderer>
                          {`\\lim_{x\\to ${result.point}} f(x)`}
                        </MathRenderer>
                      </div>

                      <div className="mt-2 text-center">
                        {result.limitValue !== null ? (
                          <span className="text-3xl font-bold text-[#17324D]">
                            {formatNumber(result.limitValue)}
                          </span>
                        ) : (
                          <span className="text-xl font-bold text-[#9A5B00]">
                            Does not exist
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-center text-sm text-[#687481]">
                        {result.classification.label}
                      </p>
                    </div>

                    {/* Left / right */}

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                          Left-hand limit
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#17202A]">
                          {result.leftLimit !== null
                            ? formatNumber(result.leftLimit)
                            : "Undefined"}
                        </p>

                        <p className="mt-2 text-xs text-[#687481]">
                          x approaches {result.point} from the left
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                          Right-hand limit
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#17202A]">
                          {result.rightLimit !== null
                            ? formatNumber(result.rightLimit)
                            : "Undefined"}
                        </p>

                        <p className="mt-2 text-xs text-[#687481]">
                          x approaches {result.point} from the right
                        </p>
                      </div>
                    </div>

                    {/* Function value */}

                    <div className="mt-5 rounded-lg border border-[#DEDEDB] bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                        Function value at the point
                      </p>

                      <p className="mt-2 text-xl font-bold text-[#17202A]">
                        {result.functionValue !== null
                          ? formatNumber(result.functionValue)
                          : "Undefined"}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#687481]">
                        The value of f(a) does not necessarily have to equal the
                        limit as x approaches a.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ================================================================ */}
            {/* Explanation                                                      */}
            {/* ================================================================ */}

            <div className="space-y-6">
              <article className="pml-card p-6 sm:p-7">
                <p className="pml-eyebrow">Core idea</p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  What is a limit?
                </h2>

                <p className="mt-4 leading-7 text-[#34404C]">
                  A limit describes the value that a function approaches as its
                  input gets closer and closer to a particular point.
                </p>

                <div className="pml-formula mt-6">
                  <MathRenderer>{"\\lim_{x\\to a}f(x)=L"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#687481]">
                  The function does not necessarily need to be defined at x = a
                  for the limit to exist. What matters is the behavior of the
                  function near that point.
                </p>
              </article>

              <article className="pml-card p-6 sm:p-7">
                <p className="pml-eyebrow">Why limits matter</p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  Limits are the foundation of calculus
                </h2>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#34404C]">
                  <li>
                    <strong>Derivatives:</strong> the derivative is defined
                    using a limit.
                  </li>

                  <li>
                    <strong>Continuity:</strong> limits help determine whether a
                    function is continuous.
                  </li>

                  <li>
                    <strong>Integrals:</strong> definite integrals can be
                    constructed from limits of sums.
                  </li>

                  <li>
                    <strong>Asymptotic behavior:</strong> limits describe what
                    happens near boundaries and infinity.
                  </li>

                  <li>
                    <strong>Modeling:</strong> limits help describe processes
                    approaching a particular state.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* ================================================================ */}
          {/* Educational content                                              */}
          {/* ================================================================ */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">One-sided limits</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Why both sides matter
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                A two-sided limit exists only when the function approaches the
                same value from the left and from the right.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L"}
                </MathRenderer>
              </div>

              <p className="mt-4 leading-7 text-[#34404C]">
                If the left-hand and right-hand limits are different, the
                ordinary two-sided limit does not exist.
              </p>

              <div className="pml-warning mt-6">
                <strong>Important:</strong> the calculator compares both sides
                rather than relying on values from only one direction.
              </div>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">Worked example</p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                A removable discontinuity
              </h2>

              <div className="pml-formula mt-5">
                <MathRenderer>{"f(x)=\\frac{x^2-4}{x-2}"}</MathRenderer>
              </div>

              <p className="mt-4 leading-7 text-[#34404C]">
                Direct substitution at x = 2 produces the indeterminate form
                0/0. However, factoring the numerator gives:
              </p>

              <div className="pml-formula mt-5">
                <MathRenderer>{"\\frac{(x-2)(x+2)}{x-2}=x+2"}</MathRenderer>
              </div>

              <p className="mt-4 leading-7 text-[#34404C]">Therefore:</p>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {"\\lim_{x\\to2}\\frac{x^2-4}{x-2}=4"}
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                The original function is undefined at x = 2, but its limiting
                value is 4.
              </p>
            </article>
          </div>

          {/* ================================================================ */}
          {/* Numerical method                                                 */}
          {/* ================================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Numerical method</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              How this calculator estimates a limit
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              A numerical limit cannot prove a mathematical limit in the same
              way that an analytical proof can. Instead, this calculator samples
              the function at progressively smaller distances from the chosen
              point and looks for stable behavior.
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>
                {
                  "x=a-h,\\quad a-\\frac{h}{2},\\quad a-\\frac{h}{4},\\quad \\ldots"
                }
              </MathRenderer>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-bold text-[#17202A]">
                  Approach from the left
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Samples points smaller than a and checks whether the function
                  approaches a stable value.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">
                  Approach from the right
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Samples points larger than a and checks whether they approach
                  the same value.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">Compare</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  If both sides stabilize at approximately the same finite
                  value, the calculator reports that value as the numerical
                  limit.
                </p>
              </div>
            </div>
          </article>

          {/* ================================================================ */}
          {/* Important distinction                                             */}
          {/* ================================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Important distinction</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              The limit is not always f(a)
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-6">
                <h3 className="font-bold text-[#17202A]">Function value</h3>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"f(a)"}</MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  This is the actual value assigned to the function at x = a, if
                  it is defined.
                </p>
              </div>

              <div className="rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6">
                <h3 className="font-bold text-[#17202A]">Limit</h3>

                <div className="pml-formula mt-4">
                  <MathRenderer>{"\\lim_{x\\to a}f(x)"}</MathRenderer>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#687481]">
                  This describes what the function approaches as x gets
                  arbitrarily close to a.
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-[#34404C]">
              These values can be equal, but they do not have to be. A function
              may even be undefined at the point while its limit exists.
            </p>
          </article>

          {/* ================================================================ */}
          {/* Limit and continuity                                             */}
          {/* ================================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Connection to continuity</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              When is a function continuous?
            </h2>

            <p className="mt-4 leading-7 text-[#34404C]">
              A function is continuous at x = a when three conditions are
              satisfied:
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>{"f(a)\\text{ exists}"}</MathRenderer>
            </div>

            <div className="pml-formula">
              <MathRenderer>
                {"\\lim_{x\\to a}f(x)\\text{ exists}"}
              </MathRenderer>
            </div>

            <div className="pml-formula">
              <MathRenderer>{"\\lim_{x\\to a}f(x)=f(a)"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              If the limit exists but differs from the function value, the
              function has a discontinuity at that point.
            </p>
          </article>

          {/* ================================================================ */}
          {/* Numerical limitations                                            */}
          {/* ================================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Numerical limitations</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              What numerical limits can and cannot tell you
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-[#17202A]">Useful for</h3>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#34404C]">
                  <li>• Exploring the behavior of a function</li>

                  <li>• Checking an analytical calculation</li>

                  <li>• Visualizing one-sided behavior</li>

                  <li>• Discovering possible discontinuities</li>

                  <li>• Developing intuition about limits</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">Not a proof</h3>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-[#34404C]">
                  <li>• Numerical sampling cannot prove a limit exists.</li>

                  <li>
                    • Extremely large values may require analytical methods.
                  </li>

                  <li>
                    • Oscillating functions can be difficult to classify
                    numerically.
                  </li>

                  <li>
                    • Floating-point arithmetic introduces finite precision.
                  </li>

                  <li>
                    • Domain restrictions must be considered when interpreting
                    results.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
