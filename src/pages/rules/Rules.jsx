import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpenCheck,
  Check,
  Copy,
  FunctionSquare,
  Info,
  Lightbulb,
  Search,
  Sigma,
} from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import RuleCard from "../../components/RuleCard";

const rules = [
  /* ---------------------------------------------------------------------- */
  /* DIFFERENTIATION                                                        */
  /* ---------------------------------------------------------------------- */

  {
    number: 1,
    category: "Differentiation",
    title: "Constant Rule",
    rule: "d/dx [C] = 0",
    explanation:
      "The derivative of a constant is zero because a constant does not change as x changes.",
    whenToUse: "Use whenever a term contains no variable dependence.",
    example: "d/dx [7] = 0",
    notes: "The constant may be any real number. The result is always zero.",
  },
  {
    number: 2,
    category: "Differentiation",
    title: "Power Rule",
    rule: "d/dx [xⁿ] = n xⁿ⁻¹",
    explanation: "Multiply by the exponent and reduce the exponent by one.",
    whenToUse:
      "Use for powers of x, including many polynomial, negative-power, and fractional-power expressions where the function is defined.",
    example: "d/dx [x⁵] = 5x⁴",
    notes:
      "For a composite expression such as (3x+1)⁵, use the chain rule as well.",
  },
  {
    number: 3,
    category: "Differentiation",
    title: "Constant Multiple Rule",
    rule: "d/dx [cf(x)] = c f′(x)",
    explanation:
      "A constant multiplier remains unchanged while the function is differentiated.",
    whenToUse: "Use when a constant is multiplied by a function.",
    example: "d/dx [3x²] = 3(2x) = 6x",
    notes: "The constant can be pulled outside the derivative.",
  },
  {
    number: 4,
    category: "Differentiation",
    title: "Sum Rule",
    rule: "d/dx [f(x) + g(x)] = f′(x) + g′(x)",
    explanation: "Differentiate each term separately and then add the results.",
    whenToUse: "Use for functions made from sums of differentiable terms.",
    example: "d/dx [x³ + 4x² + 2] = 3x² + 8x",
    notes: "The same idea applies to subtraction.",
  },
  {
    number: 5,
    category: "Differentiation",
    title: "Difference Rule",
    rule: "d/dx [f(x) − g(x)] = f′(x) − g′(x)",
    explanation:
      "The derivative of a difference is the difference of the derivatives.",
    whenToUse: "Use when functions are subtracted.",
    example: "d/dx [x⁴ − x²] = 4x³ − 2x",
    notes: "Treat the negative sign as part of the term being differentiated.",
  },
  {
    number: 6,
    category: "Differentiation",
    title: "Product Rule",
    rule: "(fg)′ = f′g + fg′",
    explanation:
      "Differentiate the first function and multiply by the second, then add the first function multiplied by the derivative of the second.",
    whenToUse: "Use when two variable-dependent functions are multiplied.",
    example: "d/dx [x² sin x] = 2x sin x + x² cos x",
    notes: "Do not multiply f′ by g′. That is a common mistake.",
  },
  {
    number: 7,
    category: "Differentiation",
    title: "Quotient Rule",
    rule: "(f/g)′ = (g f′ − f g′) / g²",
    explanation:
      "Differentiate the numerator and denominator using the quotient rule structure.",
    whenToUse: "Use when one differentiable function is divided by another.",
    example: "d/dx [x/(x²+1)] = [(x²+1) − 2x²]/(x²+1)²",
    notes:
      "The denominator is squared. Also check where the original denominator is zero.",
  },
  {
    number: 8,
    category: "Differentiation",
    title: "Chain Rule",
    rule: "d/dx [f(g(x))] = f′(g(x))g′(x)",
    explanation:
      "Differentiate the outer function while keeping the inner function, then multiply by the derivative of the inner function.",
    whenToUse: "Use for composite or nested functions.",
    example: "d/dx [(3x+1)⁵] = 15(3x+1)⁴",
    notes:
      "A useful mental pattern is: outside derivative × inside derivative.",
  },
  {
    number: 9,
    category: "Differentiation",
    title: "Exponential Rule",
    rule: "d/dx [eˣ] = eˣ",
    explanation: "The natural exponential function is its own derivative.",
    whenToUse: "Use for e raised directly to x.",
    example: "d/dx [eˣ] = eˣ",
    notes: "For e^{g(x)}, apply the chain rule.",
  },
  {
    number: 10,
    category: "Differentiation",
    title: "General Exponential Rule",
    rule: "d/dx [aˣ] = aˣ ln(a)",
    explanation:
      "The derivative of an exponential function with constant base a is the function multiplied by ln(a).",
    whenToUse: "Use when the base is a positive constant other than 1.",
    example: "d/dx [2ˣ] = 2ˣ ln 2",
    notes: "For a^{g(x)}, multiply by g′(x) using the chain rule.",
  },
  {
    number: 11,
    category: "Differentiation",
    title: "Natural Logarithm Rule",
    rule: "d/dx [ln|x|] = 1/x",
    explanation:
      "The derivative of the natural logarithm is the reciprocal of its argument.",
    whenToUse:
      "Use for logarithmic functions and expressions that simplify to ln|x|.",
    example: "d/dx [ln|x|] = 1/x",
    notes: "For ln(x), the real-valued domain requires x > 0.",
  },
  {
    number: 12,
    category: "Differentiation",
    title: "Sine Rule",
    rule: "d/dx [sin x] = cos x",
    explanation: "The derivative of sine is cosine.",
    whenToUse: "Use for trigonometric functions involving sine.",
    example: "d/dx [sin(4x)] = 4cos(4x)",
    notes: "The example uses the chain rule because the input is 4x.",
  },
  {
    number: 13,
    category: "Differentiation",
    title: "Cosine Rule",
    rule: "d/dx [cos x] = −sin x",
    explanation: "The derivative of cosine is negative sine.",
    whenToUse: "Use for trigonometric functions involving cosine.",
    example: "d/dx [cos(2x)] = −2sin(2x)",
    notes: "Remember the negative sign.",
  },
  {
    number: 14,
    category: "Differentiation",
    title: "Tangent Rule",
    rule: "d/dx [tan x] = sec²x",
    explanation: "The derivative of tangent is secant squared.",
    whenToUse: "Use for tangent functions where they are defined.",
    example: "d/dx [tan(3x)] = 3sec²(3x)",
    notes: "The function is undefined where cos x = 0.",
  },
  {
    number: 15,
    category: "Differentiation",
    title: "Cotangent Rule",
    rule: "d/dx [cot x] = −csc²x",
    explanation: "The derivative of cotangent is negative cosecant squared.",
    whenToUse: "Use for cotangent functions.",
    example: "d/dx [cot x] = −csc²x",
    notes: "Cotangent is undefined where sin x = 0.",
  },
  {
    number: 16,
    category: "Differentiation",
    title: "Secant Rule",
    rule: "d/dx [sec x] = sec x tan x",
    explanation: "The derivative of secant is secant multiplied by tangent.",
    whenToUse: "Use for secant functions.",
    example: "d/dx [sec(2x)] = 2sec(2x)tan(2x)",
    notes: "Apply the chain rule when the argument is a function of x.",
  },
  {
    number: 17,
    category: "Differentiation",
    title: "Cosecant Rule",
    rule: "d/dx [csc x] = −csc x cot x",
    explanation:
      "The derivative of cosecant is negative cosecant multiplied by cotangent.",
    whenToUse: "Use for cosecant functions.",
    example: "d/dx [csc x] = −csc x cot x",
    notes: "Apply the chain rule for composite arguments.",
  },
  {
    number: 18,
    category: "Differentiation",
    title: "Inverse Sine Rule",
    rule: "d/dx [arcsin x] = 1/√(1−x²)",
    explanation: "Gives the derivative of inverse sine.",
    whenToUse:
      "Use when differentiating arcsin or sin⁻¹ as an inverse function.",
    example: "d/dx [arcsin(2x)] = 2/√(1−4x²)",
    notes:
      "The real-valued expression requires |x| < 1 for the derivative formula at ordinary points.",
  },
  {
    number: 19,
    category: "Differentiation",
    title: "Inverse Cosine Rule",
    rule: "d/dx [arccos x] = −1/√(1−x²)",
    explanation: "Gives the derivative of inverse cosine.",
    whenToUse: "Use when differentiating arccos functions.",
    example: "d/dx [arccos(3x)] = −3/√(1−9x²)",
    notes: "The chain rule is required for a composite argument.",
  },
  {
    number: 20,
    category: "Differentiation",
    title: "Inverse Tangent Rule",
    rule: "d/dx [arctan x] = 1/(1+x²)",
    explanation: "Gives the derivative of inverse tangent.",
    whenToUse: "Use for arctangent functions.",
    example: "d/dx [arctan(2x)] = 2/(1+4x²)",
    notes: "This derivative exists for every real x.",
  },

  /* ---------------------------------------------------------------------- */
  /* INTEGRATION                                                            */
  /* ---------------------------------------------------------------------- */

  {
    number: 21,
    category: "Integration",
    title: "Power Rule for Integration",
    rule: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1",
    explanation: "Increase the exponent by one and divide by the new exponent.",
    whenToUse: "Use for powers of x when the exponent is not −1.",
    example: "∫x⁴ dx = x⁵/5 + C",
    notes: "The n = −1 case is special: ∫1/x dx = ln|x| + C.",
  },
  {
    number: 22,
    category: "Integration",
    title: "Constant Rule for Integration",
    rule: "∫C dx = Cx + C₁",
    explanation:
      "The antiderivative of a constant is the constant multiplied by x.",
    whenToUse: "Use when integrating a constant term.",
    example: "∫7 dx = 7x + C",
    notes: "The integration constant is normally written simply as C.",
  },
  {
    number: 23,
    category: "Integration",
    title: "Constant Multiple Rule",
    rule: "∫c f(x) dx = c∫f(x) dx",
    explanation: "A constant multiplier can be taken outside an integral.",
    whenToUse: "Use when a constant multiplies an integrable function.",
    example: "∫5x² dx = 5∫x² dx = 5x³/3 + C",
    notes: "This can make complicated integrals easier to organize.",
  },
  {
    number: 24,
    category: "Integration",
    title: "Sum Rule",
    rule: "∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx",
    explanation: "The integral of a sum equals the sum of the integrals.",
    whenToUse: "Use for expressions containing several additive terms.",
    example: "∫(x²+x)dx = x³/3+x²/2+C",
    notes: "The same principle applies to subtraction.",
  },
  {
    number: 25,
    category: "Integration",
    title: "Exponential Integral",
    rule: "∫eˣ dx = eˣ + C",
    explanation: "The natural exponential function is its own antiderivative.",
    whenToUse: "Use for eˣ and suitable composite forms after substitution.",
    example: "∫eˣdx = eˣ+C",
    notes: "For e^{g(x)}, the derivative of g(x) must also be accounted for.",
  },
  {
    number: 26,
    category: "Integration",
    title: "General Exponential Integral",
    rule: "∫aˣ dx = aˣ/ln(a) + C",
    explanation: "Integrates an exponential function with a constant base.",
    whenToUse: "Use when a > 0 and a ≠ 1.",
    example: "∫2ˣ dx = 2ˣ/ln 2 + C",
    notes: "The ln(a) denominator is essential.",
  },
  {
    number: 27,
    category: "Integration",
    title: "Logarithmic Integral",
    rule: "∫1/x dx = ln|x| + C",
    explanation:
      "The reciprocal function has the natural logarithm as its antiderivative.",
    whenToUse: "Use for integrands of the form 1/x or equivalent expressions.",
    example: "∫(3/x)dx = 3ln|x| + C",
    notes:
      "The absolute value is important for the general real-valued result.",
  },
  {
    number: 28,
    category: "Integration",
    title: "Sine Integral",
    rule: "∫sin x dx = −cos x + C",
    explanation: "The antiderivative of sine is negative cosine.",
    whenToUse: "Use for sine functions and suitable substitutions.",
    example: "∫sin(2x)dx = −cos(2x)/2 + C",
    notes: "The factor 1/2 appears because of the chain rule.",
  },
  {
    number: 29,
    category: "Integration",
    title: "Cosine Integral",
    rule: "∫cos x dx = sin x + C",
    explanation: "The antiderivative of cosine is sine.",
    whenToUse: "Use for cosine functions and suitable substitutions.",
    example: "∫cos(3x)dx = sin(3x)/3 + C",
    notes: "Account for the derivative of the inner function.",
  },
  {
    number: 30,
    category: "Integration",
    title: "Secant Squared Integral",
    rule: "∫sec²x dx = tan x + C",
    explanation: "This reverses the derivative rule for tangent.",
    whenToUse: "Use when the integrand contains sec²x.",
    example: "∫sec²(2x)dx = tan(2x)/2 + C",
    notes: "Composite arguments require the appropriate constant factor.",
  },
  {
    number: 31,
    category: "Integration",
    title: "Integration by Substitution",
    rule: "∫f(g(x))g′(x)dx = ∫f(u)du",
    explanation:
      "Replace a complicated inner expression with a new variable to simplify the integral.",
    whenToUse:
      "Use when an integrand contains a function together with its derivative or a constant multiple of its derivative.",
    example: "∫2x(x²+1)³dx → u=x²+1 → ∫u³du",
    notes:
      "For definite integrals, change the limits or substitute back before evaluating.",
  },
  {
    number: 32,
    category: "Integration",
    title: "Integration by Parts",
    rule: "∫u dv = uv − ∫v du",
    explanation:
      "Transforms a product integral into another integral that may be easier to evaluate.",
    whenToUse:
      "Useful for products involving polynomials, logarithms, exponentials, and trigonometric functions.",
    example: "∫x eˣdx = xeˣ − ∫eˣdx = eˣ(x−1)+C",
    notes: "Choosing u and dv well is usually the most important step.",
  },
  {
    number: 33,
    category: "Integration",
    title: "Fundamental Theorem of Calculus",
    rule: "∫ₐᵇ f(x)dx = F(b) − F(a), where F′(x)=f(x)",
    explanation: "Connects definite integration with antiderivatives.",
    whenToUse:
      "Use to evaluate a definite integral when an antiderivative is known.",
    example: "∫₀²x dx = [x²/2]₀² = 2",
    notes:
      "This is one of the central connections between differentiation and integration.",
  },

  /* ---------------------------------------------------------------------- */
  /* LIMITS                                                                 */
  /* ---------------------------------------------------------------------- */

  {
    number: 34,
    category: "Limits",
    title: "Limit Sum Rule",
    rule: "lim[f(x)+g(x)] = lim f(x) + lim g(x)",
    explanation:
      "The limit of a sum equals the sum of the individual limits when those limits exist.",
    whenToUse: "Use to split a complicated limit into simpler parts.",
    example: "If lim f(x)=2 and lim g(x)=5, then lim[f(x)+g(x)]=7.",
    notes:
      "Similar rules exist for differences, products, and constant multiples.",
  },
  {
    number: 35,
    category: "Limits",
    title: "Limit Product Rule",
    rule: "lim[f(x)g(x)] = (lim f(x))(lim g(x))",
    explanation:
      "The limit of a product is the product of the limits when both exist.",
    whenToUse: "Use for products of functions with existing limits.",
    example: "limₓ→2[x(x+1)] = 2·3 = 6",
    notes: "This is especially useful for polynomial and continuous functions.",
  },
  {
    number: 36,
    category: "Limits",
    title: "Limit Quotient Rule",
    rule: "lim[f(x)/g(x)] = (lim f(x))/(lim g(x))",
    explanation:
      "The limit of a quotient equals the quotient of the limits when the denominator limit is nonzero.",
    whenToUse: "Use for quotients when the denominator does not approach zero.",
    example: "limₓ→2[(x+1)/x] = 3/2",
    notes:
      "If the denominator approaches zero, further analysis may be necessary.",
  },
  {
    number: 37,
    category: "Limits",
    title: "Direct Substitution",
    rule: "limₓ→a f(x) = f(a) for continuous f",
    explanation:
      "For a function continuous at a, substitute the approaching value directly.",
    whenToUse: "Use when the function is continuous at the point.",
    example: "limₓ→3(x²+1) = 10",
    notes:
      "Direct substitution is not sufficient when it produces an indeterminate form such as 0/0.",
  },
  {
    number: 38,
    category: "Limits",
    title: "Squeeze Theorem",
    rule: "g(x) ≤ f(x) ≤ h(x), lim g = lim h = L ⇒ lim f = L",
    explanation:
      "A function trapped between two functions with the same limit must have that limit.",
    whenToUse:
      "Useful for difficult limits involving oscillation or bounding functions.",
    example: "−|x| ≤ x sin(1/x) ≤ |x|, so the limit at x→0 is 0.",
    notes: "The bounds must squeeze the target function near the point.",
  },
  {
    number: 39,
    category: "Limits",
    title: "Important Trigonometric Limit",
    rule: "limₓ→0 (sin x)/x = 1",
    explanation:
      "A fundamental limit used in deriving trigonometric derivatives.",
    whenToUse:
      "Use when a trigonometric expression can be rewritten into this standard form.",
    example: "limₓ→0 sin(5x)/(5x) = 1",
    notes: "The angle must be measured in radians.",
  },

  /* ---------------------------------------------------------------------- */
  /* DIFFERENTIAL EQUATIONS                                                 */
  /* ---------------------------------------------------------------------- */

  {
    number: 40,
    category: "Differential Equations",
    title: "Exponential Growth and Decay",
    rule: "y(t) = y₀eᵏᵗ",
    explanation:
      "Models a quantity whose instantaneous rate of change is proportional to its current amount.",
    whenToUse: "Use for idealized continuous growth or decay models.",
    example: "If y₀=100 and k=0.04, then y(t)=100e⁰·⁰⁴ᵗ.",
    notes: "k > 0 represents growth; k < 0 represents decay.",
  },
  {
    number: 41,
    category: "Differential Equations",
    title: "Separation of Variables",
    rule: "dy/dx = g(x)h(y) → dy/h(y) = g(x)dx",
    explanation: "Separates the variables so each side can be integrated.",
    whenToUse: "Use for separable first-order differential equations.",
    example: "dy/dx = ky → dy/y = k dx",
    notes: "Solutions lost by dividing by h(y) should be checked separately.",
  },
  {
    number: 42,
    category: "Differential Equations",
    title: "First-Order Linear ODE",
    rule: "y′ + P(x)y = Q(x)",
    explanation:
      "Standard form for a first-order linear differential equation.",
    whenToUse: "Use the integrating-factor method for equations in this form.",
    example: "y′ + 2y = x",
    notes: "The integrating factor is μ(x)=e^{∫P(x)dx}.",
  },
  {
    number: 43,
    category: "Differential Equations",
    title: "Integrating Factor",
    rule: "μ(x) = e^{∫P(x)dx}",
    explanation:
      "Multiplying a first-order linear ODE by this factor makes the left side a product derivative.",
    whenToUse: "Use for first-order linear equations.",
    example: "For y′+2y=x, μ=e²ˣ.",
    notes:
      "The multiplicative constant in μ does not change the resulting solution family.",
  },

  /* ---------------------------------------------------------------------- */
  /* MULTIVARIABLE                                                          */
  /* ---------------------------------------------------------------------- */

  {
    number: 44,
    category: "Multivariable",
    title: "Partial Derivative",
    rule: "fₓ = ∂f/∂x",
    explanation:
      "Measures how a multivariable function changes with respect to x while other variables are held constant.",
    whenToUse:
      "Use when analyzing functions with two or more independent variables.",
    example: "For f(x,y)=x²y+3y, fₓ=2xy.",
    notes: "Variables other than x are treated as constants.",
  },
  {
    number: 45,
    category: "Multivariable",
    title: "Gradient",
    rule: "∇f = ⟨fₓ,fᵧ,f_z⟩",
    explanation:
      "The gradient collects the first partial derivatives into a vector.",
    whenToUse:
      "Use for direction of greatest increase, directional derivatives, and optimization.",
    example: "For f=x²+y², ∇f=⟨2x,2y⟩.",
    notes: "The gradient points in the direction of greatest local increase.",
  },
  {
    number: 46,
    category: "Multivariable",
    title: "Directional Derivative",
    rule: "Dᵤf = ∇f · u",
    explanation:
      "Measures the rate at which a function changes in a specified direction.",
    whenToUse: "Use when the direction of movement is important.",
    example: "If ∇f=⟨2,3⟩ and u=⟨1/√2,1/√2⟩, then Dᵤf=5/√2.",
    notes: "u should be a unit vector.",
  },
  {
    number: 47,
    category: "Multivariable",
    title: "Tangent Plane",
    rule: "z−f(a,b)=fₓ(a,b)(x−a)+fᵧ(a,b)(y−b)",
    explanation:
      "Approximates a differentiable surface with a plane near a point.",
    whenToUse: "Use for local approximation and surface geometry.",
    example: "For f=x²+y² at (1,1): z−2=2(x−1)+2(y−1).",
    notes: "It is the multivariable analogue of a tangent line.",
  },
  {
    number: 48,
    category: "Multivariable",
    title: "Double Integral",
    rule: "∬ᴿ f(x,y)dA",
    explanation: "Accumulates a function over a two-dimensional region.",
    whenToUse:
      "Use for area, volume under surfaces, mass, probability, and other accumulated quantities.",
    example: "∬ᴿ1 dA gives the area of R.",
    notes:
      "The region R and order of integration determine the limits when written as an iterated integral.",
  },

  /* ---------------------------------------------------------------------- */
  /* VECTOR CALCULUS                                                        */
  /* ---------------------------------------------------------------------- */

  {
    number: 49,
    category: "Vector Calculus",
    title: "Divergence",
    rule: "∇·F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
    explanation:
      "Measures the local tendency of a vector field to spread outward or converge inward.",
    whenToUse: "Use when analyzing sources, sinks, fluid flow, or flux.",
    example: "For F=⟨x,y,z⟩, ∇·F=3.",
    notes:
      "Positive divergence indicates net outward behavior; negative divergence indicates inward behavior.",
  },
  {
    number: 50,
    category: "Vector Calculus",
    title: "Curl",
    rule: "∇×F",
    explanation:
      "Measures the local rotational tendency of a three-dimensional vector field.",
    whenToUse:
      "Use for rotational fields, fluid flow, electromagnetism, and circulation.",
    example: "For F=⟨−y,x,0⟩, ∇×F=⟨0,0,2⟩.",
    notes: "Curl is a vector quantity.",
  },
  {
    number: 51,
    category: "Vector Calculus",
    title: "Line Integral",
    rule: "∫C F · dr",
    explanation: "Accumulates the component of a vector field along a curve.",
    whenToUse: "Commonly used to calculate work done by a force along a path.",
    example: "W = ∫C F·dr.",
    notes: "For conservative fields, the line integral is path independent.",
  },
  {
    number: 52,
    category: "Vector Calculus",
    title: "Green's Theorem",
    rule: "∮C(Pdx+Qdy)=∬ᴿ(Qₓ−Pᵧ)dA",
    explanation:
      "Relates circulation around a closed planar curve to a double integral over the enclosed region.",
    whenToUse:
      "Use when a closed planar line integral can be more easily evaluated as an area integral.",
    example:
      "A difficult circulation integral around a boundary can sometimes become a simple double integral.",
    notes: "Positive orientation is counterclockwise.",
  },
  {
    number: 53,
    category: "Vector Calculus",
    title: "Divergence Theorem",
    rule: "∭ᵥ(∇·F)dV = ∬S F·n dS",
    explanation:
      "Relates the total divergence inside a volume to the outward flux across its closed boundary.",
    whenToUse: "Use for flux through closed surfaces.",
    example:
      "A complicated closed-surface flux can sometimes be replaced with a volume integral.",
    notes: "The surface must be closed and the normal is outward-pointing.",
  },

  /* ---------------------------------------------------------------------- */
  /* SEQUENCES AND SERIES                                                   */
  /* ---------------------------------------------------------------------- */

  {
    number: 54,
    category: "Sequences & Series",
    title: "Arithmetic Sequence",
    rule: "aₙ = a₁ + (n−1)d",
    explanation:
      "Finds the nth term when consecutive terms differ by a constant amount.",
    whenToUse: "Use when a sequence has a constant common difference.",
    example: "For 2,5,8,..., aₙ=2+3(n−1).",
    notes: "d is the common difference.",
  },
  {
    number: 55,
    category: "Sequences & Series",
    title: "Geometric Sequence",
    rule: "aₙ = a₁rⁿ⁻¹",
    explanation:
      "Finds the nth term when consecutive terms have a constant ratio.",
    whenToUse: "Use for exponential-style sequences.",
    example: "For 2,6,18,..., aₙ=2(3ⁿ⁻¹).",
    notes: "r is the common ratio.",
  },
  {
    number: 56,
    category: "Sequences & Series",
    title: "Infinite Geometric Series",
    rule: "Σₙ₌₀∞ arⁿ = a/(1−r), |r|<1",
    explanation:
      "Gives the finite value approached by an infinite geometric series.",
    whenToUse:
      "Use only when the absolute value of the common ratio is less than one.",
    example: "1+1/2+1/4+... = 2",
    notes: "If |r|≥1, the series does not converge to a finite sum.",
  },
  {
    number: 57,
    category: "Sequences & Series",
    title: "Ratio Test",
    rule: "L = limₙ→∞ |aₙ₊₁/aₙ|",
    explanation: "Tests convergence by comparing consecutive terms.",
    whenToUse:
      "Particularly useful for factorials and exponential expressions.",
    example: "L<1 implies absolute convergence; L>1 implies divergence.",
    notes: "If L=1, the test is inconclusive.",
  },
  {
    number: 58,
    category: "Sequences & Series",
    title: "Taylor Series",
    rule: "f(x)=Σₙ₌₀∞ [f⁽ⁿ⁾(a)/n!](x−a)ⁿ",
    explanation:
      "Represents a function as an infinite power series centered at a.",
    whenToUse: "Use for local approximation and theoretical analysis.",
    example: "eˣ=1+x+x²/2!+x³/3!+...",
    notes:
      "The convergence interval must be considered before treating the series as equal to the function.",
  },
  {
    number: 59,
    category: "Sequences & Series",
    title: "Maclaurin Series",
    rule: "f(x)=Σₙ₌₀∞ [f⁽ⁿ⁾(0)/n!]xⁿ",
    explanation: "A Taylor series centered at zero.",
    whenToUse: "Use for standard expansions around x=0.",
    example: "sin x = x − x³/3! + x⁵/5! − ...",
    notes: "Maclaurin series are a special case of Taylor series.",
  },

  /* ---------------------------------------------------------------------- */
  /* NUMERICAL METHODS                                                      */
  /* ---------------------------------------------------------------------- */

  {
    number: 60,
    category: "Numerical Methods",
    title: "Forward Difference",
    rule: "f′(x) ≈ [f(x+h)−f(x)]/h",
    explanation: "Approximates a derivative using a point ahead of x.",
    whenToUse:
      "Useful when only current and forward function values are available.",
    example: "Use a small h to estimate f′(x).",
    notes: "Basic forward difference has truncation error of order O(h).",
  },
  {
    number: 61,
    category: "Numerical Methods",
    title: "Backward Difference",
    rule: "f′(x) ≈ [f(x)−f(x−h)]/h",
    explanation: "Approximates a derivative using a point behind x.",
    whenToUse: "Useful near boundaries where forward values are unavailable.",
    example: "Use known values at x and x−h to estimate f′(x).",
    notes: "Its basic truncation error is also O(h).",
  },
  {
    number: 62,
    category: "Numerical Methods",
    title: "Central Difference",
    rule: "f′(x) ≈ [f(x+h)−f(x−h)]/(2h)",
    explanation:
      "Uses points on both sides of x to approximate the derivative.",
    whenToUse:
      "Use when function values are available on both sides of the point.",
    example:
      "For smooth functions, central differences are often considerably more accurate than basic one-sided differences.",
    notes: "The standard central-difference truncation error is O(h²).",
  },
  {
    number: 63,
    category: "Numerical Methods",
    title: "Trapezoidal Rule",
    rule: "Tₙ = h/2[f(x₀)+2Σf(xᵢ)+f(xₙ)]",
    explanation:
      "Approximates an integral by replacing sections of the curve with trapezoids.",
    whenToUse:
      "Use for numerical integration when an exact antiderivative is unavailable or inconvenient.",
    example:
      "Increasing the number of subintervals generally improves the approximation for smooth functions.",
    notes:
      "The composite method has O(h²) error under standard smoothness assumptions.",
  },
  {
    number: 64,
    category: "Numerical Methods",
    title: "Simpson's Rule",
    rule: "Sₙ = h/3[f(x₀)+4Σf(xodd)+2Σf(xeven)+f(xₙ)]",
    explanation:
      "Approximates a function using quadratic pieces instead of straight-line pieces.",
    whenToUse:
      "Use for numerical integration of sufficiently smooth functions.",
    example: "Simpson's rule is often highly accurate for smooth curves.",
    notes:
      "The standard composite rule requires an even number of subintervals.",
  },
  {
    number: 65,
    category: "Numerical Methods",
    title: "Newton-Raphson Method",
    rule: "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)",
    explanation:
      "Uses tangent-line information to iteratively approximate a root.",
    whenToUse:
      "Use when f′ is available and a good starting estimate can be chosen.",
    example:
      "Starting with an approximation close to a root can lead to very rapid convergence.",
    notes:
      "A poor initial guess can cause divergence or convergence to another root.",
  },
  {
    number: 66,
    category: "Numerical Methods",
    title: "Bisection Method",
    rule: "m = (a+b)/2",
    explanation:
      "Repeatedly divides an interval containing a sign change to locate a root.",
    whenToUse: "Use when a continuous function satisfies f(a)f(b)<0.",
    example:
      "Evaluate f(m) and retain the half interval that still contains the sign change.",
    notes:
      "Bisection is slower than Newton-Raphson but is robust under its assumptions.",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(rules.map((rule) => rule.category))),
];

