import { evaluate } from "mathjs";

/**
 * Check whether a value can be converted to a finite number.
 */
export function isFiniteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number);
}

/**
 * Restrict a number to a minimum and maximum value.
 */
export function clamp(value, min, max) {
  const number = Number(value);
  const minimum = Number(min);
  const maximum = Number(max);

  if (
    !Number.isFinite(number) ||
    !Number.isFinite(minimum) ||
    !Number.isFinite(maximum)
  ) {
    throw new Error("Clamp requires finite numeric values.");
  }

  if (minimum > maximum) {
    throw new Error("Minimum value cannot be greater than maximum value.");
  }

  return Math.min(Math.max(number, minimum), maximum);
}

/**
 * Round a number to a specified number of decimal places.
 */
export function roundTo(value, decimals = 6) {
  const number = Number(value);
  const precision = Number(decimals);

  if (!Number.isFinite(number)) {
    return NaN;
  }

  if (!Number.isInteger(precision) || precision < 0 || precision > 15) {
    throw new Error("Decimals must be an integer between 0 and 15.");
  }

  const factor = 10 ** precision;

  return Math.round((number + Number.EPSILON) * factor) / factor;
}

/**
 * Format a number for display.
 */
export function formatNumber(value, decimals = 6) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "—";
  }

  return number.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });
}

/**
 * Calculate n!.
 */
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

/**
 * Greatest common divisor.
 */
export function gcd(a, b) {
  a = Math.abs(Math.trunc(Number(a)));
  b = Math.abs(Math.trunc(Number(b)));

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("GCD requires finite numbers.");
  }

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

/**
 * Least common multiple.
 */
export function lcm(a, b) {
  a = Math.trunc(Number(a));
  b = Math.trunc(Number(b));

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("LCM requires finite numbers.");
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  return Math.abs((a * b) / gcd(a, b));
}

/**
 * Convert degrees to radians.
 */
export function degreesToRadians(degrees) {
  return (Number(degrees) * Math.PI) / 180;
}

/**
 * Convert radians to degrees.
 */
export function radiansToDegrees(radians) {
  return (Number(radians) * 180) / Math.PI;
}

/**
 * Calculate percentage change.
 *
 * Returns null when the old value is zero because percentage
 * change is undefined in that case.
 */
export function percentageChange(oldValue, newValue) {
  const oldNumber = Number(oldValue);
  const newNumber = Number(newValue);

  if (!Number.isFinite(oldNumber) || !Number.isFinite(newNumber)) {
    return null;
  }

  if (oldNumber === 0) {
    return null;
  }

  return ((newNumber - oldNumber) / oldNumber) * 100;
}

/**
 * Evaluate a mathematical expression at x.
 *
 * Uses mathjs instead of new Function(), making the calculator
 * safer and much more capable with standard mathematical notation.
 *
 * Supported examples:
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
  if (
    expression === null ||
    expression === undefined ||
    !String(expression).trim()
  ) {
    throw new Error("Enter a mathematical expression.");
  }

  const expressionText = String(expression).trim();
  const xValue = Number(x);

  if (!Number.isFinite(xValue)) {
    throw new Error("The x-value must be a finite number.");
  }

  try {
    const result = evaluate(expressionText, {
      x: xValue,
      pi: Math.PI,
      e: Math.E,
    });

    const numericResult = typeof result === "number" ? result : Number(result);

    if (!Number.isFinite(numericResult)) {
      throw new Error("Expression did not produce a finite number.");
    }

    return numericResult;
  } catch {
    throw new Error(
      "Unable to evaluate the expression. Try examples such as 2x, x^2, sin(x), or 3x^2 - 4x + 1.",
    );
  }
}

/**
 * Numerical first derivative using the central difference method.
 *
 * f'(x) ≈ [f(x+h) - f(x-h)] / (2h)
 */
export function numericalDerivative(fn, x, h = 0.000001) {
  if (typeof fn !== "function") {
    throw new Error("A function is required.");
  }

  const xValue = Number(x);
  const step = Number(h);

  if (!Number.isFinite(xValue)) {
    throw new Error("x must be a finite number.");
  }

  if (!Number.isFinite(step) || step <= 0) {
    throw new Error("Step size must be greater than zero.");
  }

  const forward = Number(fn(xValue + step));
  const backward = Number(fn(xValue - step));

  if (!Number.isFinite(forward) || !Number.isFinite(backward)) {
    throw new Error("The function could not be evaluated around this point.");
  }

  return (forward - backward) / (2 * step);
}

/**
 * Numerical second derivative using the central difference method.
 *
 * f''(x) ≈ [f(x+h) - 2f(x) + f(x-h)] / h²
 */
export function numericalSecondDerivative(fn, x, h = 0.0001) {
  if (typeof fn !== "function") {
    throw new Error("A function is required.");
  }

  const xValue = Number(x);
  const step = Number(h);

  if (!Number.isFinite(xValue)) {
    throw new Error("x must be a finite number.");
  }

  if (!Number.isFinite(step) || step <= 0) {
    throw new Error("Step size must be greater than zero.");
  }

  const forward = Number(fn(xValue + step));
  const center = Number(fn(xValue));
  const backward = Number(fn(xValue - step));

  if (
    !Number.isFinite(forward) ||
    !Number.isFinite(center) ||
    !Number.isFinite(backward)
  ) {
    throw new Error("The function could not be evaluated around this point.");
  }

  return (forward - 2 * center + backward) / (step * step);
}
