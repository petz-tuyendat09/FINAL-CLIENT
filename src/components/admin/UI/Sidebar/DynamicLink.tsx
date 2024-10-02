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
            pathname === link.url ? "bg-black text-white" : ""
          } rounded-xl flex items-center gap-1 rounded-full px-8 py-3 transition delay-75 duration-300 hover:bg-[#5d5d5d] hover:text-white`}
        >
          <span>{link.icon}</span>
          <Link href={link.url}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
