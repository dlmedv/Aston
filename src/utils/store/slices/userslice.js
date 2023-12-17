import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      return { ...action.payload };
    },
  },
});

export default userSlice.reducer;
export const { getUserInfo } = userSlice.actions;
