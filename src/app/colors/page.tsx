"use client";

const neutralPalette = [
  { step: 1, hex: "#0f0e0d", variable: "--neutral-1", usage: "Background, darkest surface" },
  { step: 2, hex: "#1a1918", variable: "--neutral-2", usage: "Elevated surface, cards" },
  { step: 3, hex: "#262524", variable: "--neutral-3", usage: "Subtle borders, dividers" },
  { step: 4, hex: "#333231", variable: "--neutral-4", usage: "Hover backgrounds" },
  { step: 5, hex: "#444342", variable: "--neutral-5", usage: "Active backgrounds, pressed" },
  { step: 6, hex: "#6b6b6b", variable: "--neutral-6", usage: "Tertiary text, placeholders" },
  { step: 7, hex: "#8a8a8a", variable: "--neutral-7", usage: "Secondary text" },
  { step: 8, hex: "#b3b3b3", variable: "--neutral-8", usage: "Body text (light contexts)" },
  { step: 9, hex: "#d9d9d9", variable: "--neutral-9", usage: "Emphasized text" },
  { step: 10, hex: "#ffffff", variable: "--neutral-10", usage: "Primary text, headings" },
];

const glassTokens = [
  { variable: "--surface-glass", value: "rgba(17, 17, 17, 0.85)", desc: "Glass panel background" },
  { variable: "--glass-blur", value: "20px", desc: "Backdrop blur amount" },
  { variable: "--glass-saturate", value: "180%", desc: "Backdrop color saturation" },
  { variable: "--glass-surface-alpha", value: "0.85", desc: "Surface transparency" },
  { variable: "--overlay-dark", value: "rgba(0, 0, 0, 0.5)", desc: "Modal/drawer overlay" },
];

const shadows = [
  {
    variable: "--shadow-glass",
    value: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
    desc: "Glass panels (nav, drawer)",
  },
  {
    variable: "--shadow-panel",
    value: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
    desc: "Sidebar, floating panels",
  },
  {
    variable: "--shadow-active",
    value: "0 2px 8px rgba(0,0,0,0.2)",
    desc: "Active tab, pressed state",
  },
];

const statusColors = [
  { label: "Live", border: "border-emerald-500/20", bg: "bg-emerald-500/10", text: "text-emerald-400" },
  { label: "Draft", border: "border-ink/[0.08]", bg: "bg-ink/[0.05]", text: "text-ink/50" },
  { label: "Deprecated", border: "border-red-500/20", bg: "bg-red-500/10", text: "text-red-400" },
  { label: "Beta", border: "border-purple-500/20", bg: "bg-purple-500/10", text: "text-purple-400" },
  { label: "New", border: "border-yellow-500/20", bg: "bg-yellow-500/10", text: "text-yellow-400" },
];

