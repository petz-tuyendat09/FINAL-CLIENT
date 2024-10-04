import ChatContentItem from "./ChatContentItem";

export default function ChatContent() {
  return (
    <div className="h-full max-h-screen space-y-4 overflow-auto px-4 py-2">
      <ChatContentItem senderId="user1" />
      <ChatContentItem senderId="user1" />
      <ChatContentItem senderId="user1" />
      <ChatContentItem senderId="user1" />
      <ChatContentItem senderId="user2" />
      <ChatContentItem senderId="user2" />
      <ChatContentItem senderId="user2" />
      <ChatContentItem senderId="user2" />
    </div>
  );
}
