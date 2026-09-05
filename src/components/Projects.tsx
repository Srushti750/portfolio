import { Tag } from "./Tag";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Vulnerability Identification in Open Source Software",
    kind: "Thesis",
    description:
      "Examined hundreds of GitHub commits to identify patterns associated with insecure code changes. Compared static, dynamic, and ML-based detection approaches, then proposed a deep learning model using commit metadata, code changes, and NLP-based commit message analysis to flag risky commits reducing false positives through iterative feature engineering.",
    stack: ["Python", "Flask", "Deep Learning", "MongoDB", "ReactJS"],
    link: "https://drive.google.com/file/d/1gVEbzfcAqWPWYTWpy8SH7IXx_qbMm85c/view",
  },
  {
    title: "Customer Churn Prediction",
    kind: "Thesis",
    description:
      "Analyzed thousands of customer records to identify behavioral patterns behind churn. Assessed multiple ML and DL models against different evaluation metrics, then optimized prediction reliability through feature selection, model comparison, and accuracy tuning.",
    stack: ["Python", "AI/ML", "TensorFlow"],
    link: "https://drive.google.com/file/d/1Naw0EwoJkZiSJfBY_ci5wgAtPxmXZ4Jc/view",
  },
  {
    title: "Full-Stack Fitness Management Application",
    kind: "Project",
    description:
      "A full-stack fitness management web application built with Java and Spring Boot. Users can log workouts, manage fitness goals, track progress, and view activity statistics. The application follows a three-tier architecture with Spring controllers, service-layer business logic, Hibernate repositories, and MySQL persistence.",
    stack: ["Docker", "Jenkins", "Python", "CI/CD"],
    stack: ["Java", "Spring Boot", "Hibernate", "JSP", "MySQL", "JavaScript", "Maven"],
    link: "https://github.com/Srushti750/fullstack_fitness_management_application.git",
  },
  // {
  //   title: "Restaurant Management App",
  //   kind: "Parchi Pvt. Ltd. Internship",
  //   description:
  //     "A mobile app for restaurant owners to manage food items and daily operations, with automated invoice tracking and daily financial summaries.",
  //   stack: ["Flutter", "MongoDB", "Figma"],
  //   link: "",
  // },

];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 border-t border-ink-line/70">
      {/* <Reveal>
        <h2 className="font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
          Projects
        </h2>
      </Reveal> */}
      <Reveal>
        <Tag tone="muted">Projects</Tag>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <div className="group flex h-full flex-col rounded-lg border border-ink-line bg-ink-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_16px_40px_-20px_rgba(255,107,53,0.35)]">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">
                {p.kind}
              </span>
              <h3 className="mt-2 font-display text-[17px] font-semibold text-ink-100">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-300">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-ink-line bg-black/[0.02] px-2 py-1 font-mono text-[10.5px] text-ink-300 transition-colors group-hover:border-signal/30 group-hover:text-signal"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="relative reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
                <a
                  href={p.link}
                  className="rounded-md bg-signal px-5 py-3 font-mono text-[13px] font-medium text-[#fff9f2] transition-transform hover:-translate-y-0.5 hover:opacity-90"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
