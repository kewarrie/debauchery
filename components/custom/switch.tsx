/**
 * Component: Switch
 */

"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { Moon, Sun } from "lucide-react";

export default function Switch() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-2 border-red-600 dark:border-red-950 rounded-full focus-visible:ring-red-600 dark:focus-visible:ring-red-950 hover:bg-none dark:hover:bg-none">
            <Sun className="stroke-red-600 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="stroke-red-950 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="text-red-600 dark:text-red-100">
          <DropdownMenuItem className="focus:bg-red-100 dark:focus:bg-red-950 focus:text-red-600 dark:focus:text-red-100 font-mono uppercase" onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-red-100 dark:focus:bg-red-950 focus:text-red-600 dark:focus:text-red-100 font-mono uppercase" onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-red-100 dark:focus:bg-red-950 focus:text-red-600 dark:focus:text-red-100 font-mono uppercase" onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
