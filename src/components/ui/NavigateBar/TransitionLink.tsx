import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";
import { motion } from "framer-motion";

interface TransitionLinkProps {
  href: string;
  label: string;
  isHidden: boolean;
}

const variant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 100,

    transition: {
      delay: 0.6,
    },
  },
};

export default function TransitionLink({
  href,
  label,
  isHidden,
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  }

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate={isHidden ? "hidden" : "show"}
      className={`${pathname === href ? "white bg-black" : "text-white"} h-full min-w-max max-w-max rounded-full px-4 py-2`}
    >
      <button className="w-fit" onClick={handleClick}>
        {label}
      </button>
    </motion.div>
  );
}
