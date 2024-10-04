import RoomListHeader from "./RoomListHeader";
import RoomListItem from "./RoomListItem";

export default function RoomList() {
  return (
    <div className="flex flex-col space-y-4">
      <RoomListHeader />
      <div className="max-h-screen overflow-auto">
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
        <RoomListItem />
      </div>
    </div>
  );
}
