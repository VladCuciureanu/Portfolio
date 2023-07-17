"use client";
import Spotlight from "@/features/Shared/Shell/Spotlight";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Spotlight />
      {children}
    </>
  );
}
