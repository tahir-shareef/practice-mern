import { createSlice } from "@reduxjs/toolkit";
import { conversation } from "../../temp/conversation";
import { users } from "../../temp/chatsUsers";

const chat = createSlice({
  name: "chat",
  initialState: {
    list: users,
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
  },
});
export default chat.reducer;
export const { getConevrsation, sendMessage } = chat.actions;
