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
        <p>Xin chào seller, bạn có đơn hàng mới trong ca làm hiện tại.</p>
        <a
          href=""
          className="mt-4 block rounded-full bg-[#AD3E39] px-6 py-2 text-center text-white"
        >
          Kiểm tra ngay
        </a>
      </div>
    </div>
  );
}
