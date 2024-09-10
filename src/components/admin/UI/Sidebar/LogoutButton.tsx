import { Icon } from "@iconify/react/dist/iconify.js";

export default function UserProfile() {
  return (
    <div className="text-center mt-48">
      <div className="flex items-center gap-1  px-6 py-3 ">
        <Icon
          className="size-6 transition-all delay-75 duration-300"
          icon="tabler:logout"
        />
        <span>Logout</span>
      </div>
    </div>
  );
}
