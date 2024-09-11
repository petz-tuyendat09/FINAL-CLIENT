import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  openCart: boolean;
}

const initialState: CartState = {
  items: [],
  openCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle(state) {
      state.openCart = !state.openCart;
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
