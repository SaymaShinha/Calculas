// src/pages/Formulas.jsx

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  Calculator,
  Check,
  Clipboard,
  Compass,
  Copy,
  FunctionSquare,
  Infinity,
  Lightbulb,
  Search,
  Sigma,
  Sparkles,
} from "lucide-react";

import SEO from "../../components/SEO.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import MathRenderer from "../../components/MathRenderer.jsx";

const formulaCategories = [
  {
    id: "algebra",
    name: "Algebra Essentials",
    description:
      "Algebraic identities and rules that frequently appear before and during calculus.",
    icon: FunctionSquare,
    formulas: [
      {
        name: "Difference of Squares",
        formula: "a^2-b^2=(a-b)(a+b)",
        description:
          "The difference between two squares factors into the difference and sum of the two quantities.",
        conditions: "Valid for all real or complex a and b.",
        variables: "a and b are arbitrary quantities.",
        use: "Useful for factoring expressions and simplifying limits.",
        example:
          "x^2-9=(x-3)(x+3). This is especially useful when evaluating limits that initially produce 0/0.",
        note: "Recognizing algebraic structure can turn a difficult-looking limit into a simple substitution.",
      },
      {
        name: "Perfect Square",
        formula: "a^2\\pm2ab+b^2=(a\\pm b)^2",
        description:
          "A quadratic expression with the appropriate middle term can be written as a squared binomial.",
        conditions: "Valid for all a and b.",
        variables: "a and b represent algebraic quantities.",
        use: "Useful for factoring, completing the square, and simplifying functions.",
        example: "x^2+6x+9=(x+3)^2.",
        note: "The middle term must be exactly ±2ab.",
      },
      {
        name: "Quadratic Formula",
        formula: "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
        description: "Finds the roots of a quadratic equation ax²+bx+c=0.",
        conditions: "a≠0.",
        variables: "a, b, and c are coefficients of the quadratic equation.",
        use: "Useful when a quadratic cannot be factored easily.",
        example: "For x^2-5x+6=0, x=(5±√1)/2, giving x=2 or x=3.",
        note: "The discriminant b²−4ac determines whether the roots are real, repeated, or complex.",
      },
      {
        name: "Binomial Expansion",
        formula: "(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k",
        description: "Expands a power of a binomial into a sum of terms.",
        conditions: "For non-negative integer n in this finite form.",
        variables: "C(n,k)=n!/[k!(n−k)!] is the binomial coefficient.",
        use: "Useful for algebraic expansion, approximations, and Taylor-related calculations.",
        example: "(x+1)^2=x^2+2x+1.",
        note: "The binomial theorem becomes especially useful when working with polynomial approximations.",
      },
    ],
  },

  {
    id: "trigonometry",
    name: "Trigonometry",
    description:
      "Core trigonometric identities and formulas frequently used throughout calculus.",
    icon: Compass,
    formulas: [
      {
        name: "Pythagorean Identity",
        formula: "\\sin^2x+\\cos^2x=1",
        description: "The fundamental identity relating sine and cosine.",
        conditions: "Valid for every real x.",
        variables: "x is an angle measured in radians or degrees.",
        use: "Useful for simplifying trigonometric expressions and integration.",
        example: "If sin x=3/5, then cos²x=1−9/25=16/25.",
        note: "Remember that cos x may be positive or negative depending on the quadrant.",
      },
      {
        name: "Tangent Identity",
        formula: "\\tan x=\\frac{\\sin x}{\\cos x}",
        description: "Defines tangent as the ratio of sine to cosine.",
        conditions: "cos x≠0.",
        variables: "x is an angle.",
        use: "Useful when converting between trigonometric functions.",
        example: "If sin x=3/5 and cos x=4/5, then tan x=3/4.",
        note: "Tangent is undefined whenever cos x=0.",
      },
      {
        name: "Secant Identity",
        formula: "1+\\tan^2x=\\sec^2x",
        description: "A Pythagorean identity involving tangent and secant.",
        conditions: "Valid wherever the functions are defined.",
        variables: "x is an angle.",
        use: "Common in differentiation and integration.",
        example: "\\sec^2x-\\tan^2x=1.",
        note: "This identity follows from dividing sin²x+cos²x=1 by cos²x.",
      },
      {
        name: "Cosecant Identity",
        formula: "1+\\cot^2x=\\csc^2x",
        description: "A Pythagorean identity involving cotangent and cosecant.",
        conditions: "Valid wherever the functions are defined.",
        variables: "x is an angle.",
        use: "Useful in trigonometric integration and simplification.",
        example: "\\csc^2x-\\cot^2x=1.",
        note: "It follows by dividing the fundamental identity by sin²x.",
      },
      {
        name: "Sine Addition Formula",
        formula: "\\sin(a+b)=\\sin a\\cos b+\\cos a\\sin b",
        description:
          "Expresses the sine of a sum using the sine and cosine of the individual angles.",
        conditions: "Valid for all real a and b.",
        variables: "a and b are angles.",
        use: "Useful for trigonometric manipulation and deriving other identities.",
        example: "\\sin(x+\\pi/2)=\\cos x.",
        note: "Do not confuse the signs with the cosine addition formula.",
      },
      {
        name: "Cosine Addition Formula",
        formula: "\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b",
        description:
          "Expresses the cosine of a sum using individual sine and cosine values.",
        conditions: "Valid for all real a and b.",
        variables: "a and b are angles.",
        use: "Useful for deriving double-angle identities.",
        example: "\\cos(2x)=\\cos^2x-\\sin^2x.",
        note: "The minus sign between the two products is essential.",
      },
      {
        name: "Double-Angle Sine",
        formula: "\\sin(2x)=2\\sin x\\cos x",
        description: "Expresses the sine of twice an angle as a product.",
        conditions: "Valid for all real x.",
        variables: "x is an angle.",
        use: "Useful in integration and trigonometric simplification.",
        example: "2\\sin x\\cos x=\\sin(2x).",
        note: "This identity converts products into a single trigonometric function.",
      },
      {
        name: "Double-Angle Cosine",
        formula: "\\cos(2x)=\\cos^2x-\\sin^2x",
        description: "One form of the cosine double-angle identity.",
        conditions: "Valid for all real x.",
        variables: "x is an angle.",
        use: "Useful for trigonometric simplification and integration.",
        example: "\\cos(2x)=1-2\\sin^2x=2\\cos^2x-1.",
        note: "There are three commonly useful equivalent forms.",
      },
      {
        name: "Half-Angle Sine",
        formula: "\\sin^2\\left(\\frac{x}{2}\\right)=\\frac{1-\\cos x}{2}",
        description:
          "Expresses the square of a half-angle sine using cosine of the full angle.",
        conditions: "Valid for all real x.",
        variables: "x is an angle.",
        use: "Especially useful when integrating powers of sine.",
        example: "\\sin^2x=\\frac{1-\\cos(2x)}{2}.",
        note: "This identity is also called a power-reduction formula.",
      },
      {
        name: "Half-Angle Cosine",
        formula: "\\cos^2\\left(\\frac{x}{2}\\right)=\\frac{1+\\cos x}{2}",
        description:
          "Expresses the square of a half-angle cosine using cosine of the full angle.",
        conditions: "Valid for all real x.",
        variables: "x is an angle.",
        use: "Useful for integration and trigonometric simplification.",
        example: "\\cos^2x=\\frac{1+\\cos(2x)}{2}.",
        note: "For the unsquared half-angle formula, the sign depends on the quadrant.",
      },
    ],
  },

  {
    id: "limits",
    name: "Limits & Continuity",
    description:
      "Fundamental limit laws, special limits, continuity conditions, and important techniques.",
    icon: Infinity,
    formulas: [
      {
        name: "Limit of a Sum",
        formula: "\\lim_{x\\to a}[f(x)+g(x)]=L+M",
        description:
          "The limit of a sum equals the sum of the individual limits.",
        conditions: "Both limits must exist as finite values.",
        variables: "L=lim f(x) and M=lim g(x) as x approaches a.",
        use: "Useful for breaking complicated limits into simpler parts.",
        example: "If lim f(x)=3 and lim g(x)=5, then lim[f(x)+g(x)]=8.",
        note: "Similar laws apply to differences, products, and constant multiples.",
      },
      {
        name: "Limit of a Product",
        formula: "\\lim_{x\\to a}[f(x)g(x)]=LM",
        description: "The limit of a product equals the product of the limits.",
        conditions: "Both individual limits must exist.",
        variables: "L and M are the respective limits.",
        use: "Useful for polynomial and composite expressions.",
        example: "\\lim_{x\\to2}x(x+1)=2(3)=6.",
        note: "Direct substitution works for many continuous functions.",
      },
      {
        name: "Limit of a Quotient",
        formula: "\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\frac{L}{M}",
        description:
          "The limit of a quotient equals the quotient of the limits.",
        conditions: "The denominator limit must satisfy M≠0.",
        variables: "L and M are the respective limits.",
        use: "Useful for rational functions and many algebraic limits.",
        example: "\\lim_{x\\to2}\\frac{x+1}{x}=\\frac32.",
        note: "If the denominator approaches zero, another method may be required.",
      },
      {
        name: "Continuity at a Point",
        formula: "\\lim_{x\\to a}f(x)=f(a)",
        description:
          "A function is continuous at a when its limit equals its actual function value.",
        conditions:
          "f(a) must exist, the limit must exist, and the two values must agree.",
        variables: "a is the point at which continuity is being tested.",
        use: "Useful for identifying discontinuities and applying important theorems.",
        example: "For f(x)=x², limₓ→2 f(x)=4=f(2).",
        note: "A function can fail continuity because of a missing value, jump, or unbounded behavior.",
      },
      {
        name: "Squeeze Theorem",
        formula:
          "g(x)\\le f(x)\\le h(x),\\quad \\lim g(x)=\\lim h(x)=L\\Rightarrow\\lim f(x)=L",
        description:
          "If a function is trapped between two functions with the same limit, it must have that limit as well.",
        conditions:
          "The inequalities must hold in a neighborhood of the point.",
        variables: "f is the target function; g and h bound it.",
        use: "Useful for difficult trigonometric and oscillating limits.",
        example:
          "-|x|\\le x\\sin(1/x)\\le|x|, and both bounds approach 0, so the limit is 0.",
        note: "The theorem is especially useful when direct substitution does not reveal the answer.",
      },
      {
        name: "Important Trigonometric Limit",
        formula: "\\lim_{x\\to0}\\frac{\\sin x}{x}=1",
        description:
          "A foundational limit used to derive many trigonometric derivative formulas.",
        conditions: "x must be measured in radians.",
        variables: "x approaches zero.",
        use: "Essential in proving derivatives of sine and cosine.",
        example: "\\lim_{x\\to0}\\frac{\\sin(5x)}{5x}=1.",
        note: "The radians condition is important.",
      },
      {
        name: "Exponential Limit",
        formula: "\\lim_{x\\to0}\\frac{e^x-1}{x}=1",
        description:
          "A fundamental limit associated with the natural exponential function.",
        conditions: "x approaches zero.",
        variables: "x is the variable approaching zero.",
        use: "Useful in deriving the derivative of eˣ.",
        example: "\\lim_{x\\to0}\\frac{e^x-1}{x}=1.",
        note: "This is one reason e is especially important in calculus.",
      },
      {
        name: "Logarithmic Limit",
        formula: "\\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1",
        description: "A fundamental limit for the natural logarithm.",
        conditions: "x approaches zero with 1+x>0.",
        variables: "x is the variable.",
        use: "Useful in logarithmic differentiation and derivative proofs.",
        example: "\\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1.",
        note: "The domain restriction of ln(1+x) must be respected.",
      },
      {
        name: "Limit at Infinity",
        formula: "\\lim_{x\\to\\infty}\\frac{1}{x^n}=0,\\quad n>0",
        description:
          "A positive power of x in the denominator grows without bound, causing the reciprocal to approach zero.",
        conditions: "n must be positive.",
        variables: "n is a positive constant.",
        use: "Useful for analyzing rational functions and asymptotic behavior.",
        example: "\\lim_{x\\to\\infty}\\frac{1}{x^3}=0.",
        note: "This does not mean 1/xⁿ equals zero for finite x.",
      },
    ],
  },

  {
    id: "derivatives",
    name: "Derivatives",
    description:
      "Definitions, differentiation rules, exponential functions, logarithms, and trigonometric derivatives.",
    icon: FunctionSquare,
    formulas: [
      {
        name: "Derivative from First Principles",
        formula: "f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}",
        description:
          "Defines the derivative as the limiting instantaneous rate of change.",
        conditions: "The limit must exist.",
        variables:
          "h is a small change in x; f(x+h) and f(x) are function values.",
        use: "Used to understand the fundamental meaning of differentiation.",
        example: "For f(x)=x², the definition simplifies to f'(x)=2x.",
        note: "This definition is the foundation from which derivative rules are developed.",
      },
      {
        name: "Constant Rule",
        formula: "\\frac{d}{dx}[C]=0",
        description: "A constant has no rate of change.",
        conditions: "C is independent of x.",
        variables: "C is any constant.",
        use: "Used whenever a term contains no variable x.",
        example: "\\frac{d}{dx}[12]=0.",
        note: "The derivative of a constant is always zero.",
      },
      {
        name: "Power Rule",
        formula: "\\frac{d}{dx}[x^n]=nx^{n-1}",
        description:
          "Differentiates a power of x by multiplying by the exponent and reducing the exponent by one.",
        conditions: "Domain considerations apply for general real powers.",
        variables: "n is a constant exponent.",
        use: "One of the most frequently used derivative rules.",
        example: "\\frac{d}{dx}[x^5]=5x^4.",
        note: "The rule also works for negative and fractional powers where the function is defined.",
      },
      {
        name: "Constant Multiple Rule",
        formula: "\\frac{d}{dx}[Cf(x)]=Cf'(x)",
        description:
          "A constant multiplier can be carried outside the derivative.",
        conditions: "C must be constant with respect to x.",
        variables: "C is constant and f is differentiable.",
        use: "Useful for simplifying differentiation of polynomial terms.",
        example: "\\frac{d}{dx}[7x^3]=21x^2.",
        note: "Differentiate the function and keep the constant unchanged.",
      },
      {
        name: "Sum Rule",
        formula: "(f+g)'=f'+g'",
        description:
          "The derivative of a sum equals the sum of the derivatives.",
        conditions: "Both functions must be differentiable.",
        variables: "f and g are differentiable functions.",
        use: "Useful for differentiating multi-term expressions.",
        example: "\\frac{d}{dx}[x^3+x^2]=3x^2+2x.",
        note: "The same principle applies to subtraction.",
      },
      {
        name: "Product Rule",
        formula: "(fg)'=f'g+fg'",
        description: "Differentiates the product of two functions.",
        conditions: "Both functions must be differentiable.",
        variables: "f and g are functions of x.",
        use: "Use when two variable-dependent functions are multiplied.",
        example: "\\frac{d}{dx}[x^2\\sin x]=2x\\sin x+x^2\\cos x.",
        note: "A common mistake is differentiating both factors and multiplying the derivatives.",
      },
      {
        name: "Quotient Rule",
        formula: "\\left(\\frac{f}{g}\\right)'=\\frac{gf'-fg'}{g^2}",
        description: "Differentiates the quotient of two functions.",
        conditions: "g(x)≠0 and both functions are differentiable.",
        variables: "f and g are functions of x.",
        use: "Useful when one differentiable function is divided by another.",
        example: "For f=x and g=x²+1, use [(x²+1)(1)-x(2x)]/(x²+1)².",
        note: "Keep the denominator squared in the final expression.",
      },
      {
        name: "Chain Rule",
        formula: "\\frac{d}{dx}[f(g(x))]=f'(g(x))g'(x)",
        description:
          "Differentiates a composite function by multiplying the derivative of the outer function by the derivative of the inner function.",
        conditions:
          "Both functions must be differentiable at the relevant points.",
        variables: "g is the inner function and f is the outer function.",
        use: "Essential for nested functions.",
        example: "\\frac{d}{dx}[(3x+1)^5]=15(3x+1)^4.",
        note: "Differentiate the outside, keep the inside, then multiply by the derivative of the inside.",
      },
      {
        name: "Exponential Function",
        formula: "\\frac{d}{dx}[e^x]=e^x",
        description: "The natural exponential function is its own derivative.",
        conditions: "All real x.",
        variables: "x is the independent variable.",
        use: "Common in growth, decay, differential equations, and modeling.",
        example: "\\frac{d}{dx}[e^x]=e^x.",
        note: "For e^{g(x)}, use the chain rule.",
      },
      {
        name: "General Exponential",
        formula: "\\frac{d}{dx}[a^x]=a^x\\ln a",
        description:
          "Differentiates an exponential function with a positive constant base.",
        conditions: "a>0 and a≠1.",
        variables: "a is a positive constant; x is the variable.",
        use: "Useful for exponential growth and decay models.",
        example: "\\frac{d}{dx}[2^x]=2^x\\ln2.",
        note: "If the exponent is a function g(x), multiply by g'(x).",
      },
      {
        name: "Natural Logarithm",
        formula: "\\frac{d}{dx}[\\ln|x|]=\\frac1x",
        description:
          "The derivative of the natural logarithm of the absolute value of x.",
        conditions: "x≠0.",
        variables: "x is the independent variable.",
        use: "Useful in logarithmic differentiation and integration.",
        example: "\\frac{d}{dx}[\\ln|x|]=\\frac1x.",
        note: "For ln x specifically, x must be positive.",
      },
      {
        name: "Sine",
        formula: "\\frac{d}{dx}[\\sin x]=\\cos x",
        description: "The derivative of sine is cosine.",
        conditions: "All real x.",
        variables: "x is measured in radians.",
        use: "Essential in oscillation and periodic models.",
        example: "\\frac{d}{dx}[\\sin(3x)]=3\\cos(3x).",
        note: "The chain rule is required when the argument is not simply x.",
      },
      {
        name: "Cosine",
        formula: "\\frac{d}{dx}[\\cos x]=-\sin x",
        description: "The derivative of cosine is negative sine.",
        conditions: "All real x.",
        variables: "x is measured in radians.",
        use: "Common in periodic and harmonic models.",
        example: "\\frac{d}{dx}[\\cos(2x)]=-2\\sin(2x).",
        note: "Remember the negative sign.",
      },
      {
        name: "Tangent",
        formula: "\\frac{d}{dx}[\\tan x]=\\sec^2x",
        description: "The derivative of tangent is secant squared.",
        conditions: "cos x≠0.",
        variables: "x is measured in radians.",
        use: "Useful in trigonometric differentiation.",
        example: "\\frac{d}{dx}[\\tan(4x)]=4\\sec^2(4x).",
        note: "The chain rule applies to a composite tangent function.",
      },
      {
        name: "Second Derivative",
        formula: "f''(x)=\\frac{d^2f}{dx^2}",
        description:
          "The second derivative measures how the first derivative changes.",
        conditions: "The function must be twice differentiable.",
        variables: "f'' is the second derivative.",
        use: "Used for concavity, acceleration, and optimization tests.",
        example: "If f(x)=x³, then f'(x)=3x² and f''(x)=6x.",
        note: "f''>0 generally indicates concave up; f''<0 generally indicates concave down.",
      },
      {
        name: "Implicit Differentiation",
        formula: "\\text{Differentiate both sides with respect to }x",
        description:
          "A method for finding dy/dx when y is defined implicitly rather than explicitly.",
        conditions:
          "The equation should represent a differentiable relationship locally.",
        variables: "x and y are related variables.",
        use: "Useful for circles, curves, and equations that are difficult to solve explicitly for y.",
        example: "For x²+y²=25: 2x+2y(dy/dx)=0, so dy/dx=-x/y.",
        note: "Whenever differentiating a term containing y, remember the chain rule.",
      },
    ],
  },

  {
    id: "integrals",
    name: "Integrals",
    description:
      "Indefinite integrals, definite integrals, antiderivatives, the Fundamental Theorem, and common integration formulas.",
    icon: Sigma,
    formulas: [
      {
        name: "Indefinite Integral",
        formula: "\\int f(x)\\,dx=F(x)+C",
        description: "Represents the family of all antiderivatives of f.",
        conditions: "F'(x)=f(x) on the relevant interval.",
        variables: "C is an arbitrary constant.",
        use: "Used to find antiderivatives.",
        example: "\\int2x\\,dx=x^2+C.",
        note: "Always include +C for an indefinite integral.",
      },
      {
        name: "Power Rule for Integration",
        formula: "\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C",
        description:
          "Integrates a power of x by increasing the exponent by one and dividing by the new exponent.",
        conditions: "n≠-1.",
        variables: "n is a constant.",
        use: "Useful for polynomial and power functions.",
        example: "\\int x^3\\,dx=\\frac{x^4}{4}+C.",
        note: "The case n=-1 is special and gives ln|x|.",
      },
      {
        name: "Constant Integral",
        formula: "\\int C\\,dx=Cx+C_1",
        description: "The antiderivative of a constant is a linear function.",
        conditions: "C is constant.",
        variables: "C and C₁ are constants.",
        use: "Useful for integrating constant terms.",
        example: "\\int5\\,dx=5x+C.",
        note: "The integration constant can simply be written as C.",
      },
      {
        name: "Exponential Integral",
        formula: "\\int e^x\\,dx=e^x+C",
        description:
          "The natural exponential function is its own antiderivative.",
        conditions: "All real x.",
        variables: "x is the integration variable.",
        use: "Common in growth and differential equations.",
        example: "\\int e^x\\,dx=e^x+C.",
        note: "For e^{g(x)}, substitution or the chain-rule relationship may be needed.",
      },
      {
        name: "General Exponential Integral",
        formula: "\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C",
        description: "Integrates an exponential function with constant base a.",
        conditions: "a>0 and a≠1.",
        variables: "a is constant.",
        use: "Useful for exponential models.",
        example: "\\int2^x\\,dx=\\frac{2^x}{\\ln2}+C.",
        note: "The ln(a) denominator is essential.",
      },
      {
        name: "Logarithmic Integral",
        formula: "\\int\\frac1x\\,dx=\\ln|x|+C",
        description:
          "The antiderivative of 1/x is the natural logarithm of the absolute value.",
        conditions: "x≠0.",
        variables: "x is the integration variable.",
        use: "Common in rational-function integration.",
        example: "\\int\\frac1x\\,dx=\\ln|x|+C.",
        note: "The absolute value is needed for a general real-domain antiderivative.",
      },
      {
        name: "Sine Integral",
        formula: "\\int\\sin x\\,dx=-\\cos x+C",
        description: "The antiderivative of sine is negative cosine.",
        conditions: "x measured in radians.",
        variables: "x is the integration variable.",
        use: "Used in periodic and oscillatory problems.",
        example: "\\int\\sin x\\,dx=-\\cos x+C.",
        note: "Differentiate the answer to verify it.",
      },
      {
        name: "Cosine Integral",
        formula: "\\int\\cos x\\,dx=\\sin x+C",
        description: "The antiderivative of cosine is sine.",
        conditions: "x measured in radians.",
        variables: "x is the integration variable.",
        use: "Common in trigonometric integration.",
        example: "\\int\\cos x\\,dx=\\sin x+C.",
        note: "Always check by differentiation when unsure.",
      },
      {
        name: "Secant Squared Integral",
        formula: "\\int\\sec^2x\\,dx=\\tan x+C",
        description:
          "Uses the derivative relationship between tangent and secant squared.",
        conditions: "Where tan x is defined.",
        variables: "x is an angle.",
        use: "Common in trigonometric integration.",
        example: "\\int\\sec^2x\\,dx=\\tan x+C.",
        note: "This formula is the reverse of d/dx[tan x].",
      },
      {
        name: "Definite Integral",
        formula: "\\int_a^b f(x)\\,dx",
        description:
          "Represents accumulated signed area or another accumulated quantity over an interval.",
        conditions:
          "The function must be integrable over the interval under the chosen definition.",
        variables: "a is the lower limit and b is the upper limit.",
        use: "Used for area, accumulation, displacement, work, probability, and many other quantities.",
        example: "\\int_0^2x\\,dx=2.",
        note: "A definite integral produces a number, not a family of functions.",
      },
      {
        name: "Fundamental Theorem of Calculus",
        formula: "\\int_a^b f(x)\\,dx=F(b)-F(a)",
        description: "Connects definite integration with antiderivatives.",
        conditions: "F must be an antiderivative of f on the interval.",
        variables: "F'(x)=f(x).",
        use: "The standard method for evaluating many definite integrals.",
        example: "\\int_0^2x\\,dx=[x^2/2]_0^2=2.",
        note: "This theorem is one of the central connections between differentiation and integration.",
      },
      {
        name: "Integration by Substitution",
        formula: "\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du",
        description:
          "Replaces a complicated inner expression with a simpler variable.",
        conditions:
          "The substitution should simplify the integral and be differentiable.",
        variables: "u=g(x).",
        use: "Useful for composite functions.",
        example: "For ∫2x(x²+1)³dx, let u=x²+1 and du=2x dx.",
        note: "For definite integrals, either change the bounds or substitute back.",
      },
      {
        name: "Integration by Parts",
        formula: "\\int u\\,dv=uv-\\int v\\,du",
        description:
          "Transforms an integral involving a product into another integral that may be easier.",
        conditions: "u and v must be differentiable/integrable as required.",
        variables: "u is chosen to differentiate; dv is chosen to integrate.",
        use: "Useful for products involving logarithms, polynomials, exponentials, and trigonometric functions.",
        example: "\\int xe^x\\,dx=xe^x-\\int e^x\\,dx=e^x(x-1)+C.",
        note: "Choosing u effectively is often the key step.",
      },
    ],
  },

  {
    id: "applications",
    name: "Applications of Calculus",
    description:
      "Formulas for motion, optimization, related rates, area, volume, work, and average value.",
    icon: Calculator,
    formulas: [
      {
        name: "Average Rate of Change",
        formula: "\\frac{f(b)-f(a)}{b-a}",
        description:
          "Measures the average change in a function per unit change in its input.",
        conditions: "a≠b.",
        variables: "a and b define the interval.",
        use: "Useful for secant slopes and average velocity.",
        example:
          "If position changes from 10 m to 30 m over 5 s, average velocity=20/5=4 m/s.",
        note: "This is different from instantaneous rate of change.",
      },
      {
        name: "Instantaneous Velocity",
        formula: "v(t)=s'(t)",
        description:
          "Velocity is the derivative of position with respect to time.",
        conditions: "Position must be differentiable.",
        variables: "s(t) is position and t is time.",
        use: "Used to analyze motion.",
        example: "If s(t)=t², then v(t)=2t.",
        note: "Velocity includes direction; speed is the magnitude of velocity.",
      },
      {
        name: "Acceleration",
        formula: "a(t)=v'(t)=s''(t)",
        description: "Acceleration measures the rate of change of velocity.",
        conditions: "Position must be twice differentiable.",
        variables: "s is position, v is velocity, t is time.",
        use: "Used in mechanics and motion analysis.",
        example: "If s(t)=t³, then v=3t² and a=6t.",
        note: "Acceleration can be negative depending on the chosen coordinate direction.",
      },
      {
        name: "Critical Point",
        formula: "f'(c)=0\\quad\\text{or}\\quad f'(c)\\text{ does not exist}",
        description:
          "A critical point occurs where the derivative is zero or undefined, provided c is in the domain.",
        conditions: "c must belong to the domain of f.",
        variables: "c is the candidate critical number.",
        use: "Used in optimization and graph analysis.",
        example: "For f(x)=x², f'(x)=2x, so x=0 is a critical point.",
        note: "Not every critical point is a maximum or minimum.",
      },
      {
        name: "Second Derivative Test",
        formula:
          "f'(c)=0,\\quad f''(c)>0\\Rightarrow\\text{local minimum},\\quad f''(c)<0\\Rightarrow\\text{local maximum}",
        description: "Uses concavity to classify certain critical points.",
        conditions: "f must be twice differentiable near c.",
        variables: "c is a critical point.",
        use: "Useful for local optimization.",
        example:
          "For f(x)=x², f'(0)=0 and f''(0)=2>0, so x=0 is a local minimum.",
        note: "If f''(c)=0, the test is inconclusive.",
      },
      {
        name: "Tangent Line",
        formula: "y-f(a)=f'(a)(x-a)",
        description:
          "Gives the equation of the tangent line to a differentiable function at x=a.",
        conditions: "f must be differentiable at a.",
        variables: "a is the point of tangency.",
        use: "Useful for local approximation and geometric interpretation.",
        example: "For f(x)=x² at a=2: y-4=4(x-2).",
        note: "The derivative supplies the slope of the tangent line.",
      },
      {
        name: "Linear Approximation",
        formula: "f(x)\\approx f(a)+f'(a)(x-a)",
        description: "Approximates a function near a using its tangent line.",
        conditions: "x should be reasonably close to a.",
        variables: "a is the nearby reference point.",
        use: "Useful for estimation and error analysis.",
        example:
          "A nearby convenient value can be used to estimate square roots or other functions.",
        note: "The approximation generally becomes better as x approaches a.",
      },
      {
        name: "Average Value of a Function",
        formula: "f_{\\mathrm{avg}}=\\frac{1}{b-a}\\int_a^b f(x)\\,dx",
        description:
          "Gives the average value of a continuous function over an interval.",
        conditions: "a≠b and the integral exists.",
        variables: "a and b are interval endpoints.",
        use: "Useful for average temperature, velocity, density, and other quantities.",
        example: "For f(x)=x on [0,2], f_avg=(1/2)∫₀²x dx=1.",
        note: "The average value is not generally the same as the value at the midpoint.",
      },
      {
        name: "Area Under a Curve",
        formula: "A=\\int_a^b f(x)\\,dx",
        description:
          "Calculates signed area between a function and the x-axis.",
        conditions: "The function must be integrable.",
        variables: "a and b are the interval endpoints.",
        use: "Used for geometric area and accumulated quantities.",
        example: "\\int_0^2x\\,dx=2.",
        note: "If f becomes negative, the definite integral gives signed rather than total geometric area.",
      },
      {
        name: "Volume by Disks",
        formula: "V=\\pi\\int_a^b[R(x)]^2\\,dx",
        description:
          "Calculates the volume of a solid formed by rotating a region around an axis.",
        conditions: "R(x) describes the radius and the integral exists.",
        variables: "R(x) is the radius of a cross-sectional disk.",
        use: "Useful for solids of revolution.",
        example:
          "Rotating y=x from 0 to 1 about the x-axis gives V=π∫₀¹x²dx=π/3.",
        note: "Choose the disk method when perpendicular slices produce disks or washers.",
      },
      {
        name: "Volume by Shells",
        formula: "V=2\\pi\\int_a^b(\\text{radius})(\\text{height})\\,dx",
        description: "Calculates volume using cylindrical shells.",
        conditions:
          "The radius and height functions must describe the region correctly.",
        variables:
          "Radius is the distance to the axis; height is the shell height.",
        use: "Useful when shells simplify the setup compared with disks.",
        example:
          "For rotation about the y-axis, radius is commonly x and height is f(x).",
        note: "Always identify the axis of rotation before choosing a method.",
      },
      {
        name: "Work",
        formula: "W=\\int_a^bF(x)\\,dx",
        description: "Calculates work done by a variable force along a path.",
        conditions:
          "The force must be integrable over the displacement interval.",
        variables: "F(x) is force and x is displacement.",
        use: "Used in mechanics and physical applications.",
        example: "If F(x)=2x, then W from 0 to 3 is ∫₀³2x dx=9.",
        note: "For constant force, this reduces to W=Fd when force and displacement align.",
      },
    ],
  },

  {
    id: "series",
    name: "Sequences & Series",
    description:
      "Sequences, convergence, geometric series, power series, and Taylor/Maclaurin expansions.",
    icon: Sigma,
    formulas: [
      {
        name: "Arithmetic Sequence",
        formula: "a_n=a_1+(n-1)d",
        description:
          "Finds the nth term of an arithmetic sequence with constant difference.",
        conditions:
          "The difference between consecutive terms must be constant.",
        variables: "a₁ is the first term and d is the common difference.",
        use: "Useful for sequences with linear growth.",
        example: "For 2,5,8,..., a_n=2+3(n-1).",
        note: "The difference between consecutive terms is d.",
      },
      {
        name: "Arithmetic Series",
        formula: "S_n=\\frac n2[2a_1+(n-1)d]",
        description:
          "Finds the sum of the first n terms of an arithmetic sequence.",
        conditions: "The sequence must have constant difference d.",
        variables: "n is the number of terms.",
        use: "Useful for finite sums with linear patterns.",
        example: "1+3+5+7=16.",
        note: "An equivalent formula is S_n=n(a_1+a_n)/2.",
      },
      {
        name: "Geometric Sequence",
        formula: "a_n=a_1r^{n-1}",
        description: "Finds the nth term of a sequence with constant ratio.",
        conditions: "The ratio between consecutive nonzero terms is constant.",
        variables: "r is the common ratio.",
        use: "Useful for exponential growth or decay patterns.",
        example: "For 2,6,18,..., a_n=2(3^{n-1}).",
        note: "The ratio can be negative or fractional.",
      },
      {
        name: "Finite Geometric Series",
        formula: "S_n=a_1\\frac{1-r^n}{1-r}",
        description:
          "Calculates the sum of the first n terms of a geometric sequence.",
        conditions: "r≠1.",
        variables: "a₁ is the first term and r is the common ratio.",
        use: "Useful for finite repeated growth or decay.",
        example: "1+2+4+8=15.",
        note: "When r=1, the sum is simply na₁.",
      },
      {
        name: "Infinite Geometric Series",
        formula: "S=\\frac{a_1}{1-r},\\quad |r|<1",
        description:
          "Gives the finite sum approached by an infinite geometric series.",
        conditions: "|r|<1 is essential.",
        variables: "a₁ is the first term and r is the common ratio.",
        use: "Useful for infinite repeated processes and convergence problems.",
        example: "1+1/2+1/4+\\cdots=2.",
        note: "If |r|≥1, the infinite geometric series does not converge to a finite sum.",
      },
      {
        name: "Series Convergence",
        formula:
          "\\sum a_n\\text{ converges if }\\lim_{N\\to\\infty}\\sum_{n=1}^Na_n\\text{ exists and is finite}",
        description:
          "A series converges when the sequence of its partial sums approaches a finite number.",
        conditions: "The partial sums must have a finite limit.",
        variables: "aₙ represents the terms of the series.",
        use: "Fundamental for deciding whether an infinite sum has a finite value.",
        example: "\\sum_{n=1}^{\\infty}(1/2)^n=1.",
        note: "The condition aₙ→0 is necessary but not sufficient for convergence.",
      },
      {
        name: "Necessary Condition for Series Convergence",
        formula:
          "\\sum a_n\\text{ convergent}\\Rightarrow\\lim_{n\\to\\infty}a_n=0",
        description:
          "The terms of a convergent infinite series must approach zero.",
        conditions: "This is a necessary condition, not a sufficient one.",
        variables: "aₙ is the nth term.",
        use: "Quickly detects many divergent series.",
        example:
          "For the harmonic series, 1/n→0, so this test alone is inconclusive.",
        note: "Do not conclude convergence merely because the terms approach zero.",
      },
      {
        name: "Ratio Test",
        formula: "L=\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|",
        description:
          "A convergence test based on the ratio of consecutive absolute term values.",
        conditions:
          "If L<1, absolute convergence; if L>1, divergence; if L=1, inconclusive.",
        variables: "aₙ are the series terms.",
        use: "Especially useful for factorials and exponential terms.",
        example:
          "The ratio test is commonly effective for series containing n! or aⁿ.",
        note: "The L=1 case requires another test.",
      },
      {
        name: "Root Test",
        formula: "L=\\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}",
        description:
          "Tests convergence using the nth root of the absolute value of the terms.",
        conditions:
          "L<1 gives absolute convergence; L>1 gives divergence; L=1 is inconclusive.",
        variables: "aₙ are the series terms.",
        use: "Useful when terms contain nth powers.",
        example: "For aₙ=(1/3)ⁿ, the nth root is 1/3, so the series converges.",
        note: "It is often particularly convenient for power-series expressions.",
      },
      {
        name: "Taylor Series",
        formula: "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n",
        description:
          "Represents a function as an infinite power series centered at a.",
        conditions:
          "The series must converge to the function on the region being considered.",
        variables: "a is the center; f⁽ⁿ⁾ is the nth derivative.",
        use: "Useful for approximation, analysis, and numerical computation.",
        example: "For e^x centered at 0, e^x=1+x+x²/2!+x³/3!+⋯.",
        note: "Having derivatives of all orders does not automatically guarantee convergence to the function.",
      },
      {
        name: "Maclaurin Series",
        formula: "f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n",
        description: "A Taylor series centered specifically at x=0.",
        conditions:
          "The series must converge to the function on the interval considered.",
        variables: "All derivatives are evaluated at zero.",
        use: "Useful for standard approximations.",
        example: "\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots.",
        note: "Maclaurin series are simply Taylor series with a=0.",
      },
    ],
  },

  {
    id: "multivariable",
    name: "Multivariable Calculus",
    description:
      "Partial derivatives, gradients, directional derivatives, tangent planes, optimization, and multiple integrals.",
    icon: Sparkles,
    formulas: [
      {
        name: "Function of Two Variables",
        formula: "z=f(x,y)",
        description: "Maps two independent variables to an output value.",
        conditions: "The function must be defined at the point being studied.",
        variables:
          "x and y are independent variables; z is the dependent variable.",
        use: "Used to model surfaces and quantities depending on two inputs.",
        example: "f(x,y)=x²+y² describes a paraboloid.",
        note: "Multivariable functions can be visualized as surfaces in three-dimensional space.",
      },
      {
        name: "Partial Derivative with Respect to x",
        formula: "f_x=\\frac{\\partial f}{\\partial x}",
        description:
          "Measures how f changes with x while holding the other variables constant.",
        conditions: "The relevant partial derivative must exist.",
        variables: "Other independent variables are treated as constants.",
        use: "Useful for analyzing surfaces and multivariable rates of change.",
        example: "For f=x²y, f_x=2xy.",
        note: "Only differentiate with respect to the selected variable.",
      },
      {
        name: "Partial Derivative with Respect to y",
        formula: "f_y=\\frac{\\partial f}{\\partial y}",
        description:
          "Measures how f changes with y while holding other variables constant.",
        conditions: "The partial derivative must exist.",
        variables: "Other independent variables remain fixed.",
        use: "Useful for multivariable optimization and modeling.",
        example: "For f=x²y, f_y=x².",
        note: "x is treated as a constant when differentiating with respect to y.",
      },
      {
        name: "Gradient",
        formula: "\\nabla f=\\langle f_x,f_y,f_z\\rangle",
        description: "Collects the first partial derivatives into a vector.",
        conditions: "The required partial derivatives must exist.",
        variables:
          "The components are partial derivatives with respect to each coordinate.",
        use: "Used for directional change, optimization, tangent planes, and geometry.",
        example: "For f=x²+y², ∇f=⟨2x,2y⟩.",
        note: "The gradient points in the direction of greatest local increase.",
      },
      {
        name: "Directional Derivative",
        formula: "D_{\\mathbf u}f=\\nabla f\\cdot\\mathbf u",
        description:
          "Measures the rate of change of f in a specified direction.",
        conditions: "u must be a unit vector for the standard formula.",
        variables: "u is the direction vector.",
        use: "Useful when the direction of movement matters.",
        example: "If ∇f=⟨2,3⟩ and u=⟨1/√2,1/√2⟩, then Dᵤf=5/√2.",
        note: "Normalize the direction vector before using the standard formula.",
      },
      {
        name: "Tangent Plane",
        formula: "z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b)",
        description: "Approximates a surface by a plane near a point.",
        conditions: "The function should be differentiable near (a,b).",
        variables: "(a,b) is the point of tangency.",
        use: "Useful for local approximation and surface geometry.",
        example: "For f=x²+y² at (1,1), z-2=2(x-1)+2(y-1).",
        note: "The tangent plane is the multivariable analogue of the tangent line.",
      },
      {
        name: "Divergence",
        formula:
          "\\nabla\\cdot\\mathbf F=\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}",
        description:
          "Measures the local tendency of a vector field to spread outward.",
        conditions: "The required partial derivatives must exist.",
        variables: "F=⟨P,Q,R⟩.",
        use: "Important in fluid flow and physical field models.",
        example: "For F=⟨x,y,z⟩, ∇·F=3.",
        note: "Positive divergence indicates net local outward behavior; negative indicates inward behavior.",
      },
      {
        name: "Curl",
        formula: "\\nabla\\times\\mathbf F",
        description:
          "Measures local rotational behavior of a three-dimensional vector field.",
        conditions: "The required first partial derivatives must exist.",
        variables: "F is a vector field.",
        use: "Used in fluid dynamics and electromagnetism.",
        example: "For F=⟨−y,x,0⟩, curl F=⟨0,0,2⟩.",
        note: "Curl is itself a vector in three dimensions.",
      },
      {
        name: "Double Integral",
        formula: "\\iint_Rf(x,y)\\,dA",
        description: "Integrates a function over a two-dimensional region.",
        conditions: "The function must be integrable over R.",
        variables: "R is the region of integration.",
        use: "Used for volume, mass, probability, and area-weighted quantities.",
        example: "\\iint_R1\\,dA gives the area of R.",
        note: "The region can often be described using iterated integrals.",
      },
      {
        name: "Triple Integral",
        formula: "\\iiint_Vf(x,y,z)\\,dV",
        description: "Integrates a function over a three-dimensional volume.",
        conditions: "The function must be integrable over V.",
        variables: "V is the volume region.",
        use: "Used for mass, volume, density, and physical quantities.",
        example: "\\iiint_V1\\,dV gives the volume of V.",
        note: "Coordinate changes such as cylindrical or spherical coordinates can simplify some problems.",
      },
    ],
  },

  {
    id: "vector",
    name: "Vector Calculus",
    description:
      "Line integrals, surface integrals, Green's theorem, Stokes' theorem, and the Divergence theorem.",
    icon: Compass,
    formulas: [
      {
        name: "Vector Field",
        formula:
          "\\mathbf F(x,y,z)=\\langle P(x,y,z),Q(x,y,z),R(x,y,z)\\rangle",
        description: "Assigns a vector to every point in a region.",
        conditions: "The component functions must be defined in the region.",
        variables: "P, Q, and R are scalar component functions.",
        use: "Used to model velocity, force, electric fields, and other spatial quantities.",
        example: "F=⟨−y,x,0⟩ describes a rotational field around the z-axis.",
        note: "Vector fields can contain both magnitude and direction information.",
      },
      {
        name: "Line Integral of a Scalar Field",
        formula: "\\int_C f\\,ds",
        description: "Accumulates a scalar quantity along a curve.",
        conditions: "The function and curve must be sufficiently well behaved.",
        variables: "C is the curve and ds is an element of arc length.",
        use: "Used for mass of wires, arc-length-weighted quantities, and geometry.",
        example:
          "A constant density integrated over a curve gives mass proportional to its length.",
        note: "Parameterization is commonly used to evaluate line integrals.",
      },
      {
        name: "Line Integral of a Vector Field",
        formula: "\\int_C\\mathbf F\\cdot d\\mathbf r",
        description:
          "Measures the accumulated component of a vector field along a curve.",
        conditions: "The field should be defined along the curve.",
        variables: "d r is the differential displacement vector.",
        use: "Commonly used to calculate work done by a force field.",
        example: "Work along a path C can be written as W=∫C F·dr.",
        note: "For conservative fields, the result depends only on the endpoints.",
      },
      {
        name: "Green's Theorem",
        formula: "\\oint_C(P\\,dx+Q\\,dy)=\\iint_R\\left(Q_x-P_y\\right)dA",
        description:
          "Relates a line integral around a closed planar curve to a double integral over the enclosed region.",
        conditions:
          "C should be a positively oriented, sufficiently smooth simple closed curve, with appropriate smoothness of P and Q.",
        variables: "R is the region enclosed by C.",
        use: "Converts between circulation around a boundary and a quantity over an area.",
        example:
          "A difficult closed-curve integral can sometimes be transformed into an area integral.",
        note: "Orientation matters: positive orientation is counterclockwise.",
      },
      {
        name: "Stokes' Theorem",
        formula:
          "\\oint_C\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS",
        description:
          "Relates circulation around a boundary curve to curl through a surface.",
        conditions:
          "The field and surface must satisfy the required smoothness and orientation conditions.",
        variables: "C is the boundary of S and n is the chosen unit normal.",
        use: "Useful for converting line integrals into surface integrals and vice versa.",
        example:
          "A circulation integral around a boundary can be replaced by a curl integral over the surface.",
        note: "The orientation of C and n must follow the right-hand rule.",
      },
      {
        name: "Divergence Theorem",
        formula:
          "\\iiint_V(\\nabla\\cdot\\mathbf F)\\,dV=\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS",
        description:
          "Relates the divergence inside a volume to the outward flux through its closed surface.",
        conditions:
          "The surface must be closed and the field sufficiently smooth.",
        variables: "V is the volume and S is its boundary.",
        use: "Useful for calculating flux through closed surfaces.",
        example:
          "A complicated surface flux can sometimes be converted into a simpler volume integral.",
        note: "The normal vector is outward-pointing.",
      },
    ],
  },

  {
    id: "differential-equations",
    name: "Differential Equations",
    description:
      "Common formulas and solution methods for first-order and second-order differential equations.",
    icon: Sparkles,
    formulas: [
      {
        name: "Basic First-Order ODE",
        formula: "\\frac{dy}{dx}=f(x,y)",
        description:
          "A first-order ordinary differential equation relates a function to its first derivative.",
        conditions:
          "The function must satisfy the equation on the relevant interval.",
        variables:
          "y is the dependent variable and x is the independent variable.",
        use: "Used to model changing systems.",
        example: "dy/dx=ky models exponential growth or decay.",
        note: "The order of an ODE is determined by its highest derivative.",
      },
      {
        name: "Separable Differential Equation",
        formula: "\\frac{dy}{dx}=g(x)h(y)",
        description:
          "An equation whose variables can be separated into different sides.",
        conditions:
          "The equation must be rearrangeable and necessary divisions must be valid.",
        variables: "g depends on x and h depends on y.",
        use: "One of the most common exact solution techniques for first-order ODEs.",
        example: "dy/dx=ky gives dy/y=k dx.",
        note: "Dividing by h(y) can exclude solutions where h(y)=0, so those solutions should be checked separately.",
      },
      {
        name: "Exponential Growth/Decay",
        formula: "y(t)=y_0e^{kt}",
        description:
          "Models continuous growth or decay at a rate proportional to the current amount.",
        conditions:
          "The model assumes the relative growth rate remains constant.",
        variables:
          "y₀ is the initial amount and k is the growth/decay constant.",
        use: "Population, finance, radioactive decay, and many other models.",
        example: "If y₀=100 and k=0.05, then y(t)=100e^{0.05t}.",
        note: "k>0 represents growth and k<0 represents decay.",
      },
      {
        name: "First-Order Linear ODE",
        formula: "y'+P(x)y=Q(x)",
        description:
          "Standard form of a first-order linear differential equation.",
        conditions: "P and Q should be suitably continuous on the interval.",
        variables: "P and Q are known functions.",
        use: "Solved using an integrating factor.",
        example: "y'+2y=x is a first-order linear ODE.",
        note: "The integrating factor is μ(x)=e^{∫P(x)dx}.",
      },
      {
        name: "Integrating Factor",
        formula: "\\mu(x)=e^{\\int P(x)\\,dx}",
        description:
          "Transforms a first-order linear ODE into a form that can be integrated directly.",
        conditions: "The equation must be in standard linear form.",
        variables: "P(x) comes from y'+P(x)y=Q(x).",
        use: "Standard method for first-order linear ODEs.",
        example: "For y'+2y=x, μ=e^{2x}.",
        note: "The constant of integration in the exponent can be omitted because it only scales the integrating factor.",
      },
      {
        name: "Second-Order Linear ODE",
        formula: "ay''+by'+cy=0",
        description:
          "A common homogeneous second-order linear differential equation with constant coefficients.",
        conditions: "a, b, c are constants and a≠0.",
        variables: "y is the unknown function.",
        use: "Used in oscillations, circuits, mechanics, and engineering.",
        example: "y''-3y'+2y=0.",
        note: "The characteristic equation determines the form of the solution.",
      },
      {
        name: "Characteristic Equation",
        formula: "ar^2+br+c=0",
        description:
          "Algebraic equation associated with a constant-coefficient second-order homogeneous ODE.",
        conditions:
          "The differential equation must have constant coefficients in the stated form.",
        variables: "r represents exponential solution behavior.",
        use: "Used to solve second-order linear homogeneous ODEs.",
        example: "For y''-3y'+2y=0, r²-3r+2=0 gives r=1,2.",
        note: "Repeated and complex roots require special solution forms.",
      },
    ],
  },

  {
    id: "numerical",
    name: "Numerical Methods",
    description:
      "Approximation formulas for derivatives, integrals, equations, and roots.",
    icon: Calculator,
    formulas: [
      {
        name: "Forward Difference",
        formula: "f'(x)\\approx\\frac{f(x+h)-f(x)}{h}",
        description:
          "Approximates the derivative using the current point and a point ahead.",
        conditions:
          "h should be sufficiently small but not so small that floating-point error dominates.",
        variables: "h is the step size.",
        use: "Useful when only values to the right are available.",
        example: "Use h=0.001 to estimate the derivative numerically.",
        note: "The method has truncation error of order O(h).",
      },
      {
        name: "Backward Difference",
        formula: "f'(x)\\approx\\frac{f(x)-f(x-h)}{h}",
        description:
          "Approximates the derivative using the current point and a point behind it.",
        conditions: "h must be chosen appropriately.",
        variables: "h is the step size.",
        use: "Useful near a boundary where values ahead are unavailable.",
        example: "Use known values at x and x−h to estimate f'(x).",
        note: "Like forward difference, the basic truncation error is O(h).",
      },
      {
        name: "Central Difference",
        formula: "f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}",
        description:
          "Uses points on both sides of x for a derivative approximation.",
        conditions: "Function values should be available on both sides.",
        variables: "h is the step size.",
        use: "Often more accurate than basic forward/backward differences.",
        example:
          "For sufficiently smooth functions, reducing h can produce a strong approximation.",
        note: "The basic central-difference truncation error is O(h²).",
      },
      {
        name: "Second Derivative Approximation",
        formula: "f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}",
        description:
          "Approximates the second derivative using symmetric function values.",
        conditions: "Function values should be available at x−h, x, and x+h.",
        variables: "h is the step size.",
        use: "Useful for numerical curvature and differential-equation calculations.",
        example:
          "For f(x)=x², the approximation approaches 2 as h becomes small.",
        note: "Very small h can increase round-off error.",
      },
      {
        name: "Trapezoidal Rule",
        formula:
          "T_n=\\frac h2\\left[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)\\right]",
        description:
          "Approximates a definite integral by replacing the curve with trapezoids.",
        conditions:
          "The function should be sufficiently smooth for useful accuracy.",
        variables: "h=(b-a)/n.",
        use: "Numerical integration when an exact antiderivative is unavailable.",
        example:
          "Increasing n generally improves the approximation for smooth functions.",
        note: "The composite trapezoidal rule has error related to h² for sufficiently smooth functions.",
      },
      {
        name: "Simpson's Rule",
        formula:
          "S_n=\\frac h3\\left[f(x_0)+4\\sum f(x_{\\mathrm{odd}})+2\\sum f(x_{\\mathrm{even}})+f(x_n)\\right]",
        description:
          "Approximates an integral using quadratic rather than linear interpolation.",
        conditions: "n must be even in the standard composite Simpson's rule.",
        variables: "h=(b-a)/n.",
        use: "Often provides high accuracy for smooth functions.",
        example:
          "For a smooth function, Simpson's rule can achieve much better accuracy than a comparable basic trapezoidal approximation.",
        note: "The composite rule requires an even number of subintervals.",
      },
      {
        name: "Midpoint Rule",
        formula: "M_n=h\\sum_{i=1}^{n}f(x_i^*)",
        description:
          "Approximates an integral by evaluating the function at the midpoint of each subinterval.",
        conditions: "The function should be integrable and reasonably smooth.",
        variables: "x_i^* is the midpoint of subinterval i.",
        use: "Useful for simple numerical integration.",
        example: "For each interval [xᵢ₋₁,xᵢ], evaluate f at (xᵢ₋₁+xᵢ)/2.",
        note: "The composite midpoint rule has O(h²) error for sufficiently smooth functions.",
      },
      {
        name: "Newton-Raphson",
        formula: "x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}",
        description:
          "Iteratively improves an estimate of a root using the tangent line.",
        conditions:
          "f'(x_n) must be nonzero and the starting guess should be suitable.",
        variables: "x_n is the current approximation.",
        use: "Fast root-finding for many differentiable functions.",
        example: "Starting near a known root can lead to rapid convergence.",
        note: "A poor initial guess can cause divergence or convergence to an unexpected root.",
      },
      {
        name: "Bisection Method",
        formula: "m=\\frac{a+b}{2}",
        description: "Repeatedly halves an interval containing a root.",
        conditions:
          "For the standard theorem, f must be continuous and f(a)f(b)<0.",
        variables: "a and b are endpoints of the current interval.",
        use: "Reliable numerical root finding.",
        example:
          "Evaluate f(m) and retain the half interval containing the sign change.",
        note: "Bisection is slower than Newton-Raphson but has strong convergence guarantees under its assumptions.",
      },
    ],
  },

  {
    id: "complex",
    name: "Complex Numbers",
    description:
      "Useful complex-number formulas that appear in advanced calculus, differential equations, and applied mathematics.",
    icon: FunctionSquare,
    formulas: [
      {
        name: "Complex Number",
        formula: "z=a+bi",
        description:
          "Represents a complex number using a real part and an imaginary part.",
        conditions: "a and b are real numbers.",
        variables: "i²=-1.",
        use: "Useful in differential equations, signals, and advanced mathematics.",
        example: "z=3+4i.",
        note: "a is the real part and b is the imaginary coefficient.",
      },
      {
        name: "Complex Conjugate",
        formula: "\\overline z=a-bi",
        description: "Changes the sign of the imaginary component.",
        conditions: "z=a+bi.",
        variables: "a and b are real.",
        use: "Useful for complex division and magnitude calculations.",
        example: "If z=3+4i, then z̄=3−4i.",
        note: "z z̄=a²+b².",
      },
      {
        name: "Complex Magnitude",
        formula: "|z|=\\sqrt{a^2+b^2}",
        description:
          "Measures the distance of a complex number from the origin.",
        conditions: "z=a+bi.",
        variables: "a and b are real and imaginary components.",
        use: "Useful in complex analysis and applied mathematics.",
        example: "|3+4i|=5.",
        note: "The magnitude is always nonnegative.",
      },
      {
        name: "Euler's Formula",
        formula: "e^{ix}=\\cos x+i\\sin x",
        description:
          "Connects exponential and trigonometric functions through complex numbers.",
        conditions: "x is real.",
        variables: "i²=-1.",
        use: "Fundamental in Fourier analysis, differential equations, and signal processing.",
        example: "e^{i\\pi}=-1.",
        note: "Euler's formula is one of the most important identities connecting different areas of mathematics.",
      },
    ],
  },
];

