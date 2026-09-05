import { Tag } from "./Tag";
import { Reveal } from "./Reveal";

const groups = [
  { label: "Languages", items: ["Java", "Python", "C", "C++", "JavaScript"] },
  { label: "Frameworks", items: ["Flask", "Spring MVC", "Spring Boot", "TensorFlow"] },
  { label: "Databases", items: ["MySQL", "MongoDB"] },
  { label: "DevOps & Tools", items: ["Docker", "Jenkins", "Git", "Grafana", "Postman", "Linux"] },
  { label: "Core Concepts", items: ["Data Structures & Algorithms", "OOP", "REST APIs", "SDLC", "Automation Frameworks"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 border-t border-ink-line/70">
      <Reveal>
        <Tag tone="muted">[skills]</Tag>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
          Stack
        </h2>
      </Reveal>

      <div className="mt-10 space-y-6">
        {groups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 80}>
            <div className="grid gap-3 border-b border-ink-line/60 pb-6 last:border-none sm:grid-cols-[160px_1fr] sm:items-start">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
                {g.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-ink-line px-3 py-1.5 text-[13px] text-ink-100 transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:text-signal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
