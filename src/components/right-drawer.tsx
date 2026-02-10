"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const springIn = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
};
const springOut = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
  mass: 0.8,
};

const tokens = [
  { label: "border-radius", value: "6 / 8 / 10 / 12 / 16px" },
  { label: "transition", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
  { label: "glass-blur", value: "20px" },
  { label: "glass-saturate", value: "180%" },
  { label: "surface-alpha", value: "0.85" },
];

const neutralPalette = [
  { step: 1, hex: "#0f0e0d" },
  { step: 2, hex: "#1a1918" },
  { step: 3, hex: "#262524" },
  { step: 4, hex: "#333231" },
  { step: 5, hex: "#444342" },
  { step: 6, hex: "#6b6b6b" },
  { step: 7, hex: "#8a8a8a" },
  { step: 8, hex: "#b3b3b3" },
  { step: 9, hex: "#d9d9d9" },
  { step: 10, hex: "#ffffff" },
];

/* ------------------------------------------------
   Sub-sections
   ------------------------------------------------ */

function TokensSection() {
  return (
    <section className="px-6 py-5">
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-ink/40">
        Design Tokens
      </h3>
      <div className="space-y-3">
        {tokens.map(({ label, value }) => (
          <div key={label}>
            <span className="block text-[11px] text-ink/30">{label}</span>
            <span
              className="mt-0.5 block text-[13px] text-ink/70"
              style={{ fontFamily: "var(--font-code)" }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaletteSection() {
  return (
    <section className="px-6 py-5">
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-ink/40">
        Neutral Palette
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {neutralPalette.map(({ step, hex }) => (
          <div key={step} className="flex flex-col items-center gap-1.5">
            <div
              className="h-10 w-full border border-ink/[0.06]"
              style={{
                backgroundColor: hex,
                borderRadius: "var(--radius-xs)",
              }}
            />
            <span
              className="text-[10px] text-ink/30"
              style={{ fontFamily: "var(--font-code)" }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function EasingVisualizer() {
  return (
    <section className="px-6 py-5">
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-ink/40">
        Spring Easing
      </h3>

      <div
        className="border border-ink/[0.06] bg-ink/[0.02] p-4"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        {/* Curve */}
        <svg
          viewBox="-8 -12 216 224"
          className="h-auto w-full"
          fill="none"
        >
          {/* Grid */}
          <line
            x1="0" y1="200" x2="200" y2="200"
            stroke="rgba(var(--ink-rgb),0.08)"
          />
          <line
            x1="0" y1="0" x2="0" y2="200"
            stroke="rgba(var(--ink-rgb),0.08)"
          />
          <line
            x1="0" y1="100" x2="200" y2="100"
            stroke="rgba(var(--ink-rgb),0.04)"
            strokeDasharray="4 4"
          />
          <line
            x1="100" y1="0" x2="100" y2="200"
            stroke="rgba(var(--ink-rgb),0.04)"
            strokeDasharray="4 4"
          />

          {/* Control-point handles */}
          <line
            x1="0" y1="200" x2="44" y2="0"
            stroke="rgba(var(--ink-rgb),0.12)"
            strokeDasharray="3 3"
          />
          <line
            x1="200" y1="0" x2="72" y2="0"
            stroke="rgba(var(--ink-rgb),0.12)"
            strokeDasharray="3 3"
          />

          {/* Bezier curve */}
          <path
            d="M 0 200 C 44 0, 72 0, 200 0"
            stroke="rgba(var(--ink-rgb),0.6)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Control points */}
          <circle cx="44" cy="0" r="3.5" fill="rgba(var(--ink-rgb),0.25)" />
          <circle cx="72" cy="0" r="3.5" fill="rgba(var(--ink-rgb),0.25)" />

          {/* Animated dot */}
          <circle r="4" fill="rgba(var(--ink-rgb),0.85)">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M 0 200 C 44 0, 72 0, 200 0"
              keyTimes="0;1"
              keySplines="0.22 1 0.36 1"
              calcMode="spline"
            />
          </circle>

          {/* Axis labels */}
          <text
            x="100" y="218"
            textAnchor="middle"
            fill="rgba(var(--ink-rgb),0.2)"
            fontSize="10"
          >
            time
          </text>
          <text
            x="-8" y="104"
            textAnchor="middle"
            fill="rgba(var(--ink-rgb),0.2)"
            fontSize="10"
            transform="rotate(-90 -8 104)"
          >
            progress
          </text>
        </svg>

        {/* Motion preview track */}
        <div className="mt-4 overflow-hidden rounded-full bg-ink/[0.04] p-0.5">
          <motion.div
            className="h-1.5 w-3 rounded-full bg-ink/60"
            animate={{ x: [0, 280] }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.6,
            }}
          />
        </div>

        <p
          className="mt-3 text-center text-[11px] text-ink/25"
          style={{ fontFamily: "var(--font-code)" }}
        >
          cubic-bezier(0.22, 1, 0.36, 1)
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------
   Drawer
   ------------------------------------------------ */

export function RightDrawer({ isOpen, onClose }: RightDrawerProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionIn = prefersReducedMotion ? { duration: 0 } : springIn;
  const motionOut = prefersReducedMotion ? { duration: 0 } : springOut;

  return (
    <>
      {/* Screen reader announcement */}
      <div aria-live="polite" className="sr-only">
        {isOpen ? "Inspector drawer opened" : "Inspector drawer closed"}
      </div>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer-overlay"
          className="fixed inset-0 z-30"
          style={{
            backgroundColor: "var(--overlay-dark)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.21 } }}
          onClick={onClose}
        />
      )}

      {isOpen && (
        <motion.aside
          key="drawer-panel"
          className="fixed right-0 z-40 w-[380px] overflow-hidden"
          style={{
            top: "var(--panel-inset)",
            bottom: "var(--panel-inset)",
            background: "var(--surface-glass)",
            backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
            WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
            borderRadius: "var(--radius-lg) 0 0 var(--radius-lg)",
            boxShadow: "var(--shadow-panel)",
            border: "1px solid var(--surface-glass-border)",
          }}
          initial={{ x: 380 }}
          animate={{ x: 0, transition: motionIn }}
          exit={{ x: 380, transition: motionOut }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink/[0.06] px-6 py-5">
            <div>
              <h2 className="text-[15px] font-medium text-ink">
                Inspector
              </h2>
              <p className="mt-0.5 text-[12px] text-ink/40">
                Component Details
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center text-ink/40 transition-[background-color,color] duration-150 hover:bg-ink/[0.06] hover:text-ink/60 focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:outline-none"
              style={{
                borderRadius: "var(--radius-xs)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
              aria-label="Close inspector"
            >
              <X size={14} strokeWidth={1.5} />
            </button>
          </div>

          <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 70px)" }}>
            <TokensSection />
            <div className="mx-6 h-px bg-ink/[0.06]" />
            <PaletteSection />
            <div className="mx-6 h-px bg-ink/[0.06]" />
            <EasingVisualizer />
            <div className="h-6" />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
    </>
  );
}
