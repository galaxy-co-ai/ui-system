"use client";

import { useState } from "react";

const easingCurves = [
  {
    name: "Spring",
    variable: "--ease-spring",
    value: "cubic-bezier(0.22, 1, 0.36, 1)",
    usage: "Interactive elements — buttons, links, tab switches, hover states",
    points: { x1: 0.22, y1: 1, x2: 0.36, y2: 1 },
  },
  {
    name: "Panel",
    variable: "--ease-panel",
    value: "cubic-bezier(0.32, 0.72, 0, 1)",
    usage: "Panels — sidebar collapse, drawer slide, layout transitions",
    points: { x1: 0.32, y1: 0.72, x2: 0, y2: 1 },
  },
  {
    name: "Switch",
    variable: "--ease-switch",
    value: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    usage: "Toggle controls — overshoot bounce for tactile feedback",
    points: { x1: 0.34, y1: 1.56, x2: 0.64, y2: 1 },
  },
];

const durations = [
  { name: "Hover", variable: "--duration-hover", value: "200ms", usage: "Color/opacity changes on hover" },
  { name: "Enter", variable: "--duration-enter", value: "300ms", usage: "Elements appearing, panels opening" },
  { name: "Exit", variable: "--duration-exit", value: "210ms", usage: "Elements leaving, panels closing" },
];

const principles = [
  {
    rule: "Exit 30% faster than enter",
    detail: "Enter at 300ms, exit at 210ms. Users care about what's arriving, not what's leaving.",
  },
  {
    rule: "Spring easing for interactive elements",
    detail: "Buttons, links, tabs — anything the user directly manipulates gets spring easing. It feels responsive and alive.",
  },
  {
    rule: "Panel easing for layout changes",
    detail: "Sidebar collapse, drawer slide, content reflow — structural changes use panel easing. Smoother, less bouncy.",
  },
  {
    rule: "150ms hover, 300ms modals",
    detail: "Hover feedback should be near-instant. Modals and larger transitions get more time to feel intentional, not jarring.",
  },
  {
    rule: "No easing on opacity-only transitions",
    detail: "Pure fade-in/fade-out uses linear or ease-out. Spring easing on opacity looks wrong — save it for transforms.",
  },
  {
    rule: "Active state: scale(0.97)",
    detail: "Button press feedback. Subtle enough to feel tactile without looking broken. Spring easing on release.",
  },
];

function EasingCurve({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const w = 120;
  const h = 120;
  const pad = 8;
  const cw = w - pad * 2;
  const ch = h - pad * 2;

  const sx = pad;
  const sy = h - pad;
  const ex = w - pad;
  const ey = pad;
  const cp1x = pad + x1 * cw;
  const cp1y = h - pad - y1 * ch;
  const cp2x = pad + x2 * cw;
  const cp2y = h - pad - y2 * ch;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0">
      {/* Grid */}
      <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="rgba(var(--ink-rgb),0.06)" strokeWidth={1} />
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="rgba(var(--ink-rgb),0.06)" strokeWidth={1} />
      {/* Control point lines */}
      <line x1={sx} y1={sy} x2={cp1x} y2={cp1y} stroke="rgba(var(--ink-rgb),0.12)" strokeWidth={1} strokeDasharray="2 2" />
      <line x1={ex} y1={ey} x2={cp2x} y2={cp2y} stroke="rgba(var(--ink-rgb),0.12)" strokeWidth={1} strokeDasharray="2 2" />
      {/* Curve */}
      <path
        d={`M ${sx} ${sy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${ex} ${ey}`}
        fill="none"
        stroke="rgba(var(--ink-rgb),0.6)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* Control points */}
      <circle cx={cp1x} cy={cp1y} r={3} fill="rgba(var(--ink-rgb),0.4)" />
      <circle cx={cp2x} cy={cp2y} r={3} fill="rgba(var(--ink-rgb),0.4)" />
      {/* Endpoints */}
      <circle cx={sx} cy={sy} r={3} fill="var(--ink)" />
      <circle cx={ex} cy={ey} r={3} fill="var(--ink)" />
    </svg>
  );
}

function MotionDemo({ easing, duration }: { easing: string; duration: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => { setPlaying(false); requestAnimationFrame(() => setPlaying(true)); }}
        className="text-[11px] text-ink/40 hover:text-ink/70 transition-colors duration-150 shrink-0"
        style={{ fontFamily: "var(--font-code)" }}
      >
        Play &rarr;
      </button>
      <div className="flex-1 h-8 bg-ink/[0.03] overflow-hidden" style={{ borderRadius: "var(--radius-sm)" }}>
        <div
          className="h-full w-6 bg-ink/30"
          style={{
            borderRadius: "var(--radius-xs)",
            transform: playing ? "translateX(calc(100cqw - 100%))" : "translateX(0)",
            transition: playing ? `transform ${duration} ${easing}` : "none",
            containerType: "inline-size",
          }}
        />
      </div>
    </div>
  );
}

export default function MotionPage() {
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
        Motion
      </h1>
      <p
        className="mt-3 max-w-[55ch] text-[15px] leading-relaxed"
        style={{ color: "var(--text-tertiary)" }}
      >
        Three easing curves, three durations, six principles.
        Motion should feel inevitable, not decorative.
      </p>

      {/* Easing Curves */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Easing
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Curves
          </h2>
        </div>
        <div className="space-y-4">
          {easingCurves.map(({ name, variable, value, usage, points }) => (
            <div
              key={name}
              className="border border-ink/[0.06] bg-ink/[0.02] p-5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-start gap-5">
                <EasingCurve {...points} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-medium text-ink">{name}</h3>
                  <span
                    className="block text-[11px] text-ink/30 mt-0.5"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {variable}
                  </span>
                  <span
                    className="block text-[11px] text-ink/20 mt-0.5"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {value}
                  </span>
                  <p className="text-[12px] text-ink/40 mt-2">{usage}</p>
                  <div className="mt-3">
                    <MotionDemo easing={value} duration="400ms" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Duration Scale */}
      <div className="mt-16">
        <div className="mb-8">
          <span
            className="text-[11px] uppercase tracking-[0.2em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            Timing
          </span>
          <h2
            className="mt-2 text-[clamp(20px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.01em] text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Duration Scale
          </h2>
        </div>
        <div className="space-y-2">
          {durations.map(({ name, variable, value, usage }) => (
            <div
              key={name}
              className="flex items-center justify-between border border-ink/[0.06] bg-ink/[0.02] px-5 py-3.5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-ink/60">{name}</span>
                  <span
                    className="text-[11px] text-ink/25"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {variable}
                  </span>
                </div>
                <p className="text-[11px] text-ink/30 mt-0.5">{usage}</p>
              </div>
              <span
                className="text-[14px] text-ink/50 font-medium shrink-0"
                style={{ fontFamily: "var(--font-code)", fontVariantNumeric: "tabular-nums" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
        {/* Visual duration comparison */}
        <div className="mt-4 flex items-end gap-3 h-8">
          {durations.map(({ name, value }) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <div
                className="bg-ink/20"
                style={{
                  width: `${parseInt(value) / 3}px`,
                  height: "4px",
                  borderRadius: "var(--radius-pill)",
                }}
              />
              <span className="text-[9px] text-ink/20">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
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
            Motion Principles
          </h2>
        </div>
        <div className="space-y-3">
          {principles.map(({ rule, detail }, i) => (
            <div
              key={i}
              className="border border-ink/[0.06] bg-ink/[0.02] px-5 py-4"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <h3 className="text-[13px] font-medium text-ink/70">{rule}</h3>
              <p className="text-[12px] text-ink/35 mt-1 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
