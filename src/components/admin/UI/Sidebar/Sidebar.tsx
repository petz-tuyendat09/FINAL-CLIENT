import Logo from "./Logo";
import LogOut from "./LogoutButton";
import DynamicLink from "./DynamicLink";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col sticky top-12">
      <div className="  h-full  rounded-xl px-6 text-lg ">
        <Logo />
        <DynamicLink />
        <LogOut />
      </div>
    </div>
  );
}
