"use client";

import { useSyncExternalStore } from "react";
import { fill, readDtr } from "@/lib/dtr";

const noop = () => () => {};
const getSearch = () => window.location.search;
const getServerSearch = () => "";

/**
 * Dynamic text replacement. Renders the default copy on the server, then
 * swaps {service}/{city} tokens from the query string on the client, so one
 * lander can serve many ad groups: /?service=Ceiling%20Repair&city=Brandon
 */
export function Dtr({ text }: { text: string }) {
  const search = useSyncExternalStore(noop, getSearch, getServerSearch);
  return <>{fill(text, readDtr(search))}</>;
}
