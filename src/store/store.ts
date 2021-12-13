import { createStore, combineReducers } from "redux";
import { reducer, searchReducer, statusReducer } from "./reducer";

const reducers = combineReducers({
  reducer,
  searchReducer,
  statusReducer,
});

const store = createStore(reducers);
export type RootState = ReturnType<typeof store.getState>;
export default store;
