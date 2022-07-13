import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
export const { login } = authSlice.actions;
