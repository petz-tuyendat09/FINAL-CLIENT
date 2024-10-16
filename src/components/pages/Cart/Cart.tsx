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
const CartPage = () => {
  const session = useSession();
  const authStatus = session.status;

  const [adjustQuantity, { data: cartAfterAdjust }] =
    useAdjustQuantityMutation();
  const { update: sessionUpdate } = useSession();

  const dispatch = useDispatch();
  const userId = session.data?.user?._id;
  const unauthenticatedCarts = useSelector(
    (state: RootState) => state.cart?.items || [],
  );

  const cartItems = session.data?.user?.userCart?.cartItems;
  const authenticatedCartId = session.data?.user?.userCart._id;
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartAfterAdjust]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 px-[100px] py-10">
      <div className="w-full rounded-lg p-8">
        {/* Cart Header */}
        <h1 className="mb-4 text-center font-oriya text-[28px] font-semibold">
          Your Cart
        </h1>
        <a
          href="/shop"
          className="mb-8 flex flex-row items-center justify-center gap-[10px] text-center text-sm text-purple-600 hover:underline"
        >
          <span>Continue Shopping</span>
          <Icon icon="mingcute:right-line" className="mt-[1px]" />
        </a>
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
                  <button className="w-full rounded-[20px] bg-primary py-2 font-bold text-white">
                    Proceed to checkout
                  </button>
                  <button
                    onClick={handleClearCart}
                    className="mt-4 w-full rounded-full bg-primary px-6 py-2 font-bold text-white"
                  >
                    Xóa tất cả
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Product List */}
        {/* {cartItems.map((item) => (
          <div key={item.productId} className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              {/* Product Image */}
        {/* <div className="flex items-center space-x-4">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="h-12 w-12 object-cover"
                />
                <div>
                  <p className="font-medium text-gray-700">
                    {item.productName}
                  </p>
                  <p className="text-sm text-gray-500">{item.productOption}</p>
                </div>
              </div> */}

        {/* Price and Quantity */}
        {/* <div className="flex items-center space-x-4">
                <p className="text-gray-700">${item.productPrice.toFixed(2)}</p>
                {/* Quantity Selector */}
        {/* <div className="flex items-center rounded-lg border px-3 py-1">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() =>
                      handleDecreaseQuantity(item.productId, item.productOption)
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.productQuantity}
                    className="w-8 border-none bg-transparent text-center text-gray-700 outline-none"
                    readOnly
                  />
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() =>
                      handleIncreaseQuantity(item.productId, item.productOption)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="font-medium text-gray-700">
                  ${(item.productPrice * item.productQuantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div> */}
        {/* ))} */}

        {/* Subtotal */}
        {/* <div className="mt-6 flex justify-between">
          <span className="text-lg font-medium text-gray-800">Subtotal</span>
          <span className="text-lg font-semibold text-gray-800">
            $
            {cartItems
              .reduce(
                (acc, item) => acc + item.productPrice * item.productQuantity,
                0,
              )
              .toFixed(2)}
          </span>
        </div> */}

        {/* Proceed to Checkout Button */}
        {/* <div className="mt-6">
          <button className="w-full rounded-lg bg-purple-500 py-3 text-center font-semibold text-white hover:bg-[#AD3E39]">
            Proceed to checkout
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CartPage;
