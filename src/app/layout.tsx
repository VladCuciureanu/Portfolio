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
          <Spotlight>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <a
                href="#content"
                className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-orange-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
              >
                Skip to Content
              </a>
              {children}
            </div>
          </Spotlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
