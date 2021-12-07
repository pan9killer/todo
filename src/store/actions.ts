import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "./constants";

export const addNewItem = (payload: any) => ({ type: ADD_TODO, payload });
export const toggleItemStatus = (payload: any) => ({
  type: TOGGLE_STATUS,
  payload,
});
export const removeSelectedItem = (payload: any) => ({
  type: REMOVE_TODO,
  payload,
});