function EnhancedRuleCard({ rule, onCopy, copied }) {
  return (
    <article className="pml-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] font-mono text-sm font-bold text-[#2F5BEA]">
            {rule.number}
          </div>

          <div>
            <div className="pml-eyebrow">{rule.category}</div>

            <h2 className="mt-1 text-xl font-semibold text-[#17202A]">
              {rule.title}
            </h2>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onCopy(rule.rule)}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#DEDEDB] bg-white text-[#687481] transition hover:border-[#2F5BEA] hover:text-[#2F5BEA]"
          title="Copy rule"
          aria-label={`Copy ${rule.title}`}
        >
          {copied ? (
            <Check size={17} className="text-[#18794E]" />
          ) : (
            <Copy size={17} />
          )}
        </button>
      </div>

      <div className="my-5 overflow-x-auto rounded-lg border border-[#E9E9E6] bg-[#F8F7F4] p-5 text-center">
        <code className="whitespace-nowrap font-mono text-base font-semibold text-[#17324D] sm:text-lg">
          {rule.rule}
        </code>
      </div>

      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#17324D]">
            What the rule means
          </h3>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">
            {rule.explanation}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#17324D]">
            When to use it
          </h3>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">
            {rule.whenToUse}
          </p>
        </div>

        <div className="rounded-lg border border-[#E9E9E6] bg-[#F8F7F4] p-4">
          <div className="flex items-start gap-3">
            <Lightbulb size={17} className="mt-0.5 shrink-0 text-[#2F5BEA]" />

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#687481]">
                Example
              </p>

              <p className="mt-1 text-sm leading-6 text-[#34404C]">
                {rule.example}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E9E9E6] pt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#687481]">
            Important note
          </p>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">{rule.notes}</p>
        </div>
      </div>
    </article>
  );
}

