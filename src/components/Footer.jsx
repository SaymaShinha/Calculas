import { ArrowUp, Mail, Sigma } from "lucide-react";
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

const resourceLinks = [
  ["Formula Reference", "/formulas"],
  ["Calculus Rules", "/rules"],
  ["Real-World Applications", "/applications"],
  ["Numerical Implementation", "/implementation"],
  ["Reference", "/reference"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="mt-20 border-t border-[#DEDEDB] bg-[#F8F7F4]">
      <div className="pml-container py-14">
        {/* ================================================================ */}
        {/* MAIN FOOTER                                                      */}
        {/* ================================================================ */}

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 !text-[#17202A]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#17324D] text-white">
                <Sigma size={23} strokeWidth={1.8} />
              </div>

              <div>
                <div className="font-bold tracking-tight">
                  Practical Math Lab
                </div>

                <div className="text-xs text-[#687481]">
                  Calculus made understandable
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#687481]">
              A practical learning resource for understanding calculus through
              concepts, formulas, worked examples, interactive calculators,
              applications, and numerical methods.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center border border-[#BFC8D2] bg-white px-4 py-2 text-sm font-semibold !text-[#34404C] transition-colors hover:border-[#17324D] hover:bg-[#17324D] hover:!text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#BFC8D2] bg-white px-4 py-2 text-sm font-semibold !text-[#34404C] transition-colors hover:border-[#17324D] hover:bg-[#17324D] hover:!text-white"
              >
                <Mail size={15} strokeWidth={1.8} />
                Contact
              </Link>
            </div>
          </div>

          {/* Learn */}

          <div>
            <h3 className="mb-4 text-sm font-bold text-[#17202A]">
              Learn Calculus
            </h3>

            <ul className="space-y-2.5 text-sm">
              {learnLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="!text-[#687481] transition-colors hover:!text-[#17324D]"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li className="pt-1">
                <Link
                  to="/learn"
                  className="font-semibold !text-[#2F5BEA] transition-colors hover:!text-[#2448C7]"
                >
                  Explore all topics
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Calculators */}

          <div>
            <h3 className="mb-4 text-sm font-bold text-[#17202A]">
              Calculators
            </h3>

            <ul className="space-y-2.5 text-sm">
              {toolLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="!text-[#687481] transition-colors hover:!text-[#17324D]"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li className="pt-1">
                <Link
                  to="/calculators"
                  className="font-semibold !text-[#2F5BEA] transition-colors hover:!text-[#2448C7]"
                >
                  View all calculators
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-4 text-sm font-bold text-[#17202A]">Resources</h3>

            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="!text-[#687481] transition-colors hover:!text-[#17324D]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================================================================ */}
        {/* DIVIDER                                                           */}
        {/* ================================================================ */}

        <div className="my-10 h-px bg-[#DEDEDB]" />

        {/* ================================================================ */}
        {/* BOTTOM FOOTER                                                     */}
        {/* ================================================================ */}

        <div className="flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
          <div className="text-[#687481]">
            © {year} Practical Math Lab. Educational resource.
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="!text-[#687481] transition-colors hover:!text-[#17324D]"
            >
              Privacy
            </Link>

            <Link
              to="/terms-of-use"
              className="!text-[#687481] transition-colors hover:!text-[#17324D]"
            >
              Terms
            </Link>

            <Link
              to="/cookie-policy"
              className="!text-[#687481] transition-colors hover:!text-[#17324D]"
            >
              Cookies
            </Link>

            <button
              type="button"
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1 !text-[#687481] transition-colors hover:!text-[#17324D]"
            >
              Back to top
              <ArrowUp size={14} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
