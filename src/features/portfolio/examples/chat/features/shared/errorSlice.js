import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    showError: false,
  },
  reducers: {
    setError: (state, action) => {
        state.showError = action.payload
    }
  },
});

export const { setError } = errorSlice.actions;

export const selectError = state => state.error.showError;

export default errorSlice.reducer;