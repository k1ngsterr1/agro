import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShown: false,
  },
  reducers: {
    toggleOnModal: (state) => {
      state.isShown = true;
    },
    toggleOffModal: (state) => {
      state.isShown = false;
    },
  },
});

export const { toggleOnModal, toggleOffModal } = modalSlice.actions;
export default modalSlice.reducer;
