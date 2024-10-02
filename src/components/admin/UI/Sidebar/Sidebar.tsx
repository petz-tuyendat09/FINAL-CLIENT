import LogOut from "./LogoutButton";
import DynamicLink from "./DynamicLink";
import Logo from "@/components/ui/Header/Logo";
export default function Sidebar() {
  return (
    <div className="sticky top-12 flex h-full flex-col">
      <div className="rounded-xl h-full px-6 text-lg">
        <Logo />
        <DynamicLink />
        <LogOut />
      </div>
    </div>
  );
}
