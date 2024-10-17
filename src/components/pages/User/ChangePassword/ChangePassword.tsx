import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";

export default function Password() {
  return (
    <>
      <div className="">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">Thay đổi mật khẩu</h2>
          <div className="mb-6 flex items-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white"
              style={{ background: "#777777" }}
            >
              P
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">Phuc Thien</div>
              <div className="text-sm text-gray-500">
                nguyenphucthien0408@gmail.com
              </div>
            </div>
          </div>
          <form>
            <div className="mb-4">
              <label className="mb-2 block text-gray-700">
                Mật khẩu mới
                <span className="text-red-500">(*)</span>
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Nhập mật khẩu mới..."
                type="password"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-gray-700">
                Nhập lại mật khẩu mới
                <span className="text-red-500">(*)</span>
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 p-2"
                placeholder="Nhập lại mật khẩu mới..."
                type="password"
              />
            </div>
          </form>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-12 w-1/2 rounded-full bg-black p-3 text-white"
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </>
  );
}
