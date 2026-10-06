import { useMemo, useState } from "react";
import { AlertCircle, FunctionSquare, RefreshCcw } from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import { evaluateExpression } from "../../utils/mathHelpers.js";

export default function FunctionGrapher() {
  const [expression, setExpression] = useState("x^2");
  const [minX, setMinX] = useState(-10);
  const [maxX, setMaxX] = useState(10);
  const [error, setError] = useState("");

  const points = useMemo(() => {
    try {
      setError("");

      const values = [];
      const count = 160;

      for (let i = 0; i <= count; i++) {
        const x = Number(minX) + ((Number(maxX) - Number(minX)) * i) / count;

        const y = evaluateExpression(expression, x);

        if (Number.isFinite(y)) {
          values.push({ x, y });
        }
      }

      return values;
    } catch (err) {
      setError(err.message);
      return [];
    }
  }, [expression, minX, maxX]);

  const graphPoints = useMemo(() => {
    if (!points.length) return "";

    const width = 800;
    const height = 420;

    const ys = points.map((point) => point.y);

    let yMin = Math.min(...ys);
    let yMax = Math.max(...ys);

    if (yMin === yMax) {
      yMin -= 1;
      yMax += 1;
    }

    const padding = (yMax - yMin) * 0.1;

    yMin -= padding;
    yMax += padding;

    return points
      .map((point) => {
        const x =
          ((point.x - Number(minX)) / (Number(maxX) - Number(minX))) * width;

        const y = height - ((point.y - yMin) / (yMax - yMin)) * height;

        return `${x},${y}`;
      })
      .join(" ");
  }, [points, minX, maxX]);

  function reset() {
    setExpression("x^2");
    setMinX(-10);
    setMaxX(10);
    setError("");
  }

  return (
    <>
      <SEO
        title="Function Grapher | Calculus Calculator"
        description="Plot and explore mathematical functions with the Practical Math Lab function grapher."
      />

      <PageHeader
        eyebrow="Calculator"
        title="Function Grapher"
        description="Visualize the behavior of a mathematical function over a selected interval."
      />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <FunctionSquare className="text-primary" />
              <h2 className="text-lg font-bold">Function settings</h2>
            </div>

            <label className="form-control">
              <span className="label-text mb-2 font-medium">f(x)</span>

              <input
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="input input-bordered"
                placeholder="x^2"
              />
            </label>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <label className="form-control">
                <span className="label-text mb-2">Minimum x</span>
                <input
                  type="number"
                  value={minX}
                  onChange={(e) => setMinX(e.target.value)}
                  className="input input-bordered"
                />
              </label>

              <label className="form-control">
                <span className="label-text mb-2">Maximum x</span>
                <input
                  type="number"
                  value={maxX}
                  onChange={(e) => setMaxX(e.target.value)}
                  className="input input-bordered"
                />
              </label>
            </div>

            <button onClick={reset} className="btn btn-outline mt-6 w-full">
              <RefreshCcw size={16} />
              Reset
            </button>

            {error && (
              <div className="alert alert-error mt-5">
                <AlertCircle size={18} />
                <span className="text-sm">{error}</span>
              </div>
            )}
          </section>

          <section className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold">Graph</h2>
              <p className="text-sm text-base-content/60">
                f(x) = {expression || "—"}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-base-200 p-2">
              <svg viewBox="0 0 800 420" className="h-auto w-full">
                <line
                  x1="0"
                  y1="210"
                  x2="800"
                  y2="210"
                  stroke="currentColor"
                  opacity="0.2"
                />

                <line
                  x1="400"
                  y1="0"
                  x2="400"
                  y2="420"
                  stroke="currentColor"
                  opacity="0.2"
                />

                {graphPoints && (
                  <polyline
                    points={graphPoints}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary"
                  />
                )}
              </svg>
            </div>
          </section>
        </div>

        <section className="prose mt-12 max-w-none">
          <h2>Understanding function graphs</h2>
          <p>
            A function graph provides a visual representation of the
            relationship between an input x and an output f(x). In calculus,
            graphs help us understand limits, continuity, derivatives, extrema,
            and integrals.
          </p>
        </section>
      </main>
    </>
  );
}
