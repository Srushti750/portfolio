export function Tag({
  children,
  tone = "signal",
}: {
  children: React.ReactNode;
  tone?: "signal" | "warn" | "muted";
}) {
  const toneClasses = {
    signal: "text-signal border-signal/30 bg-signal/[0.06]",
    warn: "text-warn border-warn/30 bg-warn/[0.06]",
    muted: "text-ink-300 border-ink-line bg-black/[0.02]",
  }[tone];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[13px] uppercase tracking-[0.14em] ${toneClasses}`}
    >
      {children}
    </span>
  );
}
