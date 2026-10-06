import { createBrowserRouter } from "react-router-dom";

// Root
import App from "./App.jsx";

// General pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

// Learn
import Learn from "./pages/learn/Learn.jsx";
import Foundations from "./pages/learn/Foundations.jsx";
import Limits from "./pages/learn/Limits.jsx";
import Derivatives from "./pages/learn/Derivatives.jsx";
import Integrals from "./pages/learn/Integrals.jsx";
import Series from "./pages/learn/Series.jsx";
import Multivariable from "./pages/learn/Multivariable.jsx";
import VectorCalculus from "./pages/learn/VectorCalculus.jsx";
import DifferentialEquations from "./pages/learn/DifferentialEquations.jsx";

// Calculators
import Calculators from "./pages/calculators/Calculators.jsx";
import FunctionGrapher from "./pages/calculators/FunctionGrapher.jsx";
import LimitCalculator from "./pages/calculators/LimitCalculator.jsx";
import DerivativeCalculator from "./pages/calculators/DerivativeCalculator.jsx";
import IntegralCalculator from "./pages/calculators/IntegralCalculator.jsx";
import SeriesCalculator from "./pages/calculators/SeriesCalculator.jsx";
import OptimizationCalculator from "./pages/calculators/OptimizationCalculator.jsx";

// Formulas
import Formulas from "./pages/formulas/Formulas.jsx";

// Rules
import Rules from "./pages/rules/Rules.jsx";

// Applications
import Applications from "./pages/applications/Applications.jsx";
import Motion from "./pages/applications/Motion.jsx";
import Optimization from "./pages/applications/Optimization.jsx";
import Area from "./pages/applications/Area.jsx";
import Volume from "./pages/applications/Volume.jsx";
import Work from "./pages/applications/Work.jsx";

// Implementation
import Implementation from "./pages/implementation/Implementation.jsx";
import NumericalDerivative from "./pages/implementation/NumericalDerivative.jsx";
import NumericalIntegration from "./pages/implementation/NumericalIntegration.jsx";
import NumericalMethods from "./pages/implementation/NumericalMethods.jsx";

// Reference
import Reference from "./pages/reference/Reference.jsx";

// Legal
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/legal/TermsOfUse.jsx";
import CookiePolicy from "./pages/legal/CookiePolicy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      /* ------------------------------------------------------------------ */
      /* GENERAL                                                            */
      /* ------------------------------------------------------------------ */

      {
        index: true,
        Component: Home,
      },

      {
        path: "about",
        Component: About,
      },

      {
        path: "contact",
        Component: Contact,
      },

      /* ------------------------------------------------------------------ */
      /* LEARN                                                              */
      /* ------------------------------------------------------------------ */

      {
        path: "learn",
        Component: Learn,
      },

      {
        path: "learn/foundations",
        Component: Foundations,
      },

      {
        path: "learn/limits",
        Component: Limits,
      },

      {
        path: "learn/derivatives",
        Component: Derivatives,
      },

      {
        path: "learn/integrals",
        Component: Integrals,
      },

      {
        path: "learn/series",
        Component: Series,
      },

      {
        path: "learn/multivariable-calculus",
        Component: Multivariable,
      },

      {
        path: "learn/vector-calculus",
        Component: VectorCalculus,
      },

      {
        path: "learn/differential-equations",
        Component: DifferentialEquations,
      },

      /* ------------------------------------------------------------------ */
      /* CALCULATORS                                                        */
      /* ------------------------------------------------------------------ */

      {
        path: "calculators",
        Component: Calculators,
      },

      {
        path: "calculators/function",
        Component: FunctionGrapher,
      },

      {
        path: "calculators/limit",
        Component: LimitCalculator,
      },

      {
        path: "calculators/derivative",
        Component: DerivativeCalculator,
      },

      {
        path: "calculators/integral",
        Component: IntegralCalculator,
      },

      {
        path: "calculators/series",
        Component: SeriesCalculator,
      },

      {
        path: "calculators/optimization",
        Component: OptimizationCalculator,
      },

      /* ------------------------------------------------------------------ */
      /* FORMULAS                                                           */
      /* ------------------------------------------------------------------ */

      {
        path: "formulas",
        Component: Formulas,
      },

      /* ------------------------------------------------------------------ */
      /* RULES                                                              */
      /* ------------------------------------------------------------------ */

      {
        path: "rules",
        Component: Rules,
      },

      /* ------------------------------------------------------------------ */
      /* APPLICATIONS                                                       */
      /* ------------------------------------------------------------------ */

      {
        path: "applications",
        Component: Applications,
      },

      {
        path: "applications/motion",
        Component: Motion,
      },

      {
        path: "applications/optimization",
        Component: Optimization,
      },

      {
        path: "applications/area",
        Component: Area,
      },

      {
        path: "applications/volume",
        Component: Volume,
      },

      {
        path: "applications/work",
        Component: Work,
      },

      /* ------------------------------------------------------------------ */
      /* IMPLEMENTATION                                                     */
      /* ------------------------------------------------------------------ */

      {
        path: "implementation",
        Component: Implementation,
      },

      {
        path: "implementation/numerical-derivative",
        Component: NumericalDerivative,
      },

      {
        path: "implementation/numerical-integration",
        Component: NumericalIntegration,
      },

      {
        path: "implementation/numerical-methods",
        Component: NumericalMethods,
      },

      /* ------------------------------------------------------------------ */
      /* REFERENCE                                                          */
      /* ------------------------------------------------------------------ */

      {
        path: "reference",
        Component: Reference,
      },

      /* ------------------------------------------------------------------ */
      /* LEGAL                                                              */
      /* ------------------------------------------------------------------ */

      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },

      {
        path: "terms-of-use",
        Component: TermsOfUse,
      },

      {
        path: "cookie-policy",
        Component: CookiePolicy,
      },

      /* ------------------------------------------------------------------ */
      /* 404                                                                */
      /* ------------------------------------------------------------------ */

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
