import { Icon } from "@iconify/react/dist/iconify.js";

export default function CartIcon() {
  return (
    <li>
      <button className="rounded-full bg-black p-2">
        <Icon className="text-white" icon="mdi:cart-outline" />
      </button>
    </li>
  );
}
