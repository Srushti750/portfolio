import { Tag } from "./Tag";
import { Reveal } from "./Reveal";

export function About() {
  return (
    // <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-t border-ink-line/70">
      <section id="about" className="mx-auto max-w-5xl px-6 border-t border-ink-line/70">
      <Reveal>
        <Tag tone="muted">About Me</Tag>
      </Reveal>
      {/* <div className="mt-6 grid gap-10 sm:grid-cols-[1fr_1.4fr]"> */}
      <div className="mt-6 grid gap-10">
        {/* <Reveal delay={80}>
          <h2 className="font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
            A generalist by design, not by accident.
          </h2>
        </Reveal> */}
        <Reveal delay={160}>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-300">
            <p>
              I’m a Software Engineer with a strong foundation in Computer Science and hands-on experience 
              with Python and Java. I enjoy building clean, reliable, and practical software solutions, 
              with a particular interest in backend development, automation, and problem-solving.
            </p>
            <p>
              My experience includes API development, automation, data processing, debugging, containerization, 
              and performance-focused improvements. I’m passionate about learning new technologies, solving 
              challenging problems, and turning ideas into well-engineered solutions.
            </p>
            <p>
              I’m continuously learning and strengthening my skills in software engineering, data structures 
              and algorithms, system design, and backend technologies. I’m currently open to opportunities 
              where I can contribute, learn, and build reliable software that solves real-world problems.
            </p>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
