import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    label: "Tin nhắn",
    to: "/",
  },
  {
    label: "Đặt lịch",
    to: "/shop",
  },
];

export default function Navigation() {
  return (
    <ul className="flex flex-col gap-4 text-4xl">
      {links.map((link) => (
        <motion.li
          key={link.label}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
        >
          <Link href={link.to}>{link.label}</Link>
        </motion.li>
      ))}
    </ul>
  );
}
