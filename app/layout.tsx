import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Oxygen({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: { template: `%s | The First Move`, default: "The First Move" },
  description: "Trusted Planners for Glorious Events",
  metadataBase: new URL("https://the-first-move.vercel.app"),
  openGraph: {
    images: "/tfm-logo.png",
    title: "The First Move",
    description: "Crafting Unforgettable Luxury Celebrations",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "thefirstmove",
    "the first move",
    "event organisations",
    "event planners",
  ],
};

const GA_ID = process.env.GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <GoogleAnalytics gaId={GA_ID} />
      <body className={cn("min-h-dvh bg-background", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
