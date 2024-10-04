import Chat from "./Chat/Chat";
import ChatUserProfile from "./ChatUserProfile/ChatUserProfile";
import RoomList from "./RoomList/RoomList";

export default function Message() {
  return (
    <main className="h-screen min-h-fit">
      <div className="flex h-full">
        <RoomList />
        <Chat />
        <ChatUserProfile />
      </div>
    </main>
  );
}
