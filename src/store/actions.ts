import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IMPORTANT,
  TOGGLE_DONE,
  SEARCH_DATA,
} from "./constants";

export const addNewItem = (payload: object) => ({ type: ADD_TODO, payload });
export const toggleImportant = (payload: number) => ({
  type: TOGGLE_IMPORTANT,
  payload,
});
export const toggleDone = (payload: number) => ({
  type: TOGGLE_DONE,
  payload,
});
export const removeSelectedItem = (payload: number) => ({
  type: REMOVE_TODO,
  payload,
});
export const searchData = (search: string) => ({
  type: SEARCH_DATA,
  search,
});
