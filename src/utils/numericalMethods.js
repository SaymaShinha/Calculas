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
  if (!Number.isFinite(Number(value))) return "—";

  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });
}

export function factorial(n) {
  n = Number(n);

  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Factorial requires a non-negative integer.");
  }

  if (n > 170) {
    throw new Error("Number is too large for factorial calculation.");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
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
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
}

export function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

export function percentageChange(oldValue, newValue) {
  if (Number(oldValue) === 0) return null;
  return ((Number(newValue) - Number(oldValue)) / Number(oldValue)) * 100;
}

export function evaluateExpression(expression, x = 0) {
  if (!expression?.trim()) {
    throw new Error("Enter a mathematical expression.");
  }

  let expr = expression
    .replace(/\^/g, "**")
    .replace(/\bpi\b/gi, "Math.PI")
    .replace(/\be\b/g, "Math.E")
    .replace(/\bsqrt\s*\(/gi, "Math.sqrt(")
    .replace(/\bsin\s*\(/gi, "Math.sin(")
    .replace(/\bcos\s*\(/gi, "Math.cos(")
    .replace(/\btan\s*\(/gi, "Math.tan(")
    .replace(/\blog\s*\(/gi, "Math.log10(")
    .replace(/\bln\s*\(/gi, "Math.log(")
    .replace(/\babs\s*\(/gi, "Math.abs(")
    .replace(/\bexp\s*\(/gi, "Math.exp(");

  // Basic safety check for a browser-side educational calculator.
  if (!/^[0-9xX+\-*/%().,\s_a-zA-Z]*$/.test(expr)) {
    throw new Error("Expression contains unsupported characters.");
  }

  try {
    const fn = new Function("x", `"use strict"; return (${expr});`);

    const result = fn(Number(x));

    if (!Number.isFinite(result)) {
      throw new Error("Expression did not produce a finite number.");
    }

    return result;
  } catch {
    throw new Error("Unable to evaluate the expression.");
  }
}

export function numericalDerivative(fn, x, h = 0.000001) {
  return (fn(x + h) - fn(x - h)) / (2 * h);
}

export function numericalSecondDerivative(fn, x, h = 0.0001) {
  return (fn(x + h) - 2 * fn(x) + fn(x - h)) / (h * h);
}
