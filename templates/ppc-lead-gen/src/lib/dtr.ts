import { siteConfig } from "@/site.config";

export type DtrValues = { service: string; city: string };

const SAFE = /^[A-Za-z0-9 .,'&-]{1,40}$/;

/** Read ?service= and ?city= from the URL, falling back to config defaults. */
export function readDtr(search: string): DtrValues {
  const params = new URLSearchParams(search);
  const pick = (key: keyof DtrValues) => {
    const v = params.get(key)?.trim();
    return v && SAFE.test(v) ? v : siteConfig.dtr[key];
  };
  return { service: pick("service"), city: pick("city") };
}

/** Replace {service} and {city} tokens in a string. */
export function fill(text: string, values: DtrValues): string {
  return text.replaceAll("{service}", values.service).replaceAll("{city}", values.city);
}
