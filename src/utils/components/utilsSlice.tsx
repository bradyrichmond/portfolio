import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React, { FC } from 'react';

interface utilsState {
    modalComponent: FC;
    showModal: boolean;
}

let Empty = () => {
    return <div />;
}

const initialState: utilsState = {
    modalComponent: Empty,
    showModal: false
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<FC>) => {
      state.showModal = true;
      state.modalComponent = action.payload;
    },
    hideModal: (state, action: PayloadAction<null>) => {
      state.showModal = false;
      state.modalComponent = Empty;
    }
  },
});

export const { showModal, hideModal } = utilsSlice.actions;

export const selectShowModal = (state: utilsState) => state.showModal;
export const selectModalComponent = (state: utilsState) => state.modalComponent;

export default utilsSlice.reducer;
