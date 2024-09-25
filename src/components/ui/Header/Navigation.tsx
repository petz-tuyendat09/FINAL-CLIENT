import Link from "next/link";
import NavigationCategories from "./NavigationCategories";
import { Icon } from "@iconify/react/dist/iconify.js";
import NavigationAuth from "./NavigationAuth";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-4 text-h4 text-black">
        <li>
          <Link href="/">Home</Link>
        </li>
        <NavigationCategories />
        <li>
          <Link href="/marketplace">Tìm thú cưng</Link>
        </li>
        <NavigationAuth />

        <li className="button-color rounded-full p-2 text-white">
          <Icon icon="mdi:cart-outline" />
        </li>
      </ul>
    </nav>
  );
}
