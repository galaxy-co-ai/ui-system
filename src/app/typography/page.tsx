const fontFamilies = [
  {
    name: "EB Garamond",
    variable: "--font-display",
    fallback: "Georgia, 'Times New Roman', serif",
    usage: "Headings, hero text, display type",
    specimen: "Every pixel is a decision",
    className: "font-serif",
  },
  {
    name: "DM Sans",
    variable: "--font-body",
    fallback: "system-ui, -apple-system, sans-serif",
    usage: "Body text, labels, navigation, UI elements",
    specimen: "A system of restraint, motion, and glass.",
    className: "font-sans",
  },
  {
    name: "JetBrains Mono",
    variable: "--font-code",
    fallback: "'Courier New', monospace",
    usage: "Code, tokens, variable names, technical labels",
    specimen: "--ease-spring: cubic-bezier(0.22, 1, 0.36, 1);",
    className: "font-mono",
  },
];

const headingSizes = [
  { label: "Hero", css: "clamp(36px, 5vw, 64px)", font: "display", tracking: "-0.02em", weight: "700" },
  { label: "Page Title", css: "clamp(28px, 4vw, 48px)", font: "display", tracking: "-0.02em", weight: "700" },
  { label: "Section", css: "clamp(20px, 3vw, 32px)", font: "display", tracking: "-0.01em", weight: "700" },
  { label: "Card Title", css: "14px", font: "body", tracking: "0", weight: "500" },
];

const textStyles = [
  { label: "Body", size: "15px", lineHeight: "1.6", font: "body", color: "--text-tertiary" },
  { label: "Small", size: "13px", lineHeight: "1.5", font: "body", color: "ink/50" },
  { label: "Eyebrow", size: "11px", lineHeight: "1", font: "code", color: "ink/30", extra: "uppercase, tracking: 0.2em" },
  { label: "Code", size: "12px", lineHeight: "1.5", font: "code", color: "ink/70" },
  { label: "Caption", size: "10px", lineHeight: "1.4", font: "code", color: "ink/25" },
];

export default function TypographyPage() {
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
        Typography
      </h1>
      <p
        className="mt-3 max-w-[55ch] text-[15px] leading-relaxed"
        style={{ color: "var(--text-tertiary)" }}
      >
        Three fonts. Display for presence, sans for clarity, mono for precision.
        Loaded via next/font for zero layout shift.
      </p>

      {/* Font Families */}
      <div className="mt-16 space-y-4">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Families
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Font Stack
          </h2>
        </div>

        {fontFamilies.map(({ name, variable, fallback, usage, specimen, className }) => (
          <div
            key={name}
            className="border border-ink/[0.06] bg-ink/[0.02] p-6"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-[14px] font-medium text-ink">{name}</h3>
                <span
                  className="text-[11px] text-ink/30 mt-0.5 block"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {variable}
                </span>
              </div>
              <span className="text-[11px] text-ink/20 shrink-0">{usage}</span>
            </div>
            {/* Specimen */}
            <div
              className={`${className} text-[28px] text-ink/80 leading-tight mt-2`}
            >
              {specimen}
            </div>
            {/* Alphabet */}
            <div
              className={`${className} text-[16px] text-ink/25 mt-4 leading-relaxed`}
            >
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </div>
            <div
              className={`${className} text-[16px] text-ink/25 mt-1`}
            >
              0123456789 !@#$%^&*()
            </div>
            {/* Fallback stack */}
            <span
              className="block mt-4 text-[10px] text-ink/20"
              style={{ fontFamily: "var(--font-code)" }}
            >
              Fallback: {fallback}
            </span>
          </div>
        ))}
      </div>

      {/* Heading Scale */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Scale
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Heading Sizes
          </h2>
        </div>
        <div className="space-y-6">
          {headingSizes.map(({ label, css, font, tracking, weight }) => (
            <div key={label} className="border-b border-ink/[0.04] pb-6 last:border-0">
              <div className="flex items-baseline gap-3 mb-2">
                <span
                  className="text-[11px] text-ink/25 w-20 shrink-0"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {label}
                </span>
                <span
                  className="text-[10px] text-ink/15"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {css} · {font} · {weight} · tracking: {tracking}
                </span>
              </div>
              <div
                style={{
                  fontSize: css.includes("clamp") ? undefined : css,
                  fontFamily: font === "display" ? "var(--font-display)" : "var(--font-body)",
                  fontWeight: weight,
                  letterSpacing: tracking,
                  lineHeight: "1.1",
                }}
                className={`text-ink ${css.includes("clamp") ? "" : ""}`}
              >
                {css.includes("clamp") ? (
                  <span className={
                    label === "Hero" ? "text-[clamp(36px,5vw,64px)]" :
                    label === "Page Title" ? "text-[clamp(28px,4vw,48px)]" :
                    "text-[clamp(20px,3vw,32px)]"
                  }>
                    The quick brown fox
                  </span>
                ) : (
                  "The quick brown fox"
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Styles */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Styles
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Text Styles
          </h2>
        </div>
        <div className="space-y-2">
          {textStyles.map(({ label, size, lineHeight, font, extra }) => (
            <div
              key={label}
              className="flex items-center gap-4 border border-ink/[0.06] bg-ink/[0.02] px-5 py-3.5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <span className="text-[12px] text-ink/50 w-20 shrink-0">{label}</span>
              <span
                className="flex-1 text-ink/60"
                style={{
                  fontSize: size,
                  lineHeight: lineHeight,
                  fontFamily: font === "code" ? "var(--font-code)" : "var(--font-body)",
                  textTransform: label === "Eyebrow" ? "uppercase" : undefined,
                  letterSpacing: label === "Eyebrow" ? "0.2em" : undefined,
                }}
              >
                {label === "Eyebrow" ? "Section Label" : "The quick brown fox jumps over the lazy dog"}
              </span>
              <span
                className="text-[10px] text-ink/20 shrink-0 text-right"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {size} / {lineHeight}
                {extra && <span className="block">{extra}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Rules
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Usage Guidelines
          </h2>
        </div>
        <div className="space-y-3 text-[13px] text-ink/40 leading-relaxed">
          <p>
            <span className="text-ink/70 font-medium">Use clamp() for headings.</span>{" "}
            All heading sizes use fluid typography that scales between mobile and desktop.
            Never hardcode heading sizes — always use the clamp scale.
          </p>
          <p>
            <span className="text-ink/70 font-medium">65ch max width for body text.</span>{" "}
            Long-form content should never exceed 65 characters per line.
            Use max-w-[55ch] to max-w-[65ch] depending on context.
          </p>
          <p>
            <span className="text-ink/70 font-medium">tabular-nums on changing data.</span>{" "}
            Any number that updates dynamically (counters, prices, timers) should use
            font-variant-numeric: tabular-nums to prevent layout shift.
          </p>
          <p>
            <span className="text-ink/70 font-medium">Code font for tokens and variables.</span>{" "}
            Anything that references a CSS variable, API value, or technical identifier
            should render in JetBrains Mono at 11-12px.
          </p>
        </div>
      </div>
    </section>
  );
}