function FormulaCard({ formula, onCopy, copied }) {
  return (
    <article className="pml-card p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="pml-eyebrow">Formula</div>

          <h3 className="mt-2 text-xl font-semibold leading-tight text-[#17202A]">
            {formula.name}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => onCopy(formula.formula)}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#DEDEDB] bg-white text-[#687481] transition hover:border-[#2F5BEA] hover:text-[#2F5BEA]"
          title="Copy formula"
          aria-label={`Copy ${formula.name} formula`}
        >
          {copied ? (
            <Check size={17} className="text-[#18794E]" />
          ) : (
            <Copy size={17} />
          )}
        </button>
      </div>

      <div className="my-6 overflow-x-auto rounded-lg border border-[#E9E9E6] bg-[#F8F7F4] px-4 py-5">
        <MathRenderer>{formula.formula}</MathRenderer>
      </div>

      <div className="space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-[#17324D]">
            What it means
          </h4>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">
            {formula.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#17324D]">Conditions</h4>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">
            {formula.conditions}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#17324D]">Variables</h4>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">
            {formula.variables}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#17324D]">
            When to use it
          </h4>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">{formula.use}</p>
        </div>

        <div className="rounded-lg border border-[#E9E9E6] bg-[#F8F7F4] p-4">
          <div className="flex items-start gap-3">
            <Lightbulb size={17} className="mt-0.5 shrink-0 text-[#2F5BEA]" />

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#687481]">
                Example
              </p>

              <p className="mt-1 text-sm leading-6 text-[#34404C]">
                {formula.example}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#E9E9E6] bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#687481]">
            Important note
          </p>

          <p className="mt-1 text-sm leading-6 text-[#34404C]">
            {formula.note}
          </p>
        </div>
      </div>
    </article>
  );
}

