import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import loadingReducer from '../features/shared/loadingSlice';
import chatReducer from '../features/chat/chatSlice';
import errorReducer from '../features/shared/errorSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    loading: loadingReducer,
    chat: chatReducer,
    error: errorReducer
  },
});
