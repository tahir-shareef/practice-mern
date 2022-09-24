import { createSlice } from "@reduxjs/toolkit";
import { register, login, getMe } from "../actions/auth";
import cookie from "react-cookies";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: cookie.load("jwt") !== undefined,
    currentUser: null,
    chats: [],
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      const { user, token, chats } = action.payload;
      state.chats = chats;
      state.currentUser = user;
      cookie.save("jwt", token, {
        path: "/",
      });
      state.isLoggedIn = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { user, token, chats } = action.payload;
      state.currentUser = user;
      state.chats = chats;
      cookie.save("jwt", token, {
        path: "/",
      });
      state.isLoggedIn = true;
    });

    // getting user's data
    builder.addCase(getMe.fulfilled, (state, action) => {
      const { user, chats } = action.payload;
      state.currentUser = user;
      state.chats = chats;
      state.isLoggedIn = true;
    });
    builder.addCase(getMe.rejected, (state) => {
      cookie.remove("jwt");
      state.currentUser = null;
      state.chats = [];
      state.isLoggedIn = false;
    });
  },
  reducers: {
    logout: (state) => {
      cookie.remove("jwt");
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
