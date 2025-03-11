import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './feature/example/exampleSlice'

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
