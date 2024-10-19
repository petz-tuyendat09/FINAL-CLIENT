import { Product } from "@/types/Product";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch } from "react-redux";
import { cartAction } from "@/libs/features/cart/cart";
import { useSession } from "next-auth/react";
import { useAddItemToCartMutation } from "@/libs/features/services/cart";
import { useEffect } from "react";
import { message } from "antd";
import Link from "next/link";
interface ProductCardSelectWeightProps {
  Product: Product;
}

export default function ProductCardCartButton({
  Product,
}: ProductCardSelectWeightProps) {
  const dispatch = useDispatch();
  const session = useSession();
  const { update: sessionUpdate } = useSession();
  const [messageApi, contextHolder] = message.useMessage();
  const authStatus = session?.status;

  const [addToCart, { data: newCart }] = useAddItemToCartMutation();
  const success = () => {
      message.success(
          <div>
              Thêm giỏ hàng thành công. <Link href="/cart" className="text-blue-400">Xem giỏ hàng</Link>
          </div>
      );
  };
  function handleAddToCart() {
    const cartItem = {
      productId: Product._id,
      productName: Product.productName,
      productOption: Product.productOption[0].name,
      productPrice: Product.productOption[0].productPrice,
      productQuantity: 1,
      salePercent: Product.salePercent,
      productImage: Product.productThumbnail,
      productSlug: Product.productSlug,
      cartId: session.data?.user?.userCart?._id || null,
    };

    if (authStatus === "authenticated") {
      addToCart(cartItem);
      success();
    } else {
      dispatch(cartAction.addToCart(cartItem));
    }
  }

  useEffect(() => {
    if (newCart) {
      sessionUpdate({
        ...session,
        user: {
          ...session?.data?.user,
          userCart: newCart,
        },
      });
    }
  }, [newCart]);

  return (
    <div className="group absolute right-1 top-1 text-white lg:right-2 lg:top-2">
      <button
        onClick={handleAddToCart}
        className="w-fit rounded-full bg-white p-1 text-black transition delay-75 duration-300 group-hover:bg-gray-100 lg:p-3"
      >
        <Icon className="size-4 lg:size-5" icon="icon-park-outline:mall-bag" />
      </button>
      {contextHolder}
    </div>
  );
}
