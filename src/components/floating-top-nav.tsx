"use client";

import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = ["System", "Components", "Tokens", "Playground"];

interface FloatingTopNavProps {
  onMenuToggle?: () => void;
  sidebarWidth?: number;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}

export function FloatingTopNav({ onMenuToggle, sidebarWidth = 220 }: FloatingTopNavProps) {
  const [active, setActive] = useState("System");
  const isDesktop = useIsDesktop();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className="fixed top-4 z-20 flex items-center gap-0.5 px-1.5 py-1.5"
      style={{
        background: "var(--surface-glass)",
        backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
        WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-glass)",
        border: "1px solid var(--surface-glass-border)",
        left: isDesktop
          ? `calc(${sidebarWidth}px + (100vw - ${sidebarWidth}px) / 2)`
          : "50%",
        transform: "translateX(-50%)",
        transition: "left 300ms var(--ease-panel)",
      }}
    >
      {/* Hamburger — mobile only */}
      {onMenuToggle && (
        <button
          onClick={onMenuToggle}
          className="flex h-8 w-8 items-center justify-center text-ink/50 transition-colors duration-200 hover:text-ink/80 focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:outline-none lg:hidden"
          style={{
            borderRadius: "var(--radius-sm)",
            transitionTimingFunction: "var(--ease-spring)",
          }}
          aria-label="Open navigation"
        >
          <Menu size={16} strokeWidth={1.5} />
        </button>
      )}

      {navItems.map((item) => {
        const isActive = active === item;

        return (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              px-4 py-1.5 text-[13px] font-medium
              transition-[background-color,color,box-shadow] duration-200
              focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:outline-none
              ${isActive
                ? "bg-ink/[0.1] text-ink"
                : "text-ink/50 hover:bg-ink/[0.04] hover:text-ink/80"
              }
            `}
            style={{
              borderRadius: "var(--radius-md)",
              transitionTimingFunction: "var(--ease-spring)",
              boxShadow: isActive
                ? "var(--shadow-active)"
                : "none",
            }}
          >
            {item}
          </button>
        );
      })}

      {/* Theme toggle */}
      {mounted && (
        <>
          <div className="mx-1 h-4 w-px bg-ink/[0.06]" />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center text-ink/40 transition-colors duration-200 hover:text-ink/70 focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:outline-none"
            style={{
              borderRadius: "var(--radius-sm)",
              transitionTimingFunction: "var(--ease-spring)",
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
          </button>
        </>
      )}
    </nav>
  );
}
