import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SecureUser, UserState } from "@/types/User";
import { VoucherOrder } from "@/types/Voucher";

const initialState: UserState = {
  user: null,
  token: null,
  voucher: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SecureUser>) {
      state.user = action.payload;
    },

    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },

    setRemoveUser(state) {
      state.token = null;
      state.user = null;
    },

    setVoucher(state, action: PayloadAction<VoucherOrder>) {
      state.voucher = action.payload;
    }
  },
});

export const userAction = userSlice.actions;
export default userSlice;
