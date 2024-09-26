import "./auth.css";

export default function Auth() {
  return (
    <div className="container flex h-screen items-center px-[6.17rem] text-white">
      <video
        className="h-[95%] w-1/2 max-w-[618px] rounded-lg object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video/login-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="ml-auto flex w-1/2 max-w-[750px] flex-col gap-4 drop-shadow-sm">
        <div className="relative w-1/2 rounded-full border border-[#eaedf3] bg-white py-[16px]">
          <input
            type="text"
            id="loginkey"
            name="loginkey"
            className="bg-gray-50 peer block h-full w-full appearance-none rounded-full rounded-t-lg bg-transparent pl-[23px] text-sm text-black focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="loginkey"
            className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text pl-[23px] text-sm text-black text-gray-text duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Email & Tài khoản
          </label>
        </div>
        <div className="relative w-1/2 rounded-full border border-[#eaedf3] bg-white py-[16px]">
          <input
            type="text"
            id="password"
            name="password"
            className="bg-gray-50 peer block h-full w-full appearance-none rounded-full rounded-t-lg bg-transparent pl-[23px] text-sm text-black focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text pl-[23px] text-sm text-black text-gray-text duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Mật khẩu
          </label>
        </div>
      </div>
    </div>
  );
}
