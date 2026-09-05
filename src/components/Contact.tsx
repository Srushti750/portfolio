"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Tag } from "./Tag";
import { Reveal } from "./Reveal";

const FORMSPREE_ENDPOINT = "";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 border-t border-ink-line/70">
      <Reveal>
        {/* <Tag>[status: accepting new connections]</Tag> */}
        <h2 className="mt-6 max-w-lg font-display text-3xl font-semibold leading-tight text-ink-100 sm:text-4xl">
          Let's build something{" "}
          <span className="bg-gradient-to-r from-signal to-warn bg-clip-text text-transparent">
            reliable
          </span>{" "}
          together.
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-300">
          Reach out to me, whether it's a project, an opportunity, or just a question, drop me a message and I'll get back to you soon.
        </p>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-[12px] text-ink-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-md border border-ink-line bg-white px-4 py-2.5 text-[14px] text-ink-100 outline-none transition-colors focus:border-signal/60"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-[12px] text-ink-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-md border border-ink-line bg-white px-4 py-2.5 text-[14px] text-ink-100 outline-none transition-colors focus:border-signal/60"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-[12px] text-ink-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you have in mind..."
              className="w-full resize-none rounded-md border border-ink-line bg-white px-4 py-2.5 text-[14px] text-ink-100 outline-none transition-colors focus:border-signal/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-[13px] font-medium text-[#fff9f2] transition-transform hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
            {status === "sent" && <CheckCircle2 className="h-3.5 w-3.5" />}
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"}
          </button>

          {status === "error" && (
            <p className="font-mono text-[12px] text-red-500">
              Something went wrong — please try again, or email me directly below.
            </p>
          )}
        </form>

        {/* Direct contact links (icons) */}
        <div className="mt-10 flex gap-4">
          <a
            href="mailto:srushtikulkarni81@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ink-300 transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:text-signal"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/srushti-kulkarni-7a4507213"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ink-300 transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:text-signal"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/srushti750"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ink-300 transition-all hover:-translate-y-0.5 hover:border-signal/50 hover:text-signal"
          >
            <SiGithub className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-8 border-t border-ink-line/70">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-ink-500">
        <span>© {new Date().getFullYear()} Srushti Kulkarni · India</span>
        {/* <span>built with Next.js + Tailwind</span> */}
      </div>
    </footer>
  );
}