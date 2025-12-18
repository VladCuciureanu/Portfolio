import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "../utils";
import { ThemeProvider } from "next-themes";
import { DefaultMetadata, JsonLDMetadata } from "../components/shared/seo";
import Spotlight from "../components/shared/spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = DefaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background leading-relaxed text-stone-600 dark:text-stone-400 antialiased selection:bg-orange-500 dark:selection:bg-orange-300 selection:text-orange-100 dark:selection:text-orange-900 relative",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <Spotlight>
            <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <a
                href="#content"
                className="absolute left-0 top-0 block -translate-x-full rounded bg-linear-to-br from-orange-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
              >
                Skip to Content
              </a>
              {children}
            </div>
          </Spotlight>
        </ThemeProvider>
        <JsonLDMetadata metadata={metadata} />
      </body>
    </html>
  );
}
