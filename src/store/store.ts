import {
  configureStore,
  // getDefaultMiddleware
} from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// const middleware: any = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });
// console.log(middleware);

const store = configureStore({
  reducer: reducer,
  // middleware,
});

export default store;
