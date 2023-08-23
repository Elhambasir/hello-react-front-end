// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from '../../features/greetings/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
export default store;
