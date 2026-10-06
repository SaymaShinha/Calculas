import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  Code2,
  FileText,
  FlaskConical,
  GraduationCap,
  Library,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const groups = [
  {
    label: "Learn",
    icon: BookOpen,
    items: [
      ["Learning Hub", "/learn", "Explore calculus topics"],
      [
        "Foundations",
        "/learn/foundations",
        "Functions and mathematical foundations",
      ],
      ["Limits", "/learn/limits", "Understand limits and continuity"],
      [
        "Derivatives",
        "/learn/derivatives",
        "Rates of change and differentiation",
      ],
      ["Integrals", "/learn/integrals", "Accumulation and integration"],
      ["Series", "/learn/series", "Sequences and infinite series"],
      [
        "Multivariable Calculus",
        "/learn/multivariable-calculus",
        "Functions of several variables",
      ],
      [
        "Vector Calculus",
        "/learn/vector-calculus",
        "Vector fields and line integrals",
      ],
      [
        "Differential Equations",
        "/learn/differential-equations",
        "Equations involving derivatives",
      ],
    ],
  },
  {
    label: "Calculators",
    icon: Calculator,
    items: [
      ["All Calculators", "/calculators", "Browse the calculator collection"],
      [
        "Function Grapher",
        "/calculators/function",
        "Explore functions visually",
      ],
      ["Limit Calculator", "/calculators/limit", "Evaluate limits numerically"],
      [
        "Derivative Calculator",
        "/calculators/derivative",
        "Calculate derivatives",
      ],
      [
        "Integral Calculator",
        "/calculators/integral",
        "Calculate definite integrals",
      ],
      ["Series Calculator", "/calculators/series", "Explore numerical series"],
      ["Optimization Calculator", "/calculators/optimization", "Find extrema"],
    ],
  },
  {
    label: "Reference",
    icon: Library,
    items: [
      ["Formulas", "/formulas", "Essential calculus formulas"],
      ["Rules", "/rules", "Derivative and integration rules"],
      ["Reference", "/reference", "Quick mathematical reference"],
    ],
  },
  {
    label: "Applications",
    icon: FlaskConical,
    items: [
      ["Applications", "/applications", "Calculus in the real world"],
      [
        "Motion",
        "/applications/motion",
        "Position, velocity, and acceleration",
      ],
      [
        "Optimization",
        "/applications/optimization",
        "Solve optimization problems",
      ],
      ["Area", "/applications/area", "Area under curves"],
      ["Volume", "/applications/volume", "Volumes using integration"],
      ["Work", "/applications/work", "Work and accumulation"],
    ],
  },
  {
    label: "Implementation",
    icon: Code2,
    items: [
      ["Implementation", "/implementation", "Numerical methods in code"],
      [
        "Numerical Derivative",
        "/implementation/numerical-derivative",
        "Approximate derivatives",
      ],
      [
        "Numerical Integration",
        "/implementation/numerical-integration",
        "Approximate integrals",
      ],
      [
        "Numerical Methods",
        "/implementation/numerical-methods",
        "Root finding and numerical techniques",
      ],
    ],
  },
];

function DesktopGroup({ group, open, onToggle }) {
  const Icon = group.icon;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={[
          "flex items-center gap-1.5 rounded-md px-3 py-2",
          "text-[13px] font-medium text-slate-600",
          "transition-colors duration-150",
          "hover:bg-slate-100 hover:text-slate-900",
          open ? "bg-slate-100 text-slate-900" : "",
        ].join(" ")}
        aria-expanded={open}
      >
        <Icon size={15} strokeWidth={1.8} />
        <span>{group.label}</span>
        <ChevronDown
          size={14}
          className={[
            "transition-transform duration-150",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[320px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/8">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-sm font-bold text-slate-900">{group.label}</p>
            <p className="mt-0.5 text-xs text-slate-500">
              Explore Practical Math Lab
            </p>
          </div>

          <div className="max-h-[420px] overflow-y-auto p-2">
            {group.items.map(([label, path, description]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  [
                    "block rounded-lg px-3 py-2.5",
                    "transition-colors duration-150",
                    isActive
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")
                }
              >
                <div className="text-sm font-semibold">{label}</div>

                <div className="mt-0.5 text-xs leading-5 text-slate-500">
                  {description}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({ group, open, onToggle, onNavigate }) {
  const Icon = group.icon;

  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left"
      >
        <span className="flex items-center gap-3 text-sm font-semibold text-slate-800">
          <Icon size={17} className="text-slate-500" />
          {group.label}
        </span>

        <ChevronDown
          size={17}
          className={[
            "text-slate-400 transition-transform",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="space-y-1 bg-slate-50 px-3 pb-3">
          {group.items.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  "block rounded-lg px-3 py-2.5 text-sm",
                  isActive
                    ? "bg-white font-semibold text-blue-700 shadow-sm"
                    : "text-slate-600",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setDesktopOpen(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDesktopOpen(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#17324d] text-white">
            <GraduationCap size={20} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <div className="truncate text-[15px] font-bold tracking-tight text-slate-900">
              Practical Math Lab
            </div>

            <div className="hidden text-[10px] font-medium tracking-[0.08em] text-slate-400 sm:block">
              CALCULUS · THEORY · APPLICATION
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 xl:flex">
          {groups.map((group, index) => (
            <DesktopGroup
              key={group.label}
              group={group}
              open={desktopOpen === index}
              onToggle={() =>
                setDesktopOpen(desktopOpen === index ? null : index)
              }
            />
          ))}

          <div className="mx-2 h-6 w-px bg-slate-200" />

          <NavLink
            to="/about"
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-2 text-[13px] font-medium",
                isActive
                  ? "text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={{ color: "#ffffff" }}
            className="ml-1 rounded-md bg-[#17324d] px-3.5 py-2 text-[13px] font-semibold transition-colors hover:bg-[#10283f]"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-slate-200 bg-white xl:hidden">
          <div className="border-b border-slate-100 px-4 py-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-slate-900"
            >
              Practical Math Lab
            </Link>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Calculus from first principles to practical applications.
            </p>
          </div>

          {groups.map((group, index) => (
            <MobileGroup
              key={group.label}
              group={group}
              open={mobileGroup === index}
              onToggle={() =>
                setMobileGroup(mobileGroup === index ? null : index)
              }
              onNavigate={() => setMobileOpen(false)}
            />
          ))}

          <div className="grid grid-cols-2 gap-2 p-4">
            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-[#17324d] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
