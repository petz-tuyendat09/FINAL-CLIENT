import LogOut from "./LogoutButton";
import DynamicLink from "./DynamicLink";
import Logo from "@/components/ui/Header/Logo";
export default function Sidebar() {
  return (
    <div className="sticky top-12 h-full">
      <div className="rounded-xl flex h-full flex-col px-6 text-lg">
        <Logo additionalClasses="mx-auto" />
        <DynamicLink />
        <LogOut />
      </div>
    </div>
  );
}
