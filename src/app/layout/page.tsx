const radiusScale = [
  { name: "xs", value: "6px", variable: "--radius-xs", usage: "Badges, small chips" },
  { name: "sm", value: "8px", variable: "--radius-sm", usage: "Buttons, nav items, inputs" },
  { name: "md", value: "10px", variable: "--radius-md", usage: "Cards, form fields" },
  { name: "lg", value: "12px", variable: "--radius-lg", usage: "Panels, containers, sections" },
  { name: "xl", value: "16px", variable: "--radius-xl", usage: "Floating nav pill, large cards" },
  { name: "pill", value: "9999px", variable: "--radius-pill", usage: "Pills, fully rounded elements" },
];

const panelDimensions = [
  { label: "Sidebar (expanded)", variable: "--sidebar-width", value: "220px" },
  { label: "Sidebar (collapsed)", variable: "--sidebar-collapsed-width", value: "60px" },
  { label: "Panel inset", variable: "--panel-inset", value: "10px" },
  { label: "Right drawer", value: "380px", variable: "hardcoded" },
  { label: "Mobile sheet", value: "260px", variable: "hardcoded" },
  { label: "Max content width", value: "max-w-3xl (768px)", variable: "Tailwind" },
];

const spacingPatterns = [
  { context: "Between nav items", value: "2px (space-y-0.5)", note: "Tight — items are grouped" },
  { context: "Section padding", value: "32px (p-8)", note: "Comfortable breathing room" },
  { context: "Card internal padding", value: "20px–24px (px-5 py-4)", note: "Content density" },
  { context: "Between sections", value: "64px (mt-16)", note: "Clear visual separation" },
  { context: "Page top padding", value: "80px (pt-20)", note: "Below floating nav clearance" },
  { context: "Page bottom padding", value: "128px (pb-32)", note: "Generous scroll end" },
  { context: "Floating panel inset", value: "10px", note: "Distance from viewport edge" },
  { context: "Icon to label gap", value: "12px (gap-3)", note: "Standard icon–text pairing" },
];

const borderPatterns = [
  { pattern: "border-ink/[0.06]", usage: "Default container border — barely visible" },
  { pattern: "border-ink/[0.08]", usage: "Hover state or emphasized border" },
  { pattern: "bg-ink/[0.02]", usage: "Subtle surface tint for containers" },
  { pattern: "bg-ink/[0.04]", usage: "Hover background for interactive items" },
  { pattern: "bg-ink/[0.08]", usage: "Active/selected item background" },
];

export default function LayoutPage() {
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
        Layout
      </h1>
      <p
        className="mt-3 max-w-[55ch] text-[15px] leading-relaxed"
        style={{ color: "var(--text-tertiary)" }}
      >
        4px grid, proximity equals relationship, every measurement on a consistent scale.
      </p>

      {/* Border Radius */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Radius
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Border Radius Scale
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {radiusScale.map(({ name, value, variable, usage }) => (
            <div
              key={name}
              className="border border-ink/[0.06] bg-ink/[0.02] p-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              {/* Visual */}
              <div
                className="h-14 w-full bg-ink/[0.08] border border-ink/[0.06] mb-3"
                style={{ borderRadius: value }}
              />
              <span
                className="text-[12px] text-ink/70 block"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {variable}
              </span>
              <span
                className="text-[10px] text-ink/30 block mt-0.5"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {value}
              </span>
              <p className="text-[10px] text-ink/25 mt-1">{usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Panel Dimensions */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Dimensions
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Panel Sizes
          </h2>
        </div>
        <div className="space-y-2">
          {panelDimensions.map(({ label, variable, value }) => (
            <div
              key={label}
              className="flex items-center justify-between border border-ink/[0.06] bg-ink/[0.02] px-5 py-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div>
                <span className="text-[13px] text-ink/60">{label}</span>
                <span
                  className="block text-[11px] text-ink/25 mt-0.5"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {variable}
                </span>
              </div>
              <span
                className="text-[13px] text-ink/50 font-medium"
                style={{ fontFamily: "var(--font-code)", fontVariantNumeric: "tabular-nums" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing Patterns */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Spacing
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common Patterns
          </h2>
        </div>
        <div className="space-y-2">
          {spacingPatterns.map(({ context, value, note }) => (
            <div
              key={context}
              className="border border-ink/[0.06] bg-ink/[0.02] px-5 py-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[13px] text-ink/60">{context}</span>
                <span
                  className="text-[12px] text-ink/40 shrink-0"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  {value}
                </span>
              </div>
              <p className="text-[11px] text-ink/25 mt-1">{note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Border & Surface Patterns */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Surfaces
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Border & Surface Alpha
          </h2>
        </div>
        <div className="space-y-2">
          {borderPatterns.map(({ pattern, usage }) => (
            <div
              key={pattern}
              className="flex items-center gap-4 border border-ink/[0.06] bg-ink/[0.02] px-5 py-3"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <span
                className="text-[12px] text-ink/60 w-44 shrink-0"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {pattern}
              </span>
              <span className="text-[12px] text-ink/35">{usage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
