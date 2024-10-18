"use client";

import { usePathname } from "next/navigation";
import { links } from "./link";
import NormalTransitionLink from "@/components/ui/NormalTransitionLink";
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
          <NormalTransitionLink href={link.url}>
            {link.label}
          </NormalTransitionLink>
        </li>
      ))}
    </ul>
  );
}
