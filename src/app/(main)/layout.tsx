"use client";
import RupeeEasterEgg from "@/components/Shared/Shell/Rupee";
import Spotlight from "@/components/Shared/Shell/Spotlight";
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
