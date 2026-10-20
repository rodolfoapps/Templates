"use client";

import { useSyncExternalStore } from "react";
import { fill, readDtr } from "@/lib/dtr";

const noop = () => () => {};
const getSearch = () => window.location.search;
const getServerSearch = () => "";

/** Dynamic text: /?service=Deep%20Plane%20Facelift&city=Park%20City */
export function Dtr({ text }: { text: string }) {
  const search = useSyncExternalStore(noop, getSearch, getServerSearch);
  return <>{fill(text, readDtr(search))}</>;
}
