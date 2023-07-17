import { DefaultMetadata } from "@/libs/seo";
import Providers from "@/features/Shared/Providers";
import "@/styles/globals.scss";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = DefaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
