import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../temp/chatsUsers";
import { register, login, getMe } from "../actions/auth";
import cookie from "react-cookies";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: cookie.load("jwt") !== undefined,
    currentUser: users[0],
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.currentUser = user;
      cookie.save("jwt", token, {
        path: "/",
      });
      state.isLoggedIn = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.currentUser = user;
      cookie.save("jwt", token, {
        path: "/",
      });
      state.isLoggedIn = true;
    });

    // getting user's data
    builder.addCase(getMe.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.currentUser = user;
      state.isLoggedIn = true;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.currentUser = null;
      cookie.remove("jwt");
      state.isLoggedIn = false;
    });
  },
  reducers: {
    logout: (state) => {
      cookie.remove("jwt");
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
