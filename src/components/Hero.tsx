import {
  SiSpringboot,
  SiPython,
  SiFlask,
  SiDocker,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiGrafana,
  SiTensorflow,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Network } from "lucide-react";

const tickerItems = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Flask", Icon: SiFlask, color: "#1c1c1c" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Java", Icon: FaJava, color: "#f89820" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "REST APIs", Icon: Network, color: "#8B5CF6" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
];


export function Hero() {
  const loop = [...tickerItems, ...tickerItems];

  return (
    <section id="top" className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
      {/* ambient blobs */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-signal), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-blob-slow pointer-events-none absolute top-32 -left-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent2), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute top-64 right-1/4 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-warn), transparent 70%)", animationDelay: "-6s" }}
      />

      <div className="relative reveal">
        Hi, My Name is
      </div>

      <h1
        className="relative reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        Srushti Kulkarni
      </h1>

      <h1
        className="relative reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-3xl"
        style={{ animationDelay: "80ms" }}
      >
        I build the systems that make sure{" "}
        <span className="bg-gradient-to-r from-signal via-accent2 to-warn bg-clip-text text-transparent">
          everything else works.
        </span>
      </h1>

      <p
        className="relative reveal mt-6 max-w-xl text-[15px] leading-relaxed text-ink-300 sm:text-base"
        style={{ animationDelay: "160ms" }}
      >
        I’m a software engineer passionate about building reliable backend systems,
        developer tools, and automation solutions. I enjoy solving complex problems,
        working with AI/ML, and turning ideas into practical software.
      </p>

      <div className="relative reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
        <a
          href="#projects"
          className="rounded-md bg-signal px-5 py-3 font-mono text-[13px] font-medium text-[#fff9f2] transition-transform hover:-translate-y-0.5 hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-md border border-ink-line px-5 py-3 font-mono text-[13px] text-ink-100 transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:text-signal"
        >
          Get in touch
        </a>
      </div>

      {/* marquee ticker — skills with logos */}
      {/* <div
        className="group/track relative reveal mt-12 overflow-hidden border-y border-ink-line py-4"
        style={{
          animationDelay: "300ms",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-wrap animate-marquee gap-3 group-hover/track:[animation-play-state:paused]">
          {loop.map(({ name, Icon, color }, i) => (
            <span
              key={`${name}-${i}`}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-ink-line bg-white px-3.5 py-1.5 font-mono text-[12px] text-ink-300 transition-colors duration-300 hover:border-signal/40 hover:text-ink-100"
            >
              <Icon
                aria-hidden
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6"
                style={{ color }}
              />
              {name}
            </span>
          ))}
        </div> 
      </div>*/}


      {/* marquee ticker — skills with logos */}
      <div
        className="group/track relative reveal mt-12 overflow-hidden border-y border-ink-line py-6"
        style={{
          animationDelay: "300ms",
          maskImage: "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
        }}
      >
        <div className="flex w-max animate-marquee-skills gap-3 group-hover/track:[animation-play-state:paused]">
          {loop.map(({ name, Icon, color }, i) => (
            <span
              key={`${name}-${i}`}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-ink-line bg-white px-3.5 py-1.5 font-mono text-[12px] text-ink-300 transition-colors duration-300 hover:border-signal/40 hover:text-ink-100"
            >
              <Icon
                aria-hidden
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6"
                style={{ color }}
              />
              {name}
            </span>
            
          ))}
        </div>

        <style>{`
          @keyframes marquee-skills {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-skills-track {
            animation: marquee-skills 28s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}






// import { Tag } from "./Tag";

// const tickerItems = [
//   "Java", "Spring Boot", "Python", "Flask", "Docker", "Jenkins",
//   "MongoDB", "MySQL", "REST APIs", "GraphQL", "Grafana", "TensorFlow",
// ];

// export function Hero() {
//   const loop = [...tickerItems, ...tickerItems];

//   return (
//     <section id="top" className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
//       {/* ambient blobs */}
//       <div
//         aria-hidden
//         className="animate-blob pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
//         style={{ background: "radial-gradient(circle, var(--color-signal), transparent 70%)" }}
//       />
//       <div
//         aria-hidden
//         className="animate-blob-slow pointer-events-none absolute top-32 -left-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
//         style={{ background: "radial-gradient(circle, var(--color-accent2), transparent 70%)" }}
//       />
//       <div
//         aria-hidden
//         className="animate-blob pointer-events-none absolute top-64 right-1/4 h-56 w-56 rounded-full opacity-20 blur-3xl"
//         style={{ background: "radial-gradient(circle, var(--color-warn), transparent 70%)", animationDelay: "-6s" }}
//       />

//       {/* <div className="relative reveal">
//         <Tag>[status: open to work]</Tag>
//       </div> */}

//       <div className="relative reveal">
//         Hi, My Name is
//       </div>

//       <h1
//         className="relative reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-6xl"
//         style={{ animationDelay: "80ms" }}
//       >
//         Srushti Kulkarni
//       </h1>

//       <h1
//         className="relative reveal mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-100 sm:text-3xl"
//         style={{ animationDelay: "80ms" }}
//       >
//         I build the systems that make sure{" "}
//         <span className="bg-gradient-to-r from-signal via-accent2 to-warn bg-clip-text text-transparent">
//           everything else works.
//         </span>
//       </h1>

//       <p
//         className="relative reveal mt-6 max-w-xl text-[15px] leading-relaxed text-ink-300 sm:text-base"
//         style={{ animationDelay: "160ms" }}
//       >
//         {/* Software Engineer specializing in backend development, test automation,
//         and applied AI/ML. I've spent my time so far building the pipelines,
//         dashboards, and services other engineers rely on without thinking twice about. */}

//         I’m a software engineer passionate about building reliable backend systems, 
//         developer tools, and automation solutions. I enjoy solving complex problems, 
//         working with AI/ML, and turning ideas into practical software.
//       </p>

//       <div className="relative reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
//         <a
//           href="#projects"
//           className="rounded-md bg-signal px-5 py-3 font-mono text-[13px] font-medium text-[#fff9f2] transition-transform hover:-translate-y-0.5 hover:opacity-90"
//         >
//           View projects
//         </a>
//         <a
//           href="#contact"
//           className="rounded-md border border-ink-line px-5 py-3 font-mono text-[13px] text-ink-100 transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:text-signal"
//         >
//           Get in touch
//         </a>
//       </div>

//       {/* marquee ticker */}
//       {/* <div
//         className="relative reveal mt-12 overflow-hidden border-y border-ink-line py-3"
//         style={{
//           animationDelay: "300ms",
//           maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
//           WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
//         }}
//       >
//         <div className="flex w-max animate-marquee gap-3">
//           {loop.map((item, i) => (
//             <span
//               key={`${item}-${i}`}
//               className="shrink-0 rounded-full border border-ink-line bg-white px-3.5 py-1.5 font-mono text-[12px] text-ink-300"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div> */}


//     </section>
//   );
// }
