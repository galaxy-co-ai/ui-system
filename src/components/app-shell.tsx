"use client";

import { useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleCollapseToggle = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  const currentSidebarWidth = sidebarCollapsed ? 60 : 220;

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleCollapseToggle}
      />

      {/* Mobile hamburger — fixed top-left, visible below lg */}
      <button
        onClick={handleMenuToggle}
        className="fixed top-4 left-4 z-20 flex h-9 w-9 items-center justify-center text-ink/50 transition-colors duration-200 hover:text-ink/80 focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:outline-none lg:hidden"
        style={{
          background: "var(--surface-glass)",
          backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
          WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-active)",
          border: "1px solid var(--surface-glass-border)",
          transitionTimingFunction: "var(--ease-spring)",
        }}
        aria-label="Open navigation"
      >
        <Menu size={16} strokeWidth={1.5} />
      </button>

      <main
        className="transition-[margin-left] duration-300 lg:ml-[var(--_sidebar-w)]"
        style={{
          ["--_sidebar-w" as string]: `${currentSidebarWidth}px`,
          transitionTimingFunction: "var(--ease-panel)",
        }}
      >
        {children}
      </main>
    </>
  );
}
