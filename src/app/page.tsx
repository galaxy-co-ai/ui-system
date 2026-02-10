"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { RightDrawer } from "@/components/right-drawer";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenDrawer={() => setDrawerOpen(true)} />

      <RightDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
