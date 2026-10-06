import { useState } from "react";
import { Calculator, Sigma } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import { formatNumber } from "../../utils/mathHelpers.js";

export default function SeriesCalculator() {
  const [type, setType] = useState("geometric");
  const [firstTerm, setFirstTerm] = useState("1");
  const [ratio, setRatio] = useState("0.5");
  const [terms, setTerms] = useState("10");
  const [result, setResult] = useState(null);

  function calculate() {
    const a = Number(firstTerm);
    const r = Number(ratio);
    const n = Math.max(1, Number(terms));

    let sum = 0;

    for (let k = 0; k < n; k++) {
      if (type === "geometric") {
        sum += a * r ** k;
      } else {
        sum += a / (k + 1);
      }
    }

    setResult(sum);
  }

  return (
    <>
      <SEO
        title="Series Calculator | Partial Sums"
        description="Calculate partial sums of geometric and harmonic-style series."
      />

      <PageHeader
        eyebrow="Calculator"
        title="Series Calculator"
        description="Explore partial sums and observe how a sequence of terms contributes to a series."
      />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Sigma className="text-primary" />
              <h2 className="text-xl font-bold">Series settings</h2>
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="select select-bordered mt-6 w-full"
            >
              <option value="geometric">Geometric series</option>
              <option value="harmonic">Harmonic-style series</option>
            </select>

            <label className="form-control mt-5">
              <span className="label-text mb-2">First term</span>

              <input
                type="number"
                value={firstTerm}
                onChange={(e) => setFirstTerm(e.target.value)}
                className="input input-bordered"
              />
            </label>

            {type === "geometric" && (
              <label className="form-control mt-5">
                <span className="label-text mb-2">Common ratio</span>

                <input
                  type="number"
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value)}
                  className="input input-bordered"
                />
              </label>
            )}

            <label className="form-control mt-5">
              <span className="label-text mb-2">Number of terms</span>

              <input
                type="number"
                min="1"
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                className="input input-bordered"
              />
            </label>

            <button onClick={calculate} className="btn btn-primary mt-6 w-full">
              <Calculator size={18} />
              Calculate Partial Sum
            </button>
          </section>

          <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <p className="text-sm text-base-content/60">Partial sum</p>

            {result === null ? (
              <div className="mt-6 rounded-2xl bg-base-200 p-8 text-center text-base-content/60">
                Configure the series and calculate.
              </div>
            ) : (
              <div className="mt-6 rounded-3xl bg-primary/10 p-8">
                <p className="text-4xl font-black text-primary">
                  {formatNumber(result)}
                </p>
              </div>
            )}

            <div className="mt-6 rounded-2xl bg-base-200 p-5 text-sm leading-7">
              A partial sum adds only the first finite number of terms. Infinite
              series are studied by examining what happens as the number of
              terms approaches infinity.
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
