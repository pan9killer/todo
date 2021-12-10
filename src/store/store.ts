// import {  getDefaultMiddleware } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { reducer, searchReducer } from "./reducer";

// const middleware = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });

const reducers = combineReducers({
  reducer,
  searchReducer,
});

const store = createStore(reducers);
export type RootState = ReturnType<typeof store.getState>;
export default store;
