"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/sidebar";
import { FloatingTopNav } from "@/components/floating-top-nav";

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
      <FloatingTopNav
        onMenuToggle={handleMenuToggle}
        sidebarWidth={currentSidebarWidth}
      />
      <main className="transition-[margin-left] duration-300 lg:ml-[var(--_sidebar-w)]"
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
