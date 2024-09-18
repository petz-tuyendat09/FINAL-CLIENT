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
    <ul className="my-4 space-y-4">
      {links.map((link) => (
        <li
          key={link.url}
          className={`${
            pathname === link.url ? "bg-primary" : ""
          } flex items-center gap-1 rounded-xl px-8 py-4 transition duration-300 hover:bg-primary-hover`}
        >
          <span>{link.icon}</span>
          <Link href={link.url}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
