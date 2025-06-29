import { createSlice } from "@reduxjs/toolkit";

export interface IUserSlice {
  accessToken: string;
  refreshToken: string;
}

const initalState: IUserSlice = {
  accessToken: "",
  refreshToken: "",
};

const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState: initalState,
  reducers: {
    setAccessToken: (state, action) => {
      return { ...state, accessToken: action.payload };
    },
    setRefreshToken: (state, action) => {
      return { ...state, accessToken: action.payload };
    },
  },
});

export default tokenSlice.reducer;
export const { setAccessToken, setRefreshToken } = tokenSlice.actions;
