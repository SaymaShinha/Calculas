import {
  ArrowRight,
  Box,
  CheckCircle2,
  FunctionSquare,
  Layers,
  Lightbulb,
  Link as LinkIcon,
  Move3D,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

const functionTypes = [
  {
    title: "Two variables",
    formula: "f(x,y)",
    description:
      "A function of two variables assigns one output to each point in a region of the xy-plane. Its graph can form a surface in three-dimensional space.",
  },
  {
    title: "Three variables",
    formula: "f(x,y,z)",
    description:
      "A function of three variables can represent a scalar field in space, such as temperature or density.",
  },
  {
    title: "Many variables",
    formula: "f(x₁,x₂,…,xₙ)",
    description:
      "Higher-dimensional functions appear in optimization, statistics, economics, engineering, and machine learning.",
  },
];

const applications = [
  {
    title: "Physics",
    description:
      "Describe fields, energy, fluid flow, electromagnetism, and systems whose behavior depends on position.",
  },
  {
    title: "Engineering",
    description:
      "Analyze surfaces, heat transfer, structural behavior, design parameters, and optimization problems.",
  },
  {
    title: "Economics",
    description:
      "Study functions involving several economic variables and analyze marginal changes and optimization.",
  },
  {
    title: "Computer graphics",
    description:
      "Use surfaces, gradients, geometry, and spatial calculations to model three-dimensional scenes.",
  },
  {
    title: "Machine learning",
    description:
      "Use gradients and partial derivatives to optimize functions involving many parameters.",
  },
  {
    title: "Probability",
    description:
      "Analyze joint probability distributions, densities, expectations, and quantities involving several variables.",
  },
];

const coreIdeas = [
  "A multivariable function depends on two or more independent variables.",
  "Partial derivatives measure change with respect to one variable while holding the others constant.",
  "The gradient collects partial derivatives into a vector that describes local change.",
  "A directional derivative measures the rate of change in a chosen direction.",
  "Critical points are important when analyzing maxima, minima, and saddle points.",
  "Double and triple integrals extend accumulation to regions and three-dimensional domains.",
  "Multivariable calculus provides mathematical tools for modeling systems that depend on several changing quantities.",
];

export default function Multivariable() {
  return (
    <>
      <SEO
        title="Multivariable Calculus | Partial Derivatives, Gradients & Multiple Integrals"
        description="Learn multivariable calculus from functions of several variables through partial derivatives, gradients, directional derivatives, optimization, and multiple integrals."
        canonical="/learn/multivariable-calculus"
      />

      <PageHeader
        eyebrow="Learn • Advanced"
        title="Multivariable Calculus"
        description="Extend calculus from one independent variable to functions involving several variables, and learn how derivatives and integrals describe change and accumulation in higher dimensions."
      />

      <main>
        {/* Introduction */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="pml-prose">
                <div className="pml-eyebrow">The big picture</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Calculus with more than one variable
                </h2>

                <p className="mt-5">
                  In single-variable calculus, we study functions such as{" "}
                  <strong>f(x)</strong>, where one independent variable
                  determines the output. Many real systems, however, depend on
                  several quantities at the same time.
                </p>

                <p>
                  Multivariable calculus extends the ideas of limits,
                  derivatives, and integrals to functions of two, three, or many
                  variables. It provides the mathematical language for
                  describing surfaces, temperature fields, fluid flow,
                  optimization problems, physical systems, and many other
                  applications.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#17324d] text-white">
                    <Layers size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      A useful way to think about it
                    </p>

                    <p className="text-xs text-slate-500">
                      From curves to surfaces
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Single-variable calculus studies change along a line.
                  Multivariable calculus studies change across surfaces,
                  regions, and higher-dimensional spaces.
                </p>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                      <p className="font-mono text-xs font-semibold text-blue-700">
                        f(x)
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        One variable
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-4">
                      <p className="font-mono text-xs font-semibold text-blue-700">
                        f(x,y)
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Several variables
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Functions */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">01 · Functions</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Functions of several variables
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A multivariable function takes several inputs and produces an
                output. For example, a function of two variables can be written
                as:
              </p>
            </div>

            <div className="pml-formula mt-7 max-w-3xl">
              <MathRenderer>{"f(x,y)=x^2+y^2"}</MathRenderer>
            </div>

            <p className="pml-prose mt-6 max-w-3xl">
              Here, both <strong>x</strong> and <strong>y</strong> influence the
              output. If we graph the function, the result is generally a
              surface rather than a curve.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {functionTypes.map((item) => (
                <div key={item.title} className="pml-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                    <FunctionSquare size={19} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                    {item.title}
                  </h3>

                  <div className="mt-4 rounded-lg bg-[#f8f7f4] px-4 py-3">
                    <code className="font-mono text-sm font-semibold text-[#17324d]">
                      {item.formula}
                    </code>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#687481]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partial derivatives */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">02 · Derivatives</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Partial derivatives isolate one direction of change.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  A partial derivative measures how a multivariable function
                  changes when one variable changes while the other variables
                  are temporarily held constant.
                </p>
              </div>

              <div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="pml-card">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                      With respect to x
                    </p>

                    <div className="mt-4">
                      <MathRenderer>
                        {"\\frac{\\partial f}{\\partial x}"}
                      </MathRenderer>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Treat the other independent variables as constants.
                    </p>
                  </div>

                  <div className="pml-card">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                      With respect to y
                    </p>

                    <div className="mt-4">
                      <MathRenderer>
                        {"\\frac{\\partial f}{\\partial y}"}
                      </MathRenderer>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Measure how the output changes as y varies.
                    </p>
                  </div>
                </div>

                <div className="pml-card mt-5">
                  <p className="text-sm leading-7 text-slate-600">
                    Consider the function:
                  </p>

                  <div className="mt-4">
                    <MathRenderer>{"f(x,y)=x^2+3xy+y^2"}</MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Holding <strong>y</strong> constant while differentiating
                    with respect to <strong>x</strong> gives:
                  </p>

                  <div className="mt-3">
                    <MathRenderer>
                      {"\\frac{\\partial f}{\\partial x}=2x+3y"}
                    </MathRenderer>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Holding <strong>x</strong> constant while differentiating
                    with respect to <strong>y</strong> gives:
                  </p>

                  <div className="mt-3">
                    <MathRenderer>
                      {"\\frac{\\partial f}{\\partial y}=3x+2y"}
                    </MathRenderer>
                  </div>
                </div>

                <div className="pml-success mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0" />

                    <div>
                      <strong>Key idea:</strong> A partial derivative isolates
                      the effect of one variable while temporarily freezing the
                      others.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="pml-eyebrow">03 · Direction and change</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  The gradient combines partial derivatives.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  The gradient collects the partial derivatives of a scalar
                  function into a vector. For a function of two variables:
                </p>

                <div className="pml-formula mt-6 max-w-2xl">
                  <MathRenderer>
                    {
                      "\\nabla f(x,y)=\\left\\langle \\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y}\\right\\rangle"
                    }
                  </MathRenderer>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  The gradient points in the direction of greatest local
                  increase, provided the function is differentiable at the
                  point. Its magnitude gives the greatest directional rate of
                  increase.
                </p>
              </div>

              <div className="pml-card">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#EEF3FF] p-3 text-[#2F5BEA]">
                    <Move3D size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#17202A]">
                      Geometric interpretation
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#687481]">
                      Imagine standing on a landscape. The gradient tells you
                      the horizontal direction in which the surface rises most
                      rapidly.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Example
                  </p>

                  <div className="mt-4">
                    <MathRenderer>{"f(x,y)=x^2+y^2"}</MathRenderer>
                  </div>

                  <div className="mt-4">
                    <MathRenderer>
                      {"\\nabla f(x,y)=\\langle 2x,2y\\rangle"}
                    </MathRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directional derivatives */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">04 · Directional derivatives</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Measure change in a chosen direction.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                A partial derivative measures change along a coordinate
                direction. A directional derivative generalizes this idea by
                measuring how a function changes in any selected direction.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              <div className="pml-card">
                <p className="text-sm leading-7 text-slate-600">
                  If <strong>u</strong> is a unit vector, the directional
                  derivative is:
                </p>

                <div className="mt-5">
                  <MathRenderer>
                    {"D_{\\mathbf{u}}f=\\nabla f\\cdot\\mathbf{u}"}
                  </MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  The dot product determines how much of the gradient lies in
                  the chosen direction.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Interpretation
                </p>

                <ul className="mt-5 space-y-4">
                  {[
                    "Positive value: the function increases in that direction.",
                    "Negative value: the function decreases in that direction.",
                    "Zero: there is no instantaneous change in that direction.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#18794E]"
                      />

                      <span className="text-sm leading-6 text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">05 · Optimization</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Optimization with several variables
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Multivariable calculus provides a systematic way to locate and
                  classify potential maxima and minima of functions involving
                  several variables.
                </p>
              </div>

              <div>
                <div className="pml-card">
                  <p className="text-sm leading-7 text-slate-600">
                    For a function of two variables, critical points often begin
                    with solving:
                  </p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-slate-200 bg-[#f8f7f4] p-5">
                      <MathRenderer>
                        {"\\frac{\\partial f}{\\partial x}=0"}
                      </MathRenderer>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-[#f8f7f4] p-5">
                      <MathRenderer>
                        {"\\frac{\\partial f}{\\partial y}=0"}
                      </MathRenderer>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Solving these equations identifies points where the surface
                    may have a local maximum, local minimum, or saddle point.
                    Additional analysis is required to determine which case
                    applies.
                  </p>
                </div>

                <div className="pml-warning mt-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="mt-0.5 shrink-0" size={20} />

                    <div>
                      <strong>Important:</strong> A critical point is not
                      automatically a maximum or minimum. It can also be a
                      saddle point or require further analysis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second derivative / Hessian */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">
                06 · Classifying critical points
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The second derivatives provide more information.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                For a function of two variables, second partial derivatives can
                help determine whether a critical point behaves like a local
                maximum, local minimum, or saddle point.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  Second derivatives
                </p>

                <div className="mt-5 space-y-4">
                  <MathRenderer>
                    {"f_{xx}=\\frac{\\partial^2f}{\\partial x^2}"}
                  </MathRenderer>

                  <MathRenderer>
                    {"f_{yy}=\\frac{\\partial^2f}{\\partial y^2}"}
                  </MathRenderer>

                  <MathRenderer>
                    {"f_{xy}=\\frac{\\partial^2f}{\\partial x\\partial y}"}
                  </MathRenderer>
                </div>
              </div>

              <div className="pml-card">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                  Discriminant
                </p>

                <div className="mt-5">
                  <MathRenderer>{"D=f_{xx}f_{yy}-(f_{xy})^2"}</MathRenderer>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  The value of this discriminant, together with{" "}
                  <strong>fₓₓ</strong>, is commonly used in the second
                  derivative test for two-variable functions.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="pml-table-wrap">
                <table className="pml-table">
                  <thead>
                    <tr>
                      <th>Condition</th>
                      <th>Typical conclusion</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>D &gt; 0 and fₓₓ &gt; 0</td>
                      <td>Local minimum</td>
                    </tr>

                    <tr>
                      <td>D &gt; 0 and fₓₓ &lt; 0</td>
                      <td>Local maximum</td>
                    </tr>

                    <tr>
                      <td>D &lt; 0</td>
                      <td>Saddle point</td>
                    </tr>

                    <tr>
                      <td>D = 0</td>
                      <td>Test is inconclusive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Multiple integrals */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">07 · Integration</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Multiple integrals extend accumulation to regions.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Integration is not limited to intervals on a number line. In
                multivariable calculus, we can accumulate quantities across
                two-dimensional regions and three-dimensional volumes.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="pml-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Layers size={20} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                  Double integral
                </h3>

                <div className="mt-5">
                  <MathRenderer>{"\\iint_R f(x,y)\\,dA"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#687481]">
                  Accumulates a quantity across a two-dimensional region.
                </p>
              </div>

              <div className="pml-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <Box size={20} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#17202A]">
                  Triple integral
                </h3>

                <div className="mt-5">
                  <MathRenderer>{"\\iiint_V f(x,y,z)\\,dV"}</MathRenderer>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#687481]">
                  Accumulates a quantity throughout a three-dimensional region.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Box,
                  title: "Volume",
                  text: "Integrate density 1 across a region to measure its volume.",
                },
                {
                  icon: Layers,
                  title: "Mass",
                  text: "Combine density with volume elements to calculate total mass.",
                },
                {
                  icon: Sigma,
                  title: "Probability",
                  text: "Integrate probability density over regions to obtain probabilities.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="pml-card">
                  <Icon size={22} className="text-[#2F5BEA]" />

                  <h3 className="mt-4 font-semibold text-[#17202A]">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Change of variables */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="pml-eyebrow">08 · Coordinate systems</div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Changing coordinates can simplify a problem.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  Some regions and functions are difficult to describe using
                  ordinary Cartesian coordinates. Alternative coordinate systems
                  can make the geometry and the integral easier to handle.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Cartesian",
                    formula: "(x,y,z)",
                    text: "Useful for rectangular regions and ordinary graphing.",
                  },
                  {
                    title: "Polar",
                    formula: "(r,θ)",
                    text: "Useful for circular and radial geometry.",
                  },
                  {
                    title: "Cylindrical",
                    formula: "(r,θ,z)",
                    text: "Useful for three-dimensional rotational symmetry.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-[#f8f7f4] p-6"
                  >
                    <h3 className="font-bold text-slate-900">{item.title}</h3>

                    <div className="mt-4">
                      <code className="font-mono text-sm font-semibold text-[#17324d]">
                        {item.formula}
                      </code>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">09 · Applications</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Where multivariable calculus is used
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Multivariable calculus becomes especially useful when a system
                depends on several changing quantities simultaneously.
              </p>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {applications.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[#DEDEDB] py-1 pl-5"
                >
                  <h3 className="font-semibold text-[#17202A]">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Useful way to think */}
        <section className="border-y border-slate-200 bg-[#f8f7f4]">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-xl border border-[#f1d7a3] bg-[#fff7e8] p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb
                    className="mt-0.5 shrink-0 text-[#9a5b00]"
                    size={22}
                  />

                  <div>
                    <div className="pml-eyebrow text-[#9a5b00]">
                      Useful way to think
                    </div>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                      Multivariable calculus asks how a quantity changes when
                      several inputs can move.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Partial derivatives let us examine one direction at a
                      time. The gradient combines those directions. Directional
                      derivatives let us choose a particular direction, while
                      multiple integrals allow us to accumulate quantities over
                      regions and volumes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core concepts */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Core concepts</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The main ideas to remember
              </h2>

              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                {coreIdeas.map((item, index) => (
                  <div key={item} className="flex gap-4 py-5">
                    <span className="font-mono text-xs font-semibold text-blue-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#18794E]"
                      />

                      <p className="text-sm leading-6 text-[#34404C]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="pml-section">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="pml-eyebrow">Summary</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                From curves to surfaces, fields, and regions
              </h2>

              <div className="pml-prose mt-5">
                <p>
                  Multivariable calculus generalizes the central ideas of
                  calculus to systems in which several quantities vary
                  simultaneously. Instead of studying change along only one
                  coordinate direction, we can examine how a function responds
                  to movement in different directions.
                </p>

                <p>
                  Partial derivatives provide the basic directional building
                  blocks. The gradient combines these derivatives into a vector,
                  and directional derivatives measure change along arbitrary
                  directions. Optimization extends the search for extrema to
                  functions with several variables.
                </p>

                <p>
                  Integration also expands from intervals to regions and
                  volumes. Double and triple integrals provide a systematic way
                  to accumulate quantities such as area, volume, mass, and
                  probability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related topics */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="pml-eyebrow">Continue learning</div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Related calculus topics
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Review the single-variable ideas behind multivariable calculus
                or continue into vector calculus and related advanced topics.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Link
                to="/learn/derivatives"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <FunctionSquare className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Derivatives
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review single-variable derivatives before extending the idea
                  to partial derivatives.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review derivatives
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/integrals"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Sigma className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">Integrals</h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Review accumulation and definite integrals before studying
                  their higher-dimensional extensions.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Review integrals
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/learn/vector-calculus"
                className="pml-card group transition-shadow hover:shadow-sm"
              >
                <Layers className="text-[#2F5BEA]" size={22} />

                <h3 className="mt-4 font-semibold text-[#17202A]">
                  Vector Calculus
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Continue into vector fields, line integrals, divergence, curl,
                  and major integral theorems.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2F5BEA]">
                  Explore vector calculus
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-slate-200 bg-[#17324d]">
          <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 md:py-16 lg:px-8">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <LinkIcon className="text-white" size={21} />

                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                    Next level
                  </p>
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Continue into vector calculus.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Build on gradients, directional derivatives, and multiple
                  integrals by studying vector fields, line integrals,
                  divergence, curl, and the major theorems of vector calculus.
                </p>
              </div>

              <Link
                to="/learn/vector-calculus"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#17324d] transition-colors hover:bg-slate-100"
              >
                Continue to Vector Calculus
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
