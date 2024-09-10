"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "./link";
interface DynamicLink {
  children: React.ReactNode;
  url: string;
}

export default function DynamicLink() {
  const pathname = usePathname();

  return (
    <ul className="space-y-4 my-4">
      {links.map((link) => (
        <li
          key={link.url}
          className={`${
            pathname === link.url ? "bg-primary" : ""
          } flex items-center gap-1 px-8 py-4 rounded-xl`}
        >
          <span>{link.icon}</span>
          <Link href={link.url}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
