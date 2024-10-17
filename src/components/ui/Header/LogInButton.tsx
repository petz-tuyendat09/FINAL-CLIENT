import { useSession, signIn, signOut } from "next-auth/react";
import NormalTransitionLink from "../NormalTransitionLink";
import { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function LoginButton() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  if (status === "unauthenticated") {
    return (
      <>
        <NormalTransitionLink href="/auth">Đăng nhập</NormalTransitionLink>
      </>
    );
  }

  return (
    <>
      <div>
        <Dropdown
          classNames={{
            base: "before:bg-default-200", // change arrow background
            content: "border border-default-200 glass text-white",
          }}
        >
          <DropdownTrigger>
            <Button className="text-white" variant="flat">
              {session?.user.username}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              base: [
                "rounded-md",
                "text-white",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
            aria-label="Link Actions"
          >
            <DropdownItem key="home" href="/user/account">
              Thông tin
            </DropdownItem>
            <DropdownItem
              key="logout"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Đăng xuất
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
