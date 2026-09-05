"use client";

const links = [
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  // { href: "#skills", label: "Skills" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* <a href="#top" className="font-mono text-sm text-ink-100">
          <span className="text-signal">~/</span>srushti-kulkarni
        </a> */}
        <nav className="hidden gap-7 font-mono text-[15px] text-ink-300 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-signal">
              {l.label}
            </a>
          ))}
        </nav>
        {/* <a
          href="mailto:srushtikulkarni81@gmail.com"
          className="rounded-md border border-ink-line px-3 py-1.5 font-mono text-[12px] text-ink-100 transition-colors hover:border-signal/50 hover:text-signal"
        >
          say hi ↗
        </a> */}

        <a
          href="https://drive.google.com/file/d/1-FzPZX8cJLWmtdDfRcC--fN2HkNbvT2n/view?usp=drive_link"
          className="rounded-md bg-signal px-5 py-3 font-mono text-[14px] font-medium text-[#fff9f2] transition-transform hover:-translate-y-0.5 hover:opacity-90"
        >
          Download Resume ↓
        </a>

      </div>
    </header>
  );
}
