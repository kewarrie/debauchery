/**
 * Component: Switch
 */

"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react";

export default function Switch() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button variant="outline" size="icon" className="border-2 border-red-600 dark:border-red-950 rounded-full focus-visible:ring-red-600 dark:focus-visible:ring-red-950 hover:bg-none dark:hover:bg-none visible dark:hidden" onClick={() => setTheme("dark")}>
        <Sun className="stroke-red-600 h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button variant="outline" size="icon" className="border-2 border-red-600 dark:border-red-950 rounded-full focus-visible:ring-red-600 dark:focus-visible:ring-red-950 hover:bg-none dark:hover:bg-none hidden dark:flex" onClick={() => setTheme("light")}>
        <Moon className="stroke-red-950 absolute h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