function CategoryOverview({ onSelect }) {
  return (
    <section className="border-y border-[#E9E9E6] bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="pml-eyebrow">Browse by topic</div>

            <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
              A structured calculus reference
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#687481]">
            Start with the topic closest to your problem, then use the
            explanations and conditions to decide whether a formula applies.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {formulaCategories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelect(category.id)}
                className="group flex items-center gap-3 border border-[#DEDEDB] bg-[#F8F7F4] p-4 text-left transition hover:border-[#2F5BEA] hover:bg-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#EEF3FF] text-[#2F5BEA]">
                  <Icon size={18} />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#17202A]">
                    {category.name}
                  </span>

                  <span className="mt-0.5 block text-xs text-[#687481]">
                    {category.formulas.length} entries
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Formulas() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedFormula, setCopiedFormula] = useState("");

  const totalFormulas = formulaCategories.reduce(
    (total, category) => total + category.formulas.length,
    0,
  );

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return formulaCategories
      .filter(
        (category) =>
          activeCategory === "all" || category.id === activeCategory,
      )
      .map((category) => {
        if (!query) {
          return category;
        }

        const formulas = category.formulas.filter((formula) =>
          [
            formula.name,
            formula.formula,
            formula.description,
            formula.conditions,
            formula.variables,
            formula.use,
            formula.example,
            formula.note,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query),
        );

        return {
          ...category,
          formulas,
        };
      })
      .filter((category) => category.formulas.length > 0);
  }, [search, activeCategory]);

  const visibleFormulaCount = filteredCategories.reduce(
    (total, category) => total + category.formulas.length,
    0,
  );

  async function copyFormula(formula) {
    try {
      await navigator.clipboard.writeText(formula);

      setCopiedFormula(formula);

      window.setTimeout(() => {
        setCopiedFormula("");
      }, 1500);
    } catch {
      // Clipboard may be unavailable in some browsers or contexts.
    }
  }

  function resetFilters() {
    setSearch("");
    setActiveCategory("all");
  }

  function selectCategory(categoryId) {
    setActiveCategory(categoryId);

    window.setTimeout(() => {
      const element = document.getElementById(categoryId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  }

  return (
    <>
      <SEO
        title="Calculus Formulas | Complete Calculus Formula Reference"
        description="Explore a comprehensive calculus formula reference covering algebra, trigonometry, limits, continuity, derivatives, integrals, applications, sequences, series, multivariable calculus, vector calculus, differential equations, numerical methods, and complex numbers."
        canonical="/formulas"
      />

      <PageHeader
        eyebrow="Reference"
        title="Calculus Formulas"
        description="A structured reference for the formulas, identities, rules, and methods used throughout calculus."
      />

      <CategoryOverview onSelect={selectCategory} />

      <main className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="pml-eyebrow">How to use this reference</div>

              <h2 className="mt-3 text-2xl font-semibold text-[#17202A] sm:text-3xl">
                Understand the formula before using it
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Memorizing a formula is only part of solving a calculus problem.
                You also need to know what the symbols represent, which
                assumptions are required, and what mathematical quantity the
                formula describes.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#34404C]">
                Each entry in this reference therefore includes the formula, its
                meaning, conditions, variables, typical use, an example, and an
                important note. Search across all of these fields or browse the
                categories above.
              </p>
            </div>

            <div className="pml-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                  <BookOpen size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#687481]">
                    Reference size
                  </p>

                  <p className="text-2xl font-bold text-[#17324D]">
                    {totalFormulas}
                  </p>

                  <p className="text-sm text-[#687481]">formulas and methods</p>
                </div>
              </div>

              <div className="my-5 border-t border-[#E9E9E6]" />

              <div className="flex items-center gap-2 text-sm text-[#34404C]">
                <Clipboard size={16} />
                <span>Copy formulas directly</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#34404C]">
                <Search size={16} />
                <span>Search explanations and examples</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and filters */}
        <section className="sticky top-[4.1rem] z-30 mb-12 border-y border-[#DEDEDB] bg-[#F8F7F4]/95 py-4 backdrop-blur">
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
                placeholder="Search formulas, concepts, examples, or methods..."
                className="pml-input w-full pl-11"
                aria-label="Search calculus formulas"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={
                  activeCategory === "all"
                    ? "pml-btn-primary shrink-0"
                    : "pml-btn-secondary shrink-0"
                }
              >
                All
              </button>

              {formulaCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={
                      activeCategory === category.id
                        ? "pml-btn-primary shrink-0"
                        : "pml-btn-secondary shrink-0"
                    }
                  >
                    <Icon size={15} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Result count */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-[#687481]">
            Showing{" "}
            <span className="font-semibold text-[#34404C]">
              {visibleFormulaCount}
            </span>{" "}
            {visibleFormulaCount === 1 ? "formula" : "formulas"}
            {search && (
              <>
                {" "}
                matching <strong className="text-[#34404C]">"{search}"</strong>
              </>
            )}
          </p>

          {(search || activeCategory !== "all") && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-semibold text-[#2F5BEA] hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Results */}
        {filteredCategories.length === 0 ? (
          <section className="pml-card border-dashed p-12 text-center">
            <Search
              size={38}
              className="mx-auto text-[#687481]"
              strokeWidth={1.5}
            />

            <h2 className="mt-5 text-xl font-semibold text-[#17202A]">
              No formulas found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#687481]">
              No reference entry matches your current search. Try a broader term
              such as derivative, integral, limit, series, or trigonometry.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="pml-btn-primary mt-6"
            >
              Show all formulas
            </button>
          </section>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-32"
                >
                  <div className="mb-7 flex items-start gap-4 border-b border-[#DEDEDB] pb-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-[#17202A]">
                        {category.name}
                      </h2>

                      <p className="mt-1 max-w-3xl text-sm leading-6 text-[#687481]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {category.formulas.map((formula) => (
                      <FormulaCard
                        key={`${category.id}-${formula.name}`}
                        formula={formula}
                        onCopy={copyFormula}
                        copied={copiedFormula === formula.formula}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* How to choose a formula */}
        <section className="mt-20">
          <div className="pml-card p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2F5BEA]">
                <Calculator size={22} />
              </div>

              <div>
                <div className="pml-eyebrow">Problem-solving method</div>

                <h2 className="mt-2 text-2xl font-semibold text-[#17202A]">
                  How to choose the right formula
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#687481]">
                  Selecting a formula is often more important than performing
                  the arithmetic. Start with the mathematical quantity the
                  problem is asking you to determine.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Identify the quantity",
                  text: "Decide what you are trying to calculate: a limit, rate of change, accumulated quantity, root, approximation, derivative, integral, or another mathematical quantity.",
                },
                {
                  number: "02",
                  title: "Check the conditions",
                  text: "Look for restrictions such as nonzero denominators, convergence requirements, differentiability, domain restrictions, or numerical-method assumptions.",
                },
                {
                  number: "03",
                  title: "Verify the result",
                  text: "Check units, signs, magnitude, domain, and whether the result makes sense in the original mathematical or physical context.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border border-[#E9E9E6] bg-[#F8F7F4] p-5"
                >
                  <span className="font-mono text-sm font-semibold text-[#2F5BEA]">
                    {item.number}
                  </span>

                  <h3 className="mt-3 font-semibold text-[#17202A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    {item.text}
                  </p>
                </div>
              ))}
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
                  Important: formulas have conditions
                </h2>

                <p className="mt-2 text-sm leading-7 text-[#34404C]">
                  A formula should not be applied automatically just because its
                  symbols appear to match a problem. Check its assumptions
                  first. For example, the quotient rule requires a nonzero
                  denominator, the infinite geometric-series formula requires
                  |r|&lt;1, Simpson's rule requires an even number of
                  subintervals in its standard composite form, and a standard
                  directional derivative uses a unit direction vector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational note */}
        <section className="mt-8">
          <div className="border border-[#DEDEDB] bg-white p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <BookOpen size={21} className="mt-0.5 shrink-0 text-[#17324D]" />

              <div>
                <h2 className="font-semibold text-[#17202A]">
                  A formula reference is only one part of learning calculus
                </h2>

                <p className="mt-2 text-sm leading-7 text-[#34404C]">
                  Calculus becomes much easier when formulas are connected to
                  their meaning. A derivative describes local change, an
                  integral describes accumulation, a limit describes behavior
                  near a point, and a series represents an infinite process
                  through its partial sums. Use this reference together with the
                  Practical Math Lab learning guides, worked examples, and
                  calculators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final reference note */}
        <section className="mt-8">
          <div className="bg-[#17324D] p-8 text-white sm:p-10">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                A better way to study
              </div>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Use formulas as tools, not just facts to memorize.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                When you encounter a formula, ask three questions: What does it
                describe? Under what conditions is it valid? Why does it solve
                this particular problem? Those questions turn a formula sheet
                into a genuine mathematical reference.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
