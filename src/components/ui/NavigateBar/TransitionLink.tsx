"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface TransitionLinkProps {
  href: string;
  label: string;
}

export default function TransitionLink({ href, label }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  }

  return (
    <button
      className={`${pathname === href ? "bg-black text-white" : "text-black"} rounded-lg px-4 py-3`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
