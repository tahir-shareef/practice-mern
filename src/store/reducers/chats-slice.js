import { createSlice } from "@reduxjs/toolkit";
import { conversation } from "../../temp/conversation";
import { users } from "../../temp/chatsUsers";

const chat = createSlice({
  name: "chat",
  initialState: {
    conversation: {
      messages: [],
      user: {},
    },
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
    getChatUserFromLocal(state, action) {
      const searchUserId = action.payload.id;
      const chatuser = state.list.find((user) => user._id === searchUserId);
      state.conversation.user = chatuser;
    },
  },
});
export default chat.reducer;
export const { getConevrsation, sendMessage, getChatUserFromLocal } =
  chat.actions;
