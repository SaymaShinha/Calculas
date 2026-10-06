import { Box, Circle } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import MathRenderer from "../../components/MathRenderer";

export default function Volume() {
  return (
    <>
      <SEO
        title="Volume with Calculus | Disks, Washers & Shells"
        description="Learn how calculus calculates volumes of solids using cross-sections, disk methods, washer methods, and cylindrical shells."
        canonical="/applications/volume"
      />

      <PageHeader
        eyebrow="Application • Volume"
        title="Volume with Integration"
        description="Definite integrals can calculate volumes of solids by accumulating infinitely many thin cross-sections."
        icon={Box}
      />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2>The cross-section idea</h2>

          <p>
            Imagine slicing a three-dimensional object into extremely thin
            pieces. If the area of each cross-section can be described as a
            function, integration can accumulate those cross-sectional areas.
          </p>

          <MathRenderer block>V = ∫ₐᵇ A(x) dx</MathRenderer>

          <h2>Disk method</h2>

          <p>
            When rotating a region around an axis, circular cross-sections may
            form disks.
          </p>

          <MathRenderer block>V = π∫ₐᵇ [R(x)]² dx</MathRenderer>

          <h2>Washer method</h2>

          <p>
            If the rotated cross-sections contain a hole, washers can be used.
          </p>

          <MathRenderer block>V = π∫ₐᵇ [R(x)² − r(x)²] dx</MathRenderer>

          <h2>Cylindrical shells</h2>

          <p>
            The shell method uses thin cylindrical layers. It is particularly
            useful when the geometry is more naturally expressed in terms of
            vertical or horizontal strips.
          </p>

          <div className="not-prose mt-8 flex items-center gap-4 rounded-2xl border border-base-300 p-6">
            <Circle className="text-primary" />
            <p className="text-sm leading-7 text-base-content/65">
              Choosing between disks, washers, and shells is mainly a matter of
              identifying which slicing direction makes the geometry and
              integral simplest.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
