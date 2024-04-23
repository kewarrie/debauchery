/**
 * Root Layout
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */

import type { Metadata } from "next";

import Script from 'next/script'
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | /dɪˈbɔːtʃ(ə)ri/',
    default: '/dɪˈbɔːtʃ(ə)ri/',
  },
  description: "excessive indulgence in sex, alcohol, and drugs",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Script src="https://umami-cyan-eta.vercel.app/script.js" data-website-id="ac92cb2f-a7d5-43e9-994c-ccced1081221" />
    </html>
  );
}
