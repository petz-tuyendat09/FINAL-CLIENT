import UserIcon from "./UserIcon";
import CartIcon from "./CartIcon";
import Menu from "./Menu";

export default function Navigation() {
  return (
    <nav>
      <ul className="fixed right-16 top-8 z-50 flex items-center gap-2 text-h4 text-black">
        <UserIcon />
        <CartIcon />
        <Menu />
      </ul>
    </nav>
  );
}
