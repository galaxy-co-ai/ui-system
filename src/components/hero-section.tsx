"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenDrawer: () => void;
}

export function HeroSection({ onOpenDrawer }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8">
      {/* ---- Background layers ---- */}

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(var(--ink-rgb),0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(var(--ink-rgb),0.04) 0%, transparent 60%)",
        }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="mb-6 text-[11px] uppercase tracking-[0.2em] text-ink/30"
          style={{ fontFamily: "var(--font-code)" }}
        >
          UI System / Reference
        </span>

        {/* Headline */}
        <h1
          className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink"
          style={{
            fontFamily: "var(--font-display)",
            textWrap: "balance",
          }}
        >
          Every pixel is a{" "}
          <em className="not-italic" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
            decision
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="mt-5 max-w-[48ch] text-base leading-relaxed"
          style={{ color: "var(--text-tertiary)" }}
        >
          A system of restraint, motion, and glass. Every element earns its
          place through purpose, not decoration.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center gap-3">
          <Button
            asChild
            className="h-10 bg-cta px-5 text-[13px] font-medium text-cta-foreground transition-[background-color,transform] duration-200 hover:bg-cta/90 active:scale-[0.97]"
            style={{ borderRadius: "var(--radius-md)", transitionTimingFunction: "var(--ease-spring)" }}
          >
            <Link href="/components">Explore Components</Link>
          </Button>

          <Button
            variant="ghost"
            onClick={onOpenDrawer}
            className="h-10 px-5 text-[13px] font-medium text-ink/50 transition-[background-color,color,transform] duration-200 hover:bg-ink/[0.04] hover:text-ink/80 active:scale-[0.97]"
            style={{ borderRadius: "var(--radius-md)", transitionTimingFunction: "var(--ease-spring)" }}
          >
            Open Drawer →
          </Button>
        </div>
      </div>

    </section>
  );
}
