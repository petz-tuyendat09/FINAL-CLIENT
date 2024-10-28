import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SecureUser } from "@/types/User";

interface Voucher {
  voucherId: string | null;
  discount: number | null;
}
interface UserState {
  user: SecureUser | null;
  token: string | null;
  voucher: Voucher | null;
}

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

    setVoucher(state, action: PayloadAction<Voucher>) {
      state.voucher = action.payload;
    }
  },
});

export const userAction = userSlice.actions;
export default userSlice;
