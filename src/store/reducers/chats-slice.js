import { createSlice } from "@reduxjs/toolkit";
import { conversation } from "../../temp/conversation";
import { users } from "../../temp/chatsUsers";
import { getMe, login, register } from "../actions/auth";

const chat = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    conversation: {
      messages: [],
      user: {},
    },
  },
  extraReducers: (builder) => {
    // Getting chats list for main view from the following fullfills
    builder.addCase(register.fulfilled, (state, action) => {
      const { chats } = action.payload.user;
      state.chats = chats;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { chats } = action.payload.user;
      state.chats = chats;
    });

    builder.addCase(getMe.fulfilled, (state, action) => {
      const { chats } = action.payload.user;
      state.chats = chats;
    });
  },
  reducers: {
    getConevrsation(state, action) {
      const indexId = action.payload;
      state.conversation.messages = conversation[indexId];
      state.conversation.user = users[indexId];
    },
    sendMessage(state, action) {
      state.conversation.messages.push(action.payload);
    },
  },
});
export default chat.reducer;
export const { getConevrsation, sendMessage } = chat.actions;
