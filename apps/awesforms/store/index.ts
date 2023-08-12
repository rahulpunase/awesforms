import { configureStore } from '@reduxjs/toolkit';
import BuilderReducer from '../pages/builder/store';

export const Store = configureStore({
  reducer: {
    builderReducer: BuilderReducer,
  },
});
export default Store;

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
