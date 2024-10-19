"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import "./index.css";
import { useSession } from "next-auth/react";
import CartItem from "./CartItem";
import formatMoney from "@/utils/formatMoney";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { cartAction } from "@/libs/features/cart/cart";
import { useAdjustQuantityMutation } from "@/libs/features/services/cart";
import { AdjustQuantity } from "@/types/Cart";
import { useEffect } from "react";
import cartImg from '@@/assets/images/cartImg.png';
import cartImg2 from '@@/public/images/cartImg2.png';
import Image from "next/image";
const CartPage = () => {
  const session = useSession();
  const authStatus = session.status;

  const [adjustQuantity, { data: cartAfterAdjust }] =
    useAdjustQuantityMutation();
  const { update: sessionUpdate } = useSession();

  const dispatch = useDispatch();
  const userId = session.data?.user?._id;

  const cartItems = session.data?.user?.userCart?.cartItems;
  const unauthenticatedCarts = useSelector(
    (state: RootState) => state.cart?.items || [],
  );
  const authenticatedCartId = session.data?.user?.userCart?._id;
  const itemsToDisplay = cartItems || unauthenticatedCarts;

  function handleClearCart() {
    if (authStatus === "authenticated") {
      const adjustObject: AdjustQuantity = {
        adjustOption: "clearAll",
        cartId: authenticatedCartId,
      };
      adjustQuantity(adjustObject);
    } else {
      dispatch(cartAction.clearCart());
    }
  }

  useEffect(() => {
    const cartData = [cartAfterAdjust];
    const updatedCart = cartData.find((cart) => cart);
    if (updatedCart) {
      sessionUpdate({
        ...session,
        user: {
          _id: session?.data?.user._id,
          username: session.data?.user.username,
          ...session?.data?.user,
          userCart: updatedCart,
        },
      });
    }
  }, [cartAfterAdjust]);
  return (
    <div className="flex min-h-screen flex-col items-center px-[100px] py-10">
      <div className="w-full rounded-lg p-8">
        <div className="flex flex-row justify-between items-center">
          <div className="text-center flex flex-col justify-end px-[50px] w-[60%]">
            <h2>Cửa hàng thức ăn thú cưng</h2>
            <h1 className="text-black font-[500] text-[50px] leading-[60px] mt-[20px]">Cửa hàng thú cưng cho Những Người Bạn Lông Xù</h1>
            <div className="flex justify-center mt-[30px]"> 
              <button className="flex flex-row items-center gap-[7px] border-2 border-black px-[15px] py-[7px] rounded-[30px]">
                <span className="font-[500]">Nhận nuôi</span>
                <Icon icon="mingcute:arrow-right-line" />
              </button>
            </div>
            <div className="flex justify-center mt-[70px]">
              <Image src={cartImg2} width={250} height={400} alt="" />
            </div>
          </div>
          <div className="w-[40%]">
            <Image src={cartImg} width={600} height={400} alt="" />
          </div>
        </div>
        <div className="flex justify-center mt-[20px]"> 
          <div className="mb-4 flex flex-row items-center">
            <Icon icon="uil:cart" width={50} />
            <h1 className="text-[30px] font-semibold mt-[10px]">Giỏ hàng</h1>
          </div>
        </div>
        <a
          href="/shop"
          className="mb-8 flex flex-row items-center justify-center gap-[10px] text-center text-sm text-purple-600 hover:underline"
        >
          <span>Tiếp tục mua sắm</span>
          <Icon icon="mingcute:right-line" className="mt-[1px]" />
        </a>
        <div className="flex justify-end">
          <button className="border-b-2 border-primary text-primary" onClick={handleClearCart}>
              Xóa tất cả
          </button>
        </div>
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng phụ</th>
              </tr>
            </thead>
            <tbody>
              {itemsToDisplay.map((item) => (
                <CartItem
                  authenticatedCartId={authenticatedCartId}
                  key={item.productId}
                  cartItem={item as any}
                />
              ))}
              <tr>
                <td className="border-b-0"></td>
                <td className="border-b-0"></td>
                <td colSpan={2}>
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="font-[500]">Subtotal:</h4>
                    <h3 className="text-[20px] font-[500]">
                      {formatMoney(
                        itemsToDisplay.reduce(
                          (acc, item) =>
                            acc + item.productPrice * item.productQuantity,
                          0,
                        ),
                      )}
                    </h3>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b-0"></td>
                <td className="border-b-0"></td>
                <td
                  className="border-b-0 text-[15px] text-gray-800"
                  colSpan={2}
                >
                  Tax included and shipping calculated at checkout
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td className="border-b-0"></td>
                <td className="border-b-0"></td>
                <td
                  className="border-b-0 text-[15px] text-gray-800"
                  colSpan={2}
                >
                  <button className="w-full rounded-[20px] bg-primary py-[12px] font-bold text-white">
                    Proceed to checkout
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
