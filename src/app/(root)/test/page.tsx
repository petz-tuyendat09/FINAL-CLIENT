export default function page() {
  return (
    <div className="mx-auto w-fit pb-8">
      <div className="mx-auto mb-4 flex w-fit gap-2">
        <img
          src="https://final-asm.s3.ap-southeast-2.amazonaws.com/logo.png"
          alt=""
          className="w-[100px]"
        />
        <p className="text-[64px] text-black">PETZ</p>
      </div>
      <div className="space-y-4">
        <p>Xin chào Phan Tuyến Đạt</p>
        <p>Bạn đã đặt lịch thành công</p>
        <p>Chúng tôi sẽ liên hệ để xác nhận lịch hẹn của bạn sớm nhất</p>
      </div>
      <div>
        <p>
          <span className="font-bold">Ngày đặt:</span> 28/10/2020
        </p>
        <p>
          <span className="font-bold">Giờ đặt:</span> 14:00
        </p>
      </div>
      <div className="mt-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded text-xs font-bold text-black">Dịch vụ</div>
          <div className="rounded text-xs font-bold text-black">Giá tiền</div>
        </div>
        <div className="mb-2 flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-800">Chăm Sóc Móng</span>
          <span className="text-gray-800">5.000.000 VND</span>
        </div>
        <div className="mb-2 flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-800">Chăm Sóc Móng</span>
          <span className="text-gray-800">5.000.000 VND</span>
        </div>
        <div className="mb-2 flex justify-between border-b border-gray-200 pb-2">
          <span className="text-gray-800">Chăm Sóc Móng</span>
          <span className="text-gray-800">5.000.000 VND</span>
        </div>

        <div className="flex justify-between pt-2">
          <span className="font-bold text-gray-800">Total:</span>
          <span className="font-bold text-gray-800">$20.00</span>
        </div>
      </div>
    </div>
  );
}
