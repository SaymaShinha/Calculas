import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  FlaskConical,
  FunctionSquare,
  GraduationCap,
  Menu,
  Sigma,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navGroups = [
  {
    label: "Learn",
    icon: BookOpen,
    items: [
      {
        label: "Learning Hub",
        path: "/learn",
        description: "Explore calculus topics",
      },
      {
        label: "Foundations",
        path: "/learn/foundations",
        description: "Core mathematical ideas",
      },
      {
        label: "Limits",
        path: "/learn/limits",
        description: "Understand limits",
      },
      {
        label: "Derivatives",
        path: "/learn/derivatives",
        description: "Rates of change",
      },
      {
        label: "Integrals",
        path: "/learn/integrals",
        description: "Accumulation and area",
      },
      {
        label: "Series",
        path: "/learn/series",
        description: "Infinite sequences and series",
      },
      {
        label: "Multivariable Calculus",
        path: "/learn/multivariable-calculus",
        description: "Functions of several variables",
      },
      {
        label: "Vector Calculus",
        path: "/learn/vector-calculus",
        description: "Fields, gradients and integrals",
      },
      {
        label: "Differential Equations",
        path: "/learn/differential-equations",
        description: "Model change with equations",
      },
    ],
  },

  {
    label: "Calculators",
    icon: Calculator,
    items: [
      {
        label: "All Calculators",
        path: "/calculators",
        description: "Browse every calculator",
      },
      {
        label: "Function Grapher",
        path: "/calculators/function",
        description: "Visualize functions",
      },
      {
        label: "Limit Calculator",
        path: "/calculators/limit",
        description: "Estimate limits numerically",
      },
      {
        label: "Derivative Calculator",
        path: "/calculators/derivative",
        description: "Estimate derivatives",
      },
      {
        label: "Integral Calculator",
        path: "/calculators/integral",
        description: "Calculate numerical integrals",
      },
      {
        label: "Series Calculator",
        path: "/calculators/series",
        description: "Explore numerical series",
      },
      {
        label: "Optimization",
        path: "/calculators/optimization",
        description: "Find approximate extrema",
      },
    ],
  },

  {
    label: "Reference",
    icon: Sigma,
    items: [
      {
        label: "Formulas",
        path: "/formulas",
        description: "Essential calculus formulas",
      },
      {
        label: "Rules",
        path: "/rules",
        description: "Derivative and integration rules",
      },
      {
        label: "Reference",
        path: "/reference",
        description: "Quick mathematical reference",
      },
    ],
  },

  {
    label: "Applications",
    icon: FunctionSquare,
    items: [
      {
        label: "Applications Hub",
        path: "/applications",
        description: "Calculus in the real world",
      },
      {
        label: "Motion",
        path: "/applications/motion",
        description: "Position, velocity and acceleration",
      },
      {
        label: "Optimization",
        path: "/applications/optimization",
        description: "Optimization problems",
      },
      {
        label: "Area",
        path: "/applications/area",
        description: "Area under curves",
      },
      {
        label: "Volume",
        path: "/applications/volume",
        description: "Volumes of solids",
      },
      {
        label: "Work",
        path: "/applications/work",
        description: "Work using integration",
      },
    ],
  },

  {
    label: "Implementation",
    icon: FlaskConical,
    items: [
      {
        label: "Implementation Hub",
        path: "/implementation",
        description: "Numerical mathematics in code",
      },
      {
        label: "Numerical Derivative",
        path: "/implementation/numerical-derivative",
        description: "Finite difference methods",
      },
      {
        label: "Numerical Integration",
        path: "/implementation/numerical-integration",
        description: "Approximate integrals",
      },
      {
        label: "Numerical Methods",
        path: "/implementation/numerical-methods",
        description: "Algorithms for calculus",
      },
    ],
  },
];

function isGroupActive(items, pathname) {
  return items.some(
    (item) => pathname === item.path || pathname.startsWith(`${item.path}/`),
  );
}

