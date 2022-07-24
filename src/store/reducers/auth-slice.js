import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../temp/chatsUsers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    currentUser: users[0]
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
export const { login } = authSlice.actions;
