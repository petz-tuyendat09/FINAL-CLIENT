import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <>
      {session?.user.username} <br />
      {/* <button onClick={() => signOut()}>Sign out</button> */}
    </>
  );
}
