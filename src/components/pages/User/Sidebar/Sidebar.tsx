export default function Sidebar() {
    return (
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
                        <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg ">
                            <i className="fas fa-user mr-2"></i> Thông tin tài khoản
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                            <i className="fas fa-list mr-2"></i> Danh sách sản phẩm đã đăng
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                            <i className="fas fa-concierge-bell mr-2"></i> Danh sách dịch vụ đã đặt
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                            <i className="fas fa-chart-line mr-2"></i> Thống kê doanh thu
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                            <i className="fas fa-history mr-2"></i> Lịch sử đơn hàng
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-200 rounded-lg">
                            <i className="fas fa-key mr-2"></i> Thay đổi mật khẩu
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
    )
}