"use client";

import { animatePageIn } from "@/utils/animation";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const router = useRouter();

  const userRole = session?.data?.user.userRole;

  const pathname = usePathname();

  useEffect(() => {
    animatePageIn();
  }, [pathname]);

  return (
    <div>
      <motion.div
        id="col-1"
        className="fixed left-0 top-0 z-50 min-h-screen w-1/4 bg-neutral-950"
      />
      <motion.div
        id="col-2"
        className="fixed left-1/4 top-0 z-50 min-h-screen w-1/4 bg-neutral-950"
      />
      <motion.div
        id="col-3"
        className="fixed left-2/4 top-0 z-50 min-h-screen w-1/4 bg-neutral-950"
      />
      <motion.div
        id="col-4"
        className="fixed left-3/4 top-0 z-50 min-h-screen w-1/4 bg-neutral-950"
      />

      {children}
    </div>
  );
}
