"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NormalTransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  }
  return (
    <div>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    </div>
  );
}
