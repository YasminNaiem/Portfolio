import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
} from "react-icons/si";

import {
  FaFileExcel,
  FaChartColumn,
  FaTable,
  FaCalculator,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa6";

import type { IconType } from "react-icons";

const skills = [
  "POWER BI",
  "EXCEL",
  "SQL SERVER",
  "POWER QUERY",
  "DAX",
  "DATA ANALYSIS",
  "DATA VISUALIZATION",
  "DASHBOARD DESIGN",
  "DATA MODELING",
  "STATISTICS",
  "PYTHON",
  "PANDAS",
  "NUMPY",
  "SCIKIT-LEARN",
  "GIT",
  "GITHUB",
];

const SKILL_STYLE: Record<string, { icon: IconType }> = {
  PYTHON: { icon: SiPython },
  PANDAS: { icon: SiPandas },
  NUMPY: { icon: SiNumpy },
  "SCIKIT-LEARN": { icon: SiScikitlearn },

  "SQL SERVER": { icon: FaDatabase },
  "POWER BI": { icon: FaChartColumn },
  EXCEL: { icon: FaFileExcel },
  "POWER QUERY": { icon: FaTable },
  DAX: { icon: FaCalculator },

  "DATA ANALYSIS": { icon: FaChartLine },
  "DATA VISUALIZATION": { icon: FaChartLine },
  "DASHBOARD DESIGN": { icon: FaChartLine },
  "DATA MODELING": { icon: FaChartLine },
  STATISTICS: { icon: FaChartLine },

  GIT: { icon: SiGit },
  GITHUB: { icon: SiGithub },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
          My Toolbox & Skills
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
          The tools and technologies I use to clean, analyze, visualize, and
          transform data into meaningful business insights.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {skills.map((skill) => {
          const style = SKILL_STYLE[skill] ?? { icon: FaChartLine };
          const Icon = style.icon;

          return (
            <div
              key={skill}
              className="panel flex flex-col items-center gap-3 rounded-2xl px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--coral)] hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--coral)]/10 text-2xl text-[var(--coral)]">
                <Icon />
              </span>

              <span className="text-center text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}