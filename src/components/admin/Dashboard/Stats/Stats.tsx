"use client"

import { useStatsAction } from "./_hooks/useStatsAction";

export default function Stats() {
    const {
        startDate,
        endDate,
        report,
        handleOptionChange,
        handleGenerateReport,
        setStartDate,
        setEndDate,
        isLoading,
        error,
    } = useStatsAction();

    if (isLoading) return <div>Loading...</div>;

    let errorMessage = "Đã xảy ra lỗi!";
    if (error && "data" in error) {
        errorMessage = (error.data as any)?.message || "Lỗi không xác định";
    } else if (error && "status" in error) {
        errorMessage = `Lỗi mạng: ${error.status}`;
    }

    if (error) return <div>Error: {errorMessage}</div>;

    return (
        <div className="bg-white w-full p-8 mt-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <h1 className="text-2xl font-semibold">Báo cáo doanh thu</h1>
            </div>

            <div className="mb-2 mt-6">Thời gian báo cáo</div>
            <div className="flex gap-4 mb-6">
                <select
                    id="options"
                    className="w-1/3 p-2 border border-black rounded-lg"
                    onChange={handleOptionChange}
                >
                    <option value="today">Hôm nay</option>
                    <option value="thisMonth">Tháng này</option>
                    <option value="thisYear">Năm này</option>
                    <option value="custom">Tùy chọn</option>
                </select>

                <input
                    type="date"
                    className="w-1/3 p-2 border border-black rounded-lg"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />

                <input
                    type="date"
                    className="w-1/3 p-2 border border-black rounded-lg"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleGenerateReport}
                    className="bg-green-600 text-white font-medium rounded-full px-6 py-2 mt-2"
                >
                    Xem Báo Cáo →
                </button>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-4">Tổng doanh thu</h2>
                <div className="space-y-5">
                    <div className="flex justify-between">
                        <span className="font-medium">Tiền mặt</span>
                        <span className="text-gray-500">{report.cash} VND</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Số đơn hàng đã bán</span>
                        <span className="text-gray-500">{report.ordersSold} đơn</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Số đơn hàng đã hủy</span>
                        <span className="text-gray-500">{report.ordersCancelled} đơn</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
