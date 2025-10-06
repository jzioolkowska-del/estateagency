"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function OfferTabs({ base }: {base: string;}) {
  const pathname = usePathname();
  const tabs = [
  { href: `${base}`, label: "Szczegóły" },
  { href: `${base}/galeria`, label: "Galeria" },
  { href: `${base}/lokalizacja`, label: "" }];


  return (
    <div className="mt-6 flex flex-wrap gap-2 border-b">
      {tabs.map((t) => {
        const isActive = pathname === t.href;
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`px-3 py-2 text-sm rounded-t-md border-b-2 !whitespace-pre-line ${
            isActive ?
            "border-primary text-foreground" :
            "border-transparent text-muted-foreground hover:text-foreground"}`
            }>

            {t.label}
          </Link>);

      })}
    </div>);

}