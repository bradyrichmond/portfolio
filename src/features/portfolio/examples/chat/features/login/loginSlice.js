import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    loginTime: null
  },
  reducers: {
    setUsername: (state, action) => {
        state.username = action.payload
    },
    setLoginTime: (state, action) => {
        state.loginTime = action.payload;
    }
  },
});

export const { setUsername, setLoginTime } = loginSlice.actions;

export const selectUsername = state => state.login.username;
export const selectLoginTime = state => state.login.loginTime;

export default loginSlice.reducer;