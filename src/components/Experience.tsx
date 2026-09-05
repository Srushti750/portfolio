import { Tag } from "./Tag";
import { Reveal } from "./Reveal";

const jobs = [
  {
    company: "Dell Technologies",
    role: "Software Engineering Intern",
    period: "June 2024 — April 2025",
    bullets: [
      "Developed REST APIs for internal software components.",
      "Integrated JaCoCo-based code coverage into Docker workflows.",
      "Worked with Git, Docker, CI/CD and software testing.",
      "Participated in debugging and integration activities.",
      "Worked containerized automated testing framework for Dell DM5500 appliances, integrating backend services, databases, and CI/CD pipelines.",
      "Developed automation scripts for GitHub-related workflows and real-time Grafana dashboards to monitor system performance, test execution status, and code coverage metrics.",
    ],
  },
  {
    company: "Parchi Pvt. Ltd.",
    role: "Flutter Developer Intern",
    period: "May 2023 - July 2023",
    bullets: [
      "Built a restaurant management mobile app with Flutter and MongoDB to organize food items and daily operations.",
      "Implemented automated invoice tracking and daily financial summaries, cutting manual bookkeeping effort for restaurant owners.",
      "Refined usability and workflow efficiency through iterative UI/UX work with designers in Figma.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-10 border-t border-ink-line/70">
      <Reveal>
        <Tag tone="muted">Work Experience</Tag>
      </Reveal>
      {/* <Reveal delay={80}>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
          Deploy history
        </h2>
      </Reveal> */}

      <div className="mt-10 space-y-10">
        {jobs.map((job, i) => (
          <Reveal key={job.company} delay={i * 100}>
          <div className="relative rounded-lg border border-ink-line bg-ink-panel p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(255,107,53,0.25)] sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-100">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-sm text-ink-300">{job.company}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-ink-500">{job.period}</span>
                {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-signal"> */}
                  {/* <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" /> */}
                  {/* {job.status} */}
                {/* </span> */}
              </div>
            </div>

            <ul className="mt-5 space-y-2.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink-300">
                  <span className="mt-1 font-mono text-[11px] text-ink-500 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
