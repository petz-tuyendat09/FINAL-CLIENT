import Link from "next/link";
import NavigationCategories from "./NavigationCategories";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4 text-h4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <NavigationCategories />
      </ul>
    </nav>
  );
}
