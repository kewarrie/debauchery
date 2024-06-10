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
    template: '%s | D E B A U C H E R Y',
    default: 'D E B A U C H E R Y',
  },
  description: "/dɪˈbɔːtʃ(ə)ri/ — Excessive indulgence in sex and drugs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Script src="https://analytics.marekia.com/script.js" data-website-id="ac92cb2f-a7d5-43e9-994c-ccced1081221" />
    </html>
  );
}
