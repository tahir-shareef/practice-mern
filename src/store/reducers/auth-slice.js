import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../temp/chatsUsers";
import { register, login } from "../actions/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    currentUser: users[0],
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
    });
  },
});
export default authSlice.reducer;
