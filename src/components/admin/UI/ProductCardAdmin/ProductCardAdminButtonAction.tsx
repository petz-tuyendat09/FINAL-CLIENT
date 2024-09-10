import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface ProductCardAdminButtonActionProps {
  productId: string;
  handleDeleteProduct?: Function;
  productSlug: string;
}

export default function ProductCardAdminButtonAction({
  productId,
  handleDeleteProduct,
  productSlug,
}: ProductCardAdminButtonActionProps) {
  return (
    <div className="absolute right-0 z-10 flex translate-x-4 flex-col text-2xl opacity-0 transition delay-75 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      <button
      // onClick={() => handleDeleteProduct(productId)}
      >
        <Icon icon="mdi:trash" />
      </button>
      <button>
        <Link href={`shop/edit-product/${productSlug}`}>
          <Icon icon="flowbite:edit-solid" />
        </Link>
      </button>
    </div>
  );
}
