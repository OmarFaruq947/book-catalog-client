import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./Fetures/dataFilterSlice";
import { booksApi } from "./api/apiSlice";
// ...

export const store = configureStore({
  reducer: {
    book: bookSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
