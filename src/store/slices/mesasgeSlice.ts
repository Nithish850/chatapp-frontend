import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: [
      { user: 0, message: "Hello! How can I help you today?" },
      //   { user: 1, message: "Hi! I need some help with my order." },
      //   { user: 0, message: "Sure! Can you share your order ID?" },
      //   { user: 1, message: "Yeah, it's #123456." },
      //   { user: 0, message: "Thanks! Let me check that for you." },
      //   { user: 0, message: "Hello! How can I help you today?" },
      //   { user: 1, message: "Hi! I need some help with my order." },
      //   { user: 0, message: "Sure! Can you share your order ID?" },
      //   { user: 1, message: "Yeah, it's #123456." },
      //   { user: 0, message: "Thanks! Let me check that for you." },
      //   { user: 0, message: "Hello! How can I help you today?" },
      //   { user: 1, message: "Hi! I need some help with my order." },
      //   { user: 0, message: "Sure! Can you share your order ID?" },
      //   { user: 1, message: "Yeah, it's #123456." },
      //   { user: 0, message: "Thanks! Let me check that for you." },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export default messageSlice.reducer;
export const { addMessage } = messageSlice.actions;
