"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenDrawer: () => void;
}

export function HeroSection({ onOpenDrawer }: HeroSectionProps) {
  const scrollToShowcase = () => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8">
      {/* ---- Background layers ---- */}

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
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
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
      />

      {/* ---- Content ---- */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="mb-6 text-[11px] uppercase tracking-[0.2em] text-white/30"
          style={{ fontFamily: "var(--font-code)" }}
        >
          UI System / Reference
        </span>

        {/* Headline */}
        <h1
          className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
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
            className="h-10 bg-white px-5 text-[13px] font-medium text-[var(--neutral-1)] transition-[background-color,transform] duration-200 hover:bg-white/90 active:scale-[0.97]"
            style={{ borderRadius: "var(--radius-md)", transitionTimingFunction: "var(--ease-spring)" }}
          >
            <Link href="/components">Explore Components</Link>
          </Button>

          <Button
            variant="ghost"
            onClick={onOpenDrawer}
            className="h-10 px-5 text-[13px] font-medium text-white/50 transition-[background-color,color,transform] duration-200 hover:bg-white/[0.04] hover:text-white/80 active:scale-[0.97]"
            style={{ borderRadius: "var(--radius-md)", transitionTimingFunction: "var(--ease-spring)" }}
          >
            Open Drawer →
          </Button>
        </div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <button
        onClick={scrollToShowcase}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/20 transition-colors duration-300 hover:text-white/40 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
        style={{ borderRadius: "var(--radius-sm)" }}
        aria-label="Scroll to component showcase"
      >
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-code)" }}
        >
          Explore
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className="animate-[float_2s_ease-in-out_infinite]"
        />
      </button>
    </section>
  );
}
