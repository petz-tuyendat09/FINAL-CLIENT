import DynamicLink from "./DynamicLinks";

export default function Sidebar() {
  return (
    <div className="sticky top-10 h-full w-1/4 bg-white p-6">
      <div className="mb-6 flex items-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white"
          style={{ background: "#777777" }}
        >
          P
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold">Phuc Thien</div>
          <div className="text-sm text-gray-500">Member</div>
        </div>
      </div>
      <DynamicLink />
    </div>
  );
}
