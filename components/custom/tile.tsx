/**
 * Component: Tile
 */

"use client";

import type { TesseraProps } from "@/lib/utils";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import{ Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import dayjs, { Dayjs } from "dayjs";

const options: any = { // Using `any` is risky business but hey, shortcuts!
  style: 'decimal',  // Other options: 'currency', 'percent', etc.
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

interface TileProps {
  tessera: TesseraProps;
}

export default function Tile({ tessera }: TileProps) {
  
  // string formation
  const month: string = dayjs(tessera.period).format('MMMM');
  const year: string = dayjs(tessera.period).format('YYYY');

  // TEMPORARY: new post logic; update when posting recent data
  const current_period: Dayjs = dayjs().subtract(Number(process.env.NEXT_PUBLIC_YEARS_BACK), 'year').startOf('month');
  
  // calculations
  const total_money_in: number = tessera.opening_balance + tessera.income + tessera.personal_loans + tessera.bank_loans + tessera.mobile_app_loans;
  const total_money_out: number = tessera.recurring_expenses + tessera.personal_loans_repayment + tessera.bank_loans_repayment + tessera.mobile_app_loans_repayment + tessera.debauchery + tessera.other_expenses + tessera.spotify + tessera.savings;

  return (
    <div className="p-4 rounded-none border-2 border-red-600 hover:bg-red-100 dark:border-red-950 h-80 dark:hover:bg-red-950">
      <div className="block h-full w-full">
        <Sheet>
          <SheetTrigger className="block h-full w-full content-center text-red-950 dark:text-red-100 bg-white dark:bg-black font-mono uppercase" data-umami-event={`period-${month.toLocaleLowerCase()}-${year.toLocaleLowerCase()}`}>
            {month}
            &nbsp;
            {year}
          </SheetTrigger>
          <SheetContent className="w-[100%] sm:w-[640px] md:w-[768px] lg:w-[1024px] dark:bg-stone-950 border-red-950 sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none">
            <SheetHeader>
              <SheetTitle className="text-red-950 dark:text-red-100 font-mono uppercase">{month} {year}</SheetTitle>
              <SheetDescription className="text-stone-600 font-mono lowercase">
                statement of account
              </SheetDescription>
              <Separator className="my-3 border border-white dark:border-stone-950" />
            </SheetHeader>
            <ScrollArea className="h-[100%] w-[100%]">
              <div className="py-4">
                <table className="table-auto w-full border-separate border-red-950">
                  <thead>
                    <tr>
                      <th colSpan={2} className="border border-x-white dark:border-x-stone-950 border-t-stone-600 border-b-stone-600 text-green-900 font-mono capitalize py-2">money in (kes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">opening balance</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">{tessera.opening_balance.toLocaleString('en-US', options)}</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">income</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">{tessera.income.toLocaleString('en-US', options)}</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">personal loans</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">{tessera.personal_loans.toLocaleString('en-US', options)}</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">bank loans</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">{tessera.bank_loans.toLocaleString('en-US', options)}</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">mobile app loans</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">{tessera.mobile_app_loans.toLocaleString('en-US', options)}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th className="font-mono capitalize text-green-900 text-left py-2">total money in</th>
                      <th className="font-mono capitalize text-green-900 text-right py-2">{total_money_in.toLocaleString('en-US', options)}</th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th colSpan={2} className="border border-x-white dark:border-x-stone-950 border-t-stone-600 border-b-stone-600 text-yellow-900 font-mono capitalize py-2">money out (kes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">recurring expenses</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.recurring_expenses.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">personal loans repayment</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.personal_loans_repayment.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">bank loans repayment</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.bank_loans_repayment.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">mobile app loans repayment</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.mobile_app_loans_repayment.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-red-600 capitalize py-2">debauchery</td>
                      <td className="font-mono text-red-600 capitalize py-2 text-right">({tessera.debauchery.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">other expenses</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.other_expenses.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">spotify</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.spotify.toLocaleString('en-US', options)})</td>
                    </tr>
                    <tr>
                      <td className="font-mono text-stone-600 capitalize py-2">savings</td>
                      <td className="font-mono text-stone-600 capitalize py-2 text-right">({tessera.savings.toLocaleString('en-US', options)})</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th className="font-mono capitalize text-yellow-900 text-left py-2">total money out</th>
                      <th className="font-mono capitalize text-yellow-900 text-right py-2">{total_money_out.toLocaleString('en-US', options)}</th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th colSpan={2} className="border border-x-white dark:border-x-stone-950 border-t-stone-600 border-b-stone-600 text-blue-900 font-mono capitalize py-2">carry forward (kes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono capitalize text-blue-900 py-2">c.f. to {dayjs(tessera.period).add(1, 'month').format('MMM YYYY')}</td>
                      <td className="font-mono capitalize text-blue-900 py-2 text-right">{(total_money_in - total_money_out).toLocaleString('en-US', options)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Separator className="my-6 border border-white dark:border-stone-950" />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
