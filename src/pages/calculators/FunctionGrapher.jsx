import { useMemo, useState } from "react";
import {
  AlertCircle,
  BarChart3,
  CheckCircle2,
  FunctionSquare,
  Info,
  RefreshCcw,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";
import { evaluateExpression, formatNumber } from "../../utils/mathHelpers.js";

const GRAPH_WIDTH = 900;
const GRAPH_HEIGHT = 500;
const SAMPLE_COUNT = 320;

function niceStep(range, targetTicks = 8) {
  if (!Number.isFinite(range) || range <= 0) return 1;

  const rough = range / targetTicks;
  const power = 10 ** Math.floor(Math.log10(rough));
  const normalized = rough / power;

  let nice;

  if (normalized <= 1) nice = 1;
  else if (normalized <= 2) nice = 2;
  else if (normalized <= 5) nice = 5;
  else nice = 10;

  return nice * power;
}

function createTicks(min, max, targetTicks = 8) {
  const step = niceStep(max - min, targetTicks);

  const first = Math.ceil(min / step) * step;
  const ticks = [];

  for (let value = first; value <= max + step * 0.001; value += step) {
    ticks.push(Number(value.toFixed(12)));
  }

  return ticks;
}

export default function FunctionGrapher() {
  const [expression, setExpression] = useState("x^2");
  const [minX, setMinX] = useState("-10");
  const [maxX, setMaxX] = useState("10");
  const [error, setError] = useState("");

  const numericMinX = Number(minX);
  const numericMaxX = Number(maxX);

  const validationError = useMemo(() => {
    if (!expression.trim()) {
      return "Enter a function to graph.";
    }

    if (!Number.isFinite(numericMinX) || !Number.isFinite(numericMaxX)) {
      return "Enter valid minimum and maximum x-values.";
    }

    if (numericMinX >= numericMaxX) {
      return "Minimum x must be smaller than maximum x.";
    }

    if (numericMaxX - numericMinX > 100000) {
      return "Please choose a smaller x-interval for a readable graph.";
    }

    return "";
  }, [expression, numericMinX, numericMaxX]);

  const points = useMemo(() => {
    if (validationError) return [];

    try {
      const values = [];
      const range = numericMaxX - numericMinX;

      for (let i = 0; i <= SAMPLE_COUNT; i++) {
        const x = numericMinX + (range * i) / SAMPLE_COUNT;

        const y = evaluateExpression(expression, x);

        if (Number.isFinite(y)) {
          values.push({ x, y });
        } else {
          values.push({ x, y: null });
        }
      }

      return values;
    } catch {
      return [];
    }
  }, [expression, numericMinX, numericMaxX, validationError]);

  const graphData = useMemo(() => {
    if (!points.length) {
      return null;
    }

    const finitePoints = points.filter(
      (point) => point.y !== null && Number.isFinite(point.y),
    );

    if (!finitePoints.length) {
      return null;
    }

    let yMin = Math.min(...finitePoints.map((point) => point.y));

    let yMax = Math.max(...finitePoints.map((point) => point.y));

    if (yMin === yMax) {
      yMin -= 1;
      yMax += 1;
    }

    /*
     * Prevent one extremely large value from making the rest
     * of the graph unreadable. This is especially useful for
     * functions near vertical asymptotes.
     */
    const sortedY = [...finitePoints.map((p) => p.y)].sort((a, b) => a - b);

    const lowerIndex = Math.floor(sortedY.length * 0.02);
    const upperIndex = Math.floor(sortedY.length * 0.98);

    const percentileMin = sortedY[lowerIndex];
    const percentileMax = sortedY[Math.min(upperIndex, sortedY.length - 1)];

    if (
      Number.isFinite(percentileMin) &&
      Number.isFinite(percentileMax) &&
      percentileMax > percentileMin &&
      Math.abs(yMax - yMin) > Math.abs(percentileMax - percentileMin) * 8
    ) {
      yMin = percentileMin;
      yMax = percentileMax;
    }

    const yRange = yMax - yMin;
    const padding = yRange * 0.1;

    yMin -= padding;
    yMax += padding;

    const xTicks = createTicks(numericMinX, numericMaxX, 8);

    const yTicks = createTicks(yMin, yMax, 7);

    function xToSvg(x) {
      return ((x - numericMinX) / (numericMaxX - numericMinX)) * GRAPH_WIDTH;
    }

    function yToSvg(y) {
      return GRAPH_HEIGHT - ((y - yMin) / (yMax - yMin)) * GRAPH_HEIGHT;
    }

    const segments = [];
    let currentSegment = [];

    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      if (
        point.y === null ||
        !Number.isFinite(point.y) ||
        point.y < yMin - yRange * 2 ||
        point.y > yMax + yRange * 2
      ) {
        if (currentSegment.length > 1) {
          segments.push(currentSegment);
        }

        currentSegment = [];
        continue;
      }

      currentSegment.push(`${xToSvg(point.x)},${yToSvg(point.y)}`);
    }

    if (currentSegment.length > 1) {
      segments.push(currentSegment);
    }

    return {
      yMin,
      yMax,
      xTicks,
      yTicks,
      xToSvg,
      yToSvg,
      segments,
    };
  }, [points, numericMinX, numericMaxX]);

  const statistics = useMemo(() => {
    const finitePoints = points.filter(
      (point) => point.y !== null && Number.isFinite(point.y),
    );

    if (!finitePoints.length) {
      return null;
    }

    const values = finitePoints.map((point) => point.y);

    const minimum = Math.min(...values);
    const maximum = Math.max(...values);

    const minPoint = finitePoints.find((point) => point.y === minimum);

    const maxPoint = finitePoints.find((point) => point.y === maximum);

    return {
      minimum,
      maximum,
      minX: minPoint?.x,
      maxX: maxPoint?.x,
      samples: finitePoints.length,
    };
  }, [points]);

  function reset() {
    setExpression("x^2");
    setMinX("-10");
    setMaxX("10");
    setError("");
  }

  function applyExample(value) {
    setExpression(value);
    setError("");
  }

  const displayError = error || validationError;

  return (
    <>
      <SEO
        title="Function Grapher | Plot Mathematical Functions"
        description="Explore mathematical functions visually with an interactive function grapher. Plot functions, study domain behavior, identify extrema, and understand graphs used in calculus."
        canonical="/calculators/function"
      />

      <PageHeader
        eyebrow="Calculators • Functions"
        title="Function Grapher"
        description="Plot a mathematical function over a selected interval and explore how its values change as x changes."
      />

      <main>
        {/* Introduction */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="pml-eyebrow">Understand before graphing</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  What does a function graph tell us?
                </h2>

                <div className="pml-prose mt-5 max-w-3xl">
                  <p>
                    A function describes a relationship between an input and an
                    output. For a function written as <strong>f(x)</strong>,
                    each allowed value of x is associated with an output f(x).
                  </p>

                  <p>
                    A graph turns that relationship into a visual picture. Each
                    point on the curve represents a coordinate{" "}
                    <strong>(x, f(x))</strong>.
                  </p>

                  <p>
                    In calculus, graphs help us study limits, continuity,
                    derivatives, extrema, concavity, and areas under curves. A
                    graph is therefore more than a picture—it is a way of
                    interpreting mathematical behavior.
                  </p>
                </div>
              </div>

              <div className="pml-card h-fit">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <FunctionSquare size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Function notation
                    </h3>

                    <div className="mt-4 overflow-x-auto">
                      <MathRenderer>{"y=f(x)"}</MathRenderer>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The input is x, while f(x) represents the corresponding
                      output or y-value.
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
              <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                {/* Controls */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                      <FunctionSquare size={20} />
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2F5BEA]">
                        Calculator
                      </div>

                      <h2 className="mt-1 text-xl font-bold text-slate-900">
                        Function settings
                      </h2>
                    </div>
                  </div>

                  {/* Function */}
                  <div className="mt-7">
                    <label
                      htmlFor="function-expression"
                      className="block text-sm font-semibold text-slate-800"
                    >
                      Function f(x)
                    </label>

                    <input
                      id="function-expression"
                      type="text"
                      value={expression}
                      onChange={(event) => {
                        setExpression(event.target.value);
                        setError("");
                      }}
                      className="pml-input mt-2 w-full font-mono"
                      placeholder="x^2"
                    />

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Examples: <code className="font-mono">x^2</code>,{" "}
                      <code className="font-mono">sin(x)</code>,{" "}
                      <code className="font-mono">x^3 - 4*x</code>
                    </p>
                  </div>

                  {/* Interval */}
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-3">
                      <label>
                        <span className="block text-sm font-semibold text-slate-800">
                          Minimum x
                        </span>

                        <input
                          type="number"
                          step="any"
                          value={minX}
                          onChange={(event) => {
                            setMinX(event.target.value);
                            setError("");
                          }}
                          className="pml-input mt-2 w-full"
                        />
                      </label>

                      <label>
                        <span className="block text-sm font-semibold text-slate-800">
                          Maximum x
                        </span>

                        <input
                          type="number"
                          step="any"
                          value={maxX}
                          onChange={(event) => {
                            setMaxX(event.target.value);
                            setError("");
                          }}
                          className="pml-input mt-2 w-full"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                      Try an example
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {["x^2", "x^3 - 4*x", "sin(x)", "cos(x)", "1/x"].map(
                        (example) => (
                          <button
                            key={example}
                            type="button"
                            onClick={() => applyExample(example)}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 transition hover:border-[#B9CAFF] hover:bg-[#F7F9FF]"
                          >
                            {example}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={reset}
                    className="pml-btn-secondary mt-6 flex w-full items-center justify-center gap-2"
                  >
                    <RefreshCcw size={16} />
                    Reset
                  </button>

                  {displayError && (
                    <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="flex gap-3">
                        <AlertCircle
                          size={18}
                          className="mt-0.5 shrink-0 text-red-600"
                        />

                        <p className="text-sm leading-6 text-red-700">
                          {displayError}
                        </p>
                      </div>
                    </div>
                  )}
                </section>

                {/* Graph */}
                <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Graph
                      </div>

                      <h2 className="mt-1 text-xl font-bold text-slate-900">
                        Visual representation
                      </h2>

                      <p className="mt-1 break-all font-mono text-sm text-slate-600">
                        f(x) = {expression || "—"}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2F5BEA]" />
                      Function
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#FAFAF8]">
                    {graphData ? (
                      <svg
                        viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
                        className="h-auto w-full"
                        role="img"
                        aria-label={`Graph of f(x) = ${expression}`}
                      >
                        {/* Grid */}
                        {graphData.xTicks.map((tick) => {
                          const x = graphData.xToSvg(tick);

                          return (
                            <g key={`x-${tick}`}>
                              <line
                                x1={x}
                                y1="0"
                                x2={x}
                                y2={GRAPH_HEIGHT}
                                stroke="#DEDEDB"
                                strokeWidth="1"
                              />

                              <text
                                x={x}
                                y={GRAPH_HEIGHT - 10}
                                textAnchor="middle"
                                fontSize="12"
                                fill="#687481"
                              >
                                {formatNumber(tick, 4)}
                              </text>
                            </g>
                          );
                        })}

                        {graphData.yTicks.map((tick) => {
                          const y = graphData.yToSvg(tick);

                          return (
                            <g key={`y-${tick}`}>
                              <line
                                x1="0"
                                y1={y}
                                x2={GRAPH_WIDTH}
                                y2={y}
                                stroke="#DEDEDB"
                                strokeWidth="1"
                              />

                              <text
                                x="8"
                                y={y - 6}
                                fontSize="12"
                                fill="#687481"
                              >
                                {formatNumber(tick, 4)}
                              </text>
                            </g>
                          );
                        })}

                        {/* X axis */}
                        {numericMinX <= 0 && numericMaxX >= 0 && (
                          <line
                            x1={graphData.xToSvg(0)}
                            y1="0"
                            x2={graphData.xToSvg(0)}
                            y2={GRAPH_HEIGHT}
                            stroke="#17202A"
                            strokeWidth="1.5"
                            opacity="0.7"
                          />
                        )}

                        {/* Y axis */}
                        {graphData.yMin <= 0 && graphData.yMax >= 0 && (
                          <line
                            x1="0"
                            y1={graphData.yToSvg(0)}
                            x2={GRAPH_WIDTH}
                            y2={graphData.yToSvg(0)}
                            stroke="#17202A"
                            strokeWidth="1.5"
                            opacity="0.7"
                          />
                        )}

                        {/* Function */}
                        {graphData.segments.map((segment, index) => (
                          <polyline
                            key={index}
                            points={segment.join(" ")}
                            fill="none"
                            stroke="#2F5BEA"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ))}
                      </svg>
                    ) : (
                      <div className="flex min-h-[360px] items-center justify-center p-8 text-center">
                        <div>
                          <AlertCircle
                            size={30}
                            className="mx-auto text-slate-400"
                          />

                          <p className="mt-4 font-semibold text-slate-700">
                            Unable to draw the graph
                          </p>

                          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                            Check the function and the selected x-interval, then
                            try again.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {graphData && (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                      <span>
                        x-range:{" "}
                        <strong className="text-slate-700">
                          {formatNumber(numericMinX, 4)} to{" "}
                          {formatNumber(numericMaxX, 4)}
                        </strong>
                      </span>

                      <span>
                        y-range:{" "}
                        <strong className="text-slate-700">
                          {formatNumber(graphData.yMin, 4)} to{" "}
                          {formatNumber(graphData.yMax, 4)}
                        </strong>
                      </span>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        {statistics && (
          <section className="pml-section">
            <div className="pml-container">
              <div className="mb-8">
                <div className="pml-eyebrow">Graph summary</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  What the sampled graph shows
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  The graph is created by evaluating the function at many points
                  throughout the selected interval. These numerical samples are
                  then connected to approximate the curve.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="pml-card">
                  <BarChart3 size={21} className="text-[#2F5BEA]" />

                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                    Sample points
                  </div>

                  <div className="mt-2 text-2xl font-bold text-slate-900">
                    {statistics.samples}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Finite function values used to construct the displayed
                    curve.
                  </p>
                </div>

                <div className="pml-card">
                  <CheckCircle2 size={21} className="text-[#18794E]" />

                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                    Sampled minimum
                  </div>

                  <div className="mt-2 text-2xl font-bold text-slate-900">
                    {formatNumber(statistics.minimum, 6)}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Occurs near x = {formatNumber(statistics.minX, 5)}.
                  </p>
                </div>

                <div className="pml-card">
                  <CheckCircle2 size={21} className="text-[#18794E]" />

                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                    Sampled maximum
                  </div>

                  <div className="mt-2 text-2xl font-bold text-slate-900">
                    {formatNumber(statistics.maximum, 6)}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Occurs near x = {formatNumber(statistics.maxX, 5)}.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Reading a graph */}
        <section className="border-y border-slate-200 bg-white">
          <div className="pml-section">
            <div className="pml-container">
              <div className="max-w-3xl">
                <div className="pml-eyebrow">Learn to read the graph</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Four questions to ask when studying a function
                </h2>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <article className="pml-card">
                  <div className="text-sm font-semibold text-[#2F5BEA]">01</div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    Where is the function defined?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The domain tells us which x-values are allowed. For example,
                    a function containing 1/x is not defined at x = 0.
                  </p>
                </article>

                <article className="pml-card">
                  <div className="text-sm font-semibold text-[#2F5BEA]">02</div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    Where does the graph increase or decrease?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Increasing and decreasing behavior describes whether
                    function values rise or fall as x moves from left to right.
                  </p>
                </article>

                <article className="pml-card">
                  <div className="text-sm font-semibold text-[#2F5BEA]">03</div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    Are there turning points?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Local maxima and minima are important features. In
                    differential calculus, derivatives help identify and
                    classify these critical points.
                  </p>
                </article>

                <article className="pml-card">
                  <div className="text-sm font-semibold text-[#2F5BEA]">04</div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    What happens near special points?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Limits and continuity help us understand behavior near
                    holes, jumps, vertical asymptotes, and other important
                    locations.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Mathematical connection */}
        <section className="pml-section">
          <div className="pml-container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="pml-eyebrow">Connection to calculus</div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  A graph connects several major ideas
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  The same curve can be studied from several different
                  perspectives. Limits describe local behavior, derivatives
                  describe rates of change, and integrals describe accumulation
                  and area.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <MathRenderer>{"f'(x)=\\frac{dy}{dx}"}</MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <h3 className="text-lg font-bold text-slate-900">
                  From graph to derivative
                </h3>

                <div className="mt-5 space-y-5">
                  <div className="flex gap-4">
                    <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                      1
                    </span>

                    <p className="text-sm leading-7 text-slate-600">
                      A steep upward curve indicates a large positive rate of
                      change.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                      2
                    </span>

                    <p className="text-sm leading-7 text-slate-600">
                      A horizontal tangent indicates a derivative close to zero.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                      3
                    </span>

                    <p className="text-sm leading-7 text-slate-600">
                      A downward-sloping curve has a negative derivative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Numerical note */}
        <section className="pml-section pt-0">
          <div className="pml-container">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex gap-4">
                <Info size={21} className="mt-1 shrink-0 text-[#9A5B00]" />

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Important note about this graph
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    This grapher uses numerical sampling rather than symbolic
                    graphing. It evaluates the function at a finite number of
                    x-values and connects the valid points. Functions with sharp
                    discontinuities, vertical asymptotes, rapid oscillations, or
                    very large values may require careful interpretation.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    A graph is therefore best used as a visual aid. For rigorous
                    conclusions, combine it with algebraic analysis, limits,
                    derivatives, or other appropriate mathematical methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pml-section pt-0">
          <div className="pml-container">
            <div className="rounded-2xl bg-[#17324D] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                  Continue learning
                </div>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Go from graphs to derivatives
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Once you understand how a function behaves visually,
                  derivatives give you a precise mathematical way to describe
                  its rate of change.
                </p>
              </div>

              <a
                href="/learn/derivatives"
                className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#17324D] transition hover:bg-slate-100 lg:mt-0"
              >
                Learn derivatives
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
