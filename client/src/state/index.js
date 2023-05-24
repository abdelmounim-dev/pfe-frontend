import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "6467775d146f69a080eee499",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
