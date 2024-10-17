import Image from "next/image"
import Sidebar from "../Sidebar/Sidebar"

export default function Password() {
    return (
        <>
            <div className="flex min-h-screen mt-36">
                {/* <!-- Sidebar --> */}
                <Sidebar />

                {/* <!-- Main Content --> */}
                <div className="w-3/4 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">
                            Thay đổi mật khẩu
                        </h2>
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white" style={{ background: '#777777' }}>P</div>
                            <div className="ml-4">
                                <div className="text-lg font-semibold">Phuc Thien</div>
                                <div className="text-sm text-gray-500">nguyenphucthien0408@gmail.com</div>
                            </div>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Mật khẩu mới
                                    <span className="text-red-500">
                                        (*)
                                    </span>
                                </label>
                                <input className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nhập mật khẩu mới..." type="password" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Nhập lại mật khẩu mới
                                    <span className="text-red-500">
                                        (*)
                                    </span>
                                </label>
                                <input className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nhập lại mật khẩu mới..." type="password" />
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="w-1/2 bg-black text-white p-3 mt-12 rounded-full">Lưu thay đổi</button>
                    </div>

                </div>
            </div>
        </>
    )
}