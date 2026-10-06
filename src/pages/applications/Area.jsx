import { AreaChart, Calculator } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Area() {
  return (
    <>
      <SEO
        title="Area Under a Curve | Definite Integrals"
        description="Learn how definite integrals calculate area under curves and represent accumulated quantities."
        canonical="/applications/area"
      />

      <PageHeader
        eyebrow="Application • Area"
        title="Area and Definite Integrals"
        description="Integration provides a systematic way to calculate area and accumulated quantities when simple geometric formulas are not enough."
        icon={AreaChart}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>From rectangles to integrals</h2>

          <p>
            Simple shapes have familiar area formulas. A rectangle has area
            length times width. But curves do not generally have simple
            geometric area formulas.
          </p>

          <p>
            The definite integral solves this problem by approximating a curved
            region with many small pieces and taking a limit as the pieces
            become increasingly narrow.
          </p>

          <MathRenderer block>Area = ∫ₐᵇ f(x) dx</MathRenderer>

          <h2>Signed area</h2>

          <p>
            A definite integral technically calculates signed area. Regions
            below the x-axis contribute negative values.
          </p>

          <h2>Area between curves</h2>

          <p>
            If one function lies above another, the area between them can be
            calculated by integrating their difference.
          </p>

          <MathRenderer block>Area = ∫ₐᵇ [f(x) − g(x)] dx</MathRenderer>

          <div className="not-prose my-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <Calculator className="text-primary" />

            <h3 className="mt-4 font-bold">Practical interpretation</h3>

            <p className="mt-2 text-sm leading-7 text-base-content/65">
              Integration is not limited to geometric area. Whenever a quantity
              accumulates continuously, an integral may provide the appropriate
              mathematical model.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
