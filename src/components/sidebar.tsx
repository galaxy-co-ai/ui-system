"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Box,
  Palette,
  Type,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Components", href: "/components", icon: Box },
  { label: "Colors", href: "/colors", icon: Palette },
  { label: "Typography", href: "/typography", icon: Type },
  { label: "Layout", href: "/layout", icon: LayoutGrid },
  { label: "Motion", href: "/motion", icon: Sparkles },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

function SidebarContent({
  onNavigate,
  isCollapsed = false,
}: {
  onNavigate?: () => void;
  isCollapsed?: boolean;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Logo */}
      <div className="px-5 pt-6 pb-5">
        {isCollapsed ? (
          <span className="block text-center text-[13px] font-medium tracking-wide text-ink/50 uppercase">
            DS
          </span>
        ) : (
          <>
            <span className="block text-[13px] font-medium tracking-wide text-ink/50 uppercase">
              Design System
            </span>
            <span className="block mt-0.5 text-[11px] text-ink/30">v0.1.0</span>
          </>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5 px-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              title={isCollapsed ? label : undefined}
              className={`
                flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-3 py-2 text-[13px]
                transition-[background-color,color] duration-200
                focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:outline-none
                ${isActive
                  ? "bg-ink/[0.08] text-ink"
                  : "text-ink/50 hover:bg-ink/[0.04] hover:text-ink/80"
                }
              `}
              style={{
                borderRadius: "var(--radius-sm)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              <Icon size={16} strokeWidth={1.5} className="shrink-0" />
              {!isCollapsed && (
                <span className="transition-opacity duration-200">{label}</span>
              )}
            </Link>
          );
        })}
      </nav>

    </>
  );
}

export function Sidebar({ isOpen = false, onClose, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar — floating panel, hidden below lg */}
      <aside
        className="fixed left-0 z-10 hidden overflow-hidden flex-col lg:flex group/sidebar"
        style={{
          top: "var(--panel-inset)",
          bottom: "var(--panel-inset)",
          width: isCollapsed ? "var(--sidebar-collapsed-width)" : "var(--sidebar-width)",
          background: "var(--surface-glass)",
          backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
          WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
          borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
          boxShadow: "var(--shadow-panel)",
          border: "1px solid var(--surface-glass-border)",
          transition: "width 300ms var(--ease-panel)",
        }}
      >
        <SidebarContent isCollapsed={isCollapsed} />

        {/* Edge handle — appears on sidebar hover, click to toggle */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              flex items-center justify-center w-5 h-14
              transition-opacity duration-200
              ${isCollapsed
                ? "opacity-40 hover:opacity-100"
                : "opacity-0 group-hover/sidebar:opacity-100"
              }
            `}
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <div className="w-[3px] h-7 rounded-full bg-ink/30 transition-colors duration-150 hover:bg-ink/60" />
          </button>
        )}
      </aside>

      {/* Mobile sidebar — Sheet drawer */}
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
        <SheetContent
          side="left"
          showCloseButton
          className="w-[260px] border-r border-ink/[0.06] p-0 sm:max-w-[260px]"
          style={{
            background: "var(--surface-glass)",
            backdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
            WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(var(--glass-saturate))",
          }}
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarContent onNavigate={onClose} />
        </SheetContent>
      </Sheet>
    </>
  );
}
