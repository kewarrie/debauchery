/**
 * Component: Tessera
 */

"use client";

import type { TesseraProps } from "@/lib/utils";

import dayjs from "dayjs";

interface TileProps {
  tessera: TesseraProps;
}

export default function Tile({ tessera }: TileProps) {

  // console.log(tessera);

  let month: string = dayjs(tessera.period).format('MMMM');
  let year: string = dayjs(tessera.period).format('YYYY');

  return (
    <div className="p-4 rounded-none border-2 border-red-600 hover:bg-red-100 dark:border-red-950 h-80 dark:hover:bg-red-950">
      <div className="block h-full w-full">
        <p className="block h-full w-full text-center lowercase">
          <a href="#" className="block h-full w-full content-center bg-white dark:bg-black">
            {month}
            <br />
            {year}
          </a>
        </p>
      </div>
    </div>
  );
}
