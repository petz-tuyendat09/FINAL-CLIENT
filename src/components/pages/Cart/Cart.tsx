import React from 'react';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        {/* Cart Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Your Cart</h1>
        <a href="/shop" className="text-sm text-purple-600 hover:underline text-center block mb-8">
          Continue Shopping 
        </a>

        {/* Product List */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            {/* Product Image */}
            <div className="flex items-center space-x-4">
              <img src="/path-to-image.jpg" alt="Product" className="w-12 h-12 object-cover" />
              <div>
                <p className="font-medium text-gray-700">Annia</p>
                <p className="text-sm text-gray-500">2 x 60 ml / 2oz</p>
              </div>
            </div>

            {/* Price and Quantity */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-700">$115.00</p>
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-lg px-3 py-1">
                <button className="text-gray-600 hover:text-gray-800">-</button>
                <input
                  type="text"
                  value="2"
                  className="w-8 text-center border-none outline-none text-gray-700 bg-transparent"
                  readOnly
                />
                <button className="text-gray-600 hover:text-gray-800">+</button>
              </div>
              <p className="font-medium text-gray-700">$230.00</p>
            </div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between mt-6">
          <span className="text-lg font-medium text-gray-800">Subtotal</span>
          <span className="text-lg font-semibold text-gray-800">$230.00</span>
        </div>

        <p className="text-sm text-gray-500 mt-2">Tax included and shipping calculated at checkout</p>

        {/* Proceed to Checkout Button */}
        <div className="mt-6">
          <button className="w-full bg-purple-500 hover:bg-[#AD3E39] text-white py-3 rounded-lg text-center font-semibold ">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
