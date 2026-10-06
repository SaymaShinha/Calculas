import { AreaChart, Box, Car, FlaskConical, Hammer } from "lucide-react";

import SEO from "../../components/SEO";
import PageHeader from "../../components/PageHeader";
import TopicCard from "../../components/TopicCard";

const applications = [
  {
    title: "Motion",
    description:
      "Use derivatives and integrals to connect position, velocity, acceleration, and distance.",
    path: "/applications/motion",
    icon: Car,
    level: "Core",
  },
  {
    title: "Optimization",
    description:
      "Use derivatives to find maximum and minimum values in practical design and decision problems.",
    path: "/applications/optimization",
    icon: FlaskConical,
    level: "Core",
  },
  {
    title: "Area",
    description:
      "Understand how definite integrals calculate areas and accumulated quantities.",
    path: "/applications/area",
    icon: AreaChart,
    level: "Core",
  },
  {
    title: "Volume",
    description:
      "Explore volume using cross-sections, disks, washers, and cylindrical shells.",
    path: "/applications/volume",
    icon: Box,
    level: "Intermediate",
  },
  {
    title: "Work",
    description:
      "Apply integration to calculate work when a force varies with position.",
    path: "/applications/work",
    icon: Hammer,
    level: "Intermediate",
  },
];

export default function Applications() {
  return (
    <>
      <SEO
        title="Calculus Applications | Practical Math Lab"
        description="Explore practical applications of calculus including motion, optimization, area, volume, and work."
        canonical="/applications"
      />

      <PageHeader
        eyebrow="Applications"
        title="Where calculus becomes useful"
        description="Calculus is a language for describing change and accumulation. These applications show how its ideas appear in physics, engineering, geometry, economics, and everyday modeling."
        icon={FlaskConical}
      />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <TopicCard key={application.path} {...application} />
          ))}
        </div>
      </main>
    </>
  );
}
