import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SecureUser } from "@/types/User";

interface UserState {
  user: SecureUser | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
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
  },
});

export const userAction = userSlice.actions;
export default userSlice;
