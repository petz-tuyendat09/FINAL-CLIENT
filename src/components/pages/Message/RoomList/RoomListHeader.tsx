import { Icon } from "@iconify/react/dist/iconify.js";

export default function RoomListHeader() {
  return (
    <div className="px-4 py-2 shadow-sm">
      <h2 className="text-h2">Đoạn chat</h2>
      <div className="flex items-center gap-1 rounded-full bg-gray-200 px-2">
        <Icon className="size-6" icon="tabler:search" />
        <input
          className="h-full w-full rounded-full bg-transparent px-2 py-2 focus:outline-none"
          type="text"
          placeholder="Tìm kiếm trên người bán"
        />
      </div>
    </div>
  );
}
