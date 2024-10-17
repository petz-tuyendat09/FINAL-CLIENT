import HistoryImage from "@@/assets/images/history-img.png";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Sidebar from "../Sidebar/Sidebar";

export default function History() {
    return (
        <>
            <div className="flex min-h-screen mt-36">
                {/* <!-- Sidebar --> */}
                <Sidebar />

                {/* <!-- Main Content --> */}
                <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-semibold mb-6">
                        Lịch sử đơn hàng
                    </h1>
                    <div className="mb-6">
                        <div className="relative">
                            <input className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Tìm tên sản phẩm..." type="text" />
                            <i className="fas fa-search absolute right-3 top-3 text-gray-500">
                            </i>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="grid grid-cols-4 gap-4 text-center font-semibold text-white bg-black p-3 rounded-lg">
                            <div>
                                Tên sản phẩm
                            </div>
                            <div>
                                Giá (VND)
                            </div>
                            <div>
                                Ngày đặt
                            </div>
                            <div>
                                Trạng thái
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            {/* image here  */}
                            <p className="text-gray-500">
                                Chưa có lịch sử
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}