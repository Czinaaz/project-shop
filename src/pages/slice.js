import { createSlice } from "@reduxjs/toolkit";
import { login, logout, me, register } from "./operations";

function setCommonState(state, action) {
    state.isLoggedIn = true;
    state.user.name = action.payload.user.name;
    state.user.email = action.payload.user.email;
    state.token = action.payload.token;
}

const initialState = {
    isLoggedIn: false,
    user: {name: null, email: null},
    token: null,
    isRefreshing: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, setCommonState);
        builder.addCase(login.fulfilled, setCommonState);
        builder.addCase(logout.fulfilled, () => initialState);
        builder.addCase(me.pending, (state, action) => {
            state.isRefreshing = true;
        });
        builder.addCase(me.rejected, (state, action) => {
            state.isRefreshing = false;
        });
        builder.addCase(me.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isRefreshing = false;
        })
    }
});

export const authReducer = authSlice.reducer;