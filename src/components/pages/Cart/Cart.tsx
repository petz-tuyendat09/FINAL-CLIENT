"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { cartAction, selectCartItems } from "@/libs/features/cart/cart";

const CartPage = () => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state: RootState) => selectCartItems(state));
  // Sử dụng selector an toàn để tránh undefined
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);

  // Hàm tăng số lượng
  const handleIncreaseQuantity = (productId: string, productOption: string) => {
    dispatch(cartAction.increaseQuantity({ productId, productOption }));
  };

  // Hàm giảm số lượng
  const handleDecreaseQuantity = (productId: string, productOption: string) => {
    dispatch(cartAction.decreaseQuantity({ productId, productOption }));
  };

  const handleClearCart = () => {
    dispatch(cartAction.clearCart());
  };

  console.log(cartItems);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 py-10">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        {/* Cart Header */}
        <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800">
          Your Cart
        </h1>
        <a
          href="/shop"
          className="mb-8 block text-center text-sm text-purple-600 hover:underline"
        >
          Continue Shopping
        </a>

        {/* Product List */}
        {cartItems.map((item) => (
          <div key={item.productId} className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              {/* Product Image */}
              <div className="flex items-center space-x-4">
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
              </div>

              {/* Price and Quantity */}
              <div className="flex items-center space-x-4">
                <p className="text-gray-700">${item.productPrice.toFixed(2)}</p>
                {/* Quantity Selector */}
                <div className="flex items-center rounded-lg border px-3 py-1">
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
          </div>
        ))}

        {/* Subtotal */}
        <div className="mt-6 flex justify-between">
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
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Tax included and shipping calculated at checkout
        </p>

        {/* Proceed to Checkout Button */}
        <div className="mt-6">
          <button className="w-full rounded-lg bg-purple-500 py-3 text-center font-semibold text-white hover:bg-[#AD3E39]">
            Proceed to checkout
          </button>
        </div>
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
