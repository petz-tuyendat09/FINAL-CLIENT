import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

export default function Chat() {
  return (
    <div className="flex w-3/5 flex-col border-x border-gray-200">
      <ChatHeader />
      <ChatContent />
      <ChatInput />
    </div>
  );
}
