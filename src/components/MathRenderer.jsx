import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function MathRenderer({
  children,
  inline = false,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const formula = String(children ?? "").trim();

    if (!formula) {
      element.textContent = "";
      return;
    }

    try {
      katex.render(formula, element, {
        displayMode: !inline,
        throwOnError: false,
        strict: false,
        trust: false,
        output: "htmlAndMathml",
      });
    } catch (error) {
      console.error("KaTeX rendering error:", error);
      element.textContent = formula;
    }
  }, [children, inline]);

  if (inline) {
    return (
      <span
        ref={ref}
        className={`pml-math-inline ${className}`}
        aria-label="Mathematical expression"
      />
    );
  }

  return (
    <div
      ref={ref}
      className={`pml-math-renderer overflow-x-auto ${className}`}
      aria-label="Mathematical formula"
    />
  );
}
