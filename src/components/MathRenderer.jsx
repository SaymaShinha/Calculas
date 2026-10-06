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
    if (!ref.current) return;

    const formula = String(children ?? "").trim();

    if (!formula) {
      ref.current.innerHTML = "";
      return;
    }

    try {
      katex.render(formula, ref.current, {
        displayMode: !inline,
        throwOnError: false,
        strict: false,
        trust: false,
      });
    } catch (error) {
      console.error("KaTeX rendering error:", error);

      ref.current.textContent = formula;
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
