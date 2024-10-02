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
    <div className="absolute right-4 top-4 z-10 flex flex-col space-y-2 text-2xl transition delay-75 duration-300">
      <button
        className="rounded-full bg-black p-2 text-white"
        // onClick={() => handleDeleteProduct(productId)}
      >
        <Icon icon="mdi:trash" />
      </button>
      <button className="rounded-full bg-black p-2 text-white">
        <Link href={`shop/edit-product/${productSlug}`}>
          <Icon icon="flowbite:edit-solid" />
        </Link>
      </button>
    </div>
  );
}
