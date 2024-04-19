/**
 * Root Page
 * 
 * Link: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
 */

/**
 * Typescript Type: TesseraProps
 */

import type { TesseraProps } from "@/lib/utils";

import * as React from "react";

/**
 * React Component: Mosaic Layout
 * 
 * We pass the loaded data (Tessera) for display in the square
 * layout that has been implemented on the homepage.
 */

import Mosaic from "@/components/custom/mosaic";

/**
 * Custom Function: load_data()
 * 
 * Load data from the API, a hosted instance of Pocketbase.
 */

async function load_data() {
  const res: any = await fetch(`${process.env.API_URL}?sort=-period`);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

/**
 * React Render
 */

export default async function Page() {
  const data: { page: number, perPage: number, totalItems: number, totalPages: number, items: [TesseraProps] } = await load_data();

  return <Mosaic tesserae={data.items} />;
}
