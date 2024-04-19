/**
 * Component: Tile
 */

"use client";

import type { TesseraProps } from "@/lib/utils";
import{ Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


import dayjs from "dayjs";

interface TileProps {
  tessera: TesseraProps;
}

export default function Tile({ tessera }: TileProps) {
  
  let month: string = dayjs(tessera.period).format('MMMM');
  let year: string = dayjs(tessera.period).format('YYYY');

  return (
    <div className="p-4 rounded-none border-2 border-red-600 hover:bg-red-100 dark:border-red-950 h-80 dark:hover:bg-red-950">
      <div className="block h-full w-full">
        <Sheet>
          <SheetTrigger className="block h-full w-full content-center text-red-950 dark:text-red-100 bg-white dark:bg-black font-mono uppercase">
            {month}
            <br />
            {year}
          </SheetTrigger>
          <SheetContent className="w-[100%] sm:w-[640px] md:w-[768px] lg:w-[1024px] dark:bg-stone-950 border-red-950 sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none">
            <SheetHeader>
              <SheetTitle className="text-red-950 dark:text-red-100 font-mono uppercase">{month} {year}</SheetTitle>
              <SheetDescription >
                Content
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
