import { Tag } from "./Tag";
import { Reveal } from "./Reveal";

const education = [
  { degree: "M.Tech, Computer Science & Engineering", school: "Walchand College of Engineering, Sangli", period: "2023 — 2025", detail: "CGPA: 8.35" },
  { degree: "B.Tech, Computer Science & Engineering", school: "Government College of Engineering, Jalgaon", period: "2021 — 2023", detail: "CGPA: 8.50" },
];

const certifications = ["CI/CD — Coursera", "Google Cloud Facilitator Program", "Machine Learning Workshop"];

export function Credentials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 border-t border-ink-line/70">
      <div className="grid gap-14 sm:grid-cols-2">
        <Reveal>
          <Tag tone="muted">[education]</Tag>
          <div className="mt-6 space-y-6">
            {education.map((e) => (
              <div key={e.degree}>
                <h3 className="font-display text-[15px] font-semibold text-ink-100">{e.degree}</h3>
                <p className="mt-1 text-[13.5px] text-ink-300">{e.school}</p>
                <p className="mt-1 font-mono text-[11px] text-ink-500">{e.period} · {e.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Tag tone="muted">[certifications + achievements]</Tag>
          <div className="mt-6 space-y-2.5">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-2.5 text-[13.5px] text-ink-300">
                <span className="h-1 w-1 rounded-full bg-signal shrink-0" />
                {c}
              </div>
            ))}
            <div className="flex items-center gap-2.5 text-[13.5px] text-ink-300">
              <span className="h-1 w-1 rounded-full bg-warn shrink-0" />
              Smart India Hackathon 2022 — Finalist &amp; Runner-Up (Team IT-EMERALDS)
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