const semanticText = [
  { variable: "--text-primary", value: "#e8e8e8", desc: "Headings, primary content" },
  { variable: "--text-secondary", value: "var(--neutral-7)", desc: "Supporting text, labels" },
  { variable: "--text-tertiary", value: "var(--neutral-6)", desc: "Muted text, placeholders" },
];

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <span
        className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
        style={{ fontFamily: "var(--font-code)" }}
      >
        {eyebrow}
      </span>
      <h2
        className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <section className="mx-auto max-w-3xl px-8 pb-32 pt-20">
      {/* Page header */}
      <span
        className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
        style={{ fontFamily: "var(--font-code)" }}
      >
        Design Tokens
      </span>
      <h1
        className="mt-2 text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Colors
      </h1>
      <p
        className="mt-3 max-w-[55ch] text-[15px] leading-relaxed"
        style={{ color: "var(--text-tertiary)" }}
      >
        Warm-shifted neutrals, OKLch semantic tokens, and glass morphism
        surfaces. Every color earns its place.
      </p>

      {/* Neutral Palette */}
      <div className="mt-16">
        <SectionHeader eyebrow="Foundation" title="Neutral Palette" />
        <div className="grid grid-cols-5 gap-2">
          {neutralPalette.map(({ step, hex, variable, usage }) => (
            <div key={step} className="group">
              <div
                className="aspect-square border border-ink/[0.06] transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: hex,
                  borderRadius: "var(--radius-md)",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              />
              <div className="mt-2">
                <span
                  className="block text-[11px] text-ink/60"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {variable}
                </span>
                <span
                  className="block text-[10px] text-ink/30 mt-0.5"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {hex}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-ink/25 leading-snug hidden group-hover:block">
                {usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Text Colors */}
      <div className="mt-16">
        <SectionHeader eyebrow="Text" title="Semantic Text" />
        <div className="space-y-2">
          {semanticText.map(({ variable, value, desc }) => (
            <div
              key={variable}
              className="flex items-center gap-4 border border-ink/[0.06] bg-ink/[0.02] px-5 py-3.5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div
                className="h-8 w-8 shrink-0 border border-ink/[0.06]"
                style={{
                  backgroundColor: variable === "--text-primary" ? "#e8e8e8" : variable === "--text-secondary" ? "#8a8a8a" : "#6b6b6b",
                  borderRadius: "var(--radius-sm)",
                }}
              />
              <div className="flex-1 min-w-0">
                <span
                  className="text-[12px] text-ink/70"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {variable}
                </span>
                <p className="text-[12px] text-ink/35 mt-0.5">{desc}</p>
              </div>
              <span
                className="text-[11px] text-ink/25 shrink-0"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Glass & Surfaces */}
      <div className="mt-16">
        <SectionHeader eyebrow="Surfaces" title="Glass Morphism" />
        <p className="text-[13px] text-ink/40 -mt-4 mb-6 max-w-[50ch]">
          Applied to sidebar, floating nav, inspector drawer, and modal overlays.
        </p>
        {/* Visual demo */}
        <div
          className="relative mb-6 overflow-hidden border border-ink/[0.06] p-8"
          style={{
            borderRadius: "var(--radius-lg)",
            background: "linear-gradient(135deg, #1a1918 0%, #262524 50%, #333231 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.07) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }} />
          <div
            className="relative mx-auto max-w-[280px] p-6 text-center"
            style={{
              background: "var(--surface-glass)",
              backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
              WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-glass)",
              border: "1px solid var(--surface-glass-border)",
            }}
          >
            <span className="text-[13px] text-ink/70">Glass surface</span>
            <span
              className="block mt-1 text-[11px] text-ink/30"
              style={{ fontFamily: "var(--font-code)" }}
            >
              blur(20px) saturate(180%)
            </span>
          </div>
        </div>
        {/* Token table */}
        <div className="space-y-2">
          {glassTokens.map(({ variable, value, desc }) => (
            <div
              key={variable}
              className="flex items-center justify-between border border-ink/[0.06] bg-ink/[0.02] px-5 py-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div>
                <span
                  className="text-[12px] text-ink/70"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {variable}
                </span>
                <p className="text-[11px] text-ink/30 mt-0.5">{desc}</p>
              </div>
              <span
                className="text-[11px] text-ink/25 shrink-0 ml-4"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Shadows */}
      <div className="mt-16">
        <SectionHeader eyebrow="Elevation" title="Shadows" />
        <div className="space-y-4">
          {shadows.map(({ variable, value, desc }) => (
            <div
              key={variable}
              className="border border-ink/[0.06] bg-ink/[0.02] px-5 py-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className="text-[12px] text-ink/70"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {variable}
                  </span>
                  <p className="text-[12px] text-ink/35 mt-0.5">{desc}</p>
                </div>
                <div
                  className="h-10 w-16 shrink-0"
                  style={{
                    backgroundColor: "var(--neutral-2)",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: value,
                  }}
                />
              </div>
              <span
                className="block mt-2 text-[10px] text-ink/20 break-all leading-relaxed"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Status Colors */}
      <div className="mt-16">
        <SectionHeader eyebrow="Semantic" title="Status Colors" />
        <div className="flex flex-wrap gap-3">
          {statusColors.map(({ label, border, bg, text }) => (
            <div
              key={label}
              className={`inline-flex items-center border px-3 py-1.5 text-[12px] font-medium ${border} ${bg} ${text}`}
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-1.5">
          {statusColors.map(({ label, border, bg, text }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-[12px] text-ink/50 w-24">{label}</span>
              <span
                className="text-[11px] text-ink/25"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {border} {bg} {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
