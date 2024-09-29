import { Icon } from "@iconify/react/dist/iconify.js";

export default function Menu() {
  return (
    <li>
      <button className="rounded-full bg-black p-2">
        <Icon className="text-white" icon="heroicons-outline:menu-alt-3" />
      </button>
    </li>
  );
}
