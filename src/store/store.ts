import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/mesasgeSlice";
import tokenSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    message: messageSlice,
    token: tokenSlice,
  },
});

export default store;
