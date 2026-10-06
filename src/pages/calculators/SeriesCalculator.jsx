import { useMemo, useState } from "react";
import {
  Link,
  Calculator,
  CheckCircle2,
  Info,
  Sigma,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";
import { formatNumber } from "../../utils/mathHelpers.js";

const MAX_TERMS = 10000;

export default function SeriesCalculator() {
  const [type, setType] = useState("geometric");
  const [firstTerm, setFirstTerm] = useState("1");
  const [ratio, setRatio] = useState("0.5");
  const [terms, setTerms] = useState("10");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const numericTerms = Number(terms);
  const numericFirstTerm = Number(firstTerm);
  const numericRatio = Number(ratio);

  const previewTerms = useMemo(() => {
    if (!Number.isFinite(numericFirstTerm)) return [];

    const count = Math.min(
      Math.max(1, Number.isInteger(numericTerms) ? numericTerms : 10),
      6,
    );

    const values = [];

    for (let k = 0; k < count; k++) {
      if (type === "geometric") {
        values.push(numericFirstTerm * numericRatio ** k);
      } else {
        values.push(numericFirstTerm / (k + 1));
      }
    }

    return values;
  }, [type, numericFirstTerm, numericRatio, numericTerms]);

  function calculate() {
    setError("");
    setResult(null);

    const a = Number(firstTerm);
    const r = Number(ratio);
    const n = Number(terms);

    if (!Number.isFinite(a)) {
      setError("Enter a valid first term.");
      return;
    }

    if (!Number.isFinite(n) || !Number.isInteger(n) || n < 1) {
      setError("Number of terms must be a positive integer.");
      return;
    }

    if (n > MAX_TERMS) {
      setError(`Please use ${MAX_TERMS.toLocaleString()} terms or fewer.`);
      return;
    }

    if (type === "geometric" && !Number.isFinite(r)) {
      setError("Enter a valid common ratio.");
      return;
    }

    let sum = 0;

    for (let k = 0; k < n; k++) {
      if (type === "geometric") {
        sum += a * r ** k;
      } else {
        sum += a / (k + 1);
      }
    }

    if (!Number.isFinite(sum)) {
      setError(
        "The calculation became too large for reliable numerical representation.",
      );
      return;
    }

    setResult({
      sum,
      terms: n,
      firstTerm: a,
      ratio: type === "geometric" ? r : null,
      type,
    });
  }

  const convergence = useMemo(() => {
    if (type === "geometric") {
      if (!Number.isFinite(numericRatio)) {
        return {
          status: "unknown",
          title: "Enter a valid ratio",
          description: "A convergence check requires a numerical common ratio.",
        };
      }

      if (Math.abs(numericRatio) < 1) {
        const infiniteSum = numericFirstTerm / (1 - numericRatio);

        return {
          status: "converges",
          title: "The infinite geometric series converges",
          description:
            "Because the absolute value of the common ratio is less than 1, the terms approach zero and the infinite series approaches a finite sum.",
          infiniteSum,
        };
      }

      return {
        status: "diverges",
        title: "The infinite geometric series diverges",
        description:
          "Because the absolute value of the common ratio is greater than or equal to 1, the terms do not approach zero in the way required for convergence.",
      };
    }

    return {
      status: "diverges",
      title: "The harmonic series diverges",
      description:
        "The harmonic series grows without approaching a finite total, even though its individual terms become smaller.",
    };
  }, [type, numericFirstTerm, numericRatio]);

  return (
    <>
      <SEO
        title="Series Calculator | Partial Sums & Convergence"
        description="Calculate partial sums of geometric and harmonic series, explore convergence, inspect individual terms, and understand how infinite series behave."
        canonical="/calculators/series"
      />

      <PageHeader
        eyebrow="Calculators • Series"
        title="Series Calculator"
        description="Calculate finite partial sums and explore the difference between convergent and divergent infinite series."
      />

      <main>
        {/* Introduction */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="pml-eyebrow">Understand before calculating</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  What does a series calculator actually calculate?
                </h2>

                <div className="pml-prose mt-5 max-w-3xl">
                  <p>
                    A <strong>series</strong> is formed by adding the terms of a
                    sequence. For example, a geometric series might look like 1
                    + 1/2 + 1/4 + 1/8 + ···.
                  </p>

                  <p>
                    A calculator cannot literally add infinitely many terms.
                    Instead, it calculates a <strong>partial sum</strong> by
                    adding a specified finite number of terms.
                  </p>

                  <p>
                    Studying what happens to these partial sums as the number of
                    terms becomes larger helps us determine whether an infinite
                    series converges or diverges.
                  </p>
                </div>
              </div>

              <div className="pml-card h-fit">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <Sigma size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Partial sum
                    </h3>

                    <div className="mt-4 overflow-x-auto">
                      <MathRenderer>
                        {"S_n=a_1+a_2+a_3+\\cdots+a_n"}
                      </MathRenderer>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The partial sum contains only the first <strong>n</strong>{" "}
                      terms of the series.
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
                        Series settings
                      </h2>
                    </div>
                  </div>

                  {/* Series type */}
                  <div className="mt-7">
                    <label
                      htmlFor="series-type"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Series type
                    </label>

                    <select
                      id="series-type"
                      value={type}
                      onChange={(event) => {
                        setType(event.target.value);
                        setResult(null);
                        setError("");
                      }}
                      className="pml-input mt-2 w-full"
                    >
                      <option value="geometric">Geometric series</option>

                      <option value="harmonic">Harmonic series</option>
                    </select>
                  </div>

                  {/* First term */}
                  <div className="mt-5">
                    <label
                      htmlFor="first-term"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      First term
                    </label>

                    <input
                      id="first-term"
                      type="number"
                      step="any"
                      value={firstTerm}
                      onChange={(event) => {
                        setFirstTerm(event.target.value);
                        setResult(null);
                      }}
                      className="pml-input mt-2 w-full"
                      placeholder="Example: 1"
                    />
                  </div>

                  {/* Ratio */}
                  {type === "geometric" && (
                    <div className="mt-5">
                      <label
                        htmlFor="common-ratio"
                        className="block text-sm font-semibold text-slate-800"
                      >
                        Common ratio
                      </label>

                      <input
                        id="common-ratio"
                        type="number"
                        step="any"
                        value={ratio}
                        onChange={(event) => {
                          setRatio(event.target.value);
                          setResult(null);
                        }}
                        className="pml-input mt-2 w-full"
                        placeholder="Example: 0.5"
                      />

                      <div className="mt-3 overflow-x-auto">
                        <MathRenderer>{"a_n=a_1r^{n-1}"}</MathRenderer>
                      </div>
                    </div>
                  )}

                  {/* Terms */}
                  <div className="mt-5">
                    <label
                      htmlFor="number-of-terms"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Number of terms
                    </label>

                    <input
                      id="number-of-terms"
                      type="number"
                      min="1"
                      max={MAX_TERMS}
                      step="1"
                      value={terms}
                      onChange={(event) => {
                        setTerms(event.target.value);
                        setResult(null);
                      }}
                      className="pml-input mt-2 w-full"
                      placeholder="Example: 10"
                    />

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Use an integer between 1 and {MAX_TERMS.toLocaleString()}.
                    </p>
                  </div>

                  {error && (
                    <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={calculate}
                    className="pml-btn-primary mt-6 flex w-full items-center justify-center gap-2"
                  >
                    <Calculator size={18} />
                    Calculate Partial Sum
                  </button>
                </section>

                {/* Result */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Calculation result
                  </div>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Partial sum
                  </h2>

                  {result === null ? (
                    <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                      <Sigma size={30} className="mx-auto text-slate-400" />

                      <p className="mt-4 font-semibold text-slate-700">
                        Your result will appear here
                      </p>

                      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Choose a series, enter its parameters, and calculate the
                        partial sum.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="mt-6 rounded-xl border border-[#D9E4FF] bg-[#EEF3FF] p-7">
                        <div className="text-sm font-medium text-slate-600">
                          Sum of the first {result.terms.toLocaleString()} terms
                        </div>

                        <div className="mt-3 overflow-x-auto">
                          <MathRenderer>
                            {result.type === "geometric"
                              ? `S_{${result.terms}}`
                              : `S_{${result.terms}}`}
                          </MathRenderer>
                        </div>

                        <p className="mt-2 break-all text-3xl font-bold tracking-tight text-[#2448C7]">
                          {formatNumber(result.sum, 10)}
                        </p>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                          First terms
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {previewTerms.map((value, index) => (
                            <span
                              key={index}
                              className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-sm text-slate-700"
                            >
                              {formatNumber(value, 6)}
                            </span>
                          ))}

                          {result.terms > 6 && (
                            <span className="rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-500">
                              …
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Formula */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">The mathematics</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {type === "geometric"
                    ? "Geometric series"
                    : "Harmonic series"}
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {type === "geometric"
                    ? "A geometric series is formed when each term is obtained by multiplying the previous term by the same constant ratio."
                    : "The harmonic series is formed by adding the reciprocals of the positive integers."}
                </p>
              </div>

              <div className="pml-card">
                {type === "geometric" ? (
                  <>
                    <div className="text-sm font-semibold text-slate-500">
                      Partial sum
                    </div>

                    <div className="mt-4 overflow-x-auto">
                      <MathRenderer>
                        {"S_n=a\\frac{1-r^n}{1-r},\\qquad r\\neq1"}
                      </MathRenderer>
                    </div>

                    <div className="mt-6 text-sm font-semibold text-slate-500">
                      Infinite sum
                    </div>

                    <div className="mt-4 overflow-x-auto">
                      <MathRenderer>
                        {
                          "\\sum_{k=0}^{\\infty}ar^k=\\frac{a}{1-r},\\qquad |r|<1"
                        }
                      </MathRenderer>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm font-semibold text-slate-500">
                      Harmonic series
                    </div>

                    <div className="mt-4 overflow-x-auto">
                      <MathRenderer>
                        {
                          "\\sum_{k=1}^{\\infty}\\frac{1}{k}=1+\\frac12+\\frac13+\\frac14+\\cdots"
                        }
                      </MathRenderer>
                    </div>

                    <div className="mt-5 rounded-lg bg-amber-50 p-4 text-sm leading-6 text-slate-700">
                      The harmonic series diverges even though its individual
                      terms approach zero.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Convergence */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="max-w-3xl">
                <div className="pml-eyebrow">Convergence</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  Does the infinite series have a finite sum?
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  A partial sum is always finite when only a finite number of
                  terms are included. An infinite series is different: we ask
                  whether its partial sums approach a specific finite value as
                  the number of terms becomes arbitrarily large.
                </p>
              </div>

              <div
                className={`mt-8 rounded-xl border p-6 ${
                  convergence.status === "converges"
                    ? "border-green-200 bg-green-50"
                    : "border-amber-200 bg-amber-50"
                }`}
              >
                <div className="flex gap-4">
                  {convergence.status === "converges" ? (
                    <TrendingDown
                      size={22}
                      className="mt-1 shrink-0 text-[#18794E]"
                    />
                  ) : (
                    <TrendingUp
                      size={22}
                      className="mt-1 shrink-0 text-[#9A5B00]"
                    />
                  )}

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {convergence.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {convergence.description}
                    </p>

                    {convergence.infiniteSum !== undefined && (
                      <div className="mt-4 overflow-x-auto">
                        <MathRenderer>
                          {`S=\\frac{${numericFirstTerm}}{1-${numericRatio}}=${formatNumber(
                            convergence.infiniteSum,
                            8,
                          )}`}
                        </MathRenderer>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important distinction */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="pml-card">
                <div className="flex items-center gap-3">
                  <Info size={20} className="text-[#2F5BEA]" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Partial sum
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A partial sum contains a finite number of terms. For example,
                  the tenth partial sum contains exactly ten terms.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <MathRenderer>{"S_n=\\sum_{k=1}^{n}a_k"}</MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#18794E]" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Infinite series
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  An infinite series is studied by examining the limiting
                  behavior of its partial sums as the number of terms grows
                  without bound.
                </p>

                <div className="mt-4 overflow-x-auto">
                  <MathRenderer>
                    {"\\sum_{k=1}^{\\infty}a_k=\\lim_{n\\to\\infty}S_n"}
                  </MathRenderer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related learning */}
        <section className="pml-section pt-0">
          <div className="pml-container">
            <div className="rounded-2xl bg-[#17324D] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                  Continue learning
                </div>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Learn more about sequences and series
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Explore convergence tests, power series, Taylor series,
                  Maclaurin series, and the mathematical ideas behind infinite
                  sums.
                </p>
              </div>

              <Link
                to="/learn/series"
                className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition hover:bg-slate-100 lg:mt-0"
              >
                Study sequences & series
                <Sigma size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
