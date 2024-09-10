import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/interfaces/auth.interface";

interface UserState {
    user: IUser | null;
    token: string | null;
    refreshToken: string | null;
    avatar: string | null;
}

const initialState: UserState = {
    user: null,
    token: null,
    refreshToken: null,
    avatar: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
        setAvatar(state, action: PayloadAction<string | null>) {
            state.avatar = action.payload;
        },
        setToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
        setRefreshToken(state, action: PayloadAction<string | null>) {
            state.refreshToken = action.payload;
        },
        setRemoveUser(state) {
            state.token = null;
            state.refreshToken = null;
            state.user = null;
        },
    }
})

export const { setUser, setAvatar, setToken, setRefreshToken, setRemoveUser } = userSlice.actions;
export default userSlice.reducer;
