import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import bottomTabReducer from './bottom/bottomTabSlice'
import themeReducer from './theme/themeSlice'
import fontReducer from './font/fontSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bottomTab: bottomTabReducer,
    theme : themeReducer,
    font : fontReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch