import { Icon } from "@iconify/react/dist/iconify.js";

export default function ChatInput() {
  return (
    <div className="mb-2 px-2">
      <div className="flex items-center gap-1 rounded-full border border-gray-100 bg-gray-100 pr-2">
        <input
          className="h-full w-full rounded-full bg-transparent px-4 py-2 focus:outline-none"
          type="text"
          placeholder="Aa"
        />
        <button>
          <Icon className="size-6" icon="ic:round-send" />
        </button>
      </div>
    </div>
  );
}
