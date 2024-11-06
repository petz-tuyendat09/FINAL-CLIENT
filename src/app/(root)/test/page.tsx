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
        <p>Xin chào Phan Tuyến Đạt, đơn hàng của bạn đang được vận chuyển.</p>
        <div className="flex items-center justify-center gap-4">
          <img
            width="40"
            src="https://cdn-icons-png.flaticon.com/128/16104/16104958.png"
            alt=""
          />
          <div className="rounded-full bg-[#77CC00] px-6 py-2 text-white">
            Đang vận chuyển
          </div>
        </div>
      </div>
    </div>
  );
}
