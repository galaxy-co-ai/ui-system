"use client";

import { useState } from "react";
import { Search, Plus, Heart } from "lucide-react";
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

/* ------------------------------------------------
   Shared label components
   ------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/30"
      style={{ fontFamily: "var(--font-code)" }}
    >
      {children}
    </h3>
  );
}

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

/* ------------------------------------------------
   Buttons
   ------------------------------------------------ */

function ButtonsShowcase() {
  return (
    <div>
      <SectionLabel>Buttons</SectionLabel>

      {/* Default size */}
      <div className="mt-4 flex flex-wrap items-end gap-3">
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

      {/* Small variants */}
      <div className="mt-6">
        <VariantLabel>small</VariantLabel>
        <div className="mt-2 flex flex-wrap items-end gap-3">
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

/* ------------------------------------------------
   Switches
   ------------------------------------------------ */

function SwitchesShowcase() {
  const [animations, setAnimations] = useState(true);
  const [glass, setGlass] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div>
      <SectionLabel>Switches</SectionLabel>

      {/* Toggle rows */}
      <div className="mt-4 space-y-2">
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

      {/* Size variants */}
      <div className="mt-6 flex items-end gap-8">
        <div className="flex flex-col items-center gap-2">
          <Switch size="sm" defaultChecked />
          <VariantLabel>sm</VariantLabel>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch defaultChecked />
          <VariantLabel>md</VariantLabel>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch size="lg" defaultChecked />
          <VariantLabel>lg</VariantLabel>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Tabs
   ------------------------------------------------ */

function TabsShowcase() {
  return (
    <div>
      <SectionLabel>Tabs</SectionLabel>

      <div className="mt-4 grid gap-8 sm:grid-cols-2">
        {/* Pill variant */}
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
              <p className="text-[13px] text-ink/30">
                Design tokens and visual properties
              </p>
            </TabsContent>
            <TabsContent value="code" className="mt-3">
              <p className="text-[13px] text-ink/30">
                Implementation and code examples
              </p>
            </TabsContent>
            <TabsContent value="preview" className="mt-3">
              <p className="text-[13px] text-ink/30">
                Live component preview
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Underline variant */}
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
              <p className="text-[13px] text-ink/30">
                Component overview and usage
              </p>
            </TabsContent>
            <TabsContent value="props" className="mt-3">
              <p className="text-[13px] text-ink/30">
                Available props and configuration
              </p>
            </TabsContent>
            <TabsContent value="examples" className="mt-3">
              <p className="text-[13px] text-ink/30">
                Usage examples and patterns
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------
   Inputs
   ------------------------------------------------ */

function InputsShowcase() {
  return (
    <div>
      <SectionLabel>Inputs</SectionLabel>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
    </div>
  );
}

/* ------------------------------------------------
   Badges
   ------------------------------------------------ */

function BadgesShowcase() {
  const badges = [
    { label: "Live", className: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" },
    { label: "Draft", className: "border-ink/[0.08] bg-ink/[0.05] text-ink/50" },
    { label: "Deprecated", className: "border-red-500/20 bg-red-500/10 text-red-400" },
    { label: "Beta", className: "border-purple-500/20 bg-purple-500/10 text-purple-400" },
    { label: "New", className: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400" },
  ];

  return (
    <div>
      <SectionLabel>Badges</SectionLabel>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {badges.map(({ label, className }) => (
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
    </div>
  );
}

/* ------------------------------------------------
   Showcase tabs config
   ------------------------------------------------ */

const showcaseTabs = [
  { value: "buttons", label: "Buttons", component: ButtonsShowcase },
  { value: "switches", label: "Switches", component: SwitchesShowcase },
  { value: "tabs", label: "Tabs", component: TabsShowcase },
  { value: "inputs", label: "Inputs", component: InputsShowcase },
  { value: "badges", label: "Badges", component: BadgesShowcase },
];

/* ------------------------------------------------
   Main export — tabbed showcase
   ------------------------------------------------ */

export function InteractiveControls() {
  return (
    <div id="showcase">
      {/* Tabbed showcase */}
      <Tabs defaultValue="buttons">
        <TabsList
          className="h-auto border border-ink/[0.06] bg-ink/[0.03] p-1"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          {showcaseTabs.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="text-[12px] text-ink/40 transition-[background-color,color] duration-200 data-[state=active]:bg-ink/[0.1] data-[state=active]:text-ink data-[state=active]:shadow-sm"
              style={{
                borderRadius: "var(--radius-sm)",
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {showcaseTabs.map(({ value, component: Component }) => (
          <TabsContent key={value} value={value} className="mt-8">
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
