import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../temp/chatsUsers";
import { register, login } from "../actions/auth";
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
  },
  reducers: {
    logout: (state, action) => {
      cookie.remove("jwt");
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
