import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function LogInButton() {
  const session = useSession();
  const authStatus = session.status;
  const username = session.data?.user.username;
  console.log(session);

  return (
    <>
      {authStatus === "authenticated" && <Link href="account">{username}</Link>}
      {authStatus === "unauthenticated" && <Link href="auth">Đăng nhập</Link>}
    </>
  );
}
