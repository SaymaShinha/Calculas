import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Info,
  RotateCcw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

import { evaluateExpression, formatNumber } from "../../utils/mathHelpers.js";

const EXAMPLES = [
  {
    label: "Quadratic",
    expression: "x^2 - 6x + 5",
    lower: "-5",
    upper: "10",
  },
  {
    label: "Cubic",
    expression: "x^3 - 6x^2 + 9x",
    lower: "-2",
    upper: "6",
  },
  {
    label: "Sine",
    expression: "sin(x)",
    lower: "-6.28",
    upper: "6.28",
  },
  {
    label: "Absolute value",
    expression: "abs(x - 2)",
    lower: "-5",
    upper: "8",
  },
];

export default function OptimizationCalculator() {
  const [expression, setExpression] = useState("x^2 - 6x + 5");
  const [lower, setLower] = useState("-5");
  const [upper, setUpper] = useState("10");
  const [resolution, setResolution] = useState("1000");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateOptimization() {
    setError("");
    setResult(null);

    try {
      if (!expression.trim()) {
        throw new Error("Enter a mathematical expression.");
      }

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

      const step = (b - a) / points;

      let minimum = null;
      let maximum = null;

      let validPoints = 0;
      let invalidPoints = 0;

      for (let i = 0; i <= points; i++) {
        const x = a + i * step;

        try {
          const value = fn(x);

          if (!Number.isFinite(value)) {
            invalidPoints += 1;
            continue;
          }

          validPoints += 1;

          if (minimum === null || value < minimum.value) {
            minimum = {
              x,
              value,
            };
          }

          if (maximum === null || value > maximum.value) {
            maximum = {
              x,
              value,
            };
          }
        } catch {
          invalidPoints += 1;
        }
      }

      if (validPoints === 0) {
        throw new Error(
          "No valid function values were found in this interval. Check the function and domain.",
        );
      }

      setResult({
        minimum,
        maximum,
        step,
        validPoints,
        invalidPoints,
        totalPoints: points + 1,
      });
    } catch (err) {
      setError(err?.message || "Unable to perform the optimization.");
    }
  }

  function loadExample(example) {
    setExpression(example.expression);
    setLower(example.lower);
    setUpper(example.upper);
    setResolution("1000");
    setResult(null);
    setError("");
  }

  function reset() {
    setExpression("x^2 - 6x + 5");
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
        description="Find approximate minimum and maximum values of a mathematical function over a finite interval using numerical optimization. Learn about extrema, grid search, critical points, and numerical accuracy."
        canonical="/calculators/optimization"
      />

      <PageHeader
        eyebrow="Calculators"
        title="Optimization Calculator"
        description="Estimate the minimum and maximum values of a function over a finite interval using numerical search."
      />

      <section className="pml-section">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* ============================================================ */}
            {/* Calculator                                                   */}
            {/* ============================================================ */}

            <div className="pml-card">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Calculator size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#17202A]">
                      Optimize a function
                    </h2>

                    <p className="mt-1 text-sm text-[#687481]">
                      Search a finite interval for approximate extrema.
                    </p>
                  </div>
                </div>

                <div className="my-7 border-t border-[#E9E9E6]" />

                {/* Function */}

                <div>
                  <label
                    htmlFor="optimization-expression"
                    className="mb-2 block text-sm font-semibold text-[#17202A]"
                  >
                    Function f(x)
                  </label>

                  <input
                    id="optimization-expression"
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        calculateOptimization();
                      }
                    }}
                    placeholder="Example: x^2 - 6x + 5"
                    className="pml-input font-mono"
                    spellCheck="false"
                    autoComplete="off"
                  />

                  <p className="mt-2 text-xs leading-5 text-[#687481]">
                    Natural notation is supported:
                    <code className="mx-1">2x</code>
                    <code className="mx-1">x^2</code>
                    <code className="mx-1">sin(x)</code>
                    <code className="mx-1">sqrt(x)</code>
                  </p>
                </div>

                {/* Bounds */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="optimization-lower"
                      className="mb-2 block text-sm font-semibold text-[#17202A]"
                    >
                      Lower bound
                    </label>

                    <input
                      id="optimization-lower"
                      type="number"
                      step="any"
                      value={lower}
                      onChange={(e) => setLower(e.target.value)}
                      className="pml-input"
                    />

                    <p className="mt-2 text-xs text-[#687481]">
                      Start of the search interval.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="optimization-upper"
                      className="mb-2 block text-sm font-semibold text-[#17202A]"
                    >
                      Upper bound
                    </label>

                    <input
                      id="optimization-upper"
                      type="number"
                      step="any"
                      value={upper}
                      onChange={(e) => setUpper(e.target.value)}
                      className="pml-input"
                    />

                    <p className="mt-2 text-xs text-[#687481]">
                      End of the search interval.
                    </p>
                  </div>
                </div>

                {/* Resolution */}

                <div className="mt-5">
                  <label
                    htmlFor="optimization-resolution"
                    className="mb-2 block text-sm font-semibold text-[#17202A]"
                  >
                    Search resolution
                  </label>

                  <input
                    id="optimization-resolution"
                    type="number"
                    min="10"
                    max="100000"
                    step="1"
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                    className="pml-input"
                  />

                  <p className="mt-2 text-xs leading-5 text-[#687481]">
                    The interval is divided into this many equal subintervals.
                    Higher resolution gives a finer search.
                  </p>
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
                    onClick={calculateOptimization}
                    className="pml-btn-primary"
                  >
                    Find extrema
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

                {/* ======================================================== */}
                {/* Results                                                   */}
                {/* ======================================================== */}

                {result && (
                  <div className="mt-8 border-t border-[#E9E9E6] pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={19} className="text-[#18794E]" />

                      <h3 className="text-lg font-bold text-[#17202A]">
                        Optimization result
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#687481]">
                      These values are the lowest and highest function values
                      found among the sampled points.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      {/* Minimum */}

                      <div className="rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F5BEA]">
                            <TrendingDown size={20} />
                          </div>

                          <div>
                            <h4 className="font-bold text-[#17202A]">
                              Approximate minimum
                            </h4>

                            <p className="mt-1 text-xs text-[#687481]">
                              Lowest sampled value
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 space-y-3">
                          <div className="flex items-center justify-between gap-4 border-b border-[#D9E2FF] pb-3">
                            <span className="text-sm text-[#687481]">x</span>

                            <strong className="font-mono text-[#17202A]">
                              {formatNumber(result.minimum.x)}
                            </strong>
                          </div>

                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm text-[#687481]">f(x)</span>

                            <strong className="font-mono text-lg text-[#17324D]">
                              {formatNumber(result.minimum.value)}
                            </strong>
                          </div>
                        </div>
                      </div>

                      {/* Maximum */}

                      <div className="rounded-lg border border-[#C8E4D5] bg-[#EEF9F3] p-6">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#18794E]">
                            <TrendingUp size={20} />
                          </div>

                          <div>
                            <h4 className="font-bold text-[#17202A]">
                              Approximate maximum
                            </h4>

                            <p className="mt-1 text-xs text-[#687481]">
                              Highest sampled value
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 space-y-3">
                          <div className="flex items-center justify-between gap-4 border-b border-[#D5EBDD] pb-3">
                            <span className="text-sm text-[#687481]">x</span>

                            <strong className="font-mono text-[#17202A]">
                              {formatNumber(result.maximum.x)}
                            </strong>
                          </div>

                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm text-[#687481]">f(x)</span>

                            <strong className="font-mono text-lg text-[#17324D]">
                              {formatNumber(result.maximum.value)}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Search information */}

                    <div className="mt-5 rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                            Sample spacing
                          </p>

                          <p className="mt-1 font-mono font-semibold text-[#17202A]">
                            {formatNumber(result.step)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                            Valid points
                          </p>

                          <p className="mt-1 font-mono font-semibold text-[#17202A]">
                            {result.validPoints.toLocaleString()}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                            Total samples
                          </p>

                          <p className="mt-1 font-mono font-semibold text-[#17202A]">
                            {result.totalPoints.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ============================================================ */}
            {/* Explanation                                                  */}
            {/* ============================================================ */}

            <div className="space-y-6">
              <article className="pml-card p-6 sm:p-7">
                <p className="pml-eyebrow">Core idea</p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  What is optimization?
                </h2>

                <p className="mt-4 leading-7 text-[#34404C]">
                  Optimization is the study of finding input values that make a
                  quantity as large or as small as possible subject to specified
                  conditions.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                    <TrendingDown size={20} className="text-[#2F5BEA]" />

                    <h3 className="mt-3 font-bold text-[#17202A]">Minimum</h3>

                    <p className="mt-2 text-sm leading-6 text-[#687481]">
                      A point where the function reaches a relatively or
                      absolutely low value.
                    </p>
                  </div>

                  <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                    <TrendingUp size={20} className="text-[#18794E]" />

                    <h3 className="mt-3 font-bold text-[#17202A]">Maximum</h3>

                    <p className="mt-2 text-sm leading-6 text-[#687481]">
                      A point where the function reaches a relatively or
                      absolutely high value.
                    </p>
                  </div>
                </div>
              </article>

              <article className="pml-card p-6 sm:p-7">
                <p className="pml-eyebrow">Why it matters</p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  Where optimization is used
                </h2>

                <p className="mt-4 leading-7 text-[#34404C]">
                  Optimization appears throughout mathematics, science,
                  engineering, economics, and data analysis.
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#34404C]">
                  <li>
                    <strong>Engineering:</strong> minimize material, weight, or
                    energy.
                  </li>

                  <li>
                    <strong>Economics:</strong> maximize profit or minimize
                    cost.
                  </li>

                  <li>
                    <strong>Physics:</strong> identify minimum-energy
                    configurations.
                  </li>

                  <li>
                    <strong>Data science:</strong> minimize loss functions
                    during model training.
                  </li>

                  <li>
                    <strong>Design:</strong> maximize performance subject to
                    constraints.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* ============================================================ */}
          {/* Mathematical foundation                                      */}
          {/* ============================================================ */}

          <article className="pml-card mt-10 p-6 sm:p-8">
            <p className="pml-eyebrow">Mathematical foundation</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              Extrema and critical points
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              In differential calculus, extrema are often located by studying
              the derivative. At an interior local extremum, the derivative is
              commonly zero or undefined.
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>{"f'(x)=0"}</MathRenderer>
            </div>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              These candidate locations are called critical points. They must
              then be compared with other candidates, including endpoints when
              the problem is restricted to a closed interval.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-bold text-[#17202A]">
                  1. Find critical points
                </p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Solve f′(x) = 0 and identify points where f′ is undefined.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-bold text-[#17202A]">2. Check endpoints</p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  For a closed interval, evaluate the endpoints as well.
                </p>
              </div>

              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                <p className="font-bold text-[#17202A]">3. Compare values</p>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  The largest and smallest candidate values determine absolute
                  extrema.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Worked example                                               */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Worked example</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              Optimizing a quadratic function
            </h2>

            <p className="mt-4 leading-7 text-[#34404C]">
              Consider the function:
            </p>

            <div className="pml-formula mt-5">
              <MathRenderer>{"f(x)=x^2-6x+5"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">Its derivative is:</p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"f'(x)=2x-6"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Set the derivative equal to zero:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>
                {"2x-6=0\\quad\\Rightarrow\\quad x=3"}
              </MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Evaluating the function at this critical point gives:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"f(3)=3^2-6(3)+5=-4"}</MathRenderer>
            </div>

            <p className="mt-5 leading-7 text-[#34404C]">
              Because the coefficient of x² is positive, the parabola opens
              upward. Therefore x = 3 gives the global minimum over all real
              numbers.
            </p>
          </article>

          {/* ============================================================ */}
          {/* Numerical grid search                                        */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Numerical method</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              How the calculator searches
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              This calculator uses a simple grid-search strategy. The selected
              interval is divided into equally spaced sample points, and the
              function is evaluated at each valid point.
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>{"x_i=a+i\\Delta x"}</MathRenderer>
            </div>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              The sample spacing is approximately:
            </p>

            <div className="pml-formula mt-4">
              <MathRenderer>{"\\Delta x=\\frac{b-a}{N}"}</MathRenderer>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <div>
                <h3 className="font-bold text-[#17202A]">Choose an interval</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Specify the lower and upper bounds of the search.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">
                  Divide the interval
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Split the interval into many equally spaced points.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">Compare values</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Keep track of the smallest and largest sampled function
                  values.
                </p>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Accuracy and limitations                                     */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Accuracy</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              Resolution affects the estimate
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              A grid search only evaluates the function at discrete points. If
              an actual extremum occurs between two sampled points, the
              calculator can only report the best sampled approximation.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-6">
                <h3 className="font-bold text-[#17202A]">Lower resolution</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Faster computation, but the reported x-value may be farther
                  from the true extremum.
                </p>
              </div>

              <div className="rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-6">
                <h3 className="font-bold text-[#17202A]">Higher resolution</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Smaller spacing between samples can produce a closer numerical
                  approximation.
                </p>
              </div>
            </div>

            <div className="pml-warning mt-6">
              <strong>Important:</strong> a numerical grid search is an
              approximation. It does not prove that the reported point is the
              exact global maximum or minimum.
            </div>
          </article>

          {/* ============================================================ */}
          {/* Global vs local extrema                                      */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">Terminology</p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              Local and global extrema
            </h2>

            <div className="mt-6 overflow-hidden rounded-lg border border-[#DEDEDB]">
              <div className="grid grid-cols-1 border-b border-[#DEDEDB] bg-[#F8F7F4] sm:grid-cols-3">
                <div className="p-4 text-sm font-bold text-[#17202A]">Type</div>

                <div className="p-4 text-sm font-bold text-[#17202A] sm:col-span-2">
                  Meaning
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-[#E9E9E6] sm:grid-cols-3">
                <div className="p-4 text-sm font-semibold text-[#17202A]">
                  Local minimum
                </div>

                <div className="p-4 text-sm leading-6 text-[#687481] sm:col-span-2">
                  The function is no larger than nearby function values.
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-[#E9E9E6] sm:grid-cols-3">
                <div className="p-4 text-sm font-semibold text-[#17202A]">
                  Local maximum
                </div>

                <div className="p-4 text-sm leading-6 text-[#687481] sm:col-span-2">
                  The function is no smaller than nearby function values.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="p-4 text-sm font-semibold text-[#17202A]">
                  Global extremum
                </div>

                <div className="p-4 text-sm leading-6 text-[#687481] sm:col-span-2">
                  The function achieves its largest or smallest value over the
                  entire domain or specified interval.
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* Important limitation                                         */}
          {/* ============================================================ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF7E8] text-[#9A5B00]">
                <Info size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#17202A]">
                  When should you use analytical optimization?
                </h2>

                <p className="mt-3 leading-7 text-[#34404C]">
                  For an exact calculus solution, numerical sampling should
                  normally be followed by analytical analysis. Find critical
                  points, evaluate endpoints, and use derivative tests where
                  appropriate.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
              <p className="text-sm font-semibold text-[#17202A]">
                Recommended workflow
              </p>

              <p className="mt-2 text-sm leading-6 text-[#687481]">
                Explore numerically → identify likely extrema → solve
                analytically → verify the result numerically.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
