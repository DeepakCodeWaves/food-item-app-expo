import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';

export const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});
