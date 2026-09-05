"use client";

import { useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight, Network } from "lucide-react";
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

function SkillsSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }

  function scrollByAmount(amount: number) {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    scrollStartX.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    if (!isDragging.current || !el) return;
    const delta = e.clientX - dragStartX.current;
    el.scrollLeft = scrollStartX.current - delta;
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    isDragging.current = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
    updateEdges();
  }

  return (
    <div className="relative reveal mt-12" style={{ animationDelay: "300ms" }}>
      <div
        className="relative overflow-hidden border-y border-ink-line"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent)",
        }}
      >
        <div
          ref={trackRef}
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="no-scrollbar flex cursor-grab gap-3 overflow-x-auto scroll-smooth py-6 active:cursor-grabbing"
          style={{ scrollSnapType: "x proximity" }}
        >
          {tickerItems.map(({ name, Icon, color }) => (
            <span
              key={name}
              className="group flex shrink-0 select-none items-center gap-2 rounded-full border border-ink-line bg-white px-3.5 py-1.5 font-mono text-[13px] text-ink-300 transition-colors duration-300 hover:border-signal/40 hover:text-ink-100"
              style={{ scrollSnapAlign: "start" }}
            >
              <Icon
                aria-hidden
                className="h-5.5 w-5.5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6"
                style={{ color }}
              />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* edge controls */}
      <button
        type="button"
        aria-label="Scroll skills left"
        onClick={() => scrollByAmount(-220)}
        disabled={atStart}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-ink-line bg-white text-ink-300 shadow-sm transition-opacity hover:text-signal disabled:pointer-events-none disabled:opacity-0"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Scroll skills right"
        onClick={() => scrollByAmount(220)}
        disabled={atEnd}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-ink-line bg-white text-ink-300 shadow-sm transition-opacity hover:text-signal disabled:pointer-events-none disabled:opacity-0"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export function Hero() {
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

      {/* skills — horizontal slider */}
      <SkillsSlider />
    </section>
  );
}




// import {
//   SiSpringboot,
//   SiPython,
//   SiFlask,
//   SiDocker,
//   SiJenkins,
//   SiMongodb,
//   SiMysql,
//   SiGraphql,
//   SiGrafana,
//   SiTensorflow,
// } from "react-icons/si";
// import { FaJava } from "react-icons/fa";
// import { Network } from "lucide-react";

// const tickerItems = [
//   { name: "Python", Icon: SiPython, color: "#3776AB" },
//   { name: "Flask", Icon: SiFlask, color: "#1c1c1c" },
//   { name: "Docker", Icon: SiDocker, color: "#2496ED" },
//   { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
//   { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
//   { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
//   { name: "Java", Icon: FaJava, color: "#f89820" },
//   { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
//   { name: "REST APIs", Icon: Network, color: "#8B5CF6" },
//   { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
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
//       {/* marquee ticker — skills with logos */}
//       <div
//         className="group/track relative reveal mt-12 overflow-hidden border-y border-ink-line py-6"
//         style={{
//           animationDelay: "300ms",
//           maskImage: "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
//           WebkitMaskImage: "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
//         }}
//       >
//         <div className="flex w-max animate-marquee-skills gap-3 group-hover/track:[animation-play-state:paused]">
//           {loop.map(({ name, Icon, color }, i) => (
//             <span
//               key={`${name}-${i}`}
//               className="group flex shrink-0 items-center gap-2 rounded-full border border-ink-line bg-white px-3.5 py-1.5 font-mono text-[12px] text-ink-300 transition-colors duration-300 hover:border-signal/40 hover:text-ink-100"
//             >
//               <Icon
//                 aria-hidden
//                 className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6"
//                 style={{ color }}
//               />
//               {name}
//             </span>
            
//           ))}
//         </div>

//         <style>{`
//           @keyframes marquee-skills {
//             from { transform: translateX(0); }
//             to { transform: translateX(-50%); }
//           }
//           .marquee-skills-track {
//             animation: marquee-skills 28s linear infinite;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }
