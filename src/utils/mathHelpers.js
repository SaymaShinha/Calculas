import { evaluate } from "mathjs";

/* -------------------------------------------------------------------------- */
/* Basic helpers                                                              */
/* -------------------------------------------------------------------------- */

export function isFiniteNumber(value) {
  return Number.isFinite(Number(value));
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function roundTo(value, decimals = 6) {
  const factor = 10 ** decimals;

  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

export function formatNumber(value, decimals = 6) {
  if (!Number.isFinite(Number(value))) {
    return "—";
  }

  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });
}

/* -------------------------------------------------------------------------- */
/* Number helpers                                                             */
/* -------------------------------------------------------------------------- */

export function factorial(n) {
  n = Number(n);

  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Factorial requires a non-negative integer.");
  }

  if (n > 170) {
    throw new Error("Number is too large for factorial calculation.");
  }

  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

export function gcd(a, b) {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

export function lcm(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs((a * b) / gcd(a, b));
}

export function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

export function percentageChange(oldValue, newValue) {
  if (Number(oldValue) === 0) {
    return null;
  }

  return ((Number(newValue) - Number(oldValue)) / Number(oldValue)) * 100;
}

/* -------------------------------------------------------------------------- */
/* Mathematical expression evaluator                                          */
/* -------------------------------------------------------------------------- */

/**
 * Evaluates a mathematical expression at x.
 *
 * Supported examples:
 *
 *   2x
 *   3x^2
 *   x^3 - 4x + 2
 *   2(x + 1)
 *   x(x - 2)
 *   sin(x)
 *   cos(x)
 *   tan(x)
 *   sqrt(x)
 *   ln(x)
 *   log(x)
 *   e^x
 *   pi*x
 *   1/x
 */
export function evaluateExpression(expression, x = 0) {
  if (!expression || !String(expression).trim()) {
    throw new Error("Enter a mathematical expression.");
  }

  const expressionText = String(expression).trim();

  try {
    const result = evaluate(expressionText, {
      x: Number(x),
      pi: Math.PI,
      e: Math.E,
    });

    const numericResult = typeof result === "number" ? result : Number(result);

    if (!Number.isFinite(numericResult)) {
      throw new Error("The expression did not produce a finite number.");
    }

    return numericResult;
  } catch {
    throw new Error(
      "Unable to evaluate the expression. Try examples such as 2x, x^2, sin(x), or 3x^2 - 4x + 1.",
    );
  }
}

/* -------------------------------------------------------------------------- */
/* Numerical differentiation                                                  */
/* -------------------------------------------------------------------------- */

export function numericalDerivative(fn, x, h = 0.000001) {
  if (!Number.isFinite(x)) {
    throw new Error("x must be a finite number.");
  }

  if (!Number.isFinite(h) || h <= 0) {
    throw new Error("Step size h must be greater than zero.");
  }

  return (fn(x + h) - fn(x - h)) / (2 * h);
}

export function numericalSecondDerivative(fn, x, h = 0.0001) {
  if (!Number.isFinite(x)) {
    throw new Error("x must be a finite number.");
  }

  if (!Number.isFinite(h) || h <= 0) {
    throw new Error("Step size h must be greater than zero.");
  }

  return (fn(x + h) - 2 * fn(x) + fn(x - h)) / (h * h);
}
