import { Icon } from "@iconify/react/dist/iconify.js";

export const links = [
  {
    url: "/admin/dashboard",
    icon: <Icon className="size-6" icon="mage:dashboard" />,
    label: "Dashboard",
  },
  {
    url: "/admin/shop",
    icon: <Icon className="size-6" icon="iconoir:shop" />,
    label: "Shop",
  },
  {
    url: "/admin/orders",
    icon: <Icon className="size-6" icon="lets-icons:order" />,
    label: "Orders",
  },
  {
    url: "/admin/feedback",
    icon: <Icon className="size-6" icon="material-symbols:feedback-outline" />,
    label: "Feedbacks",
  },

  {
    url: "/admin/setting",
    icon: <Icon className="size-6" icon="ci:settings" />,
    label: "Setting",
  },
];
