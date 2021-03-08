import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import notesReducer from '../features/portfolio/examples/notes/notesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
