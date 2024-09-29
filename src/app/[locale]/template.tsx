"use client";

import { animatePageIn } from "@/utils/animation";
import { useEffect } from "react";
import { useAnimation } from "@/store/AnimationContext"; // Import context

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="col-1"
        className="fixed left-0 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      <div
        id="col-2"
        className="fixed left-1/4 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      <div
        id="col-3"
        className="fixed left-2/4 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />
      <div
        id="col-4"
        className="fixed left-3/4 top-0 z-10 min-h-screen w-1/4 bg-neutral-950"
      />

      {children}
    </div>
  );
}
