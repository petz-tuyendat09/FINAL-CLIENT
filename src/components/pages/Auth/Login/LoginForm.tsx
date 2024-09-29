import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="mt-4 w-full flex-col items-center gap-4 space-y-4">
      <div className="relative rounded-full border border-[#eaedf3] bg-white">
        <input
          type="text"
          id="loginkey"
          name="loginkey"
          className="peer block h-full w-full appearance-none rounded-full rounded-t-lg bg-transparent py-[20px] pl-[20px] text-[12px] text-sm text-black focus:outline-none focus:ring-0"
          placeholder=""
        />
        <label
          htmlFor="loginkey"
          className="absolute start-5 top-5 z-10 origin-[0] transform cursor-text text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:scale-75"
        >
          Email & Tài khoản
        </label>
      </div>
      <div className="relative rounded-full border border-[#eaedf3] bg-white">
        <input
          type="text"
          id="password"
          name="password"
          className="peer block h-full w-full appearance-none rounded-full rounded-t-lg bg-transparent py-[20px] pl-[20px] text-[12px] text-sm text-black focus:outline-none focus:ring-0"
          placeholder=""
        />
        <label
          htmlFor="password"
          className="absolute start-5 top-5 z-10 origin-[0] transform cursor-text text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:scale-75"
        >
          Mật khẩu
        </label>
      </div>
      <button className="w-full rounded-full bg-black py-[1rem] font-semibold text-white">
        Đăng nhập
      </button>
      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-[1rem] font-semibold text-white">
        <Icon className="size-6" icon="flat-color-icons:google" />
        Đăng nhập với Google
      </button>
      <Link
        className="block w-full text-center text-gray-text"
        href="forgot-password"
      >
        Quên mật khẩu?
      </Link>
    </form>
  );
}
