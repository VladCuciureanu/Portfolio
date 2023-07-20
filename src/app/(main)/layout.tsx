"use client";
import RupeeEasterEgg from "@/features/Shared/Shell/Rupee";
import Spotlight from "@/features/Shared/Shell/Spotlight";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Spotlight />
      <RupeeEasterEgg />
      {children}
    </>
  );
}
