"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/* ---------------------------------------------------------------------------
 * Animation
 * Stagger entrance, spring expand, exit 30% faster than enter
 * --------------------------------------------------------------------------- */

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const expandSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

const collapseSpring = {
  type: "spring" as const,
  stiffness: 520,
  damping: 35,
};

/* ---------------------------------------------------------------------------
 * Shared label
 * --------------------------------------------------------------------------- */

function VariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[10px] text-ink/20"
      style={{ fontFamily: "var(--font-code)" }}
    >
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------------------
 * Expanded content — absorbed from interactive-controls.tsx
 * --------------------------------------------------------------------------- */

function ButtonExpanded() {
  return (
    <div className="space-y-6">
      <div>
        <VariantLabel>variants</VariantLabel>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <div className="flex flex-col items-center gap-2">
            <Button
              className="bg-cta text-cta-foreground hover:bg-cta/90 active:scale-[0.97]"
              style={{
                borderRadius: "var(--radius-md)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              Primary
            </Button>
            <VariantLabel>primary</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">Secondary</Button>
            <VariantLabel>secondary</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="ghost">Ghost</Button>
            <VariantLabel>ghost</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline">Outline</Button>
            <VariantLabel>outline</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="destructive">Danger</Button>
            <VariantLabel>danger</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="icon" variant="secondary">
              <Plus size={16} strokeWidth={1.5} />
            </Button>
            <VariantLabel>icon</VariantLabel>
          </div>
        </div>
      </div>

      <div>
        <VariantLabel>small</VariantLabel>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <div className="flex flex-col items-center gap-2">
            <Button
              size="sm"
              className="bg-cta text-cta-foreground hover:bg-cta/90 active:scale-[0.97]"
              style={{
                borderRadius: "var(--radius-sm)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              Primary
            </Button>
            <VariantLabel>primary</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="sm" variant="secondary">Secondary</Button>
            <VariantLabel>secondary</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="sm" variant="ghost">Ghost</Button>
            <VariantLabel>ghost</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="sm" variant="outline">Outline</Button>
            <VariantLabel>outline</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="sm" variant="destructive">Danger</Button>
            <VariantLabel>danger</VariantLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Heart size={14} strokeWidth={1.5} />
            </Button>
            <VariantLabel>icon</VariantLabel>
          </div>
        </div>
      </div>
    </div>
  );
}

function SwitchExpanded() {
  const [animations, setAnimations] = useState(true);
  const [glass, setGlass] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <VariantLabel>toggle rows</VariantLabel>
        <div className="mt-3 space-y-2">
          {[
            { label: "Animations", checked: animations, onChange: setAnimations },
            { label: "Glass effects", checked: glass, onChange: setGlass },
            { label: "Reduced motion", checked: reducedMotion, onChange: setReducedMotion },
          ].map(({ label, checked, onChange }) => (
            <div
              key={label}
              className="flex items-center justify-between border border-ink/[0.06] bg-ink/[0.02] px-4 py-3"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              <span className="text-[13px] text-ink/70">{label}</span>
              <Switch checked={checked} onCheckedChange={onChange} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <VariantLabel>sizes</VariantLabel>
        <div className="mt-3 flex items-end gap-8">
          {(["sm", "default", "lg"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Switch size={size} defaultChecked />
              <VariantLabel>{size === "default" ? "md" : size}</VariantLabel>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabsExpanded() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {/* Pill */}
      <div>
        <VariantLabel>pill</VariantLabel>
        <Tabs defaultValue="design" className="mt-2">
          <TabsList
            className="h-auto border border-ink/[0.06] bg-ink/[0.03] p-1"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            {["Design", "Code", "Preview"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="text-[12px] text-ink/40 transition-[background-color,color] duration-200 data-[state=active]:bg-ink/[0.1] data-[state=active]:text-ink data-[state=active]:shadow-sm"
                style={{
                  borderRadius: "var(--radius-sm)",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="design" className="mt-3">
            <p className="text-[13px] text-ink/30">Design tokens and visual properties</p>
          </TabsContent>
          <TabsContent value="code" className="mt-3">
            <p className="text-[13px] text-ink/30">Implementation and code examples</p>
          </TabsContent>
          <TabsContent value="preview" className="mt-3">
            <p className="text-[13px] text-ink/30">Live component preview</p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Underline */}
      <div>
        <VariantLabel>underline</VariantLabel>
        <Tabs defaultValue="overview" className="mt-2">
          <TabsList className="h-auto w-full justify-start gap-0 rounded-none border-b border-ink/[0.06] bg-transparent p-0">
            {["Overview", "Props", "Examples"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="rounded-none border-b-2 border-transparent px-4 pb-2.5 pt-2 text-[12px] text-ink/40 shadow-none transition-[border-color,color] duration-200 data-[state=active]:border-ink/60 data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="overview" className="mt-3">
            <p className="text-[13px] text-ink/30">Component overview and usage</p>
          </TabsContent>
          <TabsContent value="props" className="mt-3">
            <p className="text-[13px] text-ink/30">Available props and configuration</p>
          </TabsContent>
          <TabsContent value="examples" className="mt-3">
            <p className="text-[13px] text-ink/30">Usage examples and patterns</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function InputExpanded() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <VariantLabel>plain</VariantLabel>
        <Input
          placeholder="Enter value..."
          className="mt-2 border-ink/[0.08] bg-ink/[0.03] text-[13px] text-ink placeholder:text-ink/25 focus-visible:ring-ink/20"
          style={{ borderRadius: "var(--radius-md)" }}
        />
      </div>
      <div>
        <VariantLabel>with icon</VariantLabel>
        <div className="relative mt-2">
          <Search
            size={15}
            strokeWidth={1.5}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/25"
          />
          <Input
            placeholder="Search components..."
            className="border-ink/[0.08] bg-ink/[0.03] pl-9 text-[13px] text-ink placeholder:text-ink/25 focus-visible:ring-ink/20"
            style={{ borderRadius: "var(--radius-md)" }}
          />
        </div>
      </div>
    </div>
  );
}

function DialogExpanded() {
  return (
    <div className="space-y-6">
      <div>
        <VariantLabel>with description</VariantLabel>
        <div className="mt-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to continue?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button variant="ghost" size="sm">
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-cta text-cta-foreground hover:bg-cta/90"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <VariantLabel>minimal</VariantLabel>
        <div className="mt-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                Simple Dialog
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Settings saved</DialogTitle>
              </DialogHeader>
              <p className="text-[13px] text-ink/50 mt-2">
                Your preferences have been updated successfully.
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

function TooltipExpanded() {
  return (
    <div className="space-y-6">
      <div>
        <VariantLabel>positions</VariantLabel>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <div key={side} className="flex flex-col items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    {side}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side={side}>
                  <p>Tooltip on {side}</p>
                </TooltipContent>
              </Tooltip>
              <VariantLabel>{side}</VariantLabel>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AvatarExpanded() {
  return (
    <div className="space-y-6">
      <div>
        <VariantLabel>sizes</VariantLabel>
        <div className="mt-3 flex items-end gap-4">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Avatar size={size}>
                <AvatarFallback>
                  {size === "xs" ? "A" : size.toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <VariantLabel>{size}</VariantLabel>
            </div>
          ))}
        </div>
      </div>
      <div>
        <VariantLabel>with image</VariantLabel>
        <div className="mt-3 flex items-center gap-3">
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>RF</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Card definitions
 * --------------------------------------------------------------------------- */

interface ComponentDef {
  id: string;
  name: string;
  collapsed: React.ReactNode;
  expanded?: React.ReactNode;
  fullWidth?: boolean;
}

const badgeItems = [
  { label: "Live", className: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" },
  { label: "Draft", className: "border-ink/[0.08] bg-ink/[0.05] text-ink/50" },
  { label: "Deprecated", className: "border-red-500/20 bg-red-500/10 text-red-400" },
  { label: "Beta", className: "border-purple-500/20 bg-purple-500/10 text-purple-400" },
  { label: "New", className: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400" },
];

const componentDefs: ComponentDef[] = [
  {
    id: "button",
    name: "Button",
    collapsed: (
      <Button
        className="bg-cta text-cta-foreground hover:bg-cta/90 active:scale-[0.97]"
        style={{
          borderRadius: "var(--radius-md)",
          transitionTimingFunction: "var(--ease-spring)",
        }}
      >
        Get Started
      </Button>
    ),
    expanded: <ButtonExpanded />,
  },
  {
    id: "switch",
    name: "Switch",
    collapsed: <Switch aria-label="Toggle example" />,
    expanded: <SwitchExpanded />,
  },
  {
    id: "tabs",
    name: "Tabs",
    collapsed: (
      <Tabs defaultValue="design" className="w-fit">
        <TabsList
          className="h-auto border border-ink/[0.06] bg-ink/[0.03] p-1"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          {["Design", "Code", "Preview"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase()}
              className="text-[12px] text-ink/40 transition-[background-color,color] duration-200 data-[state=active]:bg-ink/[0.1] data-[state=active]:text-ink data-[state=active]:shadow-sm"
              style={{
                borderRadius: "var(--radius-sm)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    ),
    expanded: <TabsExpanded />,
  },
  {
    id: "input",
    name: "Input",
    collapsed: (
      <Input
        placeholder="Search..."
        className="max-w-[200px] border-ink/[0.08] bg-ink/[0.03] text-[13px] text-ink placeholder:text-ink/25 focus-visible:ring-ink/20"
        style={{ borderRadius: "var(--radius-md)" }}
      />
    ),
    expanded: <InputExpanded />,
  },
  {
    id: "dialog",
    name: "Dialog",
    collapsed: (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-ink/[0.08] text-ink/60 hover:bg-ink/[0.04]"
            style={{ borderRadius: "var(--radius-sm)" }}
          >
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Example Dialog</DialogTitle>
            <DialogDescription>
              Glass morphism overlay with spring animation.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    ),
    expanded: <DialogExpanded />,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    collapsed: (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-ink/60 hover:bg-ink/[0.04]"
          >
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Glass tooltip</p>
        </TooltipContent>
      </Tooltip>
    ),
    expanded: <TooltipExpanded />,
  },
  {
    id: "avatar",
    name: "Avatar",
    collapsed: (
      <div className="flex items-center -space-x-2">
        <Avatar size="md">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarFallback>RF</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <Avatar size="md" className="border-2 border-[var(--neutral-2)]">
          <AvatarFallback className="text-[10px]">+3</AvatarFallback>
        </Avatar>
      </div>
    ),
    expanded: <AvatarExpanded />,
  },
  {
    id: "badge",
    name: "Badge",
    collapsed: (
      <div className="flex flex-wrap items-center gap-2">
        {badgeItems.map(({ label, className }) => (
          <Badge
            key={label}
            variant="outline"
            className={`text-[11px] font-medium ${className}`}
            style={{ borderRadius: "var(--radius-xs)" }}
          >
            {label}
          </Badge>
        ))}
      </div>
    ),
    fullWidth: true,
  },
];

/* ---------------------------------------------------------------------------
 * Chevron
 * --------------------------------------------------------------------------- */

function Chevron() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * ComponentCard
 * --------------------------------------------------------------------------- */

function ComponentCard({
  def,
  isExpanded,
  onToggle,
  reducedMotion,
}: {
  def: ComponentDef;
  isExpanded: boolean;
  onToggle: () => void;
  reducedMotion: boolean;
}) {
  const hasExpanded = !!def.expanded;

  return (
    <motion.div
      layout={!reducedMotion}
      transition={expandSpring}
      className={cn(
        "border border-ink/[0.06] bg-ink/[0.02]",
        "transition-colors",
        "hover:border-ink/[0.1]",
        hasExpanded && "cursor-pointer",
        def.fullWidth && "col-span-full",
      )}
      style={{
        borderRadius: "var(--radius-lg)",
        transitionDuration: "var(--duration-hover)",
      }}
      onClick={hasExpanded ? onToggle : undefined}
      role={hasExpanded ? "button" : undefined}
      tabIndex={hasExpanded ? 0 : undefined}
      onKeyDown={
        hasExpanded
          ? (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggle();
              }
            }
          : undefined
      }
      aria-expanded={hasExpanded ? isExpanded : undefined}
    >
      {/* Collapsed — always visible */}
      <div className="px-5 py-5">
        <div className="mb-4 flex items-center gap-1.5 select-none">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/30"
            style={{ fontFamily: "var(--font-code)" }}
          >
            {def.name}
          </span>
          {hasExpanded && (
            <motion.span
              className="text-ink/20"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Chevron />
            </motion.span>
          )}
        </div>
        <div
          className="flex items-center justify-center py-2"
          onClick={(e) => e.stopPropagation()}
        >
          {def.collapsed}
        </div>
      </div>

      {/* Expanded — spring in/out */}
      <AnimatePresence initial={false}>
        {isExpanded && def.expanded && (
          <motion.div
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reducedMotion ? { duration: 0 } : collapseSpring}
            className="overflow-hidden"
          >
            <div
              className="border-t border-ink/[0.06] px-5 py-5"
              onClick={(e) => e.stopPropagation()}
            >
              {def.expanded}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * Page
 * --------------------------------------------------------------------------- */

export default function ComponentsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = !!prefersReducedMotion;

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <motion.header
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <p
          className="mb-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/30"
          style={{ fontFamily: "var(--font-code)" }}
        >
          Component Library
        </p>
        <h1
          className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-ink"
          style={{ fontFamily: "var(--font-display)", lineHeight: "1.1" }}
        >
          Components
        </h1>
        <p className="mt-2 text-[15px] text-ink/50">
          Interactive primitives. Click to explore variants.
        </p>
      </motion.header>

      {/* Grid */}
      <motion.div
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={reducedMotion ? undefined : staggerContainer}
        initial="hidden"
        animate="show"
      >
        {componentDefs.map((def) => (
          <motion.div
            key={def.id}
            variants={reducedMotion ? undefined : fadeUp}
            className={def.fullWidth ? "col-span-full" : ""}
          >
            <ComponentCard
              def={def}
              isExpanded={expandedId === def.id}
              onToggle={() => handleToggle(def.id)}
              reducedMotion={reducedMotion}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
