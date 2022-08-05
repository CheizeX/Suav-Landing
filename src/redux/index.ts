import { configureStore, combineReducers } from '@reduxjs/toolkit';
import activeTabInState from './slices/ui/tabs/tabs';

export const store = configureStore({
  reducer: combineReducers({
    ui: activeTabInState,
  }),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
