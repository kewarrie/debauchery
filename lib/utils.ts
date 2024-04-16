import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Interface: Tessera Types
 * 
 * Traditional mosaics are made of small cubes of
 * roughly square pieces of stone or hand made glass
 * enamel of different colours, known as TESSERAE.
 * 
 * This simply describes a single financial record for a single month.
 */

export interface TesseraProps {
  id: number;
  income: number;
  personal_loans: number;
  bank_loans: number;
  mobile_app_loans: number;
  recurring_expenses: number;
  personal_loans_repayment: number;
  bank_loans_repayment: number;
  mobile_app_loans_repayment: number;
  debauchery: number;
  other_expenses: number;
  spotify: number;
  savings: number;
  period: string;
  /* Pocketbase */
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}
