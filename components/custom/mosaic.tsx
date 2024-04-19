/**
 * Component: Mosaic
 */

"use client";

import type { TesseraProps } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import Switch from "./switch";
import Tile from "./tile";

interface TesseraeProps {
  tesserae: [TesseraProps];
}

export default function Mosaic({ tesserae }: TesseraeProps) {

  return (
    <>
      <Separator className="border border-red-600 dark:border-red-950" />
      <p className="block h-full w-full text-center uppercase text-red-950 dark:text-red-100 font-mono my-4">
        debauchery
      </p>
      <Separator className="border border-red-600 dark:border-red-950" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tesserae.map((tessera) => {
            return(
              <Tile tessera={tessera} key={tessera.id} />
            );
          })}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="h-40 flex items-center justify-center">
          <Switch />
        </div>
      </div>
      <Separator className="border border-red-600 dark:border-red-950" />
      <p className="block h-full w-full text-center uppercase text-red-950 dark:text-red-100 font-mono my-4 text-xs">
        both alcohol and smoking can cause cancer
      </p>
      <p className="block h-full w-full text-center uppercase text-red-950 dark:text-red-100 font-mono my-4 text-sm">
        use responsibly
      </p>
      <Separator className="border border-red-600 dark:border-red-950" />
      <p className="block h-full w-full text-center uppercase text-red-950 dark:text-red-100 font-mono my-4 text-xs">
        {process.env.NEXT_PUBLIC_BITCOIN_ADDRESS}
      </p>
      <Separator className="border border-red-600 dark:border-red-950" />
    </>
  );
}