function DesktopDropdown({ group, isOpen, onToggle }) {
  const Icon = group.icon;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
          isOpen ? "bg-primary/10 text-primary" : "hover:bg-base-200"
        }`}
      >
        <Icon size={16} />

        <span>{group.label}</span>

        <ChevronDown
          size={15}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 mt-2 w-[360px] -translate-x-1/2 overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-2xl">
          <div className="max-h-[70vh] overflow-y-auto p-2">
            {group.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-start gap-3 rounded-xl p-3 transition ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-base-200"
                  }`
                }
              >
                <div className="mt-0.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-base-200 text-base-content/70 group-hover:bg-primary/10 group-hover:text-primary">
                    <ChevronDown size={14} className="-rotate-90" />
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.label}</p>

                  <p className="mt-0.5 text-xs leading-5 text-base-content/55">
                    {item.description}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({ group, openGroup, setOpenGroup, onNavigate }) {
  const Icon = group.icon;
  const isOpen = openGroup === group.label;

  return (
    <div className="border-b border-base-300/70 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpenGroup(isOpen ? null : group.label)}
        className="flex w-full items-center justify-between px-3 py-3 text-left"
      >
        <span className="flex items-center gap-3 font-semibold">
          <Icon size={18} className="text-primary" />
          {group.label}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mb-2 space-y-1 rounded-xl bg-base-200/60 p-2">
          {group.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 transition ${
                  isActive ? "bg-primary/10 text-primary" : "hover:bg-base-300"
                }`
              }
            >
              <p className="text-sm font-medium">{item.label}</p>

              <p className="mt-0.5 text-xs text-base-content/55">
                {item.description}
              </p>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);

  const navRef = useRef(null);

  /*
   * Close desktop dropdown when clicking outside
   */
  useEffect(() => {
    function handleOutsideClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /*
   * Close menus whenever the route changes.
   */
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [location.pathname]);

  /*
   * Prevent background scrolling when mobile menu is open.
   */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-base-300/80 bg-base-100/95 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label="Practical Math Lab home"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content shadow-sm transition-transform group-hover:scale-105">
              <GraduationCap size={22} />
            </div>

            <div className="hidden min-[420px]:block">
              <p className="text-sm font-extrabold leading-tight tracking-tight sm:text-base">
                Practical Math Lab
              </p>

              <p className="hidden text-[10px] leading-tight text-base-content/50 sm:block">
                Learn · Calculate · Understand
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navGroups.map((group) => (
              <DesktopDropdown
                key={group.label}
                group={group}
                isOpen={openDropdown === group.label}
                onToggle={() =>
                  setOpenDropdown(
                    openDropdown === group.label ? null : group.label,
                  )
                }
              />
            ))}

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-primary/10 text-primary" : "hover:bg-base-200"
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Desktop right side */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/calculators" className="btn btn-primary btn-sm gap-2">
              <Calculator size={16} />
              Try a Calculator
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="btn btn-square btn-ghost lg:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-base-300 bg-base-100 lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-4rem)] max-w-2xl overflow-y-auto px-4 py-4">
            {/* Mobile quick action */}
            <Link
              to="/calculators"
              onClick={() => setMobileOpen(false)}
              className="mb-4 flex items-center justify-between rounded-2xl bg-primary p-4 text-primary-content shadow-md"
            >
              <div className="flex items-center gap-3">
                <Calculator size={21} />

                <div>
                  <p className="font-bold">Explore Calculators</p>

                  <p className="text-xs opacity-80">
                    Calculate and visualize mathematics
                  </p>
                </div>
              </div>

              <ChevronDown size={18} className="-rotate-90" />
            </Link>

            {/* Mobile groups */}
            <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100">
              {navGroups.map((group) => (
                <MobileGroup
                  key={group.label}
                  group={group}
                  openGroup={mobileGroup}
                  setOpenGroup={setMobileGroup}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </div>

            {/* Mobile static links */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <NavLink
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl border p-3 text-center text-sm font-semibold ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-base-300 hover:bg-base-200"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl border p-3 text-center text-sm font-semibold ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-base-300 hover:bg-base-200"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile footer hint */}
            <div className="mt-5 flex items-center justify-center gap-2 pb-2 text-xs text-base-content/45">
              <Sigma size={14} />
              <span>Practical Math Lab · Calculus made practical</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
