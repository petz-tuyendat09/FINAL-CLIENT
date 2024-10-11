import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function ServicesList() {
    return (
        <>
            <div className="flex min-h-screen mt-36">
                {/* <!-- Sidebar --> */}
                <div className="w-1/4 bg-white p-6">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white" style={{ background: '#777777' }}>P</div>
                        <div className="ml-4">
                            <div className="text-lg font-semibold">Phuc Thien</div>
                            <div className="text-sm text-gray-500">Member</div>
                        </div>

                    </div>
                    <nav>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4">
                                    <i className="fas fa-user mr-2"></i> Thông tin tài khoản
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 rounded-lg">
                                    <i className="fas fa-list mr-2"></i> Danh sách sản phẩm đã đăng
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 rounded-lg bg-blue-100 text-blue-600">
                                    <i className="fas fa-concierge-bell mr-2"></i> Danh sách dịch vụ đã đặt
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 rounded-lg">
                                    <i className="fas fa-chart-line mr-2"></i> Thống kê doanh thu
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 rounded-lg ">
                                    <i className="fas fa-history mr-2"></i> Lịch sử đơn hàng
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 ">
                                    <i className="fas fa-user mr-2"></i> Thay đổi mật khẩu
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                                    <i className="fas fa-sign-out-alt mr-2"></i> Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* <!-- Main Content --> */}
                <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-semibold mb-6">
                        Danh sách dịch vụ đã đặt
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
                                Tên dịch vụ
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