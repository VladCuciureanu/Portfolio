import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";
import Spotlight from "@/components/shared/spotlight";
import ThemeProvider from "@/components/shared/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vlad Cuciureanu",
  description: "Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          "bg-neutral-900 leading-relaxed text-neutral-400 antialiased selection:bg-orange-300 selection:text-orange-900 relative",
          inter.className,
        )}
      >
        <ThemeProvider>
          <Spotlight>{children}</Spotlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
