"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { InteractiveControls } from "@/components/interactive-controls";
import { RightDrawer } from "@/components/right-drawer";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenDrawer={() => setDrawerOpen(true)} />
      <InteractiveControls />

      <RightDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
