"use client";

import { Badge } from "@/components/ui/badge";
import { InteractiveControls } from "@/components/interactive-controls";

const components = [
  {
    name: "Button",
    description: "Primary, secondary, ghost, outline, destructive, and icon variants with spring easing.",
    variants: 6,
  },
  {
    name: "Switch",
    description: "Toggle control in sm, default, and lg sizes with Radix primitives.",
    variants: 3,
  },
  {
    name: "Tabs",
    description: "Pill and underline tab variants for content organization.",
    variants: 2,
  },
  {
    name: "Input",
    description: "Plain and icon-prefixed text inputs with glass-surface styling.",
    variants: 2,
  },
  {
    name: "Badge",
    description: "Status indicators for live, draft, deprecated, beta, and new states.",
    variants: 5,
  },
  {
    name: "Right Drawer",
    description: "Slide-in inspector panel with token display, palette grid, and easing visualizer.",
    variants: 1,
  },
  {
    name: "Floating Top Nav",
    description: "Glass-morphism pill navigation with active state shadows and responsive hamburger.",
    variants: 1,
  },
];

export default function ComponentsPage() {
  return (
    <section className="mx-auto max-w-3xl px-8 pb-32 pt-20">
      {/* Section header */}
      <span
        className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
        style={{ fontFamily: "var(--font-code)" }}
      >
        Component Library
      </span>
      <h1
        className="mt-2 text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Components
      </h1>
      <p
        className="mt-3 max-w-[50ch] text-[15px] leading-relaxed"
        style={{ color: "var(--text-tertiary)" }}
      >
        {components.length} components built on shadcn/ui, styled with glass
        material and spring easing.
      </p>

      {/* Component list */}
      <div className="mt-12 space-y-3">
        {components.map(({ name, description, variants }) => (
          <div
            key={name}
            className="flex items-center gap-4 border border-ink/[0.06] bg-ink/[0.02] px-5 py-4"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5">
                <h2 className="text-[14px] font-medium text-ink">{name}</h2>
                <Badge
                  variant="outline"
                  className="border-emerald-500/20 bg-emerald-500/10 text-[10px] font-medium text-emerald-400"
                  style={{ borderRadius: "var(--radius-xs)" }}
                >
                  Live
                </Badge>
              </div>
              <p className="mt-1 text-[13px] text-ink/40 line-clamp-1">
                {description}
              </p>
            </div>
            <span
              className="shrink-0 text-[12px] text-ink/25"
              style={{ fontFamily: "var(--font-code)" }}
            >
              {variants} variant{variants !== 1 ? "s" : ""}
            </span>
          </div>
        ))}
      </div>

      {/* Interactive showcase */}
      <div className="mt-16">
        <InteractiveControls />
      </div>
    </section>
  );
}
