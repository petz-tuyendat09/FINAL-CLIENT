export default function Profile() {
  return (
    <>
      <div className="p-6">
        <h1 className="mb-6 text-2xl font-semibold">Thông tin tài khoản</h1>
        <div className="rounded-lg bg-white p-6 shadow-lg">
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
            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-500 p-2"
                  value="Nguyen Phuc Thien"
                />
              </div>
              <div>
                <label className="block text-gray-700">Giới tính</label>
                <select className="mt-2 w-full rounded-lg border border-slate-500 p-2">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Ngày sinh</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-500 p-2"
                  value="04/08/2004"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-500 p-2"
                  value="nguyenphucthien0408@gmail.com"
                />
              </div>
              <div>
                <label className="block text-gray-700">Số điện thoại</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-500 p-2"
                  value="0908809905"
                />
              </div>
              <div>
                <label className="block text-gray-700">Quận/huyện</label>
                <select className="mt-2 w-full rounded-lg border border-slate-500 p-2">
                  <option>An Phú</option>
                  <option>Quận 1</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Tỉnh/thành phố</label>
                <select className="mt-2 w-full rounded-lg border border-slate-500 p-2">
                  <option>An Giang</option>
                  <option>Hà Nội</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Địa chỉ</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-500 p-2"
                  value="940 Lò Gốm"
                />
              </div>
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
