import {
  ArrowUp,
  BookOpen,
  Calculator,
  GitBranch,
  Mail,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

const learnLinks = [
  ["Foundations", "/learn/foundations"],
  ["Limits", "/learn/limits"],
  ["Derivatives", "/learn/derivatives"],
  ["Integrals", "/learn/integrals"],
];

const toolLinks = [
  ["Function Grapher", "/calculators/function"],
  ["Limit Calculator", "/calculators/limit"],
  ["Derivative Calculator", "/calculators/derivative"],
  ["Integral Calculator", "/calculators/integral"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-base-300 bg-base-200/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-content">
                <Sigma size={24} />
              </div>

              <div>
                <div className="font-bold">Practical Math Lab</div>
                <div className="text-xs text-base-content/50">
                  Calculus made understandable
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-base-content/65">
              A practical learning resource for understanding calculus through
              concepts, formulas, worked examples, interactive calculators,
              visualizations, applications, and numerical methods.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link to="/about" className="btn btn-sm btn-outline">
                About
              </Link>

              <Link to="/contact" className="btn btn-sm btn-outline">
                <Mail size={15} />
                Contact
              </Link>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="mb-4 font-semibold">Learn Calculus</h3>

            <ul className="space-y-2.5 text-sm text-base-content/65">
              {learnLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="transition hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/learn"
                  className="font-medium text-primary hover:underline"
                >
                  Explore all topics →
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-4 font-semibold">Calculators</h3>

            <ul className="space-y-2.5 text-sm text-base-content/65">
              {toolLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="transition hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/calculators"
                  className="font-medium text-primary hover:underline"
                >
                  View all calculators →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>

            <ul className="space-y-2.5 text-sm text-base-content/65">
              <li>
                <Link to="/formulas" className="hover:text-primary">
                  Formula Reference
                </Link>
              </li>

              <li>
                <Link to="/rules" className="hover:text-primary">
                  Calculus Rules
                </Link>
              </li>

              <li>
                <Link to="/applications" className="hover:text-primary">
                  Real-World Applications
                </Link>
              </li>

              <li>
                <Link to="/implementation" className="hover:text-primary">
                  Numerical Implementation
                </Link>
              </li>

              <li>
                <Link to="/reference" className="hover:text-primary">
                  Reference
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-base-300" />

        <div className="flex flex-col gap-5 text-sm text-base-content/55 md:flex-row md:items-center md:justify-between">
          <div>© {year} Practical Math Lab. Educational resource.</div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy
            </Link>

            <Link to="/terms-of-use" className="hover:text-primary">
              Terms
            </Link>

            <Link to="/cookie-policy" className="hover:text-primary">
              Cookies
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-1 hover:text-primary"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
