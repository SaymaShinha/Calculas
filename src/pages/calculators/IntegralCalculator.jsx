import { useMemo, useState } from "react";
import {
  AlertCircle,
  AreaChart,
  Calculator,
  CheckCircle2,
  Info,
  RefreshCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";
import { evaluateExpression, formatNumber } from "../../utils/mathHelpers.js";

const DEFAULT_SUBINTERVALS = 1000;
const MAX_SUBINTERVALS = 10000;

function simpson(expression, a, b, n = DEFAULT_SUBINTERVALS) {
  let intervals = Math.max(2, Math.floor(n));

  if (intervals % 2 !== 0) {
    intervals += 1;
  }

  const h = (b - a) / intervals;

  let sum =
    evaluateExpression(expression, a) + evaluateExpression(expression, b);

  for (let i = 1; i < intervals; i += 1) {
    const x = a + i * h;
    const fx = evaluateExpression(expression, x);

    if (!Number.isFinite(fx)) {
      throw new Error(`The function could not be evaluated at x = ${x}.`);
    }

    sum += (i % 2 === 0 ? 2 : 4) * fx;
  }

  return {
    value: (h / 3) * sum,
    intervals,
    stepSize: h,
  };
}

export default function IntegralCalculator() {
  const [expression, setExpression] = useState("x^2");
  const [lower, setLower] = useState("0");
  const [upper, setUpper] = useState("3");
  const [subintervals, setSubintervals] = useState(
    String(DEFAULT_SUBINTERVALS),
  );

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const numericLower = Number(lower);
  const numericUpper = Number(upper);
  const numericSubintervals = Number(subintervals);

  const validationError = useMemo(() => {
    if (!expression.trim()) {
      return "Enter a mathematical function.";
    }

    if (!Number.isFinite(numericLower) || !Number.isFinite(numericUpper)) {
      return "Enter valid lower and upper bounds.";
    }

    if (numericLower === numericUpper) {
      return "The lower and upper bounds must be different.";
    }

    if (
      !Number.isFinite(numericSubintervals) ||
      !Number.isInteger(numericSubintervals) ||
      numericSubintervals < 2
    ) {
      return "The number of subintervals must be an integer of at least 2.";
    }

    if (numericSubintervals > MAX_SUBINTERVALS) {
      return `Please use ${MAX_SUBINTERVALS.toLocaleString()} subintervals or fewer.`;
    }

    return "";
  }, [expression, numericLower, numericUpper, numericSubintervals]);

  function calculate() {
    setError("");
    setResult(null);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const calculation = simpson(
        expression,
        numericLower,
        numericUpper,
        numericSubintervals,
      );

      if (!Number.isFinite(calculation.value)) {
        throw new Error("The calculation did not produce a finite result.");
      }

      setResult({
        value: calculation.value,
        intervals: calculation.intervals,
        stepSize: calculation.stepSize,
        expression,
        lower: numericLower,
        upper: numericUpper,
      });
    } catch (calculationError) {
      setError(
        calculationError?.message ||
          "Unable to calculate the integral. Check the function and bounds.",
      );
    }
  }

  function reset() {
    setExpression("x^2");
    setLower("0");
    setUpper("3");
    setSubintervals(String(DEFAULT_SUBINTERVALS));
    setResult(null);
    setError("");
  }

  function applyExample(example) {
    setExpression(example.expression);
    setLower(example.lower);
    setUpper(example.upper);
    setResult(null);
    setError("");
  }

  const intervalWidth = useMemo(() => {
    if (!Number.isFinite(numericLower) || !Number.isFinite(numericUpper)) {
      return null;
    }

    return numericUpper - numericLower;
  }, [numericLower, numericUpper]);

  return (
    <>
      <SEO
        title="Integral Calculator | Definite Integral & Simpson's Rule"
        description="Calculate definite integrals numerically using Simpson's rule. Learn about area, accumulation, Riemann sums, step size, numerical accuracy, and the Fundamental Theorem of Calculus."
        canonical="/calculators/integral"
      />

      <PageHeader
        eyebrow="Calculators • Integration"
        title="Integral Calculator"
        description="Estimate a definite integral numerically and learn how integration represents accumulation, signed area, and the total change of a quantity."
      />

      <main>
        {/* Introduction */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="pml-eyebrow">Understand before calculating</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  What does a definite integral measure?
                </h2>

                <div className="pml-prose mt-5 max-w-3xl">
                  <p>
                    A definite integral measures accumulated quantity over an
                    interval. When the function is positive, it can often be
                    interpreted as the area between the curve and the x-axis.
                  </p>

                  <p>
                    More generally, the integral represents{" "}
                    <strong>signed area</strong>: regions above the x-axis
                    contribute positively, while regions below the x-axis
                    contribute negatively.
                  </p>

                  <p>
                    This calculator uses <strong>Simpson&apos;s rule</strong>, a
                    numerical integration method that approximates the curve
                    using weighted function values.
                  </p>
                </div>
              </div>

              <div className="pml-card h-fit">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <AreaChart size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Definite integral
                    </h3>

                    <div className="mt-4 overflow-x-auto">
                      <MathRenderer>{"\\int_a^b f(x)\\,dx"}</MathRenderer>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The limits <strong>a</strong> and <strong>b</strong>{" "}
                      specify the interval over which accumulation is measured.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Controls */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                      <Calculator size={20} />
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2F5BEA]">
                        Calculator
                      </div>

                      <h2 className="mt-1 text-xl font-bold text-slate-900">
                        Integral settings
                      </h2>
                    </div>
                  </div>

                  {/* Function */}
                  <div className="mt-7">
                    <label
                      htmlFor="integral-expression"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Function f(x)
                    </label>

                    <input
                      id="integral-expression"
                      type="text"
                      value={expression}
                      onChange={(event) => {
                        setExpression(event.target.value);
                        setResult(null);
                        setError("");
                      }}
                      className="pml-input mt-2 w-full font-mono"
                      placeholder="Example: x^2"
                    />

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Examples: <code className="font-mono">x^2</code>,{" "}
                      <code className="font-mono">sin(x)</code>,{" "}
                      <code className="font-mono">x^3 + 2*x</code>
                    </p>
                  </div>

                  {/* Bounds */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <label>
                      <span className="block text-sm font-semibold text-slate-800">
                        Lower bound a
                      </span>

                      <input
                        type="number"
                        step="any"
                        value={lower}
                        onChange={(event) => {
                          setLower(event.target.value);
                          setResult(null);
                        }}
                        className="pml-input mt-2 w-full"
                      />
                    </label>

                    <label>
                      <span className="block text-sm font-semibold text-slate-800">
                        Upper bound b
                      </span>

                      <input
                        type="number"
                        step="any"
                        value={upper}
                        onChange={(event) => {
                          setUpper(event.target.value);
                          setResult(null);
                        }}
                        className="pml-input mt-2 w-full"
                      />
                    </label>
                  </div>

                  {/* Subintervals */}
                  <div className="mt-5">
                    <label
                      htmlFor="subintervals"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Number of subintervals
                    </label>

                    <input
                      id="subintervals"
                      type="number"
                      min="2"
                      max={MAX_SUBINTERVALS}
                      step="2"
                      value={subintervals}
                      onChange={(event) => {
                        setSubintervals(event.target.value);
                        setResult(null);
                      }}
                      className="pml-input mt-2 w-full"
                    />

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Simpson&apos;s rule requires an even number of
                      subintervals. If an odd value is entered, the calculator
                      automatically increases it by one.
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                      Try an example
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        {
                          label: "x²",
                          expression: "x^2",
                          lower: "0",
                          upper: "3",
                        },
                        {
                          label: "sin(x)",
                          expression: "sin(x)",
                          lower: "0",
                          upper: "3.14159265359",
                        },
                        {
                          label: "x³",
                          expression: "x^3",
                          lower: "1",
                          upper: "4",
                        },
                        {
                          label: "sqrt(x)",
                          expression: "sqrt(x)",
                          lower: "0",
                          upper: "4",
                        },
                      ].map((example) => (
                        <button
                          key={example.label}
                          type="button"
                          onClick={() => applyExample(example)}
                          className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 transition hover:border-[#B9CAFF] hover:bg-[#F7F9FF]"
                        >
                          {example.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={calculate}
                    className="pml-btn-primary mt-6 flex w-full items-center justify-center gap-2"
                  >
                    <Calculator size={18} />
                    Calculate Integral
                  </button>

                  <button
                    type="button"
                    onClick={reset}
                    className="pml-btn-secondary mt-3 flex w-full items-center justify-center gap-2"
                  >
                    <RefreshCcw size={16} />
                    Reset
                  </button>

                  {error && (
                    <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="flex gap-3">
                        <AlertCircle
                          size={18}
                          className="mt-0.5 shrink-0 text-red-600"
                        />

                        <p className="text-sm leading-6 text-red-700">
                          {error}
                        </p>
                      </div>
                    </div>
                  )}
                </section>

                {/* Result */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Calculation result
                  </div>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Definite integral
                  </h2>

                  {result === null ? (
                    <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                      <AreaChart size={30} className="mx-auto text-slate-400" />

                      <p className="mt-4 font-semibold text-slate-700">
                        Your result will appear here
                      </p>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Enter a function and integration bounds, then calculate
                        the numerical integral.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="mt-6 rounded-xl border border-[#D9E4FF] bg-[#EEF3FF] p-7">
                        <div className="text-sm font-medium text-slate-600">
                          Approximate value
                        </div>

                        <div className="mt-3 overflow-x-auto">
                          <MathRenderer>
                            {`\\int_{${result.lower}}^{${result.upper}} ${result.expression}\\,dx`}
                          </MathRenderer>
                        </div>

                        <p className="mt-3 break-all text-4xl font-bold tracking-tight text-[#2448C7]">
                          {formatNumber(result.value, 10)}
                        </p>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                            Interval
                          </div>

                          <div className="mt-2 font-mono text-sm font-semibold text-slate-800">
                            [{formatNumber(result.lower, 6)},{" "}
                            {formatNumber(result.upper, 6)}]
                          </div>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                            Subintervals
                          </div>

                          <div className="mt-2 font-mono text-sm font-semibold text-slate-800">
                            {result.intervals.toLocaleString()}
                          </div>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                            Step size
                          </div>

                          <div className="mt-2 font-mono text-sm font-semibold text-slate-800">
                            {formatNumber(result.stepSize, 8)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
                        <div className="flex gap-3">
                          <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0 text-[#18794E]"
                          />

                          <p className="text-sm leading-6 text-slate-700">
                            The result was calculated using Simpson&apos;s rule
                            with{" "}
                            <strong>{result.intervals.toLocaleString()}</strong>{" "}
                            subintervals.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Mathematical foundation */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">The mathematical idea</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  From rectangles to numerical integration
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  A definite integral can be understood as the limit of sums of
                  small contributions. We divide the interval into smaller
                  pieces and approximate the function over each piece.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  As the width of the pieces becomes smaller, the numerical
                  approximation can approach the exact integral for suitable
                  functions.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <MathRenderer>
                    {
                      "\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x"
                    }
                  </MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <h3 className="text-lg font-bold text-slate-900">
                  Simpson&apos;s rule
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Simpson&apos;s rule improves on simple rectangle
                  approximations by using parabolic approximations over pairs of
                  subintervals.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <MathRenderer>
                    {
                      "S_n=\\frac{h}{3}\\left[f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+\\cdots+2f(x_{n-2})+4f(x_{n-1})+f(x_n)\\right]"
                    }
                  </MathRenderer>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="overflow-x-auto">
                    <MathRenderer>{"h=\\frac{b-a}{n}"}</MathRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worked example */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="max-w-3xl">
                <div className="pml-eyebrow">Worked example</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  Integrating x² from 0 to 3
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Consider the definite integral
                </p>
              </div>

              <div className="mt-7 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="overflow-x-auto">
                  <MathRenderer>{"\\int_0^3x^2\\,dx"}</MathRenderer>
                </div>

                <div className="mt-6 space-y-5">
                  <p className="text-sm leading-7 text-slate-600">
                    The exact antiderivative is:
                  </p>

                  <div className="overflow-x-auto">
                    <MathRenderer>
                      {"\\int x^2\\,dx=\\frac{x^3}{3}"}
                    </MathRenderer>
                  </div>

                  <div className="overflow-x-auto">
                    <MathRenderer>
                      {"\\int_0^3x^2\\,dx=\\left[\\frac{x^3}{3}\\right]_0^3=9"}
                    </MathRenderer>
                  </div>

                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-sm leading-6 text-slate-700">
                      Simpson&apos;s rule should produce a value very close to
                      <strong> 9</strong> for this smooth function. In fact,
                      Simpson&apos;s rule integrates quadratic polynomials
                      exactly when the numerical setup is appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interpretation */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Interpretation</div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                What does the result actually mean?
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                The numerical value of an integral should be interpreted in
                terms of the quantity being accumulated. The units of the
                integral are the units of the function multiplied by the units
                of x.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              <article className="pml-card">
                <div className="text-sm font-semibold text-[#2F5BEA]">Area</div>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Area under a curve
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  When f(x) is nonnegative, the definite integral gives the
                  geometric area between the curve and the x-axis.
                </p>
              </article>

              <article className="pml-card">
                <div className="text-sm font-semibold text-[#2F5BEA]">
                  Accumulation
                </div>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Total change
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Integrals accumulate continuously varying quantities such as
                  velocity, flow rate, density, and production rate.
                </p>
              </article>

              <article className="pml-card">
                <div className="text-sm font-semibold text-[#2F5BEA]">
                  Signed area
                </div>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Positive and negative regions
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Portions of the function below the x-axis contribute
                  negatively to the definite integral.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Accuracy */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <div className="pml-eyebrow">Numerical accuracy</div>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    Why do the number of subintervals matter?
                  </h2>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    Numerical integration replaces a continuous problem with a
                    finite calculation. Increasing the number of subintervals
                    makes each interval smaller, allowing the numerical
                    approximation to follow the curve more closely.
                  </p>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Simpson&apos;s rule generally performs very well for smooth
                    functions, but the approximation can become less reliable
                    when a function has discontinuities, singularities, sharp
                    changes, or insufficient numerical resolution.
                  </p>
                </div>

                <div className="pml-card">
                  <div className="flex items-start gap-4">
                    <Info size={21} className="mt-1 shrink-0 text-[#2F5BEA]" />

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Simpson&apos;s rule error behavior
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        For sufficiently smooth functions, the composite
                        Simpson&apos;s rule has fourth-order accuracy.
                      </p>

                      <div className="mt-5 overflow-x-auto">
                        <MathRenderer>{"\\text{Error}=O(h^4)"}</MathRenderer>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        Here h is the width of each subinterval. This means that
                        reducing h can significantly reduce truncation error
                        when the assumptions of the method are satisfied.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important notes */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex gap-4">
                <Info size={21} className="mt-1 shrink-0 text-[#9A5B00]" />

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Important considerations
                  </h2>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <li>
                      • The result is a numerical approximation unless the
                      underlying mathematics makes the approximation exact.
                    </li>

                    <li>
                      • Simpson&apos;s rule requires an even number of
                      subintervals.
                    </li>

                    <li>
                      • Functions with discontinuities or singularities inside
                      the interval require special care.
                    </li>

                    <li>
                      • Increasing the number of subintervals does not
                      automatically solve every numerical problem.
                    </li>

                    <li>
                      • When an exact antiderivative is available, symbolic
                      integration can provide a more rigorous exact result.
                    </li>

                    <li>
                      • For scientific and engineering work, numerical results
                      should be checked against expected scale, units, and
                      alternative methods when accuracy matters.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fundamental theorem */}
        <section className="pml-section pt-0">
          <div className="pml-container">
            <div className="pml-card">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="pml-eyebrow">
                    Fundamental Theorem of Calculus
                  </div>

                  <h2 className="mt-3 text-2xl font-bold text-slate-900">
                    Integration and differentiation are deeply connected
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    The Fundamental Theorem of Calculus connects accumulation
                    with rates of change. When F is an antiderivative of f, the
                    definite integral can be evaluated from endpoint values.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <MathRenderer>{"\\int_a^b f(x)\\,dx=F(b)-F(a)"}</MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pml-section pt-0">
          <div className="pml-container">
            <div className="rounded-2xl bg-[#17324D] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                  Continue learning
                </div>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Learn why integration works
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Study antiderivatives, definite integrals, Riemann sums, the
                  Fundamental Theorem of Calculus, and applications of
                  integration.
                </p>
              </div>

              <Link
                to="/learn/integrals"
                className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition hover:bg-slate-100 lg:mt-0"
              >
                Learn integration
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
