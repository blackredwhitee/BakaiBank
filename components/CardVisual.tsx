type CardVisualProps = {
  name: string;
  brand: string;
  style?: string;
  badge?: string;
  className?: string;
  float?: boolean;
};

const STYLES: Record<
  string,
  { bg: string; chip: string; glow: string; text: string; ring: string; holo: string }
> = {
  gold: {
    bg: "linear-gradient(135deg, #b8860b 0%, #e6c478 35%, #8a6a1f 70%, #d9b56a 100%)",
    chip: "linear-gradient(135deg, #fff7e0, #d9b56a)",
    glow: "rgba(230, 196, 120, 0.45)",
    text: "text-[#241a05]",
    ring: "rgba(255,255,255,0.35)",
    holo: "linear-gradient(135deg, #fef3c7, #93c5fd, #fbcfe8)",
  },
  graphite: {
    bg: "linear-gradient(135deg, #1e293b 0%, #334155 35%, #0f172a 75%, #475569 100%)",
    chip: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
    glow: "rgba(148, 163, 184, 0.4)",
    text: "text-white",
    ring: "rgba(255,255,255,0.18)",
    holo: "linear-gradient(135deg, #a5b4fc, #f9fafb, #93c5fd)",
  },
  warmgold: {
    bg: "linear-gradient(135deg, #92400e 0%, #f59e0b 40%, #fde68a 70%, #d97706 100%)",
    chip: "linear-gradient(135deg, #fff7e0, #fbbf24)",
    glow: "rgba(251, 191, 36, 0.45)",
    text: "text-[#2a1503]",
    ring: "rgba(255,255,255,0.4)",
    holo: "linear-gradient(135deg, #fde68a, #fca5a5, #fcd34d)",
  },
  elite: {
    bg: "linear-gradient(135deg, #05070f 0%, #11162b 40%, #1c2440 70%, #05070f 100%)",
    chip: "linear-gradient(135deg, #f5d98b, #c9a23a)",
    glow: "rgba(245, 217, 139, 0.4)",
    text: "text-white",
    ring: "rgba(245,217,139,0.3)",
    holo: "linear-gradient(135deg, #f5d98b, #93c5fd, #f5d98b)",
  },
};

export default function CardVisual({ name, brand, style = "graphite", badge, className = "", float = false }: CardVisualProps) {
  const s = STYLES[style] ?? STYLES.graphite;

  return (
    <div className={`group relative aspect-[1.586/1] w-full ${className} ${float ? "float-slow" : ""}`}>
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: s.glow }}
      />
      <div
        className="shine relative h-full w-full rounded-[1.25rem] p-5 md:p-6 shadow-[0_30px_60px_-20px_rgba(10,19,48,0.55)] ring-1 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[0.5deg]"
        style={{ background: s.bg, "--tw-ring-color": s.ring } as React.CSSProperties}
      >
        {/* fine brushed-metal texture */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, rgba(255,255,255,0.5) 0px, transparent 1px, transparent 3px)",
          }}
        />
        {/* top sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-60"
          style={{ background: "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.55), transparent 55%)" }}
        />
        {/* bottom depth shadow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.25rem]"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.28), transparent 45%)" }}
        />

        <div className={`relative flex h-full flex-col justify-between ${s.text}`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] opacity-70">
              International Card
            </span>
            {badge && (
              <span className="rounded-full border border-current/25 bg-white/10 px-2.5 py-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                {badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="h-7 w-10 rounded-md shadow-inner" style={{ background: s.chip }} />
            <div
              className="h-7 w-7 rounded-full opacity-80"
              style={{ background: s.holo, filter: "saturate(1.4)" }}
            />
          </div>

          <div>
            <div className="font-mono text-sm md:text-lg tracking-[0.22em] [text-shadow:0_1px_1px_rgba(255,255,255,0.25)]">
              •••• •••• •••• 4829
            </div>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-sm md:text-base font-semibold">{name}</span>
              <BrandMark brand={brand} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandMark({ brand }: { brand: string }) {
  if (brand === "Mastercard") {
    return (
      <span className="flex items-center" aria-label="Mastercard">
        <span className="h-6 w-6 rounded-full bg-[#EB001B] opacity-90" />
        <span className="-ml-2.5 h-6 w-6 rounded-full bg-[#F79E1B] opacity-90 mix-blend-screen" />
      </span>
    );
  }
  return (
    <span className="text-lg font-bold italic tracking-tight" aria-label="Visa">
      VISA
    </span>
  );
}
