import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  FileQuestion,
  Home,
  Search,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";

const usefulLinks = [
  {
    title: "Home",
    description: "Return to the Practical Math Lab homepage.",
    path: "/",
    icon: Home,
  },
  {
    title: "Learn Calculus",
    description: "Explore calculus topics from foundations to advanced ideas.",
    path: "/learn",
    icon: FileQuestion,
  },
  {
    title: "Calculators",
    description: "Use interactive tools to explore mathematical problems.",
    path: "/calculators",
    icon: Calculator,
  },
];

export default function NotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <SEO
        title="Page Not Found | Practical Math Lab"
        description="The page you are looking for could not be found. Explore Practical Math Lab's calculus lessons, calculators, formulas, and educational resources."
        canonical="/404"
      />

      <PageHeader
        eyebrow="404 • Page not found"
        title="We couldn't find that page."
        description="The address may be incorrect, the page may have moved, or the resource may no longer be available."
      />

      <main>
        {/* ================================================================ */}
        {/* 404 INTRO                                                         */}
        {/* ================================================================ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF3FF] text-[#17324D]">
                <Search size={28} strokeWidth={1.8} />
              </div>

              <p className="mt-7 font-mono text-sm font-semibold tracking-[0.16em] text-[#2F5BEA]">
                ERROR 404
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#17202A] sm:text-4xl">
                This mathematical path does not exist.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#687481] sm:text-base">
                The page you requested could not be located. You can return to
                the previous page or continue exploring the calculus resources
                available on Practical Math Lab.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="pml-btn-secondary"
                >
                  <ArrowLeft size={17} />
                  Go back
                </button>

                <Link to="/" className="pml-btn-primary !text-white">
                  Go to homepage
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* USEFUL DESTINATIONS                                                */}
        {/* ================================================================ */}

        <section className="pml-section bg-white">
          <div className="pml-container">
            <div className="max-w-2xl">
              <div className="pml-eyebrow">Continue exploring</div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#17202A] sm:text-3xl">
                You may be looking for one of these resources
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687481]">
                Practical Math Lab connects explanations, formulas, interactive
                calculators, applications, and numerical methods in one learning
                system.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {usefulLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group border border-[#DEDEDB] bg-white p-6 transition-colors hover:border-[#BFC8D2] hover:bg-[#F8F7F4]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#17324D]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#17202A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#687481]">
                      {item.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold !text-[#2F5BEA] transition-colors group-hover:!text-[#2448C7]">
                      Explore
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* QUICK NAVIGATION                                                   */}
        {/* ================================================================ */}

        <section className="pml-section bg-[#F8F7F4]">
          <div className="pml-container">
            <div className="border-y border-[#DEDEDB] py-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="pml-eyebrow">Quick navigation</div>

                  <p className="mt-2 text-sm leading-6 text-[#687481]">
                    Looking for a specific part of the site?
                  </p>
                </div>

                <nav
                  aria-label="404 page navigation"
                  className="flex flex-wrap gap-x-6 gap-y-3"
                >
                  <Link
                    to="/learn"
                    className="text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
                  >
                    Learn
                  </Link>

                  <Link
                    to="/calculators"
                    className="text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
                  >
                    Calculators
                  </Link>

                  <Link
                    to="/formulas"
                    className="text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
                  >
                    Formulas
                  </Link>

                  <Link
                    to="/rules"
                    className="text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
                  >
                    Rules
                  </Link>

                  <Link
                    to="/applications"
                    className="text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
                  >
                    Applications
                  </Link>

                  <Link
                    to="/reference"
                    className="text-sm font-semibold !text-[#2F5BEA] hover:!text-[#2448C7]"
                  >
                    Reference
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* FINAL CTA                                                         */}
        {/* ================================================================ */}

        <section className="border-t border-[#DEDEDB] bg-[#17324D]">
          <div className="pml-container py-14 sm:py-16">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Keep learning
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  There is plenty of mathematics to explore.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Start with the foundations, review a formula, or use an
                  interactive calculator to investigate a calculus idea.
                </p>
              </div>

              <Link
                to="/learn"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold !text-[#17324D] transition-colors hover:bg-slate-100 hover:!text-[#10283F]"
              >
                Explore calculus
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