export default function Rules() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [copied, setCopied] = useState("");

  const filteredRules = useMemo(() => {
    const query = search.trim().toLowerCase();

    return rules.filter((rule) => {
      const matchesCategory = category === "All" || rule.category === category;

      const matchesSearch =
        !query ||
        [
          rule.title,
          rule.category,
          rule.rule,
          rule.explanation,
          rule.whenToUse,
          rule.example,
          rule.notes,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  async function copyRule(ruleText) {
    try {
      await navigator.clipboard.writeText(ruleText);
      setCopied(ruleText);

      window.setTimeout(() => {
        setCopied("");
      }, 1500);
    } catch {
      // Clipboard access may be unavailable in some browser contexts.
    }
  }

  function clearFilters() {
    setSearch("");
    setCategory("All");
  }

  return (
    <>
      <SEO
        title="Calculus Rules Reference | Differentiation, Integration & More"
        description="Explore a comprehensive calculus rules reference covering differentiation, integration, limits, differential equations, multivariable calculus, vector calculus, sequences and series, and numerical methods."
        canonical="/rules"
      />

      <PageHeader
        eyebrow="Reference"
        title="Calculus Rules"
        description="A practical reference for the rules and methods used to differentiate, integrate, simplify, approximate, and analyze mathematical functions."
      />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="pml-eyebrow">How to use this reference</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                Learn the operation, not just the pattern
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Calculus rules are shortcuts built from deeper ideas. They make
                differentiation and integration practical, but using a rule
                correctly requires recognizing the structure of the problem.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Each rule below explains what the rule does, when it applies,
                and gives an example so you can connect the symbolic pattern to
                an actual calculation.
              </p>
            </div>

            <div className="pml-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <BookOpenCheck size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Reference
                  </p>

                  <p className="text-2xl font-bold text-[#17324D]">
                    {rules.length}
                  </p>

                  <p className="text-sm text-[#687481]">rules and methods</p>
                </div>
              </div>

              <div className="my-5 border-t border-[#E9E9E6]" />

              <div className="flex items-center gap-2 text-sm text-[#34404C]">
                <Search size={16} />
                <span>Search all explanations</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#34404C]">
                <Copy size={16} />
                <span>Copy any rule</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="sticky top-[4.1rem] z-30 mb-10 border-y border-[#DEDEDB] bg-[#F8F7F4]/95 py-4 backdrop-blur">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#687481]"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search rules, examples, concepts..."
                className="pml-input w-full pl-11"
                aria-label="Search calculus rules"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={
                    category === item
                      ? "pml-btn-primary shrink-0"
                      : "pml-btn-secondary shrink-0"
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Result summary */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-[#687481]">
            Showing{" "}
            <span className="font-semibold text-[#34404C]">
              {filteredRules.length}
            </span>{" "}
            {filteredRules.length === 1 ? "rule" : "rules"}
          </p>

          {(search || category !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-[#2F5BEA] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Rules */}
        {filteredRules.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredRules.map((rule) => (
              <EnhancedRuleCard
                key={rule.number}
                rule={rule}
                onCopy={copyRule}
                copied={copied === rule.rule}
              />
            ))}
          </div>
        ) : (
          <section className="pml-card border-dashed p-12 text-center">
            <Search
              size={38}
              className="mx-auto text-[#687481]"
              strokeWidth={1.5}
            />

            <h2 className="mt-5 text-xl font-semibold text-[#17202A]">
              No rules found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#687481]">
              Try a different search phrase or browse another category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="pml-btn-primary mt-6"
            >
              Show all rules
            </button>
          </section>
        )}

        {/* Rule selection guide */}
        <section className="mt-20">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <FunctionSquare size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Problem-solving guide</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  How to decide which rule to use
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#687481]">
                  Start by identifying the structure of the expression rather
                  than trying to memorize a rule from its appearance.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                  01
                </span>

                <h3 className="mt-3 font-semibold text-[#17202A]">
                  Look at the structure
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Is it a sum, product, quotient, composite function, power,
                  logarithm, or trigonometric expression?
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                  02
                </span>

                <h3 className="mt-3 font-semibold text-[#17202A]">
                  Check the conditions
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Check domains, denominators, differentiability, convergence,
                  and any restrictions associated with the rule.
                </p>
              </div>

              <div className="border border-[#E9E9E6] bg-[#F8F7F4] p-5">
                <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                  03
                </span>

                <h3 className="mt-3 font-semibold text-[#17202A]">
                  Verify the result
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#687481]">
                  Differentiate an antiderivative, check a numerical result,
                  inspect the domain, and make sure the answer is reasonable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mt-8">
          <div className="border border-[#E8D8B8] bg-[#FFF7E8] p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <AlertTriangle
                size={21}
                className="mt-0.5 shrink-0 text-[#9A5B00]"
              />

              <div>
                <h2 className="font-semibold text-[#17202A]">
                  Common rule mistakes
                </h2>

                <ul className="mt-3 space-y-2 text-sm leading-7 text-[#34404C]">
                  <li>
                    • Forgetting the chain rule when differentiating a composite
                    function.
                  </li>

                  <li>• Using f′g′ instead of the product rule f′g + fg′.</li>

                  <li>
                    • Forgetting the squared denominator in the quotient rule.
                  </li>

                  <li>
                    • Forgetting +C when evaluating an indefinite integral.
                  </li>

                  <li>
                    • Applying the power rule for integration when n = −1.
                  </li>

                  <li>
                    • Assuming a numerical approximation is exactly equal to the
                    mathematical value.
                  </li>

                  <li>• Ignoring domain or convergence conditions.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rules vs formulas */}
        <section className="mt-8">
          <div className="border border-[#DEDEDB] bg-white p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <Info size={21} className="mt-0.5 shrink-0 text-[#17324D]" />

              <div>
                <div className="pml-eyebrow">Reference distinction</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  Rules and formulas are related, but not identical
                </h2>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#34404C]">
                  A formula usually gives a mathematical relationship or
                  expression. A rule tells you how to perform an operation or
                  transform an expression. For example, the power rule tells you
                  how to differentiate xⁿ, while a calculus formula might
                  describe the average value of a function or the volume of a
                  solid.
                </p>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#34404C]">
                  For a broader collection of equations and reference
                  identities, use the Practical Math Lab{" "}
                  <a
                    href="/formulas"
                    className="font-semibold text-[#2F5BEA] hover:underline"
                  >
                    Calculus Formulas
                  </a>{" "}
                  reference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final note */}
        <section className="mt-8">
          <div className="border border-[#DEDEDB] bg-[#17324D] p-7 text-white sm:p-9">
            <Sigma size={25} />

            <h2 className="mt-4 text-2xl font-semibold">
              Rules are tools, not the whole subject
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              The rules make calculations efficient, but calculus is ultimately
              about understanding change, accumulation, limits, approximation,
              and mathematical structure. Once you understand why a rule works,
              applying it becomes much more reliable.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
