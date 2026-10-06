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

import {
  evaluateExpression,
  numericalDerivative,
  numericalSecondDerivative,
  formatNumber,
} from "../../utils/mathHelpers.js";

const EXAMPLES = [
  {
    label: "Polynomial",
    expression: "x^3 - 4x + 2",
    x: "2",
    h: "0.000001",
  },
  {
    label: "Quadratic",
    expression: "x^2",
    x: "3",
    h: "0.000001",
  },
  {
    label: "Sine",
    expression: "sin(x)",
    x: "0",
    h: "0.000001",
  },
  {
    label: "Exponential",
    expression: "e^x",
    x: "1",
    h: "0.000001",
  },
];

export default function DerivativeCalculator() {
  const [expression, setExpression] = useState(
    "x^3 - 4x + 2",
  );

  const [x, setX] = useState("2");
  const [h, setH] = useState("0.000001");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateDerivative() {
    setError("");
    setResult(null);

    try {
      if (!expression.trim()) {
        throw new Error("Enter a function.");
      }

      const point = Number(x);
      const step = Number(h);

      if (!Number.isFinite(point)) {
        throw new Error("Enter a valid x-value.");
      }

      if (!Number.isFinite(step) || step <= 0) {
        throw new Error(
          "Step size must be greater than zero.",
        );
      }

      const fn = (value) =>
        evaluateExpression(expression, value);

      const functionValue = fn(point);

      const firstDerivative = numericalDerivative(
        fn,
        point,
        step,
      );

      const secondStep = Math.max(
        step * 10,
        0.0001,
      );

      const secondDerivative =
        numericalSecondDerivative(
          fn,
          point,
          secondStep,
        );

      setResult({
        functionValue,
        firstDerivative,
        secondDerivative,
        secondStep,
      });
    } catch (err) {
      setError(
        err?.message ||
          "Unable to calculate the derivative.",
      );
    }
  }

  function reset() {
    setExpression("x^3 - 4x + 2");
    setX("2");
    setH("0.000001");
    setResult(null);
    setError("");
  }

  function loadExample(example) {
    setExpression(example.expression);
    setX(example.x);
    setH(example.h);
    setResult(null);
    setError("");
  }

  return (
    <>
      <SEO
        title="Derivative Calculator | Numerical Derivative"
        description="Calculate first and second derivatives numerically using central differences. Enter functions such as 2x, x², sin(x), e^x, and more."
        canonical="/calculators/derivative"
      />

      <PageHeader
        eyebrow="Calculators"
        title="Derivative Calculator"
        description="Estimate the first and second derivative of a function at a chosen point using numerical differentiation."
      />

      <section className="pml-section">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* ---------------------------------------------------------------- */}
            {/* Calculator                                                        */}
            {/* ---------------------------------------------------------------- */}

            <div className="pml-card">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Calculator size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#17202A]">
                      Calculate a derivative
                    </h2>

                    <p className="mt-1 text-sm text-[#687481]">
                      Use central finite differences to
                      estimate the rate of change.
                    </p>
                  </div>
                </div>

                <div className="my-7 border-t border-[#E9E9E6]" />

                {/* Function */}

                <div>
                  <label
                    htmlFor="derivative-expression"
                    className="mb-2 block text-sm font-semibold text-[#17202A]"
                  >
                    Function f(x)
                  </label>

                  <input
                    id="derivative-expression"
                    type="text"
                    value={expression}
                    onChange={(e) =>
                      setExpression(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        calculateDerivative();
                      }
                    }}
                    placeholder="Example: 2x + 3"
                    className="pml-input font-mono"
                    spellCheck="false"
                    autoComplete="off"
                  />

                  <p className="mt-2 text-xs leading-5 text-[#687481]">
                    You can use normal mathematical notation:
                    {" "}
                    <code>2x</code>,{" "}
                    <code>x^2</code>,{" "}
                    <code>3x^2 - 4x + 1</code>,{" "}
                    <code>sin(x)</code>,{" "}
                    <code>sqrt(x)</code>,{" "}
                    <code>ln(x)</code>,{" "}
                    <code>e^x</code>.
                  </p>
                </div>

                {/* x and h */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="derivative-x"
                      className="mb-2 block text-sm font-semibold text-[#17202A]"
                    >
                      Evaluation point x
                    </label>

                    <input
                      id="derivative-x"
                      type="number"
                      step="any"
                      value={x}
                      onChange={(e) =>
                        setX(e.target.value)
                      }
                      className="pml-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="derivative-h"
                      className="mb-2 block text-sm font-semibold text-[#17202A]"
                    >
                      Step size h
                    </label>

                    <input
                      id="derivative-h"
                      type="number"
                      step="any"
                      min="0"
                      value={h}
                      onChange={(e) =>
                        setH(e.target.value)
                      }
                      className="pml-input"
                    />
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
                        onClick={() =>
                          loadExample(example)
                        }
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
                    <Info
                      size={19}
                      className="mt-0.5 shrink-0"
                    />

                    <span>{error}</span>
                  </div>
                )}

                {/* Buttons */}

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={calculateDerivative}
                    className="pml-btn-primary"
                  >
                    Calculate derivative
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
                        className="text-[#18794E]"
                      />

                      <h3 className="text-lg font-bold text-[#17202A]">
                        Numerical result
                      </h3>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                          Function value
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#17202A]">
                          {formatNumber(
                            result.functionValue,
                          )}
                        </p>

                        <p className="mt-1 text-xs text-[#687481]">
                          f({x})
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#BFCBFF] bg-[#EEF3FF] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#2448C7]">
                          First derivative
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#17324D]">
                          {formatNumber(
                            result.firstDerivative,
                          )}
                        </p>

                        <p className="mt-1 text-xs text-[#2448C7]">
                          f′({x})
                        </p>
                      </div>

                      <div className="rounded-lg border border-[#DEDEDB] bg-[#F8F7F4] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                          Second derivative
                        </p>

                        <p className="mt-2 text-xl font-bold text-[#17202A]">
                          {formatNumber(
                            result.secondDerivative,
                          )}
                        </p>

                        <p className="mt-1 text-xs text-[#687481]">
                          f″({x})
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-lg border border-[#DEDEDB] bg-white p-5">
                      <p className="text-sm text-[#34404C]">
                        The calculation used a central
                        difference with{" "}
                        <strong>h = {h}</strong>. The
                        second derivative used{" "}
                        <strong>
                          h ={" "}
                          {result.secondStep}
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Explanation                                                      */}
            {/* ---------------------------------------------------------------- */}

            <div className="space-y-6">
              <article className="pml-card p-6 sm:p-7">
                <p className="pml-eyebrow">
                  Core idea
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  What is a derivative?
                </h2>

                <p className="mt-4 leading-7 text-[#34404C]">
                  A derivative measures how rapidly a
                  function changes as its input changes.
                  Geometrically, it is the slope of the
                  tangent line to the graph at a particular
                  point.
                </p>

                <div className="pml-formula mt-6">
                  <MathRenderer>
                    {"f'(x) \\approx \\frac{f(x+h)-f(x-h)}{2h}"}
                  </MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#687481]">
                  The calculator estimates the derivative
                  by evaluating the function slightly to
                  the left and right of the chosen point.
                </p>
              </article>

              <article className="pml-card p-6 sm:p-7">
                <p className="pml-eyebrow">
                  Applications
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                  Why derivatives matter
                </h2>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#34404C]">
                  <li>
                    <strong>Slopes:</strong> determine the
                    slope of a curve at a point.
                  </li>

                  <li>
                    <strong>Motion:</strong> connect
                    position, velocity, and acceleration.
                  </li>

                  <li>
                    <strong>Optimization:</strong> locate
                    potential maxima and minima.
                  </li>

                  <li>
                    <strong>Modeling:</strong> describe
                    rates of change in physical and
                    scientific systems.
                  </li>

                  <li>
                    <strong>Numerical computing:</strong>{" "}
                    approximate derivatives when an
                    analytical formula is inconvenient.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Educational content                                                */}
          {/* ------------------------------------------------------------------ */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">
                Numerical method
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Understanding the step size
              </h2>

              <p className="mt-4 leading-7 text-[#34404C]">
                The step size <strong>h</strong> determines
                how far the calculator moves from the
                evaluation point when sampling the
                function.
              </p>

              <p className="mt-4 leading-7 text-[#34404C]">
                For the central difference formula, the
                approximation has a truncation error of
                order <strong>O(h²)</strong>. This means
                that, for sufficiently smooth functions,
                decreasing h can improve the approximation.
              </p>

              <div className="pml-formula mt-6">
                <MathRenderer>
                  {"f'(x) \\approx \\frac{f(x+h)-f(x-h)}{2h}"}
                </MathRenderer>
              </div>

              <div className="pml-warning mt-6">
                <strong>Important:</strong> making h
                extremely small is not always better.
                Floating-point rounding and cancellation
                can eventually reduce numerical accuracy.
              </div>
            </article>

            <article className="pml-card p-6 sm:p-8">
              <p className="pml-eyebrow">
                Worked example
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
                Example: a cubic function
              </h2>

              <div className="pml-formula mt-5">
                <MathRenderer>
                  {"f(x)=x^3-4x+2"}
                </MathRenderer>
              </div>

              <p className="mt-4 leading-7 text-[#34404C]">
                Differentiating analytically gives:
              </p>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {"f'(x)=3x^2-4"}
                </MathRenderer>
              </div>

              <p className="mt-4 leading-7 text-[#34404C]">
                At <strong>x = 2</strong>:
              </p>

              <div className="pml-formula mt-4">
                <MathRenderer>
                  {"f'(2)=3(2)^2-4=8"}
                </MathRenderer>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#687481]">
                The numerical calculation should produce a
                value very close to 8, with the small
                difference caused by numerical
                approximation and floating-point arithmetic.
              </p>
            </article>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* Formula explanation                                                */}
          {/* ------------------------------------------------------------------ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">
              Numerical differentiation
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              How the central difference works
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-[#34404C]">
              Instead of trying to determine the tangent
              line directly, numerical differentiation
              estimates its slope using two nearby points.
              The function is evaluated at{" "}
              <strong>x − h</strong> and{" "}
              <strong>x + h</strong>, and the resulting
              change in function value is divided by the
              distance between those points.
            </p>

            <div className="pml-formula mt-6">
              <MathRenderer>
                {"f'(x) \\approx \\frac{f(x+h)-f(x-h)}{2h}"}
              </MathRenderer>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-bold text-[#17202A]">
                  Smooth functions
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Numerical differentiation works best
                  when the function behaves smoothly near
                  the point being studied.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">
                  Small h
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  A smaller step can reduce truncation
                  error, but excessively small values may
                  amplify floating-point errors.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#17202A]">
                  Interpretation
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  A positive derivative indicates local
                  increase, while a negative derivative
                  indicates local decrease.
                </p>
              </div>
            </div>
          </article>

          {/* ------------------------------------------------------------------ */}
          {/* Supported notation                                                 */}
          {/* ------------------------------------------------------------------ */}

          <article className="pml-card mt-6 p-6 sm:p-8">
            <p className="pml-eyebrow">
              Input guide
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#17202A]">
              Mathematical notation you can enter
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-[#34404C]">
              The calculator uses a mathematical expression
              parser, so you do not need to write every
              multiplication sign explicitly.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="pml-table">
                <thead>
                  <tr>
                    <th>Input</th>
                    <th>Meaning</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <code>2x</code>
                    </td>
                    <td>2 × x</td>
                  </tr>

                  <tr>
                    <td>
                      <code>3x^2</code>
                    </td>
                    <td>3 × x²</td>
                  </tr>

                  <tr>
                    <td>
                      <code>x(x+1)</code>
                    </td>
                    <td>x × (x + 1)</td>
                  </tr>

                  <tr>
                    <td>
                      <code>2(x+1)</code>
                    </td>
                    <td>2 × (x + 1)</td>
                  </tr>

                  <tr>
                    <td>
                      <code>sin(x)</code>
                    </td>
                    <td>Sine of x</td>
                  </tr>

                  <tr>
                    <td>
                      <code>sqrt(x)</code>
                    </td>
                    <td>Square root of x</td>
                  </tr>

                  <tr>
                    <td>
                      <code>ln(x)</code>
                    </td>
                    <td>Natural logarithm of x</td>
                  </tr>

                  <tr>
                    <td>
                      <code>e^x</code>
                    </td>
                    <td>Natural exponential function</td>
                  </tr>

                  <tr>
                    <td>
                      <code>pi*x</code>
                    </td>
                    <td>π × x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}