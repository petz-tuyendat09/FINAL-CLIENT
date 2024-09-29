import TransitionLink from "./TransitionLink";

export default function NavigateBar() {
  return (
    <div className="fixed bottom-4 left-1/2 flex h-8 -translate-x-1/2 items-center gap-4 rounded-lg border border-[#e0e0e0] bg-white py-6 text-black shadow-md">
      <TransitionLink href="/vi" label="Trang chủ" />
      <TransitionLink href="/vi/shop" label="Cửa hàng" />
      <TransitionLink href="/" label="Tìm bạn" />
    </div>
  );
}
