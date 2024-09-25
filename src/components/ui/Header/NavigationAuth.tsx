import Link from "next/link";

export default function NavigationAuth() {
  const auth = true;
  return (
    <>
      {auth && <li>datphan99</li>}
      {!auth && (
        <li>
          <Link href="/auth">Đăng nhập</Link>
        </li>
      )}
    </>
  );
}
