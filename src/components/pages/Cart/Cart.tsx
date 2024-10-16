"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { cartAction } from "@/libs/features/cart/cart";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./index.css";
import { useSession } from "next-auth/react";
import { useGetCartByUserIdQuery, useRemoveItemFromCartMutation } from "@/libs/features/services/cart";
const CartPage = () => {
  const dispatch = useDispatch();
  const session = useSession();
  const userId = session.data?.user?._id;
  const unauthenticatedCarts = useSelector((state: RootState) => state.cart?.items || []);
  const cartItemLength = session.data?.user?.userCart?.cartItems.length;
  const cartItems = session.data?.user?.userCart?.cartItems;
  const itemsToDisplay = (cartItemLength !== 0 && cartItems) ? cartItems : (unauthenticatedCarts || []);
  const [removeItemFromCart, { data: newCart }] = useRemoveItemFromCartMutation();
  const { data: cart, error, isLoading } = useGetCartByUserIdQuery(userId as string);
  console.log(cart);
  const handleIncreaseQuantity = (productId: string, productOption: string) => {
    dispatch(cartAction.increaseQuantity({ productId, productOption }));
  };

  const handleDecreaseQuantity = (productId: string, productOption: string) => {
    dispatch(cartAction.decreaseQuantity({ productId, productOption }));
  };

  const handleClearCart = () => {
    dispatch(cartAction.clearCart());
  };

  const formatCurrency = (amount:any) => {
    return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ`;
  };

  const handleRemove = (productId:string, productOption:string) => {
    const removeObj = {
      productId: productId,
      productOption: productOption,
      cartId: session.data?.user?.userCart?._id
    }
    console.log(removeObj);
    removeItemFromCart(removeObj);
  };
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 py-10 px-[100px]">
      <div className="w-full rounded-lg p-8">
        {/* Cart Header */}
        <h1 className="mb-4 text-center text-[28px] font-semibold font-oriya">
          Your Cart
        </h1>
        <a
          href="/shop"
          className="mb-8 flex flex-row items-center justify-center text-center gap-[10px] text-sm text-purple-600 hover:underline"
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
              {itemsToDisplay.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <div className="flex flex-row items-center gap-[20px]">
                        <img src={item?.productImage} width={100} height={100} alt="" />
                        <div>
                          <h2>{item?.productName}</h2>
                          <p className="text-gray-800">{item.productOption}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{formatCurrency(item.productPrice)}</td>
                    <td>
                      <div className="flex justify-center">
                        <div className="flex items-center gap-[5px] rounded-lg border px-3 py-1 w-[80px]">
                          <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() =>
                              handleDecreaseQuantity(item.productId, item.productOption as string)
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
                              handleIncreaseQuantity(item.productId, item.productOption as string)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <p className="font-medium text-gray-700">
                        {formatCurrency((item.productPrice * item.productQuantity))}
                      </p>
                    </td>
                    <td><button onClick={() => handleRemove(item?.productId, item?.productOption as string)}>Delete</button></td>
                  </tr>
                );
              })}
              <tr>
                <td className="border-b-0"></td>
                <td className="border-b-0"></td>
                <td colSpan={2}>
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="font-[500]">Subtotal:</h4>
                    <h3 className="font-[500] text-[20px]">{formatCurrency(itemsToDisplay
                        .reduce(
                          (acc, item) => acc + item.productPrice * item.productQuantity,
                          0,
                        ))}
                    </h3>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b-0"></td>
                <td className="border-b-0"></td>
                <td className="border-b-0 text-[15px] text-gray-800" colSpan={2}>
                  Tax included and shipping calculated at checkout
                </td>
              </tr>
              <tr>
                <td className="border-b-0"></td>
                <td className="border-b-0"></td>
                <td className="border-b-0 text-[15px] text-gray-800" colSpan={2}>
                  <button className="bg-purple-200 w-full px-[50px] py-[10px] rounded-[20px] font-[500]">Proceed to checkout</button>
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
      <button
        onClick={handleClearCart}
        className="mt-4 rounded-full bg-primary px-6 py-2 text-white"
      >
        Clear giỏ hàng
      </button>
    </div>
  );
};

export default CartPage;
