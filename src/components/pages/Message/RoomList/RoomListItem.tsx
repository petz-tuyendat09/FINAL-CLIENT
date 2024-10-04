export default function RoomListItem() {
  return (
    <div className="cursor-pointer rounded-full px-4 py-2 transition duration-300 hover:bg-gray-200">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-red-500"></div>
        <div>
          <div className="flex justify-between">
            <h4>Username</h4>
            <p>21:02</p>
          </div>
          <div className="max-w-full overflow-hidden">
            <p className="break-keep">
              Tin nhắn cúng cuồi siêu cấp vũ trụ dài vãi đái
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
