import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface utilsState {
    showModal: boolean;
}

const initialState: utilsState = {
    showModal: false
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    }
  },
});

export const { showModal, hideModal } = utilsSlice.actions;

export const selectShowModal = (state: utilsState) => state.showModal;

export default utilsSlice.reducer;
