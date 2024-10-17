import HistoryImage from "@@/assets/images/history-img.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Sidebar from "../Sidebar/Sidebar";

export default function History() {
  return (
    <>
      <div className="">
        <h1 className="mb-6 text-2xl font-semibold">Lịch sử đơn hàng</h1>
        <div className="mb-6">
          <div className="relative">
            <input
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Tìm tên sản phẩm..."
              type="text"
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="grid grid-cols-4 gap-4 rounded-lg bg-black p-3 text-center font-semibold text-white">
            <div>Tên sản phẩm</div>
            <div>Giá (VND)</div>
            <div>Ngày đặt</div>
            <div>Trạng thái</div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            {/* image here  */}
            <p className="text-gray-500">Chưa có lịch sử</p>
          </div>
        </div>
      </div>
    </>
  );
}
